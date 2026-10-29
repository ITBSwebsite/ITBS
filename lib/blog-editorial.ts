import editorialData from '@/content/blog-editorial.json';
export type BlogArticleEditorial = { lastUpdatedAt: string; takeaways: string[] };
type EditorialData = {
 author: { name: string; slug: string; role: string; image: string; description: string };
 articles: Record<string, BlogArticleEditorial>;
};
const editorial = editorialData as EditorialData;
export const BLOG_AUTHOR = editorial.author;
export const BLOG_ARTICLE_EDITORIAL = editorial.articles;
