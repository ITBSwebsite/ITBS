'use client';

import React from 'react';
import {
  Sparkles,
  Layers,
  Home,
  ShoppingBag,
  Check,
  TrendingUp,
} from 'lucide-react';

interface IndustryItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  theme: 'gold' | 'navy';
  metrics: string;
  deliverables: string[];
  tags: string[];
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: 'beauty',
    badge: 'D2C & RETAIL',
    title: 'Beauty & Personal Care',
    subtitle: 'Skincare, haircare and beauty products',
    desc: 'Helping direct-to-consumer and retail beauty brands capture high-intent shoppers, scale customer acquisition, and maximize repeat purchase value.',
    icon: Sparkles,
    theme: 'gold',
    metrics: 'Product-Led Growth',
    deliverables: [
      'Google Shopping & Meta Ads Campaigns',
      'Technical Product-Level Search Visibility',
      'Influencer Funnels & Repeat-Purchase Loyalty',
    ],
    tags: ['Ecommerce SEO', 'Paid Social', 'Google Shopping'],
  },
  {
    id: 'tiles-paving',
    badge: 'TRADE & RESIDENTIAL',
    title: 'Tiles & Paving',
    subtitle: 'Porcelain tiles, paving and natural stone',
    desc: 'Targeting residential homeowners and commercial trade contractors with precision organic search, sample request funnels, and targeted PPC.',
    icon: Layers,
    theme: 'navy',
    metrics: 'High-Ticket Funnels',
    deliverables: [
      'Trade Contractor & Commercial Lead Generation',
      'Residential Sample Request Funnel UX',
      'High-Intent Geo-Targeted PPC Campaigns',
    ],
    tags: ['Technical SEO', 'High-Intent PPC', 'Trade Funnels'],
  },
  {
    id: 'home-improvement',
    badge: 'INTERIORS & LIVING',
    title: 'Home Improvement',
    subtitle: 'Bathroom furniture, flooring and interiors',
    desc: 'Converting browsing homeowners into paying clients with high-performing visual shopping campaigns, local and national search visibility, and conversion-first UX.',
    icon: Home,
    theme: 'gold',
    metrics: 'National Visibility',
    deliverables: [
      'High-Value Interior & Flooring Lead Funnels',
      'Rich Product Catalog Schema & Visual Feeds',
      'Conversion-First Mobile & Desktop UX',
    ],
    tags: ['Search Visibility', 'Shopping Feeds', 'Bespoke UX'],
  },
  {
    id: 'ecommerce-retail',
    badge: 'SCALE-UP COMMERCE',
    title: 'Ecommerce & Online Retail',
    subtitle: 'Product-led online businesses',
    desc: 'We connect the right mix of commerce platforms, paid campaigns and search visibility around your products and goals.',
    icon: ShoppingBag,
    theme: 'navy',
    metrics: 'Performance-Focused Marketing',
    deliverables: [
      'Omnichannel ROAS Optimization & Scaling',
      'Scalable Shopify Plus & Bespoke Platforms',
      'Generative AI Search (AEO & GEO) Visibility',
    ],
    tags: ['Full-Funnel ROAS', 'Shopify & WP', 'AI Search (AEO)'],
  },
];

export function IndustriesSection() {
  const rootRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ind-visible');
          } else {
            entry.target.classList.remove('ind-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    const els = root.querySelectorAll('[data-ind-anim]');
    els.forEach((el) => observer.observe(el));
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
        .ind-card-accent-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: #FCF000;
          opacity: 0.8;
          transition: all 0.35s ease;
        }
        .ind-card--navy .ind-card-accent-bar {
          background: linear-gradient(90deg, #111966 0%, #303b96 50%, #111966 100%);
        }
        .ind-card:hover {
          transform: none !important;
          background: var(--brand-hover-yellow);
          color: #111966;
          border-color: #EAB308;
          box-shadow: 0 8px 24px -4px rgba(234, 179, 8, 0.2);
        }
        .ind-card:hover .ind-card-accent-bar {
          height: 5px;
          opacity: 1;
        }
        .ind-card-inner {
          padding: 38px 36px 32px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        /* Card Top: Icon + Metric Badge */
        .ind-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 22px;
        }
        .ind-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: #F5F5F5;
          color: #111966;
          border: 1px solid rgba(234, 179, 8, 0.35);
          transition: all 0.35s ease;
        }
        .ind-card--navy .ind-icon-box {
          background: rgba(17, 25, 102, 0.07);
          color: #111966;
          border: 1px solid rgba(17, 25, 102, 0.2);
        }
        .ind-card:hover .ind-icon-box {
          background: #111966;
          color: #F6EFE4;
          transform: scale(1.08) rotate(-2deg);
          border-color: #111966;
        }
        .ind-metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(246, 239, 228, 0.7);
          border: 1px solid rgba(234, 179, 8, 0.3);
          border-radius: 20px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 12.5px;
          font-weight: 700;
          color: #7A5B1E;
          letter-spacing: 0.02em;
        }
        .ind-card--navy .ind-metric-pill {
          background: rgba(17, 25, 102, 0.05);
          border: 1px solid rgba(17, 25, 102, 0.15);
          color: #111966;
        }
        /* Category tag */
        .ind-cat-tag {
          display: inline-block;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8A6B29;
          margin-bottom: 8px;
        }
        .ind-card--navy .ind-cat-tag {
          color: #111966;
          opacity: 0.8;
        }
        /* Title & Subtitle */
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
        .ind-card-subtitle {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15px;
          font-weight: 700;
          color: #B8863A;
          margin: 0 0 14px;
          letter-spacing: 0.01em;
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
          background: rgba(246, 239, 228, 0.35);
          border-color: rgba(234, 179, 8, 0.35);
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
          background: #EAB308;
          color: #111966;
        }
        /* Footer row */
        .ind-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 18px;
          border-top: 1px solid #EEF2F6;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ind-tags-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .ind-tag {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 12px;
          font-weight: 700;
          color: #111966;
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          padding: 3px 10px;
          border-radius: 4px;
          letter-spacing: 0.02em;
        }
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
            const Icon = item.icon;
            const isNavy = item.theme === 'navy';

            return (
              <div
                key={item.id}
                className={`ind-card ${isNavy ? 'ind-card--navy' : 'ind-card--gold'}`}
                data-ind-anim
              >
                {/* Top luxury accent stripe */}
                <div className="ind-card-accent-bar" aria-hidden="true" />

                <div className="ind-card-inner">
                  {/* Card Head: Icon + Metric/Impact pill */}
                  <div className="ind-card-head">
                    <div className="ind-icon-box">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <span className="ind-metric-pill">
                      <TrendingUp size={13} strokeWidth={2.4} />
                      <span>{item.metrics}</span>
                    </span>
                  </div>

                  {/* Category badge */}
                  <span className="ind-cat-tag">{item.badge}</span>

                  {/* Title & Subtitle */}
                  <h3 className="ind-card-title">{item.title}</h3>
                  <p className="ind-card-subtitle">{item.subtitle}</p>

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

                  {/* Footer with sector tags */}
                  <div className="ind-card-footer">
                    <div className="ind-tags-wrap">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="ind-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
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
