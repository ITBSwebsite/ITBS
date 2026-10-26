'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  Database,
  FileSpreadsheet,
  Globe,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  X,
  Zap,
} from 'lucide-react';
import { FAQAccordion, type FAQItem } from './faq-accordion';
import { ServiceCTA } from './service-cta';

const frictionPoints = [
  'New leads wait too long for a response, giving competitors the chance to win them.',
  'Scattered conversations make it difficult to track enquiries and assign responsibility.',
  'Missed follow-ups leave potential customers unattended and sales opportunities lost.',
];

const itbsBenefits = [
  'Every new enquiry is captured and routed to the right person for a faster response.',
  'Leads, conversations and sales activity are organised in one central system.',
  'Automated follow-ups keep prospects engaged and help your team convert more leads.',
];

const leadSources = [
  { label: 'Web forms', icon: FileSpreadsheet },
  { label: 'CRM', icon: Users },
  { label: 'Email', icon: Mail },
  { label: 'Field teams', icon: Building2 },
  { label: 'Phone & chat', icon: MessageCircle },
];

const platformFeatures = [
  { title: 'Lead capture', detail: 'Bring new enquiries into one clear pipeline', icon: Target },
  { title: 'Contacts & companies', detail: 'Keep customer context close to every lead', icon: Users },
  { title: 'Conversations', detail: 'Make it easier to follow the full customer journey', icon: MessageCircle },
  { title: 'Follow-up workflows', detail: 'Coordinate reminders and next steps', icon: Workflow },
  { title: 'Lead reporting', detail: 'Understand sources, progress and outcomes', icon: BarChart3 },
];

const outcomes = [
  { title: 'Unified lead data', detail: 'A clearer source of truth', icon: Database },
  { title: 'Real-time visibility', detail: 'See what needs attention', icon: Target },
  { title: 'Smarter decisions', detail: 'Use insights to guide next steps', icon: Sparkles },
  { title: 'Faster follow-ups', detail: 'Keep conversations moving', icon: Zap },
];

const crmFeatures = [
  {
    label: 'Lead Capture',
    title: 'Never Miss a Lead With Multi-Source Lead Capture',
    description: 'ITBS captures enquiries from websites, ads, marketplaces, CSV uploads and other key sources, so your team can connect while the lead is still interested.',
    visual: 'capture',
  },
  {
    label: 'Auto Allocation',
    title: 'Reach Out Faster With Instant Lead Allocation',
    description: 'New leads can be assigned to sales reps based on source, region or your routing rules, helping reduce manual sorting and missed hand-offs.',
    visual: 'allocation',
  },
  {
    label: 'Real-Time Tracking',
    title: 'Follow Every Lead’s Journey With Real-Time Tracking',
    description: 'Keep lead status, follow-up, call activity and updates in view so your team can understand the pipeline and decide what to do next.',
    visual: 'tracking',
  },
  {
    label: 'Follow-Up Reminders',
    title: 'Keep Leads Warm With Follow-Up Reminders',
    description: 'Timely reminders help your team follow up before leads lose interest, keeping conversations active and deals moving.',
    visual: 'reminders',
  },
  {
    label: 'Team Tracking',
    title: 'Improve Accountability With Live Team Tracking',
    description: 'Review each lead’s engagement in a timeline view. Keep calls, messages and updates together so the next owner has the context they need.',
    visual: 'team',
  },
] as const;

function CrmFeatureVisual({ variant }: { variant: (typeof crmFeatures)[number]['visual'] }) {
  return (
    <div className={`crm-feature-art crm-feature-art--${variant}`} aria-hidden="true">
      <div className="crm-art-toolbar"><span className="crm-art-dots"><i /><i /><i /></span><b>ITBS CRM</b><span>WORKSPACE</span></div>
      {variant === 'capture' ? (
        <div className="crm-art-capture">
          <div className="crm-art-source-grid">
            <span><Globe size={17} />Website</span><span><Mail size={17} />Email</span>
            <span><MessageCircle size={17} />Chat</span><span><FileSpreadsheet size={17} />CSV upload</span>
          </div>
          <div className="crm-art-connector" />
          <div className="crm-art-lead-card"><span><CheckCircle2 size={19} /></span><div><b>New enquiry captured</b><small>Contact added to your lead pipeline</small></div><ArrowRight size={17} /></div>
        </div>
      ) : null}
      {variant === 'allocation' ? (
        <div className="crm-art-allocation">
          <div className="crm-art-incoming"><span className="crm-art-avatar">JL</span><div><small>NEW ENQUIRY</small><b>North region · Website</b></div><span className="crm-art-auto"><Zap size={14} />Auto</span></div>
          <div className="crm-art-route-line"><i /><i /><i /></div>
          <div className="crm-art-reps"><span className="crm-art-rep crm-art-rep--active"><b>AM</b><small>Assigned</small></span><span className="crm-art-rep"><b>RS</b><small>Available</small></span><span className="crm-art-rep"><b>TK</b><small>Available</small></span></div>
          <div className="crm-art-assigned"><Check size={14} /> Routed by team and region</div>
        </div>
      ) : null}
      {variant === 'tracking' ? (
        <div className="crm-art-tracking">
          <div className="crm-art-summary"><span><small>ACTIVE PIPELINE</small><b>Lead overview</b></span><span className="crm-art-period">This month <ArrowRight size={12} /></span></div>
          <div className="crm-art-stage-grid">
            <div><small>NEW</small><b>Enquiries</b><span className="crm-art-stage-value">12</span><i style={{ width: '82%' }} /></div>
            <div><small>IN PROGRESS</small><b>Follow-up</b><span className="crm-art-stage-value">08</span><i style={{ width: '58%' }} /></div>
            <div><small>QUALIFIED</small><b>Next step</b><span className="crm-art-stage-value">04</span><i style={{ width: '36%' }} /></div>
          </div>
          <div className="crm-art-tracking-foot"><span><span />Activity is up to date</span><BarChart3 size={17} /></div>
        </div>
      ) : null}
      {variant === 'reminders' ? (
        <div className="crm-art-reminders">
          <div className="crm-art-reminder-date"><span><small>UP NEXT</small><b>Follow-up plan</b></span><span className="crm-art-bell"><Clock3 size={19} /></span></div>
          <div className="crm-art-reminder-item"><span className="crm-art-reminder-check"><Check size={13} /></span><div><b>Reply to new enquiry</b><small>Today · Email follow-up</small></div><span className="crm-art-due">Due today</span></div>
          <div className="crm-art-reminder-item"><span className="crm-art-reminder-check crm-art-reminder-check--pending" /><div><b>Check in with prospect</b><small>Tomorrow · Call reminder</small></div><span className="crm-art-reminder-arrow"><ArrowRight size={15} /></span></div>
          <div className="crm-art-reminder-note"><Zap size={14} />A clear next step for every lead</div>
        </div>
      ) : null}
      {variant === 'team' ? (
        <div className="crm-art-team">
          <div className="crm-art-team-head"><span><small>LEAD ACTIVITY</small><b>Recent timeline</b></span><span className="crm-art-live-dot">Live view</span></div>
          <div className="crm-art-timeline">
            <span className="crm-art-timeline-line" />
            <div><i><Phone size={13} /></i><span><b>Call logged</b><small>Sales team · 10:42 am</small></span><CheckCircle2 size={15} /></div>
            <div><i><MessageCircle size={13} /></i><span><b>Message sent</b><small>Sales team · 11:18 am</small></span><CheckCircle2 size={15} /></div>
            <div><i><Clock3 size={13} /></i><span><b>Next follow-up</b><small>Reminder scheduled</small></span><ArrowRight size={15} /></div>
          </div>
          <div className="crm-art-team-foot"><Users size={15} />Shared customer context for your team</div>
        </div>
      ) : null}
    </div>
  );
}

function CRMFeatureSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const activeFeature = crmFeatures[activeIndex];

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (isHovered || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActiveIndex((current) => (current + 1) % crmFeatures.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [activeIndex, isHovered, prefersReducedMotion]);

  return (
    <section className="crm-feature-slider-section" aria-labelledby="crm-features-heading">
      <div className="crm-container">
        <div className="crm-feature-slider-heading" data-crm-reveal="up">
          <span className="crm-eyebrow"><i aria-hidden="true" />ITBS CRM capabilities</span>
          <h2 id="crm-features-heading">Convert More Leads With Less Manual Work</h2>
        </div>
        <div
          className="crm-feature-slider-interface"
          role="region"
          aria-roledescription="carousel"
          aria-label="ITBS CRM capabilities"
          onPointerEnter={(event) => { if (event.pointerType === 'mouse') setIsHovered(true); }}
          onPointerLeave={(event) => { if (event.pointerType === 'mouse') setIsHovered(false); }}
        >
          <div className="crm-feature-tabs" role="group" aria-label="Choose a CRM feature" data-crm-reveal="down">
            {crmFeatures.map((feature, index) => (
              <button
                className={activeIndex === index ? 'crm-feature-tab is-active' : 'crm-feature-tab'}
                type="button"
                key={feature.label}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              >{feature.label}</button>
            ))}
          </div>
          <div className="crm-feature-panel" data-crm-reveal="right">
            <div className="crm-feature-copy" key={activeFeature.label} role="group" aria-roledescription="slide" aria-label={`${activeFeature.label}, ${activeIndex + 1} of ${crmFeatures.length}`}>
              <span className="crm-feature-count">CRM CAPABILITY <b>0{activeIndex + 1} / 05</b></span>
              <h3>{activeFeature.title}</h3>
              <p>{activeFeature.description}</p>
              <div className="crm-feature-copy-foot"><span><CheckCircle2 size={16} />One organised customer journey</span><ArrowRight size={18} /></div>
            </div>
            <CrmFeatureVisual variant={activeFeature.visual} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CrmSectionHeading({ eyebrow, title, description, light = false }: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={light ? 'crm-section-heading crm-section-heading--light' : 'crm-section-heading'} data-crm-reveal>
      <span className="crm-eyebrow"><i aria-hidden="true" />{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function CRMLeadManagementView({ faqItems }: { faqItems: FAQItem[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>('[data-crm-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((item) => item.classList.add('crm-is-visible'));
      return;
    }
    root.classList.add('crm-motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('crm-is-visible', entry.isIntersecting);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -34px 0px' });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="crm-page" ref={rootRef}>

      <section className="crm-hero">
        <div className="crm-hero-glow crm-hero-glow--one" aria-hidden="true" />
        <div className="crm-hero-glow crm-hero-glow--two" aria-hidden="true" />
        <div className="crm-container">
          <nav className="crm-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#solutions">Solutions</Link><span aria-hidden="true">/</span><span aria-current="page">CRM &amp; Lead Management</span>
          </nav>
          <div className="crm-hero-grid">
            <div className="crm-hero-copy">
              <span className="crm-hero-badge"><Sparkles size={15} aria-hidden="true" />AI-ready lead routing &amp; CRM automation</span>
              <h1>Your next customer could be your <span>next lead.</span></h1>
              <p>A buyer has filled in your form and is waiting for a reply. Every minute they wait can lower the chance of conversion and give a competitor another opportunity. ITBS captures every enquiry, organises your leads and automates follow-ups, helping you turn more prospects into paying customers.</p>
              <ul className="crm-hero-benefits" aria-label="CRM benefits">
                <li><CheckCircle2 size={16} />Faster lead response</li>
                <li><CheckCircle2 size={16} />Automated follow-ups</li>
                <li><CheckCircle2 size={16} />All your leads in one place</li>
              </ul>
              <div className="crm-hero-actions">
                <Link className="crm-button crm-button--primary" href="/contact">Get a Quote <ArrowRight size={17} /></Link>
                <a className="crm-button crm-button--quiet" href="#crm-platform">Explore the platform <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="crm-hero-visual" data-crm-reveal="right">
              <div className="crm-hero-image-wrap">
                <span className="crm-hero-image-ring crm-hero-image-ring--one" aria-hidden="true" />
                <span className="crm-hero-image-ring crm-hero-image-ring--two" aria-hidden="true" />
                <Image
                  className="crm-hero-image"
                  src="/images/crm-lead-management/grow-your-brand.webp"
                  alt="A business owner responding to customer enquiries through a CRM"
                  width={533}
                  height={400}
                  priority
                  sizes="(max-width: 760px) 90vw, 48vw"
                />
              </div>
              <div className="crm-float-note crm-float-note--top"><span><Check size={15} /></span><div><b>New enquiry captured</b><small>Ready for the right next step</small></div></div>
              <div className="crm-float-note crm-float-note--bottom"><span><Clock3 size={16} /></span><div><b>Follow-up on track</b><small>One less lead left waiting</small></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="crm-intro-section">
        <div className="crm-container crm-intro-grid">
          <div className="crm-intro-copy" data-crm-reveal="left">
            <span className="crm-eyebrow"><i aria-hidden="true" />Stay close to every opportunity</span>
            <h2>Your customers have questions. Be there when they ask.</h2>
            <p>Your potential customers are looking for solutions to grow their businesses and have questions that need clear answers. They expect timely responses and consistent communication throughout their decision-making process.</p>
            <div className="crm-intro-points">
              <span><Check size={15} />Timely, organised responses</span>
              <span><Check size={15} />Consistent communication</span>
              <span><Check size={15} />A clearer view of every enquiry</span>
            </div>
          </div>
          <div className="crm-dashboard-wrap" data-crm-reveal="right">
            <div className="crm-dashboard-frame">
              <Image
                className="crm-dashboard-image"
                src="/images/crm-lead-management/lead-management-dashboard.png"
                alt="Illustration of a CRM dashboard connecting lead capture, contacts, email, follow-ups and reporting"
                width={2200}
                height={1040}
                sizes="(max-width: 760px) 92vw, 54vw"
              />
            </div>
            <span className="crm-dashboard-caption"><span />One connected lead journey</span>
          </div>
        </div>
      </section>

      <section className="crm-comparison-section">
        <div className="crm-container">
          <CrmSectionHeading
            eyebrow="CRM automation"
            title="Every enquiry needs a clear next step."
            description="Move beyond manual reminders and scattered updates with a simpler way to capture, organise and follow up with leads."
            light
          />
          <div className="crm-comparison-grid">
            <article className="crm-comparison-card crm-comparison-card--without" data-crm-reveal="left">
              <div className="crm-comparison-heading"><span className="crm-comparison-symbol"><X size={17} /></span><h3>Without ITBS Automation</h3></div>
              <ul>{frictionPoints.map((point) => <li key={point}><X size={17} aria-hidden="true" /><span>{point}</span></li>)}</ul>
            </article>
            <article className="crm-comparison-card crm-comparison-card--with" data-crm-reveal="right">
              <div className="crm-comparison-heading"><span className="crm-comparison-symbol"><Check size={17} /></span><h3>With ITBS Automation</h3></div>
              <ul>{itbsBenefits.map((point) => <li key={point}><Check size={17} aria-hidden="true" /><span>{point}</span></li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className="crm-followup-section">
        <div className="crm-followup-orb crm-followup-orb--one" aria-hidden="true" />
        <div className="crm-followup-orb crm-followup-orb--two" aria-hidden="true" />
        <div className="crm-container crm-followup-inner" data-crm-reveal="down">
          <span className="crm-followup-mark"><Sparkles size={17} />A more consistent customer experience</span>
          <h2>Every Lead Deserves a Follow-Up.</h2>
          <p>Your team can&apos;t follow up with every prospect manually. Our CRM and lead generation systems automate responses, organise enquiries, nurture potential customers and keep follow-ups on track—helping you convert more leads into paying customers and retain existing ones.</p>
          <a className="crm-followup-link" href="#crm-platform">See how ITBS connects the journey <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="crm-problem-section">
        <div className="crm-container">
          <CrmSectionHeading
            eyebrow="The problem"
            title="Disconnected tools. Scattered data. Lost potential."
            description="When customer details and conversations live in separate places, it gets harder to see what happened, who owns the next step and which opportunities need attention."
          />
          <div className="crm-source-row" aria-label="Common lead and customer data sources">
            {leadSources.map(({ label, icon: Icon }, index) => <div className="crm-source-item" key={label} data-crm-reveal="scale">
              <span className="crm-source-icon"><Icon size={22} /></span><b>{label}</b>
              {index < leadSources.length - 1 ? <span className="crm-source-drop" aria-hidden="true" /> : null}
            </div>)}
          </div>
          <div className="crm-fragmented-banner" data-crm-reveal="left">
            <span className="crm-fragmented-icon"><Database size={24} /></span>
            <div><b>Data exists everywhere.</b><strong>Understanding should be in one place.</strong></div>
            <span className="crm-fragmented-tag">Disconnected workflow</span>
          </div>
          <div className="crm-problem-outcomes">
            <div data-crm-reveal="up"><span><Target size={18} /></span><b>No visibility</b><small>Harder to see where leads stand.</small></div>
            <div data-crm-reveal="up"><span><Users size={18} /></span><b>Siloed teams</b><small>Customer context stays fragmented.</small></div>
            <div data-crm-reveal="up"><span><Clock3 size={18} /></span><b>Manual handoffs</b><small>Next steps are easier to miss.</small></div>
            <div data-crm-reveal="up"><span><BarChart3 size={18} /></span><b>Missed growth</b><small>Opportunities can slip through gaps.</small></div>
          </div>
        </div>
      </section>

      <section className="crm-platform-section" id="crm-platform">
        <div className="crm-container">
          <div className="crm-platform-heading" data-crm-reveal="left">
            <span className="crm-eyebrow crm-eyebrow--light"><i aria-hidden="true" />The solution</span>
            <h2>One platform. One operational view.</h2>
            <p>ITBS connects your lead sources, customer records and follow-up workflows, helping your team turn scattered information into clear next steps.</p>
          </div>
          <div className="crm-platform-map" data-crm-reveal="scale">
            <div className="crm-map-sources">
              <h3>Your sources</h3>
              <div className="crm-source-stack">{leadSources.map(({ label, icon: Icon }) => <div key={label}><span><Icon size={16} /></span>{label}</div>)}</div>
            </div>
            <div className="crm-map-core">
              <div className="crm-feature-stack">
                {platformFeatures.map(({ title, detail, icon: Icon }) => <div className="crm-platform-feature" key={title}><span><Icon size={16} /></span><div><b>{title}</b><small>{detail}</small></div></div>)}
              </div>
              <div className="crm-platform-node" aria-label="ITBS CRM"><span className="crm-node-orbit crm-node-orbit--one" /><span className="crm-node-orbit crm-node-orbit--two" /><span className="crm-node-core"><span>ITBS</span><small>CRM</small></span></div>
            </div>
            <div className="crm-map-outcomes">
              <h3>Connected outcomes</h3>
              {outcomes.map(({ title, detail, icon: Icon }) => <div className="crm-outcome-item" key={title}><span><Icon size={16} /></span><div><b>{title}</b><small>{detail}</small></div></div>)}
            </div>
          </div>
          <div className="crm-platform-footnote"><ShieldCheck size={16} /><span>A more organised way to manage enquiries, relationships and follow-ups.</span></div>
        </div>
      </section>

      <CRMFeatureSlider />

      <section className="crm-success-section">
        <div className="crm-success-glow" aria-hidden="true" />
        <div className="crm-container crm-success-grid">
          <div className="crm-success-copy" data-crm-reveal="left">
            <span className="crm-eyebrow crm-eyebrow--light"><i aria-hidden="true" />A clearer customer journey</span>
            <h2>Turn Every Lead Into Your Next <span>Success Story</span></h2>
            <p>Take control of your customer journey with smarter CRM and lead management. Capture every enquiry, automate follow-ups, streamline your sales pipeline and build lasting customer relationships, all from one organised system.</p>
          </div>
          <div className="crm-success-journey" data-crm-reveal="right" aria-label="Lead journey from enquiry to customer">
            <div className="crm-success-journey-line" aria-hidden="true" />
            <div className="crm-success-step"><span><Target size={19} /></span><div><b>Capture</b><small>Every enquiry in one place</small></div><CheckCircle2 size={17} /></div>
            <div className="crm-success-step"><span><Users size={19} /></span><div><b>Organise</b><small>Clear ownership and context</small></div><CheckCircle2 size={17} /></div>
            <div className="crm-success-step"><span><Workflow size={19} /></span><div><b>Follow up</b><small>Keep the next step moving</small></div><CheckCircle2 size={17} /></div>
            <div className="crm-success-step crm-success-step--final"><span><Sparkles size={19} /></span><div><b>Build relationships</b><small>Make every conversation count</small></div><ArrowRight size={17} /></div>
            <div className="crm-success-journey-caption"><span />One connected lead journey, powered by ITBS</div>
          </div>
        </div>
      </section>

      <section className="crm-faq-section">
        <div className="crm-container">
          <FAQAccordion
            items={faqItems}
            title="CRM & Lead Management FAQs"
            subtitle="Answers to common questions about ITBS CRM, lead tracking and follow-up automation."
          />
          <ServiceCTA
            badge="LET’S GROW TOGETHER"
            title="Ready to make every enquiry count?"
            description="Tell us how your team handles enquiries today. We’ll discuss practical ways to organise leads, improve follow-ups and give your team a clearer view of the customer journey."
            primaryBtnText="Talk to Our Team"
            primaryBtnHref="/contact"
            features={['Faster lead response', 'Automated follow-ups', 'Clear lead ownership', 'Better visibility']}
          />
        </div>
      </section>
    </main>
  );
}
