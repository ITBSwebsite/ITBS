'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

/* ==========================================================================
   Principles shown here describe ITBS's working approach. They are not
   attributed client or industry testimonials.
   ========================================================================== */

export interface ExpertQuote {
  id: string;
  category: string;
  quote: string;
  featured?: boolean;
}

const EXPERT_QUOTES: ExpertQuote[] = [
  {
    id: 'quote-1',
    category: 'Strategy & Growth',
    quote: 'We agree what progress means, then plan the work and reporting around your business goals.',
    featured: true,
  },
  {
    id: 'quote-2',
    category: 'Paid Media & PPC',
    quote: 'Paid campaigns work best when targeting, landing pages, budgets and measurement are planned together.',
    featured: false,
  },
  {
    id: 'quote-3',
    category: 'Brand & Creative',
    quote: 'Clear messaging and consistent creative help people understand what your business offers across channels.',
    featured: false,
  },
  {
    id: 'quote-4',
    category: 'SEO & Search Revenue',
    quote: 'Search visibility takes useful content, sound technical foundations and sustained work; results and timing vary.',
    featured: false,
  },
];

type TrustPartner = {
  name: string;
  mark: 'google-ads' | 'meta' | 'shopify' | 'wordpress' | 'figma';
};

const TRUST_PARTNERS: TrustPartner[] = [
  { name: 'Google Ads', mark: 'google-ads' },
  { name: 'Meta Ads', mark: 'meta' },
  { name: 'Shopify', mark: 'shopify' },
  { name: 'WordPress', mark: 'wordpress' },
  { name: 'Figma', mark: 'figma' },
];

function TrustPartnerMark({ mark }: { mark: TrustPartner['mark'] }) {
  switch (mark) {
    case 'google-ads':
      return (
        <svg className="eq-brand-mark" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#4285F4" d="M13.35 2.37a4 4 0 0 1 5.47 1.46l.02.03a4 4 0 0 1-.02 4l-7.65 13.25a4 4 0 0 1-6.93-4l7.66-13.25c.37-.65.86-1.13 1.45-1.49Z" />
          <path fill="#FBBC04" d="M9.65 2.37a4 4 0 0 1 3.47 5.98l-5.2 9a4 4 0 1 1-6.93-4l5.2-9a4 4 0 0 1 3.46-1.98Z" />
          <circle cx="5.93" cy="18.03" r="3.45" fill="#34A853" />
        </svg>
      );
    case 'meta':
      return (
        <svg className="eq-brand-mark" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#0866FF" d="M21.8 12.5c0 4.13-1.7 6.65-4.5 6.65-2.2 0-3.8-1.86-5.66-4.75l-.55-.86-.55.86c-2.02 3.12-3.77 4.75-5.76 4.75C2.03 19.15.5 16.76.5 12.56c0-4.55 2.17-7.7 5.36-7.7 2.32 0 4.12 1.77 6.14 4.82 1.83-2.84 3.67-4.82 5.78-4.82 2.65 0 4.02 2.58 4.02 7.64ZM5.58 16.4c.86 0 1.92-1.12 3.78-3.9-1.57-2.36-2.74-3.56-3.6-3.56-1.08 0-1.82 1.62-1.82 4.02 0 2.2.59 3.44 1.64 3.44Zm11.48 0c1.15 0 1.69-1.18 1.69-3.86 0-2.42-.52-3.6-1.57-3.6-.99 0-2.13 1.28-3.67 3.57 1.66 2.62 2.69 3.89 3.55 3.89Z" />
        </svg>
      );
    case 'shopify':
      return (
        <svg className="eq-brand-mark" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#95BF47" d="m5.35 7.15 1.05 14h11.2l1.1-14H5.35Z" />
          <path fill="none" stroke="#5E8E3E" strokeWidth="1.6" strokeLinecap="round" d="M8.65 8V5.9a3.35 3.35 0 0 1 6.7 0V8" />
          <path fill="#fff" d="M14.8 11.1c-.47-.2-1.08-.35-1.7-.35-.98 0-1.48.4-1.48.87 0 .52.62.78 1.63 1.18 1.3.49 1.93 1.15 1.93 2.15 0 1.39-1.12 2.32-3.02 2.32-.87 0-1.79-.2-2.26-.48l.33-1.42c.54.31 1.26.52 1.98.52.84 0 1.26-.33 1.26-.82 0-.47-.39-.75-1.38-1.13-1.35-.5-2.16-1.18-2.16-2.22 0-1.28 1.1-2.32 3.04-2.32.88 0 1.56.17 2.02.38l-.39 1.32Z" />
        </svg>
      );
    case 'wordpress':
      return (
        <svg className="eq-brand-mark" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#21759B" />
          <path fill="#fff" d="m4.1 7.1 3.72 10.17 2.09-5.7-1.53-4.47H6.72v-.92h5.1v.92h-1.65l3.22 9.23 2.18-6.16-.97-3.07h-1.41v-.92h4.87v.92h-1.39l2.13 6.48c.67-1.76 1.02-3.17 1.02-4.48 0-1.13-.38-1.91-.71-2.5-.46-.73-.88-1.35-.88-2.08 0-.81.61-1.48 1.48-1.48h.18A9.03 9.03 0 0 0 12 3a9 9 0 0 0-7.9 4.1Z" />
          <path fill="#fff" d="m9.11 20.4 2.67-7.47 2.91 7.97c-.86.25-1.77.39-2.69.39-1.02 0-1.99-.16-2.89-.45Zm7.23-.97 2.64-7.04c.47-1.18.62-2.11.62-2.94 0-.3-.02-.58-.05-.84a9 9 0 0 1-3.21 10.82Z" />
        </svg>
      );
    case 'figma':
      return (
        <svg className="eq-brand-mark eq-brand-mark--figma" viewBox="0 0 24 36" aria-hidden="true">
          <path fill="#F24E1E" d="M6 0h6v12H6A6 6 0 0 1 6 0Z" />
          <path fill="#FF7262" d="M12 0h6a6 6 0 0 1 0 12h-6V0Z" />
          <path fill="#A259FF" d="M6 12h6v12H6a6 6 0 0 1 0-12Z" />
          <circle cx="18" cy="18" r="6" fill="#1ABCFE" />
          <path fill="#0ACF83" d="M6 24h6v6a6 6 0 1 1-6-6Z" />
        </svg>
      );
  }
}

export function ExpertQuotesSection() {
  // Allow toggling active quotes easily
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Strategy & Growth', 'Paid Media & PPC', 'Brand & Creative', 'SEO & Search Revenue'];

  // Filtered quotes based on category selection
  const filteredQuotes =
    activeCategory === 'All'
      ? EXPERT_QUOTES
      : EXPERT_QUOTES.filter((q) => q.category === activeCategory);

  const featuredQuote =
    filteredQuotes.find((q) => q.featured) || filteredQuotes[0] || EXPERT_QUOTES[0];

  const secondaryQuotes = filteredQuotes.filter((q) => q.id !== featuredQuote.id);

  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>('[data-eq-anim]');
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      items.forEach((item) => item.classList.add('eq-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('eq-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section ref={rootRef} className="eq-section-root" suppressHydrationWarning>
      {/* Self-contained CSS guaranteeing instant luxury rendering */}
      <style>{`
        .eq-section-root {
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 50%, #F5F5F5 100%);
          padding: clamp(75px, 8.5vw, 130px) 0;
          border-bottom: 1px solid #e3e5ef;
          overflow: hidden;
          font-family: var(--font-body), "Cardo", Georgia, serif;
          color: #111966;
        }
        .eq-ambient-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.6;
        }
        .eq-ambient-glow--left {
          top: 20%;
          left: -120px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(17, 25, 102, 0.07) 0%, transparent 70%);
        }
        .eq-ambient-glow--right {
          bottom: 10%;
          right: -120px;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, transparent 70%);
        }
        .eq-container {
          position: relative;
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 40px);
        }
        /* Header */
        .eq-header {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
          align-items: end;
          gap: clamp(24px, 4vw, 64px);
          margin-bottom: clamp(32px, 4vw, 48px);
        }
        .eq-header-left {
          max-width: 900px;
        }
        .eq-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          background: #FFFFFF;
          border: 1px solid rgba(17, 25, 102, 0.14);
          border-radius: 30px;
          box-shadow: 0 2px 10px rgba(17, 25, 102, 0.04);
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #111966;
          margin-bottom: 18px;
        }
        .eq-badge-icon {
          color: #EAB308;
        }
        .eq-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(32px, 4.2vw, 48px);
          font-weight: 700;
          color: #111966;
          line-height: 1.15;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .eq-header-right {
          max-width: 480px;
          justify-self: end;
          padding-bottom: 4px;
        }
        .eq-header-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 16px;
          line-height: 1.7;
          color: #202938;
          margin: 0;
        }
        /* Category filter pills */
        .eq-categories-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 36px;
          overflow-x: auto;
          padding-bottom: 6px;
          scrollbar-width: none;
        }
        .eq-categories-bar::-webkit-scrollbar {
          display: none;
        }
        .eq-cat-btn {
          padding: 8px 18px;
          border-radius: 30px;
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 13.5px;
          font-weight: 700;
          color: #202938;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.25s ease;
        }
        .eq-cat-btn:hover {
          border-color: #EAB308;
          color: #111966;
        }
        .eq-cat-btn.is-active {
          background: #111966;
          border-color: #111966;
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(17, 25, 102, 0.18);
        }
        /* Bento Grid */
        .eq-bento-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: stretch;
          gap: 22px;
          margin-bottom: 40px;
        }
        /* Featured Hero Card (Navy Blue) */
        .eq-card-featured {
          position: relative;
          background: linear-gradient(145deg, #0d1454 0%, #111966 50%, #172175 100%);
          border-radius: 22px;
          min-height: 310px;
          padding: clamp(26px, 3vw, 38px);
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 16px 40px -12px rgba(17, 25, 102, 0.35);
          overflow: hidden;
          border: 1px solid rgba(234, 179, 8, 0.35);
          transition: all 0.38s cubic-bezier(0.2, 0.6, 0.3, 1);
        }
        .eq-card-featured:hover {
          transform: none !important;
          color: #FFFFFF;
          box-shadow: 0 20px 48px -10px rgba(17, 25, 102, 0.18);
          border-color: rgba(255, 255, 255, 0.38);
        }
        .eq-card-featured:hover .eq-author-avatar--featured { color: #111966; background: rgba(255, 255, 255, 0.7); }
        .eq-featured-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(234, 179, 8, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }
        .eq-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
        }
        .eq-tag-pill {
          padding: 5px 14px;
          border-radius: 20px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .eq-tag-pill--featured {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #FDE68A;
        }
        .eq-quote-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: #EAB308;
        }
        .eq-featured-text {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(21px, 2vw, 28px);
          line-height: 1.42;
          color: #FFFFFF;
          margin: 0 0 28px;
          font-weight: 700;
        }
        /* Secondary Stack Column */
        .eq-secondary-stack {
          display: contents;
        }
        .eq-card-standard {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          min-height: 310px;
          padding: clamp(26px, 3vw, 36px);
          box-shadow: 0 4px 18px -4px rgba(17, 25, 102, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.35s cubic-bezier(0.2, 0.6, 0.3, 1);
        }
        .eq-section-root .eq-card-standard:hover {
          transform: translateY(-3px);
          background: #FFF9AE !important;
          background-color: #FFF9AE !important;
          background-image: none !important;
          border-color: #E8E2A0 !important;
          box-shadow: 0 14px 30px -8px rgba(17, 25, 102, 0.16) !important;
        }
        .eq-tag-pill--standard {
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          color: #111966;
        }
        .eq-standard-text {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(17px, 1.35vw, 19.5px);
          line-height: 1.55;
          color: #111966;
          font-weight: 700;
          margin: 18px 0 24px;
        }
        /* Author Row */
        .eq-author-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .eq-author-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 15px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .eq-author-avatar--featured {
          background: #FFFFFF;
          color: #111966;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
        }
        .eq-author-avatar--standard {
          background: #111966;
          color: #FFFFFF;
        }
        .eq-author-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .eq-author-name {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.25;
        }
        .eq-author-name--featured {
          color: #FFFFFF;
        }
        .eq-author-name--standard {
          color: #111966;
        }
        .eq-author-meta {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 13.5px;
          line-height: 1.3;
        }
        .eq-author-meta--featured {
          color: rgba(255, 255, 255, 0.75);
        }
        .eq-author-meta--standard {
          color: #202938;
        }
        /* Platform strip */
        .eq-section-root .eq-trust-row {
          position: relative;
          display: grid;
          grid-template-columns: minmax(220px, 0.78fr) minmax(0, 2fr);
          align-items: center;
          gap: clamp(20px, 3vw, 42px);
          padding: clamp(20px, 2.4vw, 30px);
          overflow: hidden;
          background: linear-gradient(120deg, #101858 0%, #111966 58%, #192477 100%);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 18px;
          box-shadow: 0 18px 42px -20px rgba(17, 25, 102, 0.48);
        }
        .eq-section-root .eq-trust-row::before {
          position: absolute;
          top: 24%;
          bottom: 24%;
          left: 0;
          width: 3px;
          border-radius: 0 3px 3px 0;
          background: #EAB308;
          content: "";
        }
        .eq-section-root .eq-trust-copy {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .eq-section-root .eq-trust-kicker {
          color: #F2D56F;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .eq-section-root .eq-trust-lead {
          color: #FFFFFF;
          font-family: "The Seasons", Georgia, serif !important;
          font-size: clamp(17px, 1.35vw, 20px);
          font-weight: 700;
          line-height: 1.35;
        }
        .eq-section-root .eq-trust-pills {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 10px;
        }
        .eq-section-root .eq-trust-badge {
          display: flex;
          min-width: 0;
          min-height: 58px;
          align-items: center;
          gap: 10px;
          padding: 9px 11px;
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 12px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 12.5px;
          font-weight: 700;
          line-height: 1.25;
          transition: transform 0.22s ease, background-color 0.22s ease, border-color 0.22s ease;
        }
        .eq-section-root .eq-trust-badge:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.11);
          border-color: rgba(255, 255, 255, 0.3);
        }
        .eq-section-root .eq-trust-logo {
          display: grid;
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          place-items: center;
          background: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 9px;
          box-shadow: 0 3px 9px rgba(4, 10, 54, 0.12);
        }
        .eq-section-root .eq-brand-mark {
          display: block;
          width: 22px;
          height: 22px;
        }
        .eq-section-root .eq-brand-mark--figma {
          width: 16px;
          height: 24px;
        }
        @media (max-width: 900px) {
          .eq-header {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .eq-header-right {
            justify-self: start;
          }
          .eq-bento-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .eq-section-root .eq-trust-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .eq-section-root .eq-trust-pills {
            grid-template-columns: repeat(auto-fit, minmax(138px, 1fr));
            width: 100%;
          }
        }
        @media (max-width: 640px) {
          .eq-section-root {
            padding: 64px 0;
          }
          .eq-bento-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .eq-card-featured,
          .eq-card-standard {
            min-height: 270px;
            padding: 24px;
          }
          .eq-card-head {
            margin-bottom: 18px;
          }
          .eq-featured-text {
            margin-bottom: 24px;
          }
          .eq-section-root .eq-trust-row {
            padding: 21px 18px;
            border-radius: 15px;
          }
          .eq-section-root .eq-trust-pills {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }
          .eq-section-root .eq-trust-badge {
            min-height: 54px;
            gap: 8px;
            padding: 8px;
            font-size: 11.5px;
          }
          .eq-section-root .eq-trust-logo {
            width: 30px;
            height: 30px;
            flex-basis: 30px;
          }
          .eq-section-root .eq-brand-mark {
            width: 20px;
            height: 20px;
          }
          .eq-section-root .eq-brand-mark--figma {
            width: 14px;
            height: 21px;
          }
        }
        /* -- PREMIUM SCROLL ANIMATIONS -- */
        @keyframes eqFadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes eqFadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes eqFadeInUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        [data-eq-anim] {
          opacity: 1;
          will-change: auto;
        }
        .eq-card-featured[data-eq-anim].eq-visible {
          animation: eqFadeInLeft 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .eq-card-standard[data-eq-anim].eq-visible {
          animation: eqFadeInRight 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .eq-card-standard[data-eq-anim]:nth-child(1).eq-visible { animation-delay: 0.08s; }
        .eq-card-standard[data-eq-anim]:nth-child(2).eq-visible { animation-delay: 0.16s; }
        .eq-card-standard[data-eq-anim]:nth-child(3).eq-visible { animation-delay: 0.24s; }
        .eq-trust-row[data-eq-anim].eq-visible {
          animation: eqFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.15s;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-eq-anim],
          .eq-card-featured[data-eq-anim].eq-visible,
          .eq-card-standard[data-eq-anim].eq-visible,
          .eq-trust-row[data-eq-anim].eq-visible {
            animation: none !important;
            opacity: 1;
            transform: none;
            will-change: auto;
          }
        }
      `}</style>

      {/* Ambient background glows */}
      <div className="eq-ambient-glow eq-ambient-glow--left" aria-hidden="true" />
      <div className="eq-ambient-glow eq-ambient-glow--right" aria-hidden="true" />

      <div className="eq-container">
        {/* Section Header */}
        <div className="eq-header">
          <div className="eq-header-left">
            <div className="eq-badge">
              <Sparkles size={13} className="eq-badge-icon" />
              <span>OUR WORKING PRINCIPLES</span>
            </div>
            <h2 className="eq-title">
              Practical principles for lasting digital growth
            </h2>
          </div>
          <div className="eq-header-right">
            <p className="eq-header-desc">
              Clear goals, thoughtful execution and honest reporting guide the work across search,
              advertising, web development and design.
            </p>
          </div>
        </div>

        {/* Filter / Category Selector Bar */}
        <div className="eq-categories-bar" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`eq-cat-btn ${activeCategory === cat ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout (Sample 1 Style with Navy Featured Card + White Secondary Cards) */}
        <div className="eq-bento-grid">
          {/* 1. Left Featured Hero Card (Royal Navy) */}
          <div className="eq-card-featured" data-eq-anim>
            <div className="eq-featured-glow" aria-hidden="true" />
            <div>
              <div className="eq-card-head">
                <span className="eq-tag-pill eq-tag-pill--featured">
                  {featuredQuote.category}
                </span>
                <div className="eq-quote-icon" aria-hidden="true">
                <CheckCircle2 size={20} strokeWidth={2.2} />
                </div>
              </div>
              <p className="eq-featured-text">{featuredQuote.quote}</p>
            </div>

            <div className="eq-author-row">
              <div className="eq-author-avatar eq-author-avatar--featured">
                ITBS
              </div>
              <div className="eq-author-info">
                <span className="eq-author-name eq-author-name--featured">
                  Our working approach
                </span>
                <span className="eq-author-meta eq-author-meta--featured">
                  {featuredQuote.category}
                </span>
              </div>
            </div>
          </div>

          {/* 2. Right Stacked Secondary Cards */}
          <div className="eq-secondary-stack">
            {secondaryQuotes.map((sq) => (
              <div key={sq.id} className="eq-card-standard" data-eq-anim>
                <div>
                  <div className="eq-card-head">
                    <span className="eq-tag-pill eq-tag-pill--standard">
                      {sq.category}
                    </span>
                    <div style={{ color: '#EAB308' }} aria-hidden="true">
                      <CheckCircle2 size={18} strokeWidth={2} />
                    </div>
                  </div>
                  <p className="eq-standard-text">{sq.quote}</p>
                </div>

                <div className="eq-author-row">
                  <div className="eq-author-avatar eq-author-avatar--standard">
                    ITBS
                  </div>
                  <div className="eq-author-info">
                    <span className="eq-author-name eq-author-name--standard">
                      Our working approach
                    </span>
                    <span className="eq-author-meta eq-author-meta--standard">
                      {sq.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Partner Ecosystem Trust Row */}
        <div className="eq-trust-row" data-eq-anim>
          <div className="eq-trust-copy">
            <span className="eq-trust-kicker">OUR DIGITAL TOOLKIT</span>
            <span className="eq-trust-lead">Platforms and tools we work across</span>
          </div>
          <div className="eq-trust-pills">
            {TRUST_PARTNERS.map((partner) => (
              <span key={partner.name} className="eq-trust-badge">
                <span className="eq-trust-logo">
                  <TrustPartnerMark mark={partner.mark} />
                </span>
                <span>{partner.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
