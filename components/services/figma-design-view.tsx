'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  Layers,
  Zap,
  CheckCircle2,
  Cpu,
  Monitor,
  Repeat,
  Compass,
  FileCode2,
  Users2,
  Sliders,
  Check,
  Quote,
  Layout,
  MousePointer2,
  Box,
  Split,
  Workflow,
} from 'lucide-react';
import { FAQAccordion, FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const STATS = [
  { num: 'Auto-layout', label: 'Responsive frames and page states' },
  { num: 'Reusable', label: 'Components and variants' },
  { num: 'Dev Mode', label: 'Specs, tokens and handoff notes' },
  { num: 'Review-ready', label: 'Prototypes for stakeholder feedback' },
];

const CORE_SERVICES = [
  {
    tag: 'UI/UX Design',
    title: 'Bespoke Figma UI/UX Design',
    desc: 'We design seamless, high-converting interfaces crafted in Figma that boost user engagement, brand authority, and usability across desktop, tablet, and mobile displays.',
    cta: 'Explore interface design',
  },
  {
    tag: 'Interactive Prototyping',
    title: 'Clickable Prototypes & Micro-Interactions',
    desc: 'We create high-fidelity, clickable Figma prototypes to visualize intricate user flows, test UX logic with real users, and secure stakeholder sign-off prior to code development.',
    cta: 'View prototyping service',
  },
  {
    tag: 'Figma Wireframing',
    title: 'Scalable Low & Mid-Fidelity Wireframes',
    desc: 'We architect structured wireframes that map out content hierarchy, navigation models, and user journeys to eliminate development bottlenecks early in the project.',
    cta: 'Explore wireframing',
  },
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Discovery & Research',
    desc: 'Diving into product briefs, KPIs, user personas, and competitor benchmarks to align every screen layout with measurable commercial outcomes.',
  },
  {
    step: '02',
    title: 'Information Architecture & Wireframes',
    desc: 'Mapping user journeys and low-fidelity greyscale wireframes to rapidly validate functional navigation and content hierarchy.',
  },
  {
    step: '03',
    title: 'UI/UX Design & High-Fidelity Screens',
    desc: 'Transforming validated structures into brand-aligned, modern interfaces with custom design systems, typography scales, and WCAG accessibility standards.',
  },
  {
    step: '04',
    title: 'Clickable Prototyping & Flow Simulation',
    desc: 'Building interactive Figma prototypes with realistic smart-animate transitions to test end-to-end usability and validate assumptions.',
  },
  {
    step: '05',
    title: 'Developer Handoff & Design Systems',
    desc: 'Organizing Figma files into production-ready component libraries with auto-layout, design tokens, and CSS/Swift handoff specifications in Figma Dev Mode.',
  },
];

const FEATURES_GRID = [
  {
    icon: Box,
    title: 'Atomic Design Systems',
    desc: 'Reusable tokens, buttons, form inputs, modals, and navigation bars that scale seamlessly across multiple products and teams.',
  },
  {
    icon: Layout,
    title: 'Responsive Auto-Layout',
    desc: 'Flawlessly configured responsive resizing rules so designs adapt gracefully from 320px mobile screens to 4K ultra-wide monitors.',
  },
  {
    icon: MousePointer2,
    title: 'Realistic Micro-Interactions',
    desc: 'Hover states, active focus indicators, tap interactions, and modal transitions that accurately mimic production code.',
  },
  {
    icon: Split,
    title: 'Component Variants & Properties',
    desc: 'Advanced component properties (boolean, text, instance swap) that keep Figma files clean, lightweight, and intuitive.',
  },
  {
    icon: Workflow,
    title: 'Seamless Collaboration',
    desc: 'Live multiplayer editing, contextual comments, and version history so your product team stays completely in sync.',
  },
  {
    icon: FileCode2,
    title: 'Figma Dev Mode Ready',
    desc: 'Annotated layouts with precise spacing measurements, color variables, typography styles, and exportable assets.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Files are organised around clear pages, reusable components and agreed design tokens.',
    author: 'Structured source files',
    role: 'Figma handoff',
  },
  {
    quote: 'Clickable prototypes help teams review journeys and provide feedback before development.',
    author: 'Reviewable prototypes',
    role: 'Product design',
  },
  {
    quote: 'Responsive layouts account for the different needs of mobile, tablet and desktop screens.',
    author: 'Responsive layouts',
    role: 'Interface design',
  },
  {
    quote: 'Review rounds and developer notes are planned around the project scope and delivery milestones.',
    author: 'Clear review rounds',
    role: 'Project delivery',
  },
];

const FAQS: FAQItem[] = [
  {
    question: 'What is Figma web & mobile design?',
    answer:
      'Figma is the industry-standard collaborative interface design and prototyping tool. It allows designers, developers, and product managers to create, prototype, and inspect digital web and mobile applications in real-time on a single cloud canvas.',
  },
  {
    question: 'How do you structure Figma files for developer handoff?',
    answer:
      'We structure files following best-practice design systems: designated pages for Design Tokens, Component Libraries, User Flows, and Dev-Ready Screens. All components leverage Auto-Layout, standardized padding variables, and Figma Dev Mode annotations.',
  },
  {
    question: 'Is Figma scalable for large, multi-brand enterprise projects?',
    answer:
      'Figma supports shared libraries, branching, variants and design tokens. We organise these features around your team’s workflow to make reviews and updates easier to manage.',
  },
  {
    question: 'How much does a bespoke Figma design project cost?',
    answer:
      'Pricing depends on project scope, screen count, and prototyping depth. We provide fixed-price quotes with transparent deliverables for MVP designs, platform overhauls, or ongoing design system retainers.',
  },
  {
    question: 'Can my engineering team inspect CSS, Swift, and Android values?',
    answer:
      'Figma Dev Mode can show implementation details and design values for handoff. Available code snippets and export options depend on the file setup, permissions and tools used by your team.',
  },
];

export function FigmaDesignView() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fg-visible');
          } else {
            // Re-animate when scrolling back into view
            entry.target.classList.remove('fg-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const els = root.querySelectorAll('[data-fg-anim]');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fg-page-root" ref={rootRef}>
      <style>{`
        .fg-page-root {
          background-color: #FFFFFF;
          color: #191919;
          font-family: var(--font-body), "Cardo", Georgia, serif;
          overflow-x: clip;
        }

        .fg-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3.5vw, 40px);
        }

        /* ── Hero Section (Juxify Inspired) ── */
        .fg-hero {
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 50%, #F5F5F5 100%);
          padding: clamp(60px, 8vw, 110px) 0 clamp(60px, 8vw, 100px);
          overflow: hidden;
        }

        .fg-hero-ambient {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          opacity: 0.16;
          top: -120px;
          right: 5%;
          background: radial-gradient(circle, #EAB308 0%, #111966 80%);
        }

        .fg-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(36px, 5vw, 64px);
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .fg-eyebrow {
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

        .fg-hero-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(34px, 4.2vw, 54px);
          font-weight: 700;
          color: #111966;
          line-height: 1.15;
          letter-spacing: -0.015em;
          margin: 0 0 20px;
        }

        .fg-title-highlight {
          color: var(--brand-blue);
          display: inline-block;
          font-style: italic;
        }

        .fg-hero-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(16px, 1.2vw, 18px);
          line-height: 1.7;
          color: #202938;
          margin: 0 0 24px;
        }

        .fg-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 12px;
          margin-bottom: 32px;
        }

        .fg-hero-tag {
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

        .fg-btn-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .fg-btn-primary {
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

        .fg-btn-primary:hover {
          background: #0c1250;
          box-shadow: 0 8px 24px rgba(17, 25, 102, 0.28);
        }

        .fg-btn-secondary {
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

        .fg-btn-secondary:hover {
          border-color: #EAB308;
          background: #FFFDF5;
        }

        /* Hero Graphic Stage (Figma Workspace Card) */
        .fg-hero-graphic-stage {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .fg-stage-glow {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(234, 179, 8, 0.22) 0%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
        }

        .fg-workspace-card {
          position: relative;
          z-index: 2;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 20px 48px rgba(17, 25, 102, 0.09);
          max-width: 440px;
          width: 100%;
        }

        .fg-card-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid #EEF2F6;
          margin-bottom: 18px;
        }

        .fg-dots {
          display: flex;
          gap: 6px;
        }

        .fg-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #CBD5E1;
        }

        .fg-card-tag {
          font-size: 11px;
          font-weight: 700;
          color: #111966;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .fg-canvas-preview {
          background: #F5F5F5;
          border: 1px solid #EEF2F6;
          border-radius: 12px;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .fg-layer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 12.5px;
          font-weight: 600;
          color: #111966;
        }

        .fg-token-pill {
          font-size: 11px;
          font-weight: 700;
          color: #92400E;
          background: rgba(234, 179, 8, 0.18);
          padding: 2px 8px;
          border-radius: 4px;
        }

        /* ── Stats Bar ── */
        .fg-stats-sec {
          background: #FFFFFF;
          padding: clamp(40px, 5vw, 60px) 0;
          border-bottom: 1px solid #EEF2F6;
        }

        .fg-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .fg-stat-card {
          text-align: center;
          padding: 24px 16px;
          background: linear-gradient(180deg, #090e38 0%, #111966 25%, #0b1145 100%);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
        }

        .fg-stat-num {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: clamp(26px, 2.8vw, 36px);
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 6px;
        }

        .fg-stat-label {
          font-size: 13.5px;
          color: #D8DCF2;
        }

        /* ── Sticky Feature Section ── */
        .fg-sticky-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #FCFCFD;
          border-bottom: 1px solid #EEF2F6;
        }

        .fg-sticky-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: flex-start;
        }

        .fg-sticky-left {
          position: -webkit-sticky;
          position: sticky;
          top: 110px;
          align-self: flex-start;
          height: fit-content;
        }

        .fg-sticky-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: clamp(30px, 3.6vw, 46px);
          font-weight: 700;
          color: #111966;
          line-height: 1.2;
          margin: 0 0 20px;
        }

        .fg-sticky-p {
          font-size: 16px;
          line-height: 1.7;
          color: #202938;
          margin-bottom: 20px;
        }

        .fg-feature-cards {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .fg-feature-card {
          position: relative;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 36px 32px;
          transition: background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .fg-feature-card::before {
          content: "";
          position: absolute;
          width: 250px;
          height: 44px;
          border-radius: 9999px;
          background: #fff37e !important; /* Exact stripes color requested */
          top: 14%;
          right: -45px;
          transform: rotate(-35deg);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
          z-index: 1;
        }

        .fg-feature-card::after {
          content: "";
          position: absolute;
          width: 170px;
          height: 38px;
          border-radius: 9999px;
          background: #fff37e !important; /* Exact stripes color requested */
          top: 42%;
          right: -25px;
          transform: rotate(-35deg);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
          z-index: 1;
        }

        .fg-feature-card:hover {
          background: var(--brand-hover-yellow) !important; /* Exact Card background requested */
          border-color: #EAB308 !important;
          transform: none !important; /* NO SHAKING OR MOVING TEXT */
          box-shadow: 0 14px 34px rgba(234, 179, 8, 0.22), 0 4px 12px rgba(17, 25, 102, 0.06) !important;
        }

        .fg-feature-card:hover::before,
        .fg-feature-card:hover::after {
          opacity: 1;
        }

        .fg-feature-card > * {
          position: relative;
          z-index: 2;
        }

        .fg-feature-tag {
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

        .fg-feature-card:hover .fg-feature-tag {
          background: #111966 !important;
          color: #fff9b3 !important;
          border-color: #111966 !important;
        }

        .fg-feature-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 24px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 12px;
        }

        .fg-feature-desc {
          font-size: 15px;
          line-height: 1.65;
          color: #202938;
          margin: 0 0 20px;
        }

        .fg-feature-card:hover .fg-feature-desc {
          color: #0f172a !important;
        }

        .fg-feature-action {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #111966;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .fg-feature-action:hover {
          color: #B45309;
          gap: 12px;
        }

        /* ── 5-Step Workflow Section (Process) ── */
        .fg-workflow-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #FFFFFF;
          border-bottom: 1px solid #EEF2F6;
        }

        .fg-workflow-head {
          text-align: center;
          max-width: 780px;
          margin: 0 auto clamp(40px, 5vw, 64px);
        }

        .fg-steps-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .fg-step-card {
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .fg-step-card:hover {
          border-color: #EAB308;
          background: var(--brand-hover-yellow);
          transform: none;
          box-shadow: 0 12px 28px rgba(17, 25, 102, 0.06);
        }

        .fg-step-num {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 28px;
          font-weight: 700;
          color: #EAB308;
          margin-bottom: 12px;
        }

        .fg-step-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 17px;
          font-weight: 700;
          color: #111966;
          line-height: 1.35;
          margin: 0 0 10px;
        }

        .fg-step-desc {
          font-size: 13.5px;
          line-height: 1.6;
          color: #202938;
          margin: 0;
        }

        /* ── Features Grid ── */
        .fg-grid-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #F5F5F5;
          border-bottom: 1px solid #EEF2F6;
        }

        .fg-grid-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .fg-grid-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 32px 28px;
          transition: all 0.3s ease;
        }

        .fg-grid-card:hover {
          border-color: #EAB308;
          transform: none;
          box-shadow: 0 14px 32px rgba(17, 25, 102, 0.06);
        }

        .fg-grid-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: #F5F5F5;
          border: 1px solid rgba(234, 179, 8, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111966;
          margin-bottom: 20px;
        }

        .fg-grid-card-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 20px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 12px;
        }

        .fg-grid-card-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: #202938;
          margin: 0;
        }

        /* ── Testimonials ── */
        .fg-test-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #FFFFFF;
          border-bottom: 1px solid #EEF2F6;
        }

        .fg-test-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-top: 48px;
        }

        .fg-test-card {
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .fg-test-card:hover {
          border-color: #EAB308;
          transform: none;
          box-shadow: 0 12px 28px rgba(17, 25, 102, 0.06);
        }

        .fg-test-quote {
          font-family: var(--font-body);
          font-size: 15.5px;
          line-height: 1.7;
          color: #111966;
          margin: 0 0 20px;
          flex-grow: 1;
        }

        .fg-test-author {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 17px;
          font-weight: 700;
          color: #111966;
          margin: 0;
        }

        .fg-test-role {
          font-size: 13px;
          color: #D97706;
          font-weight: 700;
        }

        /* ------------------------------------------------------
           PREMIUM SCROLL ANIMATIONS (LUXURY PACE)
           ------------------------------------------------------ */
        @keyframes fgFadeInUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fgFadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes fgFadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes fgSimpleFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        [data-fg-anim] {
          opacity: 0;
          transition: opacity 0.5s ease;
          will-change: transform, opacity;
        }

        .fg-sticky-left[data-fg-anim].fg-visible {
          animation: fgSimpleFade 0.8s ease-out forwards;
        }

        .fg-feature-card[data-fg-anim].fg-visible {
          animation: fgFadeInUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .fg-feature-card[data-fg-anim]:nth-child(1).fg-visible { animation-delay: 0.05s; }
        .fg-feature-card[data-fg-anim]:nth-child(2).fg-visible { animation-delay: 0.2s; }
        .fg-feature-card[data-fg-anim]:nth-child(3).fg-visible { animation-delay: 0.35s; }
        .fg-feature-card[data-fg-anim]:nth-child(4).fg-visible { animation-delay: 0.5s; }
        .fg-feature-card[data-fg-anim]:nth-child(5).fg-visible { animation-delay: 0.65s; }

        .fg-step-card[data-fg-anim].fg-visible {
          animation: fgFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .fg-step-card[data-fg-anim]:nth-child(1).fg-visible { animation-delay: 0.05s; }
        .fg-step-card[data-fg-anim]:nth-child(2).fg-visible { animation-delay: 0.18s; }
        .fg-step-card[data-fg-anim]:nth-child(3).fg-visible { animation-delay: 0.31s; }
        .fg-step-card[data-fg-anim]:nth-child(4).fg-visible { animation-delay: 0.44s; }
        .fg-step-card[data-fg-anim]:nth-child(5).fg-visible { animation-delay: 0.57s; }

        .fg-grid-card[data-fg-anim].fg-visible {
          animation-duration: 0.95s;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          animation-fill-mode: forwards;
        }
        .fg-grid-card[data-fg-anim]:nth-child(odd).fg-visible {
          animation-name: fgFadeInLeft;
        }
        .fg-grid-card[data-fg-anim]:nth-child(even).fg-visible {
          animation-name: fgFadeInRight;
        }
        .fg-grid-card[data-fg-anim]:nth-child(1).fg-visible { animation-delay: 0.05s; }
        .fg-grid-card[data-fg-anim]:nth-child(2).fg-visible { animation-delay: 0.18s; }
        .fg-grid-card[data-fg-anim]:nth-child(3).fg-visible { animation-delay: 0.31s; }
        .fg-grid-card[data-fg-anim]:nth-child(4).fg-visible { animation-delay: 0.44s; }
        .fg-grid-card[data-fg-anim]:nth-child(5).fg-visible { animation-delay: 0.57s; }
        .fg-grid-card[data-fg-anim]:nth-child(6).fg-visible { animation-delay: 0.7s; }

        .fg-test-card[data-fg-anim].fg-visible {
          animation: fgFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .fg-test-card[data-fg-anim]:nth-child(1).fg-visible { animation-delay: 0.05s; }
        .fg-test-card[data-fg-anim]:nth-child(2).fg-visible { animation-delay: 0.22s; }

        @media (max-width: 1080px) {
          .fg-steps-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .fg-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .fg-hero-tags {
            justify-content: center;
          }
          .fg-btn-group {
            justify-content: center;
          }
          .fg-sticky-grid {
            grid-template-columns: 1fr;
          }
          .fg-sticky-left {
            position: relative;
            top: 0;
            text-align: center;
          }
          .fg-grid-cards {
            grid-template-columns: repeat(2, 1fr);
          }
          .fg-test-grid {
            grid-template-columns: 1fr;
          }
          .fg-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .fg-steps-grid {
            grid-template-columns: 1fr;
          }
          .fg-grid-cards {
            grid-template-columns: 1fr;
          }
          .fg-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ── 1. Hero Section ── */}
      <section className="fg-hero">
        <div className="fg-hero-ambient" aria-hidden="true" />
        <div className="fg-container">
          <div className="fg-hero-grid">
            <div className="fg-hero-content">
              <div className="fg-eyebrow">
                <Sparkles size={13} style={{ color: '#EAB308' }} />
                <span>FIGMA DESIGN &amp; PROTOTYPING AGENCY UK</span>
              </div>

              <h1 className="fg-hero-title">
                We Turn Your Ideas Into{' '}
                <span className="fg-title-highlight">Interactive Interfaces</span>
              </h1>

              <p className="fg-hero-desc">
                From scalable component libraries and auto-layout frames to high-fidelity clickable
                prototypes. We craft clean, developer-ready Figma architectures that accelerate stakeholder
                approvals and engineering sprints.
              </p>

              <div className="fg-hero-tags">
                <span className="fg-hero-tag">Auto-Layout 5.0</span>
                <span className="fg-hero-tag">Design Systems</span>
                <span className="fg-hero-tag">Interactive Prototyping</span>
                <span className="fg-hero-tag">Design Tokens</span>
                <span className="fg-hero-tag">Figma Dev Mode</span>
              </div>

              <div className="fg-btn-group">
                <Link href="/contact" className="fg-btn-primary">
                  <span>Start Your Figma Project</span>
                  <ArrowRight size={16} strokeWidth={2.2} />
                </Link>
                <a href="#figma-workflow" className="fg-btn-secondary">
                  <span>Explore 5-Step Workflow</span>
                </a>
              </div>
            </div>

            {/* Right: Interactive Figma Workspace Canvas Card */}
            <div className="fg-hero-graphic-stage">
              <div className="fg-stage-glow" aria-hidden="true" />
              <div className="fg-workspace-card">
                <div className="fg-card-topbar">
                  <div className="fg-dots">
                    <span className="fg-dot" />
                    <span className="fg-dot" />
                    <span className="fg-dot" />
                  </div>
                  <span className="fg-card-tag">Figma Architecture</span>
                </div>

                <div className="fg-canvas-preview">
                  <div className="fg-layer-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Box size={14} style={{ color: '#EAB308' }} />
                      <span>Component: Navigation/MegaBar</span>
                    </div>
                    <span className="fg-token-pill">Auto-Layout</span>
                  </div>

                  <div className="fg-layer-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Layout size={14} style={{ color: '#111966' }} />
                      <span>Screen: CheckoutFunnel_Mobile</span>
                    </div>
                    <span className="fg-token-pill">390x844</span>
                  </div>

                  <div className="fg-layer-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Zap size={14} style={{ color: '#EAB308' }} />
                      <span>Flow: 1-Click Payment Sheet</span>
                    </div>
                    <span className="fg-token-pill">Smart Animate</span>
                  </div>

                  <div className="fg-layer-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FileCode2 size={14} style={{ color: '#111966' }} />
                      <span>Handoff: Dev Mode Tokens</span>
                    </div>
                    <span className="fg-token-pill">Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Stats Bar ── */}
      <section className="fg-stats-sec">
        <div className="fg-container">
          <div className="fg-stats-grid">
            {STATS.map((st, i) => (
              <div key={i} className="fg-stat-card">
                <div className="fg-stat-num">{st.num}</div>
                <div className="fg-stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Sticky Feature Section ── */}
      <section className="fg-sticky-sec">
        <div className="fg-container">
          <div className="fg-sticky-grid">
            <div className="fg-sticky-left" data-fg-anim>
              <div className="fg-eyebrow">
                <Workflow size={13} style={{ color: '#EAB308' }} />
                <span>FIGMA DESIGN EXCELLENCE</span>
              </div>
              <h2 className="fg-sticky-title">
                Our Figma UI/UX design <span className="fg-title-highlight">services</span>
              </h2>
              <p className="fg-sticky-p">
                We empower startups and enterprises with structured Figma files that make building,
                testing, and launching digital products frictionless.
              </p>
              <Link href="/contact" className="fg-btn-primary" style={{ marginTop: '10px' }}>
                <span>Book Free Figma Audit</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="fg-feature-cards">
              {CORE_SERVICES.map((srv, idx) => (
                <div key={idx} className="fg-feature-card" data-fg-anim>
                  <span className="fg-feature-tag">{srv.tag}</span>
                  <h3 className="fg-feature-title">{srv.title}</h3>
                  <p className="fg-feature-desc">{srv.desc}</p>
                  <Link href="/contact" className="fg-feature-action">
                    <span>{srv.cta}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. 5-Step Workflow Section ── */}
      <section id="figma-workflow" className="fg-workflow-sec">
        <div className="fg-container">
          <div className="fg-workflow-head">
            <div className="fg-eyebrow">
              <Sliders size={13} style={{ color: '#EAB308' }} />
              <span>STEP-BY-STEP METHODOLOGY</span>
            </div>
            <h2 className="fg-hero-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>
              Step-by-Step Figma Workflow
            </h2>
            <p className="fg-hero-desc">
              Our structured five-step methodology supports focused delivery, clear milestones,
              and seamless developer handoff.
            </p>
          </div>

          <div className="fg-steps-grid">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div key={idx} className="fg-step-card" data-fg-anim>
                <div className="fg-step-num">{step.step}</div>
                <h3 className="fg-step-title">{step.title}</h3>
                <p className="fg-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Features Grid ── */}
      <section className="fg-grid-sec">
        <div className="fg-container">
          <div className="fg-workflow-head">
            <div className="fg-eyebrow">
              <Cpu size={13} style={{ color: '#EAB308' }} />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="fg-hero-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>
              Engineered for Enterprise Figma Scale
            </h2>
            <p className="fg-hero-desc">
              From design token systems to complex multi-state component variants.
            </p>
          </div>

          <div className="fg-grid-cards">
            {FEATURES_GRID.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="fg-grid-card" data-fg-anim>
                  <div className="fg-grid-icon-box">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="fg-grid-card-title">{feat.title}</h3>
                  <p className="fg-grid-card-desc">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Delivery Principles ── */}
      <section className="fg-test-sec">
        <div className="fg-container">
          <div className="fg-workflow-head" style={{ marginBottom: '20px' }}>
            <div className="fg-eyebrow">
              <Sparkles size={13} style={{ color: '#EAB308' }} />
              <span>OUR DELIVERY PRINCIPLES</span>
            </div>
            <h2 className="fg-hero-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>
              Designed for clear, collaborative handoff
            </h2>
          </div>

          <div className="fg-test-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="fg-test-card" data-fg-anim>
                <Quote size={24} style={{ color: '#EAB308', marginBottom: '16px' }} />
                <p className="fg-test-quote">{t.quote}</p>
                <div>
                  <h4 className="fg-test-author">{t.author}</h4>
                  <span className="fg-test-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQs ── */}
      <section className="fg-workflow-sec">
        <div className="fg-container">
          <FAQAccordion
            items={FAQS}
            title="Figma Design Frequently Asked Questions"
            subtitle="Answers on auto-layout standards, Dev Mode handoff, design systems, and pricing."
          />
        </div>
      </section>

      {/* ── 8. Closing CTA ── */}
      <section style={{ padding: '0 0 80px 0', background: '#FFFFFF' }}>
        <div className="fg-container">
          <ServiceCTA
            badge="READY TO BRING YOUR PRODUCT TO LIFE?"
            title="Transform Your Product Vision into Production-Ready Figma Files"
            description="Contact our Figma design studio today for a free scoping consultation. We build scalable, high-converting interfaces that your developers and users will love."
            primaryBtnText="Get Free Figma Consultation"
            primaryBtnHref="/contact"
          />
        </div>
      </section>
    </div>
  );
}
