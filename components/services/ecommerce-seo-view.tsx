'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleHelp,
  FileSearch,
  Gauge,
  GitBranch,
  Layers3,
  PackageCheck,
  Search,
  ShoppingBag,
  Sparkles,
  Workflow,
} from 'lucide-react';

const issues = [
  {
    title: 'Filters creating near-duplicate URLs',
    text: 'Size, colour and price filters can create many URL variations. We review which pages are useful in search and how to manage the rest.',
  },
  {
    title: 'Category pages with little buying guidance',
    text: 'A product grid may not help someone compare options. We look for ways to make priority categories clearer and more useful to shoppers.',
  },
  {
    title: 'Product pages using supplier copy',
    text: 'Shared descriptions can make it harder for your products to stand apart. We identify where original details or better templates may help.',
  },
  {
    title: 'Unavailable products handled inconsistently',
    text: 'Out-of-stock, replaced and discontinued products need considered handling. We review the options against how your catalogue works.',
  },
  {
    title: 'Product details that do not match',
    text: 'Prices, availability and identifiers should be consistent between visible pages, structured data and feeds where those are in use.',
  },
  {
    title: 'Mobile experience getting in the way',
    text: 'Heavy scripts, large images or shifting layouts can frustrate shoppers. We prioritise practical improvements with your development team.',
  },
];

const workstreams = [
  {
    icon: Gauge,
    number: '01',
    title: 'Technical foundations',
    text: 'Help search engines crawl, render and index the pages that matter.',
    details: 'Crawl and indexation, sitemaps, canonical signals, redirects, duplicate URLs and how important content renders.',
  },
  {
    icon: GitBranch,
    number: '02',
    title: 'Site architecture',
    text: 'Organise categories and links around the way people shop.',
    details: 'Category hierarchy, navigation, internal links, URL patterns, breadcrumbs and pagination.',
  },
  {
    icon: ShoppingBag,
    number: '03',
    title: 'Category and product pages',
    text: 'Make key pages more useful for searchers comparing and choosing.',
    details: 'Page titles, headings, product details, variants, images, reviews and unavailable-product handling.',
  },
  {
    icon: PackageCheck,
    number: '04',
    title: 'Product data',
    text: 'Keep product information consistent wherever it appears.',
    details: 'Structured data, prices, availability and identifiers. Feed or Merchant Center work is scoped where relevant.',
  },
  {
    icon: FileSearch,
    number: '05',
    title: 'Buying guidance',
    text: 'Plan useful content for shoppers researching before they buy.',
    details: 'Buying guides, comparisons and how-to content connected to the categories and products they support.',
  },
  {
    icon: Sparkles,
    number: '06',
    title: 'Authority and digital PR',
    text: 'Explore relevant ways to strengthen your brand’s visibility and reputation.',
    details: 'Existing brand mentions, links and outreach opportunities. We do not promise a number of links.',
  },
];

const pageTypes = [
  { type: 'Home and brand pages', search: 'Your brand name', job: 'Confirm who you are and guide visitors to priority categories.', focus: 'Navigation, trust information and clear links.' },
  { type: 'Category pages', search: 'A broad product type', job: 'Help shoppers compare and narrow their choices.', focus: 'Useful introductions, filters and internal links.' },
  { type: 'Collections and subcategories', search: 'A narrower need or use', job: 'Match a more specific requirement.', focus: 'Deciding which filtered pages deserve to be indexed.' },
  { type: 'Product pages', search: 'A product, brand or model', job: 'Give shoppers the information they need to decide.', focus: 'Original details, accurate data, reviews and availability.' },
  { type: 'Guides and comparisons', search: '“How to choose” questions', job: 'Support early research and build confidence.', focus: 'Connect helpful guidance to relevant categories and products.' },
];

const process = [
  { title: 'Discovery and access', text: 'Understand your products, best sellers, seasons and business goals. Agree the relevant account access and measures.' },
  { title: 'Audit and opportunity review', text: 'Review crawlability, site structure, category and product pages, product data and search performance.' },
  { title: 'Prioritised roadmap', text: 'Rank possible work by likely value and effort, then agree responsibilities with your team.' },
  { title: 'Implementation support', text: 'Provide clear specifications and help your team or developers understand what to change and why.' },
  { title: 'Content and authority', text: 'Plan the page improvements, buying guidance and relevant authority work included in your agreed scope.' },
  { title: 'Measure and refine', text: 'Review progress against the goals you set together, explain what changed and shape the next priorities.' },
];

const faqs = [
  {
    q: 'What is ecommerce SEO?',
    a: 'It is the work of making an online store easier for search engines to understand and easier for shoppers to use. It can cover technical health, site structure, product and category pages, product data and measurement.',
  },
  {
    q: 'How is ecommerce SEO different from regular SEO?',
    a: 'Online stores often have large catalogues, filters that create URL variations, changing stock and product pages with similar content. That makes site architecture, duplicate-page handling and accurate product data especially important.',
  },
  {
    q: 'How long does ecommerce SEO take?',
    a: 'It depends on your starting point, catalogue, competition, platform and how quickly changes can be released. Some technical changes may be noticed sooner; building category visibility and useful content can take longer. We do not promise a results date.',
  },
  {
    q: 'How much does ecommerce SEO cost in the UK?',
    a: 'There is no single price for every store. Scope depends on catalogue size, technical complexity and the work your team needs us to deliver. We discuss your requirements and provide pricing in a proposal.',
  },
  {
    q: 'Which ecommerce platforms can you work with?',
    a: 'Our SEO service information covers Shopify, WooCommerce, Magento, PrestaShop, Wix and custom websites. The right scope depends on your store’s setup, access and requirements.',
  },
  {
    q: 'Can you help with a store migration?',
    a: 'If you are planning a store move, tell us about it. We can discuss search visibility, URLs, redirects and launch checks, then confirm which migration support fits your project.',
  },
  {
    q: 'Do you write product and category copy?',
    a: 'Content work can be included in the agreed scope. We can help identify priority pages and shape briefs or page recommendations; the proposal will confirm whether writing is included.',
  },
  {
    q: 'Do you manage Google Merchant Center and product feeds?',
    a: 'Product data and feed requirements can be reviewed as part of a suitable scope. We will confirm whether your project needs recommendations, implementation support or separate Merchant Center work.',
  },
  {
    q: 'Do you guarantee page-one rankings or sales?',
    a: 'No. Search results and sales depend on factors outside an agency’s control. We focus on a clear plan, careful work and reporting against the goals agreed with you.',
  },
  {
    q: 'How does AI search affect my store?',
    a: 'For Google AI Overviews and AI Mode, Google says existing SEO fundamentals still apply and there is no special markup required. Search eligibility, useful content, crawlable pages and accurate product information remain important. We do not promise placement in AI answers.',
  },
  {
    q: 'How do you measure progress?',
    a: 'We agree measures around your goals. Where your analytics and ecommerce tracking provide reliable data, we can review organic visibility, visits, orders or revenue and category performance alongside technical work completed. Attribution differs between tools, so we explain the limits.',
  },
  {
    q: 'What do you need from us to get started?',
    a: 'We will ask about your platform, products, goals and planned site changes. Access to Search Console and analytics can help us understand current performance; the exact information needed depends on the review scope.',
  },
];

function StoreMapIllustration() {
  return (
    <div className="ecom-visual" data-ecom-reveal>
      <div className="ecom-visual-topline"><span>STORE STRUCTURE</span><span>ILLUSTRATIVE</span></div>
      <svg className="ecom-store-map" viewBox="0 0 600 360" role="img" aria-labelledby="ecom-map-title ecom-map-desc">
        <title id="ecom-map-title">Illustrative ecommerce site structure</title>
        <desc id="ecom-map-desc">A home page connects to category pages, collections and product pages, with a guide connected to a category.</desc>
        <g className="ecom-map-lines" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M300 78V126M300 126H128V176M300 126H300V176M300 126H472V176" />
          <path d="M128 216V254M300 216V254M472 216V254M128 292H207M300 292H379M472 292V326" />
          <path className="ecom-map-dash" d="M207 292V252H262" />
        </g>
        <g className="ecom-map-node ecom-map-node--root"><rect x="232" y="36" width="136" height="42" rx="8" /><text x="300" y="62" textAnchor="middle">Home</text></g>
        <g className="ecom-map-node"><rect x="76" y="176" width="104" height="40" rx="7" /><text x="128" y="201" textAnchor="middle">Category</text></g>
        <g className="ecom-map-node ecom-map-node--highlight"><rect x="248" y="176" width="104" height="40" rx="7" /><text x="300" y="201" textAnchor="middle">Category</text></g>
        <g className="ecom-map-node"><rect x="420" y="176" width="104" height="40" rx="7" /><text x="472" y="201" textAnchor="middle">Category</text></g>
        <g className="ecom-map-node"><rect x="76" y="254" width="104" height="40" rx="7" /><text x="128" y="279" textAnchor="middle">Product</text></g>
        <g className="ecom-map-node ecom-map-node--highlight"><rect x="248" y="254" width="104" height="40" rx="7" /><text x="300" y="279" textAnchor="middle">Product</text></g>
        <g className="ecom-map-node"><rect x="420" y="254" width="104" height="40" rx="7" /><text x="472" y="279" textAnchor="middle">Product</text></g>
        <g className="ecom-map-node ecom-map-node--guide"><rect x="207" y="326" width="104" height="28" rx="6" /><text x="259" y="345" textAnchor="middle">Guide</text></g>
        <circle className="ecom-map-dot" cx="300" cy="126" r="4" />
      </svg>
      <div className="ecom-search-preview">
        <span className="ecom-search-preview-icon"><Search size={17} aria-hidden="true" /></span>
        <div><small>ILLUSTRATIVE SEARCH RESULT</small><strong>Useful product details, clearly presented</strong><span>Accurate page content · Consistent product data</span></div>
        <ArrowRight size={18} aria-hidden="true" />
      </div>
    </div>
  );
}

export function EcommerceSEOView() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    root.classList.add('ecom-motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('ecom-visible');
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    root.querySelectorAll<HTMLElement>('[data-ecom-reveal]').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="ecom-seo-page" ref={rootRef}>
      <section className="ecom-hero">
        <div className="ecom-hero-orbit ecom-hero-orbit--one" aria-hidden="true" />
        <div className="ecom-hero-orbit ecom-hero-orbit--two" aria-hidden="true" />
        <div className="ecom-container">
          <nav className="ecom-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/services/seo">SEO &amp; AI Search</Link><span aria-hidden="true">/</span>
            <span aria-current="page">Ecommerce SEO</span>
          </nav>
          <div className="ecom-hero-grid">
            <div className="ecom-hero-copy" data-ecom-reveal>
              <p className="ecom-eyebrow"><span /> ECOMMERCE SEO FOR UK ONLINE STORES</p>
              <h1>Ecommerce SEO for UK online stores, built around how people <em>actually shop</em></h1>
              <p className="ecom-hero-lede">
                We improve how your store is crawled, structured and presented in search, from category
                architecture to product data, so people looking for what you sell can find useful pages.
              </p>
              <p className="ecom-hero-support">Technical foundations, category and product pages, content planning and reporting shaped around your store.</p>
              <div className="ecom-hero-actions">
                <Link href="/contact" className="ecom-button ecom-button--primary">Request a store SEO review <ArrowRight size={17} aria-hidden="true" /></Link>
                <a href="#process" className="ecom-button ecom-button--secondary">See how we work <ArrowDown size={16} aria-hidden="true" /></a>
              </div>
              <p className="ecom-hero-note"><Check size={15} aria-hidden="true" /> No ranking promises. A plan based on your catalogue, platform and goals.</p>
            </div>
            <StoreMapIllustration />
          </div>
        </div>
      </section>

      <section className="ecom-proof-strip" aria-label="Ecommerce SEO focus areas">
        <div className="ecom-container ecom-proof-grid">
          <div data-ecom-reveal><span className="ecom-proof-mark" /><strong>Technical foundations</strong><small>Crawl, render and index</small></div>
          <div data-ecom-reveal><span className="ecom-proof-mark" /><strong>Store architecture</strong><small>Categories, filters and links</small></div>
          <div data-ecom-reveal><span className="ecom-proof-mark" /><strong>Product discovery</strong><small>Useful pages and product data</small></div>
          <div data-ecom-reveal><span className="ecom-proof-mark" /><strong>Clear measurement</strong><small>Progress explained honestly</small></div>
        </div>
      </section>

      <section className="ecom-section ecom-explainer">
        <div className="ecom-container ecom-explainer-grid">
          <div className="ecom-section-intro" data-ecom-reveal>
            <p className="ecom-kicker">THE DISCIPLINE</p>
            <h2>Selling through search takes more than ranking a homepage</h2>
            <p>An online store can have thousands of product pages, filters that create URL variations, stock that changes and categories competing for the same searches.</p>
            <p>Ecommerce SEO makes the structure clearer to search engines and the pages more useful to shoppers. It starts with the different ways people search, then gives those needs the right kind of page.</p>
            <Link href="/services/seo" className="ecom-text-link">Explore our SEO services <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="ecom-channel-panel" data-ecom-reveal>
            <div className="ecom-channel-title"><span>WHERE EACH CHANNEL FITS</span><p>Search can support different parts of the buying journey.</p></div>
            <div className="ecom-channel-row ecom-channel-row--focus"><strong>Ecommerce SEO</strong><span>Build visibility for pages on your own store over time.</span><small>Owned store · no per-click charge</small></div>
            <div className="ecom-channel-row"><strong><Link href="/services/ppc">Paid search</Link></strong><span>Use campaigns for targeted demand, offers and testing.</span><small>Ad budget · platform-dependent</small></div>
            <div className="ecom-channel-row"><strong>Marketplaces</strong><span>Reach shoppers through another platform’s storefront.</span><small>Marketplace rules and fees</small></div>
            <p className="ecom-channel-foot">Stores may use more than one channel. The right mix depends on your goals and resources.</p>
          </div>
        </div>
      </section>

      <section className="ecom-section ecom-problems">
        <div className="ecom-container ecom-problems-grid">
          <div className="ecom-section-intro ecom-problems-intro" data-ecom-reveal>
            <p className="ecom-kicker">COMMON STORE CHALLENGES</p>
            <h2>Why store visibility slips, and what to look at first</h2>
            <p>Most stores do not have one single SEO issue. A handful of structural and content problems can build up as a catalogue grows.</p>
            <Link href="/contact" className="ecom-text-link">Ask us to review your store <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="ecom-issue-list">
            {issues.map((issue, index) => (
              <article className="ecom-issue" data-ecom-reveal key={issue.title}>
                <span className="ecom-issue-number">{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{issue.title}</h3><p>{issue.text}</p></div>
                <ChevronRight size={18} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ecom-section ecom-workstreams" id="workstreams">
        <div className="ecom-container">
          <div className="ecom-centered-heading" data-ecom-reveal>
            <p className="ecom-kicker">WHAT WE DO</p>
            <h2>Six workstreams to make your store easier to find and use</h2>
            <p>Every store needs a different mix. We review the catalogue, platform and goals, then agree which work belongs in your plan.</p>
          </div>
          <div className="ecom-work-grid">
            {workstreams.map((item) => {
              const Icon = item.icon;
              return (
                <article className="ecom-work-card" data-ecom-reveal key={item.number}>
                  <div className="ecom-work-card-top"><span>{item.number}</span><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></div>
                  <h3>{item.title}</h3>
                  <p className="ecom-work-promise">{item.text}</p>
                  <div className="ecom-work-detail"><span>Depending on scope</span><p>{item.details}</p></div>
                </article>
              );
            })}
          </div>
          <div className="ecom-mid-cta" data-ecom-reveal>
            <div><strong>Not sure where to begin?</strong><span>We’ll help you identify the first useful questions for your store.</span></div>
            <Link href="/contact" className="ecom-button ecom-button--primary">Request a store SEO review <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="ecom-section ecom-page-plan">
        <div className="ecom-container">
          <div className="ecom-plan-heading" data-ecom-reveal>
            <div><p className="ecom-kicker">SEARCH DEMAND TO PAGE PLAN</p><h2>We plan your store around the way people search</h2></div>
            <p>Shoppers may search by product type, brand, model or a question they have before buying. Each search has a different job to do.</p>
          </div>
          <table className="ecom-plan-table" aria-label="How ecommerce page types serve different searches">
            <thead><tr><th scope="col">Page type</th><th scope="col">A typical search</th><th scope="col">The page’s job</th><th scope="col">What we focus on</th></tr></thead>
            <tbody>
              {pageTypes.map((row, index) => (
                <tr data-ecom-reveal key={row.type}>
                  <th scope="row"><span className="ecom-plan-mobile-label">PAGE TYPE</span>{row.type}</th>
                  <td><span className="ecom-plan-mobile-label">A TYPICAL SEARCH</span>{row.search}</td>
                  <td><span className="ecom-plan-mobile-label">THE PAGE’S JOB</span>{row.job}</td>
                  <td><span className="ecom-plan-mobile-label">OUR FOCUS</span>{row.focus}<span className="ecom-plan-index" aria-hidden="true">0{index + 1}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="ecom-plan-foot"><span><Search size={17} aria-hidden="true" /></span><p>We begin with your search and store data where available, then combine it with keyword research and your team’s product knowledge.</p><Link href="/contact" className="ecom-text-link">Ask about a category map <ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="ecom-section ecom-platforms">
        <div className="ecom-container ecom-platforms-grid">
          <div className="ecom-section-intro" data-ecom-reveal>
            <p className="ecom-kicker">PLATFORM KNOW-HOW</p>
            <h2>SEO shaped around the platform you sell on</h2>
            <p>Platforms handle URLs, filters, templates and redirects differently. We adapt the review to the store you have rather than assuming every catalogue works the same way.</p>
            <p>Our SEO service covers Shopify, WooCommerce, Magento, PrestaShop, Wix and custom websites. The exact work depends on your platform setup and access.</p>
          </div>
          <div className="ecom-platform-list" data-ecom-reveal>
            <div><span>01</span><strong>Shopify</strong><small>Collections, product pages and store setup</small><Layers3 size={16} aria-hidden="true" /></div>
            <div><span>02</span><strong>WooCommerce</strong><small>Product catalogue, categories and site configuration</small><Layers3 size={16} aria-hidden="true" /></div>
            <div><span>03</span><strong>Magento</strong><small>Catalogue structure and platform-specific requirements</small><Layers3 size={16} aria-hidden="true" /></div>
            <div><span>04</span><strong>PrestaShop, Wix &amp; custom</strong><small>Scope confirmed against your platform and store setup</small><Layers3 size={16} aria-hidden="true" /></div>
          </div>
        </div>
      </section>

      <section className="ecom-section ecom-process" id="process">
        <div className="ecom-container ecom-process-grid">
          <div className="ecom-process-intro" data-ecom-reveal>
            <p className="ecom-kicker">HOW WE WORK</p>
            <h2>A clear path from first conversation to ongoing improvement</h2>
            <p>We agree what is happening, what we need from your team and what comes next.</p>
            <Link href="/contact" className="ecom-button ecom-button--primary">Talk through your store <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="ecom-timeline">
            {process.map((step, index) => (
              <article className="ecom-timeline-step" data-ecom-reveal key={step.title}>
                <span className="ecom-timeline-number">{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ecom-section ecom-measurement">
        <div className="ecom-container ecom-measurement-grid">
          <div className="ecom-section-intro" data-ecom-reveal>
            <p className="ecom-kicker">MEASUREMENT</p>
            <h2>Reporting that connects search to the business</h2>
            <p>Rankings are one signal. We agree what matters to your store, then read the available data in context rather than relying on one convenient figure.</p>
            <div className="ecom-measure-caveat"><CircleHelp size={18} aria-hidden="true" /><p>Analytics, attribution and consent settings affect what can be measured. We check the setup and explain its limits before drawing conclusions.</p></div>
          </div>
          <div className="ecom-report-panel" data-ecom-reveal>
            <div className="ecom-report-head"><span><BarChart3 size={18} aria-hidden="true" /></span><div><small>REPORTING FOCUS</small><strong>Measures agreed around your goals</strong></div></div>
            <ul>
              <li><Check size={16} aria-hidden="true" /><span>Organic performance against agreed measures</span></li>
              <li><Check size={16} aria-hidden="true" /><span>Category and product page observations</span></li>
              <li><Check size={16} aria-hidden="true" /><span>Technical issues reviewed and work completed</span></li>
              <li><Check size={16} aria-hidden="true" /><span>Recommendations and next priorities</span></li>
            </ul>
            <p className="ecom-report-note">Revenue and order analysis depends on reliable analytics and ecommerce tracking access.</p>
          </div>
        </div>
      </section>

      <section className="ecom-section ecom-approach">
        <div className="ecom-container ecom-approach-grid">
          <div className="ecom-approach-stamp" data-ecom-reveal><span><Workflow size={26} aria-hidden="true" /></span><small>OUR APPROACH</small><strong>Evidence first.<br /><em>Priorities always.</em></strong></div>
          <div className="ecom-approach-copy" data-ecom-reveal>
            <p className="ecom-kicker">A PRACTICAL, HONEST PLAN</p>
            <h2>Useful recommendations, without invented results</h2>
            <p>We start with your store, its data and the work your team can realistically deliver. Then we set priorities based on the evidence available and explain what each recommendation is intended to improve.</p>
            <p>We do not publish made-up case studies, traffic figures or ranking guarantees. If we use an example, we label it clearly as illustrative.</p>
            <Link href="/services/seo-audits" className="ecom-text-link">See how our SEO audits work <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="ecom-section ecom-fit">
        <div className="ecom-container ecom-fit-grid">
          <div data-ecom-reveal><p className="ecom-kicker">WHO THIS CAN HELP</p><h2>Built for stores ready to improve how shoppers find them</h2><p>Ecommerce SEO is a better fit when there is time to make meaningful site improvements and a team who can help ship them.</p></div>
          <div className="ecom-fit-list" data-ecom-reveal>
            <span><Check size={16} aria-hidden="true" /> Online stores with a growth plan</span>
            <span><Check size={16} aria-hidden="true" /> Teams planning a redesign or platform move</span>
            <span><Check size={16} aria-hidden="true" /> Retail teams with development capacity</span>
            <span><Check size={16} aria-hidden="true" /> Businesses focused on steady, sustainable progress</span>
            <p>SEO is not an instant-sales channel. If you need to promote a short-term offer, paid channels may be a better fit to discuss.</p>
          </div>
        </div>
      </section>

      <section className="ecom-section ecom-faq" id="faqs">
        <div className="ecom-container ecom-faq-grid">
          <div className="ecom-faq-intro" data-ecom-reveal>
            <p className="ecom-kicker">STRAIGHT ANSWERS</p>
            <h2>Ecommerce SEO: your questions answered</h2>
            <p>Practical answers on scope, platforms, measurement and what to expect.</p>
            <Link href="/contact" className="ecom-text-link">Ask us a question <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="ecom-faq-list">
            {faqs.map((item, index) => (
              <details className="ecom-faq-item" data-ecom-reveal key={item.q}>
                <summary><span className="ecom-faq-num">{String(index + 1).padStart(2, '0')}</span><span>{item.q}</span><span className="ecom-faq-toggle" aria-hidden="true" /></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ecom-final-cta" aria-labelledby="ecom-final-title">
        <div className="ecom-final-orbit" aria-hidden="true" />
        <div className="ecom-container ecom-final-grid">
          <div data-ecom-reveal>
            <p className="ecom-kicker">THE NEXT STEP</p>
            <h2 id="ecom-final-title">Find out where your store could be doing more in search</h2>
            <p>Tell us about your store, its platform and what you want organic search to achieve. We’ll help you understand what may be worth doing first.</p>
            <small>No ranking promises. A clear conversation about your store and its opportunities.</small>
          </div>
          <div className="ecom-final-actions" data-ecom-reveal>
            <Link href="/contact" className="ecom-button ecom-button--yellow">Request a store SEO review <ArrowRight size={17} aria-hidden="true" /></Link>
            <Link href="/services/seo" className="ecom-final-link">Explore SEO &amp; AI Search <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
