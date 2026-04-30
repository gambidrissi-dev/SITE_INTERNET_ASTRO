import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_CwI0pF3U.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BfwmfnVx.mjs';
import { $ as $$Base } from '../chunks/Base_DIfE7DNF.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const drops = (await getCollection("drops", ({ data }) => data.publie)).sort((a, b) => b.data.date_drop.getTime() - a.data.date_drop.getTime());
  const fmt = (d) => d.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Drops \u2014 L'Atelier \u2014 Collectif Cobalt", "current": "drops" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero"> <div class="hero-bg-num" aria-hidden="true">02</div> <div class="s-label">L'Atelier</div> <h1 class="page-title">DROPS.</h1> <p class="page-desc">Séries limitées, prototypes, objets — produits par l'Atelier Cobalt.</p> </section> <section class="drops-grid"> ${drops.map((d) => renderTemplate`<a${addAttribute(`/drops/${d.slug}`, "href")} class="drop-card"> <div class="drop-img-wrap"> <img${addAttribute(d.data.couverture, "src")}${addAttribute(d.data.title, "alt")} loading="lazy"> </div> <div class="drop-meta"> ${d.data.serie && renderTemplate`<div class="drop-serie">${d.data.serie}</div>`} <h2 class="drop-title">${d.data.title}</h2> <p class="drop-excerpt">${d.data.excerpt}</p> <div class="drop-info"> <span>${fmt(d.data.date_drop)}</span> ${d.data.edition && renderTemplate`<span>· ${d.data.edition}</span>`} ${d.data.prix && renderTemplate`<span>· ${d.data.prix}</span>`} <span${addAttribute(`badge badge-${d.data.statut === "disponible" ? "livr\xE9" : "cours"}`, "class")}> ${d.data.statut} </span> </div> </div> </a>`)} </section> ` })} `;
}, "/sessions/magical-wonderful-hamilton/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/SITE_INTERNET_ASTRO/src/pages/drops/index.astro", void 0);

const $$file = "/sessions/magical-wonderful-hamilton/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/SITE_INTERNET_ASTRO/src/pages/drops/index.astro";
const $$url = "/drops.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
