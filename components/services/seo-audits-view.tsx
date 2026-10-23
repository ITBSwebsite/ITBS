'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Gauge,
  Layers3,
  Link2,
  ListChecks,
  MapPin,
  MousePointer2,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Wrench,
} from 'lucide-react';

const benefits = [
  {
    icon: CircleDollarSign,
    title: 'Stop paying for the wrong fixes',
    text: 'Spot the technical and strategic issues that may be limiting the return on your SEO and content spend.',
  },
  {
    icon: ListChecks,
    title: 'Fix what matters first',
    text: 'Every finding is ranked by likely impact, so your team can focus on meaningful improvements instead of treating every warning equally.',
  },
  {
    icon: Search,
    title: 'Find the searches you are missing',
    text: 'Discover relevant keywords, content gaps and landing pages that could help you reach more of the right people.',
  },
  {
    icon: MousePointer2,
    title: 'Attract better visitors, not just more',
    text: 'Match pages to search intent and give visitors a clearer path from finding you to becoming a lead or customer.',
  },
  {
    icon: BarChart3,
    title: 'Decide with evidence',
    text: 'Recommendations are grounded in crawl and search data, with competitor context where it helps explain the opportunity.',
  },
  {
    icon: ClipboardCheck,
    title: 'Leave with a plan your team can use',
    text: 'Get specific, practical actions your marketing and development teams can understand and put into motion.',
  },
];

const warningSigns = [
  {
    title: 'Your organic traffic has dropped',
    text: 'We investigate which pages and queries lost visibility and look for the technical, content or competitive causes behind the change.',
  },
  {
    title: 'Your rankings have stalled',
    text: 'We review keyword targeting, page quality, internal links and the competitor pages currently earning visibility.',
  },
  {
    title: 'Your website has technical problems',
    text: 'We examine crawlability, indexation, redirects, canonical tags and broken links, then help you separate urgent fixes from lower-priority issues.',
  },
  {
    title: 'You are investing in SEO without clear returns',
    text: 'We connect organic demand to commercial priorities and conversion steps, so you can see where the opportunity may be getting lost.',
  },
  {
    title: 'You are planning a redesign or migration',
    text: 'We identify the SEO details to protect during a change, including URL redirects, indexation and internal links.',
  },
  {
    title: 'Your competitors are pulling ahead',
    text: 'We compare search visibility, content and backlink profiles to find the gaps that are most relevant to your next move.',
  },
];

const auditAreas = [
  {
    icon: Wrench,
    title: 'Technical SEO audit',
    short: 'Crawl, indexation & site health',
    text: 'We check crawlability, indexation, XML sitemaps, robots rules, canonical tags, redirects, broken links, site architecture, mobile usability and Core Web Vitals. Findings are prioritised by their likely impact on search visibility and visitors.',
    checks: ['Crawl and indexation', 'Site structure and internal links', 'Mobile and page experience'],
  },
  {
    icon: Search,
    title: 'Keyword research & search intent',
    short: 'Demand, targeting & missing pages',
    text: 'We review current visibility and search demand, map relevant terms to the right pages and identify landing-page gaps. We also check whether each page meets the expectations behind the searches it targets.',
    checks: ['Keyword-to-page mapping', 'Search intent alignment', 'Content and landing-page gaps'],
  },
  {
    icon: FileText,
    title: 'On-page SEO & content audit',
    short: 'Page quality & content opportunities',
    text: 'We assess titles, meta descriptions, headings, internal links and content quality. The review flags cannibalisation, missing information and pages that could better serve their intended searches.',
    checks: ['Titles, descriptions and headings', 'Internal linking', 'Content quality and overlap'],
  },
  {
    icon: Link2,
    title: 'Competitor & backlink analysis',
    short: 'Visibility, content & authority',
    text: 'We compare your search visibility and content against relevant competitors, then review referring domains and backlink opportunities to understand where authority may be holding you back.',
    checks: ['Relevant competitor comparisons', 'Content coverage', 'Referring domains and authority'],
  },
  {
    icon: TrendingUp,
    title: 'Organic performance & conversion',
    short: 'Useful traffic & business outcomes',
    text: 'Where analytics access is available, we review organic traffic, landing-page behaviour and conversion opportunities. The aim is to connect search performance to business outcomes, not rankings in isolation.',
    checks: ['Organic landing pages', 'Engagement and conversion paths', 'Commercial opportunities'],
  },
];

const deliverables = [
  'An audit report with findings checked and validated',
  'Prioritised recommendations ranked by impact and effort',
  'Affected URLs and practical examples',
  'Keyword and competitor opportunities worth exploring',
  'An implementation roadmap your team can follow',
  'Clear guidance on what to fix, investigate or leave for later',
];

const auditSteps = [
  { icon: Search, title: 'Validate the findings', text: 'We review the data and check important issues against the live site, so recommendations have useful context.' },
  { icon: Gauge, title: 'Prioritise by impact', text: 'We weigh likely impact, effort and dependencies to help you focus limited time and budget.' },
  { icon: FileCheck2, title: 'Make the fixes clear', text: 'Each recommendation explains what to change and why, in language your team can act on.' },
  { icon: Layers3, title: 'Build your roadmap', text: 'We organise the work around your budget, development capacity and commercial goals.' },
];

const specialistAudits = [
  {
    icon: ShoppingBag,
    eyebrow: 'PRODUCTS & CATEGORIES',
    title: 'Ecommerce SEO audit',
    text: 'We review product and category pages, faceted navigation, duplicate URLs, structured data and indexation at catalogue scale.',
    href: '/contact#quote-form',
  },
  {
    icon: MapPin,
    eyebrow: 'LOCAL DISCOVERY',
    title: 'Local SEO audit',
    text: 'We look at Google Business Profile, local citations, location pages and reviews to help strengthen visibility in the places you serve.',
    href: '/contact#quote-form',
  },
  {
    icon: Building2,
    eyebrow: 'LARGE & COMPLEX SITES',
    title: 'Enterprise SEO audit',
    text: 'We assess crawl scale, international setup, page templates and indexation, then shape a roadmap that can work across teams.',
    href: '/contact#quote-form',
  },
];

const faqs = [
  {
    question: 'What is an SEO audit?',
    answer: 'An SEO audit is a structured review of your website’s technical health, content, keyword targeting and competitive position. It identifies what may be limiting organic performance and gives you clear actions to address it.',
  },
  {
    question: 'What is a technical SEO audit?',
    answer: 'A technical SEO audit examines how search engines crawl, understand and index your website. It can review site structure, redirects, canonical tags, speed, mobile usability, structured data and other technical factors.',
  },
  {
    question: 'How much does an SEO audit cost?',
    answer: 'A basic SEO audit is free. Extensive custom audits, including a page-by-page review, start from £300. We confirm the scope and price with you before work begins.',
  },
  {
    question: 'How long does an SEO audit take?',
    answer: 'Our agreed SEO audit is typically delivered within 3 days. Timing can depend on the size and complexity of your website and the scope of the review.',
  },
  {
    question: 'What will I receive from an SEO audit?',
    answer: 'You receive validated findings, prioritised recommendations, affected URLs and examples, keyword and competitor opportunities, and a practical implementation roadmap.',
  },
  {
    question: 'Can we talk before commissioning an audit?',
    answer: 'Yes. Contact our team to discuss your priorities, a suitable audit scope and the next steps for your website.',
  },
  {
    question: 'When should I commission an SEO audit?',
    answer: 'An audit is useful when organic traffic drops, rankings stall, you plan a website redesign or migration, or you want a clear baseline before investing further in SEO.',
  },
  {
    question: 'What is the difference between a local and an enterprise SEO audit?',
    answer: 'A local SEO audit focuses on visibility in the areas you serve, including Google Business Profile, citations, location pages and reviews. An enterprise audit considers larger, more complex websites, including crawl scale, international setup, templates, indexation and multi-team roadmaps.',
  },
];

export function SEOAuditsView() {
  const [activeArea, setActiveArea] = useState(0);

  useEffect(() => {
    const page = document.querySelector<HTMLElement>('.seo-audit-page');
    if (!page) return;

    const revealTargets = page.querySelectorAll<HTMLElement>(
      '.sa-hero-copy, .sa-hero-visual, .sa-proof-strip > div, .sa-section-heading, .sa-benefit-card, .sa-process-card, .sa-specialist-card, .sa-quote-card, .sa-pricing-card, .sa-faq-item',
    );

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('sa-reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    );

    revealTargets.forEach((item) => {
      item.classList.add('sa-reveal-item');
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
      revealTargets.forEach((item) => item.classList.remove('sa-reveal-item', 'sa-reveal-visible'));
    };
  }, []);

  return (
    <main className="seo-audit-page">
      <section className="sa-hero">
        <div className="sa-hero-glow sa-hero-glow--one" aria-hidden="true" />
        <div className="sa-hero-glow sa-hero-glow--two" aria-hidden="true" />
        <div className="sa-wrap sa-hero-grid">
          <div className="sa-hero-copy">
            <p className="sa-eyebrow"><span /> SEO CLARITY. PRIORITIES THAT MATTER.</p>
            <h1>SEO audit services that uncover what is <em>holding your website back</em></h1>
            <p className="sa-hero-lede">
              If fewer people are finding your website on Google, or the right customers are not reaching you, an SEO audit can help explain why. We review your website and show you what may be getting in the way.
            </p>
            <p className="sa-hero-secondary">
              You will get a clear action plan in plain language: what to improve first, why it matters, and what to focus on next. It is tailored to your website and your business goals.
            </p>
            <div className="sa-actions">
              <a className="sa-button sa-button--primary" href="/contact">Book your SEO audit <ArrowRight size={17} /></a>
            </div>
            <div className="sa-hero-note"><ShieldCheck size={17} /> Clear findings. Practical priorities. No guaranteed rankings.</div>
          </div>

          <div className="sa-hero-visual">
            <div className="sa-photo-frame sa-photo-frame--hero">
              <Image
                src="/images/seo-audits/analytics-dashboard.jpg"
                alt="Analytics dashboard displayed on a laptop during a website review"
                width={1400}
                height={933}
                priority
                sizes="(max-width: 850px) 100vw, 46vw"
              />
              <div className="sa-photo-shade" aria-hidden="true" />
              <div className="sa-dashboard-card">
                <span className="sa-dashboard-icon"><Search size={16} /></span>
                <div><small>SEO AUDIT SNAPSHOT</small><strong>Clear priorities, not a list of warnings</strong></div>
                <span className="sa-dashboard-check"><Check size={16} /></span>
              </div>
              <div className="sa-float-stamp"><span>ITBS</span><small>Search review</small></div>
            </div>
            <div className="sa-hero-orbit" aria-hidden="true"><i /><i /><i /></div>
            <p className="sa-image-caption"><span /> Built around your website, market and goals</p>
          </div>
        </div>
        <div className="sa-wrap sa-proof-strip">
          <div><span className="sa-proof-dot" /><strong>Free</strong><small>basic SEO audit</small></div>
          <div><span className="sa-proof-dot" /><strong>From £300</strong><small>custom audit scopes</small></div>
          <div><span className="sa-proof-dot" /><strong>3 days</strong><small>typical delivery</small></div>
          <div><span className="sa-proof-dot" /><strong>Page-by-page</strong><small>review with custom audits</small></div>
        </div>
      </section>

      <section className="sa-section sa-benefits" id="audit-benefits">
        <div className="sa-wrap">
          <SectionHeading
            eyebrow="A CLEARER WAY FORWARD"
            title="What an SEO audit with ITBS gives you"
            text="An audit is only worth the money if it changes what you do next. Here is what you can expect from ours."
          />
          <div className="sa-benefit-grid">
            {benefits.map(({ icon: Icon, title: cardTitle, text }, index) => (
              <article className="sa-benefit-card" key={cardTitle}>
                <div className="sa-card-topline"><span>0{index + 1}</span><span className="sa-card-icon"><Icon size={20} strokeWidth={1.8} /></span></div>
                <h3>{cardTitle}</h3>
                <p>{text}</p>
                <span className="sa-card-accent" aria-hidden="true" />
              </article>
            ))}
          </div>
          <p className="sa-content-related">
            Need support turning content opportunities into useful pages and articles? <Link href="/services/content-marketing">Explore our content marketing services <ArrowRight size={15} aria-hidden="true" /></Link>
          </p>
        </div>
      </section>

      <section className="sa-section sa-signs" id="audit-signs">
        <div className="sa-wrap sa-signs-grid">
          <div className="sa-photo-column">
            <div className="sa-photo-frame sa-photo-frame--editorial">
              <Image
                src="/images/seo-audits/web-workspace.jpg"
                alt="A web specialist reviewing a website and its technical structure"
                width={1400}
                height={933}
                sizes="(max-width: 850px) 100vw, 42vw"
              />
              <div className="sa-photo-label"><span><Search size={17} /></span><div><b>Start with the evidence</b><small>Understand what changed and why</small></div></div>
            </div>
            <div className="sa-photo-side-note"><span>01</span><p>Find the cause.<br /><b>Choose the next move.</b></p></div>
          </div>
          <div className="sa-signs-copy">
            <SectionHeading
              eyebrow="WHEN TO TAKE A CLOSER LOOK"
              title="Signs it is time for an SEO audit"
              text="Most businesses commission an audit when something feels off. These are the moments we see most often."
              align="left"
            />
            <div className="sa-accordion-list sa-sign-accordion">
              {warningSigns.map((item, index) => (
                <details className="sa-accordion" key={item.title} open={index === 0}>
                  <summary><span className="sa-accordion-number">0{index + 1}</span><span>{item.title}</span><ChevronDown size={18} /></summary>
                  <p>{item.text}</p>
                </details>
              ))}
            </div>
            <p className="sa-signs-closing">
              Even when performance looks healthy, an audit gives you a baseline, flags emerging issues and helps you plan your next investment with confidence. If you are not sure where you stand, we can help you choose a practical next step.
            </p>
            <p className="sa-signs-closing">
              Planning a redesign or platform change? See how our <Link className="sa-text-link" href="/services/seo-migration-services">SEO migration services <ArrowRight size={15} aria-hidden="true" /></Link> can help your team prepare.
            </p>
          </div>
        </div>
      </section>

      <section className="sa-section sa-scope" id="audit-scope">
        <div className="sa-wrap">
          <SectionHeading
            eyebrow="THE FULL SEARCH PICTURE"
            title="What our SEO audit covers"
            text="Our technical SEO audit services sit within a wider review of everything that influences how your site performs in search. Here is what we examine and why."
          />
          <div className="sa-scope-layout">
            <div className="sa-tabs" role="tablist" aria-label="SEO audit areas" aria-orientation="vertical">
              {auditAreas.map(({ icon: Icon, title: tabTitle, short }, index) => (
                <button
                  className={`sa-tab${activeArea === index ? ' is-active' : ''}`}
                  id={`sa-tab-${index}`}
                  key={tabTitle}
                  type="button"
                  role="tab"
                  aria-selected={activeArea === index}
                  aria-controls="sa-audit-panel"
                  onClick={() => setActiveArea(index)}
                >
                  <span className="sa-tab-icon"><Icon size={19} /></span>
                  <span className="sa-tab-copy"><b>{tabTitle}</b><small>{short}</small></span>
                  <ArrowRight size={17} className="sa-tab-arrow" />
                </button>
              ))}
            </div>
            <div className="sa-scope-panel" id="sa-audit-panel" role="tabpanel" aria-labelledby={`sa-tab-${activeArea}`}>
              <div className={`sa-scope-image sa-scope-image--${activeArea}`}>
                <Image
                  key={activeArea}
                  src={activeArea % 2 === 0 ? '/images/seo-audits/analytics-dashboard.jpg' : '/images/seo-audits/web-workspace.jpg'}
                  alt={`${auditAreas[activeArea].title} review in progress`}
                  width={1400}
                  height={933}
                  sizes="(max-width: 850px) 100vw, 40vw"
                  style={{ objectPosition: ['48% center', '56% center', '78% center', '35% center', '22% center'][activeArea] }}
                />
                <span className="sa-image-index">0{activeArea + 1} <i>/ 05</i></span>
              </div>
              <div className="sa-scope-detail" key={activeArea}>
                <div className="sa-scope-detail-head"><span><Sparkles size={16} /></span><small>INSIDE THE REVIEW</small></div>
                <h3>{auditAreas[activeArea].title}</h3>
                <p>{auditAreas[activeArea].text}</p>
                <ul>{auditAreas[activeArea].checks.map((check) => <li key={check}><Check size={15} />{check}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sa-section sa-deliverables" id="audit-deliverables">
        <div className="sa-wrap sa-deliverables-grid">
          <div className="sa-deliverables-visual">
            <div className="sa-report-paper">
              <div className="sa-report-head"><span className="sa-report-logo">ITBS</span><span>SEO AUDIT<br />ACTION PLAN</span><span className="sa-report-status"><i /> READY TO REVIEW</span></div>
              <div className="sa-report-title">Your search,<br /><em>with direction.</em></div>
              <div className="sa-report-rule" />
              <div className="sa-report-bars"><i /><i /><i /><i /></div>
              <div className="sa-report-footer"><span>FINDINGS</span><span>PRIORITIES</span><span>NEXT STEPS</span></div>
            </div>
            <div className="sa-report-note"><FileCheck2 size={18} /><span><b>Made for your team</b><small>Practical enough to put into action</small></span></div>
          </div>
          <div className="sa-deliverables-copy">
            <SectionHeading
              eyebrow="THE OUTPUT"
              title="What you receive from your SEO audit"
              text="No vague summaries. You get a document your team can act on."
              align="left"
            />
            <ul className="sa-check-list">
              {deliverables.map((item) => <li key={item}><span><Check size={15} /></span>{item}</li>)}
            </ul>
            <p className="sa-footnote">Deliverables are confirmed in the agreed scope. A page-by-page review is included with custom audits.</p>
          </div>
        </div>
      </section>

      <section className="sa-section sa-process" id="audit-process">
        <div className="sa-wrap">
          <SectionHeading
            eyebrow="FROM DATA TO DIRECTION"
            title="From audit findings to an action plan"
            text="A long list of issues is not a strategy. This is how we turn data into direction."
          />
          <div className="sa-process-grid">
            {auditSteps.map(({ icon: Icon, title: stepTitle, text }, index) => (
              <article className="sa-process-card" key={stepTitle}>
                <div className="sa-process-top"><span>0{index + 1}</span><Icon size={21} /></div>
                <div className="sa-process-line"><i /></div>
                <h3>{stepTitle}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sa-section sa-specialists" id="specialist-audits">
        <div className="sa-specialists-glow" aria-hidden="true" />
        <div className="sa-wrap">
          <SectionHeading
            eyebrow="SCOPE THAT FITS YOUR SITE"
            title="Specialist SEO audits for different kinds of website"
            text="Different websites have different problems. We adapt the audit to yours."
          />
          <div className="sa-specialist-grid">
            {specialistAudits.map(({ icon: Icon, eyebrow, title: cardTitle, text, href }, index) => (
              <article className="sa-specialist-card" key={cardTitle}>
                <div className="sa-specialist-card-top"><span>0{index + 1}</span><span className="sa-specialist-icon"><Icon size={20} /></span></div>
                <small>{eyebrow}</small>
                <h3>{cardTitle}</h3>
                <p>{text}</p>
                <Link href={href}>Discuss your audit <ArrowRight size={16} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sa-section sa-perspective" id="audit-principles">
        <div className="sa-wrap">
          <SectionHeading
            eyebrow="EVIDENCE OVER PROMISES"
            title="What the industry says about SEO audits"
            text="The most useful audits keep their attention on meaningful work and honest expectations."
          />
          <div className="sa-quote-grid">
            <blockquote className="sa-quote-card">
              <span className="sa-quote-mark">“</span>
              <p>Sweating the small stuff rarely does much for your rankings.</p>
              <footer><span>AHREFS</span><a href="https://ahrefs.com/blog/seo-audit-template/" target="_blank" rel="noreferrer">Free SEO Audit Template <ArrowRight size={14} /></a></footer>
            </blockquote>
            <blockquote className="sa-quote-card">
              <span className="sa-quote-mark">“</span>
              <p>There are no secrets that will automatically rank your site first in Google.</p>
              <footer><span>GOOGLE SEARCH CENTRAL</span><a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noreferrer">SEO Starter Guide <ArrowRight size={14} /></a></footer>
            </blockquote>
            <article className="sa-quote-card sa-principle-card">
              <span className="sa-principle-icon"><Target size={19} /></span>
              <small>THE ITBS PRINCIPLE</small>
              <h3>Evidence first.<br /><em>Priorities always.</em></h3>
              <p>We focus on what the data says, what can make a difference and what your team can realistically deliver.</p>
            </article>
          </div>
          <p className="sa-quote-disclaimer">That is why our audits focus on evidence and priorities, never guarantees.</p>
        </div>
      </section>

      <section className="sa-section sa-cost" id="audit-cost">
        <div className="sa-wrap sa-cost-grid">
          <div className="sa-cost-copy">
            <SectionHeading
              eyebrow="CLEAR SCOPE, CLEAR PRICE"
              title="What affects the cost of an SEO audit"
              text="The cost of an SEO audit depends on what you need examined. We scope every audit to your website rather than selling a one-size-fits-all package, so you only pay for the depth your situation calls for."
              align="left"
            />
            <ul className="sa-cost-factors">
              <li><span>01</span><div><b>Site size</b><p>The number of pages and templates to review.</p></div></li>
              <li><span>02</span><div><b>Complexity</b><p>Platforms, regions, catalogue scale and technical setup.</p></div></li>
              <li><span>03</span><div><b>Audit type</b><p>A focused technical review or a wider strategic audit.</p></div></li>
              <li><span>04</span><div><b>Data access</b><p>Analytics and Search Console data, when available.</p></div></li>
            </ul>
            <p className="sa-cost-close">Tell us about your website and we will recommend the right scope and give you a clear quote.</p>
            <a className="sa-text-link" href="/contact">Request a quote <ArrowRight size={17} /></a>
          </div>
          <div className="sa-pricing-card">
            <div className="sa-pricing-card-head"><span className="sa-pricing-icon"><Sparkles size={19} /></span><small>A PRACTICAL PLACE TO START</small></div>
            <h3>Start with clarity.</h3>
            <p>Get a feel for where your site stands, then choose a review with the right depth for your goals.</p>
            <div className="sa-price-option"><span>Basic website review</span><b>Free</b></div>
            <div className="sa-price-option"><span>Custom SEO audit</span><b>From £300</b></div>
            <div className="sa-pricing-detail"><Check size={15} /><span>Scope and price confirmed before we begin</span></div>
            <a className="sa-button sa-button--primary" href="/contact">Talk through your website <ArrowRight size={17} /></a>
            <span className="sa-pricing-orbit sa-pricing-orbit--one" aria-hidden="true" /><span className="sa-pricing-orbit sa-pricing-orbit--two" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="sa-section sa-faq" id="audit-faqs">
        <div className="sa-wrap sa-faq-grid">
          <div className="sa-faq-intro">
            <p className="sa-kicker"><span /> GOOD QUESTIONS</p>
            <h2>SEO audit <em>FAQs</em></h2>
            <p>Helpful information about what an audit covers, what it costs and how we get started.</p>
            <a className="sa-text-link" href="/contact">Ask us a question <ArrowRight size={17} /></a>
          </div>
          <div className="sa-faq-list">
            {faqs.map((item, index) => (
              <details className="sa-accordion sa-faq-item" key={item.question} open={index === 0}>
                <summary><span className="sa-accordion-number">0{index + 1}</span><span>{item.question}</span><ChevronDown size={18} /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: 'center' | 'left';
}) {
  return (
    <div className={`sa-section-heading${align === 'left' ? ' sa-section-heading--left' : ''}`}>
      <p className="sa-kicker"><span /> {eyebrow}</p>
      <h2>{title}</h2>
      <p className="sa-section-intro">{text}</p>
    </div>
  );
}
