'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Compass,
  Headphones,
  Check,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface ValueCard {
  id: string;
  tag: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  theme: 'gold' | 'navy';
  points: string[];
}

const VALUE_CARDS: ValueCard[] = [
  {
    id: 'results',
    tag: 'EVIDENCE-LED WORK',
    title: 'Make Progress You Can Measure',
    desc: 'We agree what progress looks like, focus on work that supports your goals and report clearly on what the data shows.',
    icon: TrendingUp,
    theme: 'gold',
    points: [
      'Clear Goals And Useful Measures',
      'Work Prioritised By Evidence',
      'Transparent Reporting, No Vanity Metrics',
    ],
  },
  {
    id: 'strategies',
    tag: 'TRANSPARENT ROADMAP',
    title: 'Tailored And Transparent Strategies',
    desc: 'Your project is built around your specific goals, audiences, and market without any surprises, just clear and informed steps along the way.',
    icon: Compass,
    theme: 'navy',
    points: [
      'A Plan Shaped Around Your Brief',
      'Clear Milestones & Regular Updates',
      'No Hidden Fees or Surprises',
    ],
  },
  {
    id: 'support',
    tag: 'CONTINUOUS SUPPORT',
    title: 'Practical Support After Launch',
    desc: 'Our team can support your site after launch with updates, maintenance and marketing agreed for your project.',
    icon: Headphones,
    theme: 'gold',
    points: [
      'Dedicated UK Account Management',
      'Continuous Post-Launch Monitoring',
      'Proactive Growth & Technical Support',
    ],
  },
];

export function WhyChooseUsSection() {
  const rootRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>('[data-wcu-anim]');
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      items.forEach((item) => item.classList.add('wcu-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('wcu-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={rootRef} className="wcu-section-root" suppressHydrationWarning>
      {/* Self-contained CSS guaranteeing instant luxury rendering across all environments */}
      <style>{`
        .wcu-section-root {
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 50%, #F5F5F5 100%);
          padding: clamp(70px, 8vw, 120px) 0;
          border-bottom: 1px solid #e3e5ef;
          overflow: hidden;
          font-family: var(--font-body), "Cardo", Georgia, serif;
          color: #111966;
        }
        .wcu-ambient-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.6;
        }
        .wcu-ambient-glow--left {
          top: 10%;
          left: -150px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212, 184, 90, 0.16) 0%, transparent 70%);
        }
        .wcu-ambient-glow--right {
          bottom: 5%;
          right: -150px;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(17, 25, 102, 0.06) 0%, transparent 70%);
        }
        .wcu-container {
          position: relative;
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 40px);
        }
        .wcu-header {
          text-align: center;
          max-width: 860px;
          margin: 0 auto clamp(44px, 5vw, 68px);
        }
        .wcu-badge {
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
        .wcu-badge-icon {
          color: #EAB308;
        }
        .wcu-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(32px, 4.2vw, 48px);
          font-weight: 700;
          color: #111966;
          line-height: 1.18;
          letter-spacing: -0.01em;
          margin: 0 0 16px;
        }
        .wcu-title-accent {
          color: var(--brand-blue);
          display: inline-block;
          font-style: italic;
        }
        .wcu-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 140px;
          margin: 18px auto 22px;
        }
        .wcu-ornament-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #EAB308, transparent);
        }
        .wcu-ornament-diamond {
          width: 7px;
          height: 7px;
          background: #EAB308;
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        .wcu-intro {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(16px, 1.2vw, 18px);
          line-height: 1.78;
          color: #202938;
          margin: 0;
        }
        .wcu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 56px;
        }
        .wcu-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          box-shadow: 0 4px 20px -4px rgba(17, 25, 102, 0.05);
          transition: all 0.38s cubic-bezier(0.2, 0.6, 0.3, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }



        .wcu-card--gold:hover {
          transform: translateY(-3px);
          color: #111966;
          background: #FFF9AE;
          border-color: rgba(17, 25, 102, 0.18);
          box-shadow: 0 18px 40px rgba(17, 25, 102, 0.12);
        }

        .wcu-card--navy:hover {
          transform: translateY(-3px);
          color: #111966;
          background: #FFF9AE;
          border-color: rgba(17, 25, 102, 0.18);
          box-shadow: 0 18px 40px rgba(17, 25, 102, 0.12);
        }

        .wcu-card-inner {
          padding: 42px 34px 34px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .wcu-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 24px;
        }
        .wcu-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 12px;
          transition: all 0.35s ease;
        }
        .wcu-card--gold .wcu-icon-box {
          background: #F6EFE4;
          color: #7A5B1E;
          border: 1px solid rgba(212, 184, 90, 0.35);
        }
        .wcu-card--gold:hover .wcu-icon-box {
          background: #111966;
          color: #FFF9AE;
          transform: scale(1.04);
        }
        .wcu-card--navy .wcu-icon-box {
          background: rgba(17, 25, 102, 0.08);
          color: #111966;
          border: 1px solid rgba(17, 25, 102, 0.2);
        }
        .wcu-card--navy:hover .wcu-icon-box {
          background: #111966;
          color: #FFF9AE;
          transform: scale(1.04);
        }
        .wcu-card-tag {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
        }
        .wcu-card--gold .wcu-card-tag {
          background: rgba(246, 239, 228, 0.85);
          color: #7A5B1E;
          border: 1px solid rgba(212, 184, 90, 0.25);
        }
        .wcu-card--navy .wcu-card-tag {
          background: rgba(17, 25, 102, 0.06);
          color: #111966;
          border: 1px solid rgba(17, 25, 102, 0.15);
        }
        .wcu-card-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: 24px;
          font-weight: 700;
          color: #111966;
          line-height: 1.28;
          margin: 0 0 14px;
        }
        .wcu-card-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15.5px;
          line-height: 1.72;
          color: #202938;
          margin: 0 0 24px;
        }
        .wcu-points-list {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
        }
        .wcu-point-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 13.5px;
          line-height: 1.45;
          color: #111966;
        }
        .wcu-point-check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.3s ease;
        }
        .wcu-card--gold .wcu-point-check {
          background: rgba(212, 184, 90, 0.2);
          color: #7A5B1E;
        }
        .wcu-card--gold:hover .wcu-point-check {
          background: #111966;
          color: #FFF9AE;
        }
        .wcu-card--navy .wcu-point-check {
          background: rgba(17, 25, 102, 0.1);
          color: #111966;
        }
        .wcu-card--navy:hover .wcu-point-check {
          background: #111966;
          color: #FFF9AE;
        }
        .wcu-point-text {
          flex: 1;
        }
.wcu-card-link svg {
          transition: transform 0.25s ease;
        }
.wcu-card-link:hover svg {
          transform: translateX(4px);
        }
        .wcu-trust-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 26px 36px;
          background: linear-gradient(135deg, #111966 0%, #161F6E 100%);
          border-radius: 14px;
          box-shadow: 0 12px 32px -8px rgba(17, 25, 102, 0.2);
        }
        .wcu-trust-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .wcu-trust-lead {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: 18px;
          font-weight: 700;
          color: #FFFFFF;
        }
        .wcu-trust-sub {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.75);
        }
        .wcu-trust-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: #FFFFFF;
          color: #111966 !important;
          border-radius: 4px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        .wcu-trust-btn:hover {
          background: #FFFDF5;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
        @media (max-width: 1100px) {
          .wcu-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .wcu-grid .wcu-card:nth-child(3) {
            grid-column: 1 / -1;
            max-width: 600px;
            margin: 0 auto;
            width: 100%;
          }
          .wcu-trust-bar {
            flex-direction: column;
            text-align: center;
            padding: 24px;
          }
        }
        @media (max-width: 768px) {
          .wcu-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .wcu-grid .wcu-card:nth-child(3) {
            grid-column: auto;
            max-width: none;
          }
          .wcu-card-inner {
            padding: 34px 24px 26px;
          }
          .wcu-trust-btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* -- SCROLL ANIMATIONS -- */
        @keyframes wcuFadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        [data-wcu-anim] {
          opacity: 0;
          will-change: transform, opacity;
        }

        .wcu-card[data-wcu-anim].wcu-visible {
          animation: wcuFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .wcu-card[data-wcu-anim]:nth-child(1).wcu-visible { animation-delay: 0.05s; }
        .wcu-card[data-wcu-anim]:nth-child(2).wcu-visible { animation-delay: 0.2s; }
        .wcu-card[data-wcu-anim]:nth-child(3).wcu-visible { animation-delay: 0.35s; }
        @media (prefers-reduced-motion: reduce) {
          [data-wcu-anim],
          .wcu-card[data-wcu-anim].wcu-visible {
            animation: none !important;
            opacity: 1;
            transform: none;
            will-change: auto;
          }
        }
      `}</style>

      {/* Ambient background glows */}
      <div className="wcu-ambient-glow wcu-ambient-glow--left" aria-hidden="true" />
      <div className="wcu-ambient-glow wcu-ambient-glow--right" aria-hidden="true" />

      <div className="wcu-container">
        {/* Section Header */}
        <div className="wcu-header">
          <div className="wcu-badge">
            <Sparkles size={13} className="wcu-badge-icon" />
            <span>WHY CHOOSE US</span>
          </div>

          <h2 className="wcu-title">
            Why Work With <span className="wcu-title-accent">Us?</span>
          </h2>

          <div className="wcu-ornament" aria-hidden="true">
            <span className="wcu-ornament-line" />
            <span className="wcu-ornament-diamond" />
            <span className="wcu-ornament-line" />
          </div>

          <p className="wcu-intro">
            Behind every standout campaign is a dedicated team of marketing experts and strategists
            who live and breathe digital growth. We don’t just offer services; we build enduring
            partnerships and work as an active extension of your team to craft tailored digital
            strategies that drive real, measurable business growth.
          </p>
        </div>

        {/* 3 Core Value Cards */}
        <div className="wcu-grid">
          {VALUE_CARDS.map((card) => {
            const Icon = card.icon;
            const isNavy = card.theme === 'navy';

            return (
              <div
                key={card.id}
                className={`wcu-card ${isNavy ? 'wcu-card--navy' : 'wcu-card--gold'}`}
                data-wcu-anim
              >
                <div className="wcu-card-inner">
                  {/* Icon & Tag row */}
                  <div className="wcu-card-top">
                    <div className="wcu-icon-box">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <span className="wcu-card-tag">{card.tag}</span>
                  </div>

                  {/* Title */}
                  <h3 className="wcu-card-title">{card.title}</h3>

                  {/* Description */}
                  <p className="wcu-card-desc">{card.desc}</p>

                  {/* Bullet Highlights */}
                  <ul className="wcu-points-list">
                    {card.points.map((point, index) => (
                      <li key={index} className="wcu-point-item">
                        <span className="wcu-point-check" aria-hidden="true">
                          <Check size={12} strokeWidth={2.8} />
                        </span>
                        <span className="wcu-point-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom trust banner */}
        <div className="wcu-trust-bar">
          <div className="wcu-trust-content">
            <span className="wcu-trust-lead">
              Ready to take your digital performance to the next level?
            </span>
            <span className="wcu-trust-sub">
              Partner with a trusted UK agency that puts measurable results first.
            </span>
          </div>
          <Link href="/contact" className="wcu-trust-btn">
            <span>Speak With Our Team</span>
            <ArrowRight size={15} strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
