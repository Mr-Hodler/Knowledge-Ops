# Sector overlays

The canonical structure in `canonical-structure.md` is the **base**, jurisdiction-neutral, and it is always present. A **sector overlay** adds sector-specific subfolders to existing base folders and sector-specific items to the due diligence checklist. Overlays are **additive** and **combinable**: an AI fintech gets both the AI and the fintech overlay on top of the base.

**Overlays are selected by sector, not by market.** The folders and the DD questions below hold in any jurisdiction. What is jurisdiction-sensitive inside them is the **regulatory annex**: the named regulator, the named regime, and the named certification. Those are resolved at runtime from the company's jurisdiction and its target markets, alongside the stage standard selected in `investor-ops/SKILL.md` under **Reference standard selection**. Regulators are named below as examples, never as the assumed default; where a named regime does not apply to this company, mark the item `n/a (jurisdiction)` with a one-line reason.

Selection: read `company_type` for the target company (set in `linked_founder_os_repos[].company_type`, or `dataroom.default_company_type`). It may be a single value or a list. If unset, use the base only and note that no overlay was applied. Valid values: `saas`, `hardware`, `crypto`, `fintech`, `ai`.

Overlays slot into the base; they never create a parallel taxonomy. Each addition names the base folder it extends, so Bootstrap adds subfolders in place and Audit checks them within the existing structure. investor-ops inherits the DD items into its stage checklist for that company.

## saas (software / SaaS)

Folders added:
- `06_Product_&_Technology/Multi-tenancy_&_Architecture`, `06_.../SLA_&_Uptime`
- `04_IP_Data_&_Security/SOC2_ISO`, `04_.../Data_Processing_&_Subprocessors`
- `09_Traction_&_Metrics/SaaS_Metrics`

DD items: ARR/MRR bridge, gross and net revenue retention, churn and cohort retention, CAC and LTV, security certification status (SOC 2 / ISO 27001), subprocessor list and DPAs, SLA and uptime history.

## hardware (hardware / deep-tech / robotics)

Folders added:
- `06_Product_&_Technology/BOM_&_Suppliers`, `06_.../Manufacturing_&_CM`, `06_.../Hardware_QA_&_Testing`, `06_.../Certifications`
- `04_IP_Data_&_Security/Patents_&_FTO`
- `02_Financials/Inventory_&_COGS`

DD items: bill of materials and unit cost, supplier concentration and single-source risk, contract manufacturer agreements, certifications for the markets the product is actually sold into (CE in the EU/EEA, UKCA in the UK, FCC and UL in the US, and the local or sector equivalent elsewhere), hardware QA and field-failure rates, patent portfolio and freedom to operate, inventory levels and lead times.

## crypto (crypto / web3 / blockchain)

Folders added:
- `03_Legal_&_Compliance/Token_Legal_Opinion`, `03_.../Regulatory_<applicable regime>` (name the folder for the regulator that actually applies; worked example EU/CH: `Regulatory_MiCA_FINMA`, elsewhere `Regulatory_SEC_CFTC`, `Regulatory_FCA`, `Regulatory_MAS`). Existing rooms keep the folder name they were built with.
- `04_IP_Data_&_Security/Smart_Contract_Audits`, `04_.../Custody_&_Key_Management`
- `08_Cap_Table_&_Financing/Tokenomics_&_Token_Cap_Table`
- `02_Financials/Treasury_On-chain`

DD items: token classification and legal opinion, regulatory status under the regime that applies (MiCA in the EU, FINMA in CH, the FCA in the UK, the SEC and CFTC in the US, MAS in SG, or the local regulator), smart-contract audit reports, custody and key-management setup, tokenomics and vesting/unlock schedule, on-chain treasury holdings and controls.

## fintech (regulated financial)

Folders added:
- `03_Legal_&_Compliance/Licenses_&_Authorizations`, `03_.../Regulatory_Compliance`, `03_.../Banking_Partners`, `03_.../Client_Funds_Safeguarding`
- `04_IP_Data_&_Security/AML_KYC`

DD items: license and authorization status with the competent regulator (FINMA, the FCA, BaFin, the ACPR, MAS, or the relevant US state and federal regulators), regulator correspondence, AML and KYC program under the applicable regime, safeguarding of client funds, banking and payment partners, regulatory audit history, capital and prudential requirements where applicable.

## ai (AI / ML products)

Folders added:
- `06_Product_&_Technology/Models_&_Training_Data`, `06_.../MLOps_&_Evaluation`
- `04_IP_Data_&_Security/Data_Rights_&_Licensing`, `04_.../Model_Governance_&_Safety`, `04_.../AI_Regulatory`
- `03_Legal_&_Compliance/Third-party_Models_&_APIs`

DD items: training-data provenance and licenses, ownership of model weights and outputs, third-party model and API dependencies (and the risk of relying on them), evaluation and benchmark results, risk classification and obligations under the AI regime that applies to the markets served (EU AI Act, UK regulator guidance, US federal and state AI rules, or the local equivalent), model governance and safety practices, compute cost and capacity.

## How overlays apply

- **Bootstrap:** after creating the base canonical folders, add the overlay subfolders for the company's `company_type` (one or several). Idempotent: add only what is missing.
- **Sync:** classification still maps to the base folder; if an overlay subfolder fits better (a BOM file under `06_.../BOM_&_Suppliers`), use it.
- **Audit:** the active stage profile, the standard selected for the jurisdiction, and the overlay DD items together define completeness. State readiness against all three, for example "seed-ready per <standard applied> plus hardware overlay, except 2 blockers".
- **investor-ops:** inherits the overlay DD items into the stage checklist and Q&A, so an examiner in that sector sees the sector-specific questions.

Keep overlays lean: add a folder only when the sector genuinely needs evidence there. A company with no clear type runs on the base alone.
