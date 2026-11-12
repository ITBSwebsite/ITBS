'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';
import { FAQAccordion, FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const SHOPIFY_SERVICES = [
  {
    title: 'Bespoke Shopify 2.0 Theme Development',
    desc: 'Built around your brand with modular sections and product blocks, with performance shaped by the theme, apps, assets and hosting setup.',
  },
  {
    title: 'Shopify Plus & Enterprise B2B',
    desc: 'Advanced enterprise capabilities: Checkout Extensibility, automated wholesale customer tiers, customized B2B price lists, and multi-location inventory.',
  },
  {
    title: 'Private Shopify App & API Engineering',
    desc: 'Custom middleware and bespoke Shopify apps connecting your store with custom ERPs, warehouse management systems (WMS), and proprietary calculators.',
  },
  {
    title: 'Shopify Speed & Conversion Optimization',
    desc: 'Eliminating unused third-party JavaScript, optimizing critical rendering paths, and implementing friction-free slide-out carts with smart upsells.',
  },
  {
    title: 'Seamless Migration to Shopify',
    desc: 'A planned move from platforms such as Magento, WooCommerce or BigCommerce, with agreed data transfer and redirect mapping to reduce disruption.',
  },
  {
    title: 'Ongoing Retainers & Growth Support',
    desc: 'Continuous conversion rate optimization (CRO), A/B testing, seasonal promotional setups, security audits, and dedicated senior developer availability.',
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
    const animatedElements = root.querySelectorAll('[data-sp-anim]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      animatedElements.forEach((el) => el.classList.add('sp-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sp-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    animatedElements.forEach((el) => observer.observe(el));
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
          isolation: isolate;
          overflow: hidden;
          padding: clamp(68px, 7vw, 100px) 0 clamp(60px, 6.5vw, 88px);
          background:
            radial-gradient(ellipse at 82% 16%, rgba(255,249,174,.45), transparent 34%),
            linear-gradient(135deg, #F8F8FF 0%, #FFFFFF 56%, #F7F7F5 100%);
          border-bottom: 1px solid #e3e5ef;
        }
        .sp-hero::before {
          position: absolute;
          z-index: -1;
          top: -310px;
          right: -145px;
          width: 650px;
          height: 650px;
          border: 1px solid rgba(17,25,102,.07);
          border-radius: 50%;
          box-shadow: 0 0 0 42px rgba(17,25,102,.018), 0 0 0 86px rgba(17,25,102,.014);
          content: "";
        }
        .sp-hero-glow { display: none; }
        .sp-hero-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(360px, .98fr);
          align-items: center;
          gap: clamp(36px, 5.5vw, 78px);
        }
        .sp-hero-inner {
          position: relative;
          max-width: 700px;
          margin: 0;
          text-align: left;
        }
        .sp-title {
          max-width: 13ch;
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(42px, 4.7vw, 66px);
          font-weight: 700;
          color: #111966;
          line-height: 1.06;
          letter-spacing: -.025em;
          margin: 0 0 22px;
        }
        .sp-desc {
          max-width: 650px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(18px, 1.35vw, 20px);
          line-height: 1.72;
          color: #202938;
          margin: 0 0 32px;
        }
        .sp-btn-group {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 16px;
          flex-wrap: wrap;
        }
        .sp-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 30px;
          background: #111966;
          color: #FFFFFF;
          border: 1px solid #111966;
          border-radius: 9px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 17px;
          font-weight: 700;
          text-decoration: none;
          transition: background .25s ease, box-shadow .25s ease, transform .25s ease;
          box-shadow: 0 10px 26px rgba(17,25,102,.16);
        }
        .sp-btn-primary:hover {
          background: #0c1250;
          border-color: #0c1250;
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(17,25,102,.22);
        }
        .sp-hero-visual {
          position: relative;
          min-width: 0;
          padding: clamp(16px, 2vw, 24px);
          border: 1px solid rgba(17,25,102,.12);
          border-radius: 28px;
          background: rgba(255,255,255,.9);
          box-shadow: 0 28px 70px rgba(21,31,94,.12), 0 4px 14px rgba(21,31,94,.05);
          transform: rotate(.6deg);
          transition: transform .35s ease, box-shadow .35s ease;
        }
        .sp-hero-visual:hover {
          transform: rotate(0) translateY(-5px);
          box-shadow: 0 34px 78px rgba(21,31,94,.16), 0 6px 18px rgba(21,31,94,.06);
        }
        .sp-store-frame {
          overflow: hidden;
          border: 1px solid #e7e9f1;
          border-radius: 18px;
          background: #fff;
        }
        .sp-window-top {
          display: flex;
          align-items: center;
          gap: 7px;
          height: 42px;
          padding: 0 15px;
          border-bottom: 1px solid #eaecf2;
          color: #6b7280;
          font: 600 12px/1 var(--font-body), "Cardo", Georgia, serif;
        }
        .sp-window-dot { width: 8px; height: 8px; border-radius: 50%; background: #d4d7e4; }
        .sp-window-dot:first-child { background: #edb44b; }
        .sp-window-dot:nth-child(2) { background: #d8dce8; }
        .sp-window-dot:nth-child(3) { background: #cbd1e0; }
        .sp-window-top-label { margin-left: 8px; color: #596174; letter-spacing: .04em; }
        .sp-store-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          min-height: 54px;
          padding: 0 20px;
          border-bottom: 1px solid #eef0f5;
          color: #4b5366;
          font: 600 11px/1.3 var(--font-body), "Cardo", Georgia, serif;
        }
        .sp-store-brand { color: #111966; font: 700 16px/1 "The Seasons", Georgia, serif; letter-spacing: .12em; }
        .sp-store-links { display: flex; gap: clamp(8px, 1.2vw, 17px); }
        .sp-store-bag { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
        .sp-store-content {
          display: grid;
          grid-template-columns: 1fr .78fr;
          gap: 20px;
          align-items: center;
          min-height: 255px;
          padding: clamp(22px, 3vw, 38px);
          background: linear-gradient(132deg, #fbf9f1 0%, #fff 58%, #f5f5fa 100%);
        }
        .sp-store-copy { min-width: 0; }
        .sp-store-kicker {
          display: block;
          margin-bottom: 13px;
          color: #957100;
          font: 700 10px/1.3 var(--font-body), "Cardo", Georgia, serif;
          letter-spacing: .16em;
        }
        .sp-store-heading {
          display: block;
          color: #111966;
          font: 700 clamp(25px, 2.4vw, 34px)/1.05 "The Seasons", Georgia, serif;
          letter-spacing: -.025em;
        }
        .sp-store-copy p {
          max-width: 230px;
          margin: 12px 0 17px;
          color: #596579;
          font: 15px/1.55 var(--font-body), "Cardo", Georgia, serif;
        }
        .sp-store-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(17,25,102,.38);
          color: #111966;
          font: 700 13px/1.3 var(--font-body), "Cardo", Georgia, serif;
        }
        .sp-product-card {
          position: relative;
          padding: 10px;
          border: 1px solid rgba(17,25,102,.1);
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 12px 28px rgba(17,25,102,.08);
        }
        .sp-product-art {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 154px;
          overflow: hidden;
          border-radius: 9px;
          background: linear-gradient(145deg, #f6f0df, #e8e8f1);
        }
        .sp-product-sun {
          position: absolute;
          top: 14px;
          right: 18px;
          width: 78px;
          height: 78px;
          border-radius: 50%;
          background: rgba(255,249,174,.82);
        }
        .sp-product-vase {
          position: relative;
          z-index: 1;
          width: 58px;
          height: 92px;
          border-radius: 45% 45% 28% 28% / 24% 24% 16% 16%;
          background: linear-gradient(90deg, #c4a775, #e2cfaa 48%, #b2915b);
          box-shadow: 15px 14px 0 -8px rgba(17,25,102,.1);
        }
        .sp-product-vase::before {
          position: absolute;
          top: -17px;
          left: 20px;
          width: 18px;
          height: 23px;
          border-radius: 5px 5px 2px 2px;
          background: #c4a775;
          content: "";
        }
        .sp-product-vase::after {
          position: absolute;
          top: -48px;
          left: 28px;
          width: 2px;
          height: 40px;
          background: #66816c;
          box-shadow: -14px 12px 0 -0.5px #66816c, 15px 9px 0 -0.5px #66816c;
          transform: rotate(8deg);
          content: "";
        }
        .sp-product-meta { display: flex; justify-content: space-between; gap: 8px; padding: 11px 2px 2px; color: #697386; font: 11px/1.4 var(--font-body), "Cardo", Georgia, serif; }
        .sp-product-meta strong { color: #111966; font-weight: 700; white-space: nowrap; }
        .sp-store-foot {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 20px;
          border-top: 1px solid #eef0f5;
          color: #626c7c;
          font: 11px/1.3 var(--font-body), "Cardo", Georgia, serif;
        }
        .sp-store-foot span { display: inline-flex; align-items: center; gap: 6px; }
        .sp-store-foot svg { color: #a68100; }

        @media (max-width: 1024px) {
          .sp-hero-layout { grid-template-columns: minmax(0, 1fr) minmax(320px, .9fr); gap: 30px; }
          .sp-store-content { gap: 12px; padding: 22px; }
        }
        @media (max-width: 900px) {
          .sp-hero-layout { grid-template-columns: 1fr; gap: 38px; }
          .sp-hero-inner { max-width: 760px; }
          .sp-hero-visual { width: min(100%, 650px); margin: 0 auto; transform: none; }
          .sp-hero-visual:hover { transform: translateY(-4px); }
        }
        @media (max-width: 560px) {
          .sp-hero { padding: 54px 0 52px; }
          .sp-title { font-size: clamp(38px, 10vw, 50px); }
          .sp-desc { font-size: 18px; }
          .sp-btn-primary { width: 100%; justify-content: center; }
          .sp-hero-visual { padding: 11px; border-radius: 22px; }
          .sp-store-nav { min-height: 48px; padding: 0 12px; }
          .sp-store-links { gap: 7px; font-size: 10px; }
          .sp-store-content { grid-template-columns: 1fr .72fr; min-height: 220px; padding: 17px 14px; }
          .sp-store-heading { font-size: clamp(23px, 7vw, 30px); }
          .sp-store-copy p { font-size: 13px; }
          .sp-product-art { min-height: 132px; }
          .sp-product-vase { transform: scale(.82); }
          .sp-store-foot { padding: 10px 12px; font-size: 10px; }
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
          transform: translateY(-4px) !important;
          background: #FFF9AE !important;
          border-color: rgba(234, 179, 8, .5) !important;
          box-shadow: 0 14px 34px rgba(234, 179, 8, .14), 0 4px 12px rgba(17, 25, 102, .06) !important;
        }
        .shopify-dev-root .svc-faq-card:hover {
          background: #FFF9AE !important;
          border-color: rgba(234, 179, 8, .5);
          box-shadow: 0 10px 26px rgba(17, 25, 102, .08);
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

        @keyframes spFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .sp-hero-inner[data-sp-anim].sp-visible {
          animation: spFadeIn 0.75s ease-out forwards;
        }
        .sp-hero-visual[data-sp-anim].sp-visible {
          animation: spFadeIn 0.85s ease-out 0.12s both;
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
        @media (prefers-reduced-motion: reduce) {
          [data-sp-anim] { opacity: 1 !important; animation: none !important; transform: none !important; }
          .sp-card, .sp-hero-visual, .sp-btn-primary { transition: none !important; }
        }
      `}</style>

      {/* Hero */}
      <section className="sp-hero">
        <div className="sp-hero-glow" aria-hidden="true" />
        <div className="sp-container sp-hero-layout">
          <div className="sp-hero-inner" data-sp-anim>
            <h1 className="sp-title">Shopify Store Development Services UK</h1>
            <p className="sp-desc">
              We design, build, and optimize high-converting Shopify 2.0 and Shopify Plus storefronts.
              Bespoke Liquid theme engineering, custom app development, and checkout optimizations
              built to scale your eCommerce brand.
            </p>
            <div className="sp-btn-group">
              <Link href="/contact" className="sp-btn-primary">
                <span>Book Shopify Consultation</span>
                <ArrowRight size={17} strokeWidth={2.2} />
              </Link>
            </div>
          </div>

          <div className="sp-hero-visual" data-sp-anim role="img" aria-label="Illustration of a polished Shopify storefront and featured product">
            <div className="sp-store-frame">
              <div className="sp-window-top" aria-hidden="true">
                <span className="sp-window-dot" />
                <span className="sp-window-dot" />
                <span className="sp-window-dot" />
                <span className="sp-window-top-label">shopify storefront preview</span>
              </div>
              <div className="sp-store-nav">
                <strong className="sp-store-brand">ATELIER</strong>
                <div className="sp-store-links" aria-hidden="true"><span>Shop</span><span>New in</span><span>Journal</span></div>
                <span className="sp-store-bag"><ShoppingBag size={14} /> Bag (0)</span>
              </div>
              <div className="sp-store-content">
                <div className="sp-store-copy">
                  <span className="sp-store-kicker">DESIGNED TO FEEL AT HOME</span>
                  <strong className="sp-store-heading">Considered<br />essentials.</strong>
                  <p>Thoughtful pieces, made for everyday living.</p>
                  <span className="sp-store-link">Discover the collection <ArrowRight size={14} /></span>
                </div>
                <div className="sp-product-card">
                  <div className="sp-product-art" aria-hidden="true">
                    <span className="sp-product-sun" />
                    <span className="sp-product-vase" />
                  </div>
                  <div className="sp-product-meta"><span>Signature vase</span><strong>£48</strong></div>
                </div>
              </div>
              <div className="sp-store-foot">
                <span><ShieldCheck size={13} /> Secure checkout</span>
                <span><Sparkles size={13} /> Made for your brand</span>
              </div>
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
