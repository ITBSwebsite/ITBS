'use client';
import { useEffect, useState } from 'react';
export function BlogReadingProgress() {
 const [progress,setProgress]=useState(0);
 useEffect(()=>{
  let frame=0;
  const update=()=>{
   cancelAnimationFrame(frame);
   frame=requestAnimationFrame(()=>{
    const article=document.querySelector<HTMLElement>('[data-reading-content]');
    if(!article)return;
    const top=article.getBoundingClientRect().top+window.scrollY;
    const distance=Math.max(1,article.offsetHeight-window.innerHeight);
    setProgress(Math.max(0,Math.min(100,((window.scrollY-top)/distance)*100)));
   });
  };
  update(); window.addEventListener('scroll',update,{passive:true}); window.addEventListener('resize',update);
  return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',update);window.removeEventListener('resize',update);};
 },[]);
 return <div className="blog-reading-progress" aria-hidden="true"><span style={{transform:'scaleX('+progress/100+')'}}/></div>;
}
