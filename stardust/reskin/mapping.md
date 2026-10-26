# Mapping brief — fortstreet-h.schools.nsw.gov.au → oneAZ Design System v3.2 (Figma)

Content: `stardust/reskin/content-model/index/content-model.json` (scope `main`, 9 slots, 18 images).
Donor: `stardust/reskin/donor-modules.md` (M1–M8, Figma file rsZQmpVzuyn0KhCDA3WN60 v2414619086154506088).

| Slot | Content | Donor module | Rationale | Status |
|---|---|---|---|---|
| s01 | h2 "Welcome to Fort Street High School" + lede + "Why Choose Us?" link + campus photo | M2 (Home Hero Branded) | heading + lede + one CTA + one large image = M2's text-left / image-right split hero on sage | mapped |
| s02 | h2 "The Fort Street High School difference" + 3 items (image, h3, body, link) | M9 (Teaser / Card grid — 3 Teasers) | a titled run of 3 image-topped cards with title, body and action = M5 3-up card grid | mapped |
| s03 | h2 "Principal's message" + 2 paragraphs + CTA + portrait | M4 (Teaser / Text + Image) | heading + body + one primary action beside one image = M4 row | mapped |
| s04 | poster image + h2 "Fort Fest …" + paragraph + "Find out more" link | M4 (Teaser / Text + Image) | image-first text+image row = M4 with the image on the left | mapped |
| s05 | h2 "School tours and open evenings" + paragraph + booking link + image | M6 (CTA Banner) | a single call to action with short copy and a small image = M6 bordered banner | mapped |
| s06 | h2 "Quick links" + 6 items (image, h3, body) | M9 (Teaser / Card grid — 3 Teasers) | a 6-card titled run = M5 grid, two rows of 3 | mapped |
| s07 | h2 "Ready to apply?" + 2 paragraphs + "How to apply" CTA + student photo | M3 (Teaser / Home Hero (impact)) | a closing impact statement with one action over a photograph = M3 image band with overlay | mapped |
| s08 | illustration + h2 "Key dates" + paragraph + link | M4 (Teaser / Text + Image) | image + heading + body + action = M4 row | mapped |
| s09 | h2 "Stay connected on our socials" + 3 Facebook posts (image + text + icon text) | M9 (Teaser / Card grid — 3 Teasers) | a titled run of 3 image-topped items = M5 cards (feed rendered static) | mapped |
| header | skip links, NSW Government, crest + school name/motto, search, 5 nav items | M1 (Header) | source header swapped for donor header carrying every source label and href | chrome |
| footer | contacts, socials, acknowledgement, policy links | M7 (Footer) | source footer swapped for donor footer carrying every source label and href | chrome |

## Stats

- Content slots: 9 · mapped 9 (100%) · new-module 0 · carried-invisible 0
- Chrome: 2 (header → M1, footer → M7)
- New modules: none

## Deltas

- **D1** — header: source `header.header-wrapper` replaced by the oneAZ header (M1) carrying the source's labels and hrefs; out of content-gate scope.
- **D2** — footer: source `footer.footer-wrapper` replaced by the oneAZ footer (M7) carrying the source's labels and hrefs; out of content-gate scope.
- **N-D1** — cookie/consent chrome removal (default ledger, `stardust/reskin/normalize/index.mjs`).
- **N-D2** — de-carousel (default ledger; no carousel present on this page).

## Casing policy

Captured text is rendered-case and is carried byte-for-byte. The oneAZ kit sets headings in sentence case; the source is already sentence case, so no `text-transform` is applied. Casing is never changed by editing strings.

## Icon-ligature text

The source uses Material Symbols ligatures (`east`, `keyboard_arrow_right`, `search`). Treatment: **carry as text** in the renderer's `.glyph` span (`aria-hidden`), which draws the arrow/search/menu shape in CSS and visually hides the ligature word; the bytes stay in the gate reference.

## Judgment calls

0. Card runs (s02, s06, s09) use M9, the kit's own 3-up composition of M5 (`.Block Element` "3 Teasers", 12542:1442 / mobile 12552:4525), registered as a composition variant.

1. The Figma link points at the kit's WELCOME cover (node 6400:21997); the file holds no page design for this site, so modules are taken from the kit's TEMPLATE SECTIONS (Home Hero Branded, Teaser, CTA Banner, Header, Footer).
2. Lexia is a licensed AstraZeneca face — adopted as the family token with a Roboto Slab fallback, never bundled.
3. The source's hero heading is an h2 (the page has no h1); it is carried as h2 at the display role (flag for the owner: no h1 on the source home page).
4. The Facebook feed (s09) is a client-rendered widget; it is carried as static cards with the captured posts.
