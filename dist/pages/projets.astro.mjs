import { d as createComponent, r as renderComponent, e as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_BhwfrjQd.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_wuZQFYD3.mjs';
import { $ as $$Base } from '../chunks/Base__HHQih41.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projets = (await getCollection("projets", ({ data }) => data.publie)).sort((a, b) => a.data.ordre - b.data.ordre || b.data.annee - a.data.annee);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Projets \u2014 Le Studio \u2014 Collectif Cobalt", "current": "projets" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero"> <div class="hero-bg-num" aria-hidden="true">01</div> <div class="s-label">Le Studio</div> <h1 class="page-title">PROJETS<br>RÉALISÉS.</h1> <p class="page-desc">${projets.length} projet${projets.length > 1 ? "s" : ""} référencé${projets.length > 1 ? "s" : ""} — réhabilitations, design d'espace et architecture d'intérieur en Nouvelle-Aquitaine.</p> </section> <section class="projets-grid"> ${projets.map((p) => renderTemplate`<a${addAttribute(`/projets/${p.slug}`, "href")} class="proj-card"> <div class="proj-img-wrap"> <img${addAttribute(p.data.couverture, "src")}${addAttribute(p.data.title, "alt")} loading="lazy"> <div class="proj-overlay"></div> </div> <div class="proj-meta"> <div class="proj-info"> <span>${p.data.lieu}</span> ${p.data.surface && renderTemplate`<span>· ${p.data.surface}</span>`} <span>· ${p.data.annee}</span> </div> <h2 class="proj-title">${p.data.title}.</h2> <p class="proj-excerpt">${p.data.excerpt}</p> <span${addAttribute(`badge badge-${p.data.statut === "livr\xE9" ? "livr\xE9" : "cours"}`, "class")}> ${p.data.statut} </span> </div> </a>`)} </section> ` })} `;
}, "/sessions/magical-wonderful-hamilton/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/SITE_INTERNET_ASTRO/src/pages/projets/index.astro", void 0);

const $$file = "/sessions/magical-wonderful-hamilton/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/SITE_INTERNET_ASTRO/src/pages/projets/index.astro";
const $$url = "/projets.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
