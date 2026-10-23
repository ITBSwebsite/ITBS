'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShoppingCart,
  CreditCard,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Package,
  Layers,
  Sparkles,
  BarChart3,
  Globe,
} from 'lucide-react';
import { FAQAccordion, FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const PLATFORMS = [
  {
    name: 'Shopify & Shopify Plus',
    tagline: 'Flexible commerce tools for growing stores',
    desc: 'Bespoke Liquid theme development, custom app extensions, checkout extensibility, and seamless omnichannel integrations built for D2C scale.',
    features: ['Custom Shopify 2.0 Themes', 'Shopify Plus B2B Wholesale', 'One-Click Checkout & Subscriptions'],
    href: '/services/shopify-development',
  },
  {
    name: 'WooCommerce Custom Solutions',
    tagline: 'Flexible, content-led commerce with platform costs to consider',
    desc: 'Engineered for brands wanting complete data autonomy. Custom checkout funnels, membership subscriptions, and custom product builders.',
    features: ['High-Performance Checkout', 'Flexible Hosting and Extension Costs', 'Full WordPress Content Ecosystem'],
    href: '/services/wordpress-development',
  },
  {
    name: 'Magento / Adobe Commerce',
    tagline: 'Heavyweight Architecture for Complex B2B & Multi-Storefront Brands',
    desc: 'Robust ERP integrations, multi-warehouse inventory management, custom tier pricing, and advanced product variant matrix capabilities.',
    features: ['Complex Catalog Matrix', 'Multi-Store & International Multi-Currency', 'ERP & SAP Integrations'],
    href: '/contact',
  },
  {
    name: 'Headless E-Commerce Engines',
    tagline: 'Next.js Frontend Paired with Composable Commerce Backends',
    desc: 'Decoupled storefront architecture can support tailored shopper journeys and frontend flexibility, with performance shaped by the implementation and hosting.',
    features: ['Composable API-First Stack', 'Flexible Frontend Design', 'Performance-Led Implementation'],
    href: '/services/custom-web-development',
  },
];

const ECOM_PATH = [
  {
    step: '01',
    title: 'Discovery & Commerce Strategy',
    desc: 'We analyze your target demographics, average order value (AOV) goals, payment gateways, and catalog complexity to establish technical specs.',
  },
  {
    step: '02',
    title: 'Conversion-Centric UI/UX Design',
    desc: 'Frictionless product browsing, persuasive visual merchandising, smart filtering, and streamlined single-page checkouts engineered in Figma.',
  },
  {
    step: '03',
    title: 'Robust Development & Integration',
    desc: 'Secure payment gateway setups (Stripe, Klarna, PayPal, Apple Pay), inventory ERP sync, automated tax configurations, and email marketing webhooks.',
  },
  {
    step: '04',
    title: 'Load Testing & QA Audit',
    desc: 'End-to-end checkout stress testing, payment sandbox validation, mobile performance audits, and security vulnerability scans before launch.',
  },
  {
    step: '05',
    title: 'Launch & Growth Optimization',
    desc: 'A planned DNS cutover, SEO redirect mapping, analytics setup and ongoing conversion rate optimisation (CRO) support.',
  },
];

const FAQS: FAQItem[] = [
  {
    question: 'How much does e-commerce website development cost in the UK?',
    answer:
      'Costs depend on platform selection, design requirements, and custom feature sets. A professionally engineered boutique Shopify or WooCommerce store typically ranges between £2,500 to £6,000, while complex enterprise stores with custom ERP integrations and bespoke apps range from £7,500 to £15,000+. We always provide fixed milestone pricing upfront.',
  },
  {
    question: 'Which platform is best for my online store?',
    answer:
      'Shopify, WooCommerce, Magento and headless commerce each have different capabilities, costs and maintenance needs. We compare the options against your products, integrations, content needs and budget before recommending a direction.',
  },
  {
    question: 'Can you migrate our existing store without losing SEO rankings or customer data?',
    answer:
      'We can plan the migration of agreed product, customer and order data, subject to the platforms and access available. URL mapping and redirects help preserve continuity, but search visibility can still fluctuate after a move.',
  },
  {
    question: 'Do you configure multi-currency and international shipping?',
    answer:
      'Yes. We configure localized checkout experiences with automated currency conversion, geo-targeted pricing, international tax/VAT compliance, and automated carrier shipping rate calculations.',
  },
];

export function EcommerceDevView() {
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ec-visible');
          } else {
            entry.target.classList.remove('ec-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    const els = root.querySelectorAll('[data-ec-anim]');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="ecom-dev-root" suppressHydrationWarning>
      <style>{`
        .ecom-dev-root {
          position: relative;
          background: #FFFFFF;
          color: #111966;
          font-family: var(--font-body), "Cardo", Georgia, serif;
          overflow-x: clip;
        }
        .ec-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 40px);
        }

        /* Hero */
        .ec-hero {
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 60%, #F5F5F5 100%);
          padding: clamp(60px, 8vw, 110px) 0 clamp(50px, 6vw, 90px);
          border-bottom: 1px solid #e3e5ef;
          overflow: hidden;
        }
        .ec-hero-glow {
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
        .ec-hero-inner {
          position: relative;
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
        }
        .ec-eyebrow {
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
        .ec-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 700;
          color: #111966;
          line-height: 1.15;
          margin: 0 0 20px;
        }
        .ec-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(17px, 1.25vw, 19.5px);
          line-height: 1.75;
          color: #202938;
          margin: 0 0 34px;
        }
        .ec-stat-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .ec-stat-pill {
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
        .ec-btn-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ec-btn-primary {
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
        .ec-btn-primary:hover {
          background: #0c1250;
          transform: none;
          box-shadow: 0 8px 24px rgba(17, 25, 102, 0.28);
        }
        .ec-btn-secondary {
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
        .ec-btn-secondary:hover {
          border-color: #EAB308;
          background: #FFFDF5;
          transform: none;
        }
        .ec-hero-graphic-wrap {
          display: flex;
          justify-content: center;
          margin-top: clamp(32px, 4vw, 48px);
        }
        .ec-hero-graphic {
          max-width: 290px;
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 12px 30px rgba(17, 25, 102, 0.12));
          transition: transform 0.4s ease;
        }
        .ec-hero-graphic:hover {
          transform: scale(1.03);
        }

        /* Platform Grid */
        .ec-section {
          padding: clamp(70px, 8vw, 110px) 0;
        }
        .ec-sec-head {
          text-align: center;
          max-width: 800px;
          margin: 0 auto clamp(40px, 5vw, 60px);
        }
        .ec-sec-badge {
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
        .ec-sec-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(30px, 3.8vw, 44px);
          font-weight: 700;
          color: #111966;
          line-height: 1.2;
          margin: 0 0 16px;
        }
        .ec-sec-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 17px;
          line-height: 1.7;
          color: #202938;
          margin: 0;
        }
        .ec-platform-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        .ec-platform-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 38px 34px 32px;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          box-shadow: 0 4px 18px -4px rgba(17, 25, 102, 0.05);
          transition: all 0.35s ease;
        }
        .ec-platform-card:hover {
          transform: none !important;
          background: var(--brand-hover-yellow) !important;
          border-color: #EAB308 !important;
          box-shadow: 0 14px 34px rgba(234, 179, 8, 0.22), 0 4px 12px rgba(17, 25, 102, 0.06) !important;
        }
        .ec-platform-name {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: 24px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 6px;
        }
        .ec-platform-tagline {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14.5px;
          font-weight: 700;
          color: #b8863a;
          margin: 0 0 14px;
        }
        .ec-platform-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15.5px;
          line-height: 1.7;
          color: #202938;
          margin: 0 0 20px;
          flex: 1;
        }
        .ec-platform-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
          display: flex;
          flex-direction: column;
          gap: 9px;
          border-top: 1px solid #EEF2F6;
          padding-top: 18px;
        }
        .ec-bullet {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14px;
          font-weight: 700;
          color: #111966;
        }
        .ec-bullet svg {
          color: #EAB308;
          flex-shrink: 0;
        }
        .ec-card-foot {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-top: 16px;
          border-top: 1px solid #EEF2F6;
        }
        .ec-card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14px;
          font-weight: 700;
          color: #111966;
          transition: gap 0.25s ease, color 0.25s ease;
        }
        .ec-platform-card:hover .ec-card-link {
          color: #D97706;
          gap: 9px;
        }

        /* 5-Step Path */
        .ec-path-sec {
          background: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%);
          padding: clamp(70px, 8vw, 110px) 0;
          border-top: 1px solid #e3e5ef;
          border-bottom: 1px solid #e3e5ef;
        }
        .ec-path-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .ec-path-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 12px rgba(17, 25, 102, 0.03);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .ec-path-card:hover {
          transform: none !important;
          background: var(--brand-hover-yellow) !important;
          border-color: #EAB308 !important;
          box-shadow: 0 12px 28px rgba(234, 179, 8, 0.18) !important;
        }
        .ec-path-step {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 30px;
          font-weight: 700;
          color: #EAB308;
          margin-bottom: 12px;
          line-height: 1;
        }
        .ec-path-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: 17px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 10px;
          line-height: 1.3;
        }
        .ec-path-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14px;
          line-height: 1.65;
          color: #202938;
          margin: 0;
        }

        @media (max-width: 1080px) {
          .ec-path-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 800px) {
          .ec-platform-grid {
            grid-template-columns: 1fr;
          }
          .ec-path-grid {
            grid-template-columns: 1fr;
          }
        }

        /* -- SCROLL ANIMATIONS -- */
        @keyframes ecFadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        [data-ec-anim] {
          opacity: 0;
          will-change: transform, opacity;
        }

        .ec-platform-card[data-ec-anim].ec-visible {
          animation: ecFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .ec-platform-card[data-ec-anim]:nth-child(1).ec-visible { animation-delay: 0.05s; }
        .ec-platform-card[data-ec-anim]:nth-child(2).ec-visible { animation-delay: 0.18s; }
        .ec-platform-card[data-ec-anim]:nth-child(3).ec-visible { animation-delay: 0.31s; }
        .ec-platform-card[data-ec-anim]:nth-child(4).ec-visible { animation-delay: 0.44s; }

        .ec-path-card[data-ec-anim].ec-visible {
          animation: ecFadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .ec-path-card[data-ec-anim]:nth-child(1).ec-visible { animation-delay: 0.05s; }
        .ec-path-card[data-ec-anim]:nth-child(2).ec-visible { animation-delay: 0.15s; }
        .ec-path-card[data-ec-anim]:nth-child(3).ec-visible { animation-delay: 0.25s; }
        .ec-path-card[data-ec-anim]:nth-child(4).ec-visible { animation-delay: 0.35s; }
        .ec-path-card[data-ec-anim]:nth-child(5).ec-visible { animation-delay: 0.45s; }
      `}</style>

      {/* Hero */}
      <section className="ec-hero">
        <div className="ec-hero-glow" aria-hidden="true" />
        <div className="ec-container">
          <div className="ec-hero-inner">
            <div className="ec-eyebrow">
              <ShoppingCart size={14} style={{ color: '#EAB308' }} />
              <span>HIGH-PERFORMANCE COMMERCE ENGINEERING</span>
            </div>

            <h1 className="ec-title">
              E-Commerce Store Development Services Agency UK
            </h1>

            <p className="ec-desc">
              We design and build bespoke, high-converting digital storefronts tailored for retail,
              D2C, and trade wholesale brands. Engineered for lightning-fast speeds, frictionless checkouts,
              and scalable revenue growth.
            </p>

            <div className="ec-stat-strip">
              <span className="ec-stat-pill">
                <TrendingUp size={13} style={{ color: '#EAB308' }} />
                <span>Conversion-First UX Design</span>
              </span>
              <span className="ec-stat-pill">
                <CreditCard size={13} style={{ color: '#EAB308' }} />
                <span>Frictionless 1-Click Checkouts</span>
              </span>
              <span className="ec-stat-pill">
                <Globe size={13} style={{ color: '#EAB308' }} />
                <span>Multi-Currency &amp; Global Shipping</span>
              </span>
            </div>

            <div className="ec-btn-group">
              <Link href="/contact" className="ec-btn-primary">
                <span>Book Store Consultation</span>
                <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
              <a href="#platforms-section" className="ec-btn-secondary">
                <span>Compare Platforms</span>
              </a>
            </div>

            <div className="ec-hero-graphic-wrap">
              <Image
                src="/images/graphics/web-development.png"
                alt="E-Commerce Development Engineering Illustration"
                width={330}
                height={380}
                className="ec-hero-graphic"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms-section" className="ec-section">
        <div className="ec-container">
          <div className="ec-sec-head">
            <div className="ec-sec-badge">
              <Package size={13} style={{ color: '#EAB308' }} />
              <span>PLATFORM SOLUTIONS</span>
            </div>
            <h2 className="ec-sec-title">Enterprise Commerce Solutions</h2>
            <p className="ec-sec-desc">
              From fast, agile Shopify setups to complex multi-currency WooCommerce and headless architectures,
              we deploy the exact technical stack aligned with your commercial scale.
            </p>
          </div>

          <div className="ec-platform-grid">
            {PLATFORMS.map((item, idx) => (
              <Link key={idx} href={item.href} className="ec-platform-card" data-ec-anim>
                <h3 className="ec-platform-name">{item.name}</h3>
                <p className="ec-platform-tagline">{item.tagline}</p>
                <p className="ec-platform-desc">{item.desc}</p>
                <ul className="ec-platform-bullets">
                  {item.features.map((f, i) => (
                    <li key={i} className="ec-bullet">
                      <CheckCircle2 size={14} strokeWidth={2.4} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="ec-card-foot">
                  <span className="ec-card-link">
                    <span>Learn More</span>
                    <ArrowRight size={14} strokeWidth={2.2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Commerce Methodology */}
      <section className="ec-path-sec">
        <div className="ec-container">
          <div className="ec-sec-head">
            <div className="ec-sec-badge">
              <BarChart3 size={13} style={{ color: '#EAB308' }} />
              <span>OUR PROVEN PROCESS</span>
            </div>
            <h2 className="ec-sec-title">Our E-Commerce Development Path</h2>
            <p className="ec-sec-desc">
              A structured, transparent delivery methodology ensuring maximum conversion readiness,
              flawless third-party integrations, and zero revenue loss during migration.
            </p>
          </div>

          <div className="ec-path-grid">
            {ECOM_PATH.map((step) => (
              <div key={step.step} className="ec-path-card" data-ec-anim>
                <div className="ec-path-step">{step.step}</div>
                <h3 className="ec-path-title">{step.title}</h3>
                <p className="ec-path-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive FAQs */}
          <FAQAccordion items={FAQS} />

          {/* Bottom Conversion CTA */}
          <ServiceCTA
            badge="E-COMMERCE GROWTH"
            title="Ready to Elevate Your Online Storefront?"
            description="Schedule a technical consultation with our senior UK ecommerce developers. We'll audit your checkout friction, recommend the ideal platform, and present a clear proposal."
            primaryBtnText="Launch Your Store"
            primaryBtnHref="/contact"
          />
        </div>
      </section>
    </div>
  );
}
