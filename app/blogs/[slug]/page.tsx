import type { Metadata } from 'next';
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft,ArrowRight,Clock3,ListTree } from 'lucide-react';
import { reserveArticleImageDimensions } from '@/lib/blog-images';
import { getBlogContent, sanitizeBlogHtml } from '@/lib/blog-content';
import { BlogReadingProgress } from '@/components/blog/blog-reading-progress';
import { BlogRecommendationTabs } from '@/components/blog/blog-recommendation-tabs';
import { BLOG_AUTHOR } from '@/lib/blog-editorial';
import { BLOG_CATEGORIES,type BlogCategory } from '@/lib/blog-data';
type Props={params:Promise<{slug:string}>};
type Heading={id:string;title:string};
const articleUrl=(slug:string)=>'https://infotechbusinesssolutions.com/blogs/'+slug;
const imageUrl=(image:string|null)=>image?new URL(image,'https://infotechbusinesssolutions.com').toString():undefined;
const dateLabel=(date:string)=>new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(date+'T00:00:00Z'));
function titleText(markup:string){return markup.replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim();}
function slugify(title:string){return title.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'section';}
function addHeadingIds(content:string){const headings:Heading[]=[];const seen=new Set<string>();const html=content.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi,(_match,attrs:string,inner:string)=>{const title=titleText(inner);const base='article-'+slugify(title);let id=base;let suffix=2;while(seen.has(id)){id=base+'-'+suffix;suffix++;}seen.add(id);headings.push({id,title});return '<h2'+attrs.replace(/\s+id=(["']).*?\1/gi,'')+' id="'+id+'">'+inner+'</h2>';});return {html,headings};}
function splitIntro(content:string){const end=content.toLowerCase().indexOf('</p>');return end<0?{intro:'',body:content}:{intro:content.slice(0,end+4),body:content.slice(end+4)};}
export async function generateStaticParams(){const {posts}=await getBlogContent();return posts.map(({slug})=>({slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params;const {posts,editorial}=await getBlogContent();const post=posts.find(item=>item.slug===slug);if(!post)return{title:'Article not found | ITBS'};
 const authorName=post.authorName?.trim()||BLOG_AUTHOR.name;const modified=editorial[slug]?.lastUpdatedAt??post.publishedAt;const title=post.seoTitle||post.title+' | ITBS Blog';const description=post.seoDescription||post.excerpt;
 return {title,description,authors:[{name:authorName}],alternates:{canonical:'/blogs/'+post.slug},
  openGraph:{type:'article',title,description,url:articleUrl(post.slug),siteName:'InfoTech Business Solutions',locale:'en_GB',publishedTime:post.publishedAt,modifiedTime:modified,authors:[authorName],images:post.image?[{url:imageUrl(post.image)!,alt:post.imageAlt}]:undefined},
  twitter:{card:'summary_large_image',title,description,images:post.image?[imageUrl(post.image)!]:undefined}};
}
export default function BlogArticlePage({params}:Props){return <Suspense fallback={<main className="blog-article-page" aria-busy="true"><div className="blog-article-shell">Loading article…</div></main>}><BlogArticleContent params={params}/></Suspense>;}
async function BlogArticleContent({params}:Props){
 const {slug}=await params;const {posts,bodies,editorial:editorials}=await getBlogContent();const post=posts.find(item=>item.slug===slug);const content=bodies[slug];if(!post||!content)notFound();
 const authorName=post.authorName?.trim()||BLOG_AUTHOR.name;const editorial=editorials[slug];const updated=editorial?.lastUpdatedAt??post.publishedAt;const takeaways=editorial?.takeaways??[];
 const {html,headings}=addHeadingIds(sanitizeBlogHtml(content));const intro=splitIntro(reserveArticleImageDimensions(html));
 const related=posts.filter(item=>item.slug!==slug&&item.categories.some(category=>post.categories.includes(category))).slice(0,3);
 const latest=[...posts].filter(item=>item.slug!==slug).sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt)).slice(0,3);
 const popular:typeof posts=[];
 const counts=Object.fromEntries(BLOG_CATEGORIES.map(category=>[category,posts.filter(item=>item.categories.includes(category)).length])) as Record<BlogCategory,number>;
 const toc=headings.map(heading=><a href={'#'+heading.id} key={heading.id}>{heading.title}</a>);
 const schema={'@context':'https://schema.org','@type':'BlogPosting',headline:post.title,description:post.seoDescription||post.excerpt,datePublished:post.publishedAt,dateModified:updated,image:imageUrl(post.image),mainEntityOfPage:articleUrl(post.slug),inLanguage:'en-GB',author:authorName===BLOG_AUTHOR.name?{'@type':'Organization',name:authorName,url:'https://infotechbusinesssolutions.com/authors/'+BLOG_AUTHOR.slug}:{'@type':'Person',name:authorName},publisher:{'@type':'Organization',name:'InfoTech Business Solutions',url:'https://infotechbusinesssolutions.com'}};
 return <main className="blog-article-page">
  <BlogReadingProgress/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
  <div className="blog-article-shell">
   <Link href="/blogs" className="blog-back-link"><ArrowLeft size={16} aria-hidden="true"/> All articles</Link>
   <header className="blog-article-header">
    <div className="blog-article-categories">{post.categories.map(category=><span key={category}>{category}</span>)}</div>
    <h1>{post.title}</h1>
    {takeaways.length>0&&<aside className="blog-key-takeaways" aria-labelledby="blog-takeaways-title"><span className="blog-takeaways-label">A QUICK SUMMARY</span><h2 id="blog-takeaways-title">Key takeaways</h2><ul>{takeaways.map(item=><li key={item}>{item}</li>)}</ul></aside>}
    <div className="blog-article-byline">
     <div className="blog-article-author"><Image src={BLOG_AUTHOR.image} alt="InfoTech Business Solutions logo" width={125} height={24} className="blog-article-author-logo"/><span><span className="blog-article-byline-label">Written by</span><span className="blog-article-author-name">{authorName}</span></span></div>
     <div className="blog-article-facts"><span><span className="blog-article-byline-label">Last updated</span><time dateTime={updated}>{dateLabel(updated)}</time></span><span className="blog-article-read-time"><Clock3 size={15} aria-hidden="true"/> {post.readingMinutes} min read</span></div>
    </div>
   </header>

   <div className="blog-article-grid">
    <aside className="blog-article-toc" aria-label="Article contents"><div className="blog-article-rail-card"><span className="blog-article-rail-title"><ListTree size={15} aria-hidden="true"/> ON THIS PAGE</span><nav aria-label="Table of contents">{toc}</nav></div></aside>
    <div className="blog-article-main" data-reading-content>
     {headings.length>0&&<details className="blog-article-mobile-toc"><summary><ListTree size={17} aria-hidden="true"/> In this article <span>{headings.length} sections</span></summary><nav aria-label="Table of contents">{toc}</nav></details>}
     <article className="blog-article-content">
      {intro.intro&&<div dangerouslySetInnerHTML={{__html:intro.intro}}/>}

      <div dangerouslySetInnerHTML={{__html:intro.body}}/>
     </article>
    </div>
    <aside className="blog-article-categories-rail" aria-label="Browse article categories"><div className="blog-article-rail-card"><span className="blog-article-rail-title">EXPLORE TOPICS</span><nav aria-label="Blog categories">{BLOG_CATEGORIES.map(category=><Link href={'/blogs?category='+encodeURIComponent(category)} key={category} aria-current={post.categories[0]===category?'page':undefined} className={post.categories[0]===category?'is-current':undefined}><span>{category}</span><span>{counts[category]}</span></Link>)}</nav><Link href="/blogs" className="blog-article-all-topics">All articles <ArrowRight size={14} aria-hidden="true"/></Link></div></aside>
   </div>
   <BlogRecommendationTabs relatedPosts={related} latestPosts={latest} popularPosts={popular}/>
  </div>
 </main>;
}
