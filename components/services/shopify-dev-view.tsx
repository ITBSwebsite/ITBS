'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Code2,
  RefreshCw,
  ShoppingBag,
  Cpu,
  Layers,
} from 'lucide-react';
import { FAQAccordion, FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const SHOPIFY_SERVICES = [
  {
    title: 'Bespoke Shopify 2.0 Theme Development',
    desc: 'Built around your brand with modular sections and product blocks, with performance shaped by the theme, apps, assets and hosting setup.',
    bullets: ['Tailored Liquid Architecture', 'Modular Theme Sections', 'Performance-Conscious Builds'],
  },
  {
    title: 'Shopify Plus & Enterprise B2B',
    desc: 'Advanced enterprise capabilities: Checkout Extensibility, automated wholesale customer tiers, customized B2B price lists, and multi-location inventory.',
    bullets: ['Shopify Plus Checkout Extensibility', 'B2B Wholesale Portals & Pricing', 'Shopify Flow Workflow Automations'],
  },
  {
    title: 'Private Shopify App & API Engineering',
    desc: 'Custom middleware and bespoke Shopify apps connecting your store with custom ERPs, warehouse management systems (WMS), and proprietary calculators.',
    bullets: ['REST & GraphQL Admin API Integrations', 'Custom ERP, CRM & WMS Middleware', 'Bespoke Product Bundling Engines'],
  },
  {
    title: 'Shopify Speed & Conversion Optimization',
    desc: 'Eliminating unused third-party JavaScript, optimizing critical rendering paths, and implementing friction-free slide-out carts with smart upsells.',
    bullets: ['90+ Mobile PageSpeed Optimization', 'High-Converting Slide-Out Drawer Carts', 'Sticky Add-to-Cart & Dynamic Upsells'],
  },
  {
    title: 'Seamless Migration to Shopify',
    desc: 'A planned move from platforms such as Magento, WooCommerce or BigCommerce, with agreed data transfer and redirect mapping to reduce disruption.',
    bullets: ['Agreed Customer & Order Data Transfer', '1-to-1 301 URL SEO Redirect Mapping', 'Planned DNS Cutover'],
  },
  {
    title: 'Ongoing Retainers & Growth Support',
    desc: 'Continuous conversion rate optimization (CRO), A/B testing, seasonal promotional setups, security audits, and dedicated senior developer availability.',
    bullets: ['Proactive App & Speed Maintenance', 'Conversion Rate Optimization (CRO)', 'Dedicated UK Shopify Developers'],
  },
];

const FAQS: FAQItem[] = [
  {
    question: 'What does a Shopify development company do?',
    answer:
      'A professional Shopify development agency designs, custom-codes, and optimizes high-performing Shopify storefronts. We build bespoke themes, develop private apps, configure automated enterprise workflows, and optimize conversion funnels to scale your online revenue.',
  },
  {
    question: 'Do you offer Shopify Plus development services?',
    answer:
      'Yes. We specialize in Shopify Plus enterprise setups, including custom Checkout Extensibility apps, B2B wholesale portals, multi-store global expansion, and Shopify Flow automations.',
  },
  {
    question: 'Can you build custom apps for my Shopify store?',
    answer:
      'Yes. When off-the-shelf apps fail to meet your workflow requirements or slow down your store, our engineers develop bespoke private Shopify apps using Node.js, React, and Shopify GraphQL APIs.',
  },
  {
    question: 'Do you provide ongoing support after development?',
    answer:
      'Yes. We offer flexible monthly development retainers covering speed audits, new feature rollouts, seasonal promotion configurations, and priority technical support.',
  },
];

export function ShopifyDevView() {
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sp-visible');
          } else {
            entry.target.classList.remove('sp-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    const els = root.querySelectorAll('[data-sp-anim]');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="shopify-dev-root" suppressHydrationWarning>
      <style>{`
        .shopify-dev-root {
          position: relative;
          background: #FFFFFF;
          color: #111966;
          font-family: var(--font-body), "Cardo", Georgia, serif;
          overflow-x: clip;
        }
        .sp-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 40px);
        }

        /* Hero */
        .sp-hero {
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 60%, #F5F5F5 100%);
          padding: clamp(60px, 8vw, 110px) 0 clamp(50px, 6vw, 90px);
          border-bottom: 1px solid #e3e5ef;
          overflow: hidden;
        }
        .sp-hero-glow {
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(246, 239, 228, 0.75) 0%, transparent 70%);
          pointer-events: none;
        }
        .sp-hero-inner {
          position: relative;
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
        }
        .sp-eyebrow {
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
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .sp-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 700;
          color: #111966;
          line-height: 1.15;
          margin: 0 0 20px;
        }
        .sp-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(17px, 1.25vw, 19.5px);
          line-height: 1.75;
          color: #202938;
          margin: 0 0 34px;
        }
        .sp-stat-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .sp-stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 13.5px;
          font-weight: 700;
          color: #111966;
        }
        .sp-btn-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .sp-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 34px;
          background: #111966;
          color: #FFFFFF;
          border-radius: 8px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(17, 25, 102, 0.2);
        }
        .sp-btn-primary:hover {
          background: #0c1250;
          transform: none;
          box-shadow: 0 8px 24px rgba(17, 25, 102, 0.28);
        }
        .sp-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #FFFFFF;
          border: 1px solid rgba(17, 25, 102, 0.2);
          color: #111966;
          border-radius: 8px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .sp-btn-secondary:hover {
          border-color: #EAB308;
          background: #FFFDF5;
          transform: none;
        }

        /* Services Grid */
        .sp-section {
          padding: clamp(70px, 8vw, 110px) 0;
        }
        .sp-sec-head {
          text-align: center;
          max-width: 800px;
          margin: 0 auto clamp(40px, 5vw, 60px);
        }
        .sp-sec-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px;
          border-radius: 20px;
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #111966;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .sp-sec-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(30px, 3.8vw, 44px);
          font-weight: 700;
          color: #111966;
          line-height: 1.2;
          margin: 0 0 16px;
        }
        .sp-sec-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 17px;
          line-height: 1.7;
          color: #202938;
          margin: 0;
        }
        .sp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 50px;
        }
        .sp-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 34px 28px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 18px -4px rgba(17, 25, 102, 0.05);
          transition: all 0.35s ease;
        }
        .sp-card:hover {
          transform: none !important;
          background: var(--brand-hover-yellow) !important;
          border-color: #EAB308 !important;
          box-shadow: 0 14px 34px rgba(234, 179, 8, 0.22), 0 4px 12px rgba(17, 25, 102, 0.06) !important;
        }
        .sp-card-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: 21px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 12px;
          line-height: 1.3;
        }
        .sp-card-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15px;
          line-height: 1.7;
          color: #202938;
          margin: 0 0 20px;
          flex: 1;
        }
        .sp-card-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
          border-top: 1px solid #EEF2F6;
          padding-top: 18px;
        }
        .sp-bullet {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 13.5px;
          font-weight: 700;
          color: #111966;
        }
        .sp-bullet svg {
          color: #EAB308;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .sp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .sp-grid {
            grid-template-columns: 1fr;
          }
        }

        /* -- SCROLL ANIMATIONS -- */
        @keyframes spFadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        [data-sp-anim] {
          opacity: 0;
          will-change: transform, opacity;
        }

        .sp-card[data-sp-anim].sp-visible {
          animation: spFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .sp-card[data-sp-anim]:nth-child(1).sp-visible { animation-delay: 0.05s; }
        .sp-card[data-sp-anim]:nth-child(2).sp-visible { animation-delay: 0.18s; }
        .sp-card[data-sp-anim]:nth-child(3).sp-visible { animation-delay: 0.31s; }
        .sp-card[data-sp-anim]:nth-child(4).sp-visible { animation-delay: 0.44s; }
        .sp-card[data-sp-anim]:nth-child(5).sp-visible { animation-delay: 0.57s; }
        .sp-card[data-sp-anim]:nth-child(6).sp-visible { animation-delay: 0.7s; }
      `}</style>

      {/* Hero */}
      <section className="sp-hero">
        <div className="sp-hero-glow" aria-hidden="true" />
        <div className="sp-container">
          <div className="sp-hero-inner">
            <div className="sp-eyebrow">
              <ShoppingBag size={14} style={{ color: '#EAB308' }} />
              <span>SHOPIFY STORE DEVELOPMENT</span>
            </div>

            <h1 className="sp-title">
              Shopify Store Development Services UK
            </h1>

            <p className="sp-desc">
              We design, build, and optimize high-converting Shopify 2.0 and Shopify Plus storefronts.
              Bespoke Liquid theme engineering, custom app development, and checkout optimizations
              built to scale your eCommerce brand.
            </p>

            <div className="sp-stat-strip">
              <span className="sp-stat-pill">
                <CheckCircle2 size={13} style={{ color: '#EAB308' }} />
                <span>Purpose-built themes</span>
              </span>
              <span className="sp-stat-pill">
                <Zap size={13} style={{ color: '#EAB308' }} />
                <span>Theme and app customization</span>
              </span>
              <span className="sp-stat-pill">
                <Sliders size={13} style={{ color: '#EAB308' }} />
                <span>Private Custom Apps</span>
              </span>
            </div>

            <div className="sp-btn-group">
              <Link href="/contact" className="sp-btn-primary">
                <span>Book Shopify Consultation</span>
                <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
              <a href="#services-section" className="sp-btn-secondary">
                <span>Explore Capabilities</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-section" className="sp-section">
        <div className="sp-container">
          <div className="sp-sec-head">
            <div className="sp-sec-badge">
              <Sparkles size={13} style={{ color: '#EAB308' }} />
              <span>END-TO-END SOLUTIONS</span>
            </div>
            <h2 className="sp-sec-title">Bespoke Shopify Engineering Services</h2>
            <p className="sp-sec-desc">
              From ambitious brand launches to international Shopify Plus redesigns, we provide the full
              spectrum of bespoke theme engineering and custom technical integration.
            </p>
          </div>

          <div className="sp-grid">
            {SHOPIFY_SERVICES.map((item, idx) => (
              <div key={idx} className="sp-card" data-sp-anim>
                <h3 className="sp-card-title">{item.title}</h3>
                <p className="sp-card-desc">{item.desc}</p>
                <ul className="sp-card-bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="sp-bullet">
                      <CheckCircle2 size={14} strokeWidth={2.4} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Interactive FAQs */}
          <FAQAccordion items={FAQS} />

          {/* Bottom Conversion CTA */}
          <ServiceCTA
            badge="SHOPIFY STORE ENGINEERING"
            title="Ready to Build or Scale Your Shopify Store?"
            description="Discuss your project with our senior UK Shopify developers. We'll audit your current store performance, review your design objectives, and outline a fixed milestone roadmap."
            primaryBtnText="Scale On Shopify"
            primaryBtnHref="/contact"
          />
        </div>
      </section>
    </div>
  );
}
