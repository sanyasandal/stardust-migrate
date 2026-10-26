# Design-adoption gate — donor token probe

- Tokens: stardust/reskin/donor-tokens.json
- Rendered: stardust/reskin/pages/index.html
- Spec: default (rendered-page conventions)
- Generated: 2026-10-26T15:29:58.562Z

## Assertions — 14/15 pass

- [x] page bg = rgb(255, 255, 255) — rgb(255, 255, 255)
- [x] body fg = rgb(60, 66, 66) — rgb(60, 66, 66)
- [x] font-family token string = Inter, "Helvetica Neue", Arial, sans-serif — Inter, "Helvetica Neue", Arial, sans-serif
- [x] body font size = 16px — 16px
- [x] display weight = 400 — 400
- [x] heading color = rgb(131, 0, 81) — rgb(131, 0, 81)
- [x] primary button bg = rgb(208, 0, 111) — rgb(208, 0, 111)
- [x] primary button fg = rgb(255, 255, 255) — rgb(255, 255, 255)
- [x] primary button radius = 4px — 4px
- [x] primary button padding (±2px) = 0px 16px — 0px 16px
- [x] primary button font size = 16px — 16px
- [x] container max-width (±20px) = 1180px — 1180px
- [ ] section rhythm (±16px) = 40px — 0px
- [x] no horizontal overflow @1440 — overflow=0px
- [x] no horizontal overflow @360 — overflow=0px

**Overall: FAIL**

> The probe proves tokens; it does not prove the page READS as the donor.
> Complete the gate with the side-by-side eyeball vs the donor screenshots
> (stardust/canon-source/assets/screenshots/) per reference/gates.md.
