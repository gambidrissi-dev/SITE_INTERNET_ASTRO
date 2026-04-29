// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro.collectifcobalt.eu',
  integrations: [mdx(), sitemap()],
  build: {
    format: 'file', // génère /studio.html plutôt que /studio/index.html — cohérent avec l'actuel
  },
  trailingSlash: 'never',
});
