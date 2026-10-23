'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  Palette,
  Image as ImageIcon,
  PenTool,
  Layers,
  Award,
  Zap,
  Check,
  CheckCircle2,
  FileCheck,
  Monitor,
  Printer,
  Share2,
  Sliders,
  Quote,
} from 'lucide-react';
import { FAQAccordion, FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const STATS = [
  { num: 'Original', label: 'Artwork created for your brand' },
  { num: 'Flexible', label: 'Digital and print formats' },
  { num: 'Agreed rounds', label: 'Feedback included in project scope' },
  { num: 'Ready to use', label: 'Exports prepared for delivery' },
];

const CORE_SERVICES = [
  {
    tag: 'Figma Visuals',
    title: 'Figma UI/UX & Visual Layouts',
    desc: 'High-quality Figma UI/UX and visual layouts crafted for websites, mobile apps, and digital interfaces. We ensure a structured, elegant, and consistent brand image across every device viewport.',
    cta: 'Explore Figma designs',
  },
  {
    tag: 'Adobe Photoshop',
    title: 'Advanced Photoshop Visual Assets',
    desc: 'Advanced Photoshop design services for promotional banners, social media campaigns, high-impact digital posters, and bespoke marketing graphics tailored specifically to strengthen your online visibility.',
    cta: 'View Photoshop creatives',
  },
  {
    tag: 'Adobe Illustrator',
    title: 'Adobe Illustrator & Vector Precision',
    desc: 'Professional Adobe Illustrator vector design services, including logo design, branding marks, iconography, illustrations, and scalable assets engineered for both high-resolution print and crystal-clear digital displays.',
    cta: 'Explore vector design',
  },
];

const CAPABILITIES = [
  {
    icon: Palette,
    title: 'Brand Identity & Guidelines',
    desc: 'Distinctive visual identities including primary and secondary logo marks, typography pairings, color harmonies, and brand guideline decks.',
  },
  {
    icon: Share2,
    title: 'Social Media & Ad Creatives',
    desc: 'Thumb-stopping organic social posts, carousel decks, Meta ad creatives, LinkedIn banners, and Google display banners engineered for click-through.',
  },
  {
    icon: Printer,
    title: 'Print & Packaging Design',
    desc: 'Press-ready CMYK collateral: luxury business cards, brochures, corporate stationery, exhibition roll-ups, and bespoke product packaging.',
  },
  {
    icon: Monitor,
    title: 'Digital Marketing Collateral',
    desc: 'Engaging email newsletter templates, digital whitepapers, investor pitch decks, and lead magnet PDFs that reinforce authority.',
  },
  {
    icon: PenTool,
    title: 'Custom Vector Iconography',
    desc: 'Pixel-perfect, custom icon sets aligned with your brand aesthetic for web, mobile, and print applications.',
  },
  {
    icon: FileCheck,
    title: 'Production-Ready Asset Delivery',
    desc: 'All projects delivered with full source files (AI, PSD, FIG) plus web-optimized SVG, PNG, WebP, and press-quality PDF formats.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'We agree the creative direction, audience and intended use before production begins.',
    author: 'A clear creative brief',
    role: 'Project planning',
  },
  {
    quote: 'Review rounds are agreed up front so feedback can stay focused on the brief.',
    author: 'Focused feedback',
    role: 'Review process',
  },
  {
    quote: 'Final files are prepared in the formats and sizes set out in the agreed scope.',
    author: 'Useful file formats',
    role: 'Asset delivery',
  },
  {
    quote: 'Design decisions are guided by your brand, audience and where each asset will appear.',
    author: 'Brand-aware design',
    role: 'Creative direction',
  },
];

const FAQS: FAQItem[] = [
  {
    question: 'What graphic design services do you offer?',
    answer:
      'We provide complete, end-to-end graphic design services. This includes Figma UI layouts, Adobe Photoshop creatives, Adobe Illustrator vector art, brand identity design, logo creation, social media ads, website graphics, marketing brochures, flyers, and print packaging collateral.',
  },
  {
    question: 'Do you offer affordable graphic design services for small businesses?',
    answer:
      'Yes. We provide flexible and tailored graphic design packages designed for ambitious startups and growing SMEs without compromising on creative standards or delivery speed.',
  },
  {
    question: 'Can you design custom logos and brand style guides for businesses?',
    answer:
      'Absolutely. We specialize in bespoke logo designs that capture your business identity, complete with full brand guideline documents covering color schemes, typography hierarchies, and file formats for both print and digital usage.',
  },
  {
    question: 'Do you work as a dedicated graphic designing agency or freelancers?',
    answer:
      'Work with a dedicated design team on a clear brief, agreed review rounds and defined delivery milestones.',
  },
  {
    question: 'Do I own the copyright and source files for the designs?',
    answer:
      'Usage rights and source-file handover are agreed in your project scope. Where included, we provide the final files in the formats listed in your proposal.',
  },
];

export function GraphicDesignView() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('gd-visible');
          } else {
            entry.target.classList.remove('gd-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const els = root.querySelectorAll('[data-gd-anim]');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gd-page-root" ref={rootRef}>
      <style>{`
        .gd-page-root {
          background-color: #FFFFFF;
          color: #191919;
          font-family: var(--font-body), "Cardo", Georgia, serif;
          overflow-x: clip;
        }

        .gd-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3.5vw, 40px);
        }

        /* ── Hero Section (Juxify Inspired) ── */
        .gd-hero {
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 50%, #F5F5F5 100%);
          padding: clamp(60px, 8vw, 110px) 0 clamp(60px, 8vw, 100px);
          overflow: hidden;
        }

        .gd-hero-ambient {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          opacity: 0.16;
          top: -120px;
          right: 5%;
          background: radial-gradient(circle, #EAB308 0%, #111966 80%);
        }

        .gd-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(36px, 5vw, 64px);
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .gd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: #FFFFFF;
          border: 1px solid rgba(17, 25, 102, 0.12);
          border-radius: 30px;
          box-shadow: 0 2px 10px rgba(17, 25, 102, 0.04);
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #111966;
          margin-bottom: 22px;
        }

        .gd-hero-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(34px, 4.2vw, 54px);
          font-weight: 700;
          color: #111966;
          line-height: 1.15;
          letter-spacing: -0.015em;
          margin: 0 0 20px;
        }

        .gd-title-highlight {
          color: var(--brand-blue);
          display: inline-block;
          font-style: italic;
        }

        .gd-hero-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(16px, 1.2vw, 18px);
          line-height: 1.7;
          color: #202938;
          margin: 0 0 24px;
        }

        .gd-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 12px;
          margin-bottom: 32px;
        }

        .gd-hero-tag {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 13px;
          font-weight: 700;
          color: #111966;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          padding: 5px 12px;
          border-radius: 6px;
          box-shadow: 0 1px 4px rgba(17, 25, 102, 0.03);
        }

        .gd-btn-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .gd-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 32px;
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

        .gd-btn-primary:hover {
          background: #0c1250;
          box-shadow: 0 8px 24px rgba(17, 25, 102, 0.28);
        }

        .gd-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 26px;
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

        .gd-btn-secondary:hover {
          border-color: #EAB308;
          background: #FFFDF5;
        }

        /* Hero Graphic Stage */
        .gd-hero-graphic-stage {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .gd-graphic-glow {
          position: absolute;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(234, 179, 8, 0.22) 0%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
        }

        .gd-hero-img-wrap {
          position: relative;
          z-index: 2;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 20px 48px rgba(17, 25, 102, 0.08);
          max-width: 440px;
          width: 100%;
          text-align: center;
        }

        .gd-hero-img {
          width: 100%;
          height: auto;
          max-height: 340px;
          object-fit: contain;
          display: block;
          margin: 0 auto 16px;
        }

        .gd-tools-badge-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          padding-top: 14px;
          border-top: 1px solid #EEF2F6;
        }

        .gd-tool-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          color: #111966;
          background: #F5F5F5;
          padding: 4px 10px;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
        }

        /* ── Stats Bar ── */
        .gd-stats-sec {
          background: #FFFFFF;
          padding: clamp(40px, 5vw, 60px) 0;
          border-bottom: 1px solid #EEF2F6;
        }

        .gd-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .gd-stat-card {
          text-align: center;
          padding: 24px 16px;
          background: linear-gradient(180deg, #090e38 0%, #111966 25%, #0b1145 100%);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
        }

        .gd-stat-num {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: clamp(28px, 3.2vw, 40px);
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 6px;
        }

        .gd-stat-label {
          font-size: 13.5px;
          color: #D8DCF2;
        }

        /* ── Sticky Feature Section (Juxify Style) ── */
        .gd-sticky-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #FCFCFD;
          border-bottom: 1px solid #EEF2F6;
        }

        .gd-sticky-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: clamp(40px, 6vw, 80px);
        }

        .gd-sticky-left {
          position: sticky;
          top: 120px;
          align-self: flex-start;
        }

        .gd-sticky-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: clamp(30px, 3.6vw, 46px);
          font-weight: 700;
          color: #111966;
          line-height: 1.2;
          margin: 0 0 20px;
        }

        .gd-sticky-p {
          font-size: 16px;
          line-height: 1.7;
          color: #202938;
          margin-bottom: 20px;
        }

        .gd-feature-cards {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .gd-feature-card {
          position: relative;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 36px 32px;
          transition: background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .gd-feature-card::before {
          content: "";
          position: absolute;
          width: 250px;
          height: 44px;
          border-radius: 9999px;
          background: #fff37e !important;
          top: 14%;
          right: -45px;
          transform: rotate(-35deg);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
          z-index: 1;
        }

        .gd-feature-card::after {
          content: "";
          position: absolute;
          width: 170px;
          height: 38px;
          border-radius: 9999px;
          background: #fff37e !important;
          top: 42%;
          right: -25px;
          transform: rotate(-35deg);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
          z-index: 1;
        }

        .gd-feature-card:hover {
          background: var(--brand-hover-yellow) !important;
          border-color: #EAB308 !important;
          transform: none !important;
          box-shadow: 0 14px 34px rgba(234, 179, 8, 0.22), 0 4px 12px rgba(17, 25, 102, 0.06) !important;
        }

        .gd-feature-card:hover::before,
        .gd-feature-card:hover::after {
          opacity: 1;
        }

        .gd-feature-card > * {
          position: relative;
          z-index: 2;
        }

        .gd-card-tag {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #111966;
          background: #FAF8F5;
          border: 1px solid rgba(234, 179, 8, 0.35);
          border-radius: 20px;
          padding: 4px 12px;
          margin-bottom: 16px;
        }

        .gd-card-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 24px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 12px;
        }

        .gd-card-desc {
          font-size: 15px;
          line-height: 1.65;
          color: #202938;
          margin: 0 0 20px;
        }

        .gd-card-action {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #111966;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .gd-card-action:hover {
          color: #B45309;
          gap: 12px;
        }

        /* ── Full Capabilities Grid ── */
        .gd-cap-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #FFFFFF;
          border-bottom: 1px solid #EEF2F6;
        }

        .gd-cap-head {
          text-align: center;
          max-width: 780px;
          margin: 0 auto clamp(40px, 5vw, 64px);
        }

        .gd-cap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .gd-cap-card {
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 32px 28px;
          transition: all 0.3s ease;
        }

        .gd-cap-card:hover {
          border-color: #EAB308;
          background: var(--brand-hover-yellow);
          transform: none;
          box-shadow: 0 14px 32px rgba(17, 25, 102, 0.06);
        }

        .gd-cap-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: #FFFFFF;
          border: 1px solid rgba(234, 179, 8, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111966;
          margin-bottom: 20px;
        }

        .gd-cap-card-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 20px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 12px;
        }

        .gd-cap-card-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: #202938;
          margin: 0;
        }

        /* ── Testimonials Grid ── */
        .gd-test-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #F5F5F5;
          border-bottom: 1px solid #EEF2F6;
        }

        .gd-test-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-top: 48px;
        }

        .gd-test-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
        }

        .gd-test-quote {
          font-family: var(--font-body);
          font-size: 15.5px;
          line-height: 1.7;
          color: #111966;
          margin: 0 0 20px;
          flex-grow: 1;
        }

        .gd-test-author {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 17px;
          font-weight: 700;
          color: #111966;
          margin: 0;
        }

        .gd-test-role {
          font-size: 13px;
          color: #D97706;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .gd-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .gd-hero-tags {
            justify-content: center;
          }
          .gd-btn-group {
            justify-content: center;
          }
          .gd-sticky-grid {
            grid-template-columns: 1fr;
          }
          .gd-sticky-left {
            position: relative;
            top: 0;
            text-align: center;
          }
          .gd-cap-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .gd-test-grid {
            grid-template-columns: 1fr;
          }
          .gd-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .gd-cap-grid {
            grid-template-columns: 1fr;
          }
          .gd-stats-grid {
            grid-template-columns: 1fr;
          }
        }

        /* -- LUXURY SCROLL ANIMATIONS -- */
        @keyframes gdFadeInUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gdFadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes gdFadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes gdSimpleFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        [data-gd-anim] {
          opacity: 0;
          will-change: transform, opacity;
          transition: opacity 0.5s ease;
        }

        .gd-sticky-left[data-gd-anim].gd-visible {
          animation: gdSimpleFade 0.8s ease-out forwards;
        }

        .gd-feature-card[data-gd-anim].gd-visible {
          animation: gdFadeInUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .gd-feature-card[data-gd-anim]:nth-child(1).gd-visible { animation-delay: 0.05s; }
        .gd-feature-card[data-gd-anim]:nth-child(2).gd-visible { animation-delay: 0.2s; }
        .gd-feature-card[data-gd-anim]:nth-child(3).gd-visible { animation-delay: 0.35s; }

        .gd-cap-card[data-gd-anim].gd-visible {
          animation-duration: 0.9s;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          animation-fill-mode: forwards;
        }
        .gd-cap-card[data-gd-anim]:nth-child(odd).gd-visible {
          animation-name: gdFadeInLeft;
        }
        .gd-cap-card[data-gd-anim]:nth-child(even).gd-visible {
          animation-name: gdFadeInRight;
        }
        .gd-cap-card[data-gd-anim]:nth-child(1).gd-visible { animation-delay: 0.05s; }
        .gd-cap-card[data-gd-anim]:nth-child(2).gd-visible { animation-delay: 0.18s; }
        .gd-cap-card[data-gd-anim]:nth-child(3).gd-visible { animation-delay: 0.31s; }
        .gd-cap-card[data-gd-anim]:nth-child(4).gd-visible { animation-delay: 0.44s; }
        .gd-cap-card[data-gd-anim]:nth-child(5).gd-visible { animation-delay: 0.57s; }
        .gd-cap-card[data-gd-anim]:nth-child(6).gd-visible { animation-delay: 0.7s; }

        .gd-test-card[data-gd-anim].gd-visible {
          animation: gdFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .gd-test-card[data-gd-anim]:nth-child(1).gd-visible { animation-delay: 0.05s; }
        .gd-test-card[data-gd-anim]:nth-child(2).gd-visible { animation-delay: 0.22s; }

        .gd-stat-card[data-gd-anim].gd-visible {
          animation: gdFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .gd-stat-card[data-gd-anim]:nth-child(1).gd-visible { animation-delay: 0.05s; }
        .gd-stat-card[data-gd-anim]:nth-child(2).gd-visible { animation-delay: 0.18s; }
        .gd-stat-card[data-gd-anim]:nth-child(3).gd-visible { animation-delay: 0.31s; }
        .gd-stat-card[data-gd-anim]:nth-child(4).gd-visible { animation-delay: 0.44s; }
      `}</style>

      {/* ── 1. Hero Section ── */}
      <section className="gd-hero">
        <div className="gd-hero-ambient" aria-hidden="true" />
        <div className="gd-container">
          <div className="gd-hero-grid">
            <div className="gd-hero-content">
              <div className="gd-eyebrow">
                <Sparkles size={13} style={{ color: '#EAB308' }} />
                <span>GRAPHIC DESIGN AGENCY UK</span>
              </div>

              <h1 className="gd-hero-title">
                Powerful Graphic Designs That{' '}
                <span className="gd-title-highlight">Get Your Brand Noticed</span>
              </h1>

              <p className="gd-hero-desc">
                We deliver professional, creative graphic design services that help your business
                communicate with clarity, consistency, and authority. From digital marketing assets
                to complete brand identity overhauls.
              </p>

              <div className="gd-hero-tags">
                <span className="gd-hero-tag">Figma Visuals</span>
                <span className="gd-hero-tag">Adobe Photoshop</span>
                <span className="gd-hero-tag">Adobe Illustrator</span>
                <span className="gd-hero-tag">Brand Identity</span>
                <span className="gd-hero-tag">Social Creatives</span>
                <span className="gd-hero-tag">Print Collateral</span>
              </div>

              <div className="gd-btn-group">
                <Link href="/contact" className="gd-btn-primary">
                  <span>Get Free Consultation</span>
                  <ArrowRight size={16} strokeWidth={2.2} />
                </Link>
                <a href="#services-detail" className="gd-btn-secondary">
                  <span>Our Creative Services</span>
                </a>
              </div>
            </div>

            {/* Right: Illustration & Tooling Showcase */}
            <div className="gd-hero-graphic-stage">
              <div className="gd-graphic-glow" aria-hidden="true" />
              <div className="gd-hero-img-wrap">
                <Image
                  src="/images/graphics/design-creative.png"
                  alt="Graphic Design & Creative Agency Illustration"
                  width={380}
                  height={420}
                  className="gd-hero-img"
                  priority
                />
                <div className="gd-tools-badge-bar">
                  <span className="gd-tool-chip">Figma</span>
                  <span className="gd-tool-chip">Photoshop</span>
                  <span className="gd-tool-chip">Illustrator</span>
                  <span className="gd-tool-chip">100% Vector</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Stats Bar ── */}
      <section className="gd-stats-sec">
        <div className="gd-container">
          <div className="gd-stats-grid">
            {STATS.map((st, i) => (
              <div key={i} className="gd-stat-card" data-gd-anim>
                <div className="gd-stat-num">{st.num}</div>
                <div className="gd-stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Sticky Two-Column Feature Section ── */}
      <section id="services-detail" className="gd-sticky-sec">
        <div className="gd-container">
          <div className="gd-sticky-grid">
            <div className="gd-sticky-left" data-gd-anim>
              <div className="gd-eyebrow">
                <Palette size={13} style={{ color: '#EAB308' }} />
                <span>CORE SPECIALISATIONS</span>
              </div>
              <h2 className="gd-sticky-title">
                We are your creative graphic design <span className="gd-title-highlight">partner</span>
              </h2>
              <p className="gd-sticky-p">
                Whether you need high-fidelity Figma visual layouts, photo-manipulated marketing banners
                in Photoshop, or infinite-resolution vector assets in Illustrator, our UK design studio delivers.
              </p>
              <Link href="/contact" className="gd-btn-primary" style={{ marginTop: '10px' }}>
                <span>Start Your Creative Project</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="gd-feature-cards">
              {CORE_SERVICES.map((srv, idx) => (
                <div key={idx} className="gd-feature-card" data-gd-anim>
                  <span className="gd-card-tag">{srv.tag}</span>
                  <h3 className="gd-card-title">{srv.title}</h3>
                  <p className="gd-card-desc">{srv.desc}</p>
                  <Link href="/contact" className="gd-card-action">
                    <span>{srv.cta}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Full Capabilities Grid ── */}
      <section className="gd-cap-sec">
        <div className="gd-container">
          <div className="gd-cap-head">
            <div className="gd-eyebrow">
              <Sliders size={13} style={{ color: '#EAB308' }} />
              <span>CREATIVE CAPABILITIES</span>
            </div>
            <h2 className="gd-hero-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>
              Complete Graphic Design Solutions
            </h2>
            <p className="gd-hero-desc">
              Every graphic is custom designed to reinforce your brand presence across all customer touchpoints.
            </p>
          </div>

          <div className="gd-cap-grid">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className="gd-cap-card" data-gd-anim>
                  <div className="gd-cap-icon-box">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="gd-cap-card-title">{cap.title}</h3>
                  <p className="gd-cap-card-desc">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Delivery Principles ── */}
      <section className="gd-test-sec">
        <div className="gd-container">
          <div className="gd-cap-head" style={{ marginBottom: '20px' }}>
            <div className="gd-eyebrow">
              <Award size={13} style={{ color: '#EAB308' }} />
              <span>OUR DELIVERY PRINCIPLES</span>
            </div>
            <h2 className="gd-hero-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>
              Creative work shaped around your brief
            </h2>
          </div>

          <div className="gd-test-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="gd-test-card" data-gd-anim>
                <Quote size={24} style={{ color: '#EAB308', marginBottom: '16px' }} />
                <p className="gd-test-quote">{t.quote}</p>
                <div>
                  <h4 className="gd-test-author">{t.author}</h4>
                  <span className="gd-test-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQs ── */}
      <section className="gd-cap-sec">
        <div className="gd-container">
          <FAQAccordion
            items={FAQS}
            title="Graphic Design Frequently Asked Questions"
            subtitle="Clear answers on file ownership, design revisions, software tooling, and project timelines."
          />
        </div>
      </section>

      {/* ── 7. Closing CTA ── */}
      <section style={{ padding: '0 0 80px 0', background: '#FFFFFF' }}>
        <div className="gd-container">
          <ServiceCTA
            badge="READY TO TRANSFORM YOUR DIGITAL PRESENCE?"
            title="Partner with a Premier UK Graphic Design Agency"
            description="Contact our creative design studio today for a free design audit and estimate. We turn complex business ideas into stunning visual assets."
            primaryBtnText="Get Free Consultation"
            primaryBtnHref="/contact"
          />
        </div>
      </section>
    </div>
  );
}
