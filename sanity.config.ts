'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { blogPost } from './sanity/schemaTypes/blogPost';

export default defineConfig({
  name: 'itbs-blog-cms',
  title: 'ITBS Blog Editor',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'missingproject',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: { types: [blogPost] },
});
