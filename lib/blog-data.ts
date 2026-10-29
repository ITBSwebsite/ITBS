import postsData from '@/content/blog-posts.json';

export const BLOG_CATEGORIES = ['Digital Marketing', 'Web Development', 'AI & Search', 'SEO', 'Ecommerce'] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPost = {
  slug: string;
  title: string;
  authorName?: string;
  excerpt: string;
  publishedAt: string;
  dateLabel: string;
  categories: BlogCategory[];
  image: string | null;
  imageAlt: string;
  readingMinutes: number;
  seoTitle?: string;
  seoDescription?: string;
};

export const BLOG_POSTS = postsData as BlogPost[];
