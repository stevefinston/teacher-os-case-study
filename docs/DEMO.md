# Teacher OS screenshot plan and demo storyboard

## Safely prepared visuals

The local case-study page includes three canonical repository visuals. All use fictional student data and are labeled as product-reference states rather than live-user screenshots.

1. **Students overview** — fictional Jordan Lee; demonstrates runtime composition across Directory, Student Progress, Hall Pass, and Student Support. The repository marks the referenced workflow deployed and production-verified.
2. **Grading Workspace** — fictional assignment and students; demonstrates the production visual standard and milestone-driven grading flow.
3. **Student Directory** — fictional names; demonstrates Classroom-backed identity review and the teacher-owned record model.

These assets remain local. Do not copy them to a public repository or website without explicit approval.

## Recommended capture library

Create a dedicated synthetic Google Workspace identity before recording. Use clearly fictional classes, students, assignments, emails, and records.

| Priority | Capture | Product state | Safety note |
|---|---|---|---|
| 1 | Home launcher | All core workspaces connected; no real account identifiers visible | Use synthetic account avatar/name |
| 2 | Student Progress preview | Synthetic Classroom-wide CSV with mapping confirmation | Show sample rows only; no real file IDs |
| 3 | Students overview | One fictional student with progress, Hall Pass, and support coverage | Confirm page is private/no-store; crop browser chrome |
| 4 | Grading Workspace | Synthetic assignment at “Ready to grade,” then reviewed results | No real prompts, email addresses, or Sheet links |
| 5 | Review-first communication | Editable draft and recipient confirmation, before Send | Never send during portfolio recording |
| 6 | Hall Pass Global Insights | Synthetic class traffic and one active pass | Use current live implementation, not the stale pre-lean mockup |
| 7 | Student Support report | Fictional report ready for a meeting | Verify no metadata is embedded in exported file |
| 8 | Honest empty/error state | `setup-required`, `no-records`, or unavailable | Demonstrates technical/product judgment |

## 60–90 second storyboard and narration

**0–10 seconds — the problem**

“Teachers already have Forms, Sheets, Classroom, and Gmail. The missing layer is the operational work between them: assembling records, deciding what needs attention, and preparing to communicate clearly.”

**10–25 seconds — bring in progress data**

Preview a synthetic Classroom-style CSV in Student Progress.

“Teacher OS samples and validates the source before anything is persisted. If the structure or date meaning is ambiguous, it stops and asks instead of guessing.”

**25–42 seconds — generate a student story**

Open Students for fictional Jordan Lee.

“The system uses one exact Directory identity to compose progress, Hall Pass, and support facts at request time. This is a generated view—not a stored student profile.”

**42–57 seconds — show the grading workflow**

Open a synthetic assignment and move through compatibility, grade, review, report, and feedback milestones.

“A tested workflow state machine keeps the next action truthful. Deterministic checks handle structure and readiness; model calls are reserved for grading and feedback.”

**57–70 seconds — stop at human control**

Open a generated communication draft, edit it, and show recipient confirmation. Do not send.

“AI drafts. The teacher edits, verifies, and explicitly sends. Teacher OS never sends student- or family-facing communication autonomously.”

**70–85 seconds — close with architecture and evidence**

Show the architecture diagram and evidence ledger.

“Student records remain in the teacher’s Google Workspace. The current main branch passes 1,311 tests and is deployed. What I’m not claiming yet is equally important: external-teacher adoption and measured time saved still need pilot evidence.”
