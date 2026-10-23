'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Code2,
  ShoppingCart,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Monitor,
  Server,
  Database,
  Smartphone,
} from 'lucide-react';
import { FAQAccordion, FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const PILLARS = [
  {
    id: 'custom-web',
    title: 'Custom Web Development',
    subtitle: 'Bespoke Full-Stack Web Applications',
    desc: 'Custom-engineered websites and applications built with modern frameworks. We deliver scalable frontend and backend solutions tailored to complex business logic.',
    tags: ['Next.js', 'React', 'Node.js', 'Laravel'],
    href: '/services/custom-web-development',
    icon: Code2,
    accent: '#111966',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    subtitle: 'High-Converting Online Storefronts',
    desc: 'Scalable commerce platforms engineered for maximum conversion, rapid page loads, and seamless checkout funnels across retail, wholesale, and D2C brands.',
    tags: ['Shopify Plus', 'WooCommerce', 'Magento', 'Headless'],
    href: '/services/ecommerce-development',
    icon: ShoppingCart,
    accent: '#EAB308',
  },
  {
    id: 'wordpress',
    title: 'WordPress Development',
    subtitle: 'Zero-Bloat Enterprise WP Architecture',
    desc: 'Custom Gutenberg blocks, bespoke theme engineering, and tailored plugin integrations. Fast, secure, and completely SEO-friendly WordPress solutions.',
    tags: ['Custom Themes', 'API Integration', 'Speed Tuning', 'Security'],
    href: '/services/wordpress-development',
    icon: Layers,
    accent: '#111966',
  },
  {
    id: 'shopify',
    title: 'Shopify Development',
    subtitle: 'Official Shopify 2.0 & Plus Engineering',
    desc: 'Visually captivating, fast-loading, conversion-focused Shopify stores. Custom Liquid development, private app integrations, and checkout extensibility.',
    tags: ['Shopify 2.0', 'Theme Design', 'Private Apps', 'Migrations'],
    href: '/services/shopify-development',
    icon: Sparkles,
    accent: '#EAB308',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Technical Architecture',
    desc: 'We audit your objectives, audience behaviour, and existing technical debt to plan clean data architecture and UX wireframes.',
  },
  {
    step: '02',
    title: 'Bespoke UI/UX & Interactive Design',
    desc: 'Our design team crafts high-fidelity Figma prototypes prioritizing intuitive user journeys, accessibility, and brand prestige.',
  },
  {
    step: '03',
    title: 'Full-Stack Agile Development',
    desc: 'We write clean, modular, and maintainable code adhering to strict security protocols, responsive standards, and reusable components.',
  },
  {
    step: '04',
    title: 'Rigorous QA, Speed & SEO Tuning',
    desc: 'Cross-browser testing, device compatibility, Core Web Vitals optimization, and 301 SEO migration checks ensure flawless launch readiness.',
  },
  {
    step: '05',
    title: 'Deployment & Continuous Growth Support',
    desc: 'A planned deployment with monitoring, security updates and performance improvements as your business needs change.',
  },
];

const TECH_STACK = [
  { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
  { category: 'Backend & APIs', items: ['Node.js', 'PHP / Laravel', 'Python / Django', 'REST & GraphQL'] },
  { category: 'Platforms & CMS', items: ['Shopify Plus', 'WordPress', 'WooCommerce', 'Headless CMS'] },
  { category: 'Cloud & Infrastructure', items: ['AWS', 'Vercel', 'Cloudflare CDN', 'PostgreSQL / MySQL'] },
];

const FAQS: FAQItem[] = [
  {
    question: 'Which company is best for web development in the UK?',
    answer:
      'ITBS (InfoTech Business Solutions) is trusted across the UK for delivering bespoke, high-performance web engineering. Unlike agencies that rely on bloated pre-made templates, we engineer clean, tailored architectures with built-in SEO, enterprise security, and full IP ownership.',
  },
  {
    question: 'How long does a bespoke web development project take?',
    answer:
      'Timelines depend on scope and complexity. A focused bespoke website typically takes 4–6 weeks, whereas complex e-commerce stores or custom enterprise web applications span 8–12 weeks. We provide clear milestone schedules and sprint updates throughout.',
  },
  {
    question: 'What is the difference between website development and website design?',
    answer:
      'Website design focuses on visual aesthetics, user interface (UI), brand identity, and user experience (UX) wireframing. Website development is the technical engineering—building the responsive frontend code, backend databases, API integrations, and server infrastructure that makes the design functional and fast.',
  },
  {
    question: 'Will our new website be optimized for SEO and Google rankings?',
    answer:
      'We plan for technical SEO foundations such as semantic HTML, relevant structured data, responsive layouts and redirects where needed. Load times and search visibility depend on the implementation, content, hosting and ongoing maintenance.',
  },
  {
    question: 'Do you offer ongoing support and maintenance after launch?',
    answer:
      'Yes. We offer proactive maintenance, security patches, regular backups, server monitoring, and continuous feature enhancements to keep your platform competitive and running smoothly.',
  },
];

export function WebDevelopmentMainView() {
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('wdm-visible');
          } else {
            entry.target.classList.remove('wdm-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    const els = root.querySelectorAll('[data-wdm-anim]');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="svc-page-root" suppressHydrationWarning>
      <style>{`
        .svc-page-root {
          position: relative;
          background: #FFFFFF;
          color: #111966;
          font-family: var(--font-body), "Cardo", Georgia, serif;
          overflow-x: clip;
        }
        .svc-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 40px);
        }

        /* ── Hero Section ── */
        .svc-hero {
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 60%, #F5F5F5 100%);
          padding: clamp(60px, 8vw, 110px) 0 clamp(50px, 6vw, 90px);
          border-bottom: 1px solid #e3e5ef;
          overflow: hidden;
        }
        .svc-hero-ambient {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(246, 239, 228, 0.75) 0%, transparent 70%);
          pointer-events: none;
        }
        .svc-hero-content {
          position: relative;
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
        }
        .svc-eyebrow {
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
        .svc-hero-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 700;
          color: #111966;
          line-height: 1.15;
          letter-spacing: -0.01em;
          margin: 0 0 20px;
        }
        .svc-hero-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(17px, 1.25vw, 19.5px);
          line-height: 1.75;
          color: #202938;
          margin: 0 0 32px;
        }
        .svc-hero-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .svc-stat-chip {
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
          box-shadow: 0 2px 8px rgba(17, 25, 102, 0.03);
        }
        .svc-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .svc-btn-gold {
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
          letter-spacing: 0.02em;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(17, 25, 102, 0.2);
        }
        .svc-btn-gold:hover {
          background: #0c1250;
          transform: none;
          box-shadow: 0 8px 24px rgba(17, 25, 102, 0.28);
        }
        .svc-btn-outline {
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
        .svc-btn-outline:hover {
          border-color: #EAB308;
          background: #FFFDF5;
        }
        .wdm-hero-graphic-wrap {
          display: flex;
          justify-content: center;
          margin-top: clamp(36px, 4.5vw, 52px);
        }
        .wdm-hero-graphic {
          max-width: 320px;
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 12px 32px rgba(17, 25, 102, 0.12));
          transition: transform 0.4s ease;
        }
        .wdm-hero-graphic:hover {
          transform: scale(1.03);
        }

        /* ── Pillars Section ── */
        .svc-pillars-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #FFFFFF;
        }
        .svc-sec-head {
          text-align: center;
          max-width: 800px;
          margin: 0 auto clamp(40px, 5vw, 60px);
        }
        .svc-sec-badge {
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
        .svc-sec-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(30px, 3.8vw, 44px);
          font-weight: 700;
          color: #111966;
          line-height: 1.2;
          margin: 0 0 16px;
        }
        .svc-sec-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 17px;
          line-height: 1.7;
          color: #202938;
          margin: 0;
        }
        .svc-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        .svc-pillar-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 38px 34px 32px;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          box-shadow: 0 4px 18px -4px rgba(17, 25, 102, 0.05);
          transition: all 0.35s cubic-bezier(0.2, 0.6, 0.3, 1);
        }
        .svc-pillar-card:hover {
          transform: none !important;
          background: var(--brand-hover-yellow) !important;
          border-color: #EAB308 !important;
          box-shadow: 0 14px 34px rgba(234, 179, 8, 0.22), 0 4px 12px rgba(17, 25, 102, 0.06) !important;
        }
        .svc-pillar-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111966;
          margin-bottom: 22px;
          transition: all 0.3s ease;
        }
        .svc-pillar-card:hover .svc-pillar-icon-box {
          background: #111966;
          color: #FFFFFF;
          transform: scale(1.05);
        }
        .svc-pillar-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: 24px;
          font-weight: 700;
          color: #111966;
          line-height: 1.25;
          margin: 0 0 6px;
        }
        .svc-pillar-sub {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14.5px;
          font-weight: 700;
          color: #b8863a;
          margin: 0 0 14px;
        }
        .svc-pillar-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15.5px;
          line-height: 1.7;
          color: #202938;
          margin: 0 0 24px;
          flex: 1;
        }
        .svc-pillar-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 18px;
          border-top: 1px solid #EEF2F6;
          gap: 12px;
          flex-wrap: wrap;
        }
        .svc-pillar-tags {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .svc-pillar-tag {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 12px;
          font-weight: 700;
          color: #111966;
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          padding: 3px 9px;
          border-radius: 4px;
        }
        .svc-pillar-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14px;
          font-weight: 700;
          color: #111966;
          transition: gap 0.25s ease, color 0.25s ease;
        }
        .svc-pillar-card:hover .svc-pillar-link {
          color: #D97706;
          gap: 9px;
        }

        /* ── Process Section ── */
        .svc-process-sec {
          background: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%);
          padding: clamp(70px, 8vw, 110px) 0;
          border-top: 1px solid #e3e5ef;
          border-bottom: 1px solid #e3e5ef;
        }
        .svc-process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .svc-process-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 12px rgba(17, 25, 102, 0.03);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .svc-process-card:hover {
          transform: none !important;
          border-color: #EAB308;
          box-shadow: 0 8px 24px -4px rgba(234, 179, 8, 0.16);
        }
        .svc-step-num {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 30px;
          font-weight: 700;
          color: #EAB308;
          margin-bottom: 12px;
          line-height: 1;
        }
        .svc-step-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: 17px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 10px;
          line-height: 1.3;
        }
        .svc-step-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14px;
          line-height: 1.65;
          color: #202938;
          margin: 0;
        }

        /* ── Tech Stack ── */
        .svc-tech-sec {
          padding: clamp(65px, 7vw, 100px) 0;
          background: #FFFFFF;
        }
        .svc-tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .svc-tech-col {
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 26px 24px;
        }
        .svc-tech-cat {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 18px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 16px;
        }
        .svc-tech-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .svc-tech-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14.5px;
          font-weight: 700;
          color: #202938;
        }
        .svc-tech-item svg {
          color: #EAB308;
          flex-shrink: 0;
        }

        /* Responsive */
        @media (max-width: 1080px) {
          .svc-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .svc-tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 800px) {
          .svc-pillars-grid {
            grid-template-columns: 1fr;
          }
          .svc-process-grid {
            grid-template-columns: 1fr;
          }
          .svc-tech-grid {
            grid-template-columns: 1fr;
          }
        }

        /* -- SCROLL ANIMATIONS -- */
        @keyframes wdmFadeInUp {
          from {
            opacity: 0;
            transform: translateY(34px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes wdmSimpleFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        [data-wdm-anim] {
          opacity: 0;
          will-change: transform, opacity;
        }

        .svc-pillar-card[data-wdm-anim].wdm-visible {
          animation: wdmFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .svc-pillar-card[data-wdm-anim]:nth-child(1).wdm-visible { animation-delay: 0.05s; }
        .svc-pillar-card[data-wdm-anim]:nth-child(2).wdm-visible { animation-delay: 0.18s; }
        .svc-pillar-card[data-wdm-anim]:nth-child(3).wdm-visible { animation-delay: 0.31s; }
        .svc-pillar-card[data-wdm-anim]:nth-child(4).wdm-visible { animation-delay: 0.44s; }

        .svc-process-card[data-wdm-anim].wdm-visible {
          animation: wdmFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .svc-process-card[data-wdm-anim]:nth-child(1).wdm-visible { animation-delay: 0.05s; }
        .svc-process-card[data-wdm-anim]:nth-child(2).wdm-visible { animation-delay: 0.16s; }
        .svc-process-card[data-wdm-anim]:nth-child(3).wdm-visible { animation-delay: 0.27s; }
        .svc-process-card[data-wdm-anim]:nth-child(4).wdm-visible { animation-delay: 0.38s; }
        .svc-process-card[data-wdm-anim]:nth-child(5).wdm-visible { animation-delay: 0.49s; }

        .svc-tech-col[data-wdm-anim].wdm-visible {
          animation: wdmFadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .svc-tech-col[data-wdm-anim]:nth-child(1).wdm-visible { animation-delay: 0.05s; }
        .svc-tech-col[data-wdm-anim]:nth-child(2).wdm-visible { animation-delay: 0.15s; }
        .svc-tech-col[data-wdm-anim]:nth-child(3).wdm-visible { animation-delay: 0.25s; }
        .svc-tech-col[data-wdm-anim]:nth-child(4).wdm-visible { animation-delay: 0.35s; }
      `}</style>

      {/* Hero Section */}
      <section className="svc-hero">
        <div className="svc-hero-ambient" aria-hidden="true" />
        <div className="svc-container">
          <div className="svc-hero-content">
            <div className="svc-eyebrow">
              <Cpu size={14} style={{ color: '#EAB308' }} />
              <span>BESPOKE TECHNICAL EXCELLENCE</span>
            </div>

            <h1 className="svc-hero-title">
              UK Web Development &amp; Digital Engineering Agency
            </h1>

            <p className="svc-hero-desc">
              We design and engineer bespoke, high-performance websites and web applications tailored
              for ambitious UK businesses. Fast, secure, scalable, and crafted with clean modern architecture.
            </p>

            <div className="svc-hero-stats">
              <span className="svc-stat-chip">
                <CheckCircle2 size={13} style={{ color: '#EAB308' }} />
                <span>Built to your specification</span>
              </span>
              <span className="svc-stat-chip">
                <Zap size={13} style={{ color: '#EAB308' }} />
                <span>Performance-Conscious Builds</span>
              </span>
              <span className="svc-stat-chip">
                <ShieldCheck size={13} style={{ color: '#EAB308' }} />
                <span>Security &amp; SEO Hardened</span>
              </span>
              <span className="svc-stat-chip">
                <Monitor size={13} style={{ color: '#EAB308' }} />
                <span>UK-Based Senior Engineers</span>
              </span>
            </div>

            <div className="svc-hero-actions">
              <Link href="/contact" className="svc-btn-gold">
                <span>Book Strategy Call</span>
                <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
              <a href="#services-grid" className="svc-btn-outline">
                <span>Explore Services</span>
              </a>
            </div>

            <div className="wdm-hero-graphic-wrap">
              <Image
                src="/images/graphics/web-development.png"
                alt="Web Development and Digital Engineering Illustration"
                width={360}
                height={415}
                className="wdm-hero-graphic"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section id="services-grid" className="svc-pillars-sec">
        <div className="svc-container">
          <div className="svc-sec-head">
            <div className="svc-sec-badge">
              <Layers size={13} style={{ color: '#EAB308' }} />
              <span>OUR SPECIALISATIONS</span>
            </div>
            <h2 className="svc-sec-title">
              Tailored Engineering Solutions for Every Growth Stage
            </h2>
            <p className="svc-sec-desc">
              Whether you need a custom-coded web application, a multi-currency ecommerce flagship,
              or an enterprise-grade content management platform, we engineer systems that drive results.
            </p>
          </div>

          <div className="svc-pillars-grid">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link key={pillar.id} href={pillar.href} className="svc-pillar-card" data-wdm-anim>
                  <div className="svc-pillar-icon-box">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="svc-pillar-title">{pillar.title}</h3>
                  <p className="svc-pillar-sub">{pillar.subtitle}</p>
                  <p className="svc-pillar-desc">{pillar.desc}</p>
                  <div className="svc-pillar-foot">
                    <div className="svc-pillar-tags">
                      {pillar.tags.map((tag) => (
                        <span key={tag} className="svc-pillar-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="svc-pillar-link">
                      <span>Explore Service</span>
                      <ArrowRight size={14} strokeWidth={2.2} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="svc-process-sec">
        <div className="svc-container">
          <div className="svc-sec-head">
            <div className="svc-sec-badge">
              <TrendingUp size={13} style={{ color: '#EAB308' }} />
              <span>HOW WE DELIVER</span>
            </div>
            <h2 className="svc-sec-title">
              Our 5-Stage Web Engineering Methodology
            </h2>
            <p className="svc-sec-desc">
              Transparent, agile, and disciplined delivery from initial architecture scoping through
              to post-launch scaling and continuous optimization.
            </p>
          </div>

          <div className="svc-process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="svc-process-card" data-wdm-anim>
                <div className="svc-step-num">{step.step}</div>
                <h3 className="svc-step-title">{step.title}</h3>
                <p className="svc-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section className="svc-tech-sec">
        <div className="svc-container">
          <div className="svc-sec-head">
            <div className="svc-sec-badge">
              <Cpu size={13} style={{ color: '#EAB308' }} />
              <span>MODERN TECHNOLOGIES</span>
            </div>
            <h2 className="svc-sec-title">
              Enterprise-Grade Tech Stack &amp; Frameworks
            </h2>
            <p className="svc-sec-desc">
              We select the optimal programming languages and server infrastructure based on your
              scalability requirements, security standards, and business roadmap.
            </p>
          </div>

          <div className="svc-tech-grid">
            {TECH_STACK.map((group) => (
              <div key={group.category} className="svc-tech-col" data-wdm-anim>
                <h3 className="svc-tech-cat">{group.category}</h3>
                <ul className="svc-tech-list">
                  {group.items.map((item) => (
                    <li key={item} className="svc-tech-item">
                      <CheckCircle2 size={14} strokeWidth={2.4} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Interactive FAQ Accordion */}
          <FAQAccordion items={FAQS} />

          {/* Service CTA */}
          <ServiceCTA
            badge="LET’S GET STARTED"
            title="Ready to Build Your New High-Converting Website?"
            description="Discuss your project with our senior UK web developers. We provide direct technical consultation, architectural blueprints, and fixed milestone pricing."
            primaryBtnText="Speak With Our Team"
            primaryBtnHref="/contact"
          />
        </div>
      </section>
    </div>
  );
}
