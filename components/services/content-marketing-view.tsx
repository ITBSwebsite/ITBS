'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  Compass,
  FileText,
  LayoutTemplate,
  Network,
  PenLine,
  RefreshCw,
  Search,
  Share2,
  Target,
} from 'lucide-react';

const approaches = [
  { icon: Search, title: 'Attract', text: 'Reach the right people through useful, search-aware content.' },
  { icon: BookOpen, title: 'Engage', text: 'Give them clear answers and ideas worth spending time with.' },
  { icon: Target, title: 'Convert', text: 'Help readers understand the next step that makes sense for them.' },
];

const services = [
  { icon: Compass, title: 'Content strategy', text: 'A clear plan shaped by your audience, search opportunities and business goals.' },
  { icon: PenLine, title: 'Blog and article writing', text: 'Useful articles designed to answer real questions and read naturally.' },
  { icon: LayoutTemplate, title: 'Website copywriting', text: 'Clear, purposeful copy for service pages, landing pages and key journeys.' },
  { icon: Network, title: 'Pillar and cluster content', text: 'Related topics organised into a structure that helps readers explore in depth.' },
  { icon: RefreshCw, title: 'Content optimisation', text: 'Review existing pages and identify updates that better meet user needs.' },
  { icon: Share2, title: 'Content distribution', text: 'Prepare content for the channels that fit your audience and communication plan.' },
];

const processSteps = [
  { number: '01', title: 'Research', text: 'We study your audience, competitors and relevant search topics.' },
  { number: '02', title: 'Plan', text: 'We build a topic map and an editorial plan around your priorities.' },
  { number: '03', title: 'Create', text: 'We write, edit and optimise the agreed content for readers and search.' },
  { number: '04', title: 'Improve', text: 'We review available results and identify useful next steps.' },
];

const formats = [
  'Blog posts', 'Landing pages', 'Case studies', 'Guides and eBooks',
  'Email newsletters', 'Social content', 'Infographic copy', 'Video scripts',
];

const reasons = [
  'SEO-aware planning connected to your goals',
  'Research shaped around your audience and subject',
  'Content developed for the agreed brief and brand voice',
  'Clear review steps and reporting, agreed in advance',
];

const faqs = [
  {
    question: 'How often should we publish content?',
    answer: 'It depends on your goals, resources and the amount of useful work your audience needs. We help set a realistic publishing rhythm that your team can maintain, rather than chasing volume for its own sake.',
  },
  {
    question: 'How long until content marketing shows results?',
    answer: 'Timing varies with your starting point, competition, topic and how consistently content is improved and supported. Search visibility can take time to build, so we focus on useful work and clear measurement instead of promising a fixed results date.',
  },
  {
    question: 'Do you only plan the content, or write it too?',
    answer: 'We can discuss planning and content creation as part of your project. The agreed scope can include strategy, briefs, writing, editing and optimisation based on what your team needs.',
  },
  {
    question: 'How do you make sure content is original?',
    answer: 'Content is developed around your agreed brief, audience and point of view. We confirm research sources, review steps and any originality checks as part of the project workflow.',
  },
];

function ContentDashboard() {
  return (
    <div className="cmv-dashboard" data-cmv-reveal aria-hidden="true">
      <div className="cmv-dashboard-head">
        <span className="cmv-window-dots" aria-hidden="true"><i /><i /><i /></span>
        <span>CONTENT WORKSPACE</span>
        <span className="cmv-dashboard-state"><i /> PLAN IN PROGRESS</span>
      </div>
      <div className="cmv-dashboard-search"><Search size={16} aria-hidden="true" /><span>Useful ideas, clearly organised</span><span className="cmv-search-tag">TOPIC MAP</span></div>
      <div className="cmv-dashboard-main">
        <div className="cmv-editorial-list">
          <div className="cmv-editorial-heading"><span>EDITORIAL PLAN</span><span>THIS MONTH</span></div>
          <div className="cmv-editorial-item cmv-editorial-item--active"><span className="cmv-editorial-icon"><FileText size={16} /></span><div><small>GUIDE</small><strong>Choosing the right solution</strong><span className="cmv-editorial-bar"><i /></span></div><span className="cmv-editorial-check"><Check size={13} /></span></div>
          <div className="cmv-editorial-item"><span className="cmv-editorial-icon"><PenLine size={16} /></span><div><small>ARTICLE</small><strong>Questions your customers ask</strong><span className="cmv-editorial-bar"><i /></span></div><span className="cmv-editorial-status">Draft</span></div>
          <div className="cmv-editorial-item"><span className="cmv-editorial-icon"><LayoutTemplate size={16} /></span><div><small>LANDING PAGE</small><strong>A clearer service overview</strong><span className="cmv-editorial-bar"><i /></span></div><span className="cmv-editorial-status">Planned</span></div>
        </div>
        <div className="cmv-insight-card">
          <div className="cmv-insight-top"><span>TOPIC CLUSTER</span><span className="cmv-insight-badge"><Network size={14} /></span></div>
          <div className="cmv-topic-map"><span className="cmv-topic-node cmv-topic-node--main">Core guide</span><i /><div><span>How-to</span><span>Comparison</span><span>FAQ</span></div></div>
          <p>Plan related ideas around one useful subject.</p>
          <svg className="cmv-dashboard-chart" viewBox="0 0 210 67" fill="none" aria-hidden="true"><path className="cmv-chart-area" d="M4 56C23 51 24 43 43 46s24-15 43-12 24 4 42-8 29 7 44-7 22-8 34-15v62H4V56Z" /><path className="cmv-chart-line" d="M4 56C23 51 24 43 43 46s24-15 43-12 24 4 42-8 29 7 44-7 22-8 34-15" /><circle cx="206" cy="4" r="4" /></svg>
          <div className="cmv-chart-labels"><span>Ideas</span><span>Priorities</span><span>Next steps</span></div>
        </div>
      </div>
      <div className="cmv-dashboard-foot"><span><i /> RESEARCH</span><span><i /> EDITORIAL PLAN</span><span><i /> REVIEW</span><strong>ONE CLEAR DIRECTION</strong></div>
    </div>
  );
}

function EditorialIllustration() {
  return (
    <div className="cmv-editorial-visual" data-cmv-reveal aria-hidden="true">
      <div className="cmv-visual-orbit" aria-hidden="true"><i /><i /><i /></div>
      <div className="cmv-planning-board">
        <div className="cmv-board-top"><span className="cmv-board-mark"><BookOpen size={18} /></span><div><small>EDITORIAL DIRECTION</small><strong>Ideas with a purpose</strong></div><span className="cmv-board-menu">•••</span></div>
        <div className="cmv-board-columns"><span>RESEARCH</span><span>PLAN</span><span>CREATE</span></div>
        <div className="cmv-board-row"><span className="cmv-board-dot" /><div><strong>Audience questions</strong><small>Search and customer insight</small></div><span className="cmv-board-pill">Topics</span></div>
        <div className="cmv-board-row"><span className="cmv-board-dot cmv-board-dot--yellow" /><div><strong>Content priorities</strong><small>Effort and business goals</small></div><span className="cmv-board-pill">Briefs</span></div>
        <div className="cmv-board-row"><span className="cmv-board-dot cmv-board-dot--green" /><div><strong>Review and improve</strong><small>Useful next steps</small></div><span className="cmv-board-pill">Learn</span></div>
        <div className="cmv-board-footer"><span /> A practical plan for your team</div>
      </div>
      <div className="cmv-board-stamp"><span>STRATEGY</span><strong>Before<br />volume</strong></div>
    </div>
  );
}

export function ContentMarketingView() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    root.classList.add('cmv-motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('cmv-visible');
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -28px 0px' });
    root.querySelectorAll<HTMLElement>('[data-cmv-reveal]').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="cmv-page" ref={rootRef}>
      <section className="cmv-hero" id="top">
        <div className="cmv-container">
          <nav className="cmv-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/services/seo">SEO &amp; AI Search</Link><span aria-hidden="true">/</span>
            <span aria-current="page">Content Marketing</span>
          </nav>
          <div className="cmv-hero-grid">
            <div className="cmv-hero-copy" data-cmv-reveal>
              <p className="cmv-eyebrow"><span /> CONTENT MARKETING</p>
              <h1>Content that attracts, engages, and <em>converts.</em></h1>
              <p className="cmv-hero-lede">We create strategic content that builds authority, supports organic discovery, and helps readers take their next step.</p>
              <div className="cmv-hero-actions">
                <Link href="/contact" className="cmv-button cmv-button--gold">Discuss your content strategy <ArrowRight size={17} aria-hidden="true" /></Link>
                <a href="#services" className="cmv-button cmv-button--outline">See what we create <ArrowDown size={16} aria-hidden="true" /></a>
              </div>
              <p className="cmv-hero-note"><Check size={15} aria-hidden="true" /> A thoughtful plan built around your audience, priorities and capacity.</p>
            </div>
            <ContentDashboard />
          </div>
          <div className="cmv-hero-foot"><span>STRATEGY FIRST</span><i /><span>USEFUL CONTENT</span><i /><span>MEANINGFUL NEXT STEPS</span></div>
        </div>
      </section>

      <section className="cmv-section cmv-approach" id="approach">
        <div className="cmv-container">
          <header className="cmv-section-heading" data-cmv-reveal>
            <p className="cmv-kicker">OUR APPROACH</p>
            <h2>Content with a purpose</h2>
            <p>Great content is not about publishing more. It is about publishing what your audience searches for, trusts and acts on.</p>
          </header>
          <div className="cmv-approach-grid">
            {approaches.map(({ icon: Icon, title, text }, index) => (
              <article className="cmv-approach-card" key={title} data-cmv-reveal>
                <span className="cmv-approach-icon"><Icon size={23} aria-hidden="true" /></span>
                <span className="cmv-approach-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cmv-section cmv-services" id="services">
        <div className="cmv-container">
          <header className="cmv-section-heading cmv-section-heading--left" data-cmv-reveal>
            <p className="cmv-kicker">WHAT WE DO</p>
            <h2>Our content services</h2>
            <p>From the first topic map to improvements on existing pages, choose the support that fits your plans.</p>
          </header>
          <div className="cmv-services-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article className="cmv-service-card" key={title} data-cmv-reveal>
                <div className="cmv-service-top"><span className="cmv-service-icon"><Icon size={21} aria-hidden="true" /></span><span className="cmv-card-number">0{index + 1}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="cmv-related-link">Refreshing content as part of a site move? <Link href="/services/seo-migration-services">Plan the SEO side of your migration <ArrowRight size={15} aria-hidden="true" /></Link></p>
        </div>
      </section>

      <section className="cmv-section cmv-process" id="process">
        <div className="cmv-container">
          <header className="cmv-section-heading cmv-section-heading--dark" data-cmv-reveal>
            <p className="cmv-kicker">HOW WE WORK</p>
            <h2>Our process</h2>
            <p>A clear path from research to learning what is useful for your audience.</p>
          </header>
          <div className="cmv-process-grid">
            {processSteps.map(({ number, title, text }, index) => (
              <article className="cmv-process-step" key={number} data-cmv-reveal>
                <div className="cmv-process-number"><span>{number}</span><i /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                {index < processSteps.length - 1 && <span className="cmv-process-connector" aria-hidden="true" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cmv-section cmv-formats" id="formats">
        <div className="cmv-container">
          <header className="cmv-section-heading" data-cmv-reveal>
            <p className="cmv-kicker">FORMATS WE CREATE</p>
            <h2>One strategy, many formats</h2>
            <p>We choose formats that fit your audience, message and goals.</p>
          </header>
          <div className="cmv-format-list" aria-label="Content formats">
            {formats.map((format, index) => <span key={format} data-cmv-reveal><i>{String(index + 1).padStart(2, '0')}</i>{format}</span>)}
          </div>
        </div>
      </section>

      <section className="cmv-section cmv-why" id="why-us">
        <div className="cmv-container cmv-why-grid">
          <div className="cmv-why-copy" data-cmv-reveal>
            <p className="cmv-kicker">A PRACTICAL PARTNER</p>
            <h2>Why work with us?</h2>
            <p>Content works best when its purpose is clear. We connect research, editorial choices and the way your business speaks, then keep the work focused on what your team can use.</p>
            <ul className="cmv-reasons">
              {reasons.map((reason) => <li key={reason}><span><Check size={15} aria-hidden="true" /></span>{reason}</li>)}
            </ul>
            <p className="cmv-audit-note">Want to understand existing content opportunities? <Link href="/services/seo-audits">An SEO audit can help identify priorities <ArrowRight size={15} aria-hidden="true" /></Link></p>
          </div>
          <EditorialIllustration />
        </div>
      </section>

      <section className="cmv-section cmv-faq" id="faqs">
        <div className="cmv-container cmv-faq-container">
          <header className="cmv-section-heading" data-cmv-reveal>
            <p className="cmv-kicker">COMMON QUESTIONS</p>
            <h2>FAQs</h2>
            <p>Clear answers to help you decide what kind of content support makes sense.</p>
          </header>
          <div className="cmv-faq-list" data-cmv-reveal>
            {faqs.map(({ question, answer }, index) => {
              const isOpen = activeFaq === index;
              return (
                <article className={`cmv-faq-item${isOpen ? ' is-open' : ''}`} key={question}>
                  <h3>
                    <button type="button" aria-expanded={isOpen} aria-controls={`cmv-faq-answer-${index}`} onClick={() => setActiveFaq(isOpen ? -1 : index)}>
                      <span>{question}</span><span className="cmv-faq-icon" aria-hidden="true"><i /><i /></span>
                    </button>
                  </h3>
                  <div className="cmv-faq-answer" id={`cmv-faq-answer-${index}`} hidden={!isOpen}>
                    <p>{answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cmv-final-cta">
        <div className="cmv-container cmv-final-inner" data-cmv-reveal>
          <p className="cmv-kicker">LET’S MAKE THE NEXT PIECE COUNT</p>
          <h2>Ready to grow with content that works?</h2>
          <p>Tell us what you are aiming for and we’ll discuss a content plan that fits your audience and team.</p>
          <Link href="/contact" className="cmv-button cmv-button--gold">Discuss your content goals <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
