# Oakmont Barber Co. — Concept

A concept website for a premium barbershop, built as a portfolio piece.

> **Oakmont Barber Co. is a fictional business.** The name, address, staff,
> prices, reviews and imagery are invented for demonstration purposes. This
> project is designed and built by Vladyslav to show the kind of site that
> could be produced for a real barbershop client.

## Overview

A single-page, static marketing site with a dark, restrained, editorial feel.
All content (services, team, gallery, testimonials, opening hours) is defined
as plain data in `script.js` and rendered from there, so it can be adapted for
a real client without touching the markup or layout.

## Sections

Hero · About · Services & prices · Team · Gallery · Opening hours ·
Testimonials · Contact & booking · Find us (map placeholder) · Booking CTA ·
Footer

## Features

- Sticky header with a mobile burger menu (accessible: `aria-expanded`,
  closes on selection / `Escape` / outside click / resize to desktop)
- Smooth scrolling with scroll-spy navigation highlighting
- Data-driven service cards, team, gallery and testimonials
- Booking buttons throughout, plus a basic booking form UI with inline
  validation and a concept success state (nothing is actually submitted)
- Responsive gallery with a native `<dialog>` lightbox
- Clickable phone (`tel:`), email (`mailto:`) and map-search links
- Real, licensed photography (see credits below), downloaded into
  `assets/images/` — no hotlinking. A generated inline-SVG fallback still
  covers any item left without a photo
- Restrained scroll-reveal animation, disabled under
  `prefers-reduced-motion`
- Semantic landmarks, labelled sections, skip link, keyboard-friendly controls

## Tech

- HTML
- CSS (custom properties, grid, container-relative sizing)
- JavaScript (vanilla, no dependencies, no build step)

## Run locally

It is a static site — open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Status

Concept / work in progress.

## Adapting for a real client

Edit the data objects at the top of `script.js` (`shop`, `services`, `team`,
`gallery`, `testimonials`, `hours`). Swap the photos by dropping new files into
`assets/images/` and updating the `photo` / `src` paths in the data (leave a
path empty to fall back to a generated placeholder).

## Photography

All photos are from [Unsplash](https://unsplash.com) under the
[Unsplash License](https://unsplash.com/license) (free to use, commercial use
allowed, attribution not required). They were downloaded into `assets/images/`
and are not hotlinked. A light, consistent grade is applied in CSS only — the
files are unmodified. Credited here as good practice:

| File | Photographer | Source |
| --- | --- | --- |
| `hero/barbershop-interior.jpg` | Barney Goodman | https://unsplash.com/photos/AXurvQTtO3Y |
| `team/marcus-hald.jpg` | Omar Abozeid | https://unsplash.com/photos/xkct3wNsPC0 |
| `team/anton-vig.jpg` | Lance Reis | https://unsplash.com/photos/TTdJV-K1IUg |
| `team/rune-dahl.jpg` | Vitaliy Shevchenko | https://unsplash.com/photos/5osaJsMsXOg |
| `team/tobias-reeh.jpg` | Sayan Ghosh | https://unsplash.com/photos/C99_TE-7HDI |
| `gallery/chair-neck-finish.jpg` | André Reis | https://unsplash.com/photos/z0Cyh9nGLFY |
| `gallery/scissor-over-comb.jpg` | Nate Johnston | https://unsplash.com/photos/tgPrIYnW3g4 |
| `gallery/skin-fade-part-line.jpg` | Michael DeMoya | https://unsplash.com/photos/Q82AM6BWBPM |
| `gallery/clipper-neckline.jpg` | Hai Phung | https://unsplash.com/photos/m4Pd_e-4zKs |
| `gallery/thinning-shears.jpg` | Gulom Nazarov | https://unsplash.com/photos/DrG4V5skbMY |
| `gallery/straight-razor-lineup.jpg` | Agustin Fernandez | https://unsplash.com/photos/1Pmp9uxK8X8 |
| `gallery/beard-scissor-trim.jpg` | Mr Shave | https://unsplash.com/photos/4k60yfGy7fU |
| `gallery/beard-trim-reclined.jpg` | Nathon Oski | https://unsplash.com/photos/fE42nRlBcG8 |

The people shown are stock-photo models, not the fictional staff named on the
site.
