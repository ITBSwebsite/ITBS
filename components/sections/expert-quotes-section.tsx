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

const TRUST_PARTNERS = [
  'Google Ads',
  'Meta Ads',
  'Shopify',
  'WordPress',
  'Figma',
];

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('eq-visible');
          } else {
            entry.target.classList.remove('eq-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    const els = root.querySelectorAll('[data-eq-anim]');
    els.forEach((el) => observer.observe(el));
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
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: clamp(40px, 5vw, 60px);
          flex-wrap: wrap;
        }
        .eq-header-left {
          max-width: 760px;
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
          max-width: 420px;
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
          grid-template-columns: 1.25fr 1fr;
          gap: 28px;
          margin-bottom: 48px;
        }
        /* Featured Hero Card (Navy Blue) */
        .eq-card-featured {
          position: relative;
          background: linear-gradient(145deg, #0d1454 0%, #111966 50%, #172175 100%);
          border-radius: 22px;
          padding: clamp(34px, 4vw, 48px);
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
          margin-bottom: 32px;
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
          font-size: clamp(23px, 2.3vw, 31px);
          line-height: 1.38;
          color: #FFFFFF;
          margin: 0 0 36px;
          font-weight: 700;
        }
        /* Secondary Stack Column */
        .eq-secondary-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .eq-card-standard {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 34px 32px;
          box-shadow: 0 4px 18px -4px rgba(17, 25, 102, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.35s cubic-bezier(0.2, 0.6, 0.3, 1);
        }
        .eq-card-standard:hover {
          transform: none !important;
          border-color: #EAB308;
          box-shadow: 0 8px 24px -4px rgba(234, 179, 8, 0.2);
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
        /* Trust / Ecosystem row */
        .eq-trust-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 28px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          box-shadow: 0 2px 10px rgba(17, 25, 102, 0.03);
          gap: 20px;
          flex-wrap: wrap;
        }
        .eq-trust-lead {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14px;
          font-weight: 700;
          color: #111966;
          letter-spacing: 0.02em;
        }
        .eq-trust-pills {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .eq-trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: #F5F5F5;
          border: 1px solid #EEF2F6;
          border-radius: 6px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 12.5px;
          color: #202938;
          font-weight: 700;
        }
        .eq-trust-badge svg {
          color: #EAB308;
        }
        @media (max-width: 1024px) {
          .eq-bento-grid {
            grid-template-columns: 1fr;
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
          opacity: 0;
          will-change: transform, opacity;
        }
        .eq-card-featured[data-eq-anim].eq-visible {
          animation: eqFadeInLeft 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .eq-card-standard[data-eq-anim].eq-visible {
          animation: eqFadeInRight 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .eq-card-standard[data-eq-anim]:nth-child(1).eq-visible { animation-delay: 0.05s; }
        .eq-card-standard[data-eq-anim]:nth-child(2).eq-visible { animation-delay: 0.25s; }
        .eq-trust-row[data-eq-anim].eq-visible {
          animation: eqFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.15s;
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
          <span className="eq-trust-lead">
            Platforms and tools we work across:
          </span>
          <div className="eq-trust-pills">
            {TRUST_PARTNERS.map((partner) => (
              <span key={partner} className="eq-trust-badge">
                <CheckCircle2 size={13} strokeWidth={2.4} />
                <span>{partner}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
