<!-- stardust:provenance
  writtenBy: stardust:reskin/figma-donor.mjs
  writtenAt: 2026-10-26T14:32:27Z
  readArtifacts:
    - stardust/reskin/curation-rules.json
    - stardust/canon-source/module-candidates.json
  synthesizedInputs: []
-->

# Donor modules — oneAZ Design System v3.2

| # | Module | Where seen | Description |
|---|--------|-----------|-------------|
| M1 | Header (oneAZ Header / Full) | canon-source/assets/screenshots/header.png · node 12387:11655 | anatomy: brand logo left + primary nav items (Inter 14/500, sub-nav chevrons) + utility links row (Contact / language selector) + search icon + outlined Login button; mobile: logo + search + hamburger; variants: Breakpoint=Desktop\|Tablet\|Mobile, Type=Full\|Registration; components: Header, .Header / Navigation Item, .Header / Actions, Brand Logos |
| M2 | Home Hero Branded | canon-source/assets/screenshots/home-hero-branded.png · node 12950:24869 | anatomy: split hero on a sage (rgb 235,239,238) band: brand logo, Lexia h1 56/60 in plum, Inter 18/28 lede, one primary button left; full-height image right; mobile stacks image above text; variants: Breakpoint=Desktop\|Tablet\|Mobile; components: Home Hero Branded, Button, Brand Logos |
| M3 | Teaser / Home Hero (impact) | canon-source/assets/screenshots/teaser-home-hero.png · node 12428:14029 | anatomy: full-bleed image band with dark overlay: white Lexia impact headline, white Inter lede, one primary button; Large/Medium/Small heights, Left/Center/Right content alignment; variants: Size=Large\|Medium\|Small, Alignment=Left\|Center\|Right; components: Teaser, .Teaser / Hero Content, Button |
| M4 | Teaser / Text + Image | canon-source/assets/screenshots/teaser-text-image.png · node 12431:14303 | anatomy: two-column row: image one side, Lexia heading (plum) + Inter body + primary button the other; Alignment Left\|Right alternates the image side; mobile stacks image above text; variants: Alignment=Left\|Right, Breakpoint=Desktop\|Tablet\|Mobile; components: Teaser / Text + Image, .Title, Button |
| M5 | Teaser / Card grid | canon-source/assets/screenshots/teaser-card.png · node 12431:14533 | anatomy: section title (.Title Teaser) + grid of sage cards (radius 8): image top, italic Inter tag (Event/News…), Lexia card heading in magenta, Inter body, primary button; 3-up at 1440, 1-up on mobile; variants: Breakpoint=Desktop\|Tablet\|Mobile, Tag=Event\|Course\|Product\|News, Chip; components: Teaser / Card, .Teaser / Card content, .Teaser / Card Tag, Button |
| M9 | Teaser / Card grid — 3 Teasers composition | canon-source/assets/screenshots/block-content.png · node 12552:3812 | anatomy: the kit's .Block Element '3 Teasers' composition: three Teaser / Card instances 366.67 wide in a 1180 row, gap 40; mobile stacks them 375 wide, gap 16; variants: Element type=3 Teasers, Breakpoint=Desktop\|Tablet\|Mobile; components: .Block Element, Teaser / Card |
| M6 | CTA Banner | canon-source/assets/screenshots/cta-banner.png · node 13370:1922 | anatomy: white panel with 4px grey (rgb 178,180,180) border and radius 8, padding 40: small image left, Lexia heading (plum), Inter body, optional input, primary/secondary/tertiary buttons row, trailing small print; variants: Breakpoint=Desktop\|Tablet\|Mobile; components: CTA Banner, Button, Input Field |
| M7 | Footer | canon-source/assets/screenshots/footer.png · node 12406:12220 | anatomy: white footer: brand logo + short mission paragraph left; two columns of Inter 14 links; social icon row (LinkedIn, Facebook, YouTube, Instagram, X) + job-code small print; variants: Breakpoint=Desktop\|Tablet\|Mobile; components: Footer, Social Icons, Brand Logos |
| M8 | Links (in-page nav) | canon-source/assets/screenshots/links.png · node 12929:23593 | anatomy: in-page nav items: Inter 14/700 magenta links with a 4px amber (rgb 240,171,0) left rule, optional em-dash nesting; horizontal row at 1440, vertical list on mobile; variants: Layout=Horizontal\|Vertical |
| — | Block Content | canon-source/assets/screenshots/block-content.png · node 12552:3653 | excluded — do not develop: a composite documentation page; its .Block Element set (12534:1413) is included as M5b for the 3-up card composition, the rest is covered by M3/M4 |
| — | Carousel | canon-source/assets/screenshots/carousel.png · node 12473:15950 | excluded — do not develop: no captured content slot is a carousel; M5 covers card runs statically |
| — | Breadcrumb | canon-source/assets/screenshots/breadcrumb.png · node 12410:12922 | excluded — do not develop: the archetype (home) has no breadcrumb; revisit for inner-page siblings |
| — | Accordion | canon-source/assets/screenshots/accordion.png · node 12362:10362 | excluded — do not develop: no disclosure content on the archetype |
| — | Back to top | canon-source/assets/screenshots/back-to-top.png · node 12522:1048 | excluded — do not develop: a floating utility atom, not a section-level module |
| — | Chips | canon-source/assets/screenshots/chips.png · node 12334:9710 | excluded — do not develop: an atom; the chip spec is carried by radii.chip |

**Notes for reskin:** Headings are sentence case in Lexia (regular weight, never bold) — plum rgb(131,0,81) on light grounds, magenta rgb(208,0,111) for teaser-card headings, white over imagery. Body copy is Inter 16/24 in rgb(60,66,66). Primary buttons are solid magenta with white Inter 16/700 labels, 4px radius, 42px tall, 16px side padding; secondary is the outlined inverse. Bands alternate white and sage rgb(235,239,238); cards sit on sage with 8px radius and no shadow. Amber rgb(240,171,0) is reserved for the in-page-nav rule and the logo spark.
