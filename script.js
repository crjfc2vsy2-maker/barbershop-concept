/* =========================================================================
   Oakmont Barber Co. — concept site
   Content lives in the data objects below so it can be swapped for a real
   client later without touching the render logic or markup.
   ========================================================================= */

"use strict";

const shop = {
  name: "Oakmont Barber Co.",
  phoneDisplay: "+45 32 14 55 09",
  phoneHref: "tel:+4532145509",
  email: "booking@oakmontbarber.dk",
};

const services = [
  {
    name: "Signature Cut",
    duration: "45 min",
    price: "420 kr",
    note: "Consultation, cut, hot towel, and a proper finish.",
  },
  {
    name: "Skin Fade",
    duration: "45 min",
    price: "440 kr",
    note: "Precision fade, blended by hand, edged sharp.",
  },
  {
    name: "Beard Trim & Shape",
    duration: "30 min",
    price: "260 kr",
    note: "Line-up, shape, hot towel, and beard oil.",
  },
  {
    name: "Cut & Beard",
    duration: "60 min",
    price: "590 kr",
    note: "The full service, head to jaw.",
  },
  {
    name: "Hot Towel Shave",
    duration: "40 min",
    price: "380 kr",
    note: "Traditional straight-razor shave, two hot towels.",
  },
  {
    name: "Buzz Cut",
    duration: "20 min",
    price: "220 kr",
    note: "One length, clean neckline, in and out.",
  },
  {
    name: "Kids Cut (under 12)",
    duration: "30 min",
    price: "260 kr",
    note: "Unhurried barbering for younger clients.",
  },
  {
    name: "Grey Blending",
    duration: "30 min",
    price: "300 kr",
    note: "Soften the grey — not hide it.",
  },
];

const team = [
  {
    name: "Marcus Hald",
    role: "Founder & Master Barber",
    focus: "Scissor work, tight skin fades",
    years: "12 years behind the chair",
    initials: "MH",
    photo: "assets/images/team/marcus-hald.jpg",
  },
  {
    name: "Anton Vig",
    role: "Senior Barber",
    focus: "Textured crops, beard sculpting",
    years: "9 years behind the chair",
    initials: "AV",
    photo: "assets/images/team/anton-vig.jpg",
  },
  {
    name: "Rune Dahl",
    role: "Barber",
    focus: "Classic cuts, hot-towel shaves",
    years: "6 years behind the chair",
    initials: "RD",
    photo: "assets/images/team/rune-dahl.jpg",
  },
  {
    name: "Tobias Reeh",
    role: "Barber",
    focus: "Fades, line-ups, sharp partings",
    years: "4 years behind the chair",
    initials: "TR",
    photo: "assets/images/team/tobias-reeh.jpg",
  },
];

// caption doubles as the alt text and the lightbox label.
const gallery = [
  { src: "assets/images/gallery/chair-neck-finish.jpg", caption: "Finishing touches at the chair" },
  { src: "assets/images/gallery/scissor-over-comb.jpg", caption: "Scissor over comb" },
  { src: "assets/images/gallery/skin-fade-part-line.jpg", caption: "Skin fade with a hard part" },
  { src: "assets/images/gallery/clipper-neckline.jpg", caption: "A clean neckline" },
  { src: "assets/images/gallery/thinning-shears.jpg", caption: "Texturing with thinning shears" },
  { src: "assets/images/gallery/straight-razor-lineup.jpg", caption: "Straight-razor line-up" },
  { src: "assets/images/gallery/beard-scissor-trim.jpg", caption: "Beard trim, scissor finish" },
  { src: "assets/images/gallery/beard-trim-reclined.jpg", caption: "Beard work, reclined" },
];

const testimonials = [
  {
    quote:
      "First barber in years who actually listened. The fade was perfect and it grew out clean.",
    name: "Anders K.",
    meta: "Signature Cut",
  },
  {
    quote:
      "Booked online, seen on time, out in forty minutes looking sharp. This is how it should work.",
    name: "Daniel R.",
    meta: "Cut & Beard",
  },
  {
    quote:
      "Took my son for his first real haircut. They were patient with him and he left grinning.",
    name: "Marie L.",
    meta: "Kids Cut",
  },
];

const hours = [
  { day: "Monday", open: "09:00", close: "19:00" },
  { day: "Tuesday", open: "09:00", close: "19:00" },
  { day: "Wednesday", open: "09:00", close: "19:00" },
  { day: "Thursday", open: "09:00", close: "20:00" },
  { day: "Friday", open: "09:00", close: "20:00" },
  { day: "Saturday", open: "08:00", close: "16:00" },
  { day: "Sunday", open: null, close: null },
];

/* -------------------------------------------------------------------------
   Fallback imagery — generated inline SVG, used only when a data entry has
   no photo of its own. The real photos live in assets/images/.
   ------------------------------------------------------------------------- */

const MOTIFS = {
  scissors:
    '<circle cx="58" cy="92" r="24"/><circle cx="58" cy="168" r="24"/><line x1="78" y1="104" x2="214" y2="46"/><line x1="78" y1="156" x2="214" y2="214"/>',
  comb:
    '<rect x="34" y="150" width="182" height="32"/><line x1="52" y1="150" x2="52" y2="110"/><line x1="76" y1="150" x2="76" y2="110"/><line x1="100" y1="150" x2="100" y2="110"/><line x1="124" y1="150" x2="124" y2="110"/><line x1="148" y1="150" x2="148" y2="110"/><line x1="172" y1="150" x2="172" y2="110"/><line x1="196" y1="150" x2="196" y2="110"/>',
  razor:
    '<path d="M44 202 L172 72 q10 -10 22 -4 l6 4 L78 204 q-12 10 -24 4 z"/><line x1="200" y1="72" x2="230" y2="48"/>',
  chair:
    '<path d="M60 90 h20 v134 h-20 z"/><rect x="80" y="118" width="98" height="16"/><rect x="80" y="184" width="122" height="16"/><line x1="104" y1="200" x2="104" y2="240"/><line x1="180" y1="200" x2="180" y2="240"/>',
  pole:
    '<rect x="104" y="34" width="34" height="180" rx="17"/><path d="M104 70 q17 -12 34 0 M104 108 q17 -12 34 0 M104 146 q17 -12 34 0 M104 184 q17 -12 34 0"/>',
};

function placeholderImage({ label = "", ratio = 1, kind = "scene", initials = "" }) {
  const w = 800;
  const h = Math.round(w / ratio);
  const inset = 16;
  const text = String(label).toUpperCase().replace(/[<>&]/g, " ");

  let feature = "";
  if (kind === "portrait") {
    const r = Math.round(Math.min(w, h) * 0.16);
    const cx = w / 2;
    const cy = Math.round(h * 0.42);
    feature =
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#c8a45d" stroke-opacity="0.4" stroke-width="2"/>` +
      `<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central" ` +
      `fill="#c8a45d" fill-opacity="0.9" font-family="Fraunces, Georgia, serif" ` +
      `font-size="${Math.round(Math.min(w, h) * 0.17)}" font-weight="600">${String(initials).toUpperCase()}</text>`;
  } else {
    const motif = MOTIFS[kind] || MOTIFS.scissors;
    const scale = (h * 0.7) / 240;
    const tx = w - 240 * scale - 8;
    const ty = h - 240 * scale + 12;
    feature =
      `<g transform="translate(${tx.toFixed(1)} ${ty.toFixed(1)}) scale(${scale.toFixed(3)})" ` +
      `fill="none" stroke="#f2efe9" stroke-opacity="0.11" stroke-width="4" ` +
      `stroke-linecap="round" stroke-linejoin="round">${motif}</g>`;
  }

  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">` +
    `<defs><filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="n"/>` +
    `<feColorMatrix in="n" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"/></filter></defs>` +
    `<rect width="${w}" height="${h}" fill="#17171a"/>` +
    `<rect width="${w}" height="${h}" filter="url(#g)" opacity="0.05"/>` +
    `<rect x="${inset}" y="${inset}" width="${w - inset * 2}" height="${h - inset * 2}" fill="none" stroke="#f2efe9" stroke-opacity="0.07"/>` +
    feature +
    (text
      ? `<text x="28" y="${h - 26}" fill="#f2efe9" fill-opacity="0.5" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="600" letter-spacing="2">${text}</text>`
      : "") +
    `</svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/* -------------------------------------------------------------------------
   Rendering
   ------------------------------------------------------------------------- */

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

// Fallback only: fills an <img data-placeholder="kind:label"> that has no real
// src yet with a generated SVG. Real photography, when present, always wins.
function fillDataPlaceholders() {
  $$("[data-placeholder]").forEach((img) => {
    if (img.getAttribute("src")) return;
    const [kind, label] = img.dataset.placeholder.split(":");
    img.src = placeholderImage({ kind, label: label || "", ratio: 4 / 5 });
  });
}

function renderServices() {
  const grid = $("#servicesGrid");
  if (!grid) return;

  services.forEach((service) => {
    const li = el("li", "service");

    const top = el("div", "service__top");
    top.append(el("h3", "service__name", service.name), el("span", "service__price", service.price));

    const book = el("a", "service__book", "Book this");
    book.href = "#booking";
    book.setAttribute("aria-label", `Book: ${service.name}`);

    li.append(
      top,
      el("span", "service__meta", service.duration),
      el("p", "service__note", service.note),
      book,
    );
    grid.append(li);
  });
}

function renderTeam() {
  const grid = $("#teamGrid");
  if (!grid) return;

  team.forEach((member) => {
    const li = el("li", "barber");

    const img = el("img", "barber__portrait");
    img.src =
      member.photo || placeholderImage({ kind: "portrait", initials: member.initials, ratio: 3 / 4 });
    img.alt = `Portrait of ${member.name}, ${member.role}`;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = 640;
    img.height = 854;

    li.append(
      img,
      el("h3", "barber__name", member.name),
      el("p", "barber__role", member.role),
      el("p", "barber__focus", member.focus),
      el("p", "barber__years", member.years),
    );
    grid.append(li);
  });
}

function renderGallery() {
  const grid = $("#galleryGrid");
  if (!grid) return;

  gallery.forEach((item) => {
    const li = el("li", "gallery-item");

    const button = el("button", "gallery-item__btn");
    button.type = "button";
    button.setAttribute("aria-label", `View larger: ${item.caption}`);

    const img = el("img");
    const src =
      item.src || placeholderImage({ kind: "scissors", label: item.caption, ratio: 1 });
    img.src = src;
    img.alt = item.caption;
    img.loading = "lazy";
    img.decoding = "async";

    button.dataset.full = src;
    button.dataset.caption = item.caption;
    button.append(img);
    li.append(button);
    grid.append(li);
  });
}

function renderTestimonials() {
  const grid = $("#testimonialsGrid");
  if (!grid) return;

  testimonials.forEach((entry) => {
    const li = el("li", "testimonial");

    const figure = el("figure", "testimonial__figure");
    const quote = el("blockquote", "testimonial__quote", entry.quote);
    const cite = el("figcaption", "testimonial__cite");
    cite.append(el("strong", null, entry.name), document.createTextNode(entry.meta));

    figure.append(quote, cite);
    li.append(figure);
    grid.append(li);
  });
}

function renderHours() {
  const body = $("#hoursBody");
  if (!body) return;

  const todayIndex = (new Date().getDay() + 6) % 7; // 0 = Monday

  hours.forEach((entry, index) => {
    const row = el("tr");
    if (index === todayIndex) row.dataset.today = "true";
    row.append(
      el("td", null, entry.day),
      el("td", null, entry.open ? `${entry.open} – ${entry.close}` : "Closed"),
    );
    body.append(row);
  });

  updateOpenStatus(todayIndex);
}

function toMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function updateOpenStatus(todayIndex) {
  const wrap = $("#hoursStatus");
  const label = $("#hoursStatusText");
  if (!wrap || !label) return;

  const today = hours[todayIndex];
  const now = new Date();
  const minutesNow = now.getHours() * 60 + now.getMinutes();

  let open = false;
  let message = "Closed today";

  if (today.open && today.close) {
    const opensAt = toMinutes(today.open);
    const closesAt = toMinutes(today.close);
    if (minutesNow < opensAt) {
      message = `Closed now — opens ${today.open}`;
    } else if (minutesNow >= closesAt) {
      message = "Closed now — see you tomorrow";
    } else {
      open = true;
      message = `Open now — until ${today.close}`;
    }
  }

  wrap.dataset.open = String(open);
  label.textContent = message;
}

function populateBookingSelects() {
  const serviceSelect = $("#bk-service");
  const barberSelect = $("#bk-barber");

  if (serviceSelect) {
    services.forEach((service) => {
      const option = el("option", null, `${service.name} · ${service.price}`);
      option.value = service.name;
      serviceSelect.append(option);
    });
  }

  if (barberSelect) {
    team.forEach((member) => {
      const option = el("option", null, member.name);
      option.value = member.name;
      barberSelect.append(option);
    });
  }
}

/* -------------------------------------------------------------------------
   Interactions
   ------------------------------------------------------------------------- */

function setupNav() {
  const header = $(".site-header");
  const toggle = $("#navToggle");
  const nav = $("#primaryNav");
  if (!header || !toggle || !nav) return;

  const setOpen = (open) => {
    header.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => setOpen(!header.classList.contains("nav-open")));

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (header.classList.contains("nav-open") && !header.contains(event.target)) setOpen(false);
  });

  window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });
}

function setupHeaderScrollState() {
  const header = $(".site-header");
  if (!header) return;

  const sync = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

function setupScrollSpy() {
  const links = new Map();
  $$(".primary-nav__list a").forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    if (id) links.set(id, link);
  });
  if (!links.size || !("IntersectionObserver" in window)) return;

  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = links.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach((other) => other.removeAttribute("aria-current"));
          link.setAttribute("aria-current", "true");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
  );

  links.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

function setupReveal() {
  const targets = $$(
    ".hero__content, .hero__media, .section__head, .about, .services-grid, .team-grid, .gallery-grid, .hours, .testimonials-grid, .contact, .location, .cta__inner",
  );

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  targets.forEach((node) => node.setAttribute("data-reveal", ""));

  const observer = new window.IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
  );

  targets.forEach((node) => observer.observe(node));
}

function setupLightbox() {
  const dialog = $("#lightbox");
  const image = $("#lightboxImg");
  const caption = $("#lightboxCaption");
  const closeBtn = $("#lightboxClose");
  const grid = $("#galleryGrid");
  if (!dialog || !image || !caption || !grid) return;

  const supportsDialog = typeof dialog.showModal === "function";

  grid.addEventListener("click", (event) => {
    const button = event.target.closest(".gallery-item__btn");
    if (!button) return;
    image.src = button.dataset.full;
    image.alt = button.dataset.caption;
    caption.textContent = button.dataset.caption;
    if (supportsDialog) dialog.showModal();
  });

  const close = () => {
    if (supportsDialog && dialog.open) dialog.close();
  };

  closeBtn.addEventListener("click", close);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });
}

function setupBookingForm() {
  const form = $("#bookingForm");
  const success = $("#bookingSuccess");
  const error = $("#bookingError");
  const reset = $("#bookingReset");
  if (!form || !success) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      if (error) {
        error.hidden = false;
        error.textContent = "Please complete the required fields.";
      }
      form.reportValidity();
      return;
    }

    if (error) error.hidden = true;
    form.hidden = true;
    success.hidden = false;
    success.querySelector(".booking__success-title")?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  });

  if (reset) {
    reset.addEventListener("click", () => {
      form.reset();
      success.hidden = true;
      form.hidden = false;
    });
  }
}

function setContactDetails() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

/* -------------------------------------------------------------------------
   Init
   ------------------------------------------------------------------------- */

function init() {
  fillDataPlaceholders();
  renderServices();
  renderTeam();
  renderGallery();
  renderTestimonials();
  renderHours();
  populateBookingSelects();

  setupNav();
  setupHeaderScrollState();
  setupScrollSpy();
  setupReveal();
  setupLightbox();
  setupBookingForm();
  setContactDetails();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
