<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Branch-assigned non-admin staff automatically enter their sole sub-branch after sign-in, avoiding an unnecessary clinic picker.
- The installed app's `/sw.js` (scope /app/) never caches pages; it clears legacy caches and handles Web Push (VAPID, sent from a super-admin server function) whose taps open /app/inbox/:id.
- Dental dashboard data is role-focused: leadership sees clinic financials, dentists see their assigned schedule, and front-desk roles see queue and collections.
- Public marketing pages use CDN-backed snapshots of the current dashboard; tutorial image files remain isolated and unchanged.
- Every shipped feature, improvement or bug fix must be logged as a new entry (newest first) in `src/data/updates.ts` (the public /updates page) in the same change — no exceptions.
- MANDATORY for any design/UI/layout/visual/styling task (plan or implementation): first read `docs/design-skill/SKILL.md` in full and follow its entire workflow (fact check, Design Read + five dials, design-system declaration, anti-cliché rules, pre-delivery checklist), plus every reference file it routes to under `docs/design-skill/references/`. Why: the user requires the Web Design Engineer skill itself to govern all design work, not ad-hoc plans.
- MANDATORY for every AI assistant: the full Garden Skills suite lives in `skills/` (index: `skills/README.md`). Before any task matching a skill (design, articles, images, motion, presentations, knowledge retrieval), read that skill's `SKILL.md` in full plus its routed references and follow its workflow exactly. Why: guidelines must be tool-agnostic so any AI builder applies them identically.
