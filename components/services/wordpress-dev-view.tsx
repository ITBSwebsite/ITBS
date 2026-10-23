'use client';

import React from 'react';
import Link from 'next/link';
import {
  Layers,
  ShieldCheck,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Code2,
  RefreshCw,
  ShoppingBag,
  Cpu,
  Lock,
  Database,
  Building2,
  Briefcase,
  Store,
} from 'lucide-react';
import { FAQAccordion, FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const WP_SERVICES = [
  {
    title: 'Custom Gutenberg Theme Development',
    desc: 'Bespoke, lightweight WordPress themes crafted from scratch with native Gutenberg editor blocks. Complete editorial freedom without confusing, bloated visual page builders.',
    bullets: ['Native Custom Block Architecture', 'Performance-Conscious Builds', 'Brand-Aligned Layouts'],
  },
  {
    title: 'Custom Plugin & API Engineering',
    desc: 'When standard plugins are bloated or insufficient, we write clean, secure custom WordPress plugins and connect your site with external CRM and ERP APIs.',
    bullets: ['Tailored Business Logic Plugins', 'REST & GraphQL API Endpoints', 'Zero License Renewal Dependencies'],
  },
  {
    title: 'WooCommerce E-Commerce Stores',
    desc: 'High-performing, customized WooCommerce stores with bespoke product options, custom checkout funnels, automated tax rules, and multi-currency gateways.',
    bullets: ['Optimized One-Page Checkout', 'Flexible Hosting and Extension Costs', 'Custom Product Configurator Logic'],
  },
  {
    title: 'Safe WordPress Migration Services',
    desc: 'A planned move from legacy hosts, older CMS platforms or staging servers, with agreed data transfer and 301 redirect mapping to reduce disruption.',
    bullets: ['Planned Hosting Cutover', '301 SEO Redirect Mapping', 'Database & Media Transfer Plan'],
  },
  {
    title: 'Speed & Core Web Vitals Optimization',
    desc: 'We transform slow WordPress sites into high-speed performers. Redis object caching, asset minification, critical CSS inlining, and global Cloudflare CDN routing.',
    bullets: ['95+ Google PageSpeed Scores', 'Redis In-Memory Object Caching', 'Optimized Database Queries'],
  },
  {
    title: 'Enterprise Security & Maintenance',
    desc: 'Proactive malware scanning, automated daily cloud backups, security headers, two-factor authentication, and managed plugin updates tested in staging.',
    bullets: ['Web Application Firewall (WAF)', 'Automated Off-Site Backups', 'Zero-Crash Staging Update Testing'],
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('wp-visible');
          } else {
            entry.target.classList.remove('wp-visible');
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
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 60%, #F5F5F5 100%);
          padding: clamp(60px, 8vw, 110px) 0 clamp(50px, 6vw, 90px);
          border-bottom: 1px solid #e3e5ef;
          overflow: hidden;
        }
        .wp-hero-glow {
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
        .wp-hero-inner {
          position: relative;
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
        }
        .wp-eyebrow {
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
        .wp-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 700;
          color: #111966;
          line-height: 1.15;
          margin: 0 0 20px;
        }
        .wp-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(17px, 1.25vw, 19.5px);
          line-height: 1.75;
          color: #202938;
          margin: 0 0 34px;
        }
        .wp-stat-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .wp-stat-pill {
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
        .wp-btn-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .wp-btn-primary {
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
        .wp-btn-primary:hover {
          background: #0c1250;
          transform: none;
          box-shadow: 0 8px 24px rgba(17, 25, 102, 0.28);
        }
        .wp-btn-secondary {
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
        .wp-btn-secondary:hover {
          border-color: #EAB308;
          background: #FFFDF5;
          transform: none;
        }

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
          transform: none !important;
          background: var(--brand-hover-yellow) !important;
          border-color: #EAB308 !important;
          box-shadow: 0 14px 34px rgba(234, 179, 8, 0.22), 0 4px 12px rgba(17, 25, 102, 0.06) !important;
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
        .wp-card-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
          border-top: 1px solid #EEF2F6;
          padding-top: 18px;
        }
        .wp-bullet {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 13.5px;
          font-weight: 700;
          color: #111966;
        }
        .wp-bullet svg {
          color: #EAB308;
          flex-shrink: 0;
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

        @media (max-width: 1024px) {
          .wp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .wp-types-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .wp-grid {
            grid-template-columns: 1fr;
          }
          .wp-types-grid {
            grid-template-columns: 1fr;
          }
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
      `}</style>

      {/* Hero */}
      <section className="wp-hero">
        <div className="wp-hero-glow" aria-hidden="true" />
        <div className="wp-container">
          <div className="wp-hero-inner">
            <div className="wp-eyebrow">
              <Layers size={14} style={{ color: '#EAB308' }} />
              <span>CUSTOM WORDPRESS &amp; WOOCOMMERCE EXPERTS</span>
            </div>

            <h1 className="wp-title">
              WordPress Website Development Company UK
            </h1>

            <p className="wp-desc">
              We engineer custom, security-hardened WordPress websites and WooCommerce platforms.
                Clean native Gutenberg blocks, bespoke theme development, fewer heavy page-builder dependencies,
              and 95+ PageSpeed scores.
            </p>

            <div className="wp-stat-strip">
              <span className="wp-stat-pill">
                <CheckCircle2 size={13} style={{ color: '#EAB308' }} />
                <span>Zero Builder Bloat</span>
              </span>
              <span className="wp-stat-pill">
                <Zap size={13} style={{ color: '#EAB308' }} />
                <span>Performance-Focused Delivery</span>
              </span>
              <span className="wp-stat-pill">
                <ShieldCheck size={13} style={{ color: '#EAB308' }} />
                <span>Enterprise Hardened Security</span>
              </span>
            </div>

            <div className="wp-btn-group">
              <Link href="/contact" className="wp-btn-primary">
                <span>Book WordPress Audit</span>
                <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
              <a href="#services-section" className="wp-btn-secondary">
                <span>View WP Services</span>
              </a>
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
                <ul className="wp-card-bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="wp-bullet">
                      <CheckCircle2 size={14} strokeWidth={2.4} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
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
