# Appdata — dataset repository & configuration

This repository carries the heavy data of the AppDeck apps, keyed by app id:

```
study/        data_raw/*.json       raw geoBoundaries ADM2 downloads (StudyHub's
                                     district-map build input; dev-side only)
mythology/    data.zip + index.json verse JSON (Itihasas) — bootstrapped on first start
              audio/<epic>/*.zip    recited-audio archives (on-demand download)
vedic/        data.zip + index.json stotra/tarot JSON + audio catalogs — bootstrapped
              audio/*.zip           recited-audio archives (on-demand download)
devops-dojo/  vendor/**             offline pyodide + js-yaml runtime libraries
investment/   countries/*.js        per-country reference DBs (InvestmentExplorer's
                                     window.COUNTRY_DB layer; fetch+eval from the
                                     app's Country-DB source switch — no bootstrap)
```

`tools/genmanifest` regenerates each `index.json` (and with `-zip`, the
`data.zip`) after data changes:

```
go run ./tools/genmanifest -root . -app vedic -zip
```

Audio archives keep their own catalog system (`<app>/data/**/audio/index.json`
with `githubBase` / `driveRootId`, `.partN` splits for anything over 90 MB —
see README-upload.md); `genmanifest` never touches them.

## Changing where an app gets its data

No buttons, no rebuilds: each app reads its dataset location from a plain
JSON file it already loads. Edit ONE field and restart the app.

| app | file (after first start it lives under the app's writable data dir, `$APPDECK_DATA` on AppDeck decks) | field |
|---|---|---|
| vedic | `data/audio/index.json` | `"datasetRepo"` |
| mythology | `data/dataset.json` | `"datasetRepo"` |
| devops-dojo | `dataset.json` (app folder) | `"repoBase"` |
| study | — (data is embedded in the binary; the converter's `-repo` flag only) | — |

Example — keep vedic on the default but take mythology from a private repo:

```json
// mythology: data/dataset.json
{
  "datasetRepo": "https://github.com/myclient/their-appdata",
  "token": "github_pat_…"
}
```

Environment overrides (beat any file): `VEDIC_DATA_URL` / `MYTHOLOGY_DATA_URL`
and `…_DATA_TOKEN`. The study converter honors `GITHUB_TOKEN` for `-download`.

## Accepted URL forms

Every form below normalizes to the same target — pick whichever you prefer:

```
https://github.com/4ppd3ck/Appdata              ← preferred
https://github.com/4ppd3ck/Appdata.git
https://github.com/4ppd3ck/Appdata/tree/main
https://github.com/4ppd3ck/Appdata/vedic        ← trailing own app id is fine (consumed)
https://github.com/o/r/tree/dev/sub/vedic       ← ref + subpath + own id
git@github.com:4ppd3ck/Appdata                  ← SSH-flavored (desktop only)
https://any.mirror.example/prefix               ← any other https host, used verbatim
```

A trailing id naming a DIFFERENT app (`…/Appdata/mythology` pasted into vedic)
is rejected with a named error, not a mystery 404.

## Private repositories — token or machine login

- **Token**: put a GitHub fine-grained PAT (Contents: read, that repo only)
  in the `"token"` field — it is sent as `Authorization: Bearer …` on every
  raw download. CDN speed, no git needed. Works from every platform,
  including the Android/iOS ports (they use raw+token only).
- **Already logged in on the machine** (gh CLI or git credential helper):
  leave the token empty. When the anonymous download is refused, the app
  retries through `git` — HTTPS with your stored credentials first, then an
  automatic switch to SSH (`git@github.com:…`) if that is what works. The
  clone happens in a temp directory that is always deleted afterwards; no
  credentials are ever written by the apps.

Tokens are secrets: the config files live inside the app's own writable
directory (desktop: `chmod 600`), never inside any repository.

## Platform notes

- Desktop (macOS / Windows / Linux, any arch): full transport ladder —
  raw+token → anonymous raw → git HTTPS (machine credentials) → git SSH.
- Android (APK) / iOS: raw+token and anonymous raw only — no git binary
  involved; the catalog fields are identical.
- Audio downloads are unchanged for every platform: Drive first when
  `driveKey` is set, this repository's raw URLs as fallback.

## When the old Audio repository goes away

The apps' audio catalogs (`vedic/data/audio/index.json`,
`mythology/data/<epic>/audio/index.json`) point at
`raw.githubusercontent.com/4ppd3ck/Appdata/main/<app>/audio` already. The
legacy `4ppd3ck/Audio` repository remains only for the existing APK builds;
once they are updated it can be deleted — nothing here depends on it.
