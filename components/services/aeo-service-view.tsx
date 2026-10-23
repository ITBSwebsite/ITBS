'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  CircleHelp,
  FileText,
  GitBranch,
  Globe,
  Layers3,
  Link2,
  MessageSquareText,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { ServiceCTA } from './service-cta';

const platforms = [
  { name: 'ChatGPT', logo: '/images/aeo-platforms/chatgpt.png' },
  { name: 'Claude', logo: '/images/aeo-platforms/claude.png' },
  { name: 'Gemini', logo: '/images/aeo-platforms/gemini.png' },
  { name: 'Perplexity', logo: '/images/aeo-platforms/perplexity.png' },
];

const services = [
  {
    number: '01',
    icon: MessageSquareText,
    title: 'Content Structuring for AI Answers',
    description:
      'We refine your content to make key information clear, accurate and easy to interpret. Direct answers and logical formatting help AI systems understand the value your pages offer.',
    tag: 'Answer-ready content',
  },
  {
    number: '02',
    icon: Network,
    title: 'Entity and Semantic Optimisation',
    description:
      'We strengthen the connections between your brand, expertise, products and relevant topics. This helps search systems build a clearer understanding of your business.',
    tag: 'Clear brand context',
  },
  {
    number: '03',
    icon: CircleHelp,
    title: 'Conversational Query Optimisation',
    description:
      'We identify the questions your audience asks across AI-powered search and assistants, then align your content with their intent through relevant, useful answers.',
    tag: 'Real customer questions',
  },
  {
    number: '04',
    icon: GitBranch,
    title: 'Structured Data and Technical SEO',
    description:
      'We review schema markup, crawlability and site structure to help search systems access and interpret your content. These technical foundations support search visibility without guaranteeing citations.',
    tag: 'Strong technical signals',
  },
  {
    number: '05',
    icon: Layers3,
    title: 'Topical Authority Development',
    description:
      'We build connected content around your core services, products and expertise. This adds topical depth to your website and strengthens its relevance to customer questions.',
    tag: 'Connected expertise',
  },
  {
    number: '06',
    icon: ShieldCheck,
    title: 'Trust Signals and Citation Readiness',
    description:
      'We improve factual consistency, strengthen supporting sources and align your brand information across relevant platforms. This builds a more credible foundation for AI-generated answers to reference your business.',
    tag: 'Credible brand signals',
  },
];

const faqs = [
  {
    question: 'What is Answer Engine Optimisation (AEO)?',
    answer:
      'Answer Engine Optimisation (AEO) helps your business get discovered when people use AI tools to find answers, compare products or research services. It focuses on making your content clear, useful and easy for AI systems to interpret, while building the credibility of your brand online.',
  },
  {
    question: 'What is the difference between AEO, SEO and GEO?',
    answer:
      'SEO helps your website appear in traditional search results. AEO focuses on making your content useful for direct answers, while GEO aims to improve your visibility in AI-generated responses. Since these approaches overlap, combining them can help your business reach customers across different search experiences.',
  },
  {
    question: 'How can AEO help my business appear in AI search results?',
    answer:
      "If potential customers are using ChatGPT, Google AI Overviews or Perplexity to research businesses like yours, AEO can help you compete for that visibility. At ITBS, we look at how your content answers customer questions, how search systems access it and how clearly your brand's expertise comes across.",
  },
  {
    question: 'Which AI platforms can AEO target?',
    answer:
      'Your AEO strategy can focus on Google AI Overviews, ChatGPT, Gemini, Perplexity and Microsoft Copilot. The best starting point depends on your industry and where your customers are looking for information. We recommend prioritising relevant platforms rather than spreading your efforts too thinly.',
  },
  {
    question: 'How long does AEO take to show results?',
    answer:
      'There is no set timeline. If your website already has strong SEO foundations and useful content, some improvements may be easier to build on. Other businesses may need more work on content, technical issues or brand credibility first. We recommend tracking progress over time instead of relying on a promised deadline.',
  },
  {
    question: 'How do you measure AI search visibility?',
    answer:
      'We look at whether your brand appears in relevant AI responses, which sources are cited and how your visibility compares with competitors. Where tracking data is available, referral visits and conversions help show whether that visibility is bringing potential customers to your business.',
  },
  {
    question: 'How much do AEO services cost in the UK?',
    answer:
      "The cost depends on your website's current condition, your competition and how much work is needed. Some businesses may need a focused audit and content improvements, while others require ongoing technical SEO and authority building. The best way to estimate the investment is to assess your current position and business goals first.",
  },
  {
    question: 'Can an agency guarantee my brand will appear in AI-generated answers?',
    answer:
      'No. AI platforms control which businesses and sources appear in their responses, and results can change between queries. What we can do is improve the factors within our control, from content quality and technical accessibility to brand credibility, then monitor the results and adjust the strategy accordingly.',
  },
];

function AEOHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`aeo-section-heading aeo-section-heading--${align}`} data-aeo-reveal="up">
      <span className="aeo-kicker"><i aria-hidden="true" />{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function AEOServiceView() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealItems = root.querySelectorAll<HTMLElement>('[data-aeo-reveal]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) {
      revealItems.forEach((item) => item.classList.add('aeo-visible'));
      return;
    }

    root.classList.add('aeo-motion-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aeo-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    );
    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="aeo-page" ref={rootRef}>
      <style>{AEO_STYLES}</style>

      <section className="aeo-hero" aria-labelledby="aeo-title">
        <div className="aeo-hero-glow aeo-hero-glow--one" aria-hidden="true" />
        <div className="aeo-hero-glow aeo-hero-glow--two" aria-hidden="true" />
        <div className="aeo-container">
          <nav className="aeo-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/services/seo">SEO &amp; AI Search</Link><span aria-hidden="true">/</span>
            <span aria-current="page">Answer Engine Optimisation</span>
          </nav>

          <div className="aeo-hero-grid">
            <div className="aeo-hero-copy" data-aeo-reveal="left">
              <span className="aeo-hero-eyebrow"><i aria-hidden="true" />Answer Engine Optimisation</span>
              <h1 id="aeo-title">Answer Engine Optimisation Services <em>in the UK</em></h1>
              <p className="aeo-hero-lede">
                Help your business get discovered across AI-powered search experiences with an AEO strategy built around your content, technical SEO and brand authority.
              </p>
              <div className="aeo-hero-actions">
                <Link href="/contact" className="aeo-button aeo-button--primary">
                  Let&apos;s Talk AEO <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <a href="#aeo-approach" className="aeo-button aeo-button--quiet">
                  Explore our approach <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
              <div className="aeo-hero-note"><ShieldCheck size={16} aria-hidden="true" /><span>Clear strategy. Useful content. No visibility guarantees.</span></div>
            </div>

            <div className="aeo-hero-art" data-aeo-reveal="right" role="img" aria-label="Illustration of AI search understanding a clear answer and connected sources">
              <div className="aeo-art-orbit aeo-art-orbit--one" aria-hidden="true" />
              <div className="aeo-art-orbit aeo-art-orbit--two" aria-hidden="true" />
              <div className="aeo-art-node aeo-art-node--one"><FileText size={17} /><span>Useful content</span></div>
              <div className="aeo-art-node aeo-art-node--two"><Network size={17} /><span>Clear entities</span></div>
              <div className="aeo-art-node aeo-art-node--three"><Globe size={17} /><span>Brand authority</span></div>
              <div className="aeo-art-window">
                <div className="aeo-art-window-top">
                  <span className="aeo-window-dots"><i /><i /><i /></span>
                  <span>AI SEARCH SNAPSHOT</span>
                  <Sparkles size={15} aria-hidden="true" />
                </div>
                <div className="aeo-art-search"><Search size={15} /><span>How can I choose the right service?</span><kbd>↵</kbd></div>
                <div className="aeo-art-answer">
                  <div className="aeo-answer-bot"><Bot size={19} /></div>
                  <div className="aeo-answer-copy">
                    <b>A clear, helpful answer</b>
                    <span>Well-structured information makes your expertise easier to understand.</span>
                  </div>
                </div>
                <div className="aeo-answer-sources"><span>UNDERSTOOD FROM</span><i /><i /><i /><b>your expertise</b></div>
              </div>
              <div className="aeo-art-bubble aeo-art-bubble--left"><span><Check size={13} /></span>Answer-ready content</div>
              <div className="aeo-art-bubble aeo-art-bubble--right"><span><Link2 size={14} /></span>Connected brand signals</div>
              <div className="aeo-art-spark aeo-art-spark--one" aria-hidden="true">✳</div>
              <div className="aeo-art-spark aeo-art-spark--two" aria-hidden="true">✦</div>
            </div>
          </div>

          <a href="#aeo-intro" className="aeo-scroll-cue" aria-label="Scroll to learn about AEO"><ArrowDown size={17} /></a>
        </div>
      </section>

      <main>
        <section className="aeo-intro-section" id="aeo-intro">
          <div className="aeo-container aeo-intro-grid">
            <div className="aeo-intro-title" data-aeo-reveal="left">
              <span className="aeo-kicker"><i aria-hidden="true" />A clearer way to approach AI search</span>
              <h2>AEO sounds complex.<br /><em>Your strategy doesn&apos;t have to be.</em></h2>
            </div>
            <div className="aeo-intro-copy" data-aeo-reveal="right">
              <p>Search has evolved beyond traditional search results to AI-generated answers. Your brand needs more than rankings. It needs to be discoverable across answer engines such as Google AI Overviews, ChatGPT, Gemini, Copilot and Perplexity.</p>
              <p>Our Answer Engine Optimisation services help make your content easier for search systems to understand, while strengthening the technical foundations and brand signals that support visibility in AI-powered search.</p>
              <p>From auditing your current visibility to improving content structure, schema markup and brand authority, we build a practical AEO strategy around your business goals.</p>
              <div className="aeo-focus-tags" aria-label="AEO focus areas"><span>Content</span><i /><span>Technical SEO</span><i /><span>Brand authority</span></div>
            </div>
          </div>
        </section>

        <section className="aeo-platform-section" aria-labelledby="aeo-platform-title">
          <div className="aeo-platform-halo" aria-hidden="true" />
          <div className="aeo-container aeo-platform-inner">
            <div className="aeo-platform-heading" data-aeo-reveal="up">
              <span className="aeo-kicker"><i aria-hidden="true" />Visibility beyond the search results page</span>
              <h2 id="aeo-platform-title">Get discovered across<br /><em>AI search platforms</em></h2>
              <p>Build a clearer presence where people ask questions and explore their options.</p>
            </div>
            <div className="aeo-platform-list">
              {platforms.map((platform, index) => (
                <div className="aeo-platform-pill" key={platform.name} data-aeo-reveal="up" style={{ '--aeo-delay': `${index * 90}ms` } as CSSProperties}>
                  <span className="aeo-platform-icon"><Image src={platform.logo} alt="" aria-hidden="true" width={28} height={28} unoptimized /></span>
                  <span className="aeo-platform-name">{platform.name}</span>
                  <ArrowUpRight size={15} className="aeo-platform-arrow" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="aeo-services-section" id="aeo-approach">
          <div className="aeo-container">
            <AEOHeading
              eyebrow="Our AEO services"
              title="Our approach to Answer Engine Optimisation"
              description="We combine content, technical SEO and brand authority to help your business improve its visibility across AI-powered search experiences."
              align="center"
            />
            <div className="aeo-service-grid">
              {services.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <article className="aeo-service-card" key={service.number} data-aeo-reveal={index % 2 === 0 ? 'left' : 'right'} style={{ '--aeo-delay': `${(index % 3) * 100}ms` } as CSSProperties}>
                    <div className="aeo-service-card-top"><span className="aeo-service-number">{service.number} <i>/ 06</i></span><span className="aeo-service-icon"><ServiceIcon size={21} strokeWidth={1.8} aria-hidden="true" /></span></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="aeo-service-card-foot"><span><Check size={13} aria-hidden="true" />{service.tag}</span><ArrowUpRight size={16} aria-hidden="true" /></div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="aeo-faq-section" id="aeo-faq">
          <div className="aeo-container aeo-faq-grid">
            <div className="aeo-faq-aside" data-aeo-reveal="left">
              <span className="aeo-kicker"><i aria-hidden="true" />AEO, explained</span>
              <h2>Good questions deserve <em>clear answers.</em></h2>
              <p>Understand what AEO can do, how we approach it and what to expect from your strategy.</p>
              <Link href="/contact" className="aeo-faq-contact">Ask us about your goals <ArrowRight size={16} /></Link>
              <div className="aeo-faq-aside-mark" aria-hidden="true"><CircleHelp size={116} strokeWidth={0.7} /></div>
            </div>
            <div className="aeo-faq-list" aria-label="Frequently asked questions">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const answerId = `aeo-faq-answer-${index}`;
                return (
                  <article className={`aeo-faq-item${isOpen ? ' is-open' : ''}`} key={faq.question}>
                    <h3>
                      <button type="button" className="aeo-faq-trigger" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={answerId}>
                        <span className="aeo-faq-index">{String(index + 1).padStart(2, '0')}</span>
                        <span>{faq.question}</span>
                        <i className="aeo-faq-chevron"><ChevronDown size={17} aria-hidden="true" /></i>
                      </button>
                    </h3>
                    <div className="aeo-faq-answer" id={answerId} hidden={!isOpen}>
                      {isOpen ? <p>{faq.answer}</p> : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="aeo-cta-section" data-aeo-reveal="up">
          <div className="aeo-container">
            <ServiceCTA
              badge="AEO STRATEGY, BUILT AROUND YOU"
              title="Make your expertise easier to discover."
              description="Tell us what you want to achieve. We’ll help you understand where your brand stands and what a practical AEO plan could look like."
              primaryBtnText="Let's Talk AEO"
              primaryBtnHref="/contact"
              features={['A practical visibility review', 'Clear priorities for your team', 'A strategy shaped around your goals']}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

const AEO_STYLES = `
  .aeo-page {
    --aeo-navy: #111966;
    --aeo-blue: #315fe9;
    --aeo-blue-dark: #1d348d;
    --aeo-yellow: #fcf000;
    --aeo-gold: #a98b00;
    --aeo-ink: #202938;
    --aeo-muted: #526174;
    --aeo-line: #e2e6f1;
    --aeo-pale: #F5F5F5;
    color: var(--aeo-navy);
    background: #fff;
    overflow: clip;
    font-family: var(--font-body), "Cardo", Georgia, serif;
  }
  .aeo-page *, .aeo-page *::before, .aeo-page *::after { box-sizing: border-box; }
  .aeo-container { width: min(1200px, calc(100% - 64px)); margin: 0 auto; }
  .aeo-page h1, .aeo-page h2, .aeo-page h3, .aeo-page p { margin-top: 0; }
  .aeo-page h1, .aeo-page h2, .aeo-page h3 { font-family: var(--font-heading), "The Seasons", Georgia, serif; }
  .aeo-breadcrumb { display:flex; align-items:center; flex-wrap:wrap; gap:10px; padding:22px 0 0; color:#596384; font-size:13px; letter-spacing:.015em; }
  .aeo-breadcrumb a { color:var(--aeo-muted); transition:color .2s ease; }
  .aeo-breadcrumb a:hover { color:var(--aeo-blue); }
  .aeo-breadcrumb [aria-current="page"] { color:var(--aeo-navy); }
  .aeo-hero { position:relative; isolation:isolate; overflow:hidden; background:radial-gradient(ellipse at 78% 45%, rgba(252,240,0,.12), transparent 38%), linear-gradient(130deg,#fff 0%,#F5F5F5 58%,#F5F5F5 100%); }
  .aeo-hero::after { position:absolute; z-index:-1; inset:0; content:""; opacity:.2; background-image:radial-gradient(rgba(148,110,0,.17) .75px,transparent .75px); background-size:23px 23px; mask-image:linear-gradient(90deg,transparent 22%,#000 100%); }
  .aeo-hero-glow { position:absolute; z-index:-1; width:390px; aspect-ratio:1; border-radius:50%; filter:blur(2px); pointer-events:none; }
  .aeo-hero-glow--one { right:-145px; top:90px; background:radial-gradient(circle,rgba(91,127,247,.13),transparent 68%); }
  .aeo-hero-glow--two { left:38%; bottom:-280px; background:radial-gradient(circle,rgba(252,240,0,.12),transparent 70%); }
  .aeo-hero-grid { min-height:620px; display:grid; grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr); gap:clamp(36px,6.5vw,90px); align-items:center; padding:52px 0 72px; }
  .aeo-hero-copy { position:relative; z-index:2; max-width:560px; }
  .aeo-hero-eyebrow,.aeo-kicker { display:inline-flex; align-items:center; gap:10px; color:var(--brand-gold-text); font-size:11px; font-weight:700; letter-spacing:.16em; line-height:1.4; text-transform:uppercase; }
  .aeo-hero-eyebrow { margin-bottom:22px; padding:8px 13px; border:1px solid rgba(169,139,0,.2); border-radius:999px; background:rgba(255,255,255,.75); }
  .aeo-hero-eyebrow i,.aeo-kicker i { width:8px; height:8px; flex:none; border-radius:50%; background:var(--aeo-yellow); box-shadow:0 0 0 4px rgba(252,240,0,.22); }
  .aeo-hero h1 { max-width:640px; margin-bottom:22px; color:var(--aeo-navy); font-size:clamp(45px,5.45vw,74px); font-weight:800; line-height:1.03; letter-spacing:-.04em; }
  .aeo-hero h1 em { color:var(--aeo-blue); font-style:normal; }
  .aeo-hero-lede { max-width:520px; margin-bottom:27px; color:#202938; font-size:clamp(18px,1.45vw,20px); line-height:1.72; }
  .aeo-hero-actions { display:flex; align-items:center; flex-wrap:wrap; gap:12px; }
  .aeo-button { min-height:52px; display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:0 21px; border:1px solid transparent; border-radius:8px; font-size:14px; font-weight:700; transition:transform .25s ease,background .25s ease,color .25s ease,border-color .25s ease,box-shadow .25s ease; }
  .aeo-button:hover { transform:translateY(-2px); }
  .aeo-button--primary { color:#fff; background:var(--aeo-navy); box-shadow:0 10px 24px rgba(17,25,102,.17); }
  .aeo-button--primary:hover { color:var(--aeo-navy); background: var(--brand-hover-yellow); box-shadow:0 12px 26px rgba(182,166,0,.2); }
  .aeo-button--quiet { color:var(--aeo-navy); background:rgba(255,255,255,.75); border-color:rgba(17,25,102,.14); }
  .aeo-button--quiet:hover { border-color:var(--aeo-blue); background:#fff; }
  .aeo-hero-note { display:flex; align-items:center; gap:8px; margin-top:22px; color:#535d7d; font-size:13px; }
  .aeo-hero-note svg { color:var(--brand-gold-text); }
  .aeo-hero-art { position:relative; min-height:460px; display:grid; place-items:center; isolation:isolate; }
  .aeo-art-window { position:relative; z-index:2; width:min(100%,490px); padding:17px; border:1px solid rgba(255,255,255,.85); border-radius:20px; background:linear-gradient(145deg,rgba(255,255,255,.97),rgba(245,245,245,.9)); box-shadow:0 35px 90px rgba(36,57,127,.17),0 5px 18px rgba(25,44,105,.08); transform:rotate(-2deg); animation:aeo-window-float 8s ease-in-out infinite; }
  .aeo-art-window::before { position:absolute; z-index:-1; inset:-10px; content:""; border:1px solid rgba(91,127,247,.17); border-radius:27px; transform:rotate(4deg); }
  .aeo-art-window-top { display:flex; align-items:center; gap:12px; height:34px; color:#8c91ad; font-family:var(--font-body),Georgia,serif; font-size:9px; font-weight:700; letter-spacing:.16em; }
  .aeo-art-window-top>svg { margin-left:auto; color:#b29b00; }
  .aeo-window-dots { display:flex; gap:4px; }
  .aeo-window-dots i { width:6px; height:6px; display:block; border-radius:50%; background:#d9deef; }
  .aeo-window-dots i:first-child { background:#f6d94b; }
  .aeo-art-search { height:45px; display:flex; align-items:center; gap:10px; margin:9px 0 14px; padding:0 12px; border:1px solid #e5e9f5; border-radius:9px; background:#fff; color:#69718f; font-size:12px; }
  .aeo-art-search>svg { color:var(--aeo-blue); }
  .aeo-art-search kbd { margin-left:auto; padding:3px 6px; border:1px solid #e9ebf2; border-radius:5px; color:#9ba1b8; font-family:inherit; font-size:10px; }
  .aeo-art-answer { display:flex; align-items:flex-start; gap:12px; padding:15px 14px; border:1px solid #e9edfa; border-radius:12px; background:linear-gradient(115deg,#F5F5F5,#fff); }
  .aeo-answer-bot { width:38px; height:38px; display:grid; place-items:center; flex:none; border-radius:11px; color:var(--aeo-navy); background:#F5F5F5; }
  .aeo-answer-copy { display:flex; flex-direction:column; gap:7px; padding-top:1px; }
  .aeo-answer-copy b { color:var(--aeo-navy); font-size:13px; }
  .aeo-answer-copy span { max-width:310px; color:#747b9c; font-size:11px; line-height:1.55; }
  .aeo-answer-sources { display:flex; align-items:center; gap:7px; margin-top:14px; padding:0 2px; color:#8b90a9; font-size:8px; letter-spacing:.12em; }
  .aeo-answer-sources i { width:17px; height:17px; border:3px solid #fff; border-radius:50%; background:#c9d5ff; box-shadow:0 0 0 1px #e3e8f4; }
  .aeo-answer-sources i:nth-of-type(2) { background:#bfeadf; }
  .aeo-answer-sources i:nth-of-type(3) { background:#ffe899; }
  .aeo-answer-sources b { margin-left:2px; color:var(--aeo-navy); font-size:10px; letter-spacing:0; }
  .aeo-art-orbit { position:absolute; z-index:-1; width:395px; height:395px; border:1px solid rgba(73,104,207,.12); border-radius:50%; }
  .aeo-art-orbit--one { transform:scaleX(1.26) rotate(25deg); }
  .aeo-art-orbit--two { width:310px; height:310px; border-style:dashed; transform:scaleX(1.2) rotate(-28deg); }
  .aeo-art-node { position:absolute; z-index:3; display:flex; align-items:center; gap:8px; padding:10px 12px; border:1px solid rgba(222,228,245,.95); border-radius:9px; color:#5d668b; background:rgba(255,255,255,.95); box-shadow:0 9px 24px rgba(27,48,113,.09); font-size:10px; animation:aeo-node-drift 6.5s ease-in-out infinite; }
  .aeo-art-node svg { color:var(--aeo-blue); }
  .aeo-art-node--one { top:46px; left:2%; }
  .aeo-art-node--two { top:72px; right:1%; animation-delay:-1.8s; }
  .aeo-art-node--three { right:5%; bottom:49px; animation-delay:-3.4s; }
  .aeo-art-bubble { position:absolute; z-index:4; display:flex; align-items:center; gap:8px; padding:10px 12px; border:1px solid #e1e6f3; border-radius:9px; color:var(--aeo-navy); background:#fff; box-shadow:0 10px 24px rgba(17,25,102,.1); font-size:10px; font-weight:700; }
  .aeo-art-bubble span { width:22px; height:22px; display:grid; place-items:center; border-radius:6px; color:var(--aeo-navy); background:var(--aeo-yellow); }
  .aeo-art-bubble--left { left:-4%; bottom:100px; transform:rotate(-4deg); }
  .aeo-art-bubble--right { right:-4%; top:118px; transform:rotate(3deg); }
  .aeo-art-spark { position:absolute; color:#b8a000; }
  .aeo-art-spark--one { left:10%; top:125px; font-size:25px; animation:aeo-spark-pulse 3s ease-in-out infinite; }
  .aeo-art-spark--two { right:13%; bottom:104px; color:#6682df; font-size:18px; animation:aeo-spark-pulse 3.8s ease-in-out infinite reverse; }
  .aeo-scroll-cue { position:absolute; left:50%; bottom:19px; width:35px; height:35px; display:grid; place-items:center; border:1px solid #e3e7f2; border-radius:50%; color:var(--aeo-navy); background:rgba(255,255,255,.8); transform:translateX(-50%); transition:background .2s ease,transform .2s ease; }
  .aeo-scroll-cue:hover { background: var(--brand-hover-yellow); transform:translate(-50%,3px); }
  .aeo-intro-section { padding:clamp(64px,6vw,86px) 0; background:#fff; }
  .aeo-intro-grid { display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr); gap:clamp(42px,8vw,120px); align-items:start; }
  .aeo-kicker { margin-bottom:18px; }
  .aeo-section-heading h2,.aeo-intro-title h2,.aeo-platform-heading h2,.aeo-faq-aside h2 { margin-bottom:18px; color:var(--aeo-navy); font-size:clamp(37px,4.3vw,58px); font-weight:800; line-height:1.1; letter-spacing:-.035em; }
  .aeo-intro-title h2 em,.aeo-faq-aside h2 em { color:var(--aeo-blue); font-style:normal; }
  .aeo-intro-copy { padding:27px 30px 24px; border:1px solid rgba(255,255,255,.14); border-radius:20px; background:linear-gradient(180deg,#090e38 0%,#111966 25%,#0b1145 100%); box-shadow:0 18px 46px rgba(12,18,80,.24); }
  .aeo-intro-copy p { margin-bottom:16px; color:#fff; font-size:18px; line-height:1.72; }
  .aeo-intro-copy p:last-of-type { margin-bottom:22px; }
  .aeo-focus-tags { display:flex; align-items:center; flex-wrap:wrap; gap:11px; padding-top:19px; border-top:1px solid rgba(255,255,255,.22); color:rgba(255,255,255,.94); font-size:14px; font-weight:700; }
  .aeo-focus-tags i { width:5px; height:5px; border-radius:50%; background:#d0b900; }
  .aeo-platform-section { position:relative; isolation:isolate; overflow:hidden; padding:clamp(68px,6vw,90px) 0; background:#111966; }
  .aeo-platform-section::before,.aeo-platform-halo { display:none; }
  .aeo-platform-inner { position:relative; }
  .aeo-platform-heading { max-width:750px; margin:0 auto 30px; text-align:center; }
  .aeo-platform-heading h2 { margin-bottom:14px; font-size:clamp(41px,5.15vw,66px); }
  .aeo-platform-heading .aeo-kicker { color:#fcf000; }
  .aeo-platform-heading h2 { color:#fff; }
  .aeo-platform-heading h2 em { color:#fcf000; font-style:normal; }
  .aeo-platform-heading>p { margin-bottom:0; color:rgba(255,255,255,.9); font-size:18px; line-height:1.65; }
  .aeo-platform-list { position:relative; z-index:1; display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:13px; max-width:1030px; margin:0 auto; }
  .aeo-platform-pill { --aeo-delay:0ms; min-height:90px; display:flex; align-items:center; gap:14px; padding:16px 20px; border:1px solid rgba(255,255,255,.55); border-radius:999px; background:rgba(239,244,255,.96); box-shadow:0 10px 26px rgba(26,49,119,.075); transition:transform .3s ease,border-color .3s ease,background .3s ease,box-shadow .3s ease; }
  .aeo-platform-pill:hover { transform:translateY(-4px); border-color:#e7dc00; background: var(--brand-hover-yellow); box-shadow:0 14px 28px rgba(130,121,0,.1); }
  .aeo-platform-icon { width:40px; height:40px; display:grid; place-items:center; flex:none; border-radius:50%; color:var(--aeo-navy); background:rgba(255,255,255,.58); transition:color .25s ease,background .25s ease; }
  .aeo-platform-icon img { width:26px; height:26px; display:block; object-fit:contain; }
  .aeo-platform-icon img[src*="claude"] { width:34px; height:34px; }
  .aeo-platform-icon img[src*="gemini"] { width:34px; height:34px; }
  .aeo-platform-icon img[src*="perplexity"] { width:30px; height:30px; }
  .aeo-platform-pill:hover .aeo-platform-icon { color:var(--aeo-navy); background:rgba(255,255,255,.5); }
  .aeo-platform-name { min-width:0; display:flex; flex:1; color:var(--aeo-navy); font-family:var(--font-heading),Georgia,serif; font-size:21px; font-weight:800; white-space:nowrap; }
  .aeo-platform-arrow { flex:none; color:#9ba3c0; transition:transform .25s ease,color .25s ease; }
  .aeo-platform-pill:hover .aeo-platform-arrow { color:var(--aeo-navy); transform:translate(2px,-2px); }
  .aeo-services-section { padding:clamp(68px,6vw,90px) 0; background:#fff; }
  .aeo-section-heading { max-width:760px; }
  .aeo-section-heading--center { margin:0 auto 38px; text-align:center; }
  .aeo-section-heading h2 { margin-bottom:15px; font-size:clamp(37px,4.3vw,58px); }
  .aeo-section-heading p { max-width:680px; margin:0 auto; color:#202938; font-size:18px; line-height:1.65; }
  .aeo-service-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:17px; }
  .aeo-service-card { position:relative; isolation:isolate; min-height:294px; display:flex; flex-direction:column; padding:23px 23px 20px; overflow:hidden; border:1px solid var(--aeo-line); border-radius:14px; background:#fff; box-shadow:0 12px 32px rgba(27,43,103,.035); transition:background .35s ease,border-color .35s ease,box-shadow .35s ease; }
  .aeo-service-card::before,.aeo-service-card::after { position:absolute; z-index:1; content:""; border-radius:9999px; background:#fff37e; opacity:0; pointer-events:none; transform:rotate(-35deg); transition:opacity .35s ease; }
  .aeo-service-card::before { top:14%; right:-45px; width:250px; height:44px; }
  .aeo-service-card::after { top:42%; right:-25px; width:170px; height:38px; }
  .aeo-service-card:hover,.aeo-service-card:focus-within,.aeo-service-card:active { border-color:#eab308; background: var(--brand-hover-yellow); box-shadow:0 14px 34px rgba(234,179,8,.22),0 4px 12px rgba(17,25,102,.06); }
  .aeo-service-card:hover::before,.aeo-service-card:hover::after,.aeo-service-card:focus-within::before,.aeo-service-card:focus-within::after,.aeo-service-card:active::before,.aeo-service-card:active::after { opacity:1; }
  .aeo-service-card>* { position:relative; z-index:2; }
  .aeo-service-card-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; }
  .aeo-service-number { color:var(--brand-gold-text); font-size:10px; font-weight:700; letter-spacing:.15em; }
  .aeo-service-number i { color:#a5aac0; font-style:normal; font-weight:400; }
  .aeo-service-icon { width:44px; height:44px; display:grid; place-items:center; border:1px solid #e3e9fb; border-radius:12px; color:var(--aeo-blue); background:#F5F5F5; transition:color .25s ease,background .25s ease,border-color .25s ease,transform .25s ease; }
  .aeo-service-card:hover .aeo-service-icon,.aeo-service-card:focus-within .aeo-service-icon,.aeo-service-card:active .aeo-service-icon { color:var(--aeo-navy); border-color:var(--aeo-yellow); background:var(--aeo-yellow); }
  .aeo-service-card h3 { max-width:300px; margin-bottom:12px; color:var(--aeo-navy); font-size:23px; font-weight:800; line-height:1.2; letter-spacing:-.015em; }
  .aeo-service-card>p { margin:0 0 23px; color:#202938; font-size:17px; line-height:1.68; }
  .aeo-service-card-foot { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top:auto; padding-top:14px; border-top:1px solid #edf0f6; color:#535d7d; font-size:13px; }
  .aeo-service-card-foot span { display:flex; align-items:center; gap:6px; }
  .aeo-service-card-foot span svg { color:var(--brand-gold-text); }
  .aeo-service-card-foot>svg { color:var(--aeo-blue); transition:transform .25s ease; }
  .aeo-service-card:hover .aeo-service-card-foot>svg { transform:translate(3px,-3px); }
  .aeo-faq-section { padding:clamp(64px,6vw,86px) 0; background:linear-gradient(180deg,#F5F5F5,#F5F5F5); }
  .aeo-faq-grid { display:grid; grid-template-columns:minmax(250px,.72fr) minmax(0,1.28fr); gap:clamp(40px,8vw,112px); align-items:start; }
  .aeo-faq-aside { position:sticky; top:100px; padding-top:13px; }
  .aeo-faq-aside h2 { max-width:410px; margin-bottom:16px; font-size:clamp(38px,4.2vw,54px); }
  .aeo-faq-aside>p { max-width:365px; margin-bottom:24px; color:#202938; font-size:17px; line-height:1.68; }
  .aeo-faq-contact { display:inline-flex; align-items:center; gap:9px; color:var(--aeo-navy); font-size:15px; font-weight:700; border-bottom:1px solid #bdab00; padding:0 0 7px; transition:gap .2s ease,color .2s ease; }
  .aeo-faq-contact:hover { gap:14px; color:var(--aeo-blue); }
  .aeo-faq-aside-mark { position:absolute; left:-34px; bottom:-178px; color:rgba(49,95,233,.08); pointer-events:none; }
  .aeo-faq-list { display:flex; flex-direction:column; gap:10px; }
  .aeo-faq-item { overflow:hidden; border:1px solid #e1e5ef; border-radius:11px; background:#fff; box-shadow:0 5px 18px rgba(24,37,90,.025); transition:border-color .25s ease,box-shadow .25s ease; }
  .aeo-faq-item.is-open { border-color:#d2c000; box-shadow:0 12px 28px rgba(24,37,90,.07); }
  .aeo-faq-item h3 { margin:0; }
  .aeo-faq-trigger { width:100%; display:grid; grid-template-columns:34px minmax(0,1fr) 30px; align-items:center; gap:12px; padding:17px 17px; border:0; background:none; color:var(--aeo-navy); text-align:left; cursor:pointer; }
  .aeo-faq-index { color:var(--brand-gold-text); font-size:10px; font-weight:700; letter-spacing:.1em; }
  .aeo-faq-trigger>span:nth-child(2) { font-family:var(--font-heading),Georgia,serif; font-size:19px; font-weight:800; line-height:1.35; }
  .aeo-faq-chevron { width:29px; height:29px; display:grid; place-items:center; border:1px solid #e4e8f2; border-radius:50%; color:var(--aeo-navy); transition:transform .28s ease,background .28s ease,color .28s ease,border-color .28s ease; }
  .aeo-faq-item.is-open .aeo-faq-chevron { transform:rotate(180deg); border-color:var(--aeo-navy); color:#fff; background:var(--aeo-navy); }
  .aeo-faq-answer { padding:0 58px 19px 63px; animation:aeo-faq-answer-in .24s ease both; }
  .aeo-faq-answer[hidden] { display:none!important; }
  .aeo-faq-answer p { margin:0; padding:0; color:#202938; font-size:16.5px; line-height:1.72; }
  .aeo-cta-section { padding:24px 0 72px; background:#F5F5F5; }
  .aeo-cta-section .svc-cta-box { margin-top:0; }
  .aeo-page .svc-cta-title { font-size:clamp(32px,3.8vw,48px); font-weight:800; }
  .aeo-page .svc-cta-desc { color:rgba(255,255,255,.94); font-size:18px; }
  .aeo-page .svc-cta-feat-pill { color:rgba(255,255,255,.96); font-size:15px; }
  .aeo-motion-ready [data-aeo-reveal] { opacity:0; transition:opacity .8s ease,transform .8s cubic-bezier(.2,.72,.18,1); transition-delay:var(--aeo-delay,0ms); will-change:opacity,transform; }
  .aeo-motion-ready [data-aeo-reveal="up"] { transform:translate3d(0,34px,0); }
  .aeo-motion-ready [data-aeo-reveal="left"] { transform:translate3d(-42px,12px,0); }
  .aeo-motion-ready [data-aeo-reveal="right"] { transform:translate3d(42px,12px,0); }
  .aeo-motion-ready [data-aeo-reveal].aeo-visible { opacity:1; transform:translate3d(0,0,0); will-change:auto; }
  @keyframes aeo-window-float { 0%,100% { transform:rotate(-2deg) translateY(0); } 50% { transform:rotate(-1deg) translateY(-9px); } }
  @keyframes aeo-faq-answer-in { from { opacity:0; transform:translateY(-5px); } to { opacity:1; transform:translateY(0); } }
  @keyframes aeo-node-drift { 0%,100% { translate:0 0; } 50% { translate:0 -7px; } }
  @keyframes aeo-spark-pulse { 0%,100% { opacity:.55; scale:.9; } 50% { opacity:1; scale:1.12; } }
  @media (max-width:1020px) {
    .aeo-container { width:min(100% - 48px,820px); }
    .aeo-hero-grid { min-height:0; grid-template-columns:minmax(0,1fr) minmax(330px,.9fr); gap:30px; padding:54px 0 66px; }
    .aeo-hero h1 { font-size:clamp(44px,6.5vw,64px); }
    .aeo-hero-art { min-height:400px; }
    .aeo-art-window { width:min(100%,420px); }
    .aeo-art-node--one { left:-2%; }
    .aeo-art-node--two { right:-3%; }
    .aeo-art-bubble--left { left:-7%; }
    .aeo-art-bubble--right { right:-8%; }
    .aeo-intro-grid { gap:48px; }
    .aeo-platform-list { grid-template-columns:repeat(2,minmax(0,1fr)); max-width:710px; }
    .aeo-service-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
    .aeo-faq-grid { grid-template-columns:minmax(220px,.72fr) minmax(0,1.28fr); gap:36px; }
  }
  @media (max-width:700px) {
    .aeo-container { width:calc(100% - 36px); }
    .aeo-breadcrumb { gap:7px; padding-top:17px; font-size:10px; }
    .aeo-hero-grid { display:flex; flex-direction:column; align-items:stretch; gap:27px; padding:42px 0 61px; }
    .aeo-hero-copy { max-width:none; }
    .aeo-hero-eyebrow { margin-bottom:17px; font-size:10px; letter-spacing:.13em; }
    .aeo-hero h1 { max-width:600px; margin-bottom:16px; font-size:clamp(40px,10.8vw,56px); line-height:1.04; }
    .aeo-hero-lede { margin-bottom:20px; font-size:16.5px; line-height:1.68; }
    .aeo-hero-actions { align-items:stretch; }
    .aeo-button { min-height:50px; padding:0 15px; font-size:13px; }
    .aeo-hero-note { margin-top:17px; font-size:11px; }
    .aeo-hero-art { width:100%; min-height:340px; }
    .aeo-art-window { width:min(88%,420px); padding:13px; border-radius:15px; }
    .aeo-art-window-top { font-size:9px; }
    .aeo-art-search { height:40px; font-size:11px; }
    .aeo-art-answer { padding:12px; }
    .aeo-answer-copy b { font-size:12px; }
    .aeo-answer-copy span { font-size:11px; }
    .aeo-art-node { padding:8px 9px; font-size:9px; }
    .aeo-art-node svg { width:14px; height:14px; }
    .aeo-art-node--one { top:25px; left:0; }
    .aeo-art-node--two { top:28px; right:0; }
    .aeo-art-node--three { right:0; bottom:22px; }
    .aeo-art-bubble { padding:7px 9px; font-size:9px; }
    .aeo-art-bubble--left { left:0; bottom:46px; }
    .aeo-art-bubble--right { right:0; top:89px; }
    .aeo-art-bubble span { width:18px; height:18px; }
    .aeo-art-orbit { width:270px; height:270px; }
    .aeo-art-orbit--two { width:215px; height:215px; }
    .aeo-scroll-cue { bottom:12px; }
    .aeo-intro-section,.aeo-services-section { padding:54px 0; }
    .aeo-intro-grid { grid-template-columns:1fr; gap:18px; }
    .aeo-intro-copy { padding:22px 19px 20px; border-radius:18px; }
    .aeo-kicker { margin-bottom:14px; font-size:10px; letter-spacing:.13em; }
    .aeo-section-heading h2,.aeo-intro-title h2,.aeo-platform-heading h2,.aeo-faq-aside h2 { margin-bottom:13px; font-size:clamp(34px,9.2vw,46px); }
    .aeo-intro-copy p { margin-bottom:14px; color:#fff; font-size:17px; line-height:1.68; }
    .aeo-focus-tags { gap:8px; padding-top:16px; font-size:13px; }
    .aeo-platform-section { padding:54px 0; }
    .aeo-platform-heading { margin-bottom:23px; }
    .aeo-platform-heading>p { color:rgba(255,255,255,.92); font-size:17px; line-height:1.62; }
    .aeo-platform-list { grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
    .aeo-platform-pill { min-height:72px; gap:8px; padding:11px 12px; border-radius:999px; }
    .aeo-platform-icon { width:34px; height:34px; border-radius:50%; }
    .aeo-platform-icon img { width:23px; height:23px; }
    .aeo-platform-icon img[src*="claude"] { width:30px; height:30px; }
    .aeo-platform-icon img[src*="gemini"] { width:30px; height:30px; }
    .aeo-platform-icon img[src*="perplexity"] { width:27px; height:27px; }
    .aeo-platform-name { font-size:clamp(16px,4.5vw,18px); }
    .aeo-platform-arrow { width:14px; }
    .aeo-section-heading--center { margin-bottom:26px; }
    .aeo-section-heading p { color:#202938; font-size:17px; line-height:1.65; }
    .aeo-service-grid { grid-template-columns:1fr; gap:12px; }
    .aeo-service-card { min-height:0; padding:19px 18px 17px; }
    .aeo-service-card-top { margin-bottom:15px; }
    .aeo-service-card h3 { max-width:360px; font-size:23px; }
    .aeo-service-card>p { margin-bottom:17px; color:#202938; font-size:17px; line-height:1.68; }
    .aeo-service-card-foot { font-size:14px; }
    .aeo-faq-section { padding:54px 0; }
    .aeo-faq-grid { grid-template-columns:1fr; gap:24px; }
    .aeo-faq-aside { position:relative; top:auto; }
    .aeo-faq-aside h2 { max-width:470px; }
    .aeo-faq-aside>p { max-width:460px; color:#202938; font-size:17px; line-height:1.65; }
    .aeo-faq-aside-mark { right:0; left:auto; bottom:-4px; }
    .aeo-faq-aside-mark svg { width:64px; height:64px; }
    .aeo-faq-list { gap:8px; }
    .aeo-faq-trigger { grid-template-columns:27px minmax(0,1fr) 27px; gap:9px; padding:15px 12px; }
    .aeo-faq-trigger>span:nth-child(2) { font-size:17.5px; }
    .aeo-faq-index { font-size:9px; }
    .aeo-faq-chevron { width:26px; height:26px; }
    .aeo-faq-answer { padding:0 15px 17px 48px; }
    .aeo-faq-answer p { color:#202938; font-size:16.5px; line-height:1.68; }
    .aeo-cta-section { padding:8px 0 48px; }
    .aeo-cta-section .svc-cta-box { padding:34px 20px; border-radius:18px; }
    .aeo-page .svc-cta-title { font-size:clamp(29px,8vw,38px); }
    .aeo-page .svc-cta-desc { font-size:17px; }
    .aeo-page .svc-cta-feat-pill { font-size:14px; }
    .aeo-cta-section .svc-cta-features { gap:7px; }
    .aeo-cta-section .svc-cta-feat-pill { font-size:12px; }
    .aeo-motion-ready [data-aeo-reveal="left"] { transform:translate3d(-22px,10px,0); }
    .aeo-motion-ready [data-aeo-reveal="right"] { transform:translate3d(22px,10px,0); }
  }
  @media (max-width:390px) {
    .aeo-container { width:calc(100% - 24px); }
    .aeo-hero-actions { flex-direction:column; align-items:stretch; }
    .aeo-button { width:100%; }
    .aeo-hero-art { min-height:300px; }
    .aeo-art-window { width:90%; }
    .aeo-art-node--one { left:-4px; }
    .aeo-art-node--two { right:-4px; }
    .aeo-platform-list { grid-template-columns:repeat(2,minmax(0,1fr)); gap:8px; }
    .aeo-platform-pill { min-height:66px; gap:6px; padding:9px; }
    .aeo-platform-icon { width:29px; height:29px; }
    .aeo-platform-icon img { width:20px; height:20px; }
    .aeo-platform-icon img[src*="claude"] { width:26px; height:26px; }
    .aeo-platform-icon img[src*="gemini"] { width:27px; height:27px; }
    .aeo-platform-icon img[src*="perplexity"] { width:24px; height:24px; }
    .aeo-platform-name { font-size:15.5px; }
    .aeo-platform-arrow { display:none; }
    .aeo-intro-copy { padding:20px 16px 18px; }
  }
  @media (prefers-reduced-motion:reduce) {
    .aeo-page *, .aeo-page *::before, .aeo-page *::after { scroll-behavior:auto!important; animation-duration:.01ms!important; animation-iteration-count:1!important; transition-duration:.01ms!important; }
    .aeo-motion-ready [data-aeo-reveal] { opacity:1; transform:none; }
  }
`;
