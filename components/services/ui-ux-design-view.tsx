'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Layers,
  Palette,
  Eye,
  ShieldCheck,
  Zap,
  Cpu,
  Monitor,
  Repeat,
  Compass,
  FileCode2,
  Users2,
  TrendingUp,
  Sliders,
  Check,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { FAQAccordion, FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const INDUSTRIES = [
  'Fintech & Banking',
  'Healthcare & MedTech',
  'SaaS & B2B Platforms',
  'E-Commerce & Retail',
  'AI & EdTech',
  'Lifestyle & Fitness',
];

const STATS = [
  { num: 'Research-led', label: 'Product design based on user needs' },
  { num: 'Responsive', label: 'Web and mobile interfaces' },
  { num: 'iOS + Android', label: 'Native platform-ready' },
  { num: 'Goal-focused', label: 'Design decisions tied to product goals' },
];

const CORE_SERVICES = [
  {
    tag: 'New App Design',
    title: 'New Mobile & Web App Design',
    desc: 'Have a breakthrough concept but need to turn it into an intuitive digital experience? We take your product from user research and lo-fi wireframes to high-fidelity UI and developer-ready Figma systems.',
    cta: 'Design my new app',
    badgeBg: 'rgba(17, 25, 102, 0.05)',
  },
  {
    tag: 'App Redesign',
    title: 'App Modernisation & UX Redesign',
    desc: 'Already have an existing app that suffers from friction, drop-offs, or outdated visuals? We conduct rigorous heuristic audits, optimize key checkout and onboarding funnels, and modernize your entire interface.',
    cta: 'Discuss my app redesign',
    badgeBg: 'rgba(234, 179, 8, 0.18)',
  },
  {
    tag: 'Design Systems',
    title: 'Scalable Design Systems & Tokens',
    desc: 'Eliminate design debt with comprehensive component libraries, auto-layout tokens, typography scales, and accessible WCAG color systems built for rapid multi-team product scaling.',
    cta: 'Explore design systems',
    badgeBg: 'rgba(17, 25, 102, 0.05)',
  },
];

const PROCESS_MODULES = [
  {
    title: 'UX Research & User Journeys',
    desc: 'Deep stakeholder interviews, competitor benchmarking, and user persona mapping to understand customer pain points before sketching a single screen.',
    badge: 'Research Phase',
  },
  {
    title: 'Information Architecture & Flows',
    desc: 'Structure complex data and navigation trees into effortless user journeys that minimize cognitive load and friction.',
    badge: 'Architecture',
  },
  {
    title: 'Wireframing & Prototyping',
    desc: 'Rapid low-fidelity and mid-fidelity wireframes that test functional hierarchies and key conversion paths fast.',
    badge: 'Wireframes',
  },
  {
    title: 'High-Fidelity UI Design',
    desc: 'Pixel-perfect, modern interfaces tailored with your brand identity, micro-interactions, and pristine typography.',
    badge: 'UI Design',
  },
  {
    title: 'Interactive Clickable Prototypes',
    desc: 'Validate user journeys with realistic prototypes that mimic production interactions and animations prior to writing code.',
    badge: 'Interactive Flow',
  },
  {
    title: 'Design Systems & UI Tokens',
    desc: 'Complete atomic design libraries in Figma with responsive auto-layout, interactive states, and theme variables.',
    badge: 'Design Systems',
  },
  {
    title: 'Native iOS & Android HIG',
    desc: 'Platform-native patterns adhering strictly to Apple Human Interface Guidelines and Google Material Design 3.',
    badge: 'Native Standards',
  },
  {
    title: 'Developer Handoff & Specs',
    desc: 'Organised Figma files with clean layer structures, design tokens, responsive breakpoints, and export-ready assets.',
    badge: 'Production Ready',
  },
];

const FAQS: FAQItem[] = [
  {
    question: 'What is included in your mobile app UI/UX design service?',
    answer:
      'Our full-cycle service covers user research, journey mapping, wireframing, high-fidelity UI design, interactive prototyping in Figma, custom design systems, and comprehensive developer handoff documentation with exportable assets for both iOS and Android.',
  },
  {
    question: 'How do you design for both iOS and Android platforms?',
    answer:
      'We tailor the user experience to respect each platform’s native conventions: Apple Human Interface Guidelines for iOS (native navigation bars, sheet modals, SF Pro typography) and Material Design 3 for Android (top app bars, floating action buttons, Roboto typography).',
  },
  {
    question: 'How do your design deliverables get handed over to developers?',
    answer:
      'We provide organized Figma files structured with auto-layout, reusable components, variants, design tokens (colors, spacing, typography), interactive prototypes, and CSS/Swift/Kotlin code snippets via Figma Dev Mode so your engineers can start building immediately.',
  },
  {
    question: 'Can you redesign our existing application?',
    answer:
      'Yes. We conduct a thorough UX heuristic audit to uncover drop-off points and accessibility issues, then redesign high-priority user journeys, onboarding flows, and the overall aesthetic to drastically lift engagement and conversion.',
  },
  {
    question: 'What are the typical project timelines for app UI/UX design?',
    answer:
      'A focused MVP app design typically takes 3 to 5 weeks from initial discovery to developer handoff. Larger enterprise applications with complex permissions and 40+ screens take 6 to 10 weeks.',
  },
];

export function UIUXDesignView() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('jux-visible');
          } else {
            entry.target.classList.remove('jux-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    const els = root.querySelectorAll('[data-jux-anim]');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="jux-page-root" ref={rootRef}>
      <style>{`
        .jux-page-root {
          background-color: #FFFFFF;
          color: #191919;
          font-family: var(--font-body), "Cardo", Georgia, serif;
          overflow-x: clip;
        }

        .jux-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3.5vw, 40px);
        }

        /* ── Hero Section (Juxify Inspired) ── */
        .jux-hero {
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 50%, #F5F5F5 100%);
          padding: clamp(60px, 8vw, 110px) 0 clamp(60px, 8vw, 100px);
          overflow: hidden;
        }

        .jux-hero-ambient {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          opacity: 0.18;
          top: -160px;
          right: 5%;
          background: radial-gradient(circle, #EAB308 0%, #111966 80%);
        }

        .jux-hero-ambient-left {
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          opacity: 0.15;
          top: -100px;
          left: -100px;
          background: radial-gradient(circle, #111966 0%, transparent 70%);
        }

        .jux-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(36px, 5vw, 64px);
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .jux-hero-content {
          max-width: 620px;
        }

        .jux-eyebrow {
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

        .jux-hero-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(34px, 4.2vw, 54px);
          font-weight: 700;
          color: #111966;
          line-height: 1.15;
          letter-spacing: -0.015em;
          margin: 0 0 20px;
        }

        .jux-title-highlight {
          color: var(--brand-blue);
          font-style: italic;
          position: relative;
          display: inline-block;
        }

        .jux-hero-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(16px, 1.2vw, 18px);
          line-height: 1.7;
          color: #202938;
          margin: 0 0 24px;
        }

        .jux-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 12px;
          margin-bottom: 32px;
        }

        .jux-hero-tag {
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

        .jux-btn-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .jux-btn-primary {
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

        .jux-btn-primary:hover {
          background: #0c1250;
          box-shadow: 0 8px 24px rgba(17, 25, 102, 0.28);
        }

        .jux-btn-secondary {
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

        .jux-btn-secondary:hover {
          border-color: #EAB308;
          background: #FFFDF5;
        }

        .jux-trust-strip {
          font-family: var(--font-body);
          font-size: 13px;
          color: #526174;
          line-height: 1.5;
        }

        /* ── Right Column: 3-Phone Layered Showcase ── */
        .jux-mockup-stage {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 480px;
          padding: 20px 0;
        }

        .jux-stage-glow {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(234, 179, 8, 0.25) 0%, rgba(17, 25, 102, 0.08) 60%, transparent 80%);
          filter: blur(50px);
          pointer-events: none;
        }

        .jux-phones-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
          max-width: 580px;
        }

        /* Phone 1: Left (Habits App) */
        .jux-phone-card {
          position: relative;
          transition: all 0.4s cubic-bezier(0.2, 0.6, 0.3, 1);
        }

        .jux-phone-left {
          width: 190px;
          transform: translateY(18px) rotate(-6deg) scale(0.92);
          z-index: 2;
          margin-right: -42px;
          filter: drop-shadow(0 16px 28px rgba(17, 25, 102, 0.12));
        }

        .jux-phone-left:hover {
          transform: translateY(6px) rotate(-3deg) scale(0.97);
          z-index: 5;
        }

        /* Phone 2: Center (Doctor App) - Primary Hero Showcase */
        .jux-phone-center {
          width: 230px;
          transform: translateY(-8px) scale(1.05);
          z-index: 4;
          filter: drop-shadow(0 24px 44px rgba(17, 25, 102, 0.2));
        }

        .jux-phone-center:hover {
          transform: translateY(-8px) scale(1.08);
        }

        /* Phone 3: Right (Fitness Trainer App) */
        .jux-phone-right {
          width: 190px;
          transform: translateY(22px) rotate(6deg) scale(0.92);
          z-index: 2;
          margin-left: -42px;
          filter: drop-shadow(0 16px 28px rgba(17, 25, 102, 0.12));
        }

        .jux-phone-right:hover {
          transform: translateY(8px) rotate(3deg) scale(0.97);
          z-index: 5;
        }

        .jux-phone-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 32px;
          box-shadow: 0 0 0 1px rgba(17, 25, 102, 0.08);
        }

        /* Floating Micro-Badges */
        .jux-floating-pill {
          position: absolute;
          background: #FFFFFF;
          border: 1px solid rgba(17, 25, 102, 0.12);
          border-radius: 30px;
          padding: 8px 16px;
          box-shadow: 0 10px 24px rgba(17, 25, 102, 0.1);
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 12.5px;
          font-weight: 700;
          color: #111966;
          z-index: 6;
          backdrop-filter: blur(8px);
          animation: juxFloat 5s ease-in-out infinite alternate;
        }

        .jux-pill-top {
          top: 15px;
          left: -10px;
        }

        .jux-pill-bottom {
          bottom: 15px;
          right: -10px;
          animation-delay: -2.5s;
        }

        @keyframes juxFloat {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-8px);
          }
        }

        /* ── Credibility & Stats Section ── */
        .jux-cred-sec {
          padding: clamp(50px, 6vw, 80px) 0;
          background: #FFFFFF;
          border-bottom: 1px solid #EEF2F6;
        }

        .jux-cred-head {
          text-align: center;
          max-width: 820px;
          margin: 0 auto clamp(36px, 4vw, 50px);
        }

        .jux-cred-subtitle {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: clamp(26px, 3.2vw, 38px);
          font-weight: 700;
          color: #111966;
          margin: 0 0 12px;
        }

        .jux-cred-desc {
          font-size: 16px;
          color: #526174;
          line-height: 1.65;
          margin: 0 0 24px;
        }

        .jux-industries-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 14px;
        }

        .jux-ind-pill {
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 6px 16px;
          font-size: 13.5px;
          font-weight: 700;
          color: #111966;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .jux-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 48px;
        }

        .jux-stat-card {
          text-align: center;
          padding: 24px 16px;
          background: linear-gradient(180deg, #090e38 0%, #111966 25%, #0b1145 100%);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .jux-stat-card:hover {
          transform: none;
          border-color: #EAB308;
        }

        .jux-stat-number {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: clamp(28px, 3.2vw, 40px);
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.1;
          margin-bottom: 8px;
        }

        .jux-stat-label {
          font-size: 13.5px;
          color: #D8DCF2;
          line-height: 1.4;
        }

        /* ── Sticky Two-Column Feature Section ── */
        .jux-sticky-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #FCFCFD;
          border-bottom: 1px solid #EEF2F6;
        }

        .jux-sticky-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: clamp(40px, 6vw, 80px);
        }

        .jux-sticky-left {
          position: sticky;
          top: 120px;
          align-self: flex-start;
        }

        .jux-sticky-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: clamp(30px, 3.6vw, 46px);
          font-weight: 700;
          color: #111966;
          line-height: 1.2;
          margin: 0 0 20px;
        }

        .jux-sticky-p {
          font-size: 16px;
          line-height: 1.7;
          color: #202938;
          margin-bottom: 20px;
        }

        .jux-feature-cards {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .jux-feature-card {
          position: relative;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 36px 32px;
          box-shadow: 0 2px 10px rgba(17, 25, 102, 0.02);
          transition: background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .jux-feature-card::before {
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

        .jux-feature-card::after {
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

        .jux-feature-card:hover {
          background: var(--brand-hover-yellow) !important;
          border-color: #EAB308 !important;
          transform: none !important;
          box-shadow: 0 14px 34px rgba(234, 179, 8, 0.22), 0 4px 12px rgba(17, 25, 102, 0.06) !important;
        }

        .jux-feature-card:hover::before,
        .jux-feature-card:hover::after {
          opacity: 1;
        }

        .jux-feature-card > * {
          position: relative;
          z-index: 2;
        }

        .jux-card-top-tag {
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

        .jux-card-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 24px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 12px;
        }

        .jux-card-desc {
          font-size: 15px;
          line-height: 1.65;
          color: #202938;
          margin: 0 0 20px;
        }

        .jux-card-action {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #111966;
          text-decoration: none;
          transition: color 0.2s ease, gap 0.2s ease;
        }

        .jux-card-action:hover {
          color: #B45309;
          gap: 12px;
        }

        /* ── Full Process Grid (Everything You Need) ── */
        .jux-process-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #FFFFFF;
          border-bottom: 1px solid #EEF2F6;
        }

        .jux-process-head {
          text-align: center;
          max-width: 780px;
          margin: 0 auto clamp(40px, 5vw, 64px);
        }

        .jux-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .jux-process-module {
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .jux-process-module:hover {
          border-color: #EAB308;
          background: #FFFFFF;
          transform: none;
          box-shadow: 0 12px 28px rgba(17, 25, 102, 0.06);
        }

        .jux-mod-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #92400E;
          background: rgba(234, 179, 8, 0.18);
          padding: 3px 10px;
          border-radius: 4px;
          align-self: flex-start;
          margin-bottom: 16px;
        }

        .jux-mod-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 18px;
          font-weight: 700;
          color: #111966;
          line-height: 1.35;
          margin: 0 0 10px;
        }

        .jux-mod-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #202938;
          margin: 0;
        }

        /* ── Platform Comparison (iOS vs Android) ── */
        .jux-platform-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #F5F5F5;
        }

        .jux-platform-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .jux-plat-box {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 36px 32px;
          box-shadow: 0 4px 16px rgba(17, 25, 102, 0.03);
        }

        .jux-plat-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .jux-plat-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          color: #526174;
        }

        .jux-plat-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 26px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 8px;
        }

        .jux-plat-desc {
          font-size: 15px;
          color: #202938;
          line-height: 1.6;
          margin: 0 0 20px;
        }

        .jux-plat-list {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .jux-plat-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14.5px;
          color: #111966;
          font-weight: 600;
        }

        .jux-plat-footer {
          padding-top: 18px;
          border-top: 1px solid #EEF2F6;
          font-size: 13px;
          color: #92400E;
          font-weight: 700;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .jux-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .jux-hero-content {
            margin: 0 auto;
          }
          .jux-hero-tags {
            justify-content: center;
          }
          .jux-btn-group {
            justify-content: center;
          }
          .jux-sticky-grid {
            grid-template-columns: 1fr;
          }
          .jux-sticky-left {
            position: relative;
            top: 0;
            text-align: center;
            margin-bottom: 30px;
          }
          .jux-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .jux-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .jux-phones-wrapper {
            max-width: 340px;
          }
          .jux-phone-left {
            width: 120px;
            margin-right: -24px;
          }
          .jux-phone-center {
            width: 155px;
          }
          .jux-phone-right {
            width: 120px;
            margin-left: -24px;
          }
          .jux-process-grid {
            grid-template-columns: 1fr;
          }
          .jux-platform-grid {
            grid-template-columns: 1fr;
          }
          .jux-stats-grid {
            grid-template-columns: 1fr;
          }
          .jux-floating-pill {
            display: none;
          }
        }

        /* -- LUXURY SCROLL ANIMATIONS -- */
        @keyframes juxFadeInUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes juxFadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes juxFadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes juxSimpleFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        [data-jux-anim] {
          opacity: 0;
          will-change: transform, opacity;
          transition: opacity 0.5s ease;
        }

        .jux-sticky-left[data-jux-anim].jux-visible {
          animation: juxSimpleFade 0.8s ease-out forwards;
        }

        .jux-feature-card[data-jux-anim].jux-visible {
          animation: juxFadeInUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .jux-feature-card[data-jux-anim]:nth-child(1).jux-visible { animation-delay: 0.05s; }
        .jux-feature-card[data-jux-anim]:nth-child(2).jux-visible { animation-delay: 0.2s; }
        .jux-feature-card[data-jux-anim]:nth-child(3).jux-visible { animation-delay: 0.35s; }

        .jux-process-module[data-jux-anim].jux-visible {
          animation: juxFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .jux-process-module[data-jux-anim]:nth-child(1).jux-visible { animation-delay: 0.05s; }
        .jux-process-module[data-jux-anim]:nth-child(2).jux-visible { animation-delay: 0.18s; }
        .jux-process-module[data-jux-anim]:nth-child(3).jux-visible { animation-delay: 0.31s; }
        .jux-process-module[data-jux-anim]:nth-child(4).jux-visible { animation-delay: 0.44s; }
        .jux-process-module[data-jux-anim]:nth-child(5).jux-visible { animation-delay: 0.57s; }
        .jux-process-module[data-jux-anim]:nth-child(6).jux-visible { animation-delay: 0.7s; }
        .jux-process-module[data-jux-anim]:nth-child(7).jux-visible { animation-delay: 0.83s; }
        .jux-process-module[data-jux-anim]:nth-child(8).jux-visible { animation-delay: 0.96s; }

        .jux-plat-box[data-jux-anim]:nth-child(odd).jux-visible {
          animation: juxFadeInLeft 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .jux-plat-box[data-jux-anim]:nth-child(even).jux-visible {
          animation: juxFadeInRight 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .jux-plat-box[data-jux-anim]:nth-child(1).jux-visible { animation-delay: 0.05s; }
        .jux-plat-box[data-jux-anim]:nth-child(2).jux-visible { animation-delay: 0.25s; }

        .jux-stat-card[data-jux-anim].jux-visible {
          animation: juxFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .jux-stat-card[data-jux-anim]:nth-child(1).jux-visible { animation-delay: 0.05s; }
        .jux-stat-card[data-jux-anim]:nth-child(2).jux-visible { animation-delay: 0.18s; }
        .jux-stat-card[data-jux-anim]:nth-child(3).jux-visible { animation-delay: 0.31s; }
        .jux-stat-card[data-jux-anim]:nth-child(4).jux-visible { animation-delay: 0.44s; }
      `}</style>

      {/* ── 1. Hero Section With 3-Phone Mockup Showcase ── */}
      <section className="jux-hero">
        <div className="jux-hero-ambient" aria-hidden="true" />
        <div className="jux-hero-ambient-left" aria-hidden="true" />

        <div className="jux-container">
          <div className="jux-hero-grid">
            {/* Left Content */}
            <div className="jux-hero-content">
              <div className="jux-eyebrow">
                <Sparkles size={13} style={{ color: '#EAB308' }} />
                <span>MOBILE APP &amp; WEB UI/UX DESIGN</span>
              </div>

              <h1 className="jux-hero-title">
                Mobile App Design for Products People{' '}
                <span className="jux-title-highlight">Love to Use</span>
              </h1>

              <p className="jux-hero-desc">
                Design better iOS and Android apps with an experienced UK product design team.
                From UX research and annotated user journeys to polished UI, interactive Figma prototypes,
                and developer-ready handoff files.
              </p>

              <div className="jux-hero-tags">
                <span className="jux-hero-tag">UX Strategy</span>
                <span className="jux-hero-tag">UI Design</span>
                <span className="jux-hero-tag">Native iOS &amp; Android</span>
                <span className="jux-hero-tag">Figma Prototyping</span>
                <span className="jux-hero-tag">Design Systems</span>
              </div>

              <div className="jux-btn-group">
                <Link href="/contact" className="jux-btn-primary">
                  <span>Get a Free Quote</span>
                  <ArrowRight size={16} strokeWidth={2.2} />
                </Link>
                <a href="#process-section" className="jux-btn-secondary">
                  <span>Explore Process</span>
                </a>
              </div>

              <div className="jux-trust-strip">
                Design support for UK startups, health platforms, fintech teams and growing businesses.
              </div>
            </div>

            {/* Right: 3-Phone Layered Mockup Showcase */}
            <div className="jux-mockup-stage">
              <div className="jux-stage-glow" aria-hidden="true" />

              <div className="jux-phones-wrapper">
                {/* Floating Badge Top Left */}
                <div className="jux-floating-pill jux-pill-top">
                  <CheckCircle2 size={15} style={{ color: '#EAB308' }} />
                  <span>Interactive Prototype</span>
                </div>

                {/* Left Phone: Habits App */}
                <div className="jux-phone-card jux-phone-left">
                  <Image
                    src="/images/mockups/habits-app-mockup.png"
                    alt="Habit Tracker Mobile App Design Mockup"
                    width={220}
                    height={460}
                    className="jux-phone-img"
                    priority
                  />
                </div>

                {/* Center Phone: Zest Delivery App (Primary Hero) */}
                <div className="jux-phone-card jux-phone-center">
                  <Image
                    src="/images/mockups/zest-food-mockup.png"
                    alt="Zest Food Delivery Mobile App UI Design"
                    width={260}
                    height={540}
                    className="jux-phone-img"
                    priority
                  />
                </div>

                {/* Right Phone: Fitness Trainer App */}
                <div className="jux-phone-card jux-phone-right">
                  <Image
                    src="/images/mockups/fitness-app-mockup.png"
                    alt="Fitness Trainer Dark Mode Mobile App UI Design"
                    width={220}
                    height={460}
                    className="jux-phone-img"
                    priority
                  />
                </div>

                {/* Floating Badge Bottom Right */}
                <div className="jux-floating-pill jux-pill-bottom">
                  <Zap size={15} style={{ color: '#111966' }} />
                  <span>Developer-Ready Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Industries & Credibility Section (Juxify Style) ── */}
      <section className="jux-cred-sec">
        <div className="jux-container">
          <div className="jux-cred-head">
            <h2 className="jux-cred-subtitle">Local Product Design Partner for the UK &amp; Ireland</h2>
            <p className="jux-cred-desc">
              We work with founders and enterprise engineering teams across London, Manchester, Birmingham,
              and Edinburgh. Real-time collaboration during UK business hours makes communication effortless.
            </p>

            <div className="jux-industries-pills">
              {INDUSTRIES.map((ind, i) => (
                <span key={i} className="jux-ind-pill">
                  <span style={{ color: '#EAB308' }}>•</span>
                  <span>{ind}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="jux-stats-grid">
            {STATS.map((st, i) => (
              <div key={i} className="jux-stat-card" data-jux-anim>
                <div className="jux-stat-number">{st.num}</div>
                <div className="jux-stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Sticky Two-Column Feature Section ── */}
      <section className="jux-sticky-sec">
        <div className="jux-container">
          <div className="jux-sticky-grid">
            {/* Left Sticky Narrative */}
            <div className="jux-sticky-left" data-jux-anim>
              <div className="jux-eyebrow">
                <Users2 size={13} style={{ color: '#EAB308' }} />
                <span>HUMAN-CENTRIC UX</span>
              </div>
              <h2 className="jux-sticky-title">
                Mobile app design that starts with your <span className="jux-title-highlight">users</span>
              </h2>
              <p className="jux-sticky-p">
                A great mobile application is far more than a set of pretty screens. It needs to make complex
                workflows feel intuitive, guide users effortlessly through conversion funnels, and measurably
                advance commercial business goals.
              </p>
              <p className="jux-sticky-p">
                Our senior product designers pair behavioral UX research with cutting-edge interface aesthetics,
                to support retention and help teams test product-market fit earlier.
              </p>
              <Link href="/contact" className="jux-btn-primary" style={{ marginTop: '10px' }}>
                <span>Book Discovery Call</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Stack of Feature Cards */}
            <div className="jux-feature-cards">
              {CORE_SERVICES.map((srv, idx) => (
                <div key={idx} className="jux-feature-card" data-jux-anim>
                  <span className="jux-card-top-tag">{srv.tag}</span>
                  <h3 className="jux-card-title">{srv.title}</h3>
                  <p className="jux-card-desc">{srv.desc}</p>
                  <Link href="/contact" className="jux-card-action">
                    <span>{srv.cta}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Everything You Need (Full Process Grid) ── */}
      <section id="process-section" className="jux-process-sec">
        <div className="jux-container">
          <div className="jux-process-head">
            <div className="jux-eyebrow">
              <Sliders size={13} style={{ color: '#EAB308' }} />
              <span>END-TO-END CAPABILITY</span>
            </div>
            <h2 className="jux-cred-subtitle">Everything You Need to Design Your Digital Product</h2>
            <p className="jux-cred-desc">
              From early product discovery and wireframes to interactive Figma prototypes and production
              developer handoff, we handle the entire UI/UX design lifecycle.
            </p>
          </div>

          <div className="jux-process-grid">
            {PROCESS_MODULES.map((mod, i) => (
              <div key={i} className="jux-process-module" data-jux-anim>
                <span className="jux-mod-badge">{mod.badge}</span>
                <h3 className="jux-mod-title">{mod.title}</h3>
                <p className="jux-mod-desc">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Native Platform Architecture (iOS vs Android) ── */}
      <section className="jux-platform-sec">
        <div className="jux-container">
          <div className="jux-process-head">
            <div className="jux-eyebrow">
              <Smartphone size={13} style={{ color: '#EAB308' }} />
              <span>NATIVE CONVENTIONS</span>
            </div>
            <h2 className="jux-cred-subtitle">Designed for Native iOS &amp; Android</h2>
            <p className="jux-cred-desc">
              Your users expect mobile interactions to feel native to their OS. We design platform-specific
              interfaces that embrace device gestures, haptics, and system navigation.
            </p>
          </div>

          <div className="jux-platform-grid">
            {/* Apple iOS Box */}
            <div className="jux-plat-box" data-jux-anim>
              <div className="jux-plat-head">
                <Smartphone size={28} style={{ color: '#111966' }} />
                <span className="jux-plat-badge">Apple Ecosystem</span>
              </div>
              <h3 className="jux-plat-title">iOS Native Standards</h3>
              <p className="jux-plat-desc">
                Engineered around Apple Human Interface Guidelines and the exacting expectations of iPhone &amp; iPad users.
              </p>
              <ul className="jux-plat-list">
                <li className="jux-plat-item">
                  <Check size={16} strokeWidth={2.8} style={{ color: '#EAB308' }} />
                  <span>SF Pro typography scale &amp; iOS system icon sets</span>
                </li>
                <li className="jux-plat-item">
                  <Check size={16} strokeWidth={2.8} style={{ color: '#EAB308' }} />
                  <span>Native sheet modals, navigation bars &amp; swipe gestures</span>
                </li>
                <li className="jux-plat-item">
                  <Check size={16} strokeWidth={2.8} style={{ color: '#EAB308' }} />
                  <span>Dynamic Island &amp; Live Activity interactive widget specs</span>
                </li>
              </ul>
              <div className="jux-plat-footer">Aligned with Apple Human Interface Guidelines</div>
            </div>

            {/* Android Box */}
            <div className="jux-plat-box" data-jux-anim>
              <div className="jux-plat-head">
                <Cpu size={28} style={{ color: '#EAB308' }} />
                <span className="jux-plat-badge">Google Material 3</span>
              </div>
              <h3 className="jux-plat-title">Android Ecosystem</h3>
              <p className="jux-plat-desc">
                Engineered with Android’s adaptive layouts, diverse screen aspect ratios, and Material Design 3 guidelines.
              </p>
              <ul className="jux-plat-list">
                <li className="jux-plat-item">
                  <Check size={16} strokeWidth={2.8} style={{ color: '#EAB308' }} />
                  <span>Material Design 3 tokens &amp; responsive grid behavior</span>
                </li>
                <li className="jux-plat-item">
                  <Check size={16} strokeWidth={2.8} style={{ color: '#EAB308' }} />
                  <span>Floating Action Buttons (FAB) &amp; bottom navigation bars</span>
                </li>
                <li className="jux-plat-item">
                  <Check size={16} strokeWidth={2.8} style={{ color: '#EAB308' }} />
                  <span>Tested across multi-density displays and foldable form factors</span>
                </li>
              </ul>
              <div className="jux-plat-footer">Aligned with Google Material Design 3</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Interactive FAQ Accordion ── */}
      <section className="jux-process-sec" style={{ background: '#FFFFFF' }}>
        <div className="jux-container">
          <FAQAccordion
            items={FAQS}
            title="UI/UX & Mobile App Design FAQs"
            subtitle="Common questions about our UX research, prototyping fidelity, design systems, and developer handoff."
          />
        </div>
      </section>

      {/* ── 7. High-Converting Closing CTA ── */}
      <section style={{ padding: '0 0 80px 0', background: '#FFFFFF' }}>
        <div className="jux-container">
          <ServiceCTA
            badge="READY TO ELEVATE YOUR PRODUCT?"
            title="Transform Your Product with Thoughtful UI/UX Design"
            description="Book a technical discovery call with our senior product design team in the UK. We'll audit your existing user journeys or map out your new product concept within 48 hours."
            primaryBtnText="Book Free Design Strategy Call"
            primaryBtnHref="/contact"
          />
        </div>
      </section>
    </div>
  );
}
