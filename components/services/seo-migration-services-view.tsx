'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Layers3,
  Link2,
  MonitorCog,
  RefreshCw,
  Route,
  Search,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

const serviceAreas = [
  {
    icon: Globe2,
    number: '01',
    title: 'Domain and HTTPS changes',
    text: 'Plan the search considerations involved in moving to a new domain, changing URL protocols or consolidating domains.',
  },
  {
    icon: Layers3,
    number: '02',
    title: 'Platform migrations',
    text: 'Review how a platform change may affect URL patterns, page templates, metadata, structured data and crawl access.',
  },
  {
    icon: MonitorCog,
    number: '03',
    title: 'Redesign SEO review',
    text: 'Keep organic search needs in view as page layouts, navigation, content and site functionality are redesigned.',
  },
  {
    icon: Route,
    number: '04',
    title: 'URL and redirect mapping',
    text: 'Match important existing URLs to the most relevant new destinations and identify redirect gaps before launch.',
  },
  {
    icon: FileCheck2,
    number: '05',
    title: 'Content and technical checks',
    text: 'Check agreed page content, metadata, canonicals, indexation signals and other SEO details across the move.',
  },
];

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Review the current site',
    text: 'Understand the existing URLs, important search pages and available performance data, along with what is changing.',
  },
  {
    number: '02',
    icon: Link2,
    title: 'Plan the URL changes',
    text: 'Map relevant old pages to their new destinations and agree the checks, owners and launch dependencies.',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Review before launch',
    text: 'Where staging access and the project schedule allow, check agreed migration details before the new site goes live.',
  },
  {
    number: '04',
    icon: RefreshCw,
    title: 'Check the live site',
    text: 'Review agreed URLs and SEO signals after launch, then share any issues found and practical next steps.',
  },
];

const faqs = [
  {
    question: 'How long does an SEO migration take?',
    answer: 'Timing depends on the size of the site, number of URLs, platform, project schedule and the work included. We agree a realistic scope and timeline after understanding the move.',
  },
  {
    question: 'Will a website migration affect my rankings?',
    answer: 'It can. Search engines need to process changes to URLs, content and site structure, and visibility may fluctuate while they recrawl and reindex pages. Careful planning can reduce avoidable problems, but no agency can guarantee unchanged rankings.',
  },
  {
    question: 'Can you help with a large website migration?',
    answer: 'Yes. The approach depends on URL volume, site architecture, platform and available development resources. We can discuss the requirements and define a suitable scope before work begins.',
  },
];

function MigrationIllustration() {
  return (
    <div className="smm-visual" data-smm-reveal>
      <div className="smm-visual-head">
        <span><i /><i /><i /></span>
        <small>MIGRATION PLANNING VIEW</small>
        <span className="smm-visual-tag">ILLUSTRATIVE</span>
      </div>
      <div className="smm-map">
        <div className="smm-map-column">
          <p><span>BEFORE</span><strong>Current website</strong></p>
          <div className="smm-map-node smm-map-node--root"><Globe2 size={16} /><span>example.co.uk</span></div>
          <div className="smm-map-node"><span className="smm-map-dot" /><span>/services/</span></div>
          <div className="smm-map-node"><span className="smm-map-dot" /><span>/services/seo/</span></div>
          <div className="smm-map-node"><span className="smm-map-dot" /><span>/about/</span></div>
        </div>
        <div className="smm-map-flow" aria-hidden="true"><span /><ArrowRight size={20} /><span /></div>
        <div className="smm-map-column smm-map-column--new">
          <p><span>AFTER</span><strong>New website</strong></p>
          <div className="smm-map-node smm-map-node--root"><Globe2 size={16} /><span>new-example.co.uk</span></div>
          <div className="smm-map-node smm-map-node--mapped"><Check size={14} /><span>/digital-services/</span></div>
          <div className="smm-map-node smm-map-node--mapped"><Check size={14} /><span>/seo/</span></div>
          <div className="smm-map-node smm-map-node--mapped"><Check size={14} /><span>/about-us/</span></div>
        </div>
      </div>
      <div className="smm-visual-foot"><ShieldCheck size={16} /><span>Plan the important details before launch</span><span className="smm-visual-foot-mark" /></div>
    </div>
  );
}

export function SEOMigrationServicesView() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    root.classList.add('smm-motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('smm-visible');
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -28px 0px' });
    root.querySelectorAll<HTMLElement>('[data-smm-reveal]').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="smm-page" ref={rootRef}>
      <section className="smm-hero">
        <span className="smm-hero-orbit smm-hero-orbit--one" aria-hidden="true" />
        <span className="smm-hero-orbit smm-hero-orbit--two" aria-hidden="true" />
        <div className="smm-container">
          <nav className="smm-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/services/seo">SEO &amp; AI Search</Link><span aria-hidden="true">/</span>
            <span aria-current="page">SEO Migration Services</span>
          </nav>
          <div className="smm-hero-grid">
            <div className="smm-hero-copy" data-smm-reveal>
              <p className="smm-eyebrow"><span /> SEO MIGRATION SERVICES</p>
              <h1>Move your website with <em>SEO in mind.</em></h1>
              <p className="smm-hero-lede">A domain change, redesign or platform move can affect how search engines find and understand your pages. We help you plan the SEO details before launch and review the agreed work after.</p>
              <div className="smm-hero-actions">
                <Link href="/contact" className="smm-button smm-button--primary">Discuss your migration <ArrowRight size={17} aria-hidden="true" /></Link>
                <a href="#process" className="smm-button smm-button--secondary">See our process <ArrowDown size={16} aria-hidden="true" /></a>
              </div>
              <p className="smm-hero-note"><ShieldCheck size={16} aria-hidden="true" /> Clear planning, practical checks and realistic expectations. Rankings cannot be guaranteed.</p>
            </div>
            <MigrationIllustration />
          </div>
          <div className="smm-proof-strip" aria-label="Migration planning priorities">
            <div data-smm-reveal><span className="smm-proof-dot" /><strong>URL mapping</strong><small>Relevant pages accounted for</small></div>
            <div data-smm-reveal><span className="smm-proof-dot" /><strong>Launch checks</strong><small>Agreed SEO details reviewed</small></div>
            <div data-smm-reveal><span className="smm-proof-dot" /><strong>Clear ownership</strong><small>Dependencies made visible</small></div>
            <div data-smm-reveal><span className="smm-proof-dot" /><strong>Practical follow-up</strong><small>Issues turned into next steps</small></div>
          </div>
        </div>
      </section>

      <section className="smm-section smm-risk">
        <div className="smm-container smm-risk-grid">
          <div className="smm-section-copy" data-smm-reveal>
            <p className="smm-kicker">PLAN BEFORE THE SWITCH</p>
            <h2>A migration changes more than the design.</h2>
            <p>Search visibility can be affected when pages move, content changes or search engines encounter different signals. A considered plan helps your team catch avoidable gaps and respond to issues with context.</p>
            <Link href="/services/seo-audits" className="smm-text-link">Start with an SEO audit <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="smm-risk-list" data-smm-reveal>
            <div><span><Route size={19} /></span><p><strong>Important URLs are missed</strong><small>Pages without a relevant destination or redirect can be difficult for visitors and crawlers to reach.</small></p></div>
            <div><span><FileCheck2 size={19} /></span><p><strong>Page signals are changed</strong><small>Titles, content, canonicals or indexation settings may not carry across as intended.</small></p></div>
            <div><span><Wrench size={19} /></span><p><strong>Checks are left until launch</strong><small>Staging restrictions, broken links or redirect issues are easier to plan for when owners and timing are clear.</small></p></div>
          </div>
        </div>
      </section>

      <section className="smm-section smm-services" id="scope">
        <div className="smm-container">
          <div className="smm-centered-heading" data-smm-reveal>
            <p className="smm-kicker">SUPPORT BUILT AROUND YOUR MOVE</p>
            <h2>What our migration SEO covers</h2>
            <p>We agree the work around your planned changes, platform, URL volume and available development support.</p>
          </div>
          <div className="smm-service-grid">
            {serviceAreas.map(({ icon: Icon, number, title, text }) => (
              <article className="smm-service-card" key={number} data-smm-reveal>
                <div className="smm-service-top"><span className="smm-service-icon"><Icon size={20} aria-hidden="true" /></span><span className="smm-card-number">{number}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
            <aside className="smm-service-cta" data-smm-reveal>
              <span className="smm-service-icon"><CircleHelp size={20} aria-hidden="true" /></span>
              <h3>Not sure what your move needs?</h3>
              <p>Tell us what is changing and we can discuss a suitable scope with your team.</p>
              <Link href="/contact" className="smm-text-link">Talk through your project <ArrowRight size={16} aria-hidden="true" /></Link>
            </aside>
          </div>
          <p className="smm-scope-note">The services included depend on the agreed project scope and access available from your team.</p>
        </div>
      </section>

      <section className="smm-section smm-process" id="process">
        <div className="smm-container smm-process-layout">
          <div className="smm-section-copy smm-process-copy" data-smm-reveal>
            <p className="smm-kicker">A CLEAR, COLLABORATIVE PLAN</p>
            <h2>From current URLs to confident next steps.</h2>
            <p>We work with your internal team and developers so the SEO requirements are clear at each stage. The final checks depend on the migration scope and project access.</p>
            <Link href="/contact" className="smm-button smm-button--yellow">Plan your migration <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="smm-timeline">
            {processSteps.map(({ number, icon: Icon, title, text }) => (
              <article className="smm-timeline-step" key={number} data-smm-reveal>
                <span className="smm-timeline-number">{number}</span>
                <div className="smm-timeline-content"><div className="smm-timeline-title"><Icon size={18} aria-hidden="true" /><h3>{title}</h3></div><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-section smm-principles">
        <div className="smm-container smm-principles-grid">
          <div className="smm-principles-visual" data-smm-reveal>
            <div className="smm-principles-orbit" aria-hidden="true"><span /><span /><span /></div>
            <div className="smm-checklist-card">
              <div className="smm-checklist-head"><span><ClipboardCheck size={18} /></span><div><small>MIGRATION PLAN</small><strong>Agreed SEO checks</strong></div><span className="smm-checklist-menu">•••</span></div>
              <div className="smm-checklist-row"><span><Check size={13} /></span><p><strong>Priority URLs</strong><small>Mapped to relevant destinations</small></p></div>
              <div className="smm-checklist-row"><span><Check size={13} /></span><p><strong>Page content</strong><small>Key signals included in the review</small></p></div>
              <div className="smm-checklist-row"><span className="smm-checklist-pending" /><p><strong>Launch responsibilities</strong><small>Confirmed with the project team</small></p></div>
              <div className="smm-checklist-footer"><span /> Scope agreed with your team</div>
            </div>
          </div>
          <div className="smm-section-copy" data-smm-reveal>
            <p className="smm-kicker">NO BLIND SPOTS BY DESIGN</p>
            <h2>Useful guidance your team can act on.</h2>
            <p>Migration work involves multiple decisions and people. We make the SEO requirements easier to understand, assign and review, with priorities tied to your site and the changes being made.</p>
            <ul className="smm-principle-list">
              <li><Check size={16} /><span>Recommendations linked to the planned change</span></li>
              <li><Check size={16} /><span>Dependencies and owners discussed early</span></li>
              <li><Check size={16} /><span>Post-launch checks defined within the scope</span></li>
            </ul>
            <p className="smm-muted-note">Search performance can fluctuate during a move. Planning reduces avoidable errors; it cannot guarantee rankings or traffic.</p>
          </div>
        </div>
      </section>

      <section className="smm-section smm-faq" id="faqs">
        <div className="smm-container smm-faq-grid">
          <div className="smm-section-copy" data-smm-reveal>
            <p className="smm-kicker">COMMON QUESTIONS</p>
            <h2>Before you move, get clear on the details.</h2>
            <p>Every migration is different. These answers explain what to expect and where planning can help.</p>
            <Link href="/contact" className="smm-text-link">Ask about your migration <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="smm-faq-list" data-smm-reveal>
            {faqs.map(({ question, answer }, index) => (
              <details className="smm-faq-item" key={question} open={index === 0}>
                <summary><span>{question}</span><ChevronDown size={18} aria-hidden="true" /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-final-cta">
        <div className="smm-container smm-final-grid" data-smm-reveal>
          <div><p className="smm-kicker">GET THE SEO PLAN IN PLACE</p><h2>Planning a website move?</h2><p>Bring your domain change, redesign or platform migration into focus with practical SEO planning around your goals and project constraints.</p></div>
          <div className="smm-final-actions"><Link href="/contact" className="smm-button smm-button--yellow">Discuss your migration <ArrowRight size={17} aria-hidden="true" /></Link><Link href="/services/seo-audits" className="smm-final-link">Explore SEO audits <ArrowRight size={15} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </main>
  );
}
