# AR / RTL QA — `main 79c17aa` + `preview/v4-safe` new routes

Scope: `ar` locale RTL only — no fixes unless trivial `dir` attribute. Log issues, do not redesign.

## Checks

- [OK] `src/app/[locale]/layout.tsx:67` — `const dir = isRtl(locale) ? "rtl" : "ltr"` present; `src/app/[locale]/layout.tsx:74` — `<div lang={locale} dir={dir}>` present; `src/app/[locale]/layout.tsx:81` — script hydrates `document.documentElement.lang/dir`. `EN/FR` → `ltr`, `AR` → `rtl`.
- [OK] `ar` routes present in `out/`: `out/ar/revenue-systems/method/index.html`, `out/ar/intelligence/index.html`, `out/ar/ai-systems/index.html` — all generated 48/48, no 404.
- [OK] Fonts `src/lib/fonts.ts:1` — `Cormorant_Garamond` + `JetBrains_Mono` + `Inter` via `next/font/google` (`latin`/`latin-ext` subsets). No broken layout observed in build; Arabic renders with system fallback for Arabic glyphs (no `arabic` subset in current fonts) — acceptable for preview, flagged for prod typography review if founder wants dedicated Arabic display font.
- [OK] `git diff main..feat/v4-fr-translations -- src/messages/ar.json` → 0 lines — AR untouched (FR-only per directive), stubs remain `[NEEDS INPUT]` as intended for preview-hidden FR/AR.
- [OK] Bento grids (`ServicesOverview` 4-col, `audit` 6-cell, Method/Intelligence/AI grids `gap-[1px] bg-ledger-border`) inherit `dir` — reading order mirrors correctly; kinetic `translateY(12px)` is block-axis only, RTL-neutral.
- [OK] Hero image wrapper `dir="ltr"` prevents imagery mirroring while text mirrors — correct per spec.

## Issues
- None blocking. No trivial `dir` fix needed — mechanism already present.
- Non-blocking note: consider Arabic display-font review post-launch (currently `latin`/`latin-ext` only). Not a blocker for EN-only prod.
