'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

/* ==========================================================================
   FOOTER NAVIGATION DATA — Easily editable arrays
   ========================================================================== */

const FOOTER_SERVICES = [
  { label: 'SEO & Search Visibility', href: '/services/seo' },
  { label: 'Ecommerce SEO', href: '/services/ecommerce-seo' },
  { label: 'PPC & Paid Advertising', href: '/services/ppc' },
  { label: 'Content Marketing', href: '/services/content-marketing' },
  { label: 'Custom Web Development', href: '/services/custom-web-development' },
  { label: 'Shopify Development', href: '/services/shopify-development' },
];

const FOOTER_SOLUTIONS = [
  { label: 'AI Automation & Agents', href: '/services/ai-automation' },
  { label: 'CRM & Lead Management', href: '/services/crm-lead-management' },
  { label: 'Answer Engine (AEO)', href: '/services/aeo' },
  { label: 'Generative Engine (GEO)', href: '/services/generative-engine-optimisation' },
  { label: 'UI/UX & Brand Design', href: '/services/ui-ux-design' },
];

const FOOTER_COMPANY = [
  { label: 'Help Center', href: '/help' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Parent Community', href: '/community' },
  { label: 'About Us', href: '/about' },
];

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/infotech-business-solution/posts/',
    color: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/InfoTechBusinessSolutionsOfficial/',
    color: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/infotech_business_solutions/',
    color: '#E4405F',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/923701660317',
    color: '#25D366',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="ft-root" suppressHydrationWarning>
      {/* Self-contained CSS guaranteeing instant luxury rendering */}
      <style>{`
        .ft-root {
          position: relative;
          background: linear-gradient(180deg, #090e38 0%, #111966 25%, #0b1145 100%);
          color: rgba(255, 255, 255, 0.88);
          font-family: var(--font-body), "Cardo", Georgia, serif;
          overflow: hidden;
        }
        /* Top gold metallic line */
        .ft-top-gold-bar {
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, #FCF000 25%, #FCF000 50%, #FCF000 75%, transparent 100%);
          opacity: 0.85;
        }
        /* Ambient glows */
        .ft-ambient-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.5;
        }
        .ft-glow--top-center {
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 850px;
          height: 380px;
          background: radial-gradient(circle, rgba(234, 179, 8, 0.22) 0%, transparent 70%);
        }
        .ft-glow--bottom-right {
          bottom: -150px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(234, 179, 8, 0.12) 0%, transparent 70%);
        }
        .ft-container {
          position: relative;
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 40px);
        }

        /* ── Pre-Footer Conversion Banner ── */
        .ft-cta-banner {
          position: relative;
          margin: clamp(50px, 6vw, 75px) 0 clamp(40px, 5vw, 65px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
          border: 1px solid rgba(234, 179, 8, 0.35);
          border-radius: 24px;
          padding: clamp(34px, 4.5vw, 54px) clamp(24px, 4vw, 56px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 36px;
          flex-wrap: wrap;
          box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(12px);
        }
        .ft-cta-left {
          max-width: 680px;
        }
        .ft-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          border-radius: 20px;
          background: rgba(234, 179, 8, 0.15);
          border: 1px solid rgba(234, 179, 8, 0.4);
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #FDE68A;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .ft-cta-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(28px, 3.2vw, 42px);
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.2;
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }
        .ft-cta-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 16.5px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.78);
          margin: 0;
        }
        .ft-cta-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ft-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 15px 32px;
          background: #FCF000;
          color: #111966;
          border-radius: 8px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15.5px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.02em;
          box-shadow: 0 6px 20px rgba(252, 240, 0, 0.35);
          transition: all 0.3s ease;
        }
        .ft-btn-primary:hover {
          background: var(--brand-hover-yellow);
          transform: none !important;
          box-shadow: 0 10px 28px rgba(252, 240, 0, 0.45);
        }
        .ft-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 26px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          border-radius: 8px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .ft-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #EAB308;
          color: #FDE68A;
          transform: none !important;
        }

        /* ── Main Footer Columns Grid ── */
        .ft-main-grid {
          display: grid;
          grid-template-columns: 1.45fr 2.05fr 1fr;
          gap: clamp(32px, 4.5vw, 68px);
          padding-bottom: clamp(48px, 6vw, 75px);
        }
        /* Column 1: Brand Info */
        .ft-brand-col {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .ft-logo-container {
          display: inline-flex;
          align-items: center;
        }
        .ft-brand-text {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15.5px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.72);
          margin: 0;
          max-width: 440px;
        }
        .ft-contact-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 4px;
        }
        .ft-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .ft-contact-link:hover {
          color: #FDE68A;
        }
        .ft-icon-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #EAB308;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .ft-contact-link:hover .ft-icon-pill {
          background: #EAB308;
          color: #111966;
          border-color: #EAB308;
        }
        /* Social Media Buttons */
        .ft-social-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 6px;
        }
        .ft-social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #FFFFFF;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.2, 0.6, 0.3, 1);
        }
        .ft-social-icon-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* Nav Columns */
        .ft-nav-col {
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-width: 0;
        }
        .ft-nav-pair {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          min-width: 0;
        }
        .ft-nav-pair > .ft-nav-col:first-child {
          padding-right: clamp(16px, 2vw, 28px);
        }
        .ft-nav-pair > .ft-nav-col:last-child {
          padding-left: clamp(16px, 2vw, 28px);
        }
        .ft-col-heading,
        .ft-nav-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: 20px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: 0.01em;
        }
        .ft-col-heading::after,
        .ft-col-heading:after,
        .ft-nav-title::after,
        .ft-nav-title:after {
          display: none !important;
          content: none !important;
          opacity: 0 !important;
          width: 0 !important;
          height: 0 !important;
          visibility: hidden !important;
        }
        .ft-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ft-nav-item-link {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          min-width: 0;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.68);
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .ft-nav-item-link span {
          min-width: 0;
        }
        .ft-nav-item-link svg {
          flex: none;
          margin-top: 3px;
        }
        .ft-nav-item-link:hover {
          color: #FDE68A;
          transform: translateX(4px);
        }
        .ft-nav-item-link svg {
          opacity: 0;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .ft-nav-item-link:hover svg {
          opacity: 1;
          transform: translateX(2px);
        }

        /* ── Divider ── */
        .ft-divider-line {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(234, 179, 8, 0.3) 25%, rgba(255, 255, 255, 0.15) 50%, rgba(234, 179, 8, 0.3) 75%, transparent 100%);
        }

        /* ── Bottom Bar ── */
        .ft-bottom-bar {
          padding: 26px 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .ft-copyright-text {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.55);
          margin: 0;
        }
        .ft-legal-group {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .ft-legal-item {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.48);
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .ft-legal-item:hover {
          color: #FDE68A;
        }
        .ft-uk-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          padding: 3px 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }

        /* Responsive Styles */
        @media (max-width: 1080px) {
          .ft-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .ft-brand-col {
            grid-column: 1 / -1;
          }
          .ft-nav-pair,
          .ft-main-grid > .ft-nav-col {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 640px) {
          .ft-cta-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .ft-cta-actions {
            width: 100%;
          }
          .ft-btn-primary, .ft-btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .ft-main-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .ft-brand-col {
            grid-column: auto;
          }
          .ft-nav-pair {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            grid-column: auto;
          }
          .ft-nav-pair > .ft-nav-col:first-child {
            padding-right: 16px;
          }
          .ft-nav-pair > .ft-nav-col:last-child {
            padding-left: 16px;
          }
          .ft-nav-col {
            gap: 14px;
          }
          .ft-nav-list {
            gap: 12px;
          }
          .ft-nav-item-link {
            font-size: 14.5px;
            line-height: 1.45;
          }
          .ft-main-grid > .ft-nav-col {
            grid-column: auto;
          }
          .ft-bottom-bar {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
          .ft-legal-group {
            justify-content: center;
          }
        }
      `}</style>

      {/* Top Gold Metallic Accent Line */}
      <div className="ft-top-gold-bar" aria-hidden="true" />

      {/* Ambient background glows */}
      <div className="ft-ambient-glow ft-glow--top-center" aria-hidden="true" />
      <div className="ft-ambient-glow ft-glow--bottom-right" aria-hidden="true" />

      <div className="ft-container">
        {/* ── Pre-Footer Executive CTA Banner ── */}
        <div className="ft-cta-banner">
          <div className="ft-cta-left">
            <div className="ft-cta-badge">
              <Sparkles size={12} style={{ color: '#EAB308' }} />
              <span>LET&apos;S GROW TOGETHER</span>
            </div>
            <h2 className="ft-cta-title">
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="ft-cta-desc">
              Speak directly with our UK digital strategists to audit your search visibility,
              modernize your web architecture, and build a measurable revenue roadmap.
            </p>
          </div>

          <div className="ft-cta-actions">
            <Link href="/contact" className="ft-btn-primary">
              <span>Book Strategy Call</span>
              <ArrowRight size={16} strokeWidth={2.2} />
            </Link>
            <a href="mailto:info@infotechbusinesssolutions.com" className="ft-btn-secondary">
              <Mail size={16} strokeWidth={2} />
              <span>Send An Enquiry</span>
            </a>
          </div>
        </div>

        {/* ── Main Footer Grid ── */}
        <div className="ft-main-grid">
          {/* Column 1: Brand Info */}
          <div className="ft-brand-col">
            <div className="ft-logo-container">
              <Image
                src="/images/itbs-logo.png"
                alt="ITBS - InfoTech Business Solutions"
                width={140}
                height={27}
                style={{
                  width: '140px',
                  height: 'auto',
                  filter: 'brightness(0) invert(1)',
                  objectFit: 'contain',
                }}
              />
            </div>

            <p className="ft-brand-text">
              InfoTech Business Solution is a result-driven digital business solution agency. We help
              businesses grow through tailored SEO, web design, and marketing strategies for a loyal
              customer base. Based in the United Kingdom, we combine creativity with data-driven,
              measurable success.
            </p>

            {/* Direct Contact Links with Badges */}
            <div className="ft-contact-list">
              <a href="mailto:info@infotechbusinesssolutions.com" className="ft-contact-link">
                <span className="ft-icon-pill">
                  <Mail size={15} strokeWidth={2} />
                </span>
                <span>info@infotechbusinesssolutions.com</span>
              </a>

              <span className="ft-contact-link">
                <span className="ft-icon-pill">
                  <MapPin size={15} strokeWidth={2} />
                </span>
                <span>Manchester &amp; London, United Kingdom</span>
              </span>
            </div>

            {/* Branded Social Buttons with Vibrant Signature Hover */}
            <div className="ft-social-row">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social-icon-btn"
                  aria-label={s.label}
                  style={{ '--hover-color': s.color } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = s.color;
                    e.currentTarget.style.borderColor = s.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="ft-nav-pair">
            {/* Service and solution links share a two-column group. */}
            <div className="ft-nav-col">
              <h3 className="ft-col-heading">Services</h3>
              <ul className="ft-nav-list">
                {FOOTER_SERVICES.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="ft-nav-item-link">
                      <span>{item.label}</span>
                      <ArrowUpRight size={13} strokeWidth={2} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ft-nav-col">
              <h3 className="ft-col-heading">Solutions</h3>
              <ul className="ft-nav-list">
                {FOOTER_SOLUTIONS.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="ft-nav-item-link">
                      <span>{item.label}</span>
                      <ArrowUpRight size={13} strokeWidth={2} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support column */}
          <div className="ft-nav-col">
            <h3 className="ft-col-heading">Support</h3>
            <ul className="ft-nav-list">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="ft-nav-item-link">
                    <span>{item.label}</span>
                    <ArrowUpRight size={13} strokeWidth={2} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Elegant Divider ── */}
        <div className="ft-divider-line" aria-hidden="true" />

        {/* ── Bottom Bar ── */}
        <div className="ft-bottom-bar">
          <p className="ft-copyright-text">
            Copyright &copy; {currentYear} InfoTech Business Solutions &middot; All rights reserved
          </p>

          <div className="ft-legal-group">
            <Link href="/privacy-policy" className="ft-legal-item">Privacy Policy</Link>
            <Link href="/terms" className="ft-legal-item">Terms of Service</Link>
            <Link href="/cookies" className="ft-legal-item">Cookie Policy</Link>
            <span className="ft-uk-badge">
              <span>🇬🇧 United Kingdom</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
