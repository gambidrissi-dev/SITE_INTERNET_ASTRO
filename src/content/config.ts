// Content Collections — schémas typés pour les 3 sections éditoriales
// Astro va valider chaque fichier .md/.mdx au build : si un frontmatter est cassé, build error.
// C'est un des gros bénéfices de la migration : impossible d'oublier un champ obligatoire.

import { defineCollection, z } from 'astro:content';

/* ───────────── PROJETS ─────────────
   Réalisations du Studio : appartements, ateliers, boutiques.
   Champs : tout ce qui apparaît sur une fiche projet + dans la liste. */
const projets = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().describe('Résumé 1-2 phrases pour la card'),
    lieu: z.string(),
    surface: z.string().optional(),       // "95 m²"
    annee: z.number(),
    statut: z.enum(['livré', 'en-cours', 'concours']),
    couverture: z.string().describe('Path relatif dans /public ou URL'),
    galerie: z.array(z.string()).default([]),
    client: z.string().optional(),
    typologie: z.enum(['résidentiel', 'tertiaire', 'commerce', 'culturel']).optional(),
    publie: z.boolean().default(true),
    ordre: z.number().default(0),         // pour ranger manuellement la liste
  }),
});

/* ───────────── DROPS ─────────────
   Productions de l'Atelier : objets, séries limitées, prototypes.
   Différent des projets : pas de "lieu", a un "stock" et un "prix". */
const drops = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date_drop: z.coerce.date(),
    serie: z.string().optional(),         // "FRAGMENTS 01", "PETITS PLANS 03"
    couverture: z.string(),
    galerie: z.array(z.string()).default([]),
    materiau: z.array(z.string()).default([]),
    edition: z.string().optional(),       // "10 ex." | "ouverte"
    prix: z.string().optional(),          // "180 €" | "sur demande"
    statut: z.enum(['à-venir', 'disponible', 'epuise']).default('à-venir'),
    lien_video: z.string().url().optional(), // YT / Vimeo
    publie: z.boolean().default(true),
  }),
});

/* ───────────── JOURNAL ─────────────
   Articles, comptes rendus, réflexions. Le format Média.
   Type 'content' = corps en markdown/mdx, frontmatter typé. */
const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    auteur: z.enum(['Gambi', 'Lola', 'Lou-Ann', 'Collectif']).default('Collectif'),
    tags: z.array(z.string()).default([]),
    lecture: z.string().describe('Temps de lecture, ex: "5 min"'),
    couverture: z.string().optional(),
    video_embed: z.string().url().optional(), // URL embed YT/Vimeo (pas la URL de partage)
    serie: z.enum(['ARCHITALK', 'CARNET BLEU', 'FRAGMENTS', 'PETITS PLANS', 'RACCOURCI']).optional(),
    publie: z.boolean().default(true),
  }),
});

export const collections = { projets, drops, journal };
