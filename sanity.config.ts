import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './studio/schemaTypes';

// This config powers the embedded Studio at /studio on the live site.
// PUBLIC_SANITY_PROJECT_ID and PUBLIC_SANITY_DATASET come from your .env file
// (see .env.example) — get these from sanity.io/manage once your project exists.
export default defineConfig({
  name: 'default',
  title: 'Bloom Exterior Services',
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
