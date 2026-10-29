import { defineField, defineType } from 'sanity';
import { BLOG_CATEGORIES } from '@/lib/blog-data';
import { BlogHtmlInput } from '@/components/studio/blog-html-input';
import { ClearableFeaturedImageInput, ClearableLegacyImageUrlInput } from '@/components/studio/clearable-image-input';

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Article title', type: 'string', validation: (rule) => rule.required().max(160) }),
    defineField({ name: 'authorName', title: 'Author name', type: 'string', initialValue: 'ITBS Editorial Team', description: 'Name shown in the article byline and structured article data.', validation: (rule) => rule.max(100) }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'excerpt', title: 'Card and SEO summary', type: 'text', rows: 3, validation: (rule) => rule.required().max(500) }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: BLOG_CATEGORIES.map((category) => ({ title: category, value: category })) },
      validation: (rule) => rule.required().min(1),
    }),
    defineField({ name: 'publishedAt', title: 'Published date', type: 'date', validation: (rule) => rule.required() }),
    defineField({ name: 'lastUpdatedAt', title: 'Last updated', type: 'date' }),
    defineField({ name: 'readingMinutes', title: 'Reading time (minutes)', type: 'number', initialValue: 5, validation: (rule) => rule.required().min(1).max(180) }),
    defineField({
      name: 'featuredImage',
      title: 'Featured image',
      type: 'image',
      options: { hotspot: true },
      components: { input: ClearableFeaturedImageInput },
    }),
    defineField({
      name: 'featuredImageUrl',
      title: 'Fallback image URL (legacy)',
      type: 'url',
      description: 'Older imported posts may use this URL. Clear it to remove the old image; an uploaded Sanity image takes priority.',
      components: { input: ClearableLegacyImageUrlInput },
    }),
    defineField({ name: 'imageAlt', title: 'Featured image alt text', type: 'string', validation: (rule) => rule.max(180) }),
    defineField({ name: 'takeaways', title: 'Key takeaways', type: 'array', of: [{ type: 'string' }], validation: (rule) => rule.max(8) }),
    defineField({ name: 'bodyHtml', title: 'Article content', type: 'string', components: { input: BlogHtmlInput }, validation: (rule) => rule.required().min(1) }),
    defineField({ name: 'seoTitle', title: 'SEO title (optional)', type: 'string', validation: (rule) => rule.max(70) }),
    defineField({ name: 'seoDescription', title: 'SEO description (optional)', type: 'text', rows: 2, validation: (rule) => rule.max(180) }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'categories.0', media: 'featuredImage' },
  },
});
