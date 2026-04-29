import { o as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BhwfrjQd.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DVcUxZRi.mjs';
import 'clsx';

const frontmatter = {
  "title": "ARCHITALK 01 — Pourquoi on construit en pleine crise climatique",
  "excerpt": "Premier épisode du podcast. On parle écologie du bâtiment avec une architecte de Bordeaux qui a arrêté de construire neuf.",
  "date": "2026-06-01T00:00:00.000Z",
  "auteur": "Gambi",
  "tags": ["architecture", "écologie", "podcast"],
  "lecture": "8 min",
  "couverture": "/assets/OG-image/og-image.jpg",
  "video_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "serie": "ARCHITALK",
  "publie": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "pourquoi-cet-épisode",
    "text": "Pourquoi cet épisode"
  }, {
    "depth": 2,
    "slug": "linvitée",
    "text": "L’invitée"
  }, {
    "depth": 2,
    "slug": "ce-quon-retient",
    "text": "Ce qu’on retient"
  }, {
    "depth": 2,
    "slug": "la-vidéo",
    "text": "La vidéo"
  }, {
    "depth": 2,
    "slug": "pour-aller-plus-loin",
    "text": "Pour aller plus loin"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "pourquoi-cet-épisode",
      children: "Pourquoi cet épisode"
    }), "\n", createVNode(_components.p, {
      children: ["Quand on a lancé le format ARCHITALK, on savait qu’on voulait commencer par une question dérangeante : ", createVNode(_components.strong, {
        children: "est-ce qu’on devrait encore construire ?"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Pas un débat de plateau, pas une polémique. Une vraie conversation avec quelqu’un qui a fait le choix radical d’arrêter le neuf."
    }), "\n", createVNode(_components.h2, {
      id: "linvitée",
      children: "L’invitée"
    }), "\n", createVNode(_components.p, {
      children: "Camille Test, architecte DPLG installée à Bordeaux depuis 12 ans. En 2024, elle a annoncé sur LinkedIn qu’elle ne prendrait plus de mission de construction neuve. Que des réhabilitations."
    }), "\n", createVNode(_components.h2, {
      id: "ce-quon-retient",
      children: "Ce qu’on retient"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "“Le métier d’architecte au XXIᵉ siècle, ce n’est plus de remplir le sol. C’est de réparer ce qui est déjà là.”\n— Camille, 14:32"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Trois passages clés :"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Le coût carbone d’un m² neuf"
        }), " vs un m² réhabilité (10:15)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Le mythe de la maison passive"
        }), " dans l’individuel diffus (24:40)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pourquoi former les artisans est plus urgent que former les architectes"
        }), " (38:20)"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "la-vidéo",
      children: "La vidéo"
    }), "\n", createVNode(_components.p, {
      children: "L’épisode complet (52 min) — captation 4K, son binaural :"
    }), "\n", createVNode("iframe", {
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "ARCHITALK 01",
      width: "100%",
      height: "450",
      frameborder: "0",
      allowfullscreen: true
    }), "\n", createVNode(_components.h2, {
      id: "pour-aller-plus-loin",
      children: "Pour aller plus loin"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Le rapport Shift Project sur le bâtiment (PDF, 2023)"
      }), "\n", createVNode(_components.li, {
        children: "Le manifeste de l’architecte Patrick Bouchain"
      }), "\n", createVNode(_components.li, {
        children: "Notre note interne sur la doctrine Cobalt (à venir)"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Si l’épisode vous a parlé, partagez-le. Le format vit grâce à vous."
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

const url = "src/content/journal/architalk-01-pourquoi-on-construit.mdx";
const file = "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/journal/architalk-01-pourquoi-on-construit.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/journal/architalk-01-pourquoi-on-construit.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
