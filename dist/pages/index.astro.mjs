import { c as createAstro, d as createComponent, l as renderHead, e as renderTemplate } from '../chunks/astro/server_BhwfrjQd.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro.collectifcobalt.eu");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><title>cobalt. — Astro staging</title>${renderHead()}</head> <body> <h1>SITE_V3_ASTRO — staging</h1> <p>Test bench Astro. Voir <a href="/studio">studio</a>, <a href="/projets">projets</a>, <a href="/drops">drops</a>, <a href="/journal">journal</a>.</p> </body></html>`;
}, "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/pages/index.astro", void 0);

const $$file = "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
