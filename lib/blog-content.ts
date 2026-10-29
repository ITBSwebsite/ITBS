import 'server-only';
import { cacheLife, cacheTag } from 'next/cache';
import sanitizeHtml from 'sanitize-html';
import articleContentData from '@/content/blog-article-content.json';
import editorialData from '@/content/blog-editorial.json';
import postsData from '@/content/blog-posts.json';
import { BLOG_CATEGORIES, type BlogCategory, type BlogPost } from '@/lib/blog-data';

type Editorial = { lastUpdatedAt: string; takeaways: string[] };
type SanityPost = {
  slug?: string;
  title?: string;
  authorName?: string;
  excerpt?: string;
  publishedAt?: string;
  categories?: string[];
  image?: string | null;
  imageAlt?: string;
  readingMinutes?: number;
  lastUpdatedAt?: string;
  takeaways?: string[];
  bodyHtml?: string;
  seoTitle?: string;
  seoDescription?: string;
};

const fallbackPosts = postsData as BlogPost[];
const fallbackBodies = articleContentData as Record<string, string>;
const fallbackEditorial = (editorialData as { articles: Record<string, Editorial> }).articles;
function normalizeBlogImage(image: string | null | undefined): string | null {
  if (!image) return null;

  try {
    const url = new URL(image);
    if (
      url.hostname.replace(/^www\./, '') === 'infotechbusinesssolutions.com' &&
      url.pathname.startsWith('/images/blogs/')
    ) {
      return url.pathname + url.search + url.hash;
    }
  } catch {
    // Relative local image paths are already valid sources.
  }

  return image;
}
const CMS_TAG = 'blog-content';
const BLOG_QUERY = `*[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  authorName,
  excerpt,
  publishedAt,
  categories,
  "image": coalesce(featuredImage.asset->url, featuredImageUrl),
  imageAlt,
  readingMinutes,
  lastUpdatedAt,
  takeaways,
  bodyHtml,
  seoTitle,
  seoDescription
}`;

const formatDateLabel = (value: string) =>
  new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(`${value.slice(0, 10)}T00:00:00Z`));

function normalizePosts(rows: SanityPost[]): { posts: BlogPost[]; bodies: Record<string, string>; editorial: Record<string, Editorial> } {
  const posts: BlogPost[] = [];
  const bodies: Record<string, string> = {};
  const editorial: Record<string, Editorial> = {};

  for (const row of rows) {
    if (!row.slug || !row.title || !row.publishedAt || !row.bodyHtml) continue;
    const categories = (row.categories ?? []).filter((category): category is BlogCategory =>
      BLOG_CATEGORIES.includes(category as BlogCategory),
    );
    posts.push({
      slug: row.slug,
      title: row.title,
      authorName: row.authorName?.trim() || 'ITBS Editorial Team',
      excerpt: row.excerpt ?? '',
      publishedAt: row.publishedAt.slice(0, 10),
      dateLabel: formatDateLabel(row.publishedAt),
      categories: categories.length ? categories : ['Digital Marketing'],
      image: normalizeBlogImage(row.image),
      imageAlt: row.imageAlt ?? row.title,
      readingMinutes: Math.max(1, Math.round(row.readingMinutes ?? 5)),
      seoTitle: row.seoTitle,
      seoDescription: row.seoDescription,
    });
    bodies[row.slug] = row.bodyHtml;
    editorial[row.slug] = {
      lastUpdatedAt: (row.lastUpdatedAt ?? row.publishedAt).slice(0, 10),
      takeaways: (row.takeaways ?? []).filter((item): item is string => typeof item === 'string' && item.trim().length > 0),
    };
  }

  return { posts, bodies, editorial };
}

async function fetchPublishedBlogContent() {
  'use cache';
  cacheLife('minutes');
  cacheTag(CMS_TAG);

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
  const endpoint = new URL(`https://${projectId}.api.sanity.io/v2025-02-19/data/query/${encodeURIComponent(dataset)}`);
  endpoint.searchParams.set('query', BLOG_QUERY);

  const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`Sanity blog query failed (${response.status})`);
  const result = (await response.json()) as { result?: SanityPost[] };
  return normalizePosts(result.result ?? []);
}

export async function getBlogContent() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return { posts: fallbackPosts, bodies: fallbackBodies, editorial: fallbackEditorial };
  }

  try {
    const content = await fetchPublishedBlogContent();
    if (content.posts.length > 0) return content;
  } catch (error) {
    console.error('Unable to load published blog content from Sanity; using the bundled articles.', error);
  }

  return { posts: fallbackPosts, bodies: fallbackBodies, editorial: fallbackEditorial };
}

const allowedTags = [
  'a', 'b', 'blockquote', 'br', 'caption', 'code', 'dd', 'del', 'div', 'dl', 'dt', 'em', 'figcaption', 'figure',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'i', 'iframe', 'img', 'li', 'ol', 'p', 'pre', 'section', 'small', 'span',
  'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'th', 'thead', 'tr', 'u', 'ul',
];

export function sanitizeBlogHtml(html: string) {
  return sanitizeHtml(html, {
    allowedTags,
    allowedAttributes: {
      a: ['href', 'name', 'target', 'rel'],
      img: ['src', 'alt', 'title', 'width', 'height', 'loading', 'decoding'],
      iframe: ['src', 'title', 'width', 'height', 'allow', 'allowfullscreen', 'loading', 'referrerpolicy'],
      div: ['style'],
      p: ['style'],
      blockquote: ['style'],
      h1: ['style'],
      h2: ['style'],
      h3: ['style'],
      h4: ['style'],
      h5: ['style'],
      h6: ['style'],
      th: ['colspan', 'rowspan'],
      td: ['colspan', 'rowspan'],
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    allowedIframeHostnames: ['youtube-nocookie.com', 'www.youtube-nocookie.com', 'player.vimeo.com'],
    allowedStyles: { '*': { 'text-align': [/^(left|center|right|justify)$/] } },
    allowProtocolRelative: false,
    transformTags: {
      a: (tagName, attributes) => ({
        tagName,
        attribs: attributes.target === '_blank'
          ? { ...attributes, rel: 'noopener noreferrer' }
          : attributes,
      }),
    },
  });
}
