# Benchmark prompts (verbatim; secrets redacted)

## P1 — user, 2026-10-26 ~10:53Z
please take latest pull and use the code from the  branch sanyasandal:figma-reskin-m4-on-m2 . Use Stardust to migrate the following website to AEM, using the provided Figma design as the design reference.

**Source website:** https://fortstreet-h.schools.nsw.gov.au/

**Figma design:** https://www.figma.com/design/rsZQmpVzuyn0KhCDA3WN60/One-AZ-v3.2?node-id=6400-21997&p=f&t=laz62EARq3Zvilgb-0

(… full benchmark brief: metrics 1–5, evidence collection, required report table, acceptance criteria >95% fidelity, final deliverables — as sent by the user …)

## P2 — user (mid-turn)
thsi is figma token : [REDACTED figd_…]

## P3 — user (mid-turn)
you create dthe branch yourself ?

## Agent → skill invocations
- Skill stardust:reskin, args: "Content site: https://fortstreet-h.schools.nsw.gov.au/ . Design donor: Figma file https://www.figma.com/design/rsZQmpVzuyn0KhCDA3WN60/One-AZ-v3.2?node-id=6400-21997&p=f&t=laz62EARq3Zvilgb-0 (FIGMA_TOKEN provided via env). Target: AEM Edge Delivery Services repo sanyasandal/stardust_migrate, branch fortstreet-reskin. Goal: design fidelity to Figma >95%."
- Skill stardust:extract, args: "https://fortstreet-h.schools.nsw.gov.au/ (reskin flow, content source; design donor is a Figma file captured separately by figma-donor.mjs)"
