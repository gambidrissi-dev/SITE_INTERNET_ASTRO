import { c as createAstro, d as createComponent, r as renderComponent, e as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_BhwfrjQd.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BHVy-KrB.mjs';
import { $ as $$Base } from '../../chunks/Base_1KORp3yi.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro.collectifcobalt.eu");
const getStaticPaths = async () => {
  const projets = await getCollection("projets", ({ data }) => data.publie);
  return projets.map((p) => ({
    params: { slug: p.slug },
    props: { entry: p }
  }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const d = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${d.title} \u2014 Projets \u2014 Collectif Cobalt`, "description": d.excerpt, "current": "projets", "ogImage": d.couverture }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="projet-page"> <header class="projet-hero"> <a href="/projets" class="projet-back">← Tous les projets</a> <div class="projet-info"> <span>${d.lieu}</span> ${d.surface && renderTemplate`<span>· ${d.surface}</span>`} <span>· ${d.annee}</span> <span${addAttribute(`badge badge-${d.statut === "livr\xE9" ? "livr\xE9" : "cours"}`, "class")}>${d.statut}</span> </div> <h1 class="projet-title">${d.title}.</h1> <p class="projet-excerpt">${d.excerpt}</p> </header> <figure class="projet-cover"> <img${addAttribute(d.couverture, "src")}${addAttribute(d.title, "alt")}> </figure> <div class="projet-body prose"> ${renderComponent($$result2, "Content", Content, {})} </div> ${d.galerie.length > 0 && renderTemplate`<section class="projet-galerie"> <h2>Galerie</h2> <div class="galerie-grid"> ${d.galerie.map((img) => renderTemplate`<img${addAttribute(img, "src")} alt="" loading="lazy">`)} </div> </section>`} <footer class="projet-footer"> <a href="/projets" class="btn btn-cream"><span>← Voir tous les projets</span></a> </footer> </article> ` })} `;
}, "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/pages/projets/[slug].astro", void 0);

const $$file = "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/pages/projets/[slug].astro";
const $$url = "/projets/[slug].html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
