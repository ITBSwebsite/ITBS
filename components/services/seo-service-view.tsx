'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Award, BarChart3, Briefcase, Check, CheckCircle2, ChevronLeft, ChevronRight, Cpu, Eye, Globe,
  HeartPulse, Layers, MapPin, Search, ShieldCheck, ShoppingBag, Sparkles, Store,
  Target, TrendingUp, Users2, Zap,
} from 'lucide-react';
import { FAQAccordion, type FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const SEO_SERVICES = [
  {
    icon: Search,
    title: 'On-page SEO',
    description: 'Improve the pages customers land on with search intent research, clear page structure, useful content, internal links and carefully written metadata.',
    points: ['Keyword and intent mapping', 'Content and metadata', 'Internal linking'],
  },
  {
    icon: Zap,
    title: 'Technical SEO',
    description: 'Make it easier for search engines to crawl, understand and index your website while improving the experience for people using it.',
    points: ['Crawl and indexation fixes', 'Site speed and Core Web Vitals', 'Structured data'],
  },
  {
    icon: TrendingUp,
    title: 'Off-page SEO',
    description: 'Build relevant authority through considered digital PR, quality link opportunities and a clear view of your backlink profile.',
    points: ['Link profile analysis', 'Relevant outreach', 'Brand authority'],
  },
  {
    icon: MapPin,
    title: 'Local SEO',
    description: 'Help nearby customers find and choose your business with stronger local pages, accurate business information and Google Business Profile optimisation.',
    points: ['Google Business Profile', 'Local landing pages', 'Maps and ‘near me’ searches'],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce SEO',
    description: 'Strengthen product and category discovery with a scalable structure, useful product content and technical foundations built for growing catalogues.',
    points: ['Product and category pages', 'Faceted navigation', 'E-commerce structured data'],
  },
];

const PLATFORM_SERVICES = [
  { name: 'WordPress', description: 'Improve site structure, performance, content and schema across your WordPress website.' },
  { name: 'Shopify', description: 'Optimise products, collections, metadata and indexing to support store discovery and sales.' },
  { name: 'Magento', description: 'Tackle large catalogues, complex URLs, technical performance and scalable product architecture.' },
  { name: 'WooCommerce', description: 'Build a stronger product and category structure with better speed, mobile usability and targeting.' },
  { name: 'PrestaShop', description: 'Improve product data, URL rules, technical structure and organic visibility across your catalogue.' },
  { name: 'Wix', description: 'Make the most of Wix with structured content, metadata, mobile improvements and clean indexation.' },
  { name: 'Custom websites', description: 'Shape an SEO plan around your framework, technical stack, site architecture and business goals.' },
];

const SEARCH_MARKETS = [
  { icon: MapPin, title: 'Local SEO & Google Business Profile', description: 'Reach customers in the places you serve through local pages, accurate business details, Maps visibility and relevant nearby searches.' },
  { icon: Target, title: 'National SEO', description: 'Compete across the UK with a focused keyword plan, useful landing pages and authority built around your market.' },
  { icon: Globe, title: 'International & multilingual SEO', description: 'Plan search visibility across countries and languages with market-specific content and a considered technical setup.' },
  { icon: Briefcase, title: 'B2B SEO', description: 'Support longer buying journeys with industry-specific content, technical improvements and pages built around qualified demand.' },
  { icon: Layers, title: 'Enterprise SEO', description: 'Create repeatable SEO frameworks for large websites, multiple locations, broad catalogues and complex teams.' },
  { icon: Users2, title: 'SEO consultancy', description: 'Get expert audits, prioritised recommendations and a practical roadmap your in-house team can act on.' },
];

const INDUSTRIES = [
  { icon: Store, title: 'Real estate', description: 'Help buyers, sellers and tenants discover property services and local listings.' },
  { icon: HeartPulse, title: 'Healthcare', description: 'Improve visibility for clinics and care providers with clear, trustworthy service content.' },
  { icon: Award, title: 'Law firms', description: 'Build stronger practice-area pages, local presence and credibility for competitive legal searches.' },
  { icon: ShieldCheck, title: 'Finance & insurance', description: 'Support high-consideration searches with technically sound pages and credible, useful content.' },
  { icon: Cpu, title: 'SaaS & technology', description: 'Connect product-led searches to feature pages, resources and clear next steps.' },
  { icon: ShoppingBag, title: 'E-commerce', description: 'Help shoppers find products through stronger category, product and technical foundations.' },
];

const SEO_STEPS = [
  { number: '01', label: 'Website SEO Audit', title: 'Website SEO Audit', description: 'Before we touch anything, we complete a deep review of your website, competitors, audience and conversion journey. This gives us a clear view of what is holding organic performance back and where the strongest opportunities are.' },
  { number: '02', label: 'SEO Strategy & Planning', title: 'SEO Strategy & Planning', description: 'We turn the audit into a practical roadmap for keyword architecture, a content calendar, link building and technical priorities, all aligned with your business goals.' },
  { number: '03', label: 'Implementation', title: 'Implementation of SEO Strategies', description: 'Our team puts the plan into action across on-page, technical and off-page SEO. Work can include schema, site speed, crawl and indexation fixes, metadata, internal links and relevant outreach.' },
  { number: '04', label: 'High-Quality Content', title: 'High-Quality SEO Content', description: 'We create and improve blog pillars, service pages and landing content around real search intent. Useful, relevant content helps strengthen topical authority, organic visibility and conversion rates.' },
  { number: '05', label: 'Reporting & Analysis', title: 'Detailed SEO Reporting & Analysis', description: 'We measure rankings, organic traffic, conversions and ROI. Monthly reporting shares clear insights and tests, with an ongoing optimisation backlog focused on your business goals.' },
];

const SEO_BENEFITS = [
  'Reach people already looking for the products or services you provide.',
  'Build useful pages that strengthen trust and make your expertise easier to understand.',
  'Improve the speed, structure and mobile experience of your website.',
  'Create a connected search strategy across organic listings, local results and product discovery.',
  'Use clear reporting to understand progress, opportunities and the next best action.',
];

const WHY_ITBS = [
  { title: 'Honest recommendations', description: 'Clear priorities and realistic expectations, with advice shaped around your business.' },
  { title: 'Measurable progress', description: 'Reporting focused on visibility, useful traffic, enquiries and business outcomes.' },
  { title: 'A strategy made for you', description: 'Research and planning that reflect your goals, audience, competition and resources.' },
  { title: 'Joined-up expertise', description: 'Technical, content and authority work brought together in one practical SEO plan.' },
];

const SEO_FAQS: FAQItem[] = [
  {
    question: 'How much do SEO services cost in the UK?',
    answer: 'SEO costs depend on your website, industry, competition and the work involved. After understanding your goals and reviewing your site, we can recommend a suitable scope and provide clear pricing.',
  },
  {
    question: 'What does your SEO service include?',
    answer: 'Our SEO work can include a technical audit, keyword and search-intent research, on-page optimisation, content planning, local SEO, link building and ongoing performance reporting. The exact mix is based on your needs.',
  },
  {
    question: 'Why choose ITBS as your SEO agency?',
    answer: 'We combine technical SEO, useful content and practical strategy, with transparent communication and reporting. We can also help your brand prepare for changing search behaviour, including answer engines and generative AI results.',
  },
  {
    question: 'How long does SEO take to show results?',
    answer: 'SEO is a long-term investment. Some technical or local improvements may show earlier, while broader ranking and traffic growth often takes several months. Timing depends on your starting point, competition and the work completed.',
  },
  {
    question: 'Do you offer local and e-commerce SEO?',
    answer: 'Yes. We support local visibility, Google Business Profile optimisation and location pages, as well as e-commerce SEO for product pages, category structures, technical health and organic shopping journeys.',
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={light ? 'seo-section-heading seo-section-heading--light' : 'seo-section-heading'} data-seo-anim>
      <span className="seo-kicker">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function SEOServiceView() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeStrategyStep, setActiveStrategyStep] = useState(0);
  const [strategyHovered, setStrategyHovered] = useState(false);
  const [strategyFocused, setStrategyFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const activeStrategy = SEO_STEPS[activeStrategyStep];

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);
    updateMotionPreference();
    motionPreference.addEventListener('change', updateMotionPreference);
    return () => motionPreference.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (strategyHovered || strategyFocused || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActiveStrategyStep((current) => (current + 1) % SEO_STEPS.length);
      }
    }, 2000);
    return () => window.clearInterval(timer);
  }, [activeStrategyStep, prefersReducedMotion, strategyFocused, strategyHovered]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const animatedItems = root.querySelectorAll<HTMLElement>('[data-seo-anim]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animatedItems.forEach((item) => item.classList.add('seo-visible'));
      return;
    }
    root.classList.add('seo-motion-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('seo-visible');
          else entry.target.classList.remove('seo-visible');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    );
    animatedItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="seo-page-root" ref={rootRef}>
      <style>{SEO_STYLES}</style>
      <section className="seo-hero">
        <div className="seo-hero-orb seo-hero-orb--one" aria-hidden="true" />
        <div className="seo-hero-orb seo-hero-orb--two" aria-hidden="true" />
        <div className="seo-container">
          <nav className="seo-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/#solutions">Solutions</Link><span aria-hidden="true">/</span>
            <span aria-current="page">SEO &amp; AI Search</span>
          </nav>
          <div className="seo-hero-grid">
            <div className="seo-hero-copy" data-seo-anim>
              <span className="seo-eyebrow"><span className="seo-eyebrow-dot" />Organic search, built around your goals</span>
              <h1>SEO that brings the right people to <em>your business</em></h1>
              <p className="seo-hero-lede">
                Grow your search visibility with a considered blend of technical SEO, useful content and
                proven optimisation. We help businesses attract qualified visitors and turn more of that
                demand into enquiries and sales.
              </p>
              <div className="seo-hero-actions">
                <Link href="/contact" className="seo-button seo-button--primary">Talk to an SEO specialist <ArrowRight size={17} /></Link>
                <a href="#seo-services" className="seo-button seo-button--quiet">Explore SEO services <span aria-hidden="true">↓</span></a>
              </div>
              <div className="seo-hero-footnote"><CheckCircle2 size={16} aria-hidden="true" /><span>Clear priorities. Practical delivery. Transparent reporting.</span></div>
            </div>
            <div className="seo-hero-visual" data-seo-anim role="img" aria-label="Illustration of an organic search performance dashboard">
              <div className="seo-dashboard">
                <div className="seo-dashboard-top">
                  <div className="seo-window-dots" aria-hidden="true"><i /><i /><i /></div>
                  <span>SEO PERFORMANCE · SAMPLE VIEW</span><span className="seo-dashboard-menu" aria-hidden="true">•••</span>
                </div>
                <div className="seo-search-query"><Search size={16} aria-hidden="true" /><span>Search visibility</span><span className="seo-query-period">Last 12 months</span></div>
                <div className="seo-dashboard-summary">
                  <div><span className="seo-mini-label">Illustrative visibility trend</span><span className="seo-mini-value">Building momentum</span><span className="seo-mini-note"><TrendingUp size={13} /> Organic growth</span></div>
                  <div className="seo-ring" aria-hidden="true"><span><Search size={21} /></span></div>
                </div>
                <div className="seo-chart" aria-hidden="true">
                  <div className="seo-chart-grid"><i /><i /><i /><i /></div>
                  <svg viewBox="0 0 460 135" preserveAspectRatio="none">
                    <defs><linearGradient id="seo-area-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#eab308" stopOpacity=".27" /><stop offset="100%" stopColor="#eab308" stopOpacity="0" /></linearGradient></defs>
                    <path className="seo-chart-area" d="M0,112 C36,108 40,92 78,97 S126,86 153,88 S198,56 232,69 S279,45 310,55 S353,33 385,42 S426,15 460,20 L460,135 L0,135Z" />
                    <path className="seo-chart-line" d="M0,112 C36,108 40,92 78,97 S126,86 153,88 S198,56 232,69 S279,45 310,55 S353,33 385,42 S426,15 460,20" />
                    <circle cx="460" cy="20" r="5" />
                  </svg>
                  <div className="seo-chart-months"><span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>DEC</span></div>
                </div>
                <div className="seo-dashboard-bottom">
                  <div><span className="seo-status-mark"><Check size={12} /></span><span>Technical foundations</span><b>Reviewed</b></div>
                  <div><span className="seo-status-mark seo-status-mark--gold"><Sparkles size={12} /></span><span>Content opportunities</span><b>Prioritised</b></div>
                </div>
              </div>
              <div className="seo-float-card seo-float-card--top"><span className="seo-float-icon"><Target size={16} /></span><span><b>Intent first</b><small>Pages made for real searches</small></span></div>
              <div className="seo-float-card seo-float-card--bottom"><span className="seo-float-icon seo-float-icon--gold"><BarChart3 size={17} /></span><span><b>Progress you can see</b><small>Focused on outcomes that matter</small></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-capability-strip" aria-label="SEO capabilities">
        <div className="seo-container seo-capability-inner">
          <span className="seo-capability-lead">One joined-up search strategy</span>
          <span><Check size={15} /> Technical SEO</span><span><Check size={15} /> Content</span>
          <span><Check size={15} /> Local search</span><span><Check size={15} /> E-commerce</span>
        </div>
      </section>

      <main>
        <section className="seo-services-section" id="seo-services">
          <div className="seo-container">
            <SectionHeading eyebrow="SEO services" title="Everything your search strategy needs to move forward" description="Our SEO services bring technical, content and authority work together, with priorities shaped around your website, audience and business goals." />
            <div className="seo-service-grid">
              {SEO_SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article className="seo-service-card" data-seo-anim key={service.title}>
                    <div className="seo-card-topline"><span>0{index + 1}</span><span className="seo-card-icon"><Icon size={21} /></span></div>
                    <h3>{service.title}</h3><p>{service.description}</p>
                    <ul>{service.points.map((point) => <li key={point}><Check size={14} />{point}</li>)}</ul>
                    <span className="seo-card-accent" aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="seo-platform-section">
          <div className="seo-container">
            <div className="seo-platform-layout">
              <div className="seo-platform-intro" data-seo-anim>
                <span className="seo-kicker">Platform-aware SEO</span>
                <h2>SEO shaped around the platform you use</h2>
                <p>Every platform has its own strengths and technical quirks. We tailor the work to your site structure, catalogue and growth plans, rather than relying on a one-size-fits-all checklist.</p>
                <Link href="/contact" className="seo-text-link">Discuss your website <ArrowRight size={16} /></Link>
              </div>
              <div className="seo-platform-grid">
                {PLATFORM_SERVICES.map((platform, index) => (
                  <article className="seo-platform-card" data-seo-anim key={platform.name}>
                    <span className="seo-platform-index">0{index + 1}</span>
                    <div><h3>{platform.name} SEO</h3><p>{platform.description}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="seo-markets-section">
          <div className="seo-container">
            <SectionHeading eyebrow="Search coverage" title="The right approach for your audience and market" description="From nearby customers to international demand, we plan your search visibility around the people you need to reach." />
            <div className="seo-markets-grid">
              {SEARCH_MARKETS.map((market) => {
                const Icon = market.icon;
                return <article className="seo-market-card" data-seo-anim key={market.title}><span className="seo-market-icon"><Icon size={21} /></span><h3>{market.title}</h3><p>{market.description}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section className="seo-industries-section">
          <div className="seo-container">
            <SectionHeading eyebrow="Industry experience" title="SEO services tailored to your industry" description="We adapt search strategy to the way your customers research, compare and choose in your market." light />
            <div className="seo-industry-grid">
              {INDUSTRIES.map((industry) => {
                const Icon = industry.icon;
                return <article className="seo-industry-card" data-seo-anim key={industry.title}><span className="seo-industry-icon"><Icon size={20} /></span><div><h3>{industry.title} SEO</h3><p>{industry.description}</p></div></article>;
              })}
            </div>
          </div>
        </section>

        <section className="seo-process-section">
          <div className="seo-container">
            <SectionHeading eyebrow="Our approach" title="A clear process from audit to ongoing improvement" description="We turn research into a prioritised plan, deliver the work in clear stages and keep refining as your website and market change." />
            <div className="seo-process-grid">
              {SEO_STEPS.map((step) => <article className="seo-process-card" data-seo-anim key={step.number}><span className="seo-step-number">{step.number}</span><span className="seo-step-rule" aria-hidden="true" /><h3>{step.title}</h3><p>{step.description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="seo-strategy-section" aria-labelledby="seo-strategy-heading">
          <div className="seo-container">
            <div className="seo-strategy-heading" data-seo-anim>
              <div className="seo-strategy-title">
                <span className="seo-kicker">Our strategic approach</span>
                <h2 id="seo-strategy-heading">Our Strategic SEO Approach For Higher Rankings</h2>
              </div>
              <div className="seo-strategy-heading-actions">
                <Link className="seo-strategy-quote" href="/contact">Get a Quote <ArrowRight size={16} /></Link>
                <div className="seo-strategy-controls" aria-label="SEO strategy slider controls">
                  <button type="button" aria-label="Previous SEO strategy step" onClick={() => setActiveStrategyStep((current) => (current - 1 + SEO_STEPS.length) % SEO_STEPS.length)}><ChevronLeft size={25} strokeWidth={2.4} /></button>
                  <button type="button" aria-label="Next SEO strategy step" onClick={() => setActiveStrategyStep((current) => (current + 1) % SEO_STEPS.length)}><ChevronRight size={25} strokeWidth={2.4} /></button>
                </div>
              </div>
            </div>

            <div className="seo-strategy-panel">
              <div className="seo-strategy-copy" key={activeStrategy.number}>
                <span className="seo-strategy-number" aria-hidden="true">{activeStrategy.number}</span>
                <span className="seo-strategy-mobile-count">Step {activeStrategy.number} of 05</span>
                <h3>{activeStrategy.title}</h3>
                <p>{activeStrategy.description}</p>
              </div>
              <div
                className="seo-strategy-stage"
                role="region"
                aria-roledescription="carousel"
                aria-label="Five-step SEO strategy"
                onMouseEnter={() => setStrategyHovered(true)}
                onMouseLeave={() => setStrategyHovered(false)}
                onFocusCapture={() => setStrategyFocused(true)}
                onBlurCapture={(event) => {
                  const nextTarget = event.relatedTarget;
                  if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) setStrategyFocused(false);
                }}
              >
                <div className="seo-strategy-labels seo-strategy-labels--left">
                  {[0, 2, 4].map((index) => {
                    const step = SEO_STEPS[index];
                    return <button className={activeStrategyStep === index ? 'seo-strategy-label is-active' : 'seo-strategy-label'} type="button" key={step.number} aria-label={`Show step ${step.number}: ${step.label}`} aria-current={activeStrategyStep === index ? 'step' : undefined} onClick={() => setActiveStrategyStep(index)}><span>{step.number}.</span>{step.label}</button>;
                  })}
                </div>
                <div className="seo-strategy-art" aria-hidden="true">
                  <svg viewBox="0 0 430 430" role="presentation" focusable="false">
                    {SEO_STEPS.map((step, index) => {
                      const top = 23 + index * 76;
                      const points = `215,${top} 390,${top + 33} 215,${top + 66} 40,${top + 33}`;
                      const shadowPoints = `215,${top + 8} 390,${top + 41} 215,${top + 74} 40,${top + 41}`;
                      const isActive = activeStrategyStep === index;
                      return <g key={step.number} className={isActive ? 'seo-strategy-layer is-active' : 'seo-strategy-layer'}><polygon className="seo-strategy-layer-shadow" points={shadowPoints} /><polygon className="seo-strategy-layer-top" points={points} /></g>;
                    })}
                  </svg>
                </div>
                <div className="seo-strategy-labels seo-strategy-labels--right">
                  {[1, 3].map((index) => {
                    const step = SEO_STEPS[index];
                    return <button className={activeStrategyStep === index ? 'seo-strategy-label is-active' : 'seo-strategy-label'} type="button" key={step.number} aria-label={`Show step ${step.number}: ${step.label}`} aria-current={activeStrategyStep === index ? 'step' : undefined} onClick={() => setActiveStrategyStep(index)}><span>{step.number}.</span>{step.label}</button>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="seo-growth-section">
          <div className="seo-container seo-growth-layout">
            <div className="seo-growth-copy" data-seo-anim>
              <span className="seo-kicker">Smarter organic growth</span>
              <h2>More visibility starts with a better experience</h2>
              <p>Strong SEO helps customers find useful answers and helps search engines understand why your pages deserve to be seen. We combine technical improvements with people-first content and credible expertise.</p>
              <ul className="seo-benefit-list">{SEO_BENEFITS.map((benefit) => <li key={benefit}><span><Check size={14} /></span>{benefit}</li>)}</ul>
            </div>
            <div className="seo-ai-card" data-seo-anim>
              <div className="seo-ai-card-head"><span className="seo-ai-icon"><Sparkles size={19} /></span><span><b>Search is evolving</b><small>Built for today&apos;s search journeys</small></span></div>
              <p>We keep your strategy grounded in SEO fundamentals while preparing useful, well-structured content for answer engines and generative search experiences.</p>
              <div className="seo-ai-pill-row"><span>AEO</span><span>GEO</span><span>E-E-A-T</span><span>LLM insights</span></div>
              <div className="seo-ai-feature"><span><Eye size={17} /></span><div><b>Be clear, useful and discoverable</b><small>Help people and search systems understand your expertise.</small></div></div>
              <div className="seo-ai-orbit seo-ai-orbit--one" aria-hidden="true" /><div className="seo-ai-orbit seo-ai-orbit--two" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="seo-why-section">
          <div className="seo-container">
            <SectionHeading eyebrow="Why businesses choose ITBS" title="A trusted SEO partner focused on meaningful progress" description="We bring creativity and data together to help SMEs and growing businesses build a more useful, visible online presence." />
            <div className="seo-why-grid">
              {WHY_ITBS.map((item, index) => <article className="seo-why-card" data-seo-anim key={item.title}><span className="seo-why-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
            </div>
            <div className="seo-tool-note" data-seo-anim><span className="seo-tool-note-icon"><BarChart3 size={19} /></span><p><b>Research backed by the right tools.</b> We use trusted analytics, keyword research and backlink platforms—including Google Analytics, Semrush, Moz and Ahrefs—to inform decisions and measure progress.</p></div>
          </div>
        </section>

        <section className="seo-faq-section">
          <div className="seo-container">
            <FAQAccordion items={SEO_FAQS} title="SEO services: frequently asked questions" subtitle="Straightforward answers about SEO strategy, delivery, timings and what to expect." />
            <ServiceCTA badge="LET’S GROW ORGANICALLY" title="Ready to make search work harder for your business?" description="Speak with our SEO team about your goals. We’ll review the opportunity, share practical next steps and recommend a strategy that fits your business." primaryBtnText="Get a free SEO consultation" primaryBtnHref="/contact" features={['Practical recommendations', 'Clear priorities', 'Transparent reporting', 'UK-focused expertise']} />
          </div>
        </section>
      </main>
    </div>
  );
}

const SEO_STYLES = `
  .seo-page-root { --seo-navy:#111966; --seo-muted:#202938; --seo-gold:#eab308; --seo-yellow:#fcf000; --seo-line:#e3e5ef; color:var(--text-primary); background:#fff; overflow:clip; font-family:var(--font-body),"Cardo",Georgia,serif; }
  .seo-page-root * { box-sizing:border-box; }
  .seo-container { width:min(1240px,calc(100% - 48px)); margin:0 auto; }
  .seo-hero { position:relative; padding:clamp(30px,4vw,52px) 0 clamp(72px,8vw,110px); overflow:hidden; background:linear-gradient(180deg,#fff 0%,#F5F5F5 54%,#F5F5F5 100%); }
  .seo-hero-orb { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); }
  .seo-hero-orb--one { width:430px;height:430px;right:-100px;top:75px;opacity:.28;background:radial-gradient(circle,rgba(252,240,0,.64),rgba(17,25,102,.10) 54%,transparent 72%); }
  .seo-hero-orb--two { width:420px;height:420px;left:-250px;bottom:-220px;opacity:.22;background:radial-gradient(circle,rgba(17,25,102,.28),transparent 70%); }
  .seo-breadcrumb { position:relative;z-index:1;display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:clamp(32px,5vw,58px);color:#73789b;font-size:13px; }
  .seo-breadcrumb a { color:var(--seo-navy);transition:color .2s ease; } .seo-breadcrumb a:hover { color:var(--brand-gold-text); }
  .seo-hero-grid { position:relative;z-index:1;display:grid;grid-template-columns:1.08fr .92fr;gap:clamp(40px,6vw,88px);align-items:center; }
  .seo-hero-copy { max-width:680px; }
  .seo-eyebrow,.seo-kicker { display:inline-flex;align-items:center;gap:9px;color:var(--brand-gold-text);font-size:11px;line-height:1.2;letter-spacing:.17em;text-transform:uppercase;font-weight:700; }
  .seo-eyebrow { padding:9px 14px;margin-bottom:23px;border:1px solid rgba(17,25,102,.12);border-radius:30px;background:rgba(255,255,255,.76);box-shadow:0 4px 14px rgba(17,25,102,.04);letter-spacing:.1em; }
  .seo-eyebrow-dot { width:7px;height:7px;border-radius:50%;background:var(--seo-gold);box-shadow:0 0 0 4px rgba(234,179,8,.15); }
  .seo-hero h1,.seo-section-heading h2,.seo-platform-intro h2,.seo-growth-copy h2 { font-family:"The Seasons",Georgia,"Times New Roman",serif;color:var(--seo-navy);letter-spacing:-.025em; }
  .seo-hero h1 { max-width:700px;margin:0 0 21px;font-size:clamp(39px,5vw,66px);line-height:1.08;font-weight:700; }
  .seo-hero h1 em { color:var(--brand-blue);font-weight:400;text-decoration:none; }
  .seo-hero-lede { max-width:650px;margin:0;color:var(--seo-muted);font-size:clamp(16px,1.35vw,18px);line-height:1.75; }
  .seo-hero-actions { display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-top:30px; }
  .seo-button { min-height:50px;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:0 20px;border-radius:4px;font-size:14px;font-weight:700;transition:background .2s ease,color .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease; }
  .seo-button--primary { color:#fff;background:var(--seo-navy);border:1px solid var(--seo-navy);box-shadow:0 8px 20px rgba(17,25,102,.14); }
  .seo-button--primary:hover { color:var(--seo-navy);background: var(--brand-hover-yellow);border-color:var(--seo-yellow);box-shadow:0 10px 25px rgba(234,179,8,.24);transform:translateY(-2px); }
  .seo-button--quiet { color:var(--seo-navy);border:1px solid rgba(17,25,102,.16);background:rgba(255,255,255,.76); }
  .seo-button--quiet:hover { border-color:var(--seo-gold);background: var(--brand-hover-yellow); }
  .seo-hero-footnote { display:flex;align-items:center;gap:9px;margin-top:25px;color:#656b91;font-size:13px; } .seo-hero-footnote svg { color:#a87f00;flex:none; }
  .seo-hero-visual { position:relative;min-width:0;padding:28px 18px 26px; }
  .seo-dashboard { position:relative;z-index:1;padding:20px 21px 16px;background:rgba(255,255,255,.95);border:1px solid rgba(17,25,102,.11);border-radius:16px;box-shadow:0 28px 75px rgba(17,25,102,.14);transform:perspective(1100px) rotateY(-5deg) rotateX(2deg); }
  .seo-dashboard-top { display:flex;align-items:center;gap:10px;padding-bottom:15px;border-bottom:1px solid #edf0f5;color:#73789b;font-size:9px;letter-spacing:.13em;font-weight:700; }
  .seo-window-dots { display:flex;gap:4px;margin-right:2px; } .seo-window-dots i { width:6px;height:6px;display:block;border-radius:50%;background:#d7dbea; } .seo-window-dots i:first-child { background:#eab308; }
  .seo-dashboard-menu { margin-left:auto;letter-spacing:2px;color:#aeb3ca; }
  .seo-search-query { display:flex;align-items:center;gap:8px;margin:17px 0 18px;padding:9px 11px;border:1px solid #e7e9f1;border-radius:7px;color:#71779a;font-size:11px; } .seo-search-query svg { color:var(--seo-navy); } .seo-query-period { margin-left:auto;color:#9297b2;font-size:9px; }
  .seo-dashboard-summary { display:flex;align-items:center;justify-content:space-between;padding:0 3px 10px; } .seo-dashboard-summary>div:first-child { display:flex;flex-direction:column;gap:6px; }
  .seo-mini-label { color:#898eaa;font-size:10px; } .seo-mini-value { color:var(--seo-navy);font-family:"The Seasons",Georgia,serif;font-size:21px;font-weight:700; } .seo-mini-note { display:inline-flex;align-items:center;gap:4px;color:var(--brand-gold-text);font-size:10px; }
  .seo-ring { display:grid;place-items:center;width:44px;height:44px;border:5px solid #f6e681;border-right-color:#dbe0ee;border-radius:50%; } .seo-ring span { display:grid;place-items:center;color:var(--brand-gold-text); }
  .seo-chart { position:relative;height:142px;padding:2px 0 19px; } .seo-chart-grid { position:absolute;inset:2px 0 24px;display:flex;flex-direction:column;justify-content:space-between; } .seo-chart-grid i { width:100%;border-top:1px dashed #e8eaf2; }
  .seo-chart svg { position:relative;width:100%;height:112px;overflow:visible; } .seo-chart-area { fill:url(#seo-area-fill); } .seo-chart-line { fill:none;stroke:#d2aa00;stroke-width:3;stroke-linecap:round; } .seo-chart circle { fill:var(--seo-yellow);stroke:#fff;stroke-width:3; }
  .seo-chart-months { display:flex;justify-content:space-between;padding:0 1px;color:#969ab2;font-size:8px;letter-spacing:.07em; }
  .seo-dashboard-bottom { display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:14px;border-top:1px solid #edf0f5; }
  .seo-dashboard-bottom>div { display:grid;grid-template-columns:18px 1fr;align-items:center;gap:2px 7px;min-width:0;color:#747a9b;font-size:9px; } .seo-dashboard-bottom b { grid-column:2;color:var(--seo-navy);font-size:9px; }
  .seo-status-mark { grid-row:span 2;display:grid;place-items:center;width:17px;height:17px;color:#fff;border-radius:50%;background:var(--seo-navy); } .seo-status-mark--gold { color:var(--seo-navy);background:var(--seo-yellow); }
  .seo-float-card { position:absolute;z-index:2;display:flex;align-items:center;gap:10px;padding:11px 14px;border:1px solid rgba(17,25,102,.11);border-radius:10px;background:#fff;box-shadow:0 12px 30px rgba(17,25,102,.12); }
  .seo-float-card--top { top:0;right:-3px; } .seo-float-card--bottom { bottom:1px;left:-1px; }
  .seo-float-icon { width:31px;height:31px;display:grid;place-items:center;color:#fff;border-radius:8px;background:var(--seo-navy); } .seo-float-icon--gold { color:var(--seo-navy);background:var(--seo-yellow); }
  .seo-float-card>span:last-child { display:flex;flex-direction:column;gap:3px; } .seo-float-card b { color:var(--seo-navy);font-size:11px; } .seo-float-card small { color:#7d829f;font-size:9px; }
  .seo-capability-strip { background:var(--seo-navy);color:#fff; } .seo-capability-inner { min-height:74px;display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;padding-top:13px;padding-bottom:13px; }
  .seo-capability-lead { color:#f2e9ae;font-family:"The Seasons",Georgia,serif;font-size:17px; } .seo-capability-inner>span:not(.seo-capability-lead) { display:inline-flex;align-items:center;gap:7px;color:rgba(255,255,255,.82);font-size:12px; } .seo-capability-inner svg { color:var(--seo-yellow); }
  .seo-services-section,.seo-markets-section,.seo-process-section,.seo-why-section { padding:clamp(76px,9vw,116px) 0;background:#fff; }
  .seo-section-heading { max-width:750px;margin:0 auto 45px;text-align:center; } .seo-section-heading .seo-kicker { margin-bottom:14px; }
  .seo-section-heading h2,.seo-platform-intro h2,.seo-growth-copy h2 { margin:0;font-size:clamp(32px,4vw,48px);line-height:1.16;font-weight:700; }
  .seo-section-heading p { max-width:690px;margin:16px auto 0;color:var(--seo-muted);font-size:16px;line-height:1.75; }
  .seo-service-grid { display:grid;grid-template-columns:repeat(6,1fr);gap:18px; }
  .seo-service-card { position:relative;grid-column:span 2;min-height:303px;padding:25px 24px 24px;overflow:hidden;background:#F5F5F5;border:1px solid var(--seo-line);border-radius:13px;transition:background .28s ease,border-color .28s ease,box-shadow .28s ease; }
  .seo-service-card:nth-child(4) { grid-column:2 / span 2; } .seo-service-card:hover { background: var(--brand-hover-yellow);border-color:var(--seo-gold);box-shadow:0 16px 34px rgba(234,179,8,.18); }
  .seo-card-topline { display:flex;align-items:center;justify-content:space-between;color:#9da2bb;font-size:11px;letter-spacing:.13em; } .seo-card-icon { display:grid;place-items:center;width:44px;height:44px;color:var(--seo-navy);background:#fff;border:1px solid #e5e7f0;border-radius:10px;box-shadow:0 5px 14px rgba(17,25,102,.04); }
  .seo-service-card h3,.seo-market-card h3,.seo-industry-card h3,.seo-process-card h3,.seo-why-card h3 { margin:20px 0 9px;color:var(--seo-navy);font-family:"The Seasons",Georgia,serif;font-size:25px;line-height:1.25; }
  .seo-service-card p,.seo-market-card p,.seo-industry-card p,.seo-process-card p,.seo-why-card p { margin:0;color:var(--seo-muted);font-size:14px;line-height:1.65; }
  .seo-service-card ul { display:flex;flex-direction:column;gap:8px;list-style:none;margin:18px 0 0;padding:0; } .seo-service-card li { display:flex;align-items:flex-start;gap:7px;color:#39406f;font-size:12px;line-height:1.45; } .seo-service-card li svg { flex:none;color:var(--brand-gold-text);margin-top:1px; }
  .seo-card-accent { position:absolute;right:-26px;bottom:-51px;width:100px;height:100px;border:1px solid rgba(234,179,8,.25);border-radius:50%;transition:transform .4s ease; } .seo-service-card:hover .seo-card-accent { transform:scale(1.55); }
  .seo-platform-section { padding:clamp(76px,9vw,112px) 0;background:#F5F5F5;border-top:1px solid #edf0f5;border-bottom:1px solid #edf0f5; }
  .seo-platform-layout { display:grid;grid-template-columns:.72fr 1.28fr;gap:clamp(40px,7vw,96px);align-items:start; } .seo-platform-intro { position:sticky;top:110px; }
  .seo-platform-intro .seo-kicker,.seo-growth-copy .seo-kicker { margin-bottom:15px; } .seo-platform-intro h2 { font-size:clamp(31px,3.3vw,43px); }
  .seo-platform-intro p,.seo-growth-copy>p { margin:17px 0 22px;color:var(--seo-muted);font-size:15px;line-height:1.75; }
  .seo-text-link { display:inline-flex;align-items:center;gap:8px;color:var(--seo-navy);font-size:14px;font-weight:700;border-bottom:1px solid var(--seo-gold);padding:0 0 5px;transition:gap .2s ease,color .2s ease; } .seo-text-link:hover { gap:12px;color:var(--brand-gold-text); }
  .seo-platform-grid { display:grid;grid-template-columns:1fr 1fr;gap:12px; }
  .seo-platform-card { display:grid;grid-template-columns:32px 1fr;align-items:start;gap:10px;min-height:121px;padding:18px 16px;background:#fff;border:1px solid #e4e6ef;border-radius:9px;transition:background .25s ease,border-color .25s ease,box-shadow .25s ease; }
  .seo-platform-card:hover { background: var(--brand-hover-yellow);border-color:var(--seo-gold);box-shadow:0 9px 22px rgba(234,179,8,.14); }
  .seo-platform-index { display:grid;place-items:center;width:29px;height:29px;background:#F5F5F5;border-radius:50%;color:#777d9c;font-size:10px; }
  .seo-platform-card h3 { margin:1px 0 5px;font-family:"The Seasons",Georgia,serif;font-size:22px;color:var(--seo-navy); } .seo-platform-card p { margin:0;color:var(--seo-muted);font-size:12px;line-height:1.55; }
  .seo-markets-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:17px; }
  .seo-market-card { min-height:215px;padding:25px;border:1px solid var(--seo-line);border-radius:12px;background:#F5F5F5;transition:background .25s ease,border-color .25s ease,box-shadow .25s ease; }
  .seo-market-card:hover { background: var(--brand-hover-yellow);border-color:var(--seo-gold);box-shadow:0 12px 26px rgba(234,179,8,.15); }
  .seo-market-icon { width:40px;height:40px;display:grid;place-items:center;color:var(--seo-navy);border:1px solid rgba(234,179,8,.5);background:#fff;border-radius:9px; } .seo-market-card h3 { margin-top:17px;font-size:23px; }
  .seo-industries-section { padding:clamp(76px,9vw,110px) 0;background:linear-gradient(135deg,#0c1250 0%,#111966 62%,#192576 100%);position:relative;overflow:hidden; }
  .seo-industries-section::before { content:"";position:absolute;right:-170px;top:-230px;width:540px;height:540px;border-radius:50%;background:radial-gradient(circle,rgba(252,240,0,.12),transparent 68%);pointer-events:none; }
  .seo-section-heading--light { position:relative;z-index:1; } .seo-section-heading--light .seo-kicker { color:#f1d951; } .seo-section-heading--light h2 { color:#fff; } .seo-section-heading--light p { color:rgba(255,255,255,.72); }
  .seo-industry-grid { position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:13px; }
  .seo-industry-card { display:grid;grid-template-columns:42px 1fr;align-items:start;gap:13px;min-height:139px;padding:21px 18px;background:rgba(255,255,255,.97);border:1px solid rgba(255,255,255,.5);border-radius:10px;transition:background .25s ease,border-color .25s ease,box-shadow .25s ease; }
  .seo-industry-card:hover { background: var(--brand-hover-yellow);border-color:var(--seo-gold);box-shadow:0 12px 24px rgba(0,0,0,.15); } .seo-industry-icon { width:41px;height:41px;display:grid;place-items:center;color:var(--seo-navy);border-radius:9px;background:#F5F5F5; }
  .seo-industry-card h3 { margin:1px 0 6px;font-size:23px; } .seo-industry-card p { font-size:12.5px; }
  .seo-process-section { background:#F5F5F5; } .seo-process-grid { display:grid;grid-template-columns:repeat(5,1fr);gap:13px; }
  .seo-process-card { min-height:228px;padding:22px 19px;background:#fff;border:1px solid #e4e6ef;border-radius:11px;transition:background .25s ease,border-color .25s ease,box-shadow .25s ease; }
  .seo-process-card:hover { background: var(--brand-hover-yellow);border-color:var(--seo-gold);box-shadow:0 12px 25px rgba(234,179,8,.15); } .seo-step-number { color:var(--brand-gold-text);font-family:"The Seasons",Georgia,serif;font-size:26px;font-weight:700; }
  .seo-step-rule { display:block;width:34px;height:2px;margin:13px 0 15px;background:var(--seo-gold); } .seo-process-card h3 { margin:0 0 9px;font-size:23px; } .seo-process-card p { font-size:12.5px; }
  .seo-strategy-section { padding:clamp(74px,8.8vw,112px) 0;background:#fff; }
  .seo-strategy-heading { display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:29px; }
  .seo-strategy-title { max-width:760px; } .seo-strategy-title .seo-kicker { margin-bottom:13px; }
  .seo-strategy-title h2 { margin:0;color:var(--seo-navy);font-family:"The Seasons",Georgia,"Times New Roman",serif;font-size:clamp(34px,4.2vw,52px);line-height:1.13;letter-spacing:-.025em; }
  .seo-strategy-heading-actions { display:flex;align-items:center;gap:clamp(22px,4vw,54px);flex:none; }
  .seo-strategy-quote { display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:50px;padding:0 19px;color:var(--seo-navy);border:1px solid rgba(17,25,102,.35);border-radius:30px;background:#fff;white-space:nowrap;font-size:14px;font-weight:700;transition:background .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease; }
  .seo-strategy-quote:hover { border-color:var(--seo-gold);background: var(--brand-hover-yellow);box-shadow:0 8px 20px rgba(234,179,8,.16);transform:translateY(-2px); }
  .seo-strategy-controls { display:flex;align-items:center;gap:12px; }
  .seo-strategy-controls button { display:grid;place-items:center;width:52px;height:52px;padding:0;color:#111;background:var(--seo-yellow);border:1px solid transparent;border-radius:50%;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease,background .2s ease; }
  .seo-strategy-controls button:hover { transform:translateY(-2px);box-shadow:0 8px 18px rgba(17,25,102,.14);background: var(--brand-hover-yellow); }
  .seo-strategy-controls button:focus-visible,.seo-strategy-label:focus-visible,.seo-strategy-quote:focus-visible { outline:3px solid #a98500;outline-offset:3px; }
  .seo-strategy-panel { display:grid;grid-template-columns:minmax(310px,.69fr) minmax(0,1.31fr);min-height:455px;border-top:2px solid rgba(17,25,102,.68); }
  .seo-strategy-copy { display:flex;flex-direction:column;justify-content:center;min-width:0;padding:36px clamp(24px,3vw,43px) 40px 0;border-right:2px solid rgba(17,25,102,.62);animation:seoStrategyChange .42s cubic-bezier(.16,1,.3,1) both; }
  .seo-strategy-number { margin-bottom:38px;color:#c3c6d1;font-family:"The Seasons",Georgia,serif;font-size:clamp(78px,9vw,112px);font-weight:700;letter-spacing:-.065em;line-height:.85; }
  .seo-strategy-mobile-count { display:none; }
  .seo-strategy-copy h3 { margin:0 0 18px;color:var(--seo-navy);font-family:"The Seasons",Georgia,"Times New Roman",serif;font-size:clamp(24px,2.25vw,31px);line-height:1.28; }
  .seo-strategy-copy p { max-width:490px;margin:0;color:var(--seo-muted);font-size:clamp(14px,1.25vw,16px);line-height:1.8; }
  .seo-strategy-stage { display:grid;grid-template-columns:minmax(0,1fr) minmax(245px,1.16fr) minmax(0,1fr);align-items:stretch;min-height:455px;padding:0 4px; }
  .seo-strategy-labels { display:flex;flex-direction:column;justify-content:space-around;min-width:0; }
  .seo-strategy-labels--left { padding:26px 0 26px 4px; }
  .seo-strategy-labels--right { padding:87px 0 87px 3px; }
  .seo-strategy-label { position:relative;z-index:1;display:inline-flex;align-items:center;align-self:flex-start;gap:7px;max-width:100%;min-height:40px;padding:8px 13px;color:#34384f;background:#fff;border:1px solid #e5e7ee;border-radius:24px;box-shadow:0 4px 11px rgba(17,25,102,.11);cursor:pointer;font-family:var(--font-body),"Cardo",Georgia,serif;font-size:clamp(10px,.95vw,13px);line-height:1.25;text-align:left;transition:background .25s ease,border-color .25s ease,box-shadow .25s ease,color .25s ease,transform .25s ease; }
  .seo-strategy-label span { flex:none;color:#777d9a;font-size:.9em;font-weight:700; }
  .seo-strategy-label::after { content:"";position:absolute;left:100%;top:50%;width:clamp(15px,3.2vw,48px);border-top:2px dotted #9da2b3; }
  .seo-strategy-labels--right .seo-strategy-label { align-self:flex-end; }
  .seo-strategy-labels--right .seo-strategy-label::after { right:100%;left:auto; }
  .seo-strategy-label.is-active { color:var(--seo-navy);background:var(--seo-yellow);border-color:#eadb00;box-shadow:0 6px 15px rgba(17,25,102,.17);transform:translateY(-1px); }
  .seo-strategy-label.is-active span { color:#5c5100; }
  .seo-strategy-art { display:grid;place-items:center;min-width:0; }
  .seo-strategy-art svg { display:block;width:min(100%,410px);height:auto;overflow:visible; }
  .seo-strategy-layer-shadow { fill:#bfc2cc;transition:fill .28s ease; }
  .seo-strategy-layer-top { fill:#f0f1f5;stroke:#dfe1e9;stroke-width:1.5;transition:fill .28s ease,stroke .28s ease,transform .28s ease;transform-box:fill-box;transform-origin:center; }
  .seo-strategy-layer.is-active .seo-strategy-layer-shadow { fill:#c8aa00; }
  .seo-strategy-layer.is-active .seo-strategy-layer-top { fill:var(--seo-yellow);stroke:#e8d800;transform:translateY(-4px); }
  @keyframes seoStrategyChange { from { opacity:0;transform:translateY(12px); } to { opacity:1;transform:translateY(0); } }
  .seo-growth-section { padding:clamp(76px,9vw,114px) 0;background:#fff; } .seo-growth-layout { display:grid;grid-template-columns:1fr .9fr;align-items:center;gap:clamp(40px,7vw,92px); }
  .seo-growth-copy h2 { font-size:clamp(33px,3.7vw,47px); } .seo-growth-copy>p { max-width:600px;margin-bottom:23px; }
  .seo-benefit-list { display:flex;flex-direction:column;gap:13px;list-style:none;padding:0;margin:0; } .seo-benefit-list li { display:flex;align-items:flex-start;gap:11px;color:#414775;font-size:14px;line-height:1.6; }
  .seo-benefit-list li>span { display:grid;place-items:center;flex:none;width:21px;height:21px;margin-top:1px;color:var(--seo-navy);background:var(--seo-yellow);border-radius:50%; }
  .seo-ai-card { position:relative;isolation:isolate;overflow:hidden;padding:34px;border:1px solid rgba(17,25,102,.15);border-radius:15px;background:linear-gradient(145deg,#F5F5F5,#F5F5F5);box-shadow:0 20px 48px rgba(17,25,102,.08); }
  .seo-ai-card-head { position:relative;z-index:1;display:flex;align-items:center;gap:13px; } .seo-ai-icon { display:grid;place-items:center;width:45px;height:45px;color:var(--seo-navy);background:var(--seo-yellow);border-radius:12px; }
  .seo-ai-card-head>span:last-child { display:flex;flex-direction:column;gap:4px; } .seo-ai-card-head b { color:var(--seo-navy);font-family:"The Seasons",Georgia,serif;font-size:20px; } .seo-ai-card-head small { color:#73799a;font-size:12px; }
  .seo-ai-card>p { position:relative;z-index:1;margin:24px 0 21px;color:var(--seo-muted);font-size:14px;line-height:1.75; }
  .seo-ai-pill-row { position:relative;z-index:1;display:flex;flex-wrap:wrap;gap:8px; } .seo-ai-pill-row span { padding:7px 11px;color:var(--seo-navy);background:#fff;border:1px solid #e1e4ef;border-radius:5px;font-size:11px;font-weight:700; }
  .seo-ai-feature { position:relative;z-index:1;display:flex;gap:12px;margin-top:24px;padding:15px;background:#fff;border:1px solid #e6e8f0;border-radius:9px; }
  .seo-ai-feature>span { display:grid;place-items:center;flex:none;width:31px;height:31px;color:#fff;background:var(--seo-navy);border-radius:7px; } .seo-ai-feature>div { display:flex;flex-direction:column;gap:4px; }
  .seo-ai-feature b { color:var(--seo-navy);font-size:12px; } .seo-ai-feature small { color:#777d9a;font-size:11px;line-height:1.45; }
  .seo-ai-orbit { position:absolute;z-index:-1;right:-67px;bottom:-132px;width:260px;height:260px;border:1px solid rgba(234,179,8,.27);border-radius:50%; } .seo-ai-orbit--two { right:-28px;bottom:-91px;width:180px;height:180px; }
  .seo-why-section { background:#F5F5F5; } .seo-why-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:15px; }
  .seo-why-card { padding:23px 21px 25px;background:#fff;border:1px solid #e4e6ef;border-radius:10px;transition:background .25s ease,border-color .25s ease,box-shadow .25s ease; }
  .seo-why-card:hover { background: var(--brand-hover-yellow);border-color:var(--seo-gold);box-shadow:0 12px 24px rgba(234,179,8,.14); } .seo-why-number { color:var(--brand-gold-text);font-size:11px;letter-spacing:.13em; }
  .seo-why-card h3 { margin-top:16px;font-size:23px; } .seo-why-card p { font-size:13px; }
  .seo-tool-note { display:flex;align-items:center;gap:15px;margin-top:20px;padding:18px 21px;background:#fff;border:1px solid #e4e6ef;border-radius:9px; }
  .seo-tool-note-icon { display:grid;place-items:center;width:39px;height:39px;flex:none;color:var(--seo-navy);background:#fff9b3;border-radius:8px; } .seo-tool-note p { margin:0;color:var(--seo-muted);font-size:13px;line-height:1.6; } .seo-tool-note b { color:var(--seo-navy); }
  .seo-faq-section { padding:clamp(60px,8vw,98px) 0 clamp(72px,9vw,112px);background:#fff; } .seo-faq-section .svc-faq-wrap { margin-top:0; } .seo-faq-section .svc-cta-box { margin-top:clamp(54px,7vw,82px); }
  .seo-motion-ready [data-seo-anim] { opacity:0;transform:translateY(27px); } .seo-motion-ready [data-seo-anim].seo-visible { animation:seoReveal .78s cubic-bezier(.16,1,.3,1) forwards; }
  .seo-service-card[data-seo-anim].seo-visible:nth-child(2),.seo-market-card[data-seo-anim].seo-visible:nth-child(2),.seo-industry-card[data-seo-anim].seo-visible:nth-child(2),.seo-process-card[data-seo-anim].seo-visible:nth-child(2),.seo-why-card[data-seo-anim].seo-visible:nth-child(2) { animation-delay:.09s; }
  .seo-service-card[data-seo-anim].seo-visible:nth-child(3),.seo-market-card[data-seo-anim].seo-visible:nth-child(3),.seo-industry-card[data-seo-anim].seo-visible:nth-child(3),.seo-process-card[data-seo-anim].seo-visible:nth-child(3),.seo-why-card[data-seo-anim].seo-visible:nth-child(3) { animation-delay:.18s; }
  .seo-service-card[data-seo-anim].seo-visible:nth-child(4),.seo-market-card[data-seo-anim].seo-visible:nth-child(4),.seo-industry-card[data-seo-anim].seo-visible:nth-child(4),.seo-process-card[data-seo-anim].seo-visible:nth-child(4),.seo-why-card[data-seo-anim].seo-visible:nth-child(4) { animation-delay:.27s; }
  .seo-service-card[data-seo-anim].seo-visible:nth-child(5),.seo-market-card[data-seo-anim].seo-visible:nth-child(5),.seo-industry-card[data-seo-anim].seo-visible:nth-child(5),.seo-process-card[data-seo-anim].seo-visible:nth-child(5) { animation-delay:.36s; }
  .seo-market-card[data-seo-anim].seo-visible:nth-child(6),.seo-industry-card[data-seo-anim].seo-visible:nth-child(6) { animation-delay:.45s; } .seo-platform-card[data-seo-anim].seo-visible:nth-child(even) { animation-delay:.1s; }
  @keyframes seoReveal { from { opacity:0;transform:translateY(27px); } to { opacity:1;transform:translateY(0); } }
  @media(max-width:1000px) {
    .seo-hero-grid { grid-template-columns:1fr 1fr;gap:30px; } .seo-dashboard { transform:none; } .seo-platform-layout { grid-template-columns:1fr;gap:32px; }
    .seo-platform-intro { position:static;max-width:700px; } .seo-service-card { min-height:325px; } .seo-process-grid { grid-template-columns:repeat(3,1fr); }
    .seo-process-card:nth-child(4),.seo-process-card:nth-child(5) { min-height:205px; } .seo-why-grid { grid-template-columns:repeat(2,1fr); }
    .seo-strategy-heading { align-items:flex-start;flex-direction:column;gap:20px; } .seo-strategy-heading-actions { width:100%;justify-content:space-between; }
    .seo-strategy-panel { grid-template-columns:1fr;min-height:0; }
    .seo-strategy-copy { min-height:0;padding:27px 0 25px;border-right:0;border-bottom:1px solid rgba(17,25,102,.28); }
    .seo-strategy-number { margin-bottom:20px;font-size:76px; }
    .seo-strategy-stage { grid-template-columns:minmax(0,1fr) minmax(250px,1.16fr) minmax(0,1fr);min-height:390px; }
    .seo-strategy-label { padding:7px 9px;font-size:10px; } .seo-strategy-label::after { width:15px; }
  }
  @media(max-width:720px) {
    .seo-container { width:min(calc(100% - 36px),560px); } .seo-hero { padding-top:22px;padding-bottom:65px; } .seo-breadcrumb { gap:7px;margin-bottom:32px;font-size:11px; }
    .seo-hero-grid { grid-template-columns:1fr;gap:24px; } .seo-hero h1 { font-size:clamp(38px,10vw,54px); } .seo-hero-lede { font-size:15px; }
    .seo-hero-actions { align-items:stretch;flex-direction:column; } .seo-button { width:100%;min-height:49px; } .seo-hero-footnote { align-items:flex-start;font-size:12px; }
    .seo-hero-visual { width:min(100%,500px);margin:0 auto;padding:24px 7px; } .seo-dashboard { padding:16px 14px 13px;border-radius:12px; } .seo-dashboard-top { font-size:8px; }
    .seo-float-card { padding:8px 10px;gap:7px; } .seo-float-card--top { right:-4px; } .seo-float-card--bottom { left:-4px; }
    .seo-float-card b { font-size:9px; } .seo-float-card small { font-size:8px; } .seo-float-icon { width:26px;height:26px; }
    .seo-capability-inner { justify-content:flex-start;gap:10px 20px;padding-top:19px;padding-bottom:19px; } .seo-capability-lead { flex:0 0 100%;font-size:16px; }
    .seo-capability-inner>span:not(.seo-capability-lead) { font-size:11px; } .seo-section-heading { margin-bottom:31px;text-align:left; }
    .seo-section-heading h2,.seo-platform-intro h2,.seo-growth-copy h2 { font-size:clamp(31px,8vw,40px); } .seo-section-heading p { margin-left:0;font-size:14px; }
    .seo-service-grid { grid-template-columns:1fr;gap:13px; } .seo-service-card,.seo-service-card:nth-child(4) { grid-column:auto;min-height:auto;padding:22px; }
    .seo-service-card h3 { margin-top:16px; } .seo-platform-grid,.seo-markets-grid,.seo-industry-grid { grid-template-columns:1fr; }
    .seo-platform-card { min-height:100px; } .seo-market-card { min-height:auto;padding:21px; } .seo-market-card h3 { margin-top:14px; }
    .seo-industry-grid { gap:10px; } .seo-industry-card { min-height:120px;padding:17px 14px;grid-template-columns:38px 1fr;gap:10px; }
    .seo-industry-icon { width:37px;height:37px; } .seo-process-grid { grid-template-columns:1fr;gap:10px; }
    .seo-process-card,.seo-process-card:nth-child(4),.seo-process-card:nth-child(5) { display:grid;grid-template-columns:43px 1fr;column-gap:12px;min-height:auto;padding:18px; }
    .seo-step-number { grid-row:span 2;font-size:22px; } .seo-step-rule { display:none; } .seo-process-card h3 { margin:0 0 5px;font-size:21px; }
    .seo-strategy-section { padding:68px 0 74px; } .seo-strategy-heading { gap:19px;margin-bottom:23px; }
    .seo-strategy-title h2 { font-size:clamp(31px,8vw,41px); }
    .seo-strategy-heading-actions { align-items:center;gap:12px; } .seo-strategy-quote { min-height:46px;padding:0 13px;font-size:12px; }
    .seo-strategy-controls { gap:8px; } .seo-strategy-controls button { width:44px;height:44px; }
    .seo-strategy-panel { display:flex;flex-direction:column;min-height:0; }
    .seo-strategy-copy { min-height:0;padding:25px 0 24px;border-right:0;border-bottom:1px solid rgba(17,25,102,.28); }
    .seo-strategy-number { display:none; } .seo-strategy-mobile-count { display:block;margin:0 0 9px;color:var(--brand-gold-text);font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase; }
    .seo-strategy-copy h3 { margin-bottom:10px;font-size:24px; } .seo-strategy-copy p { font-size:14px;line-height:1.7; }
    .seo-strategy-stage { display:flex;flex-direction:column;gap:8px;min-height:0;padding:17px 0 0; }
    .seo-strategy-art { order:-1;width:100%;min-height:0; }
    .seo-strategy-art svg { width:min(100%,355px); }
    .seo-strategy-labels { flex-direction:row;flex-wrap:wrap;justify-content:center;gap:8px;padding:0; }
    .seo-strategy-label,.seo-strategy-labels--right .seo-strategy-label { align-self:auto;min-height:36px;padding:7px 10px;font-size:10px; }
    .seo-strategy-label::after { display:none; }
    .seo-growth-layout { grid-template-columns:1fr;gap:30px; } .seo-benefit-list li { font-size:13px; } .seo-ai-card { padding:25px 20px; }
    .seo-why-grid { grid-template-columns:1fr;gap:10px; } .seo-why-card { padding:20px; } .seo-tool-note { align-items:flex-start;padding:15px; } .seo-tool-note p { font-size:12px; }
    .seo-faq-section .svc-faq-wrap { margin-top:0; } .seo-faq-section .svc-faq-head { text-align:left; } .seo-faq-section .svc-faq-subtitle { font-size:14px; }
  }
  @media(max-width:400px) {
    .seo-container { width:calc(100% - 28px); } .seo-query-period { display:none; } .seo-dashboard-bottom { grid-template-columns:1fr; }
    .seo-float-card--top { right:-7px; } .seo-float-card--bottom { left:-7px; }
  }
  @media(prefers-reduced-motion:reduce) {
    .seo-page-root *, .seo-page-root *::before, .seo-page-root *::after { scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important; }
    .seo-motion-ready [data-seo-anim] { opacity:1;transform:none; }
  }
`;
