'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Code2,
  Server,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Layers,
  Lock,
} from 'lucide-react';
import { FAQAccordion, FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const FRONTEND_FRAMEWORKS = [
  {
    name: 'React.js & Next.js Development',
    desc: 'Client- and server-side rendering with a component-driven architecture designed for maintainable updates and future growth.',
    bullets: ['Server-Side Rendering (SSR) & SSG', 'Reusable Component Architecture', 'Interactive Rich Web Experiences'],
  },
  {
    name: 'Angular Enterprise Development',
    desc: 'Robust two-way data binding, built-in dependency injection, and modular structure tailored for large enterprise platforms and financial applications.',
    bullets: ['Enterprise-Grade Architecture', 'Two-Way Data Binding', 'Strict TypeScript Enforcement'],
  },
  {
    name: 'Vue.js Progressive Engineering',
    desc: 'Lightweight, ultra-flexible frontend architecture ideal for dynamic portals, reactive dashboards, and high-performance customer portals.',
    bullets: ['Ultra-Lightweight Footprint', 'Reactive State Management', 'Rapid Prototyping & Scale'],
  },
];

const BACKEND_FRAMEWORKS = [
  {
    name: 'Node.js & Express / NestJS',
    desc: 'Event-driven, non-blocking I/O model designed for real-time applications, collaborative SaaS tools, streaming engines, and high-concurrency APIs.',
    bullets: ['High-Throughput Concurrency', 'Event-Driven Real-Time Engine', 'Microservices & REST/GraphQL'],
  },
  {
    name: 'PHP & Laravel Development',
    desc: 'Clean MVC architecture, robust ORM, and integrated authentication. The industry gold standard for bespoke business platforms, SaaS MVPs, and portal systems.',
    bullets: ['Elegant MVC Structure', 'Built-In Security & Encryption', 'Extensive Ecosystem & Speed'],
  },
  {
    name: 'Python & Django Engineering',
    desc: 'The "batteries-included" framework designed for data-intensive platforms, AI/ML integrations, predictive analytics, and enterprise data workflows.',
    bullets: ['AI & Machine Learning Ready', 'High Security By Default', 'Rapid Enterprise Turnaround'],
  },
];

const FAQS: FAQItem[] = [
  {
    question: 'Why should I invest in custom web development instead of a template?',
    answer:
      'Templates can be a practical starting point, while custom development gives more control over functionality, structure and customer journeys. Ownership, licensing and ongoing costs depend on the tools and terms agreed for your project.',
  },
  {
    question: 'How long does it take to develop a custom web application?',
    answer:
      'A bespoke business website typically requires 4–6 weeks. Complex web applications, customer portals, or SaaS MVPs with custom APIs take approximately 8–14 weeks depending on database architecture and third-party integrations.',
  },
  {
    question: 'How does custom web development improve SEO performance?',
    answer:
      'A carefully built website can support SEO with semantic HTML, appropriate metadata and structured data where relevant. Core Web Vitals and crawlability still depend on implementation, content, hosting and ongoing maintenance.',
  },
  {
    question: 'Do you provide backend API integration with existing ERP/CRM systems?',
    answer:
      'Yes. Our engineers specialize in building and integrating RESTful and GraphQL APIs with popular enterprise CRMs (HubSpot, Salesforce), payment gateways (Stripe, Adyen), ERPs, and custom internal databases.',
  },
];

export function CustomWebView() {
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cw-visible');
          } else {
            entry.target.classList.remove('cw-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    const els = root.querySelectorAll('[data-cw-anim]');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="custom-web-root" suppressHydrationWarning>
      <style>{`
        .custom-web-root {
          position: relative;
          background: #FFFFFF;
          color: #111966;
          font-family: var(--font-body), "Cardo", Georgia, serif;
          overflow-x: clip;
        }
        .cw-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 40px);
        }

        /* Hero */
        .cw-hero {
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 60%, #F5F5F5 100%);
          padding: clamp(60px, 8vw, 110px) 0 clamp(50px, 6vw, 90px);
          border-bottom: 1px solid #e3e5ef;
          overflow: hidden;
        }
        .cw-hero-glow {
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
        .cw-hero-inner {
          position: relative;
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
        }
        .cw-eyebrow {
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
        .cw-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 700;
          color: #111966;
          line-height: 1.15;
          margin: 0 0 20px;
        }
        .cw-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(17px, 1.25vw, 19.5px);
          line-height: 1.75;
          color: #202938;
          margin: 0 0 34px;
        }
        .cw-stat-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .cw-stat-pill {
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
        .cw-btn-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .cw-btn-primary {
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
        .cw-btn-primary:hover {
          background: #0c1250;
          transform: none;
          box-shadow: 0 8px 24px rgba(17, 25, 102, 0.28);
        }
        .cw-btn-secondary {
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
        .cw-btn-secondary:hover {
          border-color: #EAB308;
          background: #FFFDF5;
          transform: none;
        }
        .cw-hero-graphic-wrap {
          display: flex;
          justify-content: center;
          margin-top: clamp(32px, 4vw, 48px);
        }
        .cw-hero-graphic {
          max-width: 290px;
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 12px 30px rgba(17, 25, 102, 0.12));
          transition: transform 0.4s ease;
        }
        .cw-hero-graphic:hover {
          transform: scale(1.03);
        }

        /* Tech Section */
        .cw-section {
          padding: clamp(70px, 8vw, 110px) 0;
        }
        .cw-sec-head {
          text-align: center;
          max-width: 800px;
          margin: 0 auto clamp(40px, 5vw, 60px);
        }
        .cw-sec-badge {
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
        .cw-sec-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(30px, 3.8vw, 44px);
          font-weight: 700;
          color: #111966;
          line-height: 1.2;
          margin: 0 0 16px;
        }
        .cw-sec-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 17px;
          line-height: 1.7;
          color: #202938;
          margin: 0;
        }
        .cw-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 50px;
        }
        .cw-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 34px 28px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 18px -4px rgba(17, 25, 102, 0.05);
          transition: all 0.35s ease;
        }
        .cw-card:hover {
          transform: none !important;
          background: var(--brand-hover-yellow) !important;
          border-color: #EAB308 !important;
          box-shadow: 0 14px 34px rgba(234, 179, 8, 0.22), 0 4px 12px rgba(17, 25, 102, 0.06) !important;
        }
        .cw-card-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: 21px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 12px;
          line-height: 1.3;
        }
        .cw-card-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15px;
          line-height: 1.7;
          color: #202938;
          margin: 0 0 20px;
          flex: 1;
        }
        .cw-card-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
          border-top: 1px solid #EEF2F6;
          padding-top: 18px;
        }
        .cw-bullet-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 13.5px;
          font-weight: 700;
          color: #111966;
        }
        .cw-bullet-item svg {
          color: #EAB308;
          flex-shrink: 0;
        }

        /* Value Highlights */
        .cw-val-sec {
          background: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%);
          padding: clamp(70px, 8vw, 100px) 0;
          border-top: 1px solid #e3e5ef;
          border-bottom: 1px solid #e3e5ef;
        }
        .cw-val-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .cw-val-box {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px 22px;
          text-align: center;
        }
        .cw-val-icon {
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
        .cw-val-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 19px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 8px;
        }
        .cw-val-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14px;
          line-height: 1.6;
          color: #202938;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .cw-cards-grid {
            grid-template-columns: 1fr;
          }
          .cw-val-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .cw-val-grid {
            grid-template-columns: 1fr;
          }
        }

        /* -- SCROLL ANIMATIONS -- */
        @keyframes cwFadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        [data-cw-anim] {
          opacity: 0;
          will-change: transform, opacity;
        }

        .cw-card[data-cw-anim].cw-visible {
          animation: cwFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .cw-card[data-cw-anim]:nth-child(1).cw-visible { animation-delay: 0.05s; }
        .cw-card[data-cw-anim]:nth-child(2).cw-visible { animation-delay: 0.2s; }
        .cw-card[data-cw-anim]:nth-child(3).cw-visible { animation-delay: 0.35s; }

        .cw-val-box[data-cw-anim].cw-visible {
          animation: cwFadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .cw-val-box[data-cw-anim]:nth-child(1).cw-visible { animation-delay: 0.05s; }
        .cw-val-box[data-cw-anim]:nth-child(2).cw-visible { animation-delay: 0.15s; }
        .cw-val-box[data-cw-anim]:nth-child(3).cw-visible { animation-delay: 0.25s; }
        .cw-val-box[data-cw-anim]:nth-child(4).cw-visible { animation-delay: 0.35s; }
      `}</style>

      {/* Hero */}
      <section className="cw-hero">
        <div className="cw-hero-glow" aria-hidden="true" />
        <div className="cw-container">
          <div className="cw-hero-inner">
            <div className="cw-eyebrow">
              <Code2 size={14} style={{ color: '#EAB308' }} />
              <span>CUSTOM SOFTWARE &amp; WEB DEVELOPMENT</span>
            </div>

            <h1 className="cw-title">
              Custom Web Development Services UK
            </h1>

            <p className="cw-desc">
              Empowering ambitious brands with bespoke, scalable web applications. We combine
              clean component architecture, enterprise-level security, and high-performance server
              infrastructure to build digital platforms that outpace the competition.
            </p>

            <div className="cw-stat-strip">
              <span className="cw-stat-pill">
                <CheckCircle2 size={13} style={{ color: '#EAB308' }} />
                <span>100% Bespoke Architecture</span>
              </span>
              <span className="cw-stat-pill">
                <Lock size={13} style={{ color: '#EAB308' }} />
                <span>Enterprise Security &amp; GDPR</span>
              </span>
              <span className="cw-stat-pill">
                <Zap size={13} style={{ color: '#EAB308' }} />
                <span>Performance-Focused Architecture</span>
              </span>
            </div>

            <div className="cw-btn-group">
              <Link href="/contact" className="cw-btn-primary">
                <span>Book Technical Consultation</span>
                <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
              <a href="#frontend-section" className="cw-btn-secondary">
                <span>View Tech Stack</span>
              </a>
            </div>

            <div className="cw-hero-graphic-wrap">
              <Image
                src="/images/graphics/web-development.png"
                alt="Custom Web Development Engineering Illustration"
                width={330}
                height={380}
                className="cw-hero-graphic"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frontend Engineering Section */}
      <section id="frontend-section" className="cw-section">
        <div className="cw-container">
          <div className="cw-sec-head">
            <div className="cw-sec-badge">
              <Terminal size={13} style={{ color: '#EAB308' }} />
              <span>CLIENT-SIDE EXCELLENCE</span>
            </div>
            <h2 className="cw-sec-title">Modern Frontend Development</h2>
            <p className="cw-sec-desc">
              We design responsive, accessible, and ultra-fast user interfaces with industry-standard
              frameworks, delivering seamless experiences across mobile, desktop, and tablet devices.
            </p>
          </div>

          <div className="cw-cards-grid">
            {FRONTEND_FRAMEWORKS.map((item, idx) => (
              <div key={idx} className="cw-card" data-cw-anim>
                <h3 className="cw-card-title">{item.name}</h3>
                <p className="cw-card-desc">{item.desc}</p>
                <ul className="cw-card-bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="cw-bullet-item">
                      <CheckCircle2 size={14} strokeWidth={2.4} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Backend Engineering Section */}
          <div className="cw-sec-head" style={{ marginTop: '70px' }}>
            <div className="cw-sec-badge">
              <Server size={13} style={{ color: '#EAB308' }} />
              <span>SERVER &amp; DATA ARCHITECTURE</span>
            </div>
            <h2 className="cw-sec-title">Enterprise Backend Engineering</h2>
            <p className="cw-sec-desc">
              Scalable, secure, and event-driven backends designed to support high concurrent user
              traffic, complex business workflows, and seamless third-party API integrations.
            </p>
          </div>

          <div className="cw-cards-grid">
            {BACKEND_FRAMEWORKS.map((item, idx) => (
              <div key={idx} className="cw-card" data-cw-anim>
                <h3 className="cw-card-title">{item.name}</h3>
                <p className="cw-card-desc">{item.desc}</p>
                <ul className="cw-card-bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="cw-bullet-item">
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

      {/* Strategic Advantages */}
      <section className="cw-val-sec">
        <div className="cw-container">
          <div className="cw-sec-head">
            <div className="cw-sec-badge">
              <ShieldCheck size={13} style={{ color: '#EAB308' }} />
              <span>THE ITBS ADVANTAGE</span>
            </div>
            <h2 className="cw-sec-title">Why UK Leaders Choose Bespoke Code</h2>
            <p className="cw-sec-desc">
              Template-based websites degrade over time under plugin bloat. Custom web engineering
              protects your brand with longevity, speed, and tailored user flows.
            </p>
          </div>

          <div className="cw-val-grid">
            <div className="cw-val-box" data-cw-anim>
              <div className="cw-val-icon"><Zap size={24} /></div>
              <h3 className="cw-val-title">Maximum Speed</h3>
              <p className="cw-val-desc">Zero bloat or redundant libraries means 95+ Google PageSpeed scores right out of the box.</p>
            </div>
            <div className="cw-val-box" data-cw-anim>
              <div className="cw-val-icon"><ShieldCheck size={24} /></div>
              <h3 className="cw-val-title">Hardened Security</h3>
              <p className="cw-val-desc">Custom data schemas and sanitised inputs dramatically minimize vulnerability surfaces.</p>
            </div>
            <div className="cw-val-box" data-cw-anim>
              <div className="cw-val-icon"><Layers size={24} /></div>
              <h3 className="cw-val-title">Full IP Ownership</h3>
              <p className="cw-val-desc">You own 100% of your source code, database architecture, and digital assets with zero vendor lock-in.</p>
            </div>
            <div className="cw-val-box" data-cw-anim>
              <div className="cw-val-icon"><Cpu size={24} /></div>
              <h3 className="cw-val-title">Effortless Scaling</h3>
              <p className="cw-val-desc">Modular cloud deployment accommodates explosive traffic spikes without crashes or slowdowns.</p>
            </div>
          </div>

          {/* Interactive FAQs */}
          <FAQAccordion items={FAQS} />

          {/* Bottom Conversion CTA */}
          <ServiceCTA
            badge="BESPOKE WEB ENGINEERING"
            title="Have A Custom Web Project In Mind?"
            description="Speak directly with our senior full-stack architects to discuss your technical specifications, architecture diagrams, and milestone estimates."
            primaryBtnText="Discuss Your Project"
            primaryBtnHref="/contact"
          />
        </div>
      </section>
    </div>
  );
}
