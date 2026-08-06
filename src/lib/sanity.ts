import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

// `sanityEnabled` lets pages fall back to local markdown content until a
// real Sanity project is connected, so the site never breaks mid-setup.
export const sanityEnabled = Boolean(projectId);

export const sanityClient: SanityClient | null = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2025-01-01',
      useCdn: true, // fast, cached reads for published content
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: any) {
  if (!builder) throw new Error('Sanity not configured');
  return builder.image(source);
}

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  tags?: string[];
  body?: any;
  mainImage?: any;
  seoTitle?: string;
}

const blogPostFields = `
  _id, title, slug, excerpt, publishedAt, tags, body, mainImage, seoTitle
`;

export async function getAllBlogPosts(): Promise<SanityBlogPost[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) { ${blogPostFields} }`
  );
}

export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  if (!sanityClient) return null;
  return sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] { ${blogPostFields} }`,
    { slug }
  );
}
