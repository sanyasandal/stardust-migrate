<!-- stardust:provenance
  writtenBy: stardust:reskin/figma-donor.mjs
  writtenAt: 2026-10-26T14:32:27Z
  readArtifacts:
    - stardust/reskin/curation-rules.json
    - stardust/reskin/donor-tokens.json
    - stardust/canon-source/foundation/
  synthesizedInputs: []
  note: DESCRIPTIVE capture of a Figma design system (REST), not browser-rendered
-->
---
name: "oneAZ Design System v3.2"
description: "AstraZeneca's oneAZ web kit: a calm white-and-sage system with Lexia slab-serif headings, Inter body copy and a single magenta action colour."
colors:
  rgb-255-255-255: "#ffffff"
  rgb-235-239-238: "#ebefee"
  rgb-178-180-180: "#b2b4b4"
  rgb-60-66-66: "#3c4242"
  rgb-196-207-205: "#c4cfcd"
  rgb-141-143-143: "#8d8f8f"
  rgb-216-223-222: "#d8dfde"
  rgb-101-105-105: "#656969"
  rgb-208-0-111: "#d0006f"
  rgb-246-206-231: "#f6cee7"
  rgb-216-218-218: "#d8dada"
  rgb-227-102-169: "#e366a9"
  rgb-131-0-81: "#830051"
  rgb-79-0-49: "#4f0031"
  rgb-240-171-0: "#f0ab00"
  rgb-157-176-172: "#9db0ac"
  rgb-211-211-222: "#d3d3de"
  rgb-37-35-89: "#252359"
  rgb-196-0-122: "#c4007a"
  rgb-240-179-35: "#f0b323"
  rgb-0-114-96: "#007260"
  rgb-174-37-115: "#ae2573"
  rgb-0-179-152: "#00b398"
  rgb-229-247-245: "#e5f7f5"
  rgb-198-237-249: "#c6edf9"
  rgb-0-22-99: "#001663"
  rgb-0-116-224: "#0074e0"
  rgb-161-230-2: "#a1e602"
  rgb-252-217-214: "#fcd9d6"
  rgb-239-65-48: "#ef4130"
  rgb-0-85-137: "#005589"
  rgb-203-219-42: "#cbdb2a"
  rgb-0-165-226: "#00a5e2"
  rgb-253-236-234: "#fdecea"
  rgb-245-232-234: "#f5e8ea"
  rgb-0-50-98: "#003262"
  rgb-172-24-46: "#ac182e"
  rgb-0-174-155: "#00ae9b"
  rgb-112-153-211: "#7099d3"
  rgb-229-244-242: "#e5f4f2"
  rgb-0-59-69: "#003b45"
  rgb-0-146-124: "#00927c"
  rgb-199-34-99: "#c72263"
  rgb-104-16-212: "#6810d4"
  rgb-55-58-54: "#373a36"
  rgb-0-77-116: "#004d74"
  rgb-178-210-52: "#b2d234"
  rgb-232-219-249: "#e8dbf9"
  rgb-47-84-117: "#2f5475"
  rgb-255-0-0: "#ff0000"
  rgb-151-152-155: "#97989b"
  rgb-254-229-228: "#fee5e4"
  rgb-229-243-244: "#e5f3f4"
  rgb-86-51-92: "#56335c"
  rgb-0-131-138: "#00838a"
  rgb-239-234-239: "#efeaef"
  rgb-0-56-101: "#003865"
  rgb-239-111-34: "#ef6f22"
  rgb-221-48-93: "#dd305d"
  rgb-230-236-240: "#e6ecf0"
  rgb-213-247-243: "#d5f7f3"
  rgb-44-213-196: "#2cd5c4"
  rgb-32-162-149: "#20a295"
  rgb-128-131-199: "#8083c7"
  rgb-37-14-98: "#250e62"
  rgb-29-164-176: "#1da4b0"
  rgb-248-72-94: "#f8485e"
  rgb-239-252-255: "#effcff"
  rgb-229-240-235: "#e5f0eb"
  rgb-0-65-34: "#004122"
  rgb-255-243-59: "#fff33b"
  rgb-0-104-56: "#006838"
  rgb-242-101-34: "#f26522"
  rgb-220-68-5: "#dc4405"
  rgb-51-112-121: "#337079"
  rgb-255-199-44: "#ffc72c"
  rgb-23-60-84: "#173c54"
  rgb-255-249-234: "#fff9ea"
  rgb-0-0-0: "#000000"
  rgba-0-0-0-0-5: "#00000080"
  rgb-239-239-239: "#efefef"
  rgb-151-71-255: "#9747ff"
typography:
  display:
    fontFamily: "Lexia, \"Roboto Slab\", Georgia, serif"
    fontSize: "56px"
    fontWeight: 400
    lineHeight: "60px"
  headline:
    fontFamily: "Lexia, \"Roboto Slab\", Georgia, serif"
    fontSize: "46px"
    fontWeight: 400
    lineHeight: "50px"
  title:
    fontFamily: "Lexia, \"Roboto Slab\", Georgia, serif"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: "40px"
  body:
    fontFamily: "Inter, \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
rounded:
  button: "4px"
  card: "8px"
  chip: "9999px"
spacing:
  section: "40px"
  container: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.rgb-208-0-111}"
    textColor: "{colors.rgb-255-255-255}"
    rounded: "4px"
    padding: "0px 16px"
    height: "42px"
  button-secondary:
    backgroundColor: "{colors.rgb-255-255-255}"
    textColor: "{colors.rgb-208-0-111}"
    rounded: "4px"
    padding: "0px 16px"
    height: "42px"
  card-primary:
    backgroundColor: "{colors.rgb-235-239-238}"
    textColor: "{colors.rgb-208-0-111}"
    rounded: "8px"
    padding: "24px"
---

# Design System: oneAZ Design System v3.2

## 1. Overview

**Creative North Star: "Trustworthy clarity: one serif voice, one action colour, generous sage panels."**

White pages carry sage-tinted panels for heroes and cards; Lexia headings in plum or magenta lead each module and one magenta button closes it.

**Key Characteristics:**
- Lexia + Inter pairing
- magenta as the only action colour
- sage panels without shadows
- 1180px content measure

**Rule 1.** one primary button per module

**Rule 2.** headings in Lexia regular, never bold

**Rule 3.** body copy stays Inter 16/24 graphite

## 2. Colors

- **White** (#ffffff): pageBg.
- **Sage 10** (#ebefee): lightBandBg.
- **Grey 40** (#b2b4b4): borderMuted.
- **Graphite** (#3c4242): bodyFg.
- **rgb-196-207-205** (#c4cfcd): unassigned.
- **Grey 60** (#8d8f8f): mutedFg.
- **rgb-216-223-222** (#d8dfde): unassigned.
- **rgb-101-105-105** (#656969): unassigned.
- **Magenta** (#d0006f): accent.
- **rgb-246-206-231** (#f6cee7): unassigned.
- **rgb-216-218-218** (#d8dada): unassigned.
- **rgb-227-102-169** (#e366a9): unassigned.
- **Plum** (#830051): headingFg.
- **rgb-79-0-49** (#4f0031): unassigned.
- **Amber** (#f0ab00): highlight.
- **rgb-157-176-172** (#9db0ac): unassigned.
- **rgb-211-211-222** (#d3d3de): unassigned.
- **rgb-37-35-89** (#252359): unassigned.
- **rgb-196-0-122** (#c4007a): unassigned.
- **rgb-240-179-35** (#f0b323): unassigned.
- **rgb-0-114-96** (#007260): unassigned.
- **rgb-174-37-115** (#ae2573): unassigned.
- **rgb-0-179-152** (#00b398): unassigned.
- **rgb-229-247-245** (#e5f7f5): unassigned.
- **rgb-198-237-249** (#c6edf9): unassigned.
- **rgb-0-22-99** (#001663): unassigned.
- **rgb-0-116-224** (#0074e0): unassigned.
- **rgb-161-230-2** (#a1e602): unassigned.
- **rgb-252-217-214** (#fcd9d6): unassigned.
- **rgb-239-65-48** (#ef4130): unassigned.
- **rgb-0-85-137** (#005589): unassigned.
- **rgb-203-219-42** (#cbdb2a): unassigned.
- **rgb-0-165-226** (#00a5e2): unassigned.
- **rgb-253-236-234** (#fdecea): unassigned.
- **rgb-245-232-234** (#f5e8ea): unassigned.
- **rgb-0-50-98** (#003262): unassigned.
- **rgb-172-24-46** (#ac182e): unassigned.
- **rgb-0-174-155** (#00ae9b): unassigned.
- **rgb-112-153-211** (#7099d3): unassigned.
- **rgb-229-244-242** (#e5f4f2): unassigned.
- **rgb-0-59-69** (#003b45): unassigned.
- **rgb-0-146-124** (#00927c): unassigned.
- **rgb-199-34-99** (#c72263): unassigned.
- **rgb-104-16-212** (#6810d4): unassigned.
- **rgb-55-58-54** (#373a36): unassigned.
- **rgb-0-77-116** (#004d74): unassigned.
- **rgb-178-210-52** (#b2d234): unassigned.
- **rgb-232-219-249** (#e8dbf9): unassigned.
- **rgb-47-84-117** (#2f5475): unassigned.
- **rgb-255-0-0** (#ff0000): unassigned.
- **rgb-151-152-155** (#97989b): unassigned.
- **rgb-254-229-228** (#fee5e4): unassigned.
- **rgb-229-243-244** (#e5f3f4): unassigned.
- **rgb-86-51-92** (#56335c): unassigned.
- **rgb-0-131-138** (#00838a): unassigned.
- **rgb-239-234-239** (#efeaef): unassigned.
- **rgb-0-56-101** (#003865): unassigned.
- **rgb-239-111-34** (#ef6f22): unassigned.
- **rgb-221-48-93** (#dd305d): unassigned.
- **rgb-230-236-240** (#e6ecf0): unassigned.
- **rgb-213-247-243** (#d5f7f3): unassigned.
- **rgb-44-213-196** (#2cd5c4): unassigned.
- **rgb-32-162-149** (#20a295): unassigned.
- **rgb-128-131-199** (#8083c7): unassigned.
- **rgb-37-14-98** (#250e62): unassigned.
- **rgb-29-164-176** (#1da4b0): unassigned.
- **rgb-248-72-94** (#f8485e): unassigned.
- **rgb-239-252-255** (#effcff): unassigned.
- **rgb-229-240-235** (#e5f0eb): unassigned.
- **rgb-0-65-34** (#004122): unassigned.
- **rgb-255-243-59** (#fff33b): unassigned.
- **rgb-0-104-56** (#006838): unassigned.
- **rgb-242-101-34** (#f26522): unassigned.
- **rgb-220-68-5** (#dc4405): unassigned.
- **rgb-51-112-121** (#337079): unassigned.
- **rgb-255-199-44** (#ffc72c): unassigned.
- **rgb-23-60-84** (#173c54): unassigned.
- **rgb-255-249-234** (#fff9ea): unassigned.
- **rgb-0-0-0** (#000000): unassigned.
- **rgba-0-0-0-0-5** (#00000080): unassigned.
- **rgb-239-239-239** (#efefef): unassigned.
- **rgb-151-71-255** (#9747ff): unassigned.

## 3. Typography

**Display Font:** Lexia, "Roboto Slab", Georgia, serif
**Body Font:** Inter, "Helvetica Neue", Arial, sans-serif

Adopted as a token string with a local fallback; no font files from Figma; family equivalence applied: "Inter" → "Inter, "Helvetica Neue", Arial, sans-serif", "Lexia" → "Lexia, "Roboto Slab", Georgia, serif".

### Hierarchy
- **Display** (400, 56px, 60px): page and hero headlines (Lexia 56/60).
- **Headline** (400, 46px, 50px).
- **Title** (400, 36px, 40px).
- **Body** (400, 16px, 24px): running copy (Inter 16/24).

## 4. Elevation

Flat: no shadows captured.

## 5. Components

### Buttons
- **Primary:** background rgb(208, 0, 111), color rgb(255, 255, 255), font-family Inter, "Helvetica Neue", Arial, sans-serif, font-size 16px, font-weight 700, line-height 24px, letter-spacing normal, border-radius 4px, padding 0px 16px, border 1px solid rgb(208, 0, 111).
- **Secondary:** background rgb(255, 255, 255), color rgb(208, 0, 111), font-family Inter, "Helvetica Neue", Arial, sans-serif, font-size 16px, font-weight 700, line-height 24px, letter-spacing normal, border-radius 4px, padding 0px 16px, border 1px solid rgb(208, 0, 111).

## 6. Do's and Don'ts

### Do:
- **Do** alternate image side on consecutive text+image teasers
- **Do** keep cards on the sage fill with 8px radius

### Don't:
- **Don't** introduce a second accent colour
- **Don't** add drop shadows to cards
- **Don't** set headings in Inter
