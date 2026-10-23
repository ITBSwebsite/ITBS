'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  Code2,
  Compass,
  FileText,
  Globe2,
  Layers3,
  Link2,
  MessageSquareText,
  Network,
  ScanSearch,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import {
  geoBenefits,
  geoComparison,
  geoDefinition,
  geoFaqs,
  geoProcess,
  geoSeoRelationship,
  geoServices,
} from './geo-data';

const serviceIcons = {
  compass: Compass,
  search: Search,
  message: MessageSquareText,
  network: Network,
  file: FileText,
  sparkles: Sparkles,
  shield: ShieldCheck,
  chart: ChartNoAxesCombined,
  scan: ScanSearch,
  code: Code2,
  link: Link2,
  globe: Globe2,
} as const;

const benefitIcons = {
  globe: Globe2,
  sparkles: Sparkles,
  trend: TrendingUp,
  shield: ShieldCheck,
  chart: ChartNoAxesCombined,
} as const;

const geoTools = [
  { name: 'Bing Copilot', src: '/images/geo-tools/bing-copilot.png' },
  { name: 'Ahrefs', src: '/images/geo-tools/ahrefs-wordmark.png' },
  { name: 'Semrush', src: '/images/geo-tools/semrush.svg' },
  { name: 'SurferSEO', src: '/images/geo-tools/surfer-transparent.png' },
] as const;

const featuredGeoServices = [geoServices[0], geoServices[7], geoServices[8], geoServices[9]] as const;

function SectionHeading({
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
    <div className={`geo-section-heading geo-section-heading--${align}`} data-geo-reveal="up">
      <span className="geo-eyebrow"><i aria-hidden="true" />{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function GEOServiceView() {
  const rootRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealItems = root.querySelectorAll<HTMLElement>('[data-geo-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealItems.forEach((item) => item.classList.add('geo-visible'));
      return;
    }

    root.classList.add('geo-motion-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('geo-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -42px 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="geo-page" ref={rootRef}>
      <style>{GEO_STYLES}</style>

      <section className="geo-opening" aria-labelledby="geo-title">
        <div className="geo-container">
          <nav className="geo-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/services/seo">SEO &amp; AI Search</Link><span aria-hidden="true">/</span>
            <span aria-current="page">Generative Engine Optimisation</span>
          </nav>

          <div className="geo-opening-grid">
            <div className="geo-opening-copy" data-geo-reveal="left">
              <span className="geo-eyebrow"><i aria-hidden="true" />Generative Engine Optimisation</span>
              <h1 id="geo-title">Why does your business need <em>GEO?</em></h1>
              <p>
                Generative Engine Optimisation delivers measurable advantages as search behaviour shifts toward AI-generated answers and synthesised results.
              </p>
            </div>

            <div className="geo-opening-visual" data-geo-reveal="right" role="img" aria-label="Clear content and trusted brand information brought together in an AI-generated answer">
              <div className="geo-visual-orbit geo-visual-orbit--outer" aria-hidden="true" />
              <div className="geo-visual-orbit geo-visual-orbit--inner" aria-hidden="true" />
              <div className="geo-source geo-source--one"><FileText size={17} aria-hidden="true" /><span>Structured content</span></div>
              <div className="geo-source geo-source--two"><Network size={17} aria-hidden="true" /><span>Clear entities</span></div>
              <div className="geo-answer-card">
                <div className="geo-answer-top"><span className="geo-answer-dots"><i /><i /><i /></span><span>GENERATIVE SEARCH</span><Sparkles size={15} aria-hidden="true" /></div>
                <div className="geo-answer-question"><Search size={15} aria-hidden="true" /><span>Trusted information, made clear</span></div>
                <div className="geo-answer-result">
                  <span className="geo-answer-bot"><Bot size={20} aria-hidden="true" /></span>
                  <span><b>Useful answer</b><small>Relevant information selected from trusted sources.</small></span>
                  <Check size={17} className="geo-answer-check" aria-hidden="true" />
                </div>
                <div className="geo-answer-source"><span>SUPPORTED BY</span><i /><i /><i /><b>clear, trusted sources</b></div>
              </div>
              <span className="geo-visual-note"><ShieldCheck size={15} aria-hidden="true" />Credibility and context</span>
              <span className="geo-visual-spark" aria-hidden="true">✳</span>
            </div>
          </div>
          <a href="#geo-tools" className="geo-scroll-cue" aria-label="Scroll to GEO tools and ecosystem"><ArrowDown size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="geo-tools-section" id="geo-tools" aria-labelledby="geo-tools-title">
        <div className="geo-container geo-tools-grid">
          <div className="geo-tools-copy" data-geo-reveal="left">
            <span className="geo-eyebrow"><i aria-hidden="true" />Tools &amp; ecosystem mentions</span>
            <h2 id="geo-tools-title">Insights from AI search and established SEO tools.</h2>
          </div>
          <div className="geo-tools-detail" data-geo-reveal="right">
            <p>
              Effective GEO work relies on understanding both AI behaviour and traditional SEO signals. Our workflows integrate insights from Bing Copilot alongside platforms like Ahrefs, Semrush, and SurferSEO to validate visibility, intent alignment, and performance.
            </p>
            <div className="geo-tool-list" aria-label="Tools and platforms mentioned">
              {geoTools.map((tool, index) => (
                <span className={`geo-tool-chip geo-tool-chip--${index + 1}`} key={tool.name} style={{ '--geo-delay': `${index * 60}ms` } as CSSProperties}>
                  <Image className={`geo-tool-logo geo-tool-logo--${index + 1}`} src={tool.src} alt={tool.name} width={28} height={28} unoptimized />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="geo-services-section" id="geo-services" aria-labelledby="geo-services-title">
        <div className="geo-container">
          <SectionHeading
            eyebrow="Our GEO services"
            title="Generative Engine Optimisation, built on clarity and trust."
            description="Our generative engine optimisation services make brands understandable, trustworthy, and selectable by AI systems. Each service targets how generative engines evaluate, synthesise, and cite information."
            align="center"
          />

          <div className="geo-service-grid">
            {featuredGeoServices.map((service, index) => {
              const Icon = serviceIcons[service.icon];
              return (
                <article className="geo-service-card" key={service.title} data-geo-reveal="up" style={{ '--geo-delay': `${(index % 4) * 55}ms` } as CSSProperties}>
                  <div className="geo-service-card-top">
                    <span className="geo-service-index">{String(index + 1).padStart(2, '0')} <i>/ 04</i></span>
                    <span className="geo-service-icon"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="geo-service-card-foot"><ArrowUpRight size={16} aria-hidden="true" /></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="geo-definition-section" id="what-is-geo" aria-labelledby="geo-definition-title">
        <div className="geo-container">
          <div className="geo-definition-heading" data-geo-reveal="up">
            <span className="geo-eyebrow"><i aria-hidden="true" />A clearer view of AI search</span>
            <h2 id="geo-definition-title">What is Generative Engine <em>Optimisation?</em></h2>
          </div>
          <div className="geo-definition-grid">
            <div className="geo-definition-copy" data-geo-reveal="left">
              {geoDefinition.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="geo-comparison" data-geo-reveal="right" aria-label="Comparison of traditional SEO and GEO">
              <div className="geo-comparison-head">
                <span>Search visibility</span>
                <span className="geo-comparison-mark"><Layers3 size={17} aria-hidden="true" /> SEO &amp; GEO</span>
              </div>
              <div className="geo-comparison-labels"><span>Traditional SEO</span><span>Generative Engine Optimisation</span></div>
              {geoComparison.map((item, index) => (
                <div className="geo-comparison-row" key={item.focus}>
                  <span className="geo-comparison-focus">{String(index + 1).padStart(2, '0')} · {item.focus}</span>
                  <div className="geo-comparison-values">
                    <p><small>SEO</small>{item.traditional}</p>
                    <p><small>GEO</small>{item.generative}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="geo-process-section" id="geo-process" aria-labelledby="geo-process-title">
        <div className="geo-container">
          <SectionHeading
            eyebrow="A practical process"
            title="How we approach GEO"
            description="From understanding your current visibility to implementing improvements, each step is shaped around how AI systems interpret your brand."
            align="center"
          />
          <div className="geo-process-grid">
            {geoProcess.map((step, index) => (
              <article className="geo-process-card" key={step.title} data-geo-reveal="up" style={{ '--geo-delay': `${index * 80}ms` } as CSSProperties}>
                <span className="geo-process-index">0{index + 1}</span>
                <div className="geo-process-rule" aria-hidden="true"><i /></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < geoProcess.length - 1 ? <ArrowRight className="geo-process-arrow" size={18} aria-hidden="true" /> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="geo-benefits-section" id="geo-benefits" aria-labelledby="geo-benefits-title">
        <div className="geo-container">
          <SectionHeading
            eyebrow="Benefits of GEO"
            title="Benefits of Generative Engine Optimisation"
            description="Generative Engine Optimisation delivers measurable advantages as search behaviour shifts toward AI-generated answers and synthesised results."
          />
          <div className="geo-benefit-grid">
            {geoBenefits.map((benefit, index) => {
              const Icon = benefitIcons[benefit.icon];
              return (
                <article className={`geo-benefit-card geo-benefit-card--${index + 1}`} key={benefit.title} data-geo-reveal="up" style={{ '--geo-delay': `${index * 55}ms` } as CSSProperties}>
                  <span className="geo-benefit-icon"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
                  <span className="geo-benefit-number">0{index + 1}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  <span className="geo-benefit-accent" aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="geo-seo-section" id="geo-and-seo" aria-labelledby="geo-seo-title">
        <div className="geo-container geo-seo-grid">
          <div className="geo-seo-aside" data-geo-reveal="left">
            <span className="geo-eyebrow"><i aria-hidden="true" />SEO + GEO</span>
            <h2 id="geo-seo-title">GEO’s contribution to successful <em>SEO.</em></h2>
            <div className="geo-seo-diagram" aria-label="SEO foundations support GEO visibility">
              <span className="geo-seo-node geo-seo-node--seo">SEO<small>Crawl · Index · Discover</small></span>
              <span className="geo-seo-connector" aria-hidden="true"><i /><i /><i /></span>
              <span className="geo-seo-node geo-seo-node--geo">GEO<small>Understand · Trust · Cite</small></span>
            </div>
          </div>
          <div className="geo-seo-copy" data-geo-reveal="right">
            {geoSeoRelationship.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="geo-faq-section" id="geo-faq" aria-labelledby="geo-faq-title">
        <div className="geo-container geo-faq-grid">
          <div className="geo-faq-aside" data-geo-reveal="left">
            <span className="geo-eyebrow"><i aria-hidden="true" />GEO, explained</span>
            <h2 id="geo-faq-title">Good questions deserve <em>clear answers.</em></h2>
            <p>Frequently asked questions about GEO, traditional SEO, AI platforms, and E-E-A-T.</p>
            <Link href="/contact" className="geo-faq-link">Talk to our team <ArrowRight size={17} aria-hidden="true" /></Link>
            <span className="geo-faq-decoration" aria-hidden="true"><MessageSquareText size={112} strokeWidth={0.7} /></span>
          </div>
          <div className="geo-faq-list" aria-label="Frequently asked questions">
            {geoFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `geo-faq-answer-${index}`;
              return (
                <article className={`geo-faq-item${isOpen ? ' is-open' : ''}`} key={faq.question}>
                  <h3>
                    <button id={`geo-faq-trigger-${index}`} type="button" className="geo-faq-trigger" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={answerId}>
                      <span className="geo-faq-index">{String(index + 1).padStart(2, '0')}</span>
                      <span className="geo-faq-question">{faq.question}</span>
                      <i className="geo-faq-chevron"><ChevronDown size={18} aria-hidden="true" /></i>
                    </button>
                  </h3>
                  <div className="geo-faq-answer" id={answerId} role="region" aria-labelledby={`geo-faq-trigger-${index}`} aria-hidden={!isOpen} hidden={!isOpen}>
                    {isOpen ? <p>{faq.answer}</p> : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

const GEO_STYLES = `
  .geo-page {
    --geo-navy: #111966;
    --geo-blue: #315fe9;
    --geo-blue-dark: #243caa;
    --geo-yellow: #fcf000;
    --geo-gold: #9b8100;
    --geo-ink: #202938;
    --geo-muted: #526174;
    --geo-line: #dfe5f0;
    --geo-pale: #f3f6ff;
    color: var(--geo-ink);
    background: #fff;
    overflow: clip;
    font-family: var(--font-body), "Cardo", Georgia, serif;
  }
  .geo-page *, .geo-page *::before, .geo-page *::after { box-sizing: border-box; }
  .geo-container { width: min(1200px, calc(100% - 64px)); margin: 0 auto; }
  .geo-page h1, .geo-page h2, .geo-page h3, .geo-page p { margin-top: 0; }
  .geo-page h1, .geo-page h2, .geo-page h3 { font-family: var(--font-heading), "The Seasons", Georgia, serif; }
  .geo-page p { color: var(--geo-ink); }
  .geo-page a { color: inherit; }
  .geo-page :focus-visible { outline: 3px solid var(--geo-blue); outline-offset: 4px; }
  .geo-breadcrumb { display:flex; align-items:center; flex-wrap:wrap; gap:10px; padding:22px 0 0; color:#68738b; font-size:13px; letter-spacing:.015em; }
  .geo-breadcrumb a { color:var(--geo-muted); transition:color .2s ease; }
  .geo-breadcrumb a:hover { color:var(--geo-blue); }
  .geo-breadcrumb [aria-current="page"] { color:var(--geo-navy); }
  .geo-eyebrow { display:inline-flex; align-items:center; gap:10px; color:var(--brand-gold-text); font-size:11px; font-weight:700; letter-spacing:.16em; line-height:1.4; text-transform:uppercase; }
  .geo-eyebrow i { width:8px; height:8px; flex:none; border-radius:50%; background:var(--geo-yellow); box-shadow:0 0 0 4px rgba(252,240,0,.22); }

  .geo-opening { position:relative; isolation:isolate; padding:0 0 72px; background:radial-gradient(ellipse at 79% 53%,rgba(252,240,0,.12),transparent 36%),linear-gradient(135deg,#fff 0%,#F5F5F5 63%,#F5F5F5 100%); }
  .geo-opening::after { position:absolute; z-index:-1; inset:0; content:""; opacity:.18; background-image:radial-gradient(rgba(148,110,0,.15) .75px,transparent .75px); background-size:24px 24px; mask-image:linear-gradient(90deg,transparent 25%,#000 100%); }
  .geo-opening-grid { min-height:540px; display:grid; grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr); gap:clamp(34px,6vw,86px); align-items:center; padding:64px 0 48px; }
  .geo-opening-copy { max-width:570px; }
  .geo-opening-copy .geo-eyebrow { margin-bottom:22px; }
  .geo-opening-copy h1 { max-width:600px; margin:0 0 22px; color:var(--geo-navy); font-size:clamp(48px,6.2vw,78px); font-weight:800; line-height:1.01; letter-spacing:-.045em; }
  .geo-opening-copy h1 em,.geo-definition-heading h2 em,.geo-seo-aside h2 em,.geo-faq-aside h2 em { color:var(--geo-blue); font-style:normal; }
  .geo-opening-copy p { max-width:525px; margin:0; color:#202938; font-size:clamp(18px,1.55vw,21px); line-height:1.72; }
  .geo-opening-visual { position:relative; min-height:405px; display:grid; place-items:center; isolation:isolate; }
  .geo-visual-orbit { position:absolute; z-index:-1; border:1px solid rgba(49,95,233,.15); border-radius:50%; }
  .geo-visual-orbit--outer { width:min(100%,500px); aspect-ratio:1.48; transform:rotate(-14deg); }
  .geo-visual-orbit--inner { width:min(86%,420px); aspect-ratio:1.58; border-style:dashed; transform:rotate(17deg); }
  .geo-answer-card { position:relative; z-index:2; width:min(100%,450px); padding:19px; border:1px solid rgba(255,255,255,.9); border-radius:19px; background:linear-gradient(145deg,rgba(255,255,255,.98),rgba(245,245,245,.96)); box-shadow:0 28px 70px rgba(35,54,126,.16),0 5px 16px rgba(25,44,105,.07); }
  .geo-answer-top { display:flex; align-items:center; gap:11px; height:27px; color:#8b91aa; font-size:9px; font-weight:700; letter-spacing:.16em; }
  .geo-answer-top>svg { margin-left:auto; color:var(--geo-gold); }
  .geo-answer-dots { display:flex; gap:4px; }
  .geo-answer-dots i { width:6px; height:6px; border-radius:50%; background:#d8deee; }
  .geo-answer-dots i:first-child { background:#e1c900; }
  .geo-answer-question { display:flex; align-items:center; gap:10px; min-height:46px; margin:13px 0 14px; padding:0 12px; border:1px solid #e5eaf5; border-radius:10px; color:#66718a; background:#fff; font-size:12px; }
  .geo-answer-question svg { color:var(--geo-blue); }
  .geo-answer-result { display:flex; align-items:center; gap:13px; padding:16px 14px; border:1px solid #e7ecf8; border-radius:13px; background:linear-gradient(115deg,#F5F5F5,#fff); }
  .geo-answer-bot { width:42px; height:42px; display:grid; place-items:center; flex:none; border-radius:12px; color:var(--geo-blue); background:#e9efff; }
  .geo-answer-result>span:nth-child(2) { display:grid; gap:6px; }
  .geo-answer-result b { color:var(--geo-navy); font-size:14px; }
  .geo-answer-result small { color:#526174; font-size:12px; line-height:1.5; }
  .geo-answer-check { margin-left:auto; flex:none; color:var(--brand-gold-text); }
  .geo-answer-source { display:flex; align-items:center; gap:7px; margin-top:15px; color:#7c849a; font-size:8px; font-weight:700; letter-spacing:.1em; }
  .geo-answer-source i { width:17px; height:17px; border:3px solid #fff; border-radius:50%; background:#bfcfff; box-shadow:0 0 0 1px #e1e7f2; }
  .geo-answer-source i:nth-of-type(2) { background:#c5e8da; }
  .geo-answer-source i:nth-of-type(3) { background:#f0dd7b; }
  .geo-answer-source b { color:var(--geo-navy); font-size:9px; letter-spacing:0; }
  .geo-source,.geo-visual-note { position:absolute; z-index:3; display:flex; align-items:center; gap:8px; padding:10px 13px; border:1px solid #e6eaf3; border-radius:10px; color:var(--geo-navy); background:#fff; box-shadow:0 12px 28px rgba(34,48,103,.09); font-size:11px; font-weight:700; }
  .geo-source svg,.geo-visual-note svg { color:var(--geo-blue); }
  .geo-source--one { top:48px; left:2%; }
  .geo-source--two { right:0; top:82px; }
  .geo-visual-note { right:5%; bottom:35px; color:#4d5a70; font-weight:600; }
  .geo-visual-note svg { color:var(--geo-gold); }
  .geo-visual-spark { position:absolute; left:11%; bottom:53px; color:#d9c500; font-size:24px; }
  .geo-scroll-cue { width:38px; height:38px; display:grid; place-items:center; margin:0 auto; border:1px solid #dfe5f0; border-radius:50%; color:var(--geo-blue)!important; background:rgba(255,255,255,.72); transition:transform .22s ease,border-color .22s ease; }
  .geo-scroll-cue:hover { transform:translateY(3px); border-color:var(--geo-blue); }

  .geo-tools-section { padding:76px 0; border-top:1px solid #e8edf6; border-bottom:1px solid #e8edf6; background:#fff; }
  .geo-tools-grid { display:grid; grid-template-columns:minmax(0,.86fr) minmax(0,1.14fr); gap:clamp(36px,7vw,100px); align-items:center; }
  .geo-tools-copy h2 { max-width:470px; margin:17px 0 0; color:var(--geo-navy); font-size:clamp(30px,3.6vw,46px); font-weight:700; line-height:1.12; letter-spacing:-.028em; }
  .geo-tools-detail p { margin:0 0 23px; color:var(--geo-ink); font-size:17px; line-height:1.75; }
  .geo-tool-list { display:flex; flex-wrap:wrap; gap:10px; }
  .geo-tool-chip { width:60px; height:60px; flex:0 0 60px; display:inline-flex; align-items:center; justify-content:center; padding:7px; overflow:hidden; border:1px solid #e1e7f1; border-radius:999px; background:#fff; box-shadow:0 5px 14px rgba(20,35,94,.045); transition:transform .25s ease,border-color .25s ease,box-shadow .25s ease; }
  .geo-tool-chip--1 { padding:3px; }
  .geo-tool-chip--2 { width:124px; flex-basis:124px; background:#fff; }
  .geo-tool-chip:hover { transform:translateY(-2px); border-color:#c4d1f4; box-shadow:0 10px 22px rgba(20,35,94,.1); }
  .geo-tool-logo { width:100%; height:100%; display:block; object-fit:contain; }
  .geo-tool-logo--1 { object-fit:cover; object-position:center; }
  .geo-tool-logo--2 { width:108px; height:68px; object-fit:contain; }
  .geo-tool-logo--3,.geo-tool-logo--4 { width:36px; height:36px; }

  .geo-services-section { padding:clamp(76px,8vw,110px) 0; background:linear-gradient(180deg,#F5F5F5 0%,#fff 100%); }
  .geo-section-heading { max-width:680px; margin-bottom:40px; }
  .geo-section-heading--center { margin-right:auto; margin-left:auto; text-align:center; }
  .geo-section-heading h2 { margin:16px 0 14px; color:var(--geo-navy); font-size:clamp(36px,4.5vw,58px); font-weight:800; line-height:1.08; letter-spacing:-.04em; }
  .geo-section-heading p { margin:0; color:var(--geo-muted); font-size:18px; line-height:1.72; }
  .geo-service-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:18px; }
  .geo-service-card { position:relative; min-height:280px; display:flex; flex-direction:column; padding:24px 24px 19px; overflow:hidden; border:1px solid #dfe5f0; border-radius:17px; background:#fff; box-shadow:0 12px 32px rgba(28,43,96,.045); transition:transform .3s ease,background .35s ease,border-color .35s ease,box-shadow .35s ease; }
  .geo-service-card::before { position:absolute; z-index:0; top:15px; right:-26px; bottom:10px; width:220px; border-radius:30px; content:""; opacity:0; pointer-events:none; background:repeating-linear-gradient(135deg,transparent 0 22px,rgba(255,243,126,.84) 22px 43px); transform:translateX(14px); transition:opacity .25s ease,transform .35s ease; }
  .geo-service-card::after { position:absolute; z-index:1; top:0; left:24px; right:24px; height:3px; border-radius:0 0 4px 4px; content:""; opacity:0; pointer-events:none; background:linear-gradient(90deg,#fcf000,#e1c900); transform:scaleX(.35); transform-origin:left; transition:opacity .25s ease,transform .35s ease; }
  .geo-service-card > * { position:relative; z-index:2; }
  .geo-service-card:hover,.geo-service-card:focus-within { transform:translateY(-5px); border-color:#eab308; background: var(--brand-hover-yellow); box-shadow:0 14px 34px rgba(234,179,8,.22),0 4px 12px rgba(17,25,102,.06); }
  .geo-service-card:hover::before,.geo-service-card:focus-within::before { opacity:1; transform:translateX(0); }
  .geo-service-card:hover::after,.geo-service-card:focus-within::after { opacity:1; transform:scaleX(1); }
  .geo-service-card-top { display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:21px; }
  .geo-service-index { color:var(--brand-gold-text); font-size:12px; font-weight:700; letter-spacing:.1em; }
  .geo-service-index i { color:#a3aec3; font-style:normal; }
  .geo-service-icon { width:48px; height:48px; display:grid; place-items:center; border:1px solid #e2e9ff; border-radius:14px; color:var(--geo-blue); background:#F5F5F5; transition:color .25s ease,background .25s ease,border-color .25s ease,transform .25s ease; }
  .geo-service-card:hover .geo-service-icon,.geo-service-card:focus-within .geo-service-icon { color:var(--geo-navy); border-color:#fcf000; background:#fcf000; }
  .geo-service-card h3 { max-width:330px; margin:0 0 12px; color:var(--geo-navy); font-size:23px; font-weight:700; line-height:1.18; letter-spacing:-.018em; }
  .geo-service-card p { margin:0 0 23px; color:var(--geo-muted); font-size:16px; line-height:1.63; }
  .geo-service-card-foot { display:flex; align-items:center; justify-content:flex-end; gap:10px; margin-top:auto; padding-top:14px; border-top:1px solid #edf0f5; color:#5c6b83; }
  .geo-service-card-foot>svg { color:var(--geo-blue); transition:transform .25s ease; }
  .geo-service-card:hover .geo-service-card-foot>svg,.geo-service-card:focus-within .geo-service-card-foot>svg { transform:translate(3px,-3px); }

  .geo-definition-section { padding:clamp(78px,8vw,112px) 0; background:#fff; }
  .geo-definition-heading { max-width:760px; margin:0 auto 45px; text-align:center; }
  .geo-definition-heading h2 { margin:17px 0 0; color:var(--geo-navy); font-size:clamp(38px,5vw,62px); font-weight:800; line-height:1.08; letter-spacing:-.04em; }
  .geo-definition-grid { display:grid; grid-template-columns:minmax(0,1.08fr) minmax(370px,.92fr); gap:clamp(38px,6vw,80px); align-items:start; }
  .geo-definition-copy { display:grid; gap:17px; }
  .geo-definition-copy p,.geo-seo-copy p { margin:0; color:var(--geo-ink); font-size:17px; line-height:1.76; }
  .geo-comparison { overflow:hidden; border:1px solid #dfe5f0; border-radius:18px; background:#fff; box-shadow:0 18px 45px rgba(22,38,92,.075); }
  .geo-comparison-head { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:18px 20px; color:#fff; background:var(--geo-navy); font-size:15px; font-weight:700; }
  .geo-comparison-mark { display:flex; align-items:center; gap:7px; color:#eef1ff; font-size:12px; }
  .geo-comparison-mark svg { color:#fcf000; }
  .geo-comparison-labels { display:grid; grid-template-columns:1fr 1fr; gap:12px; padding:13px 18px 10px; color:#68738b; font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; }
  .geo-comparison-labels span:last-child { color:var(--geo-blue); }
  .geo-comparison-row { padding:13px 18px 15px; border-top:1px solid #edf0f5; }
  .geo-comparison-focus { display:block; margin-bottom:9px; color:var(--brand-gold-text); font-size:11px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; }
  .geo-comparison-values { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
  .geo-comparison-values p { margin:0; color:var(--geo-muted); font-size:14px; line-height:1.5; }
  .geo-comparison-values small { display:none; }
  .geo-comparison-values p:last-child { color:var(--geo-navy); font-weight:700; }

  .geo-process-section { position:relative; padding:clamp(78px,8vw,108px) 0; color:#fff; background:linear-gradient(125deg,#111966 0%,#18257e 56%,#203797 100%); }
  .geo-process-section::before { position:absolute; inset:0; content:""; opacity:.12; background-image:radial-gradient(rgba(255,255,255,.68) .7px,transparent .7px); background-size:24px 24px; mask-image:linear-gradient(110deg,transparent,#000); pointer-events:none; }
  .geo-process-section .geo-section-heading { position:relative; max-width:720px; }
  .geo-process-section .geo-section-heading h2 { color:#fff; }
  .geo-process-section .geo-section-heading p { color:#d9e0ff; }
  .geo-process-section .geo-eyebrow { color:#f2df47; }
  .geo-process-grid { position:relative; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:15px; }
  .geo-process-card { position:relative; min-height:290px; padding:26px 25px; border:1px solid rgba(222,231,255,.23); border-radius:17px; background:rgba(255,255,255,.075); backdrop-filter:blur(4px); transition:transform .28s ease,border-color .28s ease,background .32s ease,box-shadow .28s ease; }
  .geo-process-card:hover,.geo-process-card:focus-within { transform:translateY(-4px); border-color:#fcf000; background: var(--brand-hover-yellow); box-shadow:0 16px 34px rgba(252,240,0,.2); }
  .geo-process-index { color:#fcf000; font-size:13px; font-weight:700; letter-spacing:.13em; }
  .geo-process-rule { position:relative; height:2px; margin:18px 0 22px; background:rgba(216,224,255,.28); transition:background .28s ease; }
  .geo-process-rule i { position:absolute; top:50%; left:0; width:9px; height:9px; border:2px solid #fcf000; border-radius:50%; background:#172474; transform:translateY(-50%); transition:background .28s ease,border-color .28s ease; }
  .geo-process-card h3 { max-width:340px; margin:0 0 12px; color:#fff; font-size:25px; font-weight:700; line-height:1.17; transition:color .28s ease; }
  .geo-process-card p { margin:0; color:#e1e7ff; font-size:16px; line-height:1.66; transition:color .28s ease; }
  .geo-process-arrow { position:absolute; top:32px; right:26px; color:#e6d500; transition:color .28s ease; }
  .geo-process-card:hover .geo-process-index,.geo-process-card:focus-within .geo-process-index { color:var(--brand-gold-text); }
  .geo-process-card:hover .geo-process-rule,.geo-process-card:focus-within .geo-process-rule { background:rgba(17,25,102,.3); }
  .geo-process-card:hover .geo-process-rule i,.geo-process-card:focus-within .geo-process-rule i { border-color:var(--geo-navy); background:var(--geo-navy); }
  .geo-process-card:hover h3,.geo-process-card:focus-within h3 { color:var(--geo-navy); }
  .geo-process-card:hover p,.geo-process-card:focus-within p { color:#202938; }
  .geo-process-card:hover .geo-process-arrow,.geo-process-card:focus-within .geo-process-arrow { color:var(--geo-navy); }

  .geo-benefits-section { padding:clamp(78px,8vw,108px) 0; background:linear-gradient(180deg,#F5F5F5,#fff 75%); }
  .geo-benefits-section .geo-section-heading { max-width:760px; margin-bottom:38px; }
  .geo-benefit-grid { display:grid; grid-template-columns:repeat(6,minmax(0,1fr)); gap:16px; }
  .geo-benefit-card { position:relative; min-height:230px; grid-column:span 2; padding:23px 23px 28px; overflow:hidden; border:1px solid #dfe5f0; border-radius:17px; background:#fff; box-shadow:0 12px 30px rgba(26,43,101,.055); transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease; }
  .geo-benefit-card--1,.geo-benefit-card--2 { grid-column:span 3; }
  .geo-benefit-card:hover { transform:translateY(-4px); border-color:#d7c900; box-shadow:0 19px 42px rgba(26,43,101,.1); }
  .geo-benefit-icon { width:46px; height:46px; display:grid; place-items:center; border-radius:13px; color:var(--geo-blue); background:#F5F5F5; }
  .geo-benefit-number { position:absolute; top:30px; right:23px; color:#b9c2d7; font-size:12px; font-weight:700; letter-spacing:.12em; }
  .geo-benefit-card h3 { position:relative; margin:19px 0 8px; color:var(--geo-navy); font-size:25px; font-weight:700; line-height:1.2; }
  .geo-benefit-card p { position:relative; max-width:440px; margin:0; color:var(--geo-muted); font-size:16px; line-height:1.62; }
  .geo-benefit-accent { position:absolute; width:135px; height:135px; right:-74px; bottom:-88px; border:1px solid rgba(49,95,233,.13); border-radius:50%; box-shadow:0 0 0 15px rgba(49,95,233,.035),0 0 0 31px rgba(49,95,233,.025); }

  .geo-seo-section { position:relative; padding:clamp(82px,8.5vw,116px) 0; background:#F5F5F5; }
  .geo-seo-section::before { position:absolute; inset:0; content:""; opacity:.46; background:radial-gradient(ellipse at 18% 80%,rgba(89,126,236,.13),transparent 35%),radial-gradient(ellipse at 85% 10%,rgba(134,164,255,.16),transparent 32%); pointer-events:none; }
  .geo-seo-grid { position:relative; display:grid; grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr); gap:clamp(42px,7vw,100px); align-items:start; }
  .geo-seo-aside { position:sticky; top:100px; }
  .geo-seo-aside h2 { max-width:470px; margin:18px 0 30px; color:var(--geo-navy); font-size:clamp(38px,4.8vw,60px); font-weight:800; line-height:1.07; letter-spacing:-.04em; }
  .geo-seo-diagram { display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:12px; max-width:460px; padding:17px; border:1px solid rgba(207,216,239,.9); border-radius:17px; background:rgba(255,255,255,.68); }
  .geo-seo-node { display:grid; gap:6px; padding:14px 12px; border-radius:12px; color:#fff; background:var(--geo-navy); font-size:20px; font-weight:700; }
  .geo-seo-node small { color:#dfe5ff; font-family:var(--font-body),Georgia,serif; font-size:11px; font-weight:400; line-height:1.4; }
  .geo-seo-node--geo { background:var(--geo-blue); }
  .geo-seo-connector { display:flex; align-items:center; gap:4px; }
  .geo-seo-connector i { width:5px; height:5px; border-radius:50%; background:#9ba9cf; }
  .geo-seo-copy { display:grid; gap:19px; }
  .geo-seo-copy p { font-size:17px; line-height:1.78; }

  .geo-faq-section { padding:clamp(82px,8.5vw,116px) 0; background:#fff; }
  .geo-faq-grid { display:grid; grid-template-columns:minmax(260px,.72fr) minmax(0,1.28fr); gap:clamp(40px,7vw,100px); align-items:start; }
  .geo-faq-aside { position:relative; overflow:hidden; }
  .geo-faq-aside h2 { max-width:450px; margin:17px 0 18px; color:var(--geo-navy); font-size:clamp(39px,4.8vw,60px); font-weight:800; line-height:1.05; letter-spacing:-.04em; }
  .geo-faq-aside p { max-width:400px; margin:0; color:var(--geo-muted); font-size:17px; line-height:1.7; }
  .geo-faq-link { position:relative; z-index:1; display:inline-flex; align-items:center; gap:10px; margin-top:25px; padding-bottom:8px; border-bottom:1px solid #c4ad00; color:var(--geo-navy)!important; font-size:16px; font-weight:700; transition:gap .2s ease,color .2s ease; }
  .geo-faq-link:hover { gap:15px; color:var(--geo-blue)!important; }
  .geo-faq-decoration { position:absolute; z-index:0; left:-26px; bottom:-112px; color:#e5ebfa; pointer-events:none; }
  .geo-faq-list { display:grid; gap:12px; }
  .geo-faq-item { border:1px solid #dfe5f0; border-radius:15px; overflow:hidden; background:#fff; box-shadow:0 8px 23px rgba(26,43,101,.04); transition:border-color .24s ease,box-shadow .24s ease; }
  .geo-faq-item.is-open { border-color:#d6c300; box-shadow:0 13px 30px rgba(26,43,101,.075); }
  .geo-faq-item h3 { margin:0; }
  .geo-faq-trigger { width:100%; display:grid; grid-template-columns:35px minmax(0,1fr) 38px; align-items:center; gap:15px; padding:18px 19px; border:0; text-align:left; color:var(--geo-navy); background:transparent; cursor:pointer; }
  .geo-faq-index { color:var(--brand-gold-text); font-size:12px; font-weight:700; letter-spacing:.1em; }
  .geo-faq-question { font-family:var(--font-heading),"The Seasons",Georgia,serif; font-size:20px; font-weight:700; line-height:1.3; }
  .geo-faq-chevron { width:36px; height:36px; display:grid; place-items:center; border:1px solid #e0e6f0; border-radius:50%; color:var(--geo-navy); background:#fff; font-style:normal; transition:transform .25s ease,color .25s ease,background .25s ease,border-color .25s ease; }
  .geo-faq-item.is-open .geo-faq-chevron { transform:rotate(180deg); border-color:var(--geo-navy); color:#fff; background:var(--geo-navy); }
  .geo-faq-answer { display:block; }
  .geo-faq-answer[hidden] { display:none!important; }
  .geo-faq-answer p { margin:0; padding:0 72px 22px 69px; color:var(--geo-muted); font-size:16px; line-height:1.75; }

  .geo-motion-ready [data-geo-reveal] { opacity:0; transition:opacity .7s ease,transform .7s cubic-bezier(.2,.72,.18,1); transition-delay:var(--geo-delay,0ms); will-change:opacity,transform; }
  .geo-motion-ready [data-geo-reveal="up"] { transform:translate3d(0,24px,0); }
  .geo-motion-ready [data-geo-reveal="left"] { transform:translate3d(-28px,9px,0); }
  .geo-motion-ready [data-geo-reveal="right"] { transform:translate3d(28px,9px,0); }
  .geo-motion-ready [data-geo-reveal].geo-visible { opacity:1; transform:translate3d(0,0,0); will-change:auto; }

  @media (max-width:1020px) {
    .geo-opening-grid { grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr); gap:35px; }
    .geo-opening-copy h1 { font-size:clamp(46px,6.5vw,66px); }
    .geo-service-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
    .geo-definition-grid { grid-template-columns:1fr; }
    .geo-comparison { max-width:none; }
    .geo-process-grid { gap:12px; }
    .geo-process-card { padding:23px 20px; }
    .geo-process-card h3 { font-size:23px; }
    .geo-benefit-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
    .geo-benefit-card,.geo-benefit-card--1,.geo-benefit-card--2 { grid-column:span 1; }
  }
  @media (max-width:760px) {
    .geo-container { width:min(100% - 38px,600px); }
    .geo-opening { padding-bottom:43px; }
    .geo-breadcrumb { gap:7px; padding-top:17px; font-size:12px; }
    .geo-opening-grid { min-height:0; grid-template-columns:1fr; gap:22px; padding:49px 0 27px; }
    .geo-opening-copy .geo-eyebrow { margin-bottom:19px; }
    .geo-eyebrow { font-size:10px; letter-spacing:.13em; }
    .geo-opening-copy h1 { max-width:560px; margin-bottom:15px; font-size:clamp(41px,10vw,58px); line-height:1.04; }
    .geo-opening-copy p { font-size:17px; line-height:1.68; }
    .geo-opening-visual { min-height:300px; margin:0 -5px; }
    .geo-visual-orbit--outer { width:90%; }
    .geo-visual-orbit--inner { width:77%; }
    .geo-answer-card { width:min(100% - 28px,420px); padding:16px; border-radius:16px; }
    .geo-source,.geo-visual-note { padding:8px 10px; font-size:10px; }
    .geo-source--one { top:8px; left:0; }
    .geo-source--two { top:25px; right:0; }
    .geo-visual-note { right:1%; bottom:2px; }
    .geo-visual-spark { left:7%; bottom:16px; }
    .geo-scroll-cue { width:34px; height:34px; }
    .geo-tools-section { padding:55px 0; }
    .geo-tools-grid { grid-template-columns:1fr; gap:19px; }
    .geo-tools-copy h2 { max-width:560px; margin-top:14px; font-size:clamp(31px,8vw,42px); }
    .geo-tools-detail p { margin-bottom:18px; font-size:16px; line-height:1.7; }
    .geo-tool-list { gap:8px; }
    .geo-tool-chip { width:52px; height:52px; flex-basis:52px; padding:5px; }
    .geo-tool-chip--1 { padding:3px; }
    .geo-tool-chip--2 { width:108px; flex-basis:108px; }
    .geo-tool-logo--2 { width:96px; height:60px; object-fit:contain; }
    .geo-tool-logo--3,.geo-tool-logo--4 { width:31px; height:31px; }
    .geo-services-section,.geo-definition-section,.geo-process-section,.geo-benefits-section,.geo-seo-section,.geo-faq-section { padding:62px 0; }
    .geo-section-heading { margin-bottom:28px; }
    .geo-section-heading h2,.geo-definition-heading h2 { margin:14px 0 12px; font-size:clamp(34px,8vw,46px); }
    .geo-section-heading p { font-size:16px; line-height:1.67; }
    .geo-service-grid { grid-template-columns:1fr; gap:12px; }
    .geo-service-card { min-height:0; padding:20px 19px 16px; border-radius:15px; }
    .geo-service-card-top { margin-bottom:15px; }
    .geo-service-icon { width:43px; height:43px; }
    .geo-service-card h3 { max-width:500px; font-size:22px; }
    .geo-service-card p { margin-bottom:19px; font-size:16px; line-height:1.62; }
    .geo-definition-heading { margin-bottom:29px; }
    .geo-definition-grid { gap:26px; }
    .geo-definition-copy { gap:14px; }
    .geo-definition-copy p,.geo-seo-copy p { font-size:16px; line-height:1.72; }
    .geo-comparison-head { padding:16px; font-size:14px; }
    .geo-comparison-labels { display:none; }
    .geo-comparison-row { padding:13px 15px; }
    .geo-comparison-values { grid-template-columns:1fr; gap:8px; }
    .geo-comparison-values p { display:grid; grid-template-columns:47px 1fr; gap:7px; font-size:14px; }
    .geo-comparison-values small { display:inline; color:#7b869c; font-size:10px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; }
    .geo-comparison-values p:last-child small { color:var(--geo-blue); }
    .geo-process-grid { grid-template-columns:1fr; gap:12px; }
    .geo-process-card { min-height:0; padding:20px; border-radius:15px; }
    .geo-process-rule { margin:14px 0 18px; }
    .geo-process-card h3 { max-width:450px; font-size:23px; }
    .geo-process-card p { font-size:16px; line-height:1.65; }
    .geo-process-arrow { display:none; }
    .geo-benefit-grid { grid-template-columns:1fr; gap:12px; }
    .geo-benefit-card,.geo-benefit-card--1,.geo-benefit-card--2 { min-height:0; padding:19px 19px 25px; }
    .geo-benefit-icon { width:42px; height:42px; }
    .geo-benefit-card h3 { margin-top:15px; font-size:23px; }
    .geo-benefit-card p { font-size:16px; line-height:1.62; }
    .geo-seo-grid { grid-template-columns:1fr; gap:25px; }
    .geo-seo-aside { position:relative; top:auto; }
    .geo-seo-aside h2,.geo-faq-aside h2 { max-width:560px; margin:14px 0 19px; font-size:clamp(37px,8.5vw,50px); }
    .geo-seo-diagram { max-width:500px; }
    .geo-seo-copy { gap:15px; }
    .geo-faq-grid { grid-template-columns:1fr; gap:28px; }
    .geo-faq-aside p { font-size:16px; }
    .geo-faq-link { margin-top:19px; font-size:15px; }
    .geo-faq-decoration { display:none; }
    .geo-faq-list { gap:10px; }
    .geo-faq-item { border-radius:13px; }
    .geo-faq-trigger { grid-template-columns:28px minmax(0,1fr) 34px; gap:10px; padding:14px 13px; }
    .geo-faq-question { font-size:18px; line-height:1.3; }
    .geo-faq-chevron { width:33px; height:33px; }
    .geo-faq-answer p { padding:0 15px 17px 51px; font-size:15px; line-height:1.7; }
    .geo-motion-ready [data-geo-reveal="left"] { transform:translate3d(-17px,7px,0); }
    .geo-motion-ready [data-geo-reveal="right"] { transform:translate3d(17px,7px,0); }
  }
  @media (max-width:390px) {
    .geo-container { width:calc(100% - 32px); }
    .geo-opening-grid { padding-top:42px; }
    .geo-opening-copy h1 { font-size:40px; }
    .geo-opening-visual { min-height:270px; }
    .geo-answer-card { width:calc(100% - 16px); padding:13px; }
    .geo-answer-result { gap:9px; padding:12px 10px; }
    .geo-answer-result small { font-size:11px; }
    .geo-source,.geo-visual-note { font-size:9px; }
    .geo-source svg,.geo-visual-note svg { width:14px; height:14px; }
    .geo-faq-trigger { grid-template-columns:24px minmax(0,1fr) 32px; gap:8px; padding:13px 11px; }
    .geo-faq-question { font-size:17px; }
    .geo-faq-answer p { padding-left:43px; }
  }
  @media (prefers-reduced-motion:reduce) {
    .geo-page *, .geo-page *::before, .geo-page *::after { scroll-behavior:auto!important; transition-duration:.01ms!important; animation-duration:.01ms!important; animation-iteration-count:1!important; }
    .geo-motion-ready [data-geo-reveal] { opacity:1; transform:none; }
  }
`;
