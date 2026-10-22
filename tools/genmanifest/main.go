// genmanifest — catalogs an app's dataset folder in the Appdata repo.
//
// Walks <root>/<appid>/ (skipping audio/, text/, index.json and dot-files), records
// each file's size and sha256 into index.json, and optionally packs the same
// files into data.zip for one-shot first-start bootstrap:
//
//	go run ./tools/genmanifest -root . -app vedic -repo https://github.com/4ppd3ck/Appdata -zip
//
// index.json is the contract the apps read: repoBase names where this dataset
// lives (editable by hand — see CONFIG.md), files lists every payload file so
// partial installs can be verified, and zip carries the whole-archive hash.
// audio/ is deliberately excluded: audio ships as its own per-catalog archive
// system (index.json with githubBase/driveRootId, .partN splits) that the
// audio downloaders consume directly.
package main

import (
	"archive/zip"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"sort"
	"strings"
)

type fileEntry struct {
	Path   string `json:"path"`
	Size   int64  `json:"size"`
	Sha256 string `json:"sha256"`
}

type manifest struct {
	RepoBase string      `json:"repoBase"`
	App      string      `json:"app"`
	Zip      *zipEntry   `json:"zip,omitempty"`
	Files    []fileEntry `json:"files"`
}

type zipEntry struct {
	File   string `json:"file"`
	Sha256 string `json:"sha256"`
	Bytes  int64  `json:"bytes"`
	Files  int    `json:"files"`
}

const defaultRepoBase = "https://github.com/4ppd3ck/Appdata"

func sha256File(path string) (string, int64, error) {
	f, err := os.Open(path)
	if err != nil {
		return "", 0, err
	}
	defer f.Close()
	h := sha256.New()
	n, err := io.Copy(h, f)
	if err != nil {
		return "", 0, err
	}
	return hex.EncodeToString(h.Sum(nil)), n, nil
}

func main() {
	root := flag.String("root", ".", "Appdata repo root")
	app := flag.String("app", "", "app id folder to catalog (required)")
	repo := flag.String("repo", defaultRepoBase, "repoBase recorded in index.json")
	makeZip := flag.Bool("zip", false, "also pack the files into data.zip")
	flag.Parse()
	if *app == "" {
		fmt.Fprintln(os.Stderr, "genmanifest: -app is required")
		os.Exit(1)
	}

	dir := filepath.Join(*root, *app)
	var files []fileEntry
	err := filepath.WalkDir(dir, func(path string, d os.DirEntry, err error) error {
		if err != nil {
			return err
		}
		rel, err := filepath.Rel(dir, path)
		if err != nil {
			return err
		}
		if rel == "." {
			return nil
		}
		name := filepath.ToSlash(rel)
		if d.IsDir() {
			// audio/ holds the per-catalog audio archives (their own
			// index.json + .partN system) and text/ the per-section text
			// packs — hosting trees, never part of the data manifest.
			if strings.EqualFold(name, "audio") || strings.EqualFold(name, "text") || strings.HasPrefix(name, ".") {
				return filepath.SkipDir
			}
			return nil
		}
		// index.json and data.zip are this tool's own outputs — a previous
		// run's zip must never land inside its own successor.
		if d.Type().IsRegular() == false || name == "index.json" || name == "data.zip" || strings.HasPrefix(filepath.Base(name), ".") {
			return nil
		}
		sum, size, err := sha256File(path)
		if err != nil {
			return err
		}
		files = append(files, fileEntry{Path: name, Size: size, Sha256: sum})
		return nil
	})
	if err != nil {
		fmt.Fprintln(os.Stderr, "genmanifest:", err)
		os.Exit(1)
	}
	sort.Slice(files, func(i, j int) bool { return files[i].Path < files[j].Path })

	m := manifest{RepoBase: *repo, App: *app, Files: files}

	if *makeZip {
		zipPath := filepath.Join(dir, "data.zip")
		zf, err := os.Create(zipPath)
		if err != nil {
			fmt.Fprintln(os.Stderr, "genmanifest:", err)
			os.Exit(1)
		}
		zw := zip.NewWriter(zf)
		for _, fe := range files {
			src, err := os.Open(filepath.Join(dir, filepath.FromSlash(fe.Path)))
			if err != nil {
				zf.Close()
				fmt.Fprintln(os.Stderr, "genmanifest:", err)
				os.Exit(1)
			}
			w, err := zw.CreateHeader(&zip.FileHeader{Name: fe.Path, Method: zip.Deflate})
			if err != nil {
				src.Close()
				zf.Close()
				fmt.Fprintln(os.Stderr, "genmanifest:", err)
				os.Exit(1)
			}
			if _, err := io.Copy(w, src); err != nil {
				src.Close()
				zf.Close()
				fmt.Fprintln(os.Stderr, "genmanifest:", err)
				os.Exit(1)
			}
			src.Close()
		}
		if err := zw.Close(); err != nil {
			zf.Close()
			fmt.Fprintln(os.Stderr, "genmanifest:", err)
			os.Exit(1)
		}
		if err := zf.Close(); err != nil {
			fmt.Fprintln(os.Stderr, "genmanifest:", err)
			os.Exit(1)
		}
		sum, size, err := sha256File(zipPath)
		if err != nil {
			fmt.Fprintln(os.Stderr, "genmanifest:", err)
			os.Exit(1)
		}
		m.Zip = &zipEntry{File: "data.zip", Sha256: sum, Bytes: size, Files: len(files)}
	}

	out, err := json.MarshalIndent(&m, "", "  ")
	if err != nil {
		fmt.Fprintln(os.Stderr, "genmanifest:", err)
		os.Exit(1)
	}
	if err := os.WriteFile(filepath.Join(dir, "index.json"), append(out, '\n'), 0o644); err != nil {
		fmt.Fprintln(os.Stderr, "genmanifest:", err)
		os.Exit(1)
	}
	zipNote := "no zip"
	if m.Zip != nil {
		zipNote = fmt.Sprintf("data.zip %d bytes", m.Zip.Bytes)
	}
	fmt.Printf("genmanifest: %s — %d files, %s\n", *app, len(files), zipNote)
}
