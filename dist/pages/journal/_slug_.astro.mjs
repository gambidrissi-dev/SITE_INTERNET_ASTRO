import { e as createAstro, c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_CwI0pF3U.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BfwmfnVx.mjs';
import { $ as $$Base } from '../../chunks/Base_DIfE7DNF.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro.collectifcobalt.eu");
const getStaticPaths = async () => {
  const articles = await getCollection("journal", ({ data }) => data.publie);
  return articles.map((a) => ({ params: { slug: a.slug }, props: { entry: a } }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const d = entry.data;
  const fmt = d.date.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${d.title} \u2014 Journal \u2014 Collectif Cobalt`, "description": d.excerpt, "current": "journal", "ogImage": d.couverture ?? "/assets/OG-image/og-image.jpg" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="article-page"> <header class="article-page-hero"> <a href="/journal" class="projet-back">← Retour au Journal</a> <div class="article-meta"> ${d.serie && renderTemplate`<span class="article-serie">${d.serie}</span>`} <span>${fmt}</span> <span>· ${d.lecture}</span> <span>· par ${d.auteur}</span> </div> <h1 class="article-page-title">${d.title}</h1> <p class="article-page-excerpt">${d.excerpt}</p> </header> ${d.couverture && renderTemplate`<figure class="article-cover"> <img${addAttribute(d.couverture, "src")}${addAttribute(d.title, "alt")}> </figure>`} ${d.video_embed && renderTemplate`<div class="video-wrap"> <iframe${addAttribute(d.video_embed, "src")}${addAttribute(d.title, "title")} width="100%" height="450" frameborder="0" allowfullscreen></iframe> </div>`} <div class="prose"> ${renderComponent($$result2, "Content", Content, {})} </div> <footer class="article-footer"> <div class="article-tags"> ${d.tags.map((t) => renderTemplate`<span class="tag">#${t}</span>`)} </div> <a href="/journal" class="btn btn-cream"><span>← Retour au Journal</span></a> </footer> </article> ` })} `;
}, "/sessions/magical-wonderful-hamilton/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/SITE_INTERNET_ASTRO/src/pages/journal/[slug].astro", void 0);

const $$file = "/sessions/magical-wonderful-hamilton/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/SITE_INTERNET_ASTRO/src/pages/journal/[slug].astro";
const $$url = "/journal/[slug].html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
