'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Lightbulb,
  Search,
  Code2,
  Palette,
  Megaphone,
  Check,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  desc: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  image: string;
  deliverables: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'solutions',
    number: '01',
    tag: 'Operations & AI',
    title: 'Solutions',
    desc: 'Streamline your operations and scale client conversions with bespoke lead management and automated business intelligence.',
    href: '/services/crm-lead-management',
    icon: Lightbulb,
    image: '/images/graphics/marketing-solutions.png',
    deliverables: [
      'CRM & Lead Management Systems',
      'AI Automation & Smart Workflows',
      'Bespoke Business Process Integrations',
    ],
  },
  {
    id: 'seo',
    number: '02',
    tag: 'Search & Generative AI',
    title: 'SEO & AI Search',
    desc: 'Build stronger organic search visibility and improve your eligibility for AI answer engines with data-backed strategies.',
    href: '/services/seo',
    icon: Search,
    image: '/images/graphics/seo-lead-magnet.png',
    deliverables: [
      'Technical SEO, Audits & Content Strategy',
      'Answer Engine Optimisation (AEO)',
      'Generative Engine Optimisation (GEO)',
    ],
  },
  {
    id: 'web',
    number: '03',
    tag: 'Engineering & Platforms',
    title: 'Web Development',
    desc: 'Custom-built, high-speed websites engineered on modern frameworks, WordPress, and Shopify to convert traffic into revenue.',
    href: '/services/custom-web-development',
    icon: Code2,
    image: '/images/graphics/web-development.png',
    deliverables: [
      'Custom Web & Bespoke Application Build',
      'Scalable WordPress & Shopify Platforms',
      'Ultra-Fast Loading Speed & Mobile Experience',
    ],
  },
  {
    id: 'design',
    number: '04',
    tag: 'Brand & Experience',
    title: 'Design & Creative',
    desc: 'Elevate brand authority and inspire confidence with human-centered UI/UX designs, Figma prototypes, and stunning visual assets.',
    href: '/services/ui-ux-design',
    icon: Palette,
    image: '/images/graphics/design-creative.png',
    deliverables: [
      'Conversion-Focused UI/UX & Wireframing',
      'Interactive Figma Prototypes & Design Systems',
      'Bespoke Graphic Design & Brand Identity',
    ],
  },
  {
    id: 'paid',
    number: '05',
    tag: 'Performance Marketing',
    title: 'Paid Advertising',
    desc: 'Maximize commercial return on advertising spend through surgical PPC targeting, paid social media, and Google Shopping.',
    href: '/services/ppc',
    icon: Megaphone,
    image: '/images/graphics/paid-advertising.png',
    deliverables: [
      'High-Intent Google Ads & PPC Management',
      'Paid Social Advertising (Meta, LinkedIn)',
      'Google Shopping Feed Optimisation & Scale',
    ],
  },
];

export function ServicesSection() {
  const rootRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('svc-visible');
          } else {
            entry.target.classList.remove('svc-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    const els = root.querySelectorAll('[data-svc-anim]');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={rootRef} className="svc-section-root">
      {/* Subtle luxury ambient glow effects */}
      <div className="svc-ambient-glow svc-ambient-glow--top" aria-hidden="true" />
      <div className="svc-ambient-glow svc-ambient-glow--bottom" aria-hidden="true" />

      <div className="svc-container">
        {/* Section Header */}
        <div className="svc-heading-wrapper">
          <div className="svc-badge">
            <Sparkles size={13} className="svc-badge-icon" />
            <span>WHAT WE DELIVER</span>
          </div>

          <h2 className="svc-main-title">
            Digital Marketing Services{' '}
            <span className="svc-title-highlight">That Deliver Results</span>
          </h2>

          <div className="svc-ornament" aria-hidden="true">
            <span className="svc-ornament-line" />
            <span className="svc-ornament-diamond" />
            <span className="svc-ornament-line" />
          </div>

          <p className="svc-lead-text">
            Tailored digital strategies designed for ambitious UK businesses. We combine data,
            creativity, and cutting-edge technology to turn your growth targets into measurable revenue.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="svc-cards-grid">
          {SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="svc-card-wrapper" data-svc-anim>
                <Link href={item.href} className="svc-card-body">
                  {/* Top gold accent line */}
                  <div className="svc-card-top-bar" aria-hidden="true" />

                  {/* Card Header: Icon + Number badge */}
                  <div className="svc-card-head">
                    <div className="svc-icon-box">
                      <Icon size={24} strokeWidth={1.75} />
                    </div>
                    <div className="svc-num-tag">{item.number}</div>
                  </div>

                  {/* Tag pill */}
                  <div className="svc-tag-pill">{item.tag}</div>

                  {/* Graphic Illustration */}
                  <div className="svc-card-graphic-wrap">
                    <Image
                      src={item.image}
                      alt={`${item.title} Illustration`}
                      width={160}
                      height={180}
                      className="svc-card-illustration"
                      priority={false}
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="svc-item-title">{item.title}</h3>
                  <p className="svc-item-desc">{item.desc}</p>

                  {/* Deliverables / Feature points with checkmarks */}
                  <div className="svc-features-box">
                    <span className="svc-features-label">Key Deliverables</span>
                    <ul className="svc-features-list">
                      {item.deliverables.map((bullet, i) => (
                        <li key={i} className="svc-feature-item">
                          <span className="svc-check-circle" aria-hidden="true">
                            <Check size={12} strokeWidth={2.6} />
                          </span>
                          <span className="svc-feature-text">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Action link */}
                  <div className="svc-card-footer">
                    <span className="svc-cta-text">Explore Service</span>
                    <div className="svc-cta-circle">
                      <ArrowRight size={15} strokeWidth={2.2} />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
