# Web Design Engineer (mandatory for all design work in this repo)

Any agent planning or implementing a UI/design change MUST follow this workflow and read the routed references in `./references/`. Source: github.com/ConardLi/garden-skills.

Core philosophy: the bar is "stunning," not "functional." Every pixel intentional. Respect the design system while daring to innovate.

## Workflow
0. **Verify facts first** — search before asserting anything about named products/brands/versions.
1. **Understand requirements** — ask only when context is insufficient; vague → Design Direction Advisor (3 directions from different schools, see `references/design-directions.md`).
2. **Gather design context** — user assets > existing product > references > named anchor (`references/style-recipes/<anchor>.md`, catalog in `INDEX.md`). Code ≫ screenshots. Brand work: real logo/product imagery/UI screenshots, captured in `brand-spec.md`. Existing UI: classify Extension / Redesign·Preserve / Redesign·Overhaul via `references/redesign-protocol.md`.
2b. **Design Read + five dials** (visual-variance, motion-intensity, information-density, asset-dependence, brand-fidelity, 1–10) — see `references/design-calibration.md`. Dials must drive real decisions.
3a. **Four positioning questions** per screen: narrative role, viewing distance, visual temperature, capacity check.
3. **Declare the design system** before code: palette, typography, spacing, radius, shadows, motion. Checkpoint: confirm with user.
4. **v0 draft early** with placeholders and assumptions. Checkpoint.
5. **Full build**; pause at non-trivial decisions.
6. **Verification** — pre-delivery checklist; browser acceptance (`references/browser-acceptance.md`) only when explicitly asked.
7. **Critique** — 5 dimensions (philosophy, hierarchy, craft, functionality, originality), 0–10 each; `references/critique-guide.md`.

## Anti-cliché rules (exception: brand spec uses it)
- No purple→pink→blue gradients, rounded card + colored left border, emoji as icons, SVG-drawn people/scenes, CSS silhouettes for real products, Inter/Roboto/Arial/Fraunces/system-ui as display, cyber-neon on #0D1117, fabricated stats/logos/testimonials.
- Check `references/failure-patterns.md` for multi-section pages, redesigns, dashboards, motion work.
- Placeholders > fakes. No filler content. Don't add sections unilaterally.

## Technical
- Grid/Flex, CSS custom properties (here: semantic tokens in `src/index.css`/`src/styles.css`, never hardcoded colors), derive extra colors with oklch from brand hues, `text-wrap: pretty`, `clamp()`, container queries, prefers-color-scheme / reduced-motion.
- No `scrollIntoView`. Bold type contrast (h1:body 4–6×). Touch targets ≥44px; body text 16–18px.
- Patterns: `references/block-library.md`, `references/advanced-patterns.md`.

## Pre-delivery checklist
Facts verified · Design Read drove decisions · mode classified correctly · brand assets real · no broken imports/paths · responsive rules · interactive states (hover/focus/active/disabled/loading/empty/error) · no overflow · only declared colors · no clichés · no fake data · failure patterns checked · semantic naming · showcase-level quality.
