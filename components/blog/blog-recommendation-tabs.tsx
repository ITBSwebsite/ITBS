'use client';
import { useId,useState,type KeyboardEvent } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog-data';
type Tab={id:'related'|'latest'|'popular';label:string;posts:BlogPost[]};
type Props={relatedPosts:BlogPost[];latestPosts:BlogPost[];popularPosts?:BlogPost[]};
export function BlogRecommendationTabs({relatedPosts,latestPosts,popularPosts=[]}:Props){
 const id=useId();
 const tabs:Tab[]=[{id:'related',label:'Related articles',posts:relatedPosts},{id:'latest',label:'Latest articles',posts:latestPosts},...(popularPosts.length?[{id:'popular' as const,label:'Popular articles',posts:popularPosts}]:[])];
 const [activeId,setActiveId]=useState<Tab['id']>('related');
 const active=tabs.find(tab=>tab.id===activeId)??tabs[0];
 function onKeyDown(event:KeyboardEvent<HTMLButtonElement>){
  const current=tabs.findIndex(tab=>tab.id===activeId);let next=current;
  if(event.key==='ArrowRight')next=(current+1)%tabs.length;
  if(event.key==='ArrowLeft')next=(current+tabs.length-1)%tabs.length;
  if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;
  if(next!==current){event.preventDefault();setActiveId(tabs[next].id);document.getElementById(id+'-tab-'+tabs[next].id)?.focus();}
 }
 return <section className="blog-recommendations" aria-labelledby={id+'-heading'}>
  <div className="blog-recommendations-heading"><span className="blogs-section-kicker">KEEP EXPLORING</span><h2 id={id+'-heading'}>More from the ITBS journal</h2></div>
  <div className="blog-recommendation-tabs" role="tablist" aria-label="More articles">{tabs.map(tab=><button key={tab.id} id={id+'-tab-'+tab.id} type="button" role="tab" aria-selected={activeId===tab.id} aria-controls={id+'-panel'} tabIndex={activeId===tab.id?0:-1} onClick={()=>setActiveId(tab.id)} onKeyDown={onKeyDown}>{tab.label}</button>)}</div>
  <div id={id+'-panel'} className="blog-related-grid" role="tabpanel" aria-labelledby={id+'-tab-'+active.id} tabIndex={0}>{active.posts.map(post=><Link href={'/blogs/'+post.slug} className="blog-related-card" key={post.slug}><span>{post.categories[0]}</span><h3>{post.title}</h3><span className="blog-related-arrow" aria-hidden="true"><ArrowRight size={17}/></span></Link>)}</div>
 </section>;
}
