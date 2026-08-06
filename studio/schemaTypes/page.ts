import { defineField, defineType } from 'sanity';

// Generic page schema — lets a non-technical editor update copy on
// About / Services / Contact without touching code.
export default defineType({
  name: 'page',
  title: 'Site Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug (URL path)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 3 }),
    defineField({
      name: 'body',
      title: 'Page Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
  ],
});
