import { o as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BhwfrjQd.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DVcUxZRi.mjs';
import 'clsx';

const frontmatter = {
  "title": "Appartement Angoulême",
  "excerpt": "Réhabilitation d'un appartement de 95 m² au cœur du centre historique. Travail sur la lumière, refonte complète des cloisons.",
  "lieu": "Angoulême",
  "surface": "95 m²",
  "annee": 2024,
  "statut": "livré",
  "couverture": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85&auto=format&fit=crop",
  "galerie": ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85&auto=format&fit=crop", "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1200&q=85&auto=format&fit=crop"],
  "client": "Particulier",
  "typologie": "résidentiel",
  "publie": true,
  "ordre": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "le-contexte",
    "text": "Le contexte"
  }, {
    "depth": 2,
    "slug": "la-démarche",
    "text": "La démarche"
  }, {
    "depth": 2,
    "slug": "ce-quon-retient",
    "text": "Ce qu’on retient"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    hr: "hr",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "le-contexte",
      children: "Le contexte"
    }), "\n", createVNode(_components.p, {
      children: "Un T3 des années 30, plafonds hauts, mais cloisonnement étouffant et apport de lumière limité côté rue. Le client souhaitait retrouver une circulation fluide sans perdre l’identité de l’appartement."
    }), "\n", createVNode(_components.h2, {
      id: "la-démarche",
      children: "La démarche"
    }), "\n", createVNode(_components.p, {
      children: "Trois mois d’étude. Démolition de deux cloisons porteuses (avec calcul structure validé par BET), création d’un noyau central technique qui regroupe cuisine + salle d’eau, libération du périmètre."
    }), "\n", createVNode(_components.p, {
      children: "Choix de matériaux locaux : tomettes Charente, enduit chaux-chanvre teinté ocre clair, menuiseries en chêne local de Cognac."
    }), "\n", createVNode(_components.h2, {
      id: "ce-quon-retient",
      children: "Ce qu’on retient"
    }), "\n", createVNode(_components.p, {
      children: "La pièce de vie a doublé en surface utile sans toucher à l’enveloppe. Les anciens murs sont devenus des seuils."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "“On avait peur de perdre l’âme du lieu. C’est exactement le contraire qui s’est passé.”\n— Le client, à la livraison"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Photographe : Test placeholder"
      })
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

const url = "src/content/projets/appartement-angouleme.mdx";
const file = "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/projets/appartement-angouleme.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/projets/appartement-angouleme.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
