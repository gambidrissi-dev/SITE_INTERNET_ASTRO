import { o as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BhwfrjQd.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DVcUxZRi.mjs';
import 'clsx';

const frontmatter = {
  "title": "FRAGMENTS 01 — Béton brut",
  "excerpt": "Première série de tirages photo : 12 fragments de béton coffré bois, en édition limitée 30 ex.",
  "date_drop": "2026-06-15T00:00:00.000Z",
  "serie": "FRAGMENTS 01",
  "couverture": "/assets/SHAPES/ITEM_1.svg",
  "galerie": ["/assets/SHAPES/ITEM_2.svg", "/assets/SHAPES/ITEM_3.svg"],
  "materiau": ["tirage Fine Art", "papier Hahnemühle 308 g"],
  "edition": "30 ex. signés",
  "prix": "180 €",
  "statut": "à-venir",
  "lien_video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "publie": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "lidée",
    "text": "L’idée"
  }, {
    "depth": 2,
    "slug": "le-format",
    "text": "Le format"
  }, {
    "depth": 2,
    "slug": "pourquoi-ce-drop",
    "text": "Pourquoi ce drop"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "lidée",
      children: "L’idée"
    }), "\n", createVNode(_components.p, {
      children: ["Pendant 3 mois, photographier les surfaces de béton coffré bois sur les chantiers de Nouvelle-Aquitaine. Les défauts, les veines, les marques. Ce que les architectes appellent “imperfections” et qu’on appelle nous ", createVNode(_components.em, {
        children: "signature"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "le-format",
      children: "Le format"
    }), "\n", createVNode(_components.p, {
      children: "12 tirages, 30×40 cm, papier Fine Art Hahnemühle. Édition de 30, numérotés et signés à la main au dos. Livrés dans un coffret en chêne brut cintré."
    }), "\n", createVNode(_components.h2, {
      id: "pourquoi-ce-drop",
      children: "Pourquoi ce drop"
    }), "\n", createVNode(_components.p, {
      children: "Parce que personne ne photographie le béton pour ce qu’il est : un matériau vivant qui garde la trace de la main qui l’a coulé."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/drops/fragments-01.mdx";
const file = "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/drops/fragments-01.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/drops/fragments-01.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
