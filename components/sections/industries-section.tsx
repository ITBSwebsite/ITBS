'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface IndustryItem {
  id: string;
  badge: string;
  title: string;
  desc: string;
  theme: 'gold' | 'navy';
  deliverables: string[];
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: 'beauty',
    badge: 'D2C & RETAIL',
    title: 'Beauty & Personal Care',
    desc: 'Helping direct-to-consumer and retail beauty brands capture high-intent shoppers, scale customer acquisition, and maximize repeat purchase value.',
    theme: 'gold',
    deliverables: [
      'Google Shopping & Meta Ads Campaigns',
      'Technical Product-Level Search Visibility',
      'Influencer Funnels & Repeat-Purchase Loyalty',
    ],
  },
  {
    id: 'tiles-paving',
    badge: 'TRADE & RESIDENTIAL',
    title: 'Tiles & Paving',
    desc: 'Targeting residential homeowners and commercial trade contractors with precision organic search, sample request funnels, and targeted PPC.',
    theme: 'navy',
    deliverables: [
      'Trade Contractor & Commercial Lead Generation',
      'Residential Sample Request Funnel UX',
      'High-Intent Geo-Targeted PPC Campaigns',
    ],
  },
  {
    id: 'home-improvement',
    badge: 'INTERIORS & LIVING',
    title: 'Home Improvement',
    desc: 'Converting browsing homeowners into paying clients with high-performing visual shopping campaigns, local and national search visibility, and conversion-first UX.',
    theme: 'gold',
    deliverables: [
      'High-Value Interior & Flooring Lead Funnels',
      'Rich Product Catalog Schema & Visual Feeds',
      'Conversion-First Mobile & Desktop UX',
    ],
  },
  {
    id: 'ecommerce-retail',
    badge: 'SCALE-UP COMMERCE',
    title: 'Ecommerce & Online Retail',
    desc: 'We connect the right mix of commerce platforms, paid campaigns and search visibility around your products and goals.',
    theme: 'navy',
    deliverables: [
      'Omnichannel ROAS Optimization & Scaling',
      'Scalable Shopify Plus & Bespoke Platforms',
      'Generative AI Search (AEO & GEO) Visibility',
    ],
  },
];

export function IndustriesSection() {
  const rootRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>('[data-ind-anim]');
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      items.forEach((item) => item.classList.add('ind-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('ind-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={rootRef} className="ind-section-root" suppressHydrationWarning>
      {/* Self-contained CSS guaranteeing instant luxury rendering across all environments */}
      <style>{`
        .ind-section-root {
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 50%, #F5F5F5 100%);
          padding: clamp(75px, 8.5vw, 130px) 0;
          border-bottom: 1px solid #e3e5ef;
          overflow: hidden;
          font-family: var(--font-body), "Cardo", Georgia, serif;
          color: #111966;
        }
        .ind-ambient-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.6;
        }
        .ind-ambient-glow--top {
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 380px;
          background: radial-gradient(circle, rgba(246, 239, 228, 0.75) 0%, transparent 70%);
        }
        .ind-ambient-glow--bottom {
          bottom: -160px;
          right: 5%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(17, 25, 102, 0.05) 0%, transparent 70%);
        }
        .ind-container {
          position: relative;
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 40px);
        }
        .ind-header {
          text-align: center;
          max-width: 860px;
          margin: 0 auto clamp(48px, 6vw, 76px);
        }
        .ind-badge {
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
          margin-bottom: 20px;
        }
        .ind-badge-icon {
          color: #EAB308;
        }
        .ind-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(32px, 4.2vw, 48px);
          font-weight: 700;
          color: #111966;
          line-height: 1.18;
          letter-spacing: -0.01em;
          margin: 0 0 16px;
        }
        .ind-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 140px;
          margin: 18px auto 22px;
        }
        .ind-ornament-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #EAB308, transparent);
        }
        .ind-ornament-diamond {
          width: 7px;
          height: 7px;
          background: #EAB308;
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        .ind-intro {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(16px, 1.2vw, 18px);
          line-height: 1.78;
          color: #202938;
          margin: 0;
        }
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .ind-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          box-shadow: 0 4px 20px -4px rgba(17, 25, 102, 0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.38s cubic-bezier(0.2, 0.6, 0.3, 1);
        }
        /* Top luxury accent stripe */


        .ind-card:hover {
          transform: translateY(-3px);
          background: #FFF9AE;
          color: #111966;
          border-color: rgba(17, 25, 102, 0.18);
          box-shadow: 0 18px 40px rgba(17, 25, 102, 0.12);
        }

        .ind-card-inner {
          padding: 32px 34px 30px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        /* Card Top: Icon + Metric Badge */






        /* Category tag */
        .ind-cat-tag {
          display: inline-flex;
          align-self: flex-start;
          width: max-content;
          padding: 5px 10px;
          background: rgba(246, 239, 228, 0.72);
          border: 1px solid rgba(148, 110, 0, 0.16);
          border-radius: 999px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #80621F;
          margin-bottom: 14px;
        }
        .ind-card--navy .ind-cat-tag {
          background: rgba(17, 25, 102, 0.045);
          border-color: rgba(17, 25, 102, 0.12);
          color: #111966;
        }
        /* Card title */
        .ind-card-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: 26px;
          font-weight: 700;
          color: #111966;
          line-height: 1.25;
          margin: 0 0 6px;
          transition: color 0.3s ease;
        }
        .ind-card:hover .ind-card-title {
          color: #0c1250;
        }
.ind-card-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15.5px;
          line-height: 1.72;
          color: #202938;
          margin: 0 0 24px;
        }
        /* Deliverables box */
        .ind-deliverables-box {
          background: #F5F5F5;
          border: 1px solid #EEF2F6;
          border-radius: 10px;
          padding: 16px 18px;
          margin-bottom: 24px;
          margin-top: auto;
          transition: background 0.3s ease;
        }
        .ind-card:hover .ind-deliverables-box {
          background: rgba(255, 255, 255, 0.72);
          border-color: rgba(17, 25, 102, 0.1);
        }
        .ind-deliverables-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ind-deliverable-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 13.5px;
          line-height: 1.45;
          color: #111966;
        }
        .ind-check-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background: rgba(17, 25, 102, 0.08);
          color: #111966;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.3s ease;
        }
        .ind-card:hover .ind-check-circle {
          background: #111966;
          color: #FFF9AE;
        }
        /* Footer row */



        /* -- SCROLL ANIMATIONS -- */
        @keyframes indFadeInUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        [data-ind-anim] {
          opacity: 0;
          will-change: transform, opacity;
        }
        .ind-card[data-ind-anim].ind-visible {
          animation: indFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .ind-card[data-ind-anim]:nth-child(1).ind-visible { animation-delay: 0.05s; }
        .ind-card[data-ind-anim]:nth-child(2).ind-visible { animation-delay: 0.2s; }
        .ind-card[data-ind-anim]:nth-child(3).ind-visible { animation-delay: 0.35s; }
        .ind-card[data-ind-anim]:nth-child(4).ind-visible { animation-delay: 0.5s; }
        @media (prefers-reduced-motion: reduce) {
          [data-ind-anim],
          .ind-card[data-ind-anim].ind-visible {
            animation: none !important;
            opacity: 1;
            transform: none;
            will-change: auto;
          }
        }
        @media (max-width: 960px) {
          .ind-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .ind-card-inner {
            padding: 30px 24px 26px;
          }
        }
      `}</style>

      {/* Decorative ambient background glows */}
      <div className="ind-ambient-glow ind-ambient-glow--top" aria-hidden="true" />
      <div className="ind-ambient-glow ind-ambient-glow--bottom" aria-hidden="true" />

      <div className="ind-container">
        {/* Section Header */}
        <div className="ind-header">
          <h2 className="ind-title">
            Industries We&apos;ve Worked With
          </h2>

          <div className="ind-ornament" aria-hidden="true">
            <span className="ind-ornament-line" />
            <span className="ind-ornament-diamond" />
            <span className="ind-ornament-line" />
          </div>

          <p className="ind-intro">
            We&apos;ve worked with ecommerce brands across beauty, personal care, tiles, paving and
            home improvement. Our experience spans different product types, helping businesses
            improve search visibility, attract relevant shoppers and grow their online presence.
          </p>
        </div>

        {/* 2x2 Elevated Luxury Cards Grid */}
        <div className="ind-grid">
          {INDUSTRIES.map((item) => {
            const isNavy = item.theme === 'navy';

            return (
              <div
                key={item.id}
                className={`ind-card ${isNavy ? 'ind-card--navy' : 'ind-card--gold'}`}
                data-ind-anim
              >
                <div className="ind-card-inner">
                  {/* Category badge */}
                  <span className="ind-cat-tag">{item.badge}</span>
                  <h3 className="ind-card-title">{item.title}</h3>
{/* Narrative description */}
                  <p className="ind-card-desc">{item.desc}</p>

                  {/* 3 Key Deliverables with checkmarks */}
                  <div className="ind-deliverables-box">
                    <ul className="ind-deliverables-list">
                      {item.deliverables.map((deliv, idx) => (
                        <li key={idx} className="ind-deliverable-item">
                          <span className="ind-check-circle" aria-hidden="true">
                            <Check size={12} strokeWidth={2.6} />
                          </span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
