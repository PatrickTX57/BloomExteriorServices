import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const blogCategories = [
  'Foundation Protection',
  'Drainage',
  'Irrigation',
  'Automation',
  'Landscaping',
  'Hardscaping',
  'Lighting',
] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(blogCategories),
            tags: z.array(z.string()).default([]),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
        format: z.enum(['standard', 'listicle']).default('standard'),
  }),
});

export const collections = { blog };
