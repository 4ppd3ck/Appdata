/* ================================================================
   COUNTRY DATABASE — Canada (investment market reference)
   Part of database/countries/ — loaded by index.html before app.js.
   Exchange codes follow Google Finance (TSX, TSXV).
   Sectors follow GICS (11 canonical sectors).
   ================================================================ */
window.COUNTRY_DB = window.COUNTRY_DB || {};
window.COUNTRY_DB["Canada"] = {
  version: 2,
  updated: "2026-10-24",
  meta: {
   "iso2": "CA",
   "iso3": "CAN",
   "currency": "CAD",
   "currencySymbol": "$",
   "regulator": "CIRO + provincial securities commissions (CSA)",
   "marketHours": "09:30–16:00 ET, Mon–Fri",
   "settlement": "T+1",
   "listedCompanies": "≈1,700 on TSX · ≈1,600 on TSXV",
   "marketCap": "≈$3.5–4 trillion on TSX (2026)",
   "description": "Resource- and bank-heavy market. Banks, energy and materials dominate the index; 2024–25 saw the TC Energy liquids spinoff (South Bow) and the pending Anglo Teck merger reshape the resource complex.",
   "isinPrefix": "CA"
  },
  exchanges: [
    {"code":"TSX","name":"Toronto Stock Exchange","city":"Toronto","founded":1861,"note":"Senior equities market; owned by TMX Group. Home of the S&P/TSX indices."},
    {"code":"TSXV","name":"TSX Venture Exchange","city":"Toronto","founded":1999,"note":"Junior market; mining and early-stage issuers dominate."},
    {"code":"CSE","name":"Canadian Securities Exchange","city":"Toronto","founded":2003,"note":"Alternative small-cap exchange."},
    {"code":"CBOE CA","name":"Cboe Canada (formerly NEO)","city":"Toronto","founded":2015,"note":"Equity venue acquired and rebranded by Cboe in 2023."}
  ],
  indices: [
    {"symbol":"^GSPTSE","name":"S&P/TSX Composite Index","exchange":"TSX","provider":"S&P DJI","constituents":220,"launched":1977,"note":"Broad Canadian benchmark; ~220 constituents."},
    {"symbol":"^TX60","name":"S&P/TSX 60","exchange":"TSX","provider":"S&P DJI","constituents":60,"launched":1998,"note":"Large-cap benchmark; the Canadian blue-chip index."},
    {"symbol":"^TXCT","name":"S&P/TSX Completion Index","exchange":"TSX","provider":"S&P DJI","constituents":160,"launched":2005,"note":"Composite ex-60; mid/small caps."},
    {"symbol":"^TXSC","name":"S&P/TSX SmallCap Index","exchange":"TSX","provider":"S&P DJI","constituents":100,"launched":2004,"note":"Small-cap segment benchmark."},
    {"symbol":"^JX","name":"S&P/TSX Venture Composite","exchange":"TSXV","provider":"S&P DJI","constituents":300,"launched":2002,"note":"Venture-market benchmark."}
  ],
  sectors: ["Energy","Materials","Industrials","Consumer Discretionary","Consumer Staples","Health Care","Financials","Information Technology","Communication Services","Utilities","Real Estate"],
  companies: [
    {"id":"ca-royal-bank-of-canada","name":"Royal Bank of Canada","ticker":"RY","exchange":"TSX","sector":"Financials","industry":"Diversified Banks","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","note":"Largest Canadian bank and largest TSX company by market cap.","founded":1864},
    {"id":"ca-toronto-dominion","name":"TD Bank Group","ticker":"TD","exchange":"TSX","sector":"Financials","industry":"Diversified Banks","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","note":"US retail-heavy balance sheet; asset-cap issues resolved 2025.","founded":1855},
    {"id":"ca-bank-of-nova-scotia","name":"Bank of Nova Scotia (Scotiabank)","ticker":"BNS","exchange":"TSX","sector":"Financials","industry":"Diversified Banks","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","note":"Pacific-Alliance focused international bank.","founded":1832},
    {"id":"ca-bmo","name":"Bank of Montreal","ticker":"BMO","exchange":"TSX","sector":"Financials","industry":"Diversified Banks","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Montreal / Toronto","note":"Oldest Canadian bank (1817); big US Midwest commercial book (Bank of the West).","founded":1817},
    {"id":"ca-cibc","name":"Canadian Imperial Bank of Commerce (CIBC)","ticker":"CM","exchange":"TSX","sector":"Financials","industry":"Diversified Banks","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","note":"Domestic retail and US commercial bank.","founded":1867},
    {"id":"ca-national-bank","name":"National Bank of Canada","ticker":"NA","exchange":"TSX","sector":"Financials","industry":"Diversified Banks","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Montreal","note":"Quebec-based sixth bank; acquired Canadian Western Bank 2025.","founded":1859},
    {"id":"ca-brookfield-corp","name":"Brookfield Corporation","ticker":"BN","exchange":"TSX","sector":"Financials","industry":"Alternative Asset Management","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","note":"Parent of the Brookfield ecosystem — asset management, insurance, operating businesses.","founded":1899,"group":"Brookfield"},
    {"id":"ca-brookfield-asset-mgmt","name":"Brookfield Asset Management","ticker":"BAM","exchange":"TSX","sector":"Financials","industry":"Alternative Asset Management","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"New York","note":"Fee-focused manager spun off 2022; redomiciled to the US, still TSX-listed.","founded":2022,"group":"Brookfield"},
    {"id":"ca-brookfield-infra","name":"Brookfield Infrastructure Partners","ticker":"BIP.UN","exchange":"TSX","sector":"Financials","industry":"Infrastructure LP","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","note":"Utilities, transport and midstream partnership (NYSE: BIP).","founded":2008,"group":"Brookfield"},
    {"id":"ca-brookfield-renewable","name":"Brookfield Renewable Partners","ticker":"BEP.UN","exchange":"TSX","sector":"Financials","industry":"Renewables LP","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"Global hydro, wind and solar fleet (corporate twin BEPC).","founded":2011,"group":"Brookfield"},
    {"id":"ca-brookfield-business","name":"Brookfield Business Partners","ticker":"BBU.UN","exchange":"TSX","sector":"Financials","industry":"Business Services LP","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"Take-private vehicle for services and industrial companies (NYSE: BBU).","founded":2015,"group":"Brookfield"},
    {"id":"ca-power-corp","name":"Power Corporation of Canada","ticker":"POW","exchange":"TSX","sector":"Financials","industry":"Holding Company","indices":["S&P/TSX Composite"],"hq":"Montreal","note":"Desmarais-family holding: Power Financial, Great-West, IGM, Sagard.","founded":1925,"group":"Desmarais Family"},
    {"id":"ca-power-financial","name":"Power Financial Corp","ticker":"PWF","exchange":"TSX","sector":"Financials","industry":"Holding Company","indices":["S&P/TSX Composite"],"hq":"Montreal","note":"Interposed holding for Great-West Lifeco and IGM Financial.","founded":1983,"group":"Desmarais Family"},
    {"id":"ca-great-west-lifeco","name":"Great-West Lifeco","ticker":"GWO","exchange":"TSX","sector":"Financials","industry":"Life Insurance","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Winnipeg","note":"Canada Life parent; Empower (US retirement) is the growth engine.","founded":1847,"group":"Power Corp"},
    {"id":"ca-igm-financial","name":"IGM Financial","ticker":"IGM","exchange":"TSX","sector":"Financials","industry":"Wealth & Asset Management","indices":["S&P/TSX Composite"],"hq":"Winnipeg","note":"Investors Group advice force plus Mackenzie Investments.","founded":1926,"group":"Power Corp"},
    {"id":"ca-manulife","name":"Manulife Financial","ticker":"MFC","exchange":"TSX","sector":"Financials","industry":"Life Insurance","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","note":"Asia-heavy insurer; John Hancock in the US.","founded":1887},
    {"id":"ca-sun-life","name":"Sun Life Financial","ticker":"SLF","exchange":"TSX","sector":"Financials","industry":"Life Insurance","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","note":"Asia and asset-management growth story (MFS, BentallGreenOak).","founded":1865},
    {"id":"ca-intact","name":"Intact Financial","ticker":"IFC","exchange":"TSX","sector":"Financials","industry":"Property & Casualty Insurance","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","note":"Largest P&C insurer in Canada; RSA acquisition.","founded":1809},
    {"id":"ca-fairfax","name":"Fairfax Financial Holdings","ticker":"FFH","exchange":"TSX","sector":"Financials","industry":"P&C Insurance & Holdings","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"Prem Watsa-run insurer and investment holding complex.","founded":1985},
    {"id":"ca-enbridge","name":"Enbridge","ticker":"ENB","exchange":"TSX","sector":"Energy","industry":"Oil & Gas Midstream","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Calgary","note":"Largest midstream company; Mainline oil system plus big gas utilities.","founded":1949},
    {"id":"ca-tc-energy","name":"TC Energy","ticker":"TRP","exchange":"TSX","sector":"Energy","industry":"Oil & Gas Midstream","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Calgary","note":"Gas-pipeline major; liquids spun off as South Bow in Oct 2024.","founded":1951},
    {"id":"ca-south-bow","name":"South Bow","ticker":"SOBO","exchange":"TSX","sector":"Energy","industry":"Oil & Gas Midstream","indices":["S&P/TSX Composite"],"hq":"Calgary","note":"Keystone pipeline operator spun off from TC Energy 1 Oct 2024.","founded":2024,"formerNames":["TC Energy liquids business"]},
    {"id":"ca-canadian-natural","name":"Canadian Natural Resources","ticker":"CNQ","exchange":"TSX","sector":"Energy","industry":"Oil & Gas E&P","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Calgary","note":"Largest Canadian heavy-oil producer; Chevron Canada assets bought 2024.","founded":1973},
    {"id":"ca-suncor","name":"Suncor Energy","ticker":"SU","exchange":"TSX","sector":"Energy","industry":"Integrated Oil & Gas","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Calgary","note":"Oil Sands leader — upstream plus Petro-Canada retail.","founded":1917},
    {"id":"ca-imperial-oil","name":"Imperial Oil","ticker":"IMO","exchange":"TSX","sector":"Energy","industry":"Integrated Oil & Gas","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Calgary","note":"ExxonMobil-controlled integrated; Kearl and Cold Lake.","founded":1880,"group":"ExxonMobil"},
    {"id":"ca-tourmaline","name":"Tourmaline Oil","ticker":"TOU","exchange":"TSX","sector":"Energy","industry":"Natural Gas E&P","indices":["S&P/TSX Composite"],"hq":"Calgary","note":"Largest Canadian gas producer; LNG Canada offtake winner."},
    {"id":"ca-cenovus","name":"Cenovus Energy","ticker":"CVE","exchange":"TSX","sector":"Energy","industry":"Integrated Oil & Gas","indices":["S&P/TSX Composite"],"hq":"Calgary","note":"Oil-sands producer with US refining after the 2021 Husky merger."},
    {"id":"ca-whitecap","name":"Whitecap Resources","ticker":"WCP","exchange":"TSX","sector":"Energy","industry":"Oil & Gas E&P","indices":["S&P/TSX Composite"],"hq":"Calgary","note":"Merged with Veren (ex-Crescent Point) in March 2025."},
    {"id":"ca-parex","name":"Parex Resources","ticker":"PXT","exchange":"TSX","sector":"Energy","industry":"Oil & Gas E&P","indices":["S&P/TSX Composite"],"hq":"Calgary","note":"Colombia-focused light-oil producer."},
    {"id":"ca-arc-resources","name":"ARC Resources","ticker":"ARX","exchange":"TSX","sector":"Energy","industry":"Natural Gas E&P","indices":["S&P/TSX Composite"],"hq":"Calgary","note":"Montney gas and liquids producer with LNG-linked contracts."},
    {"id":"ca-athabasca","name":"Athabasca Oil","ticker":"ATH","exchange":"TSX","sector":"Energy","industry":"Oil & Gas E&P","indices":[],"hq":"Calgary","note":"Duvernay and oil-sands producer."},
    {"id":"ca-baytex","name":"Baytex Energy","ticker":"BTE","exchange":"TSX","sector":"Energy","industry":"Oil & Gas E&P","indices":[],"hq":"Calgary","note":"Eagle Ford and Canadian heavy oil."},
    {"id":"ca-pembina","name":"Pembina Pipeline","ticker":"PPL","exchange":"TSX","sector":"Energy","industry":"Oil & Gas Midstream","indices":["S&P/TSX Composite"],"hq":"Calgary","note":"NGL-focused pipelines and fractionation; Alliance Pipeline."},
    {"id":"ca-agnico-eagle","name":"Agnico Eagle Mines","ticker":"AEM","exchange":"TSX","sector":"Materials","industry":"Gold","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","note":"Largest Canadian gold miner; low-risk jurisdiction focus.","founded":1957},
    {"id":"ca-barrick-mining","name":"Barrick Mining","ticker":"ABX","exchange":"TSX","sector":"Materials","industry":"Gold & Copper","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","note":"Renamed from Barrick Gold May 2025; NYSE ticker now B, TSX stays ABX.","founded":1983,"formerNames":["Barrick Gold"]},
    {"id":"ca-wheaton","name":"Wheaton Precious Metals","ticker":"WPM","exchange":"TSX","sector":"Materials","industry":"Precious Metals Streaming","indices":["S&P/TSX Composite"],"hq":"Vancouver","note":"Largest streaming company; gold and silver streams.","founded":2004,"formerNames":["Silver Wheaton"]},
    {"id":"ca-franco-nevada","name":"Franco-Nevada","ticker":"FNV","exchange":"TSX","sector":"Materials","industry":"Royalty & Streaming","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"Gold-focused royalty and streaming pioneer.","founded":2007},
    {"id":"ca-teck","name":"Teck Resources","ticker":"TECK.B","exchange":"TSX","sector":"Materials","industry":"Copper & Zinc","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Vancouver","note":"Sold coal (EVR) 2023; Anglo American merger pending — expected by Mar 2027.","founded":1913,"formerNames":["Teck Cominco"]},
    {"id":"ca-cameco","name":"Cameco","ticker":"CCO","exchange":"TSX","sector":"Materials","industry":"Uranium","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Saskatoon","note":"Largest western uranium producer; 49% of Westinghouse.","founded":1988},
    {"id":"ca-first-quantum","name":"First Quantum Minerals","ticker":"FM","exchange":"TSX","sector":"Materials","industry":"Copper","indices":["S&P/TSX Composite"],"hq":"Vancouver","note":"Cobre Panama suspended since 2023; Zambian copper core.","founded":1983},
    {"id":"ca-lundin-mining","name":"Lundin Mining","ticker":"LUN","exchange":"TSX","sector":"Materials","industry":"Diversified Metals","indices":["S&P/TSX Composite"],"hq":"Vancouver","note":"Copper-focused; Vicuña JV (Filo del Sol) with BHP.","founded":1927},
    {"id":"ca-iamgold","name":"IAMGOLD","ticker":"IMG","exchange":"TSX","sector":"Materials","industry":"Gold","indices":[],"hq":"Toronto","note":"Essakane and Côté Gold (with Sumitomo)."},
    {"id":"ca-kinross","name":"Kinross Gold","ticker":"K","exchange":"TSX","sector":"Materials","industry":"Gold","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"Americas-focused after Russian exit."},
    {"id":"ca-nutrien","name":"Nutrien","ticker":"NTR","exchange":"TSX","sector":"Materials","industry":"Fertilizers (Potash)","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Saskatoon","note":"World largest potash producer plus retail (Nutrien Ag Solutions).","founded":2018,"formerNames":["PotashCorp + Agrium merger"]},
    {"id":"ca-canadian-national","name":"Canadian National Railway","ticker":"CNR","exchange":"TSX","sector":"Industrials","industry":"Railroads","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Montreal","note":"Only railroad spanning three coasts; network monopoly economics.","founded":1919},
    {"id":"ca-cpkc","name":"Canadian Pacific Kansas City","ticker":"CP","exchange":"TSX","sector":"Industrials","industry":"Railroads","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Calgary","note":"First single-line Canada–Mexico railroad (KCS merger 2021–23).","founded":1881},
    {"id":"ca-tfi-international","name":"TFI International","ticker":"TFII","exchange":"TSX","sector":"Industrials","industry":"Freight & Logistics","indices":["S&P/TSX Composite"],"hq":"Saint-Laurent, QC","note":"Trucking and logistics consolidator (UPS Freight bought 2021).","founded":1978},
    {"id":"ca-air-canada","name":"Air Canada","ticker":"AC","exchange":"TSX","sector":"Industrials","industry":"Passenger Airlines","indices":["S&P/TSX Composite"],"hq":"Montreal","note":"Flag carrier and largest Canadian airline.","founded":1937},
    {"id":"ca-cae","name":"CAE","ticker":"CAE","exchange":"TSX","sector":"Industrials","industry":"Aerospace & Training","indices":["S&P/TSX Composite"],"hq":"Montreal","note":"World leader in flight simulation and civil-aviation training.","founded":1947},
    {"id":"ca-bombardier","name":"Bombardier","ticker":"BBD.B","exchange":"TSX","sector":"Industrials","industry":"Business Jets","indices":["S&P/TSX Composite"],"hq":"Montreal","note":"Pure-play business-jet maker after rail and Airbus exits.","founded":1942},
    {"id":"ca-wsp-global","name":"WSP Global","ticker":"WSP","exchange":"TSX","sector":"Industrials","industry":"Engineering & Consulting","indices":["S&P/TSX Composite"],"hq":"Montreal","note":"Global professional-services firm; environmental and infrastructure design.","founded":1959},
    {"id":"ca-stantec","name":"Stantec","ticker":"STN","exchange":"TSX","sector":"Industrials","industry":"Engineering & Consulting","indices":["S&P/TSX Composite"],"hq":"Edmonton","note":"Design and engineering; water and energy transition exposure.","founded":1954},
    {"id":"ca-waste-connections","name":"Waste Connections","ticker":"WCN","exchange":"TSX","sector":"Industrials","industry":"Waste Management","indices":["S&P/TSX Composite"],"hq":"Woodbridge, ON","note":"Canadian-domiciled, US-focused solid-waste third-largest in North America.","founded":1997},
    {"id":"ca-restaurant-brands","name":"Restaurant Brands International","ticker":"QSR","exchange":"TSX","sector":"Consumer Discretionary","industry":"Restaurants","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","note":"Burger King, Tim Hortons, Popeyes, Firehouse Subs."},
    {"id":"ca-brp","name":"BRP (Bombardier Recreational Products)","ticker":"DOO","exchange":"TSX","sector":"Consumer Discretionary","industry":"Leisure Vehicles","indices":["S&P/TSX Composite"],"hq":"Valcourt, QC","note":"Ski-Doo and Sea-Doo maker."},
    {"id":"ca-canadian-tire","name":"Canadian Tire","ticker":"CTC.A","exchange":"TSX","sector":"Consumer Discretionary","industry":"Specialty Retail","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"Iconic general retailer; converted to holding structure 2025."},
    {"id":"ca-canada-goose","name":"Canada Goose Holdings","ticker":"GOOS","exchange":"TSX","sector":"Consumer Discretionary","industry":"Apparel (Luxury)","indices":[],"hq":"Toronto","note":"Premium outerwear brand."},
    {"id":"ca-loblaw","name":"Loblaw Companies","ticker":"L","exchange":"TSX","sector":"Consumer Staples","industry":"Food & Drug Retail","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Brampton, ON","note":"Largest Canadian grocer; Shoppers Drug Mart plus banking.","founded":1919,"group":"Weston Family"},
    {"id":"ca-george-weston","name":"George Weston Limited","ticker":"WN","exchange":"TSX","sector":"Consumer Staples","industry":"Holding (Food & Retail)","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"Controls Loblaw and (majority) Choice Properties.","founded":1882,"group":"Weston Family"},
    {"id":"ca-metro","name":"Metro Inc","ticker":"MRU","exchange":"TSX","sector":"Consumer Staples","industry":"Food Retail","indices":["S&P/TSX Composite"],"hq":"Montreal","note":"Quebec grocer with Jean Coutu pharmacies.","founded":1947},
    {"id":"ca-couche-tard","name":"Alimentation Couche-Tard","ticker":"ATD","exchange":"TSX","sector":"Consumer Staples","industry":"Convenience Retail","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Laval, QC","note":"Circle K parent — global convenience-store giant.","founded":1961},
    {"id":"ca-empire","name":"Empire Company","ticker":"EMP.A","exchange":"TSX","sector":"Consumer Staples","industry":"Food Retail","indices":["S&P/TSX Composite"],"hq":"Stellarton, NS","note":"Sobeys and Safeway Canada grocer; Sobey-family controlled.","founded":1907,"group":"Sobey Family"},
    {"id":"ca-well-health","name":"WELL Health Technologies","ticker":"WELL","exchange":"TSX","sector":"Health Care","industry":"Digital Health","indices":[],"hq":"Vancouver","note":"Primary-care clinic network plus digital patient engagement apps."},
    {"id":"ca-knight-therapeutics","name":"Knight Therapeutics","ticker":"GMP","exchange":"TSX","sector":"Health Care","industry":"Specialty Pharma","indices":[],"hq":"Montreal","note":"Canadian and Latin-American pharma distributor."},
    {"id":"ca-viemed","name":"Viemed Healthcare","ticker":"VMD","exchange":"TSX","sector":"Health Care","industry":"Home Medical Equipment","indices":[],"hq":"Lafayette, LA (TSX-listed)","note":"Ventilator and respiratory home care; dual TSX/Nasdaq listing."},
    {"id":"ca-bausch-health","name":"Bausch Health Companies","ticker":"BHC","exchange":"TSX","sector":"Health Care","industry":"Pharmaceuticals","indices":[],"hq":"Laval, QC","note":"Heavily levered; majority stake in Bausch + Lomb (separately listed).","founded":1977,"formerNames":["Valeant Pharmaceuticals"]},
    {"id":"ca-shopify","name":"Shopify","ticker":"SHOP","exchange":"TSX","sector":"Information Technology","industry":"E-commerce Software","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Ottawa","note":"Largest Canadian tech company; commerce operating system.","founded":2006},
    {"id":"ca-constellation","name":"Constellation Software","ticker":"CSU","exchange":"TSX","sector":"Information Technology","industry":"Vertical-Market Software","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"Legendary serial acquirer of niche software businesses.","founded":1995},
    {"id":"ca-cgi","name":"CGI Inc","ticker":"GIB.A","exchange":"TSX","sector":"Information Technology","industry":"IT Services & Consulting","indices":["S&P/TSX Composite"],"hq":"Montreal","note":"Global IT consulting; federal and European government contracts.","founded":1976},
    {"id":"ca-opentext","name":"Open Text","ticker":"OTEX","exchange":"TSX","sector":"Information Technology","industry":"Enterprise Software","indices":["S&P/TSX Composite"],"hq":"Waterloo, ON","note":"Information-management software; Micro Focus acquisition 2023.","founded":1982},
    {"id":"ca-descartes","name":"Descartes Systems Group","ticker":"DSG","exchange":"TSX","sector":"Information Technology","industry":"Logistics Software","indices":["S&P/TSX Composite"],"hq":"Waterloo, ON","note":"Customs and logistics network software."},
    {"id":"ca-bce","name":"BCE Inc","ticker":"BCE","exchange":"TSX","sector":"Communication Services","industry":"Telecom","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Montreal","note":"Bell Canada telecom; high dividend, high debt; acquired Ziply Fiber 2025.","founded":1880},
    {"id":"ca-telus","name":"Telus Corp","ticker":"T","exchange":"TSX","sector":"Communication Services","industry":"Telecom","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Vancouver","note":"Western telco; Telus International (TIXT) digital arm.","founded":1990},
    {"id":"ca-rogers","name":"Rogers Communications","ticker":"RCI.B","exchange":"TSX","sector":"Communication Services","industry":"Telecom & Media","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","note":"Wireless and cable leader; bought Shaw 2023, owns sports assets.","founded":1960},
    {"id":"ca-quebecor","name":"Quebecor","ticker":"QBR.B","exchange":"TSX","sector":"Communication Services","industry":"Telecom & Media","indices":["S&P/TSX Composite"],"hq":"Montreal","note":"Videotron wireless plus TVA media.","founded":1965},
    {"id":"ca-cogeco","name":"Cogeco Communications","ticker":"CCA","exchange":"TSX","sector":"Communication Services","industry":"Cable & Internet","indices":[],"hq":"Montreal","note":"Ontario/Quebec cable plus US Breezeline."},
    {"id":"ca-fortis","name":"Fortis Inc","ticker":"FTS","exchange":"TSX","sector":"Utilities","industry":"Regulated Electric & Gas","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"St. John's, NL","note":"Diversified North-American regulated utility; 50+ years of dividend growth.","founded":1885},
    {"id":"ca-emera","name":"Emera","ticker":"EMA","exchange":"TSX","sector":"Utilities","industry":"Regulated Electric & Gas","indices":["S&P/TSX Composite"],"hq":"Halifax","note":"Nova Scotia Power parent plus Florida utilities (Tampa Electric).","founded":1998},
    {"id":"ca-algonquin","name":"Algonquin Power & Utilities","ticker":"AQN","exchange":"TSX","sector":"Utilities","industry":"Regulated Utility + Renewables","indices":["S&P/TSX Composite"],"hq":"Oakville, ON","note":"Sold US renewables 2025 to become pure regulated utility.","founded":1988},
    {"id":"ca-hydro-one","name":"Hydro One","ticker":"H","exchange":"TSX","sector":"Utilities","industry":"Electric Transmission","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"Ontario transmission and distribution monopoly.","founded":2005},
    {"id":"ca-capital-power","name":"Capital Power","ticker":"CPX","exchange":"TSX","sector":"Utilities","industry":"Power Generation","indices":["S&P/TSX Composite"],"hq":"Edmonton","note":"Natural-gas and wind generation across North America.","founded":2001},
    {"id":"ca-northland","name":"Northland Power","ticker":"NPI","exchange":"TSX","sector":"Utilities","industry":"Renewables IPP","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"Offshore wind developer (Taiwan, Europe).","founded":1987},
    {"id":"ca-riocan","name":"RioCan REIT","ticker":"REI.UN","exchange":"TSX","sector":"Real Estate","industry":"Retail REIT","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"Largest Canadian retail REIT; mixed-use redevelopment pipeline.","founded":1960},
    {"id":"ca-capreit","name":"Canadian Apartment Properties REIT","ticker":"CAR.UN","exchange":"TSX","sector":"Real Estate","industry":"Residential REIT","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"Largest Canadian apartment REIT; growing European portfolio.","founded":1998},
    {"id":"ca-granite","name":"Granite REIT","ticker":"GRT.UN","exchange":"TSX","sector":"Real Estate","industry":"Industrial REIT","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"North-American industrial portfolio; Magna spinoff origin.","founded":1957},
    {"id":"ca-allied","name":"Allied Properties REIT","ticker":"AP.UN","exchange":"TSX","sector":"Real Estate","industry":"Office REIT","indices":[],"hq":"Toronto","note":"Urban office for knowledge-based tenants."},
    {"id":"ca-choice-properties","name":"Choice Properties REIT","ticker":"CHP.UN","exchange":"TSX","sector":"Real Estate","industry":"Retail-Anchored REIT","indices":["S&P/TSX Composite"],"hq":"Toronto","note":"Loblaw-anchored REIT; George Weston controlled.","founded":2013,"group":"Weston Family / Loblaw"},
    {"id":"ca-smartcentres","name":"SmartCentres REIT","ticker":"SRU.UN","exchange":"TSX","sector":"Real Estate","industry":"Retail REIT","indices":[],"hq":"Vaughan, ON","note":"Walmart-anchored big-box portfolio; intensification plans."},
    {"id":"ca-dream-industrial","name":"Dream Industrial REIT","ticker":"DIR.UN","exchange":"TSX","sector":"Real Estate","industry":"Industrial REIT","indices":[],"hq":"Toronto","note":"Canadian and European logistics real estate."},
    {"id":"ca-ia-financial-group","name":"iA Financial Group","ticker":"IAG","exchange":"TSX","sector":"Financials","industry":"Life Insurance","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Quebec City","founded":1892,"note":"Industrial Alliance; dealer-network and US growth."},
    {"id":"ca-equitable-bank","name":"Equitable Bank","ticker":"EQB","exchange":"TSX","sector":"Financials","industry":"Challenger Banking","indices":["S&P/TSX Composite"],"hq":"Toronto","founded":1970,"formerNames":["Equitable Group"],"note":"Canada seventh-largest bank; EQ Bank digital brand."},
    {"id":"ca-goeasy","name":"goeasy","ticker":"GSY","exchange":"TSX","sector":"Financials","industry":"Subprime Lending","indices":["S&P/TSX Composite"],"hq":"Mississauga","founded":1990,"note":"easyfinancial and easyhome; non-prime consumer credit."},
    {"id":"ca-onex-corporation","name":"Onex Corporation","ticker":"ONEX","exchange":"TSX","sector":"Financials","industry":"Private Equity","indices":["S&P/TSX Composite"],"hq":"Toronto","founded":1984,"note":"Gerald Schwartz buyout house; Onex Partners funds."},
    {"id":"ca-altagas","name":"AltaGas","ticker":"ALA","exchange":"TSX","sector":"Energy","industry":"Midstream & Utilities","indices":["S&P/TSX Composite"],"hq":"Calgary","founded":1994,"note":"NGL export terminals plus US northwest utilities."},
    {"id":"ca-keyera","name":"Keyera","ticker":"KEY","exchange":"TSX","sector":"Energy","industry":"Midstream (NGL)","indices":["S&P/TSX Composite"],"hq":"Calgary","founded":1998,"note":"NGL gathering, fractionation and marketing."},
    {"id":"ca-gibson-energy","name":"Gibson Energy","ticker":"GIB","exchange":"TSX","sector":"Energy","industry":"Midstream","indices":["S&P/TSX Composite"],"hq":"Calgary","founded":1953,"note":"Crude gathering and US Gulf Coast terminals."},
    {"id":"ca-nuvista-energy","name":"NuVista Energy","ticker":"NVA","exchange":"TSX","sector":"Energy","industry":"Natural Gas E&P","indices":["S&P/TSX Composite"],"hq":"Calgary","founded":2003,"note":"Montney condensate-rich gas producer."},
    {"id":"ca-vermilion-energy","name":"Vermilion Energy","ticker":"VRN","exchange":"TSX","sector":"Energy","industry":"Oil & Gas E&P","indices":["S&P/TSX Composite"],"hq":"Calgary","founded":1994,"note":"Global E&P; European gas assets post-2025 M&A."},
    {"id":"ca-nexgen-energy","name":"NexGen Energy","ticker":"NXE","exchange":"TSX","sector":"Materials","industry":"Uranium (Development)","indices":["S&P/TSX Composite"],"hq":"Vancouver","founded":2006,"note":"Rook I / Arrow uranium project in Saskatchewan."},
    {"id":"ca-lundin-gold","name":"Lundin Gold","ticker":"LUG","exchange":"TSX","sector":"Materials","industry":"Gold","indices":["S&P/TSX Composite"],"hq":"Vancouver","founded":2005,"note":"Fruta del Norte mine in Ecuador."},
    {"id":"ca-b2gold","name":"B2Gold","ticker":"BTO","exchange":"TSX","sector":"Materials","industry":"Gold","indices":["S&P/TSX Composite"],"hq":"Vancouver","founded":2007,"note":"Fekola (Mali) and African gold portfolio."},
    {"id":"ca-alamos-gold","name":"Alamos Gold","ticker":"AGI","exchange":"TSX","sector":"Materials","industry":"Gold","indices":["S&P/TSX Composite"],"hq":"Toronto","founded":2003,"note":"Young-Davidson, Island Gold districts."},
    {"id":"ca-eldorado-gold","name":"Eldorado Gold","ticker":"ELD","exchange":"TSX","sector":"Materials","industry":"Gold","indices":["S&P/TSX Composite"],"hq":"Vancouver","founded":1992,"note":"Greek and Turkish gold mines."},
    {"id":"ca-equinox-gold","name":"Equinox Gold","ticker":"EQX","exchange":"TSX","sector":"Materials","industry":"Gold","indices":["S&P/TSX Composite"],"hq":"Vancouver","founded":2017,"note":"Americas growth gold producer; Greenstone mine."},
    {"id":"ca-osisko-gold-royalties","name":"Osisko Gold Royalties","ticker":"OSK","exchange":"TSX","sector":"Materials","industry":"Royalties","indices":["S&P/TSX Composite"],"hq":"Montreal","founded":2014,"note":"Canadian Malartic royalty anchor."},
    {"id":"ca-triple-flag-precious-metals","name":"Triple Flag Precious Metals","ticker":"TFPM","exchange":"TSX","sector":"Materials","industry":"Streaming & Royalties","indices":["S&P/TSX Composite"],"hq":"Toronto","founded":2020,"note":"Streams on Northparkes and Buriticá."},
    {"id":"ca-sandstorm-gold","name":"Sandstorm Gold","ticker":"SSL","exchange":"TSX","sector":"Materials","industry":"Streaming & Royalties","indices":["S&P/TSX Composite"],"hq":"Vancouver","founded":2008,"note":"Diversified streaming portfolio."},
    {"id":"ca-new-gold","name":"New Gold","ticker":"NGD","exchange":"TSX","sector":"Materials","industry":"Gold & Copper","indices":["S&P/TSX Composite"],"hq":"Toronto","founded":2006,"note":"Rainy River and New Afton in Ontario/BC."},
    {"id":"ca-centerra-gold","name":"Centerra Gold","ticker":"CG","exchange":"TSX","sector":"Materials","industry":"Gold & Copper","indices":["S&P/TSX Composite"],"hq":"Toronto","founded":1993,"note":"Kyrgyz Kumtor seized 2021; now Ontario and Türkiye mines."},
    {"id":"ca-pan-american-silver","name":"Pan American Silver","ticker":"PAAS","exchange":"TSX","sector":"Materials","industry":"Silver & Gold","indices":["S&P/TSX Composite"],"hq":"Vancouver","founded":1994,"note":"Americas silver leader; Yamana gold added 2023."},
    {"id":"ca-first-majestic-silver","name":"First Majestic Silver","ticker":"FR","exchange":"TSX","sector":"Materials","industry":"Silver","indices":["S&P/TSX Composite"],"hq":"Vancouver","founded":2002,"note":"Mexican silver mines; NYSE ticker AG."},
    {"id":"ca-capstone-copper","name":"Capstone Copper","ticker":"CS","exchange":"TSX","sector":"Materials","industry":"Copper","indices":["S&P/TSX Composite"],"hq":"Vancouver","founded":2022,"note":"Mantos Blancos, Pinto Valley; Mantoverde ramp."},
    {"id":"ca-hudbay-minerals","name":"Hudbay Minerals","ticker":"HBM","exchange":"TSX","sector":"Materials","industry":"Copper & Gold","indices":["S&P/TSX Composite"],"hq":"Toronto","founded":1927,"note":"Snow Lake, Constancia, Copper World pipeline."},
    {"id":"ca-west-fraser-timber","name":"West Fraser Timber","ticker":"WFG","exchange":"TSX","sector":"Materials","industry":"Forestry Products","indices":["S&P/TSX Composite"],"hq":"Vancouver","founded":1955,"note":"Lumber, panels and pulp across North America and Europe."},
    {"id":"ca-canfor","name":"Canfor","ticker":"CFP","exchange":"TSX","sector":"Materials","industry":"Forestry Products","indices":["S&P/TSX Composite"],"hq":"Vancouver","founded":1938,"note":"Softwood lumber major; Jim Pattison controlled."},
    {"id":"ca-atkinsr-alis","name":"AtkinsRéalis","ticker":"ATRL","exchange":"TSX","sector":"Industrials","industry":"Engineering & Nuclear","indices":["S&P/TSX Composite"],"hq":"Montreal","founded":1911,"formerNames":["SNC-Lavalin"],"note":"Renamed 2023; CANDU nuclear via AtkinsRealis Nuclear."},
    {"id":"ca-aecon-group","name":"Aecon Group","ticker":"ARE","exchange":"TSX","sector":"Industrials","industry":"Construction","indices":["S&P/TSX Composite"],"hq":"Toronto","founded":1877,"note":"Infrastructure, nuclear and mining construction."},
    {"id":"ca-bird-construction","name":"Bird Construction","ticker":"BDT","exchange":"TSX","sector":"Industrials","industry":"Construction","indices":["S&P/TSX Composite"],"hq":"Toronto","founded":1923,"note":"General contracting and maintenance networks."},
    {"id":"ca-toromont-industries","name":"Toromont Industries","ticker":"TIH","exchange":"TSX","sector":"Industrials","industry":"Equipment Distribution","indices":["S&P/TSX Composite"],"hq":"Concord, ON","founded":1961,"note":"Caterpillar dealer for Canada; HVAC (Viessmann)."},
    {"id":"ca-finning-international","name":"Finning International","ticker":"FTT","exchange":"TSX","sector":"Industrials","industry":"Equipment Distribution","indices":["S&P/TSX Composite"],"hq":"Vancouver","founded":1933,"note":"Caterpillar dealer for Western Canada, UK and Chile."},
    {"id":"ca-ats-corporation","name":"ATS Corporation","ticker":"ATS","exchange":"TSX","sector":"Industrials","industry":"Automation Systems","indices":["S&P/TSX Composite"],"hq":"Cambridge, ON","founded":1998,"note":"Custom automation; life-sciences and energy storage wins."},
    {"id":"ca-rb-global","name":"RB Global","ticker":"RBA","exchange":"TSX","sector":"Industrials","industry":"Auction Marketplaces","indices":["S&P/TSX Composite"],"hq":"Westchester, IL","founded":1958,"formerNames":["Ritchie Bros. Auctioneers"],"note":"Ritchie Bros + IAA equipment auctions."},
    {"id":"ca-russel-metals","name":"Russel Metals","ticker":"RJS","exchange":"TSX","sector":"Industrials","industry":"Metals Distribution","indices":["S&P/TSX Composite"],"hq":"Mississauga","founded":1940,"note":"Steel service centers across North America."},
    {"id":"ca-magna-international","name":"Magna International","ticker":"MG","exchange":"TSX","sector":"Consumer Discretionary","industry":"Auto Components","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Aurora, ON","founded":1957,"note":"One of the worlds largest auto suppliers."},
    {"id":"ca-linamar","name":"Linamar","ticker":"LNR","exchange":"TSX","sector":"Consumer Discretionary","industry":"Auto Components","indices":["S&P/TSX Composite"],"hq":"Guelph","founded":1966,"note":"Powertrain, driveline and powertrain plus agriculture (MacDon)."},
    {"id":"ca-martinrea-international","name":"Martinrea International","ticker":"MRE","exchange":"TSX","sector":"Consumer Discretionary","industry":"Auto Components","indices":["S&P/TSX Composite"],"hq":"Vaughan, ON","founded":2002,"note":"Metal forming, fluids and structures."},
    {"id":"ca-aritzia","name":"Aritzia","ticker":"ATZ","exchange":"TSX","sector":"Consumer Discretionary","industry":"Apparel Retail","indices":["S&P/TSX Composite"],"hq":"Vancouver","founded":1984,"note":"Womens fashion brand; US expansion."},
    {"id":"ca-gildan-activewear","name":"Gildan Activewear","ticker":"GIL","exchange":"TSX","sector":"Consumer Discretionary","industry":"Apparel Manufacturing","indices":["S&P/TSX Composite"],"hq":"Montreal","founded":1984,"note":"Basic apparel giant; socks, tees, activewear."},
    {"id":"ca-saputo","name":"Saputo","ticker":"SAP","exchange":"TSX","sector":"Consumer Staples","industry":"Dairy Processing","indices":["S&P/TSX Composite"],"hq":"Montreal","founded":1954,"note":"Cheese and dairy across Canada, US, Australia, UK."},
    {"id":"ca-maple-leaf-foods","name":"Maple Leaf Foods","ticker":"MFI","exchange":"TSX","sector":"Consumer Staples","industry":"Meat Protein","indices":["S&P/TSX Composite"],"hq":"Mississauga","founded":1927,"note":"Schneiders and Maple Leaf brands; pork spinoff pending."},
    {"id":"ca-premium-brands-holdings","name":"Premium Brands Holdings","ticker":"PBH","exchange":"TSX","sector":"Consumer Staples","industry":"Specialty Foods","indices":["S&P/TSX Composite"],"hq":"Richmond, BC","founded":1917,"note":"Roll-up of specialty food makers and distributors."},
    {"id":"ca-north-west-company","name":"North West Company","ticker":"NWC","exchange":"TSX","sector":"Consumer Staples","industry":"Remote Retail","indices":["S&P/TSX Composite"],"hq":"Winnipeg","founded":1669,"note":"Northern/NorthMart stores; trading heritage back to fur trade."},
    {"id":"ca-bausch-lomb","name":"Bausch + Lomb","ticker":"BLCO","exchange":"TSX","sector":"Health Care","industry":"Eye Health","indices":["S&P/TSX Composite"],"hq":"Vaughan, ON","founded":1853,"note":"Contact lenses and eye care; BHC majority; full-sale talks."},
    {"id":"ca-kinaxis","name":"Kinaxis","ticker":"KXS","exchange":"TSX","sector":"Information Technology","industry":"Supply-Chain Software","indices":["S&P/TSX Composite"],"hq":"Ottawa","founded":1984,"note":"RapidResponse planning platform for global OEMs."},
    {"id":"ca-enghouse-systems","name":"Enghouse Systems","ticker":"ENGH","exchange":"TSX","sector":"Information Technology","industry":"Enterprise Software","indices":["S&P/TSX Composite"],"hq":"Markham, ON","founded":1987,"note":"Disciplined software acquirer; asset-light roll-up."},
    {"id":"ca-topicus-com","name":"Topicus.com","ticker":"TOI","exchange":"TSX","sector":"Information Technology","industry":"Vertical-Market Software","indices":["S&P/TSX Composite"],"hq":"Gouda, NL","founded":2006,"note":"Constellation spinoff for European vertical software."},
    {"id":"ca-dye-durham","name":"Dye & Durham","ticker":"DND","exchange":"TSX","sector":"Information Technology","industry":"Legal Software","indices":[],"hq":"Toronto","founded":2002,"note":"Legal-practice software; leverage and activist saga."},
    {"id":"ca-lightspeed-commerce","name":"Lightspeed Commerce","ticker":"LSPD","exchange":"TSX","sector":"Information Technology","industry":"POS & Commerce SaaS","indices":["S&P/TSX Composite"],"hq":"Montreal","founded":2005,"note":"Retail and hospitality POS; HQ moved to Canada 2024."},
    {"id":"ca-telesat","name":"Telesat","ticker":"TSAT","exchange":"TSX","sector":"Communication Services","industry":"Satellite","indices":[],"hq":"Ottawa","founded":1969,"note":"GEO operator pivoting to Lightspeed LEO constellation."},
    {"id":"ca-boralex","name":"Boralex","ticker":"BLX","exchange":"TSX","sector":"Utilities","industry":"Renewables IPP","indices":["S&P/TSX Composite"],"hq":"Kingsey Falls, QC","founded":1990,"note":"Wind, solar and storage in Canada, France, US."},
    {"id":"ca-polaris-renewable-energy","name":"Polaris Renewable Energy","ticker":"PIF","exchange":"TSX","sector":"Utilities","industry":"Renewables IPP","indices":["S&P/TSX Composite"],"hq":"Toronto","founded":2009,"note":"LatAm hydro, wind, solar plus geothermal (Nicaragua)."},
    {"id":"ca-boardwalk-reit","name":"Boardwalk REIT","ticker":"BEI.UN","exchange":"TSX","sector":"Real Estate","industry":"Residential REIT","indices":["S&P/TSX Composite"],"hq":"Calgary","founded":1990,"note":"Apartments across the Prairie provinces."},
    {"id":"ca-killam-apartment-reit","name":"Killam Apartment REIT","ticker":"KMP.UN","exchange":"TSX","sector":"Real Estate","industry":"Residential REIT","indices":["S&P/TSX Composite"],"hq":"Halifax","founded":2003,"note":"Atlantic Canada apartments plus manufactured-home land."},
    {"id":"ca-first-capital-reit","name":"First Capital REIT","ticker":"FCR.UN","exchange":"TSX","sector":"Real Estate","industry":"Mixed-Use Retail REIT","indices":["S&P/TSX Composite"],"hq":"Toronto","founded":1994,"note":"Urban, grocery-anchored properties; intensification plans."},
    {"id":"ca-ct-reit","name":"CT REIT","ticker":"CRT.UN","exchange":"TSX","sector":"Real Estate","industry":"Retail-Anchored REIT","indices":["S&P/TSX Composite"],"hq":"Toronto","founded":2013,"note":"Canadian Tire-anchored net-lease REIT."},
    {"id":"ca-firstservice-corporation","name":"FirstService Corporation","ticker":"FSV","exchange":"TSX","sector":"Real Estate","industry":"Property Services","indices":["S&P/TSX 60","S&P/TSX Composite"],"hq":"Toronto","founded":1989,"note":"FirstService Residential, Brands and restoration."}
  ],
  etfs: [
    {"ticker":"XIU","exchange":"TSX","name":"iShares S&P/TSX 60 Index ETF","tracks":"S&P/TSX 60","issuer":"BlackRock Canada"},
    {"ticker":"XIC","exchange":"TSX","name":"iShares Core S&P/TSX Capped Composite","tracks":"S&P/TSX Capped Composite","issuer":"BlackRock Canada"},
    {"ticker":"VCN","exchange":"TSX","name":"Vanguard FTSE Canada All Cap ETF","tracks":"FTSE Canada All Cap","issuer":"Vanguard Canada"},
    {"ticker":"ZEB","exchange":"TSX","name":"BMO Equal Weight Banks ETF","tracks":"Big Six banks","issuer":"BMO ETFs"},
    {"ticker":"XEG","exchange":"TSX","name":"iShares S&P/TSX Capped Energy ETF","tracks":"S&P/TSX Capped Energy","issuer":"BlackRock Canada"},
    {"ticker":"HXT","exchange":"TSX","name":"Global X S&P/TSX 60 Index ETF","tracks":"S&P/TSX 60","issuer":"Global X (ex-Horizons)"}
  ],
  sectorMeta: {
   "Energy": {
    "gics": "10",
    "about": "Oil sands, E&P, midstream and gas utilities."
   },
   "Materials": {
    "gics": "15",
    "about": "Gold, copper, uranium, potash and forestry."
   },
   "Industrials": {
    "gics": "20",
    "about": "Railroads, engineering, construction and aerospace."
   },
   "Consumer Discretionary": {
    "gics": "25",
    "about": "Restaurants, retail, autos and recreational vehicles."
   },
   "Consumer Staples": {
    "gics": "30",
    "about": "Grocers, convenience, dairy and packaged food."
   },
   "Health Care": {
    "gics": "35",
    "about": "Thin: insurers, pharma distributors and digital health."
   },
   "Financials": {
    "gics": "40",
    "about": "Big Six banks, insurers, asset and alternative managers."
   },
   "Information Technology": {
    "gics": "45",
    "about": "Software acquirers, e-commerce and IT services."
   },
   "Communication Services": {
    "gics": "50",
    "about": "Telecom, cable and satellite."
   },
   "Utilities": {
    "gics": "55",
    "about": "Regulated utilities and renewables IPPs."
   },
   "Real Estate": {
    "gics": "60",
    "about": "REITs: apartments, industrial, retail and offices."
   }
  },
  _key: "Canada"
};
/* Sources:
   https://www.barrick.com/English/news/news-details/2025/barrick-announces-name-change-to-barrick-mining-corporation-and-election-of-directors/default.aspx — Barrick rename, NYSE ticker B
   https://www.tcenergy.com/investors/liquids-spinoff — South Bow spinoff (1 Oct 2024)
   https://www.teck.com/news/news-releases/2026/teck-announces-receipt-of-requisite-consents-and-expiration-of-consent-solicitations — Anglo Teck merger pending (Oct 2026)
   TMX Group / S&P DJI — index and listing facts
*/
