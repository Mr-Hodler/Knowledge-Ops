# Canonical data room structure

The taxonomy below is **jurisdiction-neutral and stable**. It is intentionally a superset: every folder maps to a question a serious examiner asks in any market (who owns the company, what does it earn, what is it exposed to, who owns the technology, who works there, what does it sell). Per-stage subsets below tell you which folders matter at which raise.

It was derived and stress-tested against three Swiss venture references: the **SICTIC / Swiss ICT Investor Club** checklist (seed/angel grade), the **Startup Board Academy** DD list (governance grade), and an **Elysium Lab** acquisition request list (M&A/exit grade). Those are **one worked instantiation, not the standard**. The equivalent lists for another market (NVCA-style in the US, BVCA in the UK, German Startups Association in DE, France Invest in FR, AIFI in IT, SVCA in SG, or the national association researched at runtime) map onto the same folders. See **Reference standard selection** in `investor-ops/SKILL.md` for how the applied standard is chosen per run.

**What is stable and what is re-derived:**

- **Stable, never re-derived:** the folder set, the numbering, the meaning of each folder, and the sector overlays.
- **Re-derived per jurisdiction:** which documents land in each folder at each stage, the corporate-form documents themselves (articles / bylaws / statutes, share classes, cap table conventions, register extracts), employment and IP-assignment norms, and the regulatory and privacy annexes.

Folder descriptions below name specific document types as illustration. Where a named document is jurisdiction-specific, its local equivalent goes in the same folder; where there is no equivalent, mark the item `n/a (jurisdiction)` rather than carrying it as a gap.

The top-level numbering is fixed so ordering is stable across companies and platforms. Subfolders are guidance, not law; create the ones a given company actually needs.

## Top-level folders

### 00_Overview
The 60-second and 5-minute views. Pitch deck, one-pager / executive summary, business model canvas, short company description, current ask. Mostly `public` or `confidential`. Source: Founder-OS decks and narrative assets.

### 01_Corporate_&_Governance
The most jurisdiction-sensitive folder: keep the folder, swap the documents. Certificate of incorporation or formation, the constitutional document under whatever name the jurisdiction uses (certificate of incorporation plus bylaws in the US, articles of association in the UK, Statuten in CH, Gesellschaftsvertrag in DE, statuto in IT), company-register extract where a public register exists, shareholder or stockholder agreements (SHA, voting and ROFR agreements, pacte d'actionnaires, patto parasociale), internal board or organizational rules (Organisationsreglement in CH, board charter elsewhere), board composition and minutes (last 3 years), shareholder and director registers, prior/assumed company names, group/legal-entity org chart, any M&A or JV agreements.
Subfolders: `Incorporation`, `Statutes_&_Org_Rules`, `Board_Minutes`, `Shareholder_Agreements`, `Registers`, `Entity_Structure`.

### 02_Financials
Historical financial statements (audited where applicable), management accounts, annual budget, 3-5 year plan, monthly cash-flow plan, burn rate and runway, auditor letters, bank signatories and expense-approval policy.
Subfolders: `Historicals`, `Budget_&_Plan`, `Cashflow_&_Burn`, `Audit`, `Banking`.

### 03_Legal_&_Compliance
Entity structure and subsidiaries, material contracts and key terms, litigation and disputes (current and past), conflicts of interest, insurance (including D&O), regulatory status and red flags, tax framework (indirect tax such as VAT / GST / sales tax, plus withholding or tax-at-source obligations where they exist), payroll and social-contribution proof. The regulatory and tax items are jurisdiction-sensitive: name the regimes that actually bind this company. Worked example (CH): VAT of foreign suppliers, tax at source, AHV social charges.
Subfolders: `Contracts`, `Litigation`, `Insurance`, `Regulatory`, `Tax`, `Conflicts`.

### 04_IP_Data_&_Security
IP ownership and assignment (including contractor and employee assignments, which follow jurisdiction-specific norms: assignment is contractual in some markets and partly statutory in others), freedom-to-operate check, patents/trademarks, data protection under the applicable regime (GDPR, UK GDPR, Swiss FADP, CCPA / CPRA, or local), security posture and policies.
Subfolders: `IP_Ownership_&_Assignment`, `Patents_&_Trademarks`, `Data_Protection`, `Security`.

### 05_Team_&_HR
Org chart, key people bios/CVs, employment contracts, contractor vs employee split, option plan / ESOP and other incentive plans (the instrument is jurisdiction-specific: stock options in the US, EMI in the UK, BSPCE in FR, VSOP or virtual shares in DE, phantom or real options in CH), employment-law compliance evidence in the form the jurisdiction requires (worked example CH: timesheets, overtime, vacations, minimum salaries), retention and turnover.
Subfolders: `Org_&_Key_People`, `Employment_Contracts`, `ESOP_&_Incentives`, `HR_Compliance`.

### 06_Product_&_Technology
Product overview and roadmap, architecture, tech stack, engineering practices (methodology, version control, CI/CD, code review, release process), QA and testing (coverage, frameworks, production-incident rate), infrastructure and operations, compliance standards followed (ISO, SOC, which are international and do not vary by jurisdiction). Mirrors the engineering and infrastructure DD used in acquisition diligence; worked example: the Elysium Lab list in `checklists.md`.
Subfolders: `Product_&_Roadmap`, `Architecture_&_Stack`, `Engineering_Practices`, `Quality_&_Testing`, `Infrastructure`.

### 07_Market_&_Commercial
Market sizing and dynamics, competitive landscape, GTM, commercial strategy, key customer contracts and main terms, partnerships, sales pipeline. Source: Founder-OS market-intel and GTM outputs.
Subfolders: `Market_&_Competition`, `GTM_&_Commercial`, `Customer_Contracts`, `Partnerships`.

### 08_Cap_Table_&_Financing
Current cap table (share-class conventions and the fully diluted convention itself vary by market), fully diluted scenarios, prior round documents in whatever instruments the market uses (term sheets, SAFEs, convertible loan agreements, ASAs, share purchase or subscription agreements), current round terms, investment policy (cash, sweat equity, in-kind), use of proceeds.
Subfolders: `Cap_Table`, `Prior_Rounds`, `Current_Round`, `Use_of_Proceeds`.

### 09_Traction_&_Metrics
KPIs and the metrics dashboard (from Founder-OS `metrics-dashboard`), cohort/retention/churn, unit economics, customer references and case studies, traction narrative. Ages fast; see freshness windows in `audit-protocol.md`.
Subfolders: `KPIs_&_Dashboard`, `Unit_Economics`, `References`.

### 99_DD_QA_&_Trackers
Owned by investor-ops, created empty by Bootstrap. Q&A tracker (questions from a live process and their answers), evidence index, and the access log (who was granted what, when). investor-ops creates the placeholders; investor-ops fills them.
Subfolders: `QA_Tracker`, `Evidence_Index`, `Access_Log`.

## Sector overlays

The taxonomy above is the **base**, jurisdiction-neutral and always present regardless of sector or market. On top of it, a company's `company_type` adds **sector overlays** that extend specific base folders with sector subfolders and add sector DD items (saas, hardware, crypto, fintech, ai; additive and combinable). The base never changes; overlays only add. See `sector-overlays.md`.

## Per-stage subsets

Audit and Bootstrap scope to the active stage profile. A heavier stage is a superset of a lighter one. The folder subsets below are jurisdiction-neutral; the named standard that sets the expected depth inside them is selected at runtime (see `checklists.md`).

- **pre_seed / seed:** 00_Overview, 01_Corporate (incorporation, statutes, cap table basics), 02_Financials (plan, budget, burn), 03_Legal (IP ownership, key contracts), 04_IP_Data_&_Security (ownership + FTO + data protection basics), 05_Team, 07_Market_&_Commercial, 08_Cap_Table, 09_Traction. Depth is light but the IP ownership chain and the cap table must be clean.
- **series_a / series_b:** all of the above at greater depth, plus full 01_Corporate (board minutes, SHA, org rules), full 02_Financials (historicals, monthly cash flow, audit if applicable), 03_Legal (litigation, insurance incl. D&O, regulatory, tax), 06_Product_&_Technology (engineering and QA practices), 05_Team (ESOP, HR compliance), and a maintained 99_DD_QA tracker.
- **growth:** Series B set with stronger compliance (06 security standards, 03 regulatory) and clean multi-year historicals.
- **m_and_a:** the full superset, with emphasis on 03_Legal (litigation and contingencies, product/service liability, warranty claims, liens and encumbrances), 01_Corporate (every register, all prior names, all agreements), 06_Product_&_Technology (full engineering and infrastructure DD), and complete contract and IP assignment trails. Expect line-item evidence requests.

## Platform mechanics

Read `dataroom.platform` and act accordingly:

- **Notion:** top-level folders are pages (or database rows in a "Data Room" database keyed by folder); subfolders are child pages. Metadata lives in page properties matching `metadata_schema`. Read the live schema, never assume property names.
- **Google Drive / SharePoint:** folders mirror the taxonomy literally; metadata lives in a per-folder index file (a `_index.md` or a sheet) since native file metadata is thin.
- **Confluence:** spaces/pages mirror the taxonomy; labels carry `lens` and `sensitivity`.

Bootstrap is idempotent on every platform: create only what is missing, never reorder or overwrite existing nodes.
