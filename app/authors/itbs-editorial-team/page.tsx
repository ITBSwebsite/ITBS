import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight,BookOpen,Sparkles } from 'lucide-react';
import { BLOG_AUTHOR } from '@/lib/blog-editorial';
import { getBlogContent } from '@/lib/blog-content';
export const metadata:Metadata={title:'ITBS Editorial Team | Authors',description:'Meet the ITBS Editorial Team and explore practical articles on SEO, ecommerce, digital marketing and AI search.',alternates:{canonical:'/authors/itbs-editorial-team'}};
const dateLabel=(date:string)=>new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(date+'T00:00:00Z'));
export default async function EditorialTeamPage(){const {posts,editorial}=await getBlogContent();return <main className="blog-author-page"><div className="blog-author-shell">
 <Link className="blog-back-link" href="/blogs">← All articles</Link>
 <section className="blog-author-profile" aria-labelledby="author-name">
  <div className="blog-author-mark"><Image src={BLOG_AUTHOR.image} alt="InfoTech Business Solutions logo" width={192} height={64} priority/></div>
  <div className="blog-author-copy"><span className="blogs-section-kicker"><Sparkles size={14} aria-hidden="true"/> AUTHOR PROFILE</span>
   <h1 id="author-name">{BLOG_AUTHOR.name}</h1><p className="blog-author-role">{BLOG_AUTHOR.role}</p><p>{BLOG_AUTHOR.description}</p><p className="blog-author-experience">The editorial team covers search, ecommerce and web topics across its published guides.</p>
   <div className="blog-author-expertise"><span>Editorial focus</span><ul><li>SEO and search visibility</li><li>Ecommerce and digital marketing</li><li>Web development and AI search</li></ul></div>
  </div>
 </section>
 <section className="blog-author-articles" aria-labelledby="author-articles-heading">
  <div className="blog-related-heading-row"><div><span className="blogs-section-kicker"><BookOpen size={14} aria-hidden="true"/> ARTICLES</span><h2 id="author-articles-heading">Articles by {BLOG_AUTHOR.name}</h2></div><span className="blogs-results-total">{posts.length} articles</span></div>
  <div className="blog-author-article-list">{posts.map(post=><Link href={'/blogs/'+post.slug} className="blog-author-article" key={post.slug}><span>{post.categories[0]} · Updated {dateLabel(editorial[post.slug]?.lastUpdatedAt??post.publishedAt)}</span><h3>{post.title}</h3><ArrowRight aria-hidden="true" size={18}/></Link>)}</div>
 </section>
</div></main>}
