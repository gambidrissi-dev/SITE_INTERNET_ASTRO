import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_CwI0pF3U.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BfwmfnVx.mjs';
import { $ as $$Base } from '../chunks/Base_DXFr0ySW.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const articles = (await getCollection("journal", ({ data }) => data.publie)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const fmt = (d) => d.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Journal \u2014 Le M\xE9dia \u2014 Collectif Cobalt", "current": "journal" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero"> <div class="hero-bg-num" aria-hidden="true">04</div> <div class="s-label">Le Média</div> <h1 class="page-title">JOURNAL.</h1> <p class="page-desc">Articles, comptes rendus, conversations — par le Collectif Cobalt.</p> </section> <section class="journal-list"> ${articles.map((a) => renderTemplate`<a${addAttribute(`/journal/${a.slug}`, "href")} class="article-row"> ${a.data.couverture && renderTemplate`<div class="article-img"> <img${addAttribute(a.data.couverture, "src")}${addAttribute(a.data.title, "alt")} loading="lazy"> </div>`} <div class="article-body"> <div class="article-meta"> ${a.data.serie && renderTemplate`<span class="article-serie">${a.data.serie}</span>`} <span>${fmt(a.data.date)}</span> <span>· ${a.data.lecture}</span> <span>· par ${a.data.auteur}</span> </div> <h2 class="article-title">${a.data.title}</h2> <p class="article-excerpt">${a.data.excerpt}</p> <div class="article-tags"> ${a.data.tags.map((t) => renderTemplate`<span class="tag">#${t}</span>`)} </div> </div> </a>`)} </section> ` })} `;
}, "/sessions/magical-wonderful-hamilton/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/SITE_INTERNET_ASTRO/src/pages/journal/index.astro", void 0);

const $$file = "/sessions/magical-wonderful-hamilton/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/SITE_INTERNET_ASTRO/src/pages/journal/index.astro";
const $$url = "/journal.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
