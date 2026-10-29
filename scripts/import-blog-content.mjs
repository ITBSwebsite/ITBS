import { readFile } from 'node:fs/promises';
import nextEnv from '@next/env';
const { loadEnvConfig } = nextEnv;
import { createClient } from 'next-sanity';

loadEnvConfig(process.cwd());

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error('Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN before importing.');
  process.exit(1);
}

const [posts, articleBodies, editorialData] = await Promise.all([
  readFile(new URL('../content/blog-posts.json', import.meta.url), 'utf8').then(JSON.parse),
  readFile(new URL('../content/blog-article-content.json', import.meta.url), 'utf8').then(JSON.parse),
  readFile(new URL('../content/blog-editorial.json', import.meta.url), 'utf8').then(JSON.parse),
]);

const client = createClient({ projectId, dataset, token, apiVersion: '2025-02-19', useCdn: false });
let imported = 0;

for (const post of posts) {
  const editorial = editorialData.articles[post.slug] ?? {};
  const document = {
    _id: `blogPost-${post.slug}`,
    _type: 'blogPost',
    title: post.title,
    slug: { _type: 'slug', current: post.slug },
    excerpt: post.excerpt,
    categories: post.categories,
    publishedAt: post.publishedAt,
    lastUpdatedAt: editorial.lastUpdatedAt ?? post.publishedAt,
    readingMinutes: post.readingMinutes,
    featuredImageUrl: post.image ? `https://infotechbusinesssolutions.com${post.image}` : undefined,
    imageAlt: post.imageAlt,
    takeaways: editorial.takeaways ?? [],
    bodyHtml: articleBodies[post.slug] ?? '',
  };

  try {
    await client.createIfNotExists(document);
  } catch (error) {
    const status = Number.isInteger(error?.statusCode) ? `HTTP ${error.statusCode}` : 'network or authentication error';
    console.error(`Could not import ${post.slug}: ${status}. Check Sanity access and retry.`);
    process.exit(1);
  }
  imported += 1;
  console.log(`Imported or kept existing article: ${post.slug}`);
}

console.log(`Finished. ${imported} legacy blog articles are available in Sanity.`);
