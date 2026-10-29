'use client';
import { useMemo,useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight,ArrowUpRight,BookOpen,Clock3,Search,Sparkles } from 'lucide-react';
import type { BlogCategory,BlogPost } from '@/lib/blog-data';
type Props={posts:BlogPost[];categories:readonly BlogCategory[];initialCategory?:BlogCategory|'All Posts';lastUpdatedBySlug:Record<string,string>};
const dateFormat=new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'});
export function BlogArchive({posts,categories,initialCategory='All Posts',lastUpdatedBySlug}:Props){
 const[activeCategory,setActiveCategory]=useState<BlogCategory|'All Posts'>(initialCategory);const[search,setSearch]=useState('');
 const categoryItems=[{label:'All Posts' as const,count:posts.length},...categories.map(label=>({label,count:posts.filter(post=>post.categories.includes(label)).length}))];
 const visiblePosts=useMemo(()=>{const query=search.trim().toLowerCase();return posts.filter(post=>{const categoryOk=activeCategory==='All Posts'||post.categories.includes(activeCategory);const searchOk=!query||(post.title+' '+post.excerpt+' '+post.categories.join(' ')).toLowerCase().includes(query);return categoryOk&&searchOk;});},[activeCategory,posts,search]);
 const heading=activeCategory==='All Posts'?'Latest articles':activeCategory+' articles';
 return <main className="blogs-page">
  <section className="blogs-hero"><div className="blogs-shell"><div className="blogs-hero-topline"><span className="blogs-eyebrow"><Sparkles aria-hidden="true" size={15}/> ITBS INSIGHTS</span></div><div className="blogs-hero-grid">
   <div className="blogs-hero-copy"><h1>Practical ideas for <em>better digital growth</em></h1><p>Clear guidance on SEO, ecommerce, digital marketing and the changing world of AI search written to help you make your next move with confidence.</p></div>
   <div className="blogs-hero-panel"><span className="blogs-panel-label">THE ITBS JOURNAL</span><h2>Useful thinking.<br/>Clear next steps.</h2><div className="blogs-panel-bottom"><span><BookOpen size={17} aria-hidden="true"/> {posts.length} practical guides</span><span className="blogs-panel-mark" aria-hidden="true"><ArrowUpRight size={19}/></span></div></div>
  </div></div></section>
  <section className="blogs-archive" aria-label="Browse ITBS articles"><div className="blogs-shell blogs-archive-layout">
   <aside className="blogs-sidebar"><div className="blogs-sidebar-card"><span className="blogs-sidebar-kicker">BROWSE BY TOPIC</span><h2>Explore insights</h2><nav className="blogs-category-list" aria-label="Blog categories">
    {categoryItems.map(({label,count})=><button key={label} type="button" className={'blogs-category-button'+(activeCategory===label?' is-active':'')} onClick={()=>setActiveCategory(label)} aria-pressed={activeCategory===label}><span>{label}</span><span className="blogs-category-count">{count}</span></button>)}
   </nav><div className="blogs-sidebar-note"><Sparkles size={16} aria-hidden="true"/><p>Practical perspectives from the ITBS team.</p></div></div></aside>
   <div className="blogs-results"><div className="blogs-results-heading"><h2>{heading}</h2></div>
    <div className="blogs-mobile-categories" aria-label="Filter articles by topic">{categoryItems.map(({label,count})=><button key={label} type="button" className={'blogs-mobile-category'+(activeCategory===label?' is-active':'')} onClick={()=>setActiveCategory(label)} aria-pressed={activeCategory===label}>{label}<span>{count}</span></button>)}</div>
    <div className="blogs-results-toolbar"><label className="blogs-search"><Search aria-hidden="true" size={18}/><span className="sr-only">Search articles</span><input type="search" value={search} onChange={event=>setSearch(event.target.value)} placeholder="Search by title, topic or keyword" aria-label="Search articles by title, topic or keyword"/></label><span className="blogs-results-total" aria-live="polite">{visiblePosts.length} {visiblePosts.length===1?'article':'articles'}</span></div>
    {visiblePosts.length?<div className="blogs-card-grid">{visiblePosts.map(post=>{const updated=lastUpdatedBySlug[post.slug]??post.publishedAt;return <article className="blogs-card" key={post.slug}>
     <Link className="blogs-card-image" href={'/blogs/'+post.slug} aria-label={'Read '+post.title}>{post.image?<Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 36vw" loading="lazy"/>:<span className="blogs-card-image-fallback"><Sparkles size={34} aria-hidden="true"/></span>}<span className="blogs-image-category">{post.categories[0]}</span></Link>
     <div className="blogs-card-body"><div className="blogs-card-meta"><span>Last updated <time dateTime={updated}>{dateFormat.format(new Date(updated+'T00:00:00Z'))}</time></span><span className="blogs-meta-dot" aria-hidden="true"/><span><Clock3 size={14} aria-hidden="true"/> {post.readingMinutes} min read</span></div><h3><Link href={'/blogs/'+post.slug}>{post.title}</Link></h3><p className="blogs-card-excerpt">{post.excerpt}</p><Link className="blogs-card-link" href={'/blogs/'+post.slug}>Read article <ArrowRight size={16} aria-hidden="true"/></Link></div>
    </article>;})}</div>:<div className="blogs-empty-state"><span className="blogs-empty-icon"><Search size={22} aria-hidden="true"/></span><h3>No matching articles</h3><p>Try a different search or choose another topic.</p><button type="button" onClick={()=>{setActiveCategory('All Posts');setSearch('');}}>Show all articles</button></div>}
   </div>
  </div></section>
 </main>;
}
