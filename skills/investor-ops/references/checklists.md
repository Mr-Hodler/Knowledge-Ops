# Built-in checklists

These ship with the skill so it can proactively tell you what an examiner will expect, per stage and per framework, mapped to the canonical data room folders (00 to 99) in `investor-ops/references/canonical-structure.md`. Use the checklist as the yardstick; when an item is present in the room, mark it; when missing, route the request to investor-ops.

A heavier stage is a superset of a lighter one. Always state readiness relative to the named checklist and to the standard applied to it.

## The standard is selected at runtime, not baked in

The **stage spine** below (which evidence areas an examiner opens, and in what depth) is jurisdiction-neutral. The **named standard** applied to it is not, and is chosen per run from the company's jurisdiction, exactly as in `investor-ops/SKILL.md` under **Reference standard selection**: SICTIC and the Swiss Angel Investor Handbook for CH, NVCA-style seed norms for the US, BVCA for the UK, the German Startups Association for DE, France Invest for FR, AIFI for IT, SVCA for SG, or the national VC or angel association researched at runtime elsewhere. There is **no default market**. If the jurisdiction is unset or the round is cross-border, say so and ask once.

Every checklist below therefore carries a **standard applied** field. Fill it with the standard selected for this run, and repeat it in the readiness statement ("seed-ready per <standard applied>, except 2 blockers"). The worked instantiations quoted under each stage are Swiss/CH, because that is where these lists were originally derived from; they are examples of the shape, not the yardstick for a founder incorporated elsewhere.

**What re-derives, and what does not:**

- **Stable:** the evidence areas (business and product, corporate, financials, team, customers, IP and data, technology) and their folder mapping.
- **Jurisdiction-sensitive:** which documents are expected at each stage, the corporate-form documents (articles / bylaws / statutes, share classes, cap table conventions, register extracts), employment and IP-assignment norms, and the regulatory and privacy annexes.

Where a worked-example item has **no equivalent** in the selected jurisdiction (a register extract in a jurisdiction with no public company register, a domestic grant-agency screening the founder is not eligible for), mark it `n/a (jurisdiction)` with a one-line reason instead of leaving it open as a gap. Never make a founder chase a document their investors will not ask for.

**Gap detection defers to investor-ops Audit.** These checklists are the shared yardstick, but the authoritative gap list comes from running investor-ops Audit against the stage. investor-ops consumes that punch-list and adds audience and sensitivity on top, rather than recomputing which items are missing. Use the checklist directly only when no Audit is available. This prevents the library and the delivery counter from disagreeing on completeness.

## Seed / angel

**Standard applied:** the one selected at runtime for the company's jurisdiction (see above). Fill this field before using the list.
**Worked example (CH):** SICTIC / Swiss ICT Investor Club and the Swiss Angel Investor Handbook. The equivalent for another market is researched at runtime, for example the customary US seed diligence request list under NVCA norms, or BVCA guidance in the UK.

Light depth at this stage in every market, but the cap table and the IP ownership chain must be airtight everywhere.

1. **Business and product overview** -> 00_Overview. Pitch deck, business model canvas, one-pager, the ask.
2. **Company** -> 01_Corporate. Corporate form and constitutional documents in whatever form the jurisdiction uses (incorporation certificate, articles / bylaws / statutes, company-register extract where a register exists), shareholders (cap table, evolution, investment policy), tax and legal basics, key risks. This item is the most jurisdiction-sensitive on the list: name the documents the selected standard actually asks for.
3. **Team** -> 05_Team. Founders and key people, roles, commitment, gaps.
4. **Financial situation** -> 02_Financials. 3-5 year plan, annual budget, burn and runway, basic bookkeeping, financing need for the next 24 months.
5. **Customers** -> 07_Market_&_Commercial and 09_Traction. Traction, pipeline, references.
6. **IP, data protection and security** -> 04_IP_Data_&_Security. Who owns the IP, contractor and employee assignment on the jurisdiction's terms (assignment is contractual in some markets and partly statutory in others), freedom to operate, data protection under the regime that applies (GDPR, UK GDPR, Swiss FADP, CCPA / CPRA, or local), security basics.
7. **Software development and production** -> 06_Product_&_Technology. Product, stack, how it is built and shipped.

**Grant-agency screening (optional, only where the founder is eligible).** Public innovation funders add emphasis on innovation substance, scientific and technical merit, and the team's capacity to execute; map these to 06_Product and 05_Team. Worked example (CH): Innosuisse. Equivalents exist in most markets (Innovate UK, SBIR / STTR in the US, the EIC Accelerator in the EU, Bpifrance in FR), so name the one the founder is actually applying to, or mark the item `n/a (jurisdiction)` if there is none.

## Competition, award or grant application

**A jury is not an investor, and preparing for one as if it were is the most common mistake at this stage.** Every other profile in this file describes an examiner who **pulls** documents from a room, on their own schedule, and can ask a follow-up question. A competition jury or a grant evaluator does neither. They receive **one self-contained submission**, at a fixed deadline, score it against a **published weighted rubric**, and compare it **against the other submissions in the same round**. Anything not in the document does not exist, and a strong company can lose to a weaker one that answered the form.

Four differences that change what you produce:

| | Investor round | Competition / grant |
|---|---|---|
| Shape | a data room, browsed | **one document plus named annexes**, read start to finish |
| Timing | rolling, follow-up questions possible | **hard deadline**, no second chance in this round |
| Standard | the investor's own norms | a **published rubric with weights**, usually per criterion |
| Comparison | against your own claims | **against the other applicants**, explicitly |

**Standard applied:** the programme's own published criteria, retrieved at runtime. Never assume a rubric. **Verify the deadline, the eligibility rules and the annex list against the current call with an absolute date before building anything**, because programmes change their forms between cycles and a criterion that moved is a criterion you will miss.

### Work the rubric, not the room

1. **Retrieve the published criteria and their weights**, and build the submission's section order to match them. An evaluator scoring twelve criteria in sequence should not have to hunt. Where the programme publishes no weights, say so and treat the criteria as equal.
2. **One section per criterion, answered in its own words.** Reuse the programme's vocabulary rather than your internal names for things. This is not cosmetic: an evaluator ticking a box looks for the term on the form.
3. **Map the weight to your effort.** A criterion carrying 12% deserves roughly twelve times the space of a 1% one. Founders routinely overwrite the section they enjoy and underwrite the one that scores.
4. **Answer the vertical overlay, not just the common core.** Most rubrics add requirements by sector (software programmes ask for alpha or beta testing evidence and digital acquisition metrics; life-science ones for a regulatory and a clinical roadmap plus reimbursement; industrial ones for early pilots and field tests). Missing an overlay item reads as not having understood the call.
5. **Check eligibility before writing a word.** Entity age and size, jurisdiction or member-state rules, consortium shape, co-funding requirement, whether a university host is required, sector scope, and whether prior funding from the same body excludes you. **A single eligibility rule invalidates the entire submission**, and it is the cheapest thing to check first.

### The annexes are part of the score

Grant and competition forms almost always mandate annexes, and a missing one is usually a formal rejection rather than a lost point. Assemble and verify each against the current call:

- The **financial data** in the programme's own template if it supplies one, filled in its own line items and codes, not a generic export from your own model.
- The **impact or sustainability self-assessment output sheet** where the rubric scores impact. Increasingly standard and frequently forgotten.
- The **risk register**, on the programme's template where one is supplied, pre and post mitigation.
- **CVs** of the core team, in the requested format.
- **Corporate documents**: register extract, share register or cap table, articles or statutes.
- **Letters of intent or support** from named partners or customers, signed.
- **Filed financial statements** and a bank confirmation where the programme asks for financial standing.
- **Third-party opinions** where a claim needs backing: a legal opinion, patent or freedom-to-operate research.

Every claim in the narrative should have a counter-signed document behind it. That is the difference between a submission that reads well and one that survives scrutiny.

### Two failure modes worth naming, because they are the published grounds for rejection

Public funders publish their decisions, and the same two reasons recur:

- **Innovation content.** Assessed against the current state of the art **and** against solutions already available for the same need. A proposal that reads as an **integration of existing technologies and libraries** gets rejected on the grounds that it is unclear how it advances the state of the art. The defence is the prior-art work: name the closest existing work, state the delta honestly, and separate what is genuinely new from what is assembly. Founder-OS `market-discovery` Mode 2 produces exactly this, and its two-column honesty split is what an evaluator is testing for.
- **Implementation potential and value creation.** Assessed on market potential, competitiveness, marketing strategy, freedom to operate, the extent of value created and the size of the user group. The recurring rejection is that **market-size projections are too large and unspecific and the competitive analysis is not detailed enough**, leaving the positioning unclear. A top-down billion-dollar market figure with no bottom-up build is read as a lack of rigour, not as ambition.

Both are graded **relative to the other submissions in the round**, so "adequate" is not a passing standard.

### Where the content comes from

This profile assembles, it does not author. Pull from Founder-OS and cite: `market-discovery` (market structure, and Mode 2 for the prior-art and novelty section), `market-intel-gap` (competitive analysis and gaps), `business-validation` (problem, ICP, validation evidence), `business-model` (revenue model, unit economics, the value-creation roadmap and the with versus without-funding counterfactual), `financial-planning` (the statements, the cost breakdown with its evidence chain, and the budget in the funder's own categories), `impact-sustainability` (the impact section and its self-assessment annex), `risk-strategy` (the register with residual scoring), `product-design` (maturity level, certification roadmap, validation evidence), `ip-legal` (the IP position and the freedom-to-operate screen), and `narrative-assets-ops` (the executive summary and the narrative assembly).

**After the decision, whatever it is, file it.** A rejection letter names the criteria you failed and is the single most useful input to the next attempt. Keep it in the room with the submission it belongs to.

## Governance / board

**Standard applied:** the governance reference of the selected jurisdiction (the national director or board institute, VC association governance guidance, or the investor's own board pack norms).
**Worked example (CH):** the Startup Board Academy DD list (bilingual FR/EN).

Used for board due diligence and ongoing governance, not only a raise. The structure below travels; the compliance sub-items in point 2 are the jurisdiction-sensitive part.

1. **Shareholder information and governance** -> 01_Corporate. Shareholder alignment and exit expectations, ownership structure and cap table, shareholders' agreements (SHA, or the local instrument: stockholders' and voting agreements in the US, articles plus a shareholders' agreement in the UK, Gesellschaftervereinbarung in DE) versus internal board or organizational rules, board structure and type, board operation, dynamics, evolution, impact, delegation to management, chair and secretary, strategy documentation and follow-up.
2. **Financials and financing** -> 02_Financials. Plan and budget, investment/financing plan, frequency of financial statements, monthly cash-flow plan, burn rate, basic bookkeeping. Compliance (jurisdiction-sensitive, re-derive the specific obligations for the selected standard): statutory audit thresholds and audit of accounts, bank signatories and approval policy, employment-law compliance evidence, payroll tax and social-contribution proof, indirect tax status, proactive tax management, regulatory red flags. Worked example (CH): timesheets, overtime, vacations and minimum salaries under the CO and CLA regime, AHV social charges, tax at source, VAT registration status.
3. **Legal** -> 03_Legal_&_Compliance. Company structure and entities, litigation and disputes, conflicts of interest, D&O insurance, insurance status, IP ownership and assignment and freedom to operate, key contracts and main terms.
4. **Business** -> 07_Market_&_Commercial and 06_Product. Organisation and operations sizing, org chart, delegation.

(The full list extends into operations, customers, and risk; treat 1 to 4 as the governance core and expand per the received list.)

## Series A / B

**Standard applied:** the institutional-round standard of the lead investor's market (NVCA model documents and the customary US Series A request list, BVCA in the UK, SECA in CH, German Startups Association in DE, France Invest in FR, AIFI in IT, SVCA in SG, or researched local). At this stage the **lead investor's** market usually governs the document set even when the entity sits elsewhere, so confirm it rather than inferring from incorporation alone.

Superset of seed plus governance. Expect depth on: full 01_Corporate (board minutes for 3 years, SHA, org rules, registers), full 02_Financials (historicals, monthly cash flow, audit where applicable), 03_Legal (litigation, insurance incl. D&O, regulatory, tax), 06_Product_&_Technology (engineering and QA practices, infra), 05_Team (ESOP, HR compliance), 08_Cap_Table (prior rounds, fully diluted), and a maintained Q&A tracker. Sensitivity discipline matters more: investors get `confidential`, not `restricted`.

## M&A / exit

**Standard applied:** the acquirer's own request list, which is the standard in an exit. Take it as received and map it, rather than pre-judging it against any national template.
**Worked example:** the Elysium Lab acquisition request list (corporate DD plus an engineering and infrastructure DD), with explicit data-room folder mapping and per-item priority. Use it as the shape of what to expect before the real list arrives.

Expect line-item evidence requests. The corporate areas below are close to universal in acquisition diligence; the specific registers, filings, and liability regimes named are jurisdiction-sensitive.

Corporate request areas:

- **A. Corporate matters** -> 01_Corporate. Incorporation and governing docs, registers of directors/officers/stockholders and ownership percentages, jurisdictions of operation, board and committee minutes (3+ years), ownership/control agreements (SHA, voting trusts), option/incentive plans, prior acquisitions/mergers, related-party transactions, all prior and assumed names (5 years), investments in other entities, legal-entity org chart.
- **B. Litigation and contingencies** -> 03_Legal. Auditor management letters and audit-letter responses (5 years), pending litigation/arbitration/administrative proceedings, plaintiff/defendant status and counterclaims, status and damages, insurance coverage of claims, settled/adjudicated matters (3 years), contingent liabilities, product/service liability, warranty and recall programs and costs (5 years), liens and encumbrances.
- **C. Regulatory matters** -> 03_Legal and 04_Security. Licenses, regulatory filings, compliance posture.
- **D / E. Material contracts, assets, real estate, etc.** -> 03_Legal, 07_Commercial as applicable.

Engineering and infrastructure DD -> 06_Product_&_Technology:

- **EA General:** team size and structure (org chart), roles, experience and seniority mix, key-person dependencies, contractor vs employee ratio, locations, remote policy, retention/turnover.
- **EB Technical expertise:** core competencies, languages/frameworks/tools, experience with the stack, skill gaps, security-practice familiarity.
- **EC Development practices:** methodology, version control, CI/CD, code review, release frequency and process, specs, documentation, coding guidelines, bug/incident handling.
- **ED Quality and testing:** automated vs manual, test frameworks, test types and coverage, engineer-to-QA ratio, production-incident rate, security testing, compliance standards followed (ISO, SOC).

## Sector overlays (inherited from investor-ops)

On top of the stage checklist, inherit the **sector overlay** DD items for the company's `company_type` (saas, hardware, crypto, fintech, ai), defined in `investor-ops/references/sector-overlays.md`. They are additive and combinable. So a seed-stage AI fintech is scored against the seed checklist under the standard selected for its jurisdiction, plus the ai and fintech overlay items (training-data provenance, model dependencies, licenses, AML/KYC, safeguarding). Overlays are jurisdiction-neutral in structure; only the named regulator inside them changes (the fintech licensing item points at FINMA, the FCA, the relevant US state and federal regulators, BaFin, or MAS depending on where the company operates). State readiness against the stage, the applied standard, and the overlay together, and surface the sector-specific questions in the Q&A. As with all gaps, defer to the investor-ops Audit (which already applies the overlay) as the source of truth.

## Audit frameworks

Map controls to evidence already in the room; the Evidence Index in `99_DD_QA_&_Trackers` records which item and version satisfies each control. SOC 2 and ISO 27001 are international and do not vary by jurisdiction. Financial audit and privacy do: name the accounting framework and the privacy regime that actually bind this company before mapping.

- **Financial audit** -> 02_Financials. Financial statements under the applicable framework (local GAAP, IFRS, US GAAP, Swiss CO or Swiss GAAP FER), GL, reconciliations, revenue recognition, bank confirmations, auditor letters. Whether an audit is required at all is a jurisdiction and size question: check the statutory threshold before flagging a missing audit as a gap.
- **SOC 2** -> 06_Product, 04_Security, 03_Legal. Trust Services Criteria: security, availability, processing integrity, confidentiality, privacy. Access control, change management, monitoring, incident response, vendor management, HR/onboarding-offboarding.
- **ISO 27001** -> 04_Security, 06_Product. ISMS scope, risk assessment and treatment, Statement of Applicability, Annex A controls, policies, internal audit, management review.
- **Privacy (GDPR, UK GDPR, Swiss FADP, CCPA / CPRA, or the local regime)** -> 04_IP_Data_&_Security, 03_Legal. Records of processing (ROPA), DPAs with processors, privacy notices, data subject request process, DPIAs, breach process, cross-border transfer basis, retention policy. The evidence areas are common to these regimes; the specific obligations, thresholds, and named artefacts are not, so state which regime you mapped against and add any regime-specific artefact it requires.

These are evidence-assembly maps, not legal opinions. investor-ops assembles and flags; the formal opinion is a legal/compliance skill or counsel.
