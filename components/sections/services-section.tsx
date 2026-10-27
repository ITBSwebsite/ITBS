'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
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
  image: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'solutions',
    number: '01',
    tag: 'Operations & AI',
    title: 'Solutions',
    desc: 'Streamline your operations and scale client conversions with bespoke lead management and automated business intelligence.',
    href: '/services/crm-lead-management',
    image: '/images/graphics/marketing-solutions.png',
  },
  {
    id: 'seo',
    number: '02',
    tag: 'Search & Generative AI',
    title: 'SEO & AI Search',
    desc: 'Build stronger organic search visibility and improve your eligibility for AI answer engines with data-backed strategies.',
    href: '/services/seo',
    image: '/images/graphics/seo-lead-magnet.png',
  },
  {
    id: 'web',
    number: '03',
    tag: 'Development & Technology',
    title: 'Web Development',
    desc: 'Custom-built, high-speed websites engineered on modern frameworks, WordPress, and Shopify to convert traffic into revenue.',
    href: '/services/custom-web-development',
    image: '/images/graphics/web-development.png',
  },
  {
    id: 'design',
    number: '04',
    tag: 'Brand & Experience',
    title: 'Design & Creative',
    desc: 'Elevate brand authority and inspire confidence with human-centered UI/UX designs, Figma prototypes, and stunning visual assets.',
    href: '/services/ui-ux-design',
    image: '/images/graphics/design-creative.png',
  },
  {
    id: 'paid',
    number: '05',
    tag: 'Performance Marketing',
    title: 'Paid Advertising',
    desc: 'Maximize commercial return on advertising spend through surgical PPC targeting, paid social media, and Google Shopping.',
    href: '/services/ppc',
    image: '/images/graphics/paid-advertising.png',
  },
];

export function ServicesSection() {
  const rootRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>('[data-svc-anim]');
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      items.forEach((item) => item.classList.add('svc-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('svc-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach((item) => observer.observe(item));
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
            return (
              <div key={item.id} className="svc-card-wrapper" data-svc-anim>
                <Link href={item.href} className="svc-card-body">
                  {/* Card Header: Icon + Number badge */}
                  <div className="svc-card-head">
                    <div className="svc-icon-box">
                      <Image
                        src={item.image}
                        alt=""
                        aria-hidden="true"
                        width={80}
                        height={80}
                        className="svc-card-illustration"
                      />
                    </div>
                    <div className="svc-num-tag">{item.number}</div>
                  </div>

                  {/* Tag pill */}
                  <div className="svc-tag-pill">{item.tag}</div>

                  {/* Title & Description */}
                  <h3 className="svc-item-title">{item.title}</h3>
                  <p className="svc-item-desc">{item.desc}</p>

                  {/* Footer Action link */}
                  <div className="svc-card-footer">
                    <span className="svc-cta-text">Explore Service</span>
                    <div className="svc-cta-circle" aria-hidden="true">
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
