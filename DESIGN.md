---
name: العربية الكبرى للتأمين المساهمة
description: Arabic RTL insurance website drawn as a schematic transit network, in the logo's blues.
colors:
  navy: "#1a1c95"
  blue: "#0072ce"
  sky: "#00a8e8"
  cyan: "#22c3f3"
  navy-ink: "#0b0c45"
  ink-2: "#3d4270"
  muted: "#5a6185"
  paper: "#ffffff"
  paper-2: "#f2f5fa"
  rule: "#d9e0ec"
  on-dark-2: "#c9d1f2"
  success: "#12804f"
  danger: "#c62f35"
typography:
  display:
    fontFamily: "Noto Kufi Arabic Variable, Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "clamp(2.4rem, 4.1vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1.25
  headline:
    fontFamily: "Noto Kufi Arabic Variable, Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.4
  title:
    fontFamily: "Noto Kufi Arabic Variable, Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Readex Pro Variable, Readex Pro, Segoe UI, Tahoma, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Noto Kufi Arabic Variable, Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "14.5px"
    fontWeight: 600
    lineHeight: 1.6
rounded:
  sm: "4px"
  md: "8px"
  full: "999px"
spacing:
  gutter: "20px"
  stack: "18px"
  group: "24px"
  section: "clamp(64px, 8vw, 112px)"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 22px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.md}"
    padding: "12px 22px"
    height: "50px"
  button-ghost-hover:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.paper}"
  button-white:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    rounded: "{rounded.md}"
  button-outline-white:
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.md}"
    padding: "11px 14px"
    height: "50px"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.md}"
    padding: "6px 14px"
    height: "44px"
  chip-active:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.paper}"
  line-bullet-individuals:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.full}"
  line-bullet-businesses:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
  line-bullet-services:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
  station-ring:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.full}"
    size: "24px"
---

# Design System: العربية الكبرى للتأمين المساهمة

## Overview

**Creative North Star: "The Network Map"**

The site is drawn as a printed schematic transit map of the company. Two lines carry the two audiences: the individuals line in sky and the businesses line in navy. Their stations are the insurance products. Both lines bend into a services interchange (forms and claims) and continue as one trunk to a terminus where the visitor reaches a person. Every surface reuses that grammar at its own scale: the header is a line of stations, inner pages open on a band of their line's colour, product pages are strip maps, the claim journey is a route, the closing band is the end of the line, and the footer is the map key.

The sheet is white and the structure is drawn, not boxed. Lines, rings, bullets and 2px ink frames carry hierarchy. Colour commits at the scale of whole regions (route-header bands, the navy terminus, the ink footer) and as line colour, never as scattered accents. The voice is Arabic first and right-to-left: geometric Kufi lettering for every name a visitor navigates by, a calm readable sans for everything they read.

There is no photography, and the world needs none: the products, figures and routes are the content. Motion is a single authored moment, the selection halo gliding along its line.

**Key Characteristics:**
- White map sheet; thick round-capped lines (8px) in the three brand blues.
- Stations as white rings with ink outlines; the selected station fills with its line colour.
- Line bullets (filled circles with the line number) name every line wherever it appears.
- Noto Kufi Arabic for names, headings and labels; Readex Pro for text.
- Bands of line colour own whole regions; borders and rules, not shadows, carry structure.
- One authored motion: the halo that glides to the chosen station.

## Colors

The palette is the logo's blues plus a cool ink, each blue bound to a line of the network.

### Primary
- **Network Navy** (businesses line): the businesses line, primary buttons, the business route header band, the terminus band, line bullet 2. It is the brand's anchor colour.

### Secondary
- **Coast Sky** (individuals line): the individuals line, line bullet 1, the personal route header band (with ink text), selected stations on that line, legend swatches. It is never used for text on white.

### Tertiary
- **Service Blue** (services line): the services line (claims route, reasons line, identity route), route header bands for About, Forms, Contact and 404, text links, focus rings, primary-button hover.
- **Signal Cyan**: small accents on dark grounds only, such as icons in the service strip and footer contact list and the first station ring in the terminus band.

### Neutral
- **Map Ink** (navy-ink): all heading and body-strong text, station ring outlines, 2px board frames, the service strip and the footer field.
- **Ink Two**: running text and secondary copy on white.
- **Muted Slate**: ledes, meta text, captions and figure labels (meets 4.5:1 on white and on Paper Two).
- **Paper**: the map sheet and every board surface.
- **Paper Two**: tinted section bands that alternate with white.
- **Map Rule**: hairlines between rows, the header navigation track, idle input borders.
- **Ink Mist** (on-dark-2): secondary text on Network Navy and Map Ink fields.
- **Confirm Green** and **Alert Red**: toast icon grounds, the required-field asterisk and field error text only.

The logo gradient (`linear-gradient(90deg, #00b2ee 0%, #0072ce 48%, #1a1c95 100%)`) is a fixed brand asset.

### Named Rules
**The Line Colour Rule.** Sky always means individuals, navy always means businesses, blue always means services. A colour never changes meaning between pages.

**The Gradient Is The Trunk Rule.** The logo gradient appears only in the logo, the services trunk leaving the interchange, and the head-office track. It is never a fill for buttons, text or backgrounds.

**The Sky Is Not Ink Rule.** Coast Sky fails contrast as text on white; it is used for lines, bullets, swatches and bands with ink text on top.

## Typography

**Display Font:** Noto Kufi Arabic (self-hosted variable, with Segoe UI and Tahoma fallbacks)
**Body Font:** Readex Pro (self-hosted variable, with Segoe UI and Tahoma fallbacks)

**Character:** The geometric Kufi reads like station signage: every heading, station name, line name, button and form label is set in it. Readex Pro carries the reading at a generous 1.75 line height.

### Hierarchy
- **Display** (800, clamp(2.4rem, 4.1vw, 3.4rem), 1.25): the home map title. Route header titles use the same weight at clamp(2rem, 4.2vw, 3.3rem).
- **Headline** (700, clamp(1.7rem, 2.8vw, 2.4rem), 1.4): section headings, with an optional lede at 1.06rem in Muted Slate, max 38rem.
- **Title** (700, 1.1 to 1.3rem, 1.4): station board titles, product titles on strip maps, route stop titles.
- **Body** (400, 17px; 16px at 600px and below, 1.75): running text, measure capped by its container (about 31 to 44rem).
- **Label** (600 to 800, 13.5 to 15.5px, 1.6): station labels, navigation stops, line tags, buttons, chips, field labels.

### Named Rules
**The No Tracking Rule.** Arabic is never letter-spaced; spacing breaks the joins.

**The Kufi Names Rule.** Anything a visitor navigates by (stations, lines, pages, actions) is set in Kufi. Sentences are set in Readex.

**The Tabular Figures Rule.** Phone numbers, years and counts use tabular figures in an isolated left-to-right run (the `num` utility).

## Layout

- **Container:** centred at 1200px with 20px gutters (16px at 600px and below). Sections breathe at clamp(64px, 8vw, 112px).
- **Rhythm:** white and Paper Two bands alternate, and every page closes on the navy terminus band and the ink footer.
- **Home map (above 1080px):** one sheet, 760px tall, with:
  - the title block and legend at the top right (52% wide);
  - the station board at the top left (40% wide);
  - the individuals line at 520px and the businesses line at 678px, with stations spread evenly from 89% to 33% of the width;
  - both lines bending into the interchange at 20% and running on to the terminus at 4.4%.

  Positions are horizontal percentages and vertical pixels, so the map holds from 1100 to 1600px without overlap.
- **Home map (1080px and below):** it becomes a two-tab line switch over a vertical strip map, and the selected station's board opens inline.
- **Strip maps** (personal and business pages): one vertical 8px line at the inline start, entering from the route header band above. Products sit on it as rows of three columns (ring, name with description, benefits with action), collapsing to two columns at 860px.
- **Breakpoints in use:** 1240 (compact navigation), 1080 (burger and strip map), 960 (single-column splits, service strip hidden), 860, 760, 600 and 520.

## Elevation & Depth

The system is flat by default. Structure comes from 2px ink frames, 1px rules and colour bands. Shadows exist only to lift a board off the map sheet or to answer a state.

### Shadow Vocabulary
- **Board lift** (`box-shadow: 0 12px 28px -14px rgba(11, 12, 69, 0.28)`): the station board on the home map, the contact form board, the back-to-top button, and primary-button hover.
- **Toast lift** (`box-shadow: 0 18px 36px -16px rgba(11, 12, 69, 0.34)`): the toast only.

### Named Rules
**The Frame Before Shadow Rule.** A surface earns a 2px ink frame before it earns a shadow; shadows never stand alone as decoration.

## Shapes

- **Circles** belong to the network: station rings, line bullets, round line caps and the halo.
- **Capsules** (full radius) are interchanges.
- **Terminus caps** are rounded bars set across the line's end.
- **Everything a visitor reads or operates** (boards, buttons, inputs, chips, legends) is a gently rounded rectangle (8px).
- **Station labels** sit on 4px-rounded plates when hovered or selected.
- Strokes are heavy where the map is drawn (4 to 6px ring outlines, 8px lines) and fine where content is ruled (1px).

## Components

### Buttons
Station boards: solid, framed, no gloss.
- **Shape:** gently rounded (8px), 2px border, 50px tall (42px small), Kufi 700.
- **Primary:** Network Navy with white text. Hover turns to Service Blue with the board lift. The arrow icon nudges 4px toward the reading direction.
- **Ghost:** white with a 2px Map Ink frame; hover inverts to an ink fill with white text.
- **On navy:** white with navy text for the main action; transparent with a white frame for secondary actions.
- **Loading:** a spinner replaces the icon and the button stops taking clicks.

### Chips
- **Style:** white, 2px Map Rule frame, 8px corners, Kufi 700, with a count pill.
- **State:** hover frames the chip in ink; the active chip fills with Map Ink and white text. They are toggle buttons that announce their pressed state.

### Boards / Containers
- **Corner Style:** 8px.
- **Background:** Paper.
- **Shadow Strategy:** the board lift for the home station board and the contact form only (see Elevation).
- **Border:** 2px Map Ink.
- **Internal Padding:** 20 to 36px.
- **Legends** (the home map key, the About principles) are framed boards split by a 1px rule.

### Inputs / Fields
- **Style:** white field, 2px Map Rule border, 8px corners, 50px tall, Kufi labels above.
- **Focus:** the border turns to Map Ink with a soft blue focus halo.
- **Error:** an Alert Red border on a faint red ground, a short shake, and the message in a line whose space is always reserved, so validation never moves the submit button.

### Navigation
- **Header:** the page list is a line of stations: a 3px Map Rule track through 14px ink-outlined rings, with Kufi labels below. The current page is the filled station, in its line's colour.
- **Mobile drawer:** the same line drawn vertically.
- **Breadcrumb:** inner pages trace a short route in the band's colour: open ring, track, filled ring.

### Network Map (signature)
- **Lines:** SVG paths drawn from the product data, with non-scaling 8px strokes.
- **Stations:** real buttons, each a 24px ring plus a Kufi label. Business labels alternate above and below the line.
- **Selection:** the ring fills, the label becomes an ink plate, and a 48px halo in the line colour glides to the station over 0.7s (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Station board:** updates politely for screen readers and carries "اطلب هذه التغطية", which pre-fills the contact form with that cover.
- **Interchange:** links to the forms page; the **terminus** links to Contact.

### Route Header
A full-width band in the page's line colour holding the breadcrumb route, the page title and a lede. The band's text is ink on sky and white on navy or blue.

### Terminus Band
A navy band where a white track enters from the page edge and stops at a terminus cap. Its stations hold the closing actions: request a quote, call, forms. Every page except Contact ends on it.

### Forms Board
A ruled departures board:
- Rows of category marker, title with description, and action.
- A pending form reads "الملف قريبًا" in a dashed, muted frame instead of posing as a download.
- Search and category chips sit above the board.

## Do's and Don'ts

### Do:
- **Do** draw new sections in the line grammar: a line in its audience's colour, ring stations, a line bullet beside the name.
- **Do** keep sky for individuals, navy for businesses and blue for services on every page (The Line Colour Rule).
- **Do** set every navigable name in Noto Kufi Arabic and every sentence in Readex Pro, with no letter-spacing.
- **Do** frame operable surfaces with 2px Map Ink and 8px corners before reaching for a shadow.
- **Do** reserve space for error and status text so state changes never move controls.
- **Do** theme the browser surfaces: selection, caret, scrollbar, focus ring and tabular figures come from the palette.

### Don't:
- **Don't** use the logo gradient as a fill for buttons, text or backgrounds.
- **Don't** set Coast Sky as text on white.
- **Don't** add eyebrow labels above headings, gradient text, scroll-reveal entrances or a preloader.
- **Don't** put a decorative icon beside every station name; on a line, the station is the marker.
- **Don't** place map dots for branch locations until the company supplies real ones.
