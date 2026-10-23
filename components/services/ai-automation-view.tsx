'use client';

import { useEffect, useRef, useState, type CSSProperties, type FocusEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  Plug,
  Radio,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from 'lucide-react';
import { FAQAccordion, type FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const roles = [
  {
    label: 'Sales',
    eyebrow: 'FOR SALES',
    title: 'Close more deals with less busywork.',
    description: 'Spend more time selling and less time updating records. ITBS keeps every conversation, task and opportunity organised so your team can focus on closing.',
    points: [
      'Manage leads and opportunities from one pipeline',
      'Automatically log calls, texts and emails',
      'Never miss a follow-up with AI and automation',
      'Keep your team productive from anywhere',
    ],
    image: '/images/ai-automation/role-sales.jpg',
    alt: 'ITBS sales workspace with a lead inbox, customer conversations and mobile sales tools',
  },
  {
    label: 'Marketing',
    eyebrow: 'FOR MARKETING',
    title: 'Generate more leads. Convert more customers.',
    description: 'Create campaigns, capture enquiries and automate follow-ups without switching between disconnected tools.',
    points: [
      'Build conversion-focused landing pages',
      'Send personalised email and SMS campaigns',
      'Track engagement across every channel',
      'Nurture leads automatically',
    ],
    image: '/images/ai-automation/role-marketing.jpg',
    alt: 'ITBS marketing dashboard showing campaigns, performance and mobile campaign tools',
  },
  {
    label: 'Leadership',
    eyebrow: 'FOR LEADERSHIP',
    title: 'Know what’s happening without asking.',
    description: 'Real-time dashboards and reporting give leaders a clearer view of team performance, pipeline health and growth opportunities.',
    points: [
      'Monitor sales performance in real time',
      'Track goals, conversions and revenue',
      'Identify trends before they become problems',
      'Make informed, data-led decisions',
    ],
    image: '/images/ai-automation/role-leadership.jpg',
    alt: 'ITBS leadership dashboard with team performance, goals and business metrics',
  },
  {
    label: 'Operations',
    eyebrow: 'FOR OPERATIONS',
    title: 'Keep your business running smoothly.',
    description: 'Automate repetitive work, reduce manual processes and help every team work from the same source of truth.',
    points: [
      'Route enquiries to the right team automatically',
      'Reduce duplicate records and admin',
      'Build workflows around how you work',
      'Connect the tools your business already uses',
    ],
    image: '/images/ai-automation/role-operations.jpg',
    alt: 'ITBS operations dashboard with workflow automation and process performance',
  },
  {
    label: 'Support',
    eyebrow: 'FOR SUPPORT',
    title: 'Deliver exceptional customer experiences.',
    description: 'Give your team the context and tools they need to resolve issues faster while keeping every customer interaction together.',
    points: [
      'View each conversation in one timeline',
      'Respond by phone, text or email',
      'Let AI help with common questions',
      'Escalate enquiries to the right team',
    ],
    image: '/images/ai-automation/role-support.jpg',
    alt: 'ITBS support dashboard with ticket queues, service metrics and customer feedback',
  },
] as const;

const integrationLogos = [
  '/images/ai-automation/integrations/tool-01.jpg',
  '/images/ai-automation/integrations/tool-02.jpg',
  '/images/ai-automation/integrations/tool-03.jpg',
  '/images/ai-automation/integrations/tool-04.jpg',
  '/images/ai-automation/integrations/tool-05.png',
  '/images/ai-automation/integrations/tool-06.png',
  '/images/ai-automation/integrations/tool-07.jpg',
  '/images/ai-automation/integrations/tool-08.jpg',
  '/images/ai-automation/integrations/tool-09.jpg',
  '/images/ai-automation/integrations/tool-10.jpg',
  '/images/ai-automation/integrations/tool-11.jpg',
  '/images/ai-automation/integrations/tool-12.jpg',
  '/images/ai-automation/integrations/tool-13.jpg',
  '/images/ai-automation/integrations/tool-14.jpg',
  '/images/ai-automation/integrations/tool-15.jpg',
  '/images/ai-automation/integrations/tool-16.jpg',
  '/images/ai-automation/integrations/tool-17.jpg',
  '/images/ai-automation/integrations/tool-18.jpg',
  '/images/ai-automation/integrations/tool-19.jpg',
  '/images/ai-automation/integrations/tool-20.jpg',
  '/images/ai-automation/integrations/tool-21.jpg',
  '/images/ai-automation/integrations/tool-22.jpg',
  '/images/ai-automation/integrations/tool-23.jpg',
] as const;

function SectionHeading({ eyebrow, title, description, light = false }: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`ai-section-heading${light ? ' ai-section-heading--light' : ''}`} data-ai-reveal="up">
      <span className="ai-eyebrow"><i aria-hidden="true" />{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function RoleSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const feature = roles[activeIndex];

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(media.matches);
    updateMotionPreference();
    media.addEventListener('change', updateMotionPreference);
    return () => media.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % roles.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, prefersReducedMotion]);

  const moveTo = (index: number) => setActiveIndex((index + roles.length) % roles.length);
  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
  };

  return (
    <section className="ai-role-section" id="ai-role-slider" aria-labelledby="ai-roles-title">
      <div className="ai-container">
        <div className="ai-role-intro" data-ai-reveal="up">
          <span className="ai-eyebrow"><i aria-hidden="true" />DESIGNED FOR EVERY ROLE</span>
          <h2 id="ai-roles-title">Give every team room to do their best work.</h2>
          <p>One connected platform brings customer context, everyday workflows and useful AI into the hands of the people who need them.</p>
        </div>

        <div
          className="ai-role-experience"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={handleBlur}
        >
          <div className="ai-role-tabbar" role="tablist" aria-label="Explore AI CRM features by team">
            {roles.map((role, index) => (
              <button
                className={`ai-role-tab${activeIndex === index ? ' is-active' : ''}`}
                id={`ai-role-tab-${index}`}
                key={role.label}
                ref={(node) => { tabRefs.current[index] = node; }}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="ai-role-panel"
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => moveTo(index)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                    event.preventDefault();
                    const next = (activeIndex + (event.key === 'ArrowRight' ? 1 : -1) + roles.length) % roles.length;
                    moveTo(next);
                    tabRefs.current[next]?.focus();
                  }
                }}
              >{role.label}</button>
            ))}
          </div>

          <div className="ai-role-panel" id="ai-role-panel" role="tabpanel" aria-labelledby={`ai-role-tab-${activeIndex}`}>
            <div className="ai-role-copy" key={`${feature.label}-copy`}>
              <span className="ai-role-kicker">{feature.eyebrow}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul>
                {feature.points.map((point) => <li key={point}><Check size={16} aria-hidden="true" />{point}</li>)}
              </ul>
              <Link href="/contact" className="ai-text-link">Talk to our team <ArrowRight size={16} /></Link>
            </div>
            <div className="ai-role-visual" key={`${feature.label}-visual`}>
              <Image
                src={feature.image}
                alt={feature.alt}
                width={2048}
                height={2048}
                sizes="(max-width: 860px) 92vw, 48vw"
              />
              <span className="ai-image-caption"><span />ITBS · Connected workspaces</span>
            </div>
          </div>

          <div className="ai-role-controls" aria-label="Role slider controls">
            <span className="ai-role-count">0{activeIndex + 1} <i>/</i> 0{roles.length}</span>
            <div className="ai-role-dots">
              {roles.map((role, index) => (
                <button key={role.label} type="button" aria-label={`Show ${role.label} features`} aria-current={activeIndex === index ? 'true' : undefined} onClick={() => moveTo(index)} />
              ))}
            </div>
            <div className="ai-role-arrows">
              <button type="button" aria-label="Previous role" onClick={() => moveTo(activeIndex - 1)}><ChevronLeft size={19} /></button>
              <button type="button" aria-label="Next role" onClick={() => moveTo(activeIndex + 1)}><ChevronRight size={19} /></button>
            </div>
          </div>
          <span className="ai-sr-only" aria-live={isPaused ? 'polite' : 'off'} aria-atomic="true">{feature.label}: {feature.title}</span>
        </div>
      </div>
    </section>
  );
}

export function AIAutomationView({ faqItems }: { faqItems: FAQItem[] }) {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>('[data-ai-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('ai-in-view'));
      return;
    }
    root.classList.add('ai-motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('ai-in-view', entry.isIntersecting));
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="ai-auto-page" ref={pageRef}>
      <style>{AI_AUTOMATION_STYLES}</style>

      <section className="ai-hero" aria-labelledby="ai-hero-title">
        <div className="ai-hero-glow ai-hero-glow--one" aria-hidden="true" />
        <div className="ai-hero-glow ai-hero-glow--two" aria-hidden="true" />
        <div className="ai-container">
          <nav className="ai-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#solutions">Solutions</Link><span aria-hidden="true">/</span><span aria-current="page">AI Automation</span>
          </nav>
          <div className="ai-hero-grid">
            <div className="ai-hero-copy" data-ai-reveal="left">
              <span className="ai-hero-badge"><Sparkles size={15} aria-hidden="true" />AI CRM · AUTOMATION · GROWTH</span>
              <h1 id="ai-hero-title">The AI CRM your business needs to <em>grow.</em></h1>
              <p>Bring customer tools and conversations together, then let thoughtful automation take care of the repetitive work—so your team can focus on better customer relationships.</p>
              <ul className="ai-hero-benefits">
                <li><CheckCircle2 size={18} /><span><b>Replace multiple tools.</b> Integrate the work you rely on in one place.</span></li>
                <li><CheckCircle2 size={18} /><span><b>Automate every step.</b> Let AI keep essential workflows moving around the clock.</span></li>
                <li><CheckCircle2 size={18} /><span><b>Grow customer relationships.</b> Respond sooner, follow up consistently and retain more customers.</span></li>
              </ul>
              <div className="ai-hero-actions">
                <Link href="/contact" className="ai-button ai-button--primary">Get a Quote <ArrowRight size={17} /></Link>
                <a href="#ai-role-slider" className="ai-button ai-button--quiet">Explore the platform <ArrowDown size={16} /></a>
              </div>
              <div className="ai-hero-proof"><ShieldCheck size={16} /><span>Built around your team, tools and way of working</span></div>
            </div>
            <div className="ai-hero-visual" data-ai-reveal="right">
              <div className="ai-hero-image-frame">
                <Image
                  src="/images/ai-automation/ai-crm-dashboard.jpg"
                  alt="AI-powered ITBS CRM dashboard with sales analytics, workflow automation and customer insights"
                  width={1600}
                  height={1600}
                  priority
                  sizes="(max-width: 850px) 94vw, 52vw"
                />
                <div className="ai-hero-live-card"><span className="ai-live-pulse" /><div><small>ITBS AI ASSISTANT</small><b>Workflows are moving</b></div><ArrowUpRight size={17} /></div>
              </div>
              <span className="ai-hero-visual-caption"><i />One connected view of your customer journey</span>
            </div>
          </div>
          <div className="ai-hero-bottom-rule" aria-hidden="true"><span>CONNECT</span><i /><span>AUTOMATE</span><i /><span>GROW</span></div>
        </div>
      </section>

      <RoleSlider />

      <section className="ai-pipeline-section" id="ai-pipeline" aria-labelledby="ai-pipeline-title">
        <div className="ai-pipeline-glow" aria-hidden="true" />
        <div className="ai-container ai-pipeline-layout">
          <div className="ai-pipeline-copy" data-ai-reveal="left">
            <span className="ai-eyebrow ai-eyebrow--light"><i aria-hidden="true" />AI, WORKING THROUGH YOUR PIPELINE</span>
            <h2 id="ai-pipeline-title">AI automating the pipeline for you.</h2>
            <p>More than a place to store data, your CRM can automate calls and follow-ups, qualify leads and guide customers toward lasting relationships. AI can analyse interactions and score each opportunity—helping your team see where to focus next.</p>
            <div className="ai-pipeline-capabilities">
              <span><Phone size={17} />AI calling</span>
              <span><Send size={17} />Timely follow-ups</span>
              <span><Target size={17} />Lead qualification</span>
              <span><Sparkles size={17} />Opportunity insights</span>
            </div>
            <Link href="/contact" className="ai-light-link">See what you can automate <ArrowUpRight size={16} /></Link>
          </div>
          <div className="ai-call-console" data-ai-reveal="right" aria-label="Illustration of an AI-assisted customer call and lead insights">
            <div className="ai-call-console-top"><span className="ai-call-brand"><span><Sparkles size={15} /></span>ITBS AI</span><span className="ai-call-live"><i />LIVE WORKFLOW</span><span className="ai-call-menu">•••</span></div>
            <div className="ai-call-person"><span className="ai-call-avatar"><Bot size={24} /></span><div><small>INCOMING ENQUIRY</small><b>Customer conversation</b><span>AI assistant · connected to CRM</span></div><span className="ai-call-time"><Radio size={14} /> 00:42</span></div>
            <div className="ai-waveform" aria-hidden="true">{Array.from({ length: 34 }, (_, i) => <i key={i} style={{ '--wave-height': `${18 + ((i * 17) % 33)}px`, '--wave-delay': `${(i % 8) * 45}ms` } as CSSProperties} />)}</div>
            <div className="ai-call-transcript"><span className="ai-transcript-dot" /><p><b>ITBS AI:</b> I can help with that. I’ll make sure the right team has your details and follows up.</p></div>
            <div className="ai-call-transcript ai-call-transcript--reply"><span className="ai-transcript-dot" /><p><b>Customer:</b> That sounds good. Please arrange the next step.</p></div>
            <div className="ai-call-metrics"><div><span>LEAD QUALITY</span><b>Qualified</b><small><Target size={13} /> Ready for follow-up</small></div><div><span>CONVERSATION</span><b>Positive</b><small><MessageCircle size={13} /> Context saved</small></div><div><span>NEXT STEP</span><b>Assigned</b><small><CheckCircle2 size={13} /> Team notified</small></div></div>
            <div className="ai-call-footer"><span><ShieldCheck size={14} /> Team-owned. Clearly tracked.</span><span>CRM WORKFLOW <ArrowRight size={13} /></span></div>
          </div>
        </div>
      </section>

      <section className="ai-integrations-section" id="ai-integrations" aria-label="AI automation integrations and workflow options">
        <div className="ai-container">
          <SectionHeading
            eyebrow="CONNECTED BY DESIGN"
            title="The connections you need. The flexibility you expect."
            description="Bring the tools and information your team already uses into a more connected customer workflow. Start with the essentials and expand as your business grows."
          />
          <div className="ai-integrations-visual" data-ai-reveal="scale">
            <div className="ai-integration-stage-heading">
              <div>
                <span>ONE CONNECTED WORKFLOW</span>
                <b>Bring your everyday tools together.</b>
              </div>
              <span className="ai-integration-count"><i aria-hidden="true" />{integrationLogos.length} integration logos</span>
            </div>
            <div className="ai-integration-logos" role="list" aria-label="Selected integration logos">
              {integrationLogos.map((src, index) => (
                <div
                  className="ai-integration-logo-tile"
                  key={src}
                  role="listitem"
                  style={{ '--logo-delay': `${Math.min(index, 11) * 32}ms` } as CSSProperties}
                >
                  <Image src={src} alt="" aria-hidden="true" width={128} height={128} sizes="(max-width: 560px) 64px, (max-width: 1050px) 82px, 92px" unoptimized />
                </div>
              ))}
            </div>
          </div>
          <div className="ai-connection-options" data-ai-reveal="up">
            <article><span className="ai-connection-index">01 / CONNECT</span><span className="ai-connection-icon"><Plug size={20} aria-hidden="true" /></span><h3>Integrations</h3><p>Connect the business tools your team already uses.</p></article>
            <article><span className="ai-connection-index">02 / BUILD</span><span className="ai-connection-icon"><Workflow size={20} aria-hidden="true" /></span><h3>Custom workflows</h3><p>Shape automation around your real processes.</p></article>
            <article><span className="ai-connection-index">03 / EXTEND</span><span className="ai-connection-icon"><Zap size={20} aria-hidden="true" /></span><h3>Flexible automation</h3><p>Keep information moving between key systems.</p></article>
            <article><span className="ai-connection-index">04 / IMPROVE</span><span className="ai-connection-icon"><Target size={20} aria-hidden="true" /></span><h3>Useful insights</h3><p>Use connected activity to make clearer decisions.</p></article>
          </div>
        </div>
      </section>

      <section className="ai-onboarding-intro" aria-labelledby="ai-onboarding-title">
        <div className="ai-onboarding-intro-glow" aria-hidden="true" />
        <div className="ai-container" data-ai-reveal="up">
          <span className="ai-eyebrow"><i aria-hidden="true" />ONBOARDING &amp; SUPPORT</span>
          <h2 id="ai-onboarding-title">Getting started is the easy part.</h2>
          <p>AI automation setup, hands-on support and ongoing optimisation help automate workflows, reduce manual tasks and keep your business running efficiently as it grows.</p>
        </div>
      </section>

      <section className="ai-launch-section" aria-label="AI automation onboarding process">
        <div className="ai-container ai-launch-grid">
          <div className="ai-launch-copy" data-ai-reveal="left">
            <span className="ai-eyebrow"><i aria-hidden="true" />A GUIDED START, BUILT AROUND YOU</span>
            <h2>Up and running in days, not weeks.</h2>
            <p>A guided onboarding experience helps your team get moving quickly—with less complexity, confusion or guesswork.</p>
            <ul><li><Check size={16} />A dedicated implementation specialist</li><li><Check size={16} />Help organising your existing data</li><li><Check size={16} />Workflows tailored to your business</li></ul>
            <Link href="/contact" className="ai-text-link">Talk through your launch plan <ArrowRight size={16} /></Link>
          </div>
          <div className="ai-launch-visual" data-ai-reveal="right">
            <Image
              src="/images/ai-automation/onboarding-dashboard.jpg"
              alt="ITBS five-step automation launch dashboard with workflow progress, AI engine and connected systems"
              width={2752}
              height={1536}
              sizes="(max-width: 850px) 94vw, 56vw"
            />
            <span className="ai-launch-image-label"><span />AUTOMATION LAUNCH · ITBS</span>
          </div>
        </div>
      </section>

      <section className="ai-faq-section" aria-label="Frequently asked questions about AI automation">
        <div className="ai-container">
          <FAQAccordion
            items={faqItems}
            title="AI Automation FAQs"
            subtitle="Helpful answers about AI workflows, lead capture and automation for your business."
          />
          <ServiceCTA
            badge="LET’S MAKE WORK FLOW BETTER"
            title="Ready to make more room for growth?"
            description="Tell us about the work your team wants to simplify. We’ll help you explore a practical AI automation plan that fits your business, your tools and your goals."
            primaryBtnText="Talk to Our Team"
            primaryBtnHref="/contact"
            features={['Automation built around your process', 'Connected customer workflows', 'Hands-on setup and support', 'Room to scale over time']}
          />
        </div>
      </section>
    </main>
  );
}

const AI_AUTOMATION_STYLES = `
  .ai-auto-page { --ai-navy:#111966;--ai-deep:#080f34;--ai-yellow:#fcf000;--ai-gold:#d7b500;--ai-copy:#202938;--ai-line:#e4e7f0;overflow:clip;background:#fff;color:var(--text-primary);font-family:var(--font-body),"Cardo",Georgia,serif; }
  .ai-auto-page * { box-sizing:border-box; }
  .ai-auto-page a { text-decoration:none; }
  .ai-container { width:min(calc(100% - 56px),1320px);margin:0 auto; }
  .ai-hero { position:relative;isolation:isolate;overflow:hidden;padding:18px 0 0;background:linear-gradient(125deg,#fff 1%,#F5F5F5 52%,#F5F5F5 100%); }
  .ai-hero::before { content:"";position:absolute;z-index:-1;inset:0;opacity:.34;background-image:radial-gradient(rgba(17,25,102,.1) .65px,transparent .65px);background-size:20px 20px;mask-image:linear-gradient(90deg,transparent,#000 65%); }
  .ai-hero-glow { position:absolute;z-index:-1;width:440px;height:440px;border-radius:50%;filter:blur(7px);pointer-events:none; }
  .ai-hero-glow--one { top:12%;right:15%;background:radial-gradient(circle,rgba(252,240,0,.22),transparent 69%); }
  .ai-hero-glow--two { bottom:-270px;left:-160px;background:radial-gradient(circle,rgba(17,25,102,.13),transparent 68%); }
  .ai-breadcrumb { display:flex;align-items:center;gap:10px;margin:7px 0 28px;color:#777d9c;font-size:12px; }
  .ai-breadcrumb a { color:var(--ai-navy);transition:color .2s ease; }
  .ai-breadcrumb a:hover { color:var(--brand-gold-text); }
  .ai-breadcrumb [aria-current="page"] { color:#5f6586; }
  .ai-hero-grid { display:grid;grid-template-columns:minmax(0,.91fr) minmax(0,1.09fr);align-items:center;gap:clamp(35px,5.5vw,82px);padding:16px 0 44px; }
  .ai-hero-copy { max-width:610px;padding:18px 0; }
  .ai-hero-badge { display:inline-flex;align-items:center;gap:9px;padding:9px 15px;color:#706000;background:#fff;border:1px solid #eee7a5;border-radius:40px;box-shadow:0 8px 24px rgba(17,25,102,.05);font-size:10px;font-weight:700;letter-spacing:.13em; }
  .ai-hero-badge svg { color:var(--brand-gold-text); }
  .ai-hero-copy h1 { margin:24px 0 18px;color:var(--ai-navy);font-family:var(--font-heading),Georgia,serif;font-size:clamp(44px,5.1vw,72px);font-weight:600;line-height:1.04;letter-spacing:-.035em; }
  .ai-hero-copy h1 em { color:var(--brand-gold-text);font-weight:500; }
  .ai-hero-copy>p { max-width:560px;margin:0;color:var(--ai-copy);font-size:clamp(15px,1.35vw,17px);line-height:1.8; }
  .ai-hero-benefits { display:grid;gap:14px;margin:27px 0 29px;padding:0;list-style:none; }
  .ai-hero-benefits li { display:grid;grid-template-columns:20px 1fr;align-items:start;gap:11px;color:#555b7d;font-size:14px;line-height:1.6; }
  .ai-hero-benefits li>svg { margin-top:2px;color:var(--brand-gold-text); }
  .ai-hero-benefits b { color:var(--ai-navy);font-weight:700; }
  .ai-hero-actions { display:flex;flex-wrap:wrap;align-items:center;gap:13px; }
  .ai-button { min-height:50px;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:0 21px;border:1px solid transparent;border-radius:7px;font-size:13px;font-weight:700;transition:transform .24s ease,box-shadow .24s ease,background .24s ease; }
  .ai-button:hover { transform:translateY(-2px); }
  .ai-button--primary { color:#111966;background:var(--ai-yellow);box-shadow:0 9px 24px rgba(181,162,0,.22); }
  .ai-button--primary:hover { background: var(--brand-hover-yellow);box-shadow:0 12px 28px rgba(181,162,0,.3); }
  .ai-button--quiet { color:var(--ai-navy);background:rgba(255,255,255,.75);border-color:#dfe2ed; }
  .ai-button--quiet:hover { background:#fff;border-color:#b9bfd4; }
  .ai-hero-proof { display:flex;align-items:center;gap:8px;margin-top:21px;color:#757b98;font-size:11px; }
  .ai-hero-proof svg { color:var(--brand-gold-text); }
  .ai-hero-visual { position:relative;min-width:0; }
  .ai-hero-image-frame { position:relative;overflow:hidden;border:1px solid rgba(17,25,102,.13);border-radius:19px;background:#0c1234;box-shadow:0 26px 60px rgba(12,19,55,.2); }
  .ai-hero-image-frame>img { display:block;width:100%;height:auto; }
  .ai-hero-live-card { position:absolute;right:17px;bottom:17px;display:flex;align-items:center;gap:11px;min-width:235px;padding:13px 15px;color:#fff;background:rgba(9,14,37,.92);border:1px solid rgba(252,240,0,.34);border-radius:12px;box-shadow:0 12px 30px rgba(0,0,0,.24);backdrop-filter:blur(12px); }
  .ai-hero-live-card>div { display:grid;gap:4px;flex:1; }
  .ai-hero-live-card small { color:#e5d76e;font-size:8px;font-weight:700;letter-spacing:.13em; }
  .ai-hero-live-card b { font-size:12px;font-weight:600; }
  .ai-hero-live-card>svg { color:var(--ai-yellow); }
  .ai-live-pulse,.ai-call-live i { width:8px;height:8px;border-radius:50%;background:#93df97;box-shadow:0 0 0 5px rgba(147,223,151,.12); }
  .ai-hero-visual-caption { display:flex;align-items:center;justify-content:flex-end;gap:8px;margin:13px 2px 0;color:#727895;font-size:11px; }
  .ai-hero-visual-caption i { width:6px;height:6px;border-radius:50%;background:#b8a200; }
  .ai-hero-bottom-rule { display:flex;align-items:center;justify-content:center;gap:20px;padding:15px 0;border-top:1px solid rgba(17,25,102,.11);color:#777d97;font-size:9px;font-weight:700;letter-spacing:.22em; }
  .ai-hero-bottom-rule i { width:4px;height:4px;border-radius:50%;background:#c3ae00; }
  .ai-eyebrow { display:inline-flex;align-items:center;gap:9px;color:var(--brand-gold-text);font-size:10px;font-weight:700;letter-spacing:.16em; }
  .ai-eyebrow>i { width:7px;height:7px;border-radius:50%;background:var(--ai-yellow);box-shadow:0 0 0 4px rgba(252,240,0,.18); }
  .ai-eyebrow--light { color:#f0df65; }
  .ai-eyebrow--light>i { background:var(--ai-yellow); }
  .ai-role-section { position:relative;padding:clamp(72px,8vw,112px) 0;background:#F5F5F5; }
  .ai-role-intro { max-width:790px;margin:0 auto 34px;text-align:center; }
  .ai-role-intro h2,.ai-section-heading h2,.ai-onboarding-intro h2 { margin:17px auto 12px;color:var(--ai-navy);font-family:var(--font-heading),Georgia,serif;font-size:clamp(33px,4.1vw,53px);font-weight:600;line-height:1.15;letter-spacing:-.025em; }
  .ai-role-intro p,.ai-section-heading>p { max-width:740px;margin:0 auto;color:var(--ai-copy);font-size:15px;line-height:1.8; }
  .ai-role-experience { max-width:1160px;margin:0 auto; }
  .ai-role-tabbar { display:grid;grid-template-columns:repeat(5,minmax(0,1fr));align-items:center;gap:5px;padding:6px;background:#fff;border:1px solid #e3e5ed;border-radius:50px;box-shadow:0 10px 28px rgba(17,25,102,.045); }
  .ai-role-tab { min-height:47px;padding:10px 12px;color:#42486a;background:transparent;border:0;border-radius:30px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:700;transition:color .24s ease,background .24s ease,box-shadow .24s ease; }
  .ai-role-tab:hover { background: var(--brand-hover-yellow);color:var(--ai-navy); }
  .ai-role-tab.is-active { color:#fff;background:var(--ai-navy);box-shadow:0 6px 17px rgba(17,25,102,.2); }
  .ai-role-tab:focus-visible,.ai-role-arrows button:focus-visible,.ai-role-dots button:focus-visible { outline:3px solid #ab9700;outline-offset:3px; }
  .ai-role-panel { display:grid;grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr);align-items:center;gap:clamp(28px,5vw,65px);min-height:490px;margin-top:24px;padding:clamp(25px,4vw,52px);overflow:hidden;border:1px solid #ebeef4;border-radius:20px;background:#fff;box-shadow:0 22px 60px rgba(17,25,102,.07); }
  .ai-role-copy { max-width:520px;animation:aiCopyEnter .8s cubic-bezier(.22,.7,.2,1) both; }
  .ai-role-kicker { display:inline-flex;margin-bottom:13px;color:var(--brand-gold-text);font-size:9px;font-weight:700;letter-spacing:.17em; }
  .ai-role-copy h3 { margin:0 0 15px;color:var(--ai-navy);font-family:var(--font-heading),Georgia,serif;font-size:clamp(30px,3.4vw,44px);font-weight:600;line-height:1.16;letter-spacing:-.02em; }
  .ai-role-copy>p { margin:0;color:var(--ai-copy);font-size:14px;line-height:1.8; }
  .ai-role-copy ul { display:grid;gap:12px;margin:22px 0 24px;padding:0;list-style:none; }
  .ai-role-copy li { display:flex;align-items:flex-start;gap:10px;color:#454a69;font-size:12px;line-height:1.55; }
  .ai-role-copy li svg { flex:none;margin-top:1px;padding:2px;color:var(--brand-gold-text);background:#fff9a6;border-radius:50%; }
  .ai-text-link,.ai-light-link { display:inline-flex;align-items:center;gap:8px;color:var(--ai-navy);font-size:12px;font-weight:700;transition:gap .2s ease,color .2s ease; }
  .ai-text-link:hover,.ai-light-link:hover { gap:12px;color:var(--brand-gold-text); }
  .ai-role-visual { position:relative;min-width:0;overflow:hidden;aspect-ratio:1.14/1;border:1px solid rgba(17,25,102,.11);border-radius:15px;background:#0b112d;box-shadow:0 14px 30px rgba(17,25,102,.13);animation:aiVisualEnter .9s cubic-bezier(.22,.7,.2,1) both; }
  .ai-role-visual>img { display:block;width:100%;height:100%;object-fit:cover; }
  .ai-image-caption { position:absolute;right:12px;bottom:12px;display:flex;align-items:center;gap:7px;padding:8px 11px;color:#fff;background:rgba(8,14,41,.84);border:1px solid rgba(255,255,255,.18);border-radius:30px;font-size:8px;letter-spacing:.06em;backdrop-filter:blur(8px); }
  .ai-image-caption>span { width:6px;height:6px;background:var(--ai-yellow);border-radius:50%; }
  .ai-role-controls { display:flex;align-items:center;gap:17px;max-width:1160px;margin:15px auto 0; }
  .ai-role-count { color:var(--ai-navy);font-family:var(--font-heading),Georgia,serif;font-size:14px;font-weight:700; }
  .ai-role-count i { padding:0 4px;color:#a8aec1;font-style:normal; }
  .ai-role-dots { display:flex;align-items:center;gap:6px;flex:1; }
  .ai-role-dots button { width:22px;height:4px;padding:0;border:0;border-radius:4px;background:#d8dbe5;cursor:pointer;transition:width .26s ease,background .26s ease; }
  .ai-role-dots button[aria-current="true"] { width:38px;background:#a69000; }
  .ai-role-arrows { display:flex;gap:8px; }
  .ai-role-arrows button { display:grid;place-items:center;width:37px;height:37px;color:var(--ai-navy);background:#fff;border:1px solid #dce0eb;border-radius:50%;cursor:pointer;transition:background .2s ease,color .2s ease,transform .2s ease; }
  .ai-role-arrows button:hover { color:var(--ai-navy);background: var(--brand-hover-yellow);transform:translateY(-2px); }
  .ai-sr-only { position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0; }
  .ai-pipeline-section { position:relative;isolation:isolate;overflow:hidden;padding:clamp(72px,8vw,112px) 0;background:linear-gradient(125deg,#080d2d 0%,#111966 54%,#171e58 100%);color:#fff; }
  .ai-pipeline-section::before { content:"";position:absolute;z-index:-1;inset:0;opacity:.25;background-image:radial-gradient(rgba(255,255,255,.25) .6px,transparent .6px);background-size:23px 23px;mask-image:linear-gradient(90deg,#000,transparent 90%); }
  .ai-pipeline-glow { position:absolute;z-index:-1;top:-270px;right:-120px;width:610px;height:610px;border-radius:50%;background:radial-gradient(circle,rgba(252,240,0,.16),transparent 70%); }
  .ai-pipeline-layout { display:grid;grid-template-columns:minmax(0,.83fr) minmax(0,1.17fr);align-items:center;gap:clamp(35px,6vw,85px); }
  .ai-pipeline-copy h2 { max-width:590px;margin:19px 0 17px;color:#fff;font-family:var(--font-heading),Georgia,serif;font-size:clamp(38px,4.6vw,60px);font-weight:600;line-height:1.09;letter-spacing:-.025em; }
  .ai-pipeline-copy>p { max-width:570px;margin:0;color:rgba(255,255,255,.74);font-size:15px;line-height:1.82; }
  .ai-pipeline-capabilities { display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:25px 0 24px; }
  .ai-pipeline-capabilities span { display:flex;align-items:center;gap:9px;min-height:43px;padding:9px 11px;color:#f6f6ff;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.11);border-radius:8px;font-size:11px; }
  .ai-pipeline-capabilities svg { flex:none;color:var(--ai-yellow); }
  .ai-light-link { color:#fff; }
  .ai-light-link:hover { color:var(--ai-yellow); }
  .ai-call-console { min-width:0;padding:20px;border:1px solid rgba(255,255,255,.16);border-radius:17px;background:linear-gradient(150deg,rgba(255,255,255,.095),rgba(5,9,31,.72));box-shadow:0 28px 70px rgba(0,0,0,.28);backdrop-filter:blur(10px); }
  .ai-call-console-top { display:flex;align-items:center;gap:15px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,.12); }
  .ai-call-brand { display:flex;align-items:center;gap:7px;color:#fff;font-size:11px;font-weight:700; }
  .ai-call-brand>span { display:grid;place-items:center;width:26px;height:26px;color:var(--ai-navy);background:var(--ai-yellow);border-radius:8px; }
  .ai-call-live { display:flex;align-items:center;gap:8px;margin-left:auto;color:#b8c0df;font-size:8px;font-weight:700;letter-spacing:.13em; }
  .ai-call-live i { width:6px;height:6px;background:#91e49c; }
  .ai-call-menu { color:#9099bd;font-size:16px;letter-spacing:2px; }
  .ai-call-person { display:flex;align-items:center;gap:12px;margin:19px 0 12px; }
  .ai-call-avatar { display:grid;place-items:center;width:46px;height:46px;color:var(--ai-yellow);background:rgba(252,240,0,.11);border:1px solid rgba(252,240,0,.35);border-radius:50%; }
  .ai-call-person>div { display:grid;gap:4px;flex:1; }
  .ai-call-person small { color:#b9c1dd;font-size:8px;letter-spacing:.12em; }
  .ai-call-person b { color:#fff;font-size:13px; }
  .ai-call-person>div>span { color:#919bbb;font-size:9px; }
  .ai-call-time { display:flex;align-items:center;gap:5px;color:#d9dced;font-size:10px; }
  .ai-call-time svg { color:#92e69d; }
  .ai-waveform { height:61px;display:flex;align-items:center;justify-content:center;gap:4px;margin:14px 0;padding:0 16px;overflow:hidden;border:1px solid rgba(252,240,0,.14);border-radius:9px;background:rgba(5,9,29,.46); }
  .ai-waveform i { display:block;width:5px;height:var(--wave-height);max-height:42px;border-radius:8px;background:linear-gradient(180deg,#fff477,#c6a900);animation:aiWave 1.3s ease-in-out infinite alternate;animation-delay:var(--wave-delay); }
  .ai-call-transcript { display:flex;gap:9px;align-items:flex-start;padding:10px 11px;color:#e4e7f4;border-radius:8px;font-size:10px;line-height:1.55; }
  .ai-call-transcript--reply { color:#c2c9e2; }
  .ai-call-transcript p { margin:0; }
  .ai-call-transcript b { color:#fff; }
  .ai-transcript-dot { flex:none;width:6px;height:6px;margin-top:4px;border-radius:50%;background:var(--ai-yellow); }
  .ai-call-transcript--reply .ai-transcript-dot { background:#8f9bbd; }
  .ai-call-metrics { display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-top:15px; }
  .ai-call-metrics>div { display:grid;gap:8px;min-width:0;padding:12px 10px;border:1px solid rgba(255,255,255,.12);border-radius:9px;background:rgba(255,255,255,.04); }
  .ai-call-metrics>div>span { color:#aeb6d4;font-size:7px;font-weight:700;letter-spacing:.11em; }
  .ai-call-metrics>div>b { color:#fff;font-size:12px; }
  .ai-call-metrics>div>small { display:flex;align-items:center;gap:5px;color:#bbc2da;font-size:8px; }
  .ai-call-metrics>div>small svg { color:var(--ai-yellow); }
  .ai-call-footer { display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:15px;padding-top:13px;border-top:1px solid rgba(255,255,255,.12);color:#aeb6d4;font-size:8px;letter-spacing:.06em; }
  .ai-call-footer>span { display:flex;align-items:center;gap:6px; }
  .ai-call-footer svg { color:var(--ai-yellow); }
  .ai-integrations-section { padding:clamp(74px,8vw,108px) 0;background:linear-gradient(180deg,#fff 0%,#F5F5F5 100%); }
  .ai-section-heading { max-width:850px;margin:0 auto 30px;text-align:center; }
  .ai-section-heading h2 { max-width:780px; }
  .ai-integrations-visual { position:relative;isolation:isolate;margin:0 auto 24px;padding:clamp(20px,3.2vw,34px);overflow:hidden;border:1px solid #e5e8f1;border-radius:22px;background:radial-gradient(ellipse at 50% 0%,rgba(252,240,0,.105),transparent 62%),linear-gradient(145deg,#F5F5F5 0%,#fff 72%);box-shadow:0 20px 48px rgba(17,25,102,.065); }
  .ai-integrations-visual::before { position:absolute;z-index:-1;inset:0;content:"";opacity:.3;background-image:radial-gradient(rgba(17,25,102,.16) .65px,transparent .65px);background-size:19px 19px;mask-image:linear-gradient(90deg,transparent,#000 30%,#000 70%,transparent);pointer-events:none; }
  .ai-integration-stage-heading { display:flex;align-items:flex-end;justify-content:space-between;gap:18px;max-width:1080px;margin:0 auto 19px;padding:0 2px; }
  .ai-integration-stage-heading>div { display:grid;gap:6px; }
  .ai-integration-stage-heading>div>span { color:var(--brand-gold-text);font-size:8px;font-weight:700;letter-spacing:.17em;text-transform:uppercase; }
  .ai-integration-stage-heading>div>b { color:var(--ai-navy);font-family:var(--font-heading),Georgia,serif;font-size:clamp(18px,2.2vw,24px);font-weight:600;letter-spacing:-.015em; }
  .ai-integration-count { display:inline-flex;align-items:center;gap:8px;flex:none;padding:8px 11px;color:#59607e;background:#fff;border:1px solid #e5e8f0;border-radius:999px;font-size:9px;font-weight:700;letter-spacing:.05em; }
  .ai-integration-count>i { width:7px;height:7px;border-radius:50%;background:#9a8700;box-shadow:0 0 0 4px rgba(252,240,0,.23); }
  .ai-integration-logos { display:flex;flex-wrap:wrap;justify-content:center;gap:10px;max-width:1160px;margin:24px auto 4px; }
  .ai-integration-logo-tile { position:relative;display:grid;flex:0 0 calc(8.333333% - 9.17px);place-items:center;max-width:92px;aspect-ratio:1/1.04;padding:5px;background:#e8ebf3;clip-path:polygon(25% 3%,75% 3%,100% 50%,75% 97%,25% 97%,0 50%);transition:background .25s ease,filter .25s ease,transform .25s ease; }
  .ai-integration-logo-tile::before { position:absolute;inset:1px;content:"";background:linear-gradient(145deg,#fff 0%,#fff 68%,#F5F5F5 100%);clip-path:polygon(25% 3%,75% 3%,100% 50%,75% 97%,25% 97%,0 50%); }
  .ai-integration-logo-tile>img { position:relative;z-index:1;display:block;width:100%;height:100%;padding:7px;object-fit:contain;mix-blend-mode:multiply;transition:transform .3s cubic-bezier(.2,.75,.25,1); }
  .ai-motion-ready .ai-integrations-visual .ai-integration-logo-tile { opacity:0;transform:translateY(10px) scale(.94);transition:opacity .65s cubic-bezier(.22,.7,.2,1),transform .65s cubic-bezier(.22,.7,.2,1),background .25s ease,filter .25s ease;transition-delay:var(--logo-delay,0ms); }
  .ai-motion-ready .ai-integrations-visual.ai-in-view .ai-integration-logo-tile { opacity:1;transform:translateY(0) scale(1); }
  .ai-integration-logo-tile:hover { z-index:2;background:#e4d300;filter:drop-shadow(0 8px 11px rgba(17,25,102,.14));transform:translateY(-4px); }
  .ai-motion-ready .ai-integrations-visual.ai-in-view .ai-integration-logo-tile:hover { transform:translateY(-4px);transition-delay:0ms; }
  .ai-integration-logo-tile:hover>img { transform:scale(1.08); }
  .ai-connection-options { display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;overflow:hidden;border:1px solid #e5e7ee;border-radius:18px;background:#fff;box-shadow:0 8px 20px rgba(17,25,102,.04); }
  .ai-connection-options article { position:relative;display:flex;flex-direction:column;align-items:flex-start;min-height:190px;padding:21px 23px;border-right:1px solid #e5e7ee;background:#fff;transition:background .25s ease,box-shadow .25s ease,transform .25s ease; }
  .ai-connection-options article:last-child { border-right:0; }
  .ai-motion-ready .ai-connection-options article { opacity:0;transform:translateY(17px);transition:opacity .82s cubic-bezier(.22,.7,.2,1),transform .82s cubic-bezier(.22,.7,.2,1),background .25s ease,border-color .25s ease,box-shadow .25s ease;transition-delay:var(--card-delay,0ms); }
  .ai-motion-ready .ai-connection-options.ai-in-view article { opacity:1;transform:translateY(0); }
  .ai-connection-options article:nth-child(2) { --card-delay:80ms; }
  .ai-connection-options article:nth-child(3) { --card-delay:160ms; }
  .ai-connection-options article:nth-child(4) { --card-delay:240ms; }
  .ai-connection-index { display:block;margin-bottom:13px;color:var(--brand-gold-text);font-size:8px;font-weight:700;letter-spacing:.14em; }
  .ai-connection-icon { display:grid;place-items:center;width:42px;height:42px;margin-bottom:12px;color:var(--ai-navy);background:#fff9b3;border-radius:11px;transition:background .25s ease,color .25s ease,transform .25s ease; }
  .ai-connection-options h3 { margin:0 0 7px;color:var(--ai-navy);font-family:var(--font-heading),Georgia,serif;font-size:20px;line-height:1.25; }
  .ai-connection-options p { margin:0;color:var(--ai-copy);font-size:11px;line-height:1.65; }
  .ai-connection-options article:hover,.ai-motion-ready .ai-connection-options.ai-in-view article:hover { z-index:1;transform:translateY(-3px);background: var(--brand-hover-yellow);box-shadow:inset 0 0 0 1px #ddc900,0 12px 24px rgba(17,25,102,.08);transition-delay:0ms; }
  .ai-connection-options article:hover .ai-connection-icon { background:var(--ai-yellow);transform:translateY(-2px); }
  .ai-onboarding-intro { position:relative;isolation:isolate;overflow:hidden;padding:clamp(64px,8vw,95px) 0 28px;background:#F5F5F5;text-align:center; }
  .ai-onboarding-intro-glow { position:absolute;z-index:-1;top:-260px;left:50%;width:700px;height:500px;border-radius:50%;background:radial-gradient(ellipse,rgba(252,240,0,.15),transparent 70%);transform:translateX(-50%); }
  .ai-onboarding-intro .ai-container { max-width:860px; }
  .ai-onboarding-intro h2 { margin:17px auto 11px; }
  .ai-onboarding-intro p { max-width:740px;margin:0 auto;color:var(--ai-copy);font-size:15px;line-height:1.8; }
  .ai-launch-section { padding:35px 0 clamp(75px,8vw,110px);background:#F5F5F5; }
  .ai-launch-grid { display:grid;grid-template-columns:minmax(0,.87fr) minmax(0,1.13fr);align-items:center;gap:clamp(38px,7vw,100px);padding:clamp(25px,4vw,48px);border:1px solid #e8eaf1;border-radius:19px;background:#fff;box-shadow:0 18px 50px rgba(17,25,102,.055); }
  .ai-launch-copy h2 { margin:16px 0 13px;color:var(--ai-navy);font-family:var(--font-heading),Georgia,serif;font-size:clamp(34px,3.9vw,48px);font-weight:600;line-height:1.13;letter-spacing:-.025em; }
  .ai-launch-copy>p { margin:0;color:var(--ai-copy);font-size:13px;line-height:1.8; }
  .ai-launch-copy ul { display:grid;gap:11px;margin:22px 0 25px;padding:0;list-style:none; }
  .ai-launch-copy li { display:flex;align-items:center;gap:10px;color:#464b69;font-size:11px; }
  .ai-launch-copy li svg { color:var(--brand-gold-text); }
  .ai-launch-visual { position:relative;min-width:0;overflow:hidden;border:1px solid rgba(17,25,102,.14);border-radius:16px;background:#0b1237;box-shadow:0 20px 44px rgba(17,25,102,.14); }
  .ai-launch-visual>img { display:block;width:100%;height:auto; }
  .ai-launch-image-label { position:absolute;left:15px;bottom:15px;display:flex;align-items:center;gap:8px;padding:9px 12px;color:#fff;background:rgba(8,14,42,.9);border:1px solid rgba(252,240,0,.3);border-radius:30px;font-size:8px;font-weight:700;letter-spacing:.11em;backdrop-filter:blur(8px); }
  .ai-launch-image-label>span { width:6px;height:6px;border-radius:50%;background:var(--ai-yellow); }
  .ai-faq-section { padding:clamp(72px,8vw,106px) 0 70px;background:#F5F5F5; }
  .ai-faq-section .svc-faq-wrap { margin-top:0; }
  .ai-faq-section .svc-faq-head { max-width:770px;margin-bottom:32px; }
  .ai-faq-section .svc-faq-title { font-size:clamp(32px,4vw,48px); }
  .ai-faq-section .svc-faq-list { max-width:940px;gap:11px; }
  .ai-faq-section .svc-faq-card { border-radius:12px; }
  .ai-faq-section .svc-faq-card.is-open { border-color:#c9b600; }
  .ai-faq-section .svc-cta-box { margin-top:clamp(46px,6vw,74px); }
  .ai-motion-ready [data-ai-reveal] { opacity:0;transform:translate3d(0,27px,0);transition:opacity 1.08s cubic-bezier(.22,.7,.2,1),transform 1.08s cubic-bezier(.22,.7,.2,1);transition-delay:var(--ai-reveal-delay,0ms); }
  .ai-motion-ready [data-ai-reveal="left"] { transform:translate3d(-34px,0,0); }
  .ai-motion-ready [data-ai-reveal="right"] { transform:translate3d(34px,0,0); }
  .ai-motion-ready [data-ai-reveal="scale"] { transform:translate3d(0,10px,0) scale(.97); }
  .ai-motion-ready [data-ai-reveal].ai-in-view { opacity:1;transform:translate3d(0,0,0) scale(1); }
  @keyframes aiCopyEnter { from { opacity:0;transform:translateX(-12px); } to { opacity:1;transform:translateX(0); } }
  @keyframes aiVisualEnter { from { opacity:.4;transform:translateX(12px) scale(.99); } to { opacity:1;transform:translateX(0) scale(1); } }
  @keyframes aiWave { from { transform:scaleY(.38);opacity:.62; } to { transform:scaleY(1);opacity:1; } }
  @media(max-width:1050px) {
    .ai-hero-grid { gap:32px; }
    .ai-role-panel { min-height:440px;gap:30px; }
    .ai-role-visual { aspect-ratio:1.02/1; }
    .ai-launch-grid { gap:36px; }
    .ai-integration-logo-tile { flex-basis:calc(12.5% - 8.75px); }
  }
  @media(max-width:850px) {
    .ai-container { width:min(calc(100% - 40px),700px); }
    .ai-hero-grid,.ai-pipeline-layout,.ai-launch-grid { grid-template-columns:1fr; }
    .ai-hero-grid { gap:26px;padding:13px 0 34px; }
    .ai-hero-copy { max-width:700px; }
    .ai-hero-visual { width:min(100%,620px);margin:0 auto; }
    .ai-hero-image-frame { max-height:650px; }
    .ai-hero-image-frame>img { max-height:650px;object-fit:cover; }
    .ai-role-panel { grid-template-columns:1fr;gap:25px;min-height:0; }
    .ai-role-copy { max-width:680px; }
    .ai-role-visual { width:min(100%,600px);margin:0 auto;aspect-ratio:1.22/1; }
    .ai-pipeline-layout { gap:36px; }
    .ai-pipeline-copy { max-width:700px; }
    .ai-call-console { width:min(100%,650px);margin:0 auto; }
    .ai-connection-options { grid-template-columns:repeat(2,minmax(0,1fr)); }
    .ai-connection-options article:nth-child(2) { border-right:0; }
    .ai-connection-options article:nth-child(-n+2) { border-bottom:1px solid #e5e7ee; }
    .ai-launch-grid { gap:30px; }
    .ai-role-section,.ai-pipeline-section { padding:68px 0; }
  }
  @media(max-width:760px) {
    .ai-integration-logo-tile { flex-basis:calc(16.666667% - 8.33px); }
  }
  @media(max-width:560px) {
    .ai-container { width:min(calc(100% - 32px),520px); }
    .ai-hero { padding-top:12px; }
    .ai-breadcrumb { margin-bottom:17px;font-size:10px; }
    .ai-hero-grid { padding-top:8px; }
    .ai-hero-badge { gap:7px;padding:8px 11px;font-size:8px; }
    .ai-hero-copy h1 { margin:19px 0 14px;font-size:clamp(39px,12vw,54px); }
    .ai-hero-copy>p { font-size:13px;line-height:1.7; }
    .ai-hero-benefits { gap:11px;margin:20px 0 23px; }
    .ai-hero-benefits li { gap:8px;font-size:11px; }
    .ai-button { min-height:46px;padding:0 15px;font-size:11px; }
    .ai-hero-live-card { right:9px;bottom:9px;min-width:195px;padding:10px 11px; }
    .ai-hero-live-card b { font-size:10px; }
    .ai-hero-live-card small { font-size:7px; }
    .ai-hero-visual-caption { justify-content:flex-start;font-size:9px; }
    .ai-hero-bottom-rule { gap:11px;font-size:7px;letter-spacing:.15em; }
    .ai-role-section,.ai-pipeline-section,.ai-integrations-section { padding:58px 0; }
    .ai-role-intro { margin-bottom:24px; }
    .ai-role-intro h2,.ai-section-heading h2,.ai-onboarding-intro h2 { font-size:clamp(30px,9vw,39px); }
    .ai-role-intro p,.ai-section-heading>p,.ai-onboarding-intro p { font-size:12px;line-height:1.7; }
    .ai-role-tabbar { grid-template-columns:repeat(3,minmax(0,1fr));gap:3px;padding:5px;border-radius:17px; }
    .ai-role-tab { min-height:40px;padding:8px 5px;font-size:9px; }
    .ai-role-panel { gap:19px;margin-top:14px;padding:17px;border-radius:14px; }
    .ai-role-copy h3 { font-size:30px; }
    .ai-role-copy>p { font-size:12px;line-height:1.7; }
    .ai-role-copy ul { gap:10px;margin:18px 0 20px; }
    .ai-role-copy li { font-size:10px; }
    .ai-role-visual { aspect-ratio:1/1;border-radius:11px; }
    .ai-image-caption { right:7px;bottom:7px;padding:6px 8px;font-size:6px; }
    .ai-role-controls { gap:11px;margin-top:12px; }
    .ai-role-arrows { gap:5px; }
    .ai-role-arrows button { width:32px;height:32px; }
    .ai-role-count { font-size:12px; }
    .ai-role-dots { gap:4px; }
    .ai-role-dots button { width:14px;height:3px; }
    .ai-role-dots button[aria-current="true"] { width:25px; }
    .ai-pipeline-layout { gap:27px; }
    .ai-pipeline-copy h2 { font-size:clamp(35px,10vw,47px); }
    .ai-pipeline-copy>p { font-size:12px;line-height:1.75; }
    .ai-pipeline-capabilities { gap:7px;margin:19px 0; }
    .ai-pipeline-capabilities span { gap:6px;min-height:39px;padding:7px;font-size:9px; }
    .ai-pipeline-capabilities svg { width:14px;height:14px; }
    .ai-call-console { padding:12px;border-radius:13px; }
    .ai-call-console-top { gap:8px;padding-bottom:12px; }
    .ai-call-brand { font-size:9px; }
    .ai-call-live { gap:6px;font-size:6px; }
    .ai-call-person { gap:8px;margin:14px 0 9px; }
    .ai-call-avatar { width:38px;height:38px; }
    .ai-call-person b { font-size:11px; }
    .ai-call-person small { font-size:7px; }
    .ai-call-person>div>span { font-size:8px; }
    .ai-call-time { font-size:8px; }
    .ai-waveform { height:47px;gap:3px;padding:0 8px; }
    .ai-waveform i { width:4px;max-height:32px; }
    .ai-call-transcript { gap:7px;padding:8px;font-size:8px; }
    .ai-call-metrics { gap:5px;margin-top:10px; }
    .ai-call-metrics>div { gap:6px;padding:8px 6px; }
    .ai-call-metrics>div>span { font-size:6px; }
    .ai-call-metrics>div>b { font-size:10px; }
    .ai-call-metrics>div>small { gap:3px;font-size:6px; }
    .ai-call-metrics>div>small svg { width:10px;height:10px; }
    .ai-call-footer { font-size:6px; }
    .ai-integrations-visual { margin-bottom:17px;padding:13px;border-radius:15px; }
    .ai-integration-stage-heading { align-items:flex-start;flex-direction:column;gap:11px;margin-bottom:13px; }
    .ai-integration-stage-heading>div>b { font-size:18px; }
    .ai-integration-count { padding:7px 9px;font-size:8px; }
    .ai-integration-logos { gap:7px;margin-top:18px; }
    .ai-integration-logo-tile { flex-basis:calc(25% - 5.25px);padding:3px; }
    .ai-integration-logo-tile>img { padding:5px; }
    .ai-connection-options { border-radius:13px; }
    .ai-connection-options article { min-height:155px;padding:14px 12px; }
    .ai-connection-options article:nth-child(odd) { border-right:1px solid #e5e7ee; }
    .ai-connection-options article:nth-child(even) { border-right:0; }
    .ai-connection-options article:nth-child(3) { border-bottom:0; }
    .ai-connection-index { margin-bottom:10px;font-size:7px; }
    .ai-connection-icon { width:35px;height:35px;margin-bottom:10px;border-radius:9px; }
    .ai-connection-icon svg { width:17px;height:17px; }
    .ai-connection-options h3 { font-size:17px; }
    .ai-connection-options p { font-size:9px;line-height:1.55; }
    .ai-onboarding-intro { padding:58px 0 18px; }
    .ai-onboarding-intro h2 { margin-top:15px; }
    .ai-launch-section { padding:20px 0 60px; }
    .ai-launch-grid { gap:24px;padding:18px;border-radius:14px; }
    .ai-launch-copy h2 { font-size:clamp(31px,9vw,39px); }
    .ai-launch-copy>p { font-size:11px; }
    .ai-launch-copy ul { gap:10px;margin:18px 0 20px; }
    .ai-launch-copy li { align-items:flex-start;font-size:10px; }
    .ai-launch-visual { border-radius:11px; }
    .ai-launch-image-label { left:8px;bottom:8px;padding:7px 9px;font-size:6px; }
    .ai-faq-section { padding:59px 0 55px; }
    .ai-faq-section .svc-faq-head { text-align:left;margin-bottom:23px; }
    .ai-faq-section .svc-faq-title { font-size:clamp(29px,8.5vw,37px); }
    .ai-faq-section .svc-faq-subtitle { font-size:12px; }
    .ai-faq-section .svc-faq-list { gap:9px; }
    .ai-faq-section .svc-faq-trigger { gap:10px;padding:14px; }
    .ai-faq-section .svc-faq-q { font-size:14px; }
    .ai-faq-section .svc-faq-body { padding:0 14px 15px;font-size:12px; }
    .ai-faq-section .svc-cta-box { margin-top:43px; }
  }
  @media(prefers-reduced-motion:reduce) {
    .ai-auto-page *, .ai-auto-page *::before, .ai-auto-page *::after { scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important; }
    .ai-motion-ready [data-ai-reveal] { opacity:1;transform:none; }
  }
`;
