'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Search,
  Zap,
  Target,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Award,
  Layers,
  MousePointerClick,
  Smartphone,
  ShoppingBag,
  MapPin,
  Mail,
  Users2,
  Check,
  Quote,
  Sliders,
  DollarSign,
  PieChart,
  Eye,
} from 'lucide-react';
import { FAQAccordion, FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const STATS = [
  { num: 'Search', label: 'Google and Microsoft Ads' },
  { num: 'Social', label: 'Meta and paid social campaigns' },
  { num: 'Clear', label: 'Agreed budgets and campaign scope' },
  { num: 'Measured', label: 'Transparent performance reporting' },
];

const PLATFORMS = [
  {
    name: 'Google Ads',
    tag: 'High-Intent Search & Shopping',
    desc: 'Built for active intent searches. We capture ready-to-buy prospects at the exact moment of search with surgical keyword bidding and high-quality score ad copy.',
    accent: '#111966',
  },
  {
    name: 'Bing / Microsoft Ads',
    tag: 'Cost-Effective B2B Search',
    desc: 'Take advantage of lower CPCs and less competition. Bing gives direct access to high-earning corporate professionals and desktop enterprise buyers.',
    accent: '#EAB308',
  },
  {
    name: 'Meta Ads (FB & Instagram)',
    tag: 'Visual & Audience Retargeting',
    desc: 'High-converting social creatives and dynamic product catalogs engineered to drive impulse buys, nurture retargeting audiences, and scale D2C brands.',
    accent: '#111966',
  },
  {
    name: 'Amazon Ads',
    tag: 'E-Commerce Marketplace Scale',
    desc: 'Sponsored Products, Brands, and Display ads that place your SKU catalog directly in front of shoppers with immediate buying intent on Amazon.',
    accent: '#EAB308',
  },
  {
    name: 'LinkedIn Ads',
    tag: 'B2B Enterprise Lead Generation',
    desc: 'Pinpoint decision-makers, C-suite executives, and procurement leaders by job title, company size, and industry with high-ticket B2B campaigns.',
    accent: '#111966',
  },
  {
    name: 'TikTok Ads',
    tag: 'Viral Video & Gen Z Commerce',
    desc: 'High-energy, short-form video ads that hook fast-growing mobile audiences and drive explosive top-of-funnel customer acquisition.',
    accent: '#EAB308',
  },
];

const AD_FORMATS = [
  {
    icon: Search,
    title: 'High-Intent Search Ads',
    desc: 'Appear at the top of Google and Bing for your most profitable commercial keywords, capturing buyers actively looking for your solution.',
  },
  {
    icon: Eye,
    title: 'Google Display Network',
    desc: 'Visual banners reaching prospects across millions of websites, mobile apps, and YouTube placements to build brand dominance and retarget visitors.',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping & Catalogue Ads',
    desc: 'Feature your product images, live pricing, and star ratings directly inside Google Merchant Center search results to drive fast e-commerce purchases.',
  },
  {
    icon: MapPin,
    title: 'GBP / Google Local Ads',
    desc: 'Help local customers find you in Google Maps and top 3-pack local search results, driving direct phone calls, store visits, and bookings.',
  },
  {
    icon: Users2,
    title: 'Lead Generation Form Ads',
    desc: 'Native in-app lead capture forms on Meta, Google, and LinkedIn that collect qualified customer information without landing page drop-off.',
  },
  {
    icon: Mail,
    title: 'Email & In-App Ads',
    desc: 'Custom-targeted ad placements delivered directly inside email platforms and relevant apps based on user demographics and purchase intent.',
  },
];

const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'PPC Audit & Keyword Intelligence',
    desc: 'We conduct a forensic audit of competitor bids, negative keywords, historical Quality Scores, and search intent to uncover high-ROI budget opportunities.',
  },
  {
    step: '02',
    title: 'Campaign Structuring & Setup',
    desc: 'Single-theme ad groups, negative keyword sculpturing, compelling ad copy variations, and custom landing page tracking setup with Google Tag Manager.',
  },
  {
    step: '03',
    title: 'Ongoing LLM Bid & Creative Tuning',
    desc: 'Continuous real-time optimization of smart bidding strategies (Target ROAS, Target CPA), creative A/B testing, and negative keyword expansion.',
  },
  {
    step: '04',
    title: 'Transparent Reporting & Dashboards',
    desc: 'Live real-time dashboards breaking down spend, conversion value, cost per lead, and revenue attribution so you see exactly what every pound yields.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'We set clear campaign goals, review performance data and make changes based on what the results show.',
    author: 'Clear campaign goals',
    role: 'Campaign planning',
  },
  {
    quote: 'Audience and keyword choices are reviewed against the campaign objective and available budget.',
    author: 'Audience-led targeting',
    role: 'Campaign planning',
  },
  {
    quote: 'Ad copy and landing pages are aligned so visitors can find the information promised in an ad.',
    author: 'Relevant landing pages',
    role: 'Creative and UX',
  },
  {
    quote: 'Tracking and reporting are scoped to the events and measures that matter to the business.',
    author: 'Useful measurement',
    role: 'Reporting',
  },
  {
    quote: 'Optimisation priorities are based on observed performance, platform data and agreed goals.',
    author: 'Evidence-led refinement',
    role: 'Ongoing management',
  },
];

const FAQS: FAQItem[] = [
  {
    question: 'How much does your PPC management service cost?',
    answer:
      'We provide transparent monthly management tiers based on your advertising spend and campaign complexity, with zero hidden setup fees or multi-year lock-ins. Ad budgets are paid directly to Google or Meta, so you maintain full control over your finances.',
  },
  {
    question: 'How quickly can we expect conversions from PPC campaigns?',
    answer:
      'Ads can begin receiving impressions and clicks once they are approved and active. Lead volume depends on targeting, budget, landing-page experience and market demand.',
  },
  {
    question: 'What types of PPC services do you provide?',
    answer:
      'We handle complete cross-platform paid advertising: Google Search Ads, Google Shopping / Performance Max, Meta Ads (Facebook & Instagram), Bing Ads, LinkedIn B2B campaigns, TikTok Ads, YouTube video ads, and Local Google Business Profile Ads.',
  },
  {
    question: 'Do I own my ad accounts and data?',
    answer:
      'We can manage campaigns in accounts owned by your business. Account access, permissions and reporting are agreed during onboarding so you retain visibility of campaign activity and data.',
  },
  {
    question: 'Why should we hire a dedicated PPC agency instead of running ads ourselves?',
    answer:
      'An experienced team can help with campaign setup, budget controls, conversion tracking and ongoing optimisation. Results depend on the offer, audience, market, budget and landing-page experience.',
  },
];

export function PPCMarketingView() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ppc-visible');
          } else {
            // Re-animate when scrolling back into view
            entry.target.classList.remove('ppc-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const els = root.querySelectorAll('[data-ppc-anim]');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ppc-page-root" ref={rootRef}>
      <style>{`
        .ppc-page-root {
          background-color: #FFFFFF;
          color: #191919;
          font-family: var(--font-body), "Cardo", Georgia, serif;
          overflow-x: clip;
        }

        .ppc-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3.5vw, 40px);
        }

        /* ── Hero Section (Started from Image 3 as instructed!) ── */
        .ppc-hero {
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 50%, #F5F5F5 100%);
          padding: clamp(60px, 8vw, 110px) 0 clamp(60px, 8vw, 100px);
          overflow: hidden;
        }

        .ppc-hero-glow-right {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          opacity: 0.18;
          top: -120px;
          right: 5%;
          background: radial-gradient(circle, #ffe600 0%, #111966 80%);
        }

        .ppc-hero-glow-left {
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          opacity: 0.12;
          top: -100px;
          left: -100px;
          background: radial-gradient(circle, #111966 0%, transparent 70%);
        }

        .ppc-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(36px, 5vw, 64px);
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .ppc-eyebrow {
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

        .ppc-hero-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(34px, 4.2vw, 54px);
          font-weight: 700;
          color: #111966;
          line-height: 1.15;
          letter-spacing: -0.015em;
          margin: 0 0 20px;
        }

        .ppc-title-highlight {
          color: var(--brand-blue);
          font-style: italic;
          display: inline-block;
        }

        .ppc-hero-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(16px, 1.2vw, 18px);
          line-height: 1.7;
          color: #202938;
          margin: 0 0 24px;
        }

        .ppc-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 12px;
          margin-bottom: 32px;
        }

        .ppc-hero-tag {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 13px;
          font-weight: 700;
          color: #111966;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          padding: 5px 12px;
          border-radius: 6px;
          box-shadow: 0 1px 4px rgba(17, 25, 102, 0.03);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .ppc-btn-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .ppc-btn-primary {
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

        .ppc-btn-primary:hover {
          background: #0c1250;
          box-shadow: 0 8px 24px rgba(17, 25, 102, 0.28);
        }

        .ppc-btn-secondary {
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

        .ppc-btn-secondary:hover {
          border-color: #EAB308;
          background: var(--brand-hover-yellow);
        }

        /* Hero Right Stage: The Exact Laptop from Old Website */
        .ppc-hero-laptop-stage {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .ppc-laptop-glow {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 230, 0, 0.25) 0%, rgba(17, 25, 102, 0.08) 60%, transparent 80%);
          filter: blur(50px);
          pointer-events: none;
        }

        .ppc-laptop-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 480px;
          transition: transform 0.4s cubic-bezier(0.2, 0.6, 0.3, 1);
        }

        .ppc-laptop-wrapper:hover {
          transform: none;
        }

        .ppc-laptop-img {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 20px 40px rgba(17, 25, 102, 0.16));
        }

        /* Floating Telemetry Badges */
        .ppc-floating-badge {
          position: absolute;
          background: #FFFFFF;
          border: 1px solid rgba(17, 25, 102, 0.12);
          border-radius: 12px;
          padding: 10px 16px;
          box-shadow: 0 10px 24px rgba(17, 25, 102, 0.1);
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          color: #111966;
          z-index: 5;
          backdrop-filter: blur(8px);
          animation: ppcFloat 5s ease-in-out infinite alternate;
        }

        .ppc-badge-top {
          top: 10px;
          left: -12px;
        }

        .ppc-badge-bottom {
          bottom: 12px;
          right: -10px;
          animation-delay: -2.5s;
        }

        @keyframes ppcFloat {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-8px);
          }
        }

        /* ── Stats Bar (Blue Footer Style with Yellow Cards & White Text) ── */
        .ppc-stats-sec {
          position: relative;
          background: linear-gradient(180deg, #090e38 0%, #111966 45%, #0b1145 100%);
          padding: clamp(55px, 6.5vw, 85px) 0;
          border-top: 1px solid rgba(234, 179, 8, 0.35);
          border-bottom: 1px solid rgba(234, 179, 8, 0.35);
          overflow: hidden;
        }

        .ppc-stats-ambient-glow {
          position: absolute;
          width: 750px;
          height: 350px;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(250, 204, 21, 0.22) 0%, rgba(234, 179, 8, 0.15) 45%, transparent 70%);
          filter: blur(100px);
          pointer-events: none;
        }

        .ppc-stats-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(16px, 2.5vw, 28px);
        }

        .ppc-stat-card {
          position: relative;
          text-align: center;
          padding: 32px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1.5px solid rgba(250, 204, 21, 0.55);
          border-radius: 18px;
          backdrop-filter: blur(12px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.12);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .ppc-stat-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 15%;
          right: 15%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #FACC15, transparent);
          border-radius: 0 0 4px 4px;
        }

        .ppc-stat-card:hover {
          border-color: var(--brand-hover-yellow);
          background: var(--brand-hover-yellow);
          transform: none;
          box-shadow: 0 18px 40px rgba(17, 25, 102, 0.16), 0 8px 16px rgba(0, 0, 0, 0.18);
        }
        .ppc-stat-card:hover .ppc-stat-num,
        .ppc-stat-card:hover .ppc-stat-label { color: #111966 !important; text-shadow: none; }

        .ppc-stat-num {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: clamp(32px, 3.8vw, 48px);
          font-weight: 700;
          color: #FACC15 !important; /* Bold Luxury Yellow */
          margin-bottom: 8px;
          text-shadow: 0 2px 18px rgba(250, 204, 21, 0.4);
          letter-spacing: -0.01em;
        }

        .ppc-stat-label {
          font-size: 14.5px;
          line-height: 1.55;
          color: #FFFFFF !important; /* Pure White */
          opacity: 0.94;
          font-weight: 500;
        }

        /* ── Platforms Grid ── */
        .ppc-plat-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #FCFCFD;
          border-bottom: 1px solid #EEF2F6;
        }

        .ppc-sec-head {
          text-align: center;
          max-width: 800px;
          margin: 0 auto clamp(40px, 5vw, 64px);
        }

        .ppc-plat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .ppc-plat-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 32px 28px;
          transition: all 0.35s ease;
          display: flex;
          flex-direction: column;
        }

        .ppc-plat-card:hover {
          border-color: #EAB308;
          transform: none;
          box-shadow: 0 16px 36px rgba(17, 25, 102, 0.08);
        }

        .ppc-plat-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7A5B1E;
          background: rgba(234, 179, 8, 0.15);
          padding: 3px 10px;
          border-radius: 4px;
          align-self: flex-start;
          margin-bottom: 16px;
        }

        .ppc-plat-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 22px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 10px;
        }

        .ppc-plat-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: #202938;
          margin: 0;
        }

        /* ── Benefits Section (Images 4 & 5 Embryo Inspired) ── */
        .ppc-benefit-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #FFFFFF;
          border-bottom: 1px solid #EEF2F6;
        }

        .ppc-benefit-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: flex-start;
        }

        .ppc-benefit-left {
          position: -webkit-sticky;
          position: sticky;
          top: 110px;
          align-self: flex-start;
          height: fit-content;
        }

        .ppc-benefit-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: clamp(32px, 3.8vw, 48px);
          font-weight: 700;
          color: #111966;
          line-height: 1.2;
          margin: 0 0 20px;
        }

        .ppc-benefit-p {
          font-size: 16px;
          line-height: 1.7;
          color: #202938;
          margin-bottom: 20px;
        }

        .ppc-benefit-visual {
          margin-top: 28px;
          padding: 24px;
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .ppc-benefit-cards {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .ppc-bcard {
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 36px 32px;
          transition: all 0.35s ease;
        }

        .ppc-bcard:hover {
          background: var(--brand-hover-yellow);
          border-color: #EAB308;
          transform: none;
          box-shadow: 0 16px 36px rgba(17, 25, 102, 0.08);
        }

        .ppc-bcard-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .ppc-bcard-dash {
          width: 24px;
          height: 3px;
          background: #EAB308;
          border-radius: 2px;
        }

        .ppc-bcard-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 24px;
          font-weight: 700;
          color: #111966;
          margin: 0;
        }

        .ppc-bcard-desc {
          font-size: 15.5px;
          line-height: 1.7;
          color: #202938;
          margin: 0 0 18px;
        }

        .ppc-bcard-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ppc-bcard-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14.5px;
          line-height: 1.6;
          color: #111966;
        }

        .ppc-bcard-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #EAB308;
          margin-top: 8px;
          flex-shrink: 0;
        }

        /* ── Ad Formats Grid ── */
        .ppc-formats-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #F5F5F5;
          border-bottom: 1px solid #EEF2F6;
        }

        .ppc-formats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .ppc-format-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 32px 28px;
          transition: all 0.3s ease;
        }

        .ppc-format-card:hover {
          border-color: #EAB308;
          transform: none;
          box-shadow: 0 14px 32px rgba(17, 25, 102, 0.06);
        }

        .ppc-format-icon {
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

        .ppc-format-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 20px;
          font-weight: 700;
          color: #111966;
          margin: 0 0 10px;
        }

        .ppc-format-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: #202938;
          margin: 0;
        }

        /* ── Methodology / Workflow ── */
        .ppc-method-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #FFFFFF;
          border-bottom: 1px solid #EEF2F6;
        }

        .ppc-method-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .ppc-method-card {
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .ppc-method-card:hover {
          border-color: #EAB308;
          background: var(--brand-hover-yellow);
          transform: none;
          box-shadow: 0 12px 28px rgba(17, 25, 102, 0.06);
        }

        .ppc-method-step {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 28px;
          font-weight: 700;
          color: #EAB308;
          margin-bottom: 12px;
        }

        .ppc-method-title {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 18px;
          font-weight: 700;
          color: #111966;
          line-height: 1.35;
          margin: 0 0 10px;
        }

        .ppc-method-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #202938;
          margin: 0;
        }

        /* ── Testimonials ── */
        .ppc-test-sec {
          padding: clamp(70px, 8vw, 110px) 0;
          background: #F5F5F5;
          border-bottom: 1px solid #EEF2F6;
        }

        .ppc-test-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 48px;
        }

        .ppc-test-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .ppc-test-card:hover {
          border-color: #EAB308;
          transform: none;
          box-shadow: 0 12px 28px rgba(17, 25, 102, 0.06);
        }

        .ppc-test-quote {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.7;
          color: #111966;
          margin: 0 0 20px;
          flex-grow: 1;
        }

        .ppc-test-author {
          font-family: "The Seasons", Georgia, serif !important;
          font-size: 17px;
          font-weight: 700;
          color: #111966;
          margin: 0;
        }

        .ppc-test-role {
          font-size: 13px;
          color: #EAB308;
          font-weight: 700;
        }

        /* ------------------------------------------------------
           PREMIUM SCROLL ANIMATIONS & HOVER EFFECTS (LUXURY PACE)
           ------------------------------------------------------ */

        /* Keyframes: Smooth, Stately & Luxury */
        @keyframes ppcFadeInUp {
          from {
            opacity: 0;
            transform: translateY(36px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ppcFadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ppcFadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ppcScaleIn {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(24px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes ppcCountUp {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Base hidden state for ALL animated elements */
        [data-ppc-anim] {
          opacity: 0;
          transition: opacity 0.5s ease;
          will-change: transform, opacity;
        }

        /* ── Stats Cards: smooth count-up entrance (Paced & Graceful) ── */
        .ppc-stat-card[data-ppc-anim].ppc-visible {
          animation: ppcCountUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .ppc-stat-card[data-ppc-anim]:nth-child(1).ppc-visible { animation-delay: 0.05s; }
        .ppc-stat-card[data-ppc-anim]:nth-child(2).ppc-visible { animation-delay: 0.2s; }
        .ppc-stat-card[data-ppc-anim]:nth-child(3).ppc-visible { animation-delay: 0.35s; }
        .ppc-stat-card[data-ppc-anim]:nth-child(4).ppc-visible { animation-delay: 0.5s; }

        /* ── Platform Cards: stately fade-in-up ── */
        .ppc-plat-card[data-ppc-anim].ppc-visible {
          animation: ppcFadeInUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .ppc-plat-card[data-ppc-anim]:nth-child(1).ppc-visible { animation-delay: 0.05s; }
        .ppc-plat-card[data-ppc-anim]:nth-child(2).ppc-visible { animation-delay: 0.18s; }
        .ppc-plat-card[data-ppc-anim]:nth-child(3).ppc-visible { animation-delay: 0.31s; }
        .ppc-plat-card[data-ppc-anim]:nth-child(4).ppc-visible { animation-delay: 0.44s; }
        .ppc-plat-card[data-ppc-anim]:nth-child(5).ppc-visible { animation-delay: 0.57s; }
        .ppc-plat-card[data-ppc-anim]:nth-child(6).ppc-visible { animation-delay: 0.7s; }

        /* ── YELLOW HOVER WITH DIAGONAL STRIPES (Exact Image 1 Reference) ── */
        .ppc-plat-card,
        .ppc-format-card {
          position: relative;
          overflow: hidden;
          transition: background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        /* Diagonal rounded capsule lines from Image 1 */
        .ppc-plat-card::before,
        .ppc-format-card::before {
          content: "";
          position: absolute;
          width: 250px;
          height: 44px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.36);
          top: 14%;
          right: -45px;
          transform: rotate(-35deg);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
          z-index: 1;
        }

        .ppc-plat-card::after,
        .ppc-format-card::after {
          content: "";
          position: absolute;
          width: 170px;
          height: 38px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.36);
          top: 42%;
          right: -25px;
          transform: rotate(-35deg);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
          z-index: 1;
        }

        .ppc-plat-card:hover,
        .ppc-format-card:hover {
          background: var(--brand-hover-yellow) !important; /* Exact Card background requested */
          border-color: #d9cf00 !important;
          transform: none !important; /* NO SHAKING OR MOVING TEXT */
          box-shadow: 0 14px 34px rgba(252, 240, 0, 0.18), 0 4px 12px rgba(17, 25, 102, 0.06) !important;
        }

        .ppc-plat-card:hover::before,
        .ppc-plat-card:hover::after,
        .ppc-format-card:hover::before,
        .ppc-format-card:hover::after {
          opacity: 1;
        }

        .ppc-plat-card > *,
        .ppc-format-card > * {
          position: relative;
          z-index: 2;
        }

        .ppc-plat-card:hover .ppc-plat-tag {
          background: #111966 !important;
          color: #fff9b3 !important;
        }

        .ppc-plat-card:hover .ppc-plat-title,
        .ppc-format-card:hover .ppc-format-title {
          color: #111966 !important;
        }

        .ppc-plat-card:hover .ppc-plat-desc,
        .ppc-format-card:hover .ppc-format-desc {
          color: #0f172a !important;
        }

        .ppc-format-card:hover .ppc-format-icon {
          background: #111966 !important;
          color: #fff9b3 !important;
          border-color: #111966 !important;
        }

        /* ── Benefit Cards (right side): smooth fade-in-up ── */
        .ppc-bcard[data-ppc-anim].ppc-visible {
          animation: ppcFadeInUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .ppc-bcard[data-ppc-anim]:nth-child(1).ppc-visible { animation-delay: 0.05s; }
        .ppc-bcard[data-ppc-anim]:nth-child(2).ppc-visible { animation-delay: 0.22s; }
        .ppc-bcard[data-ppc-anim]:nth-child(3).ppc-visible { animation-delay: 0.38s; }

        /* ── Ad Formats: alternating left/right entrance (Paced & Graceful) ── */
        .ppc-format-card[data-ppc-anim].ppc-visible {
          animation-duration: 0.95s;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          animation-fill-mode: forwards;
        }
        .ppc-format-card[data-ppc-anim]:nth-child(odd).ppc-visible {
          animation-name: ppcFadeInLeft;
        }
        .ppc-format-card[data-ppc-anim]:nth-child(even).ppc-visible {
          animation-name: ppcFadeInRight;
        }
        .ppc-format-card[data-ppc-anim]:nth-child(1).ppc-visible { animation-delay: 0.05s; }
        .ppc-format-card[data-ppc-anim]:nth-child(2).ppc-visible { animation-delay: 0.18s; }
        .ppc-format-card[data-ppc-anim]:nth-child(3).ppc-visible { animation-delay: 0.31s; }
        .ppc-format-card[data-ppc-anim]:nth-child(4).ppc-visible { animation-delay: 0.44s; }
        .ppc-format-card[data-ppc-anim]:nth-child(5).ppc-visible { animation-delay: 0.57s; }
        .ppc-format-card[data-ppc-anim]:nth-child(6).ppc-visible { animation-delay: 0.7s; }

        /* ── Methodology Cards: scale entrance ── */
        .ppc-method-card[data-ppc-anim].ppc-visible {
          animation: ppcScaleIn 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .ppc-method-card[data-ppc-anim]:nth-child(1).ppc-visible { animation-delay: 0.05s; }
        .ppc-method-card[data-ppc-anim]:nth-child(2).ppc-visible { animation-delay: 0.2s; }
        .ppc-method-card[data-ppc-anim]:nth-child(3).ppc-visible { animation-delay: 0.35s; }
        .ppc-method-card[data-ppc-anim]:nth-child(4).ppc-visible { animation-delay: 0.5s; }

        /* ── Testimonial Cards: fade-in-up stagger ── */
        .ppc-test-card[data-ppc-anim].ppc-visible {
          animation: ppcFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .ppc-test-card[data-ppc-anim]:nth-child(1).ppc-visible { animation-delay: 0.05s; }
        .ppc-test-card[data-ppc-anim]:nth-child(2).ppc-visible { animation-delay: 0.18s; }
        .ppc-test-card[data-ppc-anim]:nth-child(3).ppc-visible { animation-delay: 0.31s; }
        .ppc-test-card[data-ppc-anim]:nth-child(4).ppc-visible { animation-delay: 0.44s; }
        .ppc-test-card[data-ppc-anim]:nth-child(5).ppc-visible { animation-delay: 0.57s; }

        /* ── Section Headers: subtle fade-in ── */
        .ppc-sec-head[data-ppc-anim].ppc-visible {
          animation: ppcFadeInUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes ppcSimpleFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Benefit Left Sticky: fade-in without breaking sticky ── */
        .ppc-benefit-left[data-ppc-anim].ppc-visible {
          animation: ppcSimpleFade 0.8s ease-out forwards;
        }

        @media (max-width: 1024px) {
          .ppc-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .ppc-hero-tags {
            justify-content: center;
          }
          .ppc-btn-group {
            justify-content: center;
          }
          .ppc-plat-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ppc-benefit-grid {
            grid-template-columns: 1fr;
          }
          .ppc-benefit-left {
            position: relative;
            top: 0;
            text-align: center;
          }
          .ppc-formats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ppc-method-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ppc-test-grid {
            grid-template-columns: 1fr;
          }
          .ppc-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .ppc-plat-grid {
            grid-template-columns: 1fr;
          }
          .ppc-formats-grid {
            grid-template-columns: 1fr;
          }
          .ppc-method-grid {
            grid-template-columns: 1fr;
          }
          .ppc-stats-grid {
            grid-template-columns: 1fr;
          }
          .ppc-floating-badge {
            display: none;
          }
        }
      `}</style>

      {/* ── 1. Hero Section (Started from Image 3 as instructed!) ── */}
      <section className="ppc-hero">
        <div className="ppc-hero-glow-right" aria-hidden="true" />
        <div className="ppc-hero-glow-left" aria-hidden="true" />

        <div className="ppc-container">
          <div className="ppc-hero-grid">
            {/* Left Content */}
            <div className="ppc-hero-content">
              <div className="ppc-eyebrow">
                <Sparkles size={13} style={{ color: '#EAB308' }} />
                <span>PAY-PER-CLICK MANAGEMENT AGENCY UK</span>
              </div>

              <h1 className="ppc-hero-title">
                Your Premium PPC Services In{' '}
                <span className="ppc-title-highlight">The UK</span>
              </h1>

              <p className="ppc-hero-desc">
                ITBS plans and manages paid campaigns across search and social platforms. We align
                targeting, creative, landing pages and measurement with your audience, budget and
                commercial goals, then report clearly on performance and next steps.
              </p>

              <div className="ppc-hero-tags">
                <span className="ppc-hero-tag">
                  <CheckCircle2 size={14} style={{ color: '#EAB308' }} />
                  Google Ads campaigns
                </span>
                <span className="ppc-hero-tag">
                  <TrendingUp size={14} style={{ color: '#EAB308' }} />
                  Budget and bidding strategy
                </span>
                <span className="ppc-hero-tag">
                  <Target size={14} style={{ color: '#EAB308' }} />
                  Location-aware targeting
                </span>
                <span className="ppc-hero-tag">
                  <ShieldCheck size={14} style={{ color: '#EAB308' }} />
                  Client-owned ad accounts
                </span>
              </div>

              <div className="ppc-btn-group">
                <Link href="/contact" className="ppc-btn-primary">
                  <span>Contact Us</span>
                  <ArrowRight size={16} strokeWidth={2.2} />
                </Link>
                <a href="#benefits" className="ppc-btn-secondary">
                  <span>Explore PPC Benefits</span>
                </a>
              </div>
            </div>

            {/* Right: Exact Laptop Graphic from Old Website */}
            <div className="ppc-hero-laptop-stage">
              <div className="ppc-laptop-glow" aria-hidden="true" />

              <div className="ppc-laptop-wrapper">
                {/* Floating Telemetry Badge Top */}
                <div className="ppc-floating-badge ppc-badge-top">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Measure and refine</span>
                </div>

                <Image
                  src="/images/ppc/premium-ppc-laptop.webp"
                  alt="ITBS Premium PPC Services in the UK Laptop Illustration"
                  width={600}
                  height={450}
                  className="ppc-laptop-img"
                  priority
                />

                {/* Floating Telemetry Badge Bottom */}
                <div className="ppc-floating-badge ppc-badge-bottom">
                  <Award size={15} style={{ color: '#EAB308' }} />
                  <span>Clear performance reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Performance Stats Bar ── */}
      <section className="ppc-stats-sec">
        <div className="ppc-stats-ambient-glow" aria-hidden="true" />
        <div className="ppc-container">
          <div className="ppc-stats-grid">
            {STATS.map((st, i) => (
              <div key={i} className="ppc-stat-card" data-ppc-anim>
                <div className="ppc-stat-num">{st.num}</div>
                <div className="ppc-stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. High-Conversion Platforms Section ── */}
      <section className="ppc-plat-sec">
        <div className="ppc-container">
          <div className="ppc-sec-head" data-ppc-anim>
            <div className="ppc-eyebrow">
              <Target size={13} style={{ color: '#EAB308' }} />
              <span>PLATFORM MASTERY</span>
            </div>
            <h2 className="ppc-hero-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>
              We Run Ads on High Conversion Platforms
            </h2>
            <p className="ppc-hero-desc">
              Benefit from our advanced PPC campaigns optimisation services for maximum results
              on your website. Exceptional return on ad spend each time.
            </p>
          </div>

          <div className="ppc-plat-grid">
            {PLATFORMS.map((plat, idx) => (
              <div key={idx} className="ppc-plat-card" data-ppc-anim>
                <span className="ppc-plat-tag">{plat.tag}</span>
                <h3 className="ppc-plat-title">{plat.name}</h3>
                <p className="ppc-plat-desc">{plat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. How Could PPC Benefit You? (Images 4 & 5 Embryo Inspired) ── */}
      <section id="benefits" className="ppc-benefit-sec">
        <div className="ppc-container">
          <div className="ppc-benefit-grid">
            {/* Left Narrative */}
            <div className="ppc-benefit-left" data-ppc-anim>
              <div className="ppc-eyebrow">
                <BarChart3 size={13} style={{ color: '#EAB308' }} />
                <span>GROWTH STRATEGY</span>
              </div>
              <h2 className="ppc-benefit-title">How Could PPC Benefit You?</h2>
              <p className="ppc-benefit-p">
                One of the main things to think about when deciding to utilise a new marketing
                strategy is how it can benefit your business, and PPC is no exception! It’s an amazing tool
                when put in the right hands, having many decisive advantages over other digital marketing formats.
              </p>
              <p className="ppc-benefit-p">
                If you’re still not convinced, we’ve collated a breakdown of some of the best advantages of PPC.
                If you’d like strategic advice on whether this strategy is right for you, our UK-based PPC
                agency is only a phone call away!
              </p>

              <div className="ppc-benefit-visual">
                <TrendingUp size={28} style={{ color: '#EAB308' }} />
                <div>
                  <div style={{ fontWeight: 700, color: '#111966', fontSize: '15px' }}>
                    Immediate High-Quality Traffic
                  </div>
                  <div style={{ fontSize: '13px', color: '#526174' }}>
                    Scale revenue with controlled cost per acquisition
                  </div>
                </div>
              </div>

              <Link href="/contact" className="ppc-btn-primary" style={{ marginTop: '24px' }}>
                <span>Talk to a PPC Specialist</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Stack of Benefits */}
            <div className="ppc-benefit-cards">
              {/* Benefit 1: Exceptional Targeting */}
              <div className="ppc-bcard" data-ppc-anim>
                <div className="ppc-bcard-header">
                  <span className="ppc-bcard-dash" />
                  <h3 className="ppc-bcard-title">Exceptional Targeting</h3>
                </div>
                <p className="ppc-bcard-desc">
                  Another massive advantage of using PPC is that the system allows for a range of different
                  targeting options, increasing your scope within the marketing world. By using programs like
                  Google Ads, you can send targeted messages to your users through the following channels:
                </p>
                <ul className="ppc-bcard-bullets">
                  <li className="ppc-bcard-item">
                    <span className="ppc-bcard-dot" />
                    <span>
                      <strong>Search:</strong> By utilising the correct keywords within your campaigns, you can target
                      the particular demographics actively searching for your services, capturing high-intent clicks at peak buying interest.
                    </span>
                  </li>
                  <li className="ppc-bcard-item">
                    <span className="ppc-bcard-dot" />
                    <span>
                      <strong>Contextual Targeting:</strong> This form of targeting uses Google AdSense, placing ads
                      across relevant industry websites your audience browses rather than picking sites at random.
                    </span>
                  </li>
                  <li className="ppc-bcard-item">
                    <span className="ppc-bcard-dot" />
                    <span>
                      <strong>Audience &amp; GEO Layering:</strong> Combining postal codes, device preferences, and
                      past browsing behaviors to only show ads to users with the highest probability of converting.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Benefit 2: Complements Other Channels */}
              <div className="ppc-bcard" data-ppc-anim>
                <div className="ppc-bcard-header">
                  <span className="ppc-bcard-dash" />
                  <h3 className="ppc-bcard-title">Complements Other Channels</h3>
                </div>
                <p className="ppc-bcard-desc">
                  Some businesses tend to focus primarily on a single channel. However, this can be a mistake, as a
                  multi-department approach will help you increase traffic and conversions, keeping people coming back for more – such as Organic SEO.
                </p>
                <p className="ppc-bcard-desc">
                  SEO refers to the practice of optimising websites to ensure they rank organically in search engines,
                  building sustainable long-term authority. When combined with immediate PPC placements, your brand dominates
                  both the top ad slots and organic results, capturing maximum market share.
                </p>
              </div>

              {/* Benefit 3: Full Budget Control & Rapid ROI */}
              <div className="ppc-bcard" data-ppc-anim>
                <div className="ppc-bcard-header">
                  <span className="ppc-bcard-dash" />
                  <h3 className="ppc-bcard-title">Predictable Budget &amp; Fast ROI</h3>
                </div>
                <p className="ppc-bcard-desc">
                  You set the daily budget caps and target cost-per-lead. Unlike traditional print or billboard advertising
                  where costs are fixed regardless of outcome, with PPC you only pay when an interested prospect clicks.
                  Every pound is accounted for through live revenue attribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Complete Ad Formats Grid ── */}
      <section className="ppc-formats-sec">
        <div className="ppc-container">
          <div className="ppc-sec-head" data-ppc-anim>
            <div className="ppc-eyebrow">
              <Sliders size={13} style={{ color: '#EAB308' }} />
              <span>DATA-DRIVEN FORMATS</span>
            </div>
            <h2 className="ppc-hero-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>
              Partner With a UK PPC Agency That Runs Data-Driven Ads
            </h2>
            <p className="ppc-hero-desc">
              ITBS provides complete Google Ads &amp; PPC Management services for UK businesses to engage
              customers at every stage of the buying funnel.
            </p>
          </div>

          <div className="ppc-formats-grid">
            {AD_FORMATS.map((fmt, idx) => {
              const Icon = fmt.icon;
              return (
                <div key={idx} className="ppc-format-card" data-ppc-anim>
                  <div className="ppc-format-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="ppc-format-title">{fmt.title}</h3>
                  <p className="ppc-format-desc">{fmt.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. 4-Step Methodology ── */}
      <section className="ppc-method-sec">
        <div className="ppc-container">
          <div className="ppc-sec-head" data-ppc-anim>
            <div className="ppc-eyebrow">
              <Sparkles size={13} style={{ color: '#EAB308' }} />
              <span>OUR STRATEGIC APPROACH</span>
            </div>
            <h2 className="ppc-hero-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>
              Our Best Pay-Per-Click Marketing Approach
            </h2>
            <p className="ppc-hero-desc">
              Our data-driven paid marketing strategies blend smart automation with human expertise.
              Every campaign is strategically engineered to lower acquisition costs and scale conversions.
            </p>
          </div>

          <div className="ppc-method-grid">
            {METHODOLOGY_STEPS.map((m, i) => (
              <div key={i} className="ppc-method-card" data-ppc-anim>
                <div className="ppc-method-step">{m.step}</div>
                <h3 className="ppc-method-title">{m.title}</h3>
                <p className="ppc-method-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Campaign Management Principles ── */}
      <section className="ppc-test-sec">
        <div className="ppc-container">
          <div className="ppc-sec-head" style={{ marginBottom: '20px' }} data-ppc-anim>
            <div className="ppc-eyebrow">
              <Award size={13} style={{ color: '#EAB308' }} />
              <span>MEASURED CAMPAIGN MANAGEMENT</span>
            </div>
            <h2 className="ppc-hero-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>
              A thoughtful approach to campaign management
            </h2>
            <p className="ppc-hero-desc">
              We plan around your objectives, review the evidence and make decisions transparently.
            </p>
          </div>

          <div className="ppc-test-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="ppc-test-card" data-ppc-anim>
                <Quote size={24} style={{ color: '#EAB308', marginBottom: '16px' }} />
                <p className="ppc-test-quote">{t.quote}</p>
                <div>
                  <h4 className="ppc-test-author">{t.author}</h4>
                  <span className="ppc-test-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Interactive FAQ Accordion ── */}
      <section className="ppc-method-sec">
        <div className="ppc-container">
          <FAQAccordion
            items={FAQS}
            title="Pay-Per-Click Marketing Frequently Asked Questions"
            subtitle="Transparent details on ad spend management, campaign setup, conversion tracking, and expected timelines."
          />
        </div>
      </section>

      {/* ── 9. High-Converting Service CTA ── */}
      <section style={{ padding: '0 0 80px 0', background: '#FFFFFF' }}>
        <div className="ppc-container">
          <ServiceCTA
            badge="READY TO SCALE YOUR CONVERSIONS?"
            title="Let’s Launch Your High-Conversion PPC Campaign Today"
            description="We can help align campaign targeting, landing pages and measurement with your goals, budget and timeline."
            primaryBtnText="Get Free PPC Strategy Audit"
            primaryBtnHref="/contact"
          />
        </div>
      </section>
    </div>
  );
}
