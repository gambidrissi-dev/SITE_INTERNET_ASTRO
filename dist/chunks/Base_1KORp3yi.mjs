import { d as createComponent, m as maybeRenderHead, e as renderTemplate, c as createAstro, f as addAttribute, k as renderSlot, l as renderHead, r as renderComponent } from './astro/server_BhwfrjQd.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav> <a href="/" class="nav-logo"> <img src="/assets/LOGO/LOGO_COBALT.svg" alt="Collectif Cobalt" class="nav-logo-img" width="200" height="45"> </a> <button class="nav-burger-btn" id="nav-burger" aria-label="Ouvrir le menu" aria-expanded="false"> <span></span><span></span><span></span><span></span> </button> </nav> <a href="#main-content" class="skip-link">Aller au contenu</a>`;
}, "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/components/Nav.astro", void 0);

const $$Astro$1 = createAstro("https://astro.collectifcobalt.eu");
const $$NavOverlay = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavOverlay;
  const { current = "" } = Astro2.props;
  const pageToEnv = {
    "studio": "e1",
    "projets": "e1",
    "services": "e1",
    "atelier": "e2",
    "atelier-projets": "e2",
    "atelier-services": "e2",
    "atelier-drops": "e2",
    "bleu-de-cobalt": "e3",
    "bleu-programme": "e3",
    "bleu-cabinets": "e3",
    "bleu-particuliers": "e3",
    "bleu-projets": "e3",
    "media": "e4",
    "media-journal": "e4",
    "journal": "e4",
    "drops": "e2"
  };
  const activeEnv = pageToEnv[current] ?? "";
  return renderTemplate`${maybeRenderHead()}<div id="lg-overlay" role="dialog" aria-modal="true" aria-label="Navigation"> <div class="lg-header"> <div class="lg-logo"> <img src="/assets/LOGO/LOGO_COBALT.svg" alt="Collectif Cobalt" style="height:18px;width:auto;opacity:.65;display:block;filter:invert(1);"> </div> <div class="lg-esc">Échap pour fermer</div> </div> <div class="lg-strips"> <div${addAttribute(`lg-strip e1${activeEnv === "e1" ? " active" : ""}`, "class")}> <div class="lg-strip-ghost">01</div> <a href="/studio" class="lg-strip-primary"> <div class="lg-strip-num">01</div> <div class="lg-strip-body"> <div class="lg-strip-name">Le Studio</div> <div class="lg-strip-sub">Architecture & Design d'espace</div> </div> <div class="lg-strip-arrow">→</div> </a> <div class="lg-strip-links"> <a href="/studio" class="lg-strip-link">Présentation</a> <a href="/projets" class="lg-strip-link">Projets</a> <a href="/services" class="lg-strip-link">Services</a> </div> </div> <div${addAttribute(`lg-strip e2${activeEnv === "e2" ? " active" : ""}`, "class")}> <div class="lg-strip-ghost">02</div> <a href="/atelier" class="lg-strip-primary"> <div class="lg-strip-num">02</div> <div class="lg-strip-body"> <div class="lg-strip-name">L'Atelier</div> <div class="lg-strip-sub">Fabrication & Prototypage</div> </div> <div class="lg-strip-arrow">→</div> </a> <div class="lg-strip-links"> <a href="/atelier" class="lg-strip-link">Présentation</a> <a href="/drops" class="lg-strip-link">Drops</a> <a href="/atelier-services" class="lg-strip-link">Services</a> <a href="/atelier-projets" class="lg-strip-link">Projets</a> </div> </div> <div${addAttribute(`lg-strip e3${activeEnv === "e3" ? " active" : ""}`, "class")}> <div class="lg-strip-ghost">03</div> <a href="/bleu-de-cobalt" class="lg-strip-primary"> <div class="lg-strip-num">03</div> <div class="lg-strip-body"> <div class="lg-strip-name">Bleu de Cobalt</div> <div class="lg-strip-sub">Programme & Cabinets partenaires</div> </div> <div class="lg-strip-arrow">→</div> </a> <div class="lg-strip-links"> <a href="/bleu-de-cobalt" class="lg-strip-link">Présentation</a> <a href="/bleu-programme" class="lg-strip-link">Programme</a> <a href="/bleu-cabinets" class="lg-strip-link">Cabinets</a> <a href="/bleu-particuliers" class="lg-strip-link">Particuliers</a> </div> </div> <div${addAttribute(`lg-strip e4${activeEnv === "e4" ? " active" : ""}`, "class")}> <div class="lg-strip-ghost">04</div> <a href="/media" class="lg-strip-primary"> <div class="lg-strip-num">04</div> <div class="lg-strip-body"> <div class="lg-strip-name">Le Média</div> <div class="lg-strip-sub">Architalk & Journal</div> </div> <div class="lg-strip-arrow">→</div> </a> <div class="lg-strip-links"> <a href="/media" class="lg-strip-link">Présentation</a> <a href="/journal" class="lg-strip-link">Journal</a> </div> </div> </div> <div class="lg-overlay-footer"> <a href="/contact" class="lg-footer-contact">Contact</a> <div class="lg-footer-socials"> <a href="https://www.instagram.com/collectifcobalt" target="_blank" rel="noopener">Instagram</a> <a href="https://www.linkedin.com/company/collectif-cobalt" target="_blank" rel="noopener">LinkedIn</a> </div> </div> </div>`;
}, "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/components/NavOverlay.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="footer-stripe"></div> <div class="footer-silhouette" aria-hidden="true"> <svg width="500" height="340" viewBox="0 0 750 450" fill="rgba(240,235,216,1)"> <rect x="0" y="300" width="750" height="150"></rect> <rect x="0" y="0" width="180" height="300"></rect> <rect x="570" y="0" width="180" height="300"></rect> <path d="M180 0 A195 300 0 0 1 570 0Z"></path> </svg> </div> <div class="footer-top"> <div> <div class="footer-logo">cobalt<span class="dot">.</span></div> <p class="footer-tagline">Penser. Faire. Transmettre.<br>Studio de design d'espace, Nouvelle-Aquitaine.</p> <div class="footer-socials"> <a href="https://www.instagram.com/collectifcobalt_/" target="_blank" rel="noopener">Instagram</a> <a href="https://www.linkedin.com/company/collectif-cobalt" target="_blank" rel="noopener">LinkedIn</a> </div> </div> <div> <div class="footer-col-title">Le Collectif</div> <nav class="footer-nav"> <a href="/studio">Studio</a> <a href="/atelier">L'Atelier</a> <a href="/bleu-de-cobalt">Bleu de Cobalt</a> <a href="/media">Le Média</a> </nav> </div> <div> <div class="footer-col-title">Contact direct</div> <div class="footer-contact-item"> <div class="footer-contact-name">Gambi</div> <a href="mailto:gambi@collectifcobalt.eu" class="footer-contact-email">gambi@collectifcobalt.eu</a> </div> <div class="footer-contact-item"> <div class="footer-contact-name">Lola</div> <a href="mailto:lola@collectifcobalt.eu" class="footer-contact-email">lola@collectifcobalt.eu</a> </div> <div class="footer-contact-item"> <div class="footer-contact-name">Lou-Ann</div> <a href="mailto:louann@collectifcobalt.eu" class="footer-contact-email">louann@collectifcobalt.eu</a> </div> </div> </div> <div class="footer-bottom"> <p class="footer-copy">© 2026 Collectif Cobalt. Tous droits réservés.</p> <p class="footer-legal">Studio de design d'espace — surfaces inférieures à 150 m²</p> </div> </footer>`;
}, "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://astro.collectifcobalt.eu");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title,
    description = "Collectif Cobalt \u2014 Studio de design d'espace, atelier et m\xE9dia en Nouvelle-Aquitaine.",
    current = "",
    ogImage = "/assets/OG-image/og-image.jpg",
    canonical
  } = Astro2.props;
  const siteUrl = "https://astro.collectifcobalt.eu";
  const canonicalUrl = canonical ?? `${siteUrl}${Astro2.url.pathname}`;
  const ogImageAbs = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#F3EFD7"><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23F3EFD7'/><text x='4' y='24' font-size='22' font-family='sans-serif' font-weight='900' fill='%234A82DC'>c.</text></svg>"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalUrl, "href")}><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImageAbs, "content")}><meta property="og:locale" content="fr_FR"><meta property="og:site_name" content="Collectif Cobalt"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImageAbs, "content")}><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,400&display=swap" rel="stylesheet">${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body> <div class="stripe"></div> <div id="cursor-dot"></div> <div id="cursor-ring"></div> ${renderComponent($$result, "Nav", $$Nav, {})} ${renderComponent($$result, "NavOverlay", $$NavOverlay, { "current": current })} <div id="main-content" tabindex="-1" style="position:absolute;top:62px;left:0;width:1px;height:1px;overflow:hidden;pointer-events:none;"></div> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/layouts/Base.astro", void 0);

export { $$Base as $ };
