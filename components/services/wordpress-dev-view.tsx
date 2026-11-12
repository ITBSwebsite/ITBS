'use client';

import React from 'react';
import Link from 'next/link';
import {
  Layers,
  ArrowRight,
  Code2,
  Building2,
  Briefcase,
  Store,
  ShoppingBag,
} from 'lucide-react';
import { FAQAccordion, FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const WP_SERVICES = [
  {
    title: 'Custom Gutenberg Theme Development',
    desc: 'Bespoke, lightweight WordPress themes crafted from scratch with native Gutenberg editor blocks. Complete editorial freedom without confusing, bloated visual page builders.',
  },
  {
    title: 'Custom Plugin & API Engineering',
    desc: 'When standard plugins are bloated or insufficient, we write clean, secure custom WordPress plugins and connect your site with external CRM and ERP APIs.',
  },
  {
    title: 'WooCommerce E-Commerce Stores',
    desc: 'High-performing, customized WooCommerce stores with bespoke product options, custom checkout funnels, automated tax rules, and multi-currency gateways.',
  },
  {
    title: 'Safe WordPress Migration Services',
    desc: 'A planned move from legacy hosts, older CMS platforms or staging servers, with agreed data transfer and 301 redirect mapping to reduce disruption.',
  },
  {
    title: 'Speed & Core Web Vitals Optimization',
    desc: 'We transform slow WordPress sites into high-speed performers. Redis object caching, asset minification, critical CSS inlining, and global Cloudflare CDN routing.',
  },
  {
    title: 'Enterprise Security & Maintenance',
    desc: 'Proactive malware scanning, automated daily cloud backups, security headers, two-factor authentication, and managed plugin updates tested in staging.',
  },
];

const SITE_TYPES = [
  {
    title: 'Corporate & B2B Portals',
    desc: 'Authoritative, clean platforms engineered to generate high-value sales enquiries and showcase corporate prestige.',
    icon: Building2,
  },
  {
    title: 'WooCommerce Storefronts',
    desc: 'Scalable e-commerce architectures handling thousands of SKUs with rapid product filtering and instant checkouts.',
    icon: Store,
  },
  {
    title: 'Professional Service Hubs',
    desc: 'Lead-generation engines with interactive calculators, appointment bookings, and seamless CRM integrations.',
    icon: Briefcase,
  },
  {
    title: 'Editorial & Content Media',
    desc: 'Lightning-fast publishing platforms structured for Google News, Discover, and Answer Engine Optimization (AEO).',
    icon: Layers,
  },
];

const FAQS: FAQItem[] = [
  {
    question: 'Why is custom WordPress development better than buying a pre-made theme?',
    answer:
      'Pre-made marketplace themes pack hundreds of unused features, heavy slider scripts, and bloated builder plugins that cause slow loading speeds and frequent security vulnerabilities. Our custom WordPress websites contain only the exact code your business needs, resulting in 95+ PageSpeed scores, clean editor experiences, and superior longevity.',
  },
  {
    question: 'Can you speed up our existing slow WordPress website?',
    answer:
      'Yes. We regularly conduct deep performance audits to remove redundant plugins, optimize database queries, implement Redis object caching, and configure global edge CDN caching without altering your site’s design.',
  },
  {
    question: 'Is WordPress secure for commercial and enterprise business use?',
    answer:
      'When engineered properly, WordPress powers some of the largest enterprises in the world. We implement enterprise-grade security protocols: hardened wp-config rules, disabled XML-RPC, custom login protection, Web Application Firewalls (WAF), and automated malware detection.',
  },
  {
    question: 'How do you handle core and plugin updates safely?',
    answer:
      'We never update production sites blindly. All major WordPress core and plugin updates are first tested in a staged sandbox environment to verify compatibility and prevent unexpected downtime.',
  },
];

export function WordPressDevView() {
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const animatedElements = root.querySelectorAll('[data-wp-anim]');
    if (typeof IntersectionObserver === 'undefined') {
      animatedElements.forEach((el) => el.classList.add('wp-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('wp-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    const els = root.querySelectorAll('[data-wp-anim]');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="wp-dev-root" suppressHydrationWarning>
      <style>{`
        .wp-dev-root {
          position: relative;
          background: #FFFFFF;
          color: #111966;
          font-family: var(--font-body), "Cardo", Georgia, serif;
          overflow-x: clip;
        }
        .wp-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 40px);
        }

        /* Hero */
        .wp-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: clamp(68px, 8vw, 112px) 0 clamp(64px, 7vw, 96px);
          background:
            radial-gradient(ellipse at 80% 18%, rgba(255,249,174,.42), transparent 34%),
            linear-gradient(135deg, #F8F8FF 0%, #FFFFFF 55%, #F7F7F5 100%);
          border-bottom: 1px solid #e3e5ef;
        }
        .wp-hero::before {
          position: absolute;
          z-index: -1;
          top: -260px;
          right: -135px;
          width: 620px;
          height: 620px;
          border: 1px solid rgba(17,25,102,.07);
          border-radius: 50%;
          content: "";
        }
        .wp-hero-glow { display: none; }
        .wp-hero-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(380px, .92fr);
          align-items: center;
          gap: clamp(38px, 6vw, 84px);
        }
        .wp-hero-inner {
          position: relative;
          max-width: 720px;
          margin: 0;
          text-align: left;
        }
        .wp-title {
          max-width: 13ch;
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(42px, 5.2vw, 72px);
          font-weight: 700;
          color: #111966;
          line-height: 1.04;
          letter-spacing: -.025em;
          margin: 0 0 24px;
        }
        .wp-desc {
          max-width: 660px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(18px, 1.35vw, 20px);
          line-height: 1.72;
          color: #202938;
          margin: 0 0 34px;
        }
        .wp-btn-group {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 16px;
          flex-wrap: wrap;
        }
        .wp-btn-primary {
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
        .wp-btn-primary:hover {
          background: #0c1250;
          border-color: #0c1250;
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(17,25,102,.22);
        }
        .wp-hero-visual {
          position: relative;
          min-height: 420px;
          padding: clamp(18px, 2vw, 28px);
          border: 1px solid rgba(17,25,102,.12);
          border-radius: 28px;
          background: rgba(255,255,255,.88);
          box-shadow: 0 28px 70px rgba(21,31,94,.12), 0 4px 14px rgba(21,31,94,.05);
          transform: rotate(1deg);
          transition: transform .35s ease, box-shadow .35s ease;
        }
        .wp-hero-visual:hover {
          transform: rotate(0) translateY(-5px);
          box-shadow: 0 34px 78px rgba(21,31,94,.16), 0 6px 18px rgba(21,31,94,.06);
        }
        .wp-window-top {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 0 18px;
          border-bottom: 1px solid #e9eaf2;
          color: #6b7280;
          font: 600 13px/1.2 var(--font-body), "Cardo", Georgia, serif;
        }
        .wp-window-dot { width: 8px; height: 8px; border-radius: 50%; background: #d4d7e4; }
        .wp-window-top-label { margin-left: 9px; color: #202938; letter-spacing: .04em; }
        .wp-window-content {
          display: grid;
          grid-template-columns: 42px minmax(0,1fr);
          gap: 16px;
          padding-top: 20px;
        }
        .wp-window-sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding-top: 5px;
        }
        .wp-window-sidebar span { display: block; width: 27px; height: 8px; border-radius: 8px; background: #e8eaf2; }
        .wp-window-sidebar span:first-child { background: #181f72; }
        .wp-store-preview { min-width: 0; }
        .wp-store-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          color: #111966;
          font: 700 12px/1.2 var(--font-body), "Cardo", Georgia, serif;
          letter-spacing: .1em;
        }
        .wp-store-toolbar span:last-child { color: #768098; font-weight: 500; letter-spacing: 0; }
        .wp-store-hero {
          display: grid;
          grid-template-columns: 1fr .75fr;
          align-items: center;
          min-height: 188px;
          overflow: hidden;
          padding: 22px;
          border-radius: 18px;
          background: linear-gradient(125deg, #171f70 0%, #232e89 100%);
          color: white;
        }
        .wp-store-copy small {
          display: block;
          margin-bottom: 10px;
          color: #fff9ae;
          font: 700 10px/1.2 var(--font-body), "Cardo", Georgia, serif;
          letter-spacing: .16em;
        }
        .wp-store-copy strong {
          display: block;
          max-width: 14ch;
          font: 700 clamp(20px, 2vw, 27px)/1.15 "The Seasons", Georgia, serif;
        }
        .wp-store-copy > span { display: block; width: 82px; height: 8px; margin-top: 18px; border-radius: 8px; background: #fff9ae; }
        .wp-store-art {
          display: grid;
          place-items: center;
          width: clamp(82px, 9vw, 120px);
          aspect-ratio: 1;
          justify-self: center;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 28px;
          background: rgba(255,255,255,.11);
          color: #fff9ae;
        }
        .wp-store-products { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-top: 14px; }
        .wp-store-product {
          min-width: 0;
          padding: 10px;
          border: 1px solid #e8eaf2;
          border-radius: 13px;
          background: #fff;
        }
        .wp-store-product-art { display: grid; place-items: center; height: 58px; margin-bottom: 8px; border-radius: 9px; background: linear-gradient(140deg,#f8f8ff,#fff9ae); color: #171f70; }
        .wp-store-product-line { width: 70%; height: 6px; margin: 0 auto 5px; border-radius: 6px; background: #dfe3ee; }
        .wp-store-product-line:last-child { width: 42%; background: #e9d86c; }
        /* Services Grid */
        .wp-section {
          padding: clamp(70px, 8vw, 110px) 0;
        }
        .wp-sec-head {
          text-align: center;
          max-width: 800px;
          margin: 0 auto clamp(40px, 5vw, 60px);
        }
        .wp-sec-badge {
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
        .wp-sec-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(30px, 3.8vw, 44px);
          font-weight: 700;
          color: #111966;
          line-height: 1.2;
          margin: 0 0 16px;
        }
        .wp-sec-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 17px;
          line-height: 1.7;
          color: #202938;
          margin: 0;
        }
        .wp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 50px;
        }
        .wp-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 34px 28px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 18px -4px rgba(17, 25, 102, 0.05);
          transition: all 0.35s ease;
        }
        .wp-card:hover {
          transform: translateY(-4px);
          background: #FFF9AE !important;
          border-color: #E8D976 !important;
          box-shadow: 0 16px 34px rgba(17,25,102,.10) !important;
        }
        .wp-card-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: 21px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 12px;
          line-height: 1.3;
        }
        .wp-card-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15px;
          line-height: 1.7;
          color: #202938;
          margin: 0 0 20px;
          flex: 1;
        }
        /* Site Types Section */
        .wp-types-sec {
          background: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%);
          padding: clamp(70px, 8vw, 100px) 0;
          border-top: 1px solid #e3e5ef;
          border-bottom: 1px solid #e3e5ef;
        }
        .wp-types-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .wp-type-box {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px 22px;
          text-align: center;
          transition: background .25s ease, border-color .25s ease, transform .25s ease, box-shadow .25s ease;
        }
        .wp-type-box:hover {
          background: #FFF9AE;
          border-color: #E8D976;
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(17,25,102,.09);
        }
        .wp-type-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #F6EFE4;
          color: #111966;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .wp-type-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 19px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 8px;
        }
        .wp-type-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14px;
          line-height: 1.6;
          color: #202938;
          margin: 0;
        }

        .wp-dev-root .svc-faq-card:hover {
          background: #FFF9AE !important;
          border-color: #E8D976 !important;
          box-shadow: 0 12px 28px rgba(17,25,102,.08) !important;
        }

        @media (max-width: 1024px) {
          .wp-hero-layout { grid-template-columns: minmax(0, 1fr) minmax(340px, .9fr); gap: 34px; }
          .wp-hero-visual { min-height: 390px; }
          .wp-grid { grid-template-columns: repeat(2, 1fr); }
          .wp-types-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 760px) {
          .wp-hero { padding: 58px 0 64px; }
          .wp-hero-layout { grid-template-columns: 1fr; gap: 38px; }
          .wp-hero-inner { max-width: 680px; margin: 0 auto; text-align: center; }
          .wp-title { max-width: 16ch; margin-left: auto; margin-right: auto; font-size: clamp(38px, 8vw, 56px); }
          .wp-desc { margin-left: auto; margin-right: auto; font-size: 18px; }
          .wp-btn-group { justify-content: center; }
          .wp-hero-visual { width: min(100%, 560px); min-height: 0; margin: 0 auto; transform: none; }
        }
        @media (max-width: 640px) {
          .wp-grid, .wp-types-grid { grid-template-columns: 1fr; gap: 18px; }
          .wp-card { padding: 27px 23px; }
          .wp-sec-head { margin-bottom: 30px; }
          .wp-sec-title { font-size: clamp(29px, 8vw, 38px); }
          .wp-store-hero { min-height: 160px; padding: 18px; }
          .wp-store-products { gap: 8px; }
          .wp-store-product { padding: 7px; }
          .wp-store-product-art { height: 46px; }
          .wp-window-content { grid-template-columns: 28px minmax(0,1fr); gap: 10px; }
        }

        /* -- SCROLL ANIMATIONS -- */
        @keyframes wpFadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        [data-wp-anim] {
          opacity: 0;
          will-change: transform, opacity;
        }

        .wp-card[data-wp-anim].wp-visible {
          animation: wpFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .wp-card[data-wp-anim]:nth-child(1).wp-visible { animation-delay: 0.05s; }
        .wp-card[data-wp-anim]:nth-child(2).wp-visible { animation-delay: 0.18s; }
        .wp-card[data-wp-anim]:nth-child(3).wp-visible { animation-delay: 0.31s; }
        .wp-card[data-wp-anim]:nth-child(4).wp-visible { animation-delay: 0.44s; }
        .wp-card[data-wp-anim]:nth-child(5).wp-visible { animation-delay: 0.57s; }
        .wp-card[data-wp-anim]:nth-child(6).wp-visible { animation-delay: 0.7s; }

        .wp-type-box[data-wp-anim].wp-visible {
          animation: wpFadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .wp-type-box[data-wp-anim]:nth-child(1).wp-visible { animation-delay: 0.05s; }
        .wp-type-box[data-wp-anim]:nth-child(2).wp-visible { animation-delay: 0.15s; }
        .wp-type-box[data-wp-anim]:nth-child(3).wp-visible { animation-delay: 0.25s; }
        .wp-type-box[data-wp-anim]:nth-child(4).wp-visible { animation-delay: 0.35s; }
        @media (prefers-reduced-motion: reduce) {
          .wp-dev-root *,
          .wp-dev-root *::before,
          .wp-dev-root *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
          .wp-dev-root [data-wp-anim] { opacity: 1; transform: none; }
        }
      `}</style>

      {/* Hero */}
      <section className="wp-hero">
        <div className="wp-hero-glow" aria-hidden="true" />
        <div className="wp-container wp-hero-layout">
          <div className="wp-hero-inner">
            <h1 className="wp-title">WordPress Website Development Company UK</h1>
            <p className="wp-desc">
              We engineer custom, security-hardened WordPress websites and WooCommerce platforms.
              Clean native Gutenberg blocks, bespoke theme development, fewer heavy page-builder
              dependencies, and performance-conscious builds.
            </p>
            <div className="wp-btn-group">
              <Link href="/contact" className="wp-btn-primary">
                <span>Book WordPress Audit</span>
                <ArrowRight size={18} strokeWidth={2.2} />
              </Link>
            </div>
          </div>

          <div className="wp-hero-visual" aria-hidden="true">
            <div className="wp-window-top">
              <span className="wp-window-dot" /><span className="wp-window-dot" /><span className="wp-window-dot" />
              <span className="wp-window-top-label">WordPress storefront</span>
            </div>
            <div className="wp-window-content">
              <div className="wp-window-sidebar"><span /><span /><span /><span /><span /></div>
              <div className="wp-store-preview">
                <div className="wp-store-toolbar"><span>YOUR STORE</span><span>Designed around your brand</span></div>
                <div className="wp-store-hero">
                  <div className="wp-store-copy">
                    <small>MADE FOR EVERY DAY</small>
                    <strong>A better home for your products.</strong>
                    <span />
                  </div>
                  <div className="wp-store-art"><ShoppingBag size={54} strokeWidth={1.25} /></div>
                </div>
                <div className="wp-store-products">
                  {[0, 1, 2].map((item) => (
                    <div className="wp-store-product" key={item}>
                      <div className="wp-store-product-art"><ShoppingBag size={22} strokeWidth={1.5} /></div>
                      <div className="wp-store-product-line" />
                      <div className="wp-store-product-line" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-section" className="wp-section">
        <div className="wp-container">
          <div className="wp-sec-head">
            <div className="wp-sec-badge">
              <Code2 size={13} style={{ color: '#EAB308' }} />
              <span>ENTERPRISE WORDPRESS CAPABILITIES</span>
            </div>
            <h2 className="wp-sec-title">Tailored WordPress Development Services</h2>
            <p className="wp-sec-desc">
              From corporate portals to complex WooCommerce integrations, our team delivers custom
              WordPress solutions built for speed, security, and long-term autonomy.
            </p>
          </div>

          <div className="wp-grid">
            {WP_SERVICES.map((item, idx) => (
              <div key={idx} className="wp-card" data-wp-anim>
                <h3 className="wp-card-title">{item.title}</h3>
                <p className="wp-card-desc">{item.desc}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="wp-types-sec">
        <div className="wp-container">
          <div className="wp-sec-head">
            <div className="wp-sec-badge">
              <Building2 size={13} style={{ color: '#EAB308' }} />
              <span>SECTOR SOLUTIONS</span>
            </div>
            <h2 className="wp-sec-title">Types of WordPress Platforms We Engineer</h2>
            <p className="wp-sec-desc">
              Every website we build is configured for its specific commercial purpose, ensuring maximum
              usability for your internal team and effortless navigation for your visitors.
            </p>
          </div>

          <div className="wp-types-grid">
            {SITE_TYPES.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div key={idx} className="wp-type-box" data-wp-anim>
                  <div className="wp-type-icon"><Icon size={24} /></div>
                  <h3 className="wp-type-title">{type.title}</h3>
                  <p className="wp-type-desc">{type.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Interactive FAQs */}
          <FAQAccordion items={FAQS} />

          {/* Bottom Conversion CTA */}
          <ServiceCTA
            badge="WORDPRESS ENGINEERING"
            title="Ready to Build a Fast, Secure WordPress Website?"
            description="Speak directly with our senior UK WordPress developers. We'll audit your current site, plan your custom Gutenberg theme architecture, and provide transparent fixed pricing."
            primaryBtnText="Get In Touch"
            primaryBtnHref="/contact"
          />
        </div>
      </section>
    </div>
  );
}
