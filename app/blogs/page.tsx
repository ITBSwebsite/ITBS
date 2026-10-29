import type { Metadata } from 'next';
import { Suspense } from 'react';
import { BlogArchive } from '@/components/blog/blog-archive';
import { BLOG_CATEGORIES,BLOG_POSTS } from '@/lib/blog-data';
import { BLOG_ARTICLE_EDITORIAL } from '@/lib/blog-editorial';
import { getBlogContent } from '@/lib/blog-content';
const title='SEO, Digital Marketing & Ecommerce Insights | ITBS Blog';
const description='Explore practical guidance on SEO, ecommerce, digital marketing and AI search from InfoTech Business Solutions.';
export const metadata:Metadata={title,description,alternates:{canonical:'/blogs'},openGraph:{title,description,url:'https://infotechbusinesssolutions.com/blogs',siteName:'InfoTech Business Solutions',locale:'en_GB',type:'website'},twitter:{card:'summary_large_image',title,description}};
type Props={searchParams:Promise<{category?:string|string[]}>};
export default function BlogsPage({searchParams}:Props){
 const lastUpdatedBySlug=Object.fromEntries(BLOG_POSTS.map(post=>[post.slug,BLOG_ARTICLE_EDITORIAL[post.slug]?.lastUpdatedAt??post.publishedAt]));
 return <Suspense fallback={<BlogArchive posts={BLOG_POSTS} categories={BLOG_CATEGORIES} lastUpdatedBySlug={lastUpdatedBySlug}/>}>
  <BlogsPageContent searchParams={searchParams}/>
 </Suspense>;
}
async function BlogsPageContent({searchParams}:{searchParams:Props['searchParams']}){
 const [{posts,editorial},params]=await Promise.all([getBlogContent(),searchParams]);
 const lastUpdatedBySlug=Object.fromEntries(posts.map(post=>[post.slug,editorial[post.slug]?.lastUpdatedAt??post.publishedAt]));
 const raw=Array.isArray(params.category)?params.category[0]:params.category;
 const initialCategory=BLOG_CATEGORIES.find(category=>category===raw)??'All Posts';
 const imageUrl=(image:string|null)=>image?new URL(image,'https://infotechbusinesssolutions.com').toString():undefined;
 const schema={'@context':'https://schema.org','@type':'Blog',name:'ITBS Insights',description,url:'https://infotechbusinesssolutions.com/blogs',inLanguage:'en-GB',blogPost:posts.map(post=>({'@type':'BlogPosting',headline:post.title,url:'https://infotechbusinesssolutions.com/blogs/'+post.slug,datePublished:post.publishedAt,dateModified:editorial[post.slug]?.lastUpdatedAt??post.publishedAt,image:imageUrl(post.image)}))};
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><BlogArchive key={initialCategory} posts={posts} categories={BLOG_CATEGORIES} initialCategory={initialCategory} lastUpdatedBySlug={lastUpdatedBySlug}/></>;
}
