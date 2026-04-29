import { c as createAstro, d as createComponent, r as renderComponent, e as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_BhwfrjQd.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_wuZQFYD3.mjs';
import { $ as $$Base } from '../../chunks/Base__HHQih41.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro.collectifcobalt.eu");
const getStaticPaths = async () => {
  const drops = await getCollection("drops", ({ data }) => data.publie);
  return drops.map((d) => ({ params: { slug: d.slug }, props: { entry: d } }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const d = entry.data;
  const fmt = d.date_drop.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${d.title} \u2014 Drops \u2014 Collectif Cobalt`, "description": d.excerpt, "current": "drops", "ogImage": d.couverture }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="drop-page"> <header class="drop-page-hero"> <a href="/drops" class="projet-back">← Tous les drops</a> ${d.serie && renderTemplate`<div class="drop-serie">${d.serie}</div>`} <h1 class="projet-title">${d.title}</h1> <p class="projet-excerpt">${d.excerpt}</p> <div class="drop-page-info"> <span>${fmt}</span> ${d.edition && renderTemplate`<span>· ${d.edition}</span>`} ${d.materiau.length > 0 && renderTemplate`<span>· ${d.materiau.join(" / ")}</span>`} ${d.prix && renderTemplate`<span class="drop-price">${d.prix}</span>`} </div> </header> <figure class="drop-cover"> <img${addAttribute(d.couverture, "src")}${addAttribute(d.title, "alt")}> </figure> <div class="prose"> ${renderComponent($$result2, "Content", Content, {})} </div> ${d.lien_video && renderTemplate`<p style="text-align:center; margin-top:48px"> <a${addAttribute(d.lien_video, "href")} class="btn btn-cream" target="_blank" rel="noopener"><span>Voir la vidéo →</span></a> </p>`} </article> ` })} `;
}, "/sessions/magical-wonderful-hamilton/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/SITE_INTERNET_ASTRO/src/pages/drops/[slug].astro", void 0);

const $$file = "/sessions/magical-wonderful-hamilton/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/SITE_INTERNET_ASTRO/src/pages/drops/[slug].astro";
const $$url = "/drops/[slug].html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
