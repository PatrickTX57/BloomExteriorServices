import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// TODO: update to your final domain once connected
const SITE_URL = 'https://bloomexteriorservices.com';

// Sanity's embedded Studio (at /studio) only loads once a real project ID
// exists, so the site builds fine before Sanity is connected.
const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap(),
    ...(projectId
      ? [
          react(),
          sanity({
            projectId,
            dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
            useCdn: true,
            studioBasePath: '/studio',
          }),
        ]
      : []),
  ],
});
