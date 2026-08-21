# Exec-OS Handbook

`README.md` presents Exec-OS to someone discovering it. This file is the operating manual: open it when you are about to run one of the three skills and want to know what it will actually do, what it needs from you first, which sibling owns the job you are about to ask for by mistake, and what it hands back. Reference, not narrative. Use the tables, jump to the entry, run the skill. Each `skills/<name>/SKILL.md` remains the full spec; this file gets you to the right one and sets your expectations before you start. The entries are ordered the way you run them, not alphabetically.

---

## How to read an entry

| Field | What it tells you |
|---|---|
| **Question** | The one question the skill exists to answer. If your question is a different one, you are in the wrong entry. |
| **Reach for it when** | The real trigger situations, mode by mode. Followed by **Not for**, naming the sibling skill that owns the adjacent job. That line is the one worth reading twice: all three skills sit close together and the boundaries are drawn deliberately. |
| **Needs** | **Required** (it will block, degrade, or produce something ungrounded without this) and **Better with** (improves depth). Config keys are named, because every skill reads config before it does anything. |
| **Returns** | What actually comes back, per mode, and in which format. Named files are called out; where a mode produces a report with no canonical filename, that is said rather than implied. |
| **How it works** | Modes and flow at a high level, then the rules that make this output different from a generic version of the same document. |
| **Feeds** | Which skill consumes the output, inside Exec-OS and out. |

---

## The three skills

| Skill | The one job | Enter at |
|---|---|---|
| `workspace-ops` | Keep the raw substrate honest across every company: what is in the files, what is messy, what the documents still claim, and what the topology says about the team | Scan, then Advise or Deliverable Audit |
| `functional-hr-ops` | Design the target team and org, decide and sequence the hires, roll the change out | Org Design (the other four modes build on the model it produces) |
| `investor-ops` | Build and maintain the canonical data room, find and reach investors, package the room for whoever examines you | Bootstrap, or Audit if the request is ambiguous (read-only, safe) |

Note the asymmetry: `workspace-ops` is the cross-company skill, running across every scope path you configure. `functional-hr-ops` and `investor-ops` are strictly one target company per run.

---

## What every skill reads first

`.exec-os-config.yml` at the repo root, preferring `.exec-os-config.local.yml` if present. It is the single source of truth for all three, and each reads a different slice of it:

- `workspace-ops`: `workspace_ops.scope_paths` and `workspace_ops.never_touch` (the absolute blacklist), plus `archive_folder_name`, `snapshot_folder_name`, `confirm_batch_over`, and `platforms`.
- `functional-hr-ops`: `functional_hr_ops.organization_model_path`, `default_operating_model` (blank means choose by fit), `work_modes`, `sites`, `legal_entities`.
- `investor-ops`: the `dataroom`, `diligence` and `outreach` blocks, including `diligence.default_jurisdiction` (read it, there is no built-in default) and the `outreach` guardrails such as `daily_send_cap`.
- All three: `linked_founder_os_repos` and the target company, plus `preferences.visual_artifact` and `preferences.ai_ops_autonomous`.

Four rules cut across every mode of every skill. **Never delete:** a superseded file is moved to a timestamped archive, never trashed, in `workspace-ops` and in `investor-ops` alike. **Degrade gracefully:** an unreachable path, platform or linked repo is reported, not fatal, and the run continues with what it can reach. The one exception is a missing or malformed safety boundary in `workspace-ops`, which stops and asks rather than guessing. **No em dash anywhere** in any output, and no bare URLs; every link is embedded in descriptive text. **Never fabricate:** investor facts are cited or flagged unknown, affordability is checked against real financials or left alone, and a model built without evidence is labelled as such.

---

## 1 · `workspace-ops`

Run this first. Everything downstream reads what it leaves behind: `investor-ops` Sync classifies more reliably on a clean substrate, and `functional-hr-ops` designs against the de-facto map Architect produces rather than an idealized chart.

**Question.** Across every company and project I run, what is actually in my files, what is messy or stale, and what does the topology reveal about how the team really works?

**Reach for it when**

- Something is a mess and you want the picture before touching anything (Scan, then Advise).
- An external review is coming, an investor look, a DD process, a board cycle. Run both: Advise for the filesystem, Deliverable Audit for what the documents claim.
- Generated deliverables have piled up and you cannot remember which one answers which question, or you suspect a pointer or a deadline has quietly rotted (Deliverable Audit).
- A new company or project needs its working structure laid down (Onboarding), or the convention behind it written once and reused (Standardize).
- You want to know what the file topology says about the real functional and team boundaries before anyone designs an org (Architect).

**Not for** building or curating the data room, which is `investor-ops` Bootstrap, and examiner packages, which are `investor-ops` Family 3. **Not for** moving or reorganizing existing files in v1.0: that is Execute mode, which lands in v1.1, and deletion is never on the table in any version. **Not for** producing content. Decks, financials and strategy are Founder-OS, and Deliverable Audit reads generated content and reports on its consistency but never rewrites it: correcting a stale claim or merging two overlapping documents is the job of the Founder-OS skill that produced them. **Not for** team, people or org-design decisions, which go to `functional-hr-ops`. And never anything under the blacklist.

**Needs.** Required: `workspace_ops.scope_paths` and `workspace_ops.never_touch` in config. If either is missing or malformed the skill stops and asks, because it will not guess a safety boundary. Better with: an existing `Organization-Model.md` from `functional-hr-ops`, resolved through `functional_hr_ops.organization_model_path`, which Architect mirrors, Standardize uses to make the company variant org-aware, and Onboarding scaffolds from; a `File-Organization-Standard.md` already derived by Standardize, which Onboarding and Advise then apply; and a prior scan index cached under `_snapshots/`, so a re-run only processes changed or new items.

**Returns.** Scan produces a structured inventory (tree shape, hotspots, duplicate groups proven by hash, metadata summaries) plus a metadata-only scan index persisted under `_snapshots/` for incremental re-runs. Advise produces two artifacts, always both: a human report, grouped and prioritized high / medium / low, and a replayable machine-readable dry-run action plan. It also reads and updates the decisions register at `_snapshots/advise-decisions.json`. Deliverable Audit produces one prioritized report stating, per finding, what, where, why it matters, the recommended action, and who should decide. Standardize writes `File-Organization-Standard.md`, versioned, with its path referenced back into config. Onboarding creates only new folders and reports exactly what it created. Architect delivers the inferred functional map, the target information-architecture recommendation, a prioritized friction list, and explicit handoff notes for `functional-hr-ops`, optionally rendered as a visual map if `preferences.visual_artifact` allows. Of all of these, only `File-Organization-Standard.md` and the decisions register carry a stated filename; the reports do not, so agree a location before you run in a shared workspace.

**How it works.** Six modes in v1.0, and the split that matters is Advise against Deliverable Audit: Advise looks at the filesystem (duplicates, orphans, naming, nesting), Deliverable Audit looks inside the documents at what they claim and whether they still agree with each other. A workspace can be perfectly tidy and still hold two documents answering the same question, a pointer to a file archived last month, and a deadline that has passed. Three rules do the work. **Advise emits a plan, not prose:** every proposed operation is a safe move, never a delete, carrying source, destination, reason and its reverse operation, and it is exactly what v1.1 Execute will replay one to one, so the advice already is the executable artifact. **Anything measurable is measured, never asserted:** duplicates are proven by SHA-256 after a name, size and mtime prefilter, near-duplicates are flagged and never auto-merged; document overlap is reported as a measured figure over shared headings and key terms, never an impression, with two or more major sections in common as the threshold for proposing a merge; manifest completeness is reported per item, never as one aggregate claim; comparisons normalize encoding first (arrows, `≥`, escaped ampersands, smart quotes) or the check produces false alarms and gets ignored; and conversions and merges are verified by content, never by exit code. **Source material is excluded from the audit entirely,** because generated content can be regenerated and source cannot, and judging the two by the same rules is how a founder loses a transcript. Underneath both, the decisions register keeps the report from being the same report every time: findings already declined are suppressed, findings already applied are skipped, deferred ones resurface, and a finding that reappears because the file itself changed is treated as new. Architect reconstructs the org chart the files reveal rather than the one the company claims, then stops at information architecture.

**Feeds.** `functional-hr-ops`, which treats Architect's de-facto functional map and friction list as its strongest input. `investor-ops`, beneath it: a clean substrate makes Sync classification reliable, and Onboarding deliberately leaves a seam for `investor-ops` Bootstrap rather than recreating the data room folders. Where a Google Workspace Admin or directory connector exists, Architect may read groups, org units and access policies as read-only signals and then routes the decisions out: groups and org units to `functional-hr-ops`, security and access policies to `compliance-ops` or `investor-ops`, identity and access management proper to a future `security-ops`. Note that `compliance-ops` and `security-ops` are roadmap and not built, so today those two routes are a flag to you, not a handoff.

---

## 2 · `functional-hr-ops`

Run this second, on the evidence `workspace-ops` Architect produced. It closes the loop by handing back `Organization-Model.md`, which `workspace-ops` then reads to place files.

**Question.** What teams, roles, reporting lines and hires should this company have, and how does the change get rolled out?

**Reach for it when**

- There is no target org written down and "how should I structure my team" needs an answer with a rationale (Org Design).
- The team feels slow or siloed and the friction is in the interfaces rather than the boxes (Team Ops and Performance).
- You need to know whether to hire at all, and who next (Workforce Planning), then the job description, scorecard, interview plan and candidate prospectus for the role you confirmed (Hiring Prep).
- A reorg needs phasing, sequencing, communicating and measuring (Org Rollout).
- `workspace-ops` Architect handed you a friction list with team-structure implications: a function carrying too much, a missing role, a team that should split.

**Not for** organizing files or information, which is `workspace-ops`. This skill defines the org model; `workspace-ops` applies it to information architecture. **Not for** company or product strategy, which is Founder-OS and is consumed here, not written. **Not for** personnel decisions: hire, fire, reorg and compensation calls are yours, and it frames comp bands without setting pay. **Not for** employment-law advice, which routes to a legal skill or counsel.

**Needs.** Required: config (`functional_hr_ops.*`), `linked_founder_os_repos`, and one target company for the run. The strongest input is the de-facto functional map from `workspace-ops` Architect. If it is absent, the skill offers to run `workspace-ops` Scan plus Architect first, or proceeds from what you tell it and labels the resulting model as not yet evidence-grounded, which is the honest outcome rather than a blocked one. Better with: company and product strategy from Founder-OS, so the org is designed around them; current headcount, sites, work modes and legal entities; the friction evidence (silos, cross-team duplication, bottlenecks, ownerless areas) that Team Ops mode diagnoses against; and `preferences.visual_artifact` set to allow org charts and interaction maps.

**Returns.** `Organization-Model.md`, at `functional_hr_ops.organization_model_path`, updated by every Org Design or Rollout run. It is the only named file and the contract with `workspace-ops`. Alongside it, per mode: Org Design delivers the target org across four dimensions, the model rationale with its citations and stated trade-offs, transition notes from today's de-facto structure, the RACI decision matrix, and the explicit handoff to `workspace-ops`; where visuals are allowed it also renders the org chart, team-interaction map, mind map and RACI, and offers an onboarding or training pack in HTML by default, PDF or PPT on request. Team Ops delivers interaction modes and cross-team operations written as workflows (intake form, lead-times, dependency-resolution steps, escalation ladder), a friction diagnosis and a set of performance levers with their expected effect. Workforce Planning delivers a prioritized workforce plan. Hiring Prep delivers five artifacts, rendered to docs or PDF where useful: role definition, job description, scorecard, interview plan, candidate prospectus. Org Rollout delivers the phased roadmap and the metrics table with a baseline and a target window per metric.

**How it works.** Five modes, and Org Design is the entry point when the request is ambiguous because the other four build on the model it produces. Three rules separate this from a generic org chart. **Every role is defined by its negative space:** accountability, responsibilities, decision rights, and an explicit "not responsible for", on the stated principle that negative space prevents overlap better than long responsibility lists, with exactly one Accountable per decision in the RACI. Most friction lives in the interfaces, not the boxes, so the interfaces are specified as workflows with owners and cadences rather than left as lines on a chart. **The operating model is chosen by fit and the choice has to be defended:** stage, product architecture, team size and work flow are matched to a model or hybrid, the structural principle behind the choice is cited (Dunbar, two-pizza, Conway, Tuckman, span of control), and the trade-off is stated. There is no house default; `default_operating_model` left blank means choose by fit. Scaling then happens by splitting, never by front-loading: a business unit or department is added only when span of control or cognitive load demands it, and the same model renders differently at 20, 80 and 400 people. **Every hire is earned:** a need is a real, scoped gap that blocks the strategy and is tied to the work it unblocks, each gap is weighed across build, hire, reassign, outsource and defer with cost and time-to-impact, and affordability is flagged against known financials rather than estimated into existence. Frictions are always tied to a structural or operational cause, never to an individual's performance. Rollout is phased pilot, then scale, then optimize, sequenced by dependency (a manager before their reports, a platform capability before the teams that depend on it), explicitly not big-bang, with personnel-sensitive steps flagged for you and for counsel rather than decided here.

**Feeds.** `workspace-ops`, through `Organization-Model.md`: Architect mirrors it, Standardize makes the company variant org-aware from it, Onboarding scaffolds from it, and the model takes precedence over the purely inferred map, with any divergence flagged back here as drift. `investor-ops` references the org where a package needs it, for example team slides in a board pack, but does not design it. Hire sequencing and rollout cost check affordability against the data room or Founder-OS financials where available. Employment-law specifics leave the repo entirely, to a legal skill or counsel. A future `security-ops` or `iam-ops` would mirror the model in groups and org units; that skill is roadmap, not built.

---

## 3 · `investor-ops`

Run this last, and re-run it continuously. It is the only skill here that faces outward, and it consumes rather than authors: the substrate from `workspace-ops`, the org from `functional-hr-ops`, and every strategy artifact from Founder-OS.

**Question.** How do I keep one honest, examiner-ready room for this company, find and reach the investors who actually fit, and hand each outside party exactly what they should see?

**Reach for it when**

- A company needs its canonical data room laid down for the first time (Bootstrap), or the latest Founder-OS deliverables picked up into it (Sync).
- You want to know what is missing before anyone else asks (Audit, which is also the safe default when a request is ambiguous).
- A raise is starting: build the target list, score fit, run cold and warm outreach, track the pipeline, nurture the warm-but-not-closed (Family 2).
- A named examiner has arrived: an investor in a round (Fundraise Prep), a competition or grant call (Competition and Grant Submission), a DD questionnaire (DD Support), the board (Board and Investor Delivery), an auditor or an acquirer (Audit Prep).

**Not for** producing strategy, decks, financials or metrics from scratch: those come from Founder-OS (`narrative-assets-ops`, `business-model`, `gtm`, `metrics-dashboard`), and this skill collects them, raises with them and packages them. **Not for** authoring the board pack or the investor letter, which `narrative-assets-ops` writes; investor-ops files, audience-gates, logs the distribution and manages the cadence, and routes back upstream when the pack is missing or stale. **Not for** reorganizing the raw filesystem, which is `workspace-ops`. **Not for** designing the team or org, which is `functional-hr-ops`. **Not for** legal advice: assemble the evidence, defer the judgment to the relevant legal skill or counsel. And one internal boundary worth learning, because it is easy to get backwards: updates to investors who have already invested are Family 3 Board and Investor Delivery, which is examination-grade reporting, not Family 2 Prospect Updates, which is nurture for investors who have not.

**Needs.** Required: the `dataroom`, `diligence` and `outreach` config blocks; `linked_founder_os_repos` and the target company for the run; and that company's jurisdiction, read from the linked Founder-OS config (`config.company.jurisdictions.incorporation`, then `.primary`) and falling back to `diligence.default_jurisdiction`, because the jurisdiction selects the reference standard. Better with: `company_type` set, so the sector overlays apply; a `workspace-ops` pass on a chaotic source (Sync can suggest one, it does not run it); the received questionnaire for DD Support; and, for a competition or grant, the call's current criteria, weights, eligibility rules and annex list, retrieved at runtime with an absolute date. Fundraise Prep consumes the Family 1 Audit as its single source of truth on gaps and does not recompute them, so run Audit before you package for a round.

**Returns.** Bootstrap creates the room on `dataroom.platform`, named per company, from `dataroom.canonical_structure` (`00_Overview` through `09_Traction_&_Metrics`, plus `99_DD_QA_&_Trackers` with empty Q&A and access-log placeholders), with sector overlays applied by `company_type` and a seeded root index page. It is idempotent: re-running fills gaps without clobbering. Sync returns the room updated in place: every relevant deliverable indexed by reference, approved finals copied in, each stamped with the full metadata schema (`audience`, `lens`, `version`, `source_skill`, `sensitivity`), superseded items versioned and archived, the index and manifest refreshed, and near-duplicates reported for human judgment rather than merged. Audit returns a prioritized punch list of blocker, should-fix and nice-to-have, naming the yardstick it graded against. Investor List returns one living investor tracker carrying, per investor, name, firm, type, stage and sector focus, geography, typical check size, thesis, portfolio and conflicts, warm-intro path, source and status. Fit and Scoring returns a ranked shortlist with a one-line reason per investor and the recommended intro path, warm before cold. Outreach and Pipeline returns drafted sends and follow-ups on the configured cadence, the pipeline maintained in `outreach.crm_location` through `outreach.pipeline_stages`, and a snapshot of count by stage, this week's actions, and stale contacts to nudge. Fundraise Prep returns the access-filtered investor view plus an optional export bundle, an opened access-log entry, and a readiness summary phrased as "<stage>-ready except N items". Competition and Grant Submission returns one self-contained document plus every mandated annex, with the decision letter filed next to it afterwards. DD Support returns the Q&A tracker, each question statused answered, partial, missing or N/A, and the evidence tracker behind it. Audit Prep returns the evidence index, the gap flags, and a readiness percentage per control area. Board packs, readiness dashboards and pipeline boards may render as HTML where `preferences.visual_artifact` allows. Everything Family 3 writes goes into `99_DD_QA_&_Trackers`; it never edits a source file.

**How it works.** Three mode families, entered at whichever one you need, over one shared room. Three rules make the output different from a generic data room. **The reference standard is selected at runtime from the company's jurisdiction and there is no hardcoded default,** because a US seed fund, a UK EIS angel, a German business angel and a Singaporean fund apply different document lists, and grading a founder against another market's checklist makes them look unprepared to the investors they actually have. The selection rule is mandatory and ordered: read the jurisdiction, apply the mapped reference body where one is known (SICTIC and the Swiss Angel Investor Handbook with SECA and Innosuisse for CH, NVCA for the US, BVCA plus SEIS/EIS evidence for the UK, the German Startups Association, France Invest, AIFI, SVCA), otherwise research the national VC or angel association's guidance at runtime and cite it, and if the jurisdiction is unset or the round is cross-border with a lead investor in a different market from the entity, say so and ask once rather than picking silently. Only one axis is re-derived per run: the folder taxonomy and the sector overlays are stable, while the stage-by-stage document expectations, the corporate-form documents, the employment and IP-assignment norms and the regulatory and privacy annexes are not. An item with no equivalent in the selected jurisdiction is marked `n/a (jurisdiction)` with a one-line reason, so nobody chases a document their investors will never ask for. **Completeness is only ever relative to a named checklist,** never claimed in the abstract: the stage and the standard are stated together in every readiness claim and every package footer as `standard applied: <name>`. **Nothing leaves without being gated and logged:** content tagged `restricted` (employee PII, litigation, key IP, principals and counsel only) never enters a package or an investor share automatically, including it takes an explicit per-item override with a logged reason, and the access log in `99_DD_QA_&_Trackers/Access_Log` is non-negotiable in a live process. Two further mechanics are worth knowing before you run. Sync is hybrid by design, indexing everything by reference and copying only approved finals, which is what keeps the room from becoming a second, drifting copy of your workspace. And Competition and Grant Submission is treated as a different examiner rather than a lighter Fundraise Prep: a jury receives one self-contained document plus named annexes, at a hard deadline, scored against a published weighted rubric and compared against the other submissions in the round, so nothing is pulled from a room and nothing outside the document exists. Hence eligibility is checked before a word is written, because a single rule invalidates the whole submission; the rubric is retrieved at runtime rather than assumed, because forms change between cycles; sections are ordered to the criteria and answered in the programme's own vocabulary, with effort allocated to weight; the sector overlay is answered, not only the common core; and every mandated annex is assembled, since a missing one is usually a formal rejection rather than a lost point. The rejection letter is then filed next to the submission, because it names the criteria you failed and is the best input to the next attempt.

**Feeds.** Nothing inside Exec-OS. `investor-ops` is the last skill in the chain and the outward-facing one, so its consumers are people: investors, DD teams, juries and grant evaluators, the board, auditors, acquirers. What it does instead is route: back to Founder-OS `narrative-assets-ops` when a pack is missing or stale, to `workspace-ops` when Sync meets a chaotic source, to `functional-hr-ops` for anything org-shaped a package needs. Recurring reporting and outreach cadences can register a scheduled task, with the generation logic staying here.

---

## The handoff chain

Indentation is "reads the output of".

```
.exec-os-config.yml                        read first by all three
                                           (.exec-os-config.local.yml wins if present)
│
workspace-ops        Scan → Advise · Deliverable Audit · Standardize · Onboarding · Architect
│    File-Organization-Standard.md         applied by Standardize, Onboarding, Advise
│    Architect → de-facto functional map + prioritized friction list
│         │
│         ↓
functional-hr-ops    Org Design → Organization-Model.md
│         │          Team Ops · Workforce Planning · Hiring Prep · Org Rollout build on it
│         ↑
│         └── workspace-ops reads Organization-Model.md back, via
│             functional_hr_ops.organization_model_path. The model beats the inferred
│             map; divergence is flagged back as drift.
│
investor-ops         Bootstrap → Sync → Audit → Fundraise Prep | Grant Submission
                                              | DD Support | Board Delivery | Audit Prep
     ↑ Founder-OS outputs/ (Sync), narrative-assets-ops (materials, board pack,
       investor letter), metrics-dashboard (numbers)
     ↑ workspace-ops: a clean substrate makes Sync classification reliable;
       Onboarding leaves the data room seam for Bootstrap rather than recreating it
     ↑ Family 1 Audit is the single gap source of truth for Fundraise Prep,
       which does not recompute gaps. Run Audit first.
```

Two skills named in the handoffs do not exist yet. `compliance-ops` and `security-ops` are roadmap: where `workspace-ops` Architect routes security, access-policy or identity decisions to them, treat it today as a flag raised to you rather than a handoff that will land somewhere.
