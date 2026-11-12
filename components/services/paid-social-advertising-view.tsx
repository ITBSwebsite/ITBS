'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Camera,
  Check,
  ChevronDown,
  MessageSquareText,
  MousePointer2,
  Target,
  UsersRound,
} from 'lucide-react';

const channels = [
  {
    number: '01',
    name: 'Meta',
    label: 'Facebook & Instagram',
    description:
      'Build campaigns for Facebook and Instagram around the audience, message and next step that matter to your business.',
    points: ['Audience-led campaigns', 'Creative for social placements', 'Enquiry or website goals'],
  },
  {
    number: '02',
    name: 'LinkedIn',
    label: 'Professional audiences',
    description:
      'Put a clear offer in front of relevant professional audiences, with campaign messaging shaped around your B2B goals.',
    points: ['B2B campaign planning', 'Relevant professional audiences', 'Clear enquiry pathways'],
  },
  {
    number: '03',
    name: 'TikTok',
    label: 'Video-led discovery',
    description:
      'Use concise, platform-native creative to introduce your offer and give interested viewers a clear next step.',
    points: ['Video-first campaign ideas', 'Creative testing', 'A direct path to enquire'],
  },
] as const;

const process = [
  {
    number: '01',
    title: 'Understand the brief',
    description:
      'We learn about your audience, offer and business goals, and agree what a useful enquiry or booked call means for your campaign.',
    icon: MessageSquareText,
  },
  {
    number: '02',
    title: 'Choose the right channel',
    description:
      'We match the campaign objective and audience to the social platforms that make sense for your brief.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Plan and launch',
    description:
      'We shape the campaign structure, audience approach and creative direction, then prepare the agreed activity for launch.',
    icon: MousePointer2,
  },
  {
    number: '04',
    title: 'Review and refine',
    description:
      'We review campaign activity against the agreed goal, share what we learn and use those findings to guide next steps.',
    icon: BarChart3,
  },
];

const principles = [
  {
    number: '01',
    title: 'A clear audience',
    description:
      'Start with who you need to reach and what they need to understand before they take action.',
  },
  {
    number: '02',
    title: 'A useful message',
    description:
      'Keep the offer, creative and landing experience connected so each part of the campaign feels consistent.',
  },
  {
    number: '03',
    title: 'A measurable next step',
    description:
      'Give people a simple route to enquire or book a call, then review campaign activity against that objective.',
  },
];

const faqs = [
  {
    question: 'What is paid social advertising?',
    answer:
      'Paid social advertising uses sponsored placements on social platforms to put a business, service or offer in front of selected audiences. Campaigns can be planned around goals such as awareness, website visits or enquiries.',
  },
  {
    question: 'Which social platforms do you work with?',
    answer:
      'The core platforms for this service are Meta, including Facebook and Instagram, LinkedIn and TikTok. Other channels can be considered when they suit your audience and campaign goals.',
  },
  {
    question: 'Can paid social help generate enquiries?',
    answer:
      'Campaigns can be planned to encourage enquiries or booked calls. The audience, offer, creative and route to contact all need to work together, and results depend on the campaign and market.',
  },
  {
    question: 'How do you decide which platform is right for my business?',
    answer:
      'We begin with your audience, offer and objective. From there, we can recommend which of the core platforms is a suitable place to start and what the campaign needs to communicate.',
  },
  {
    question: 'What happens before a campaign launches?',
    answer:
      'We discuss your goals and audience, agree the campaign direction and clarify the intended next step. We then prepare the agreed campaign structure and creative approach before launch.',
  },
];

type PlatformName = 'Meta' | 'LinkedIn' | 'TikTok';

function PlatformMark({ platform, className = '' }: { platform: PlatformName; className?: string }) {
  if (platform === 'Meta') {
    return (
      <svg className={'psa-platform-mark ' + className} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M3.7 20.9c1.8-5.8 5.3-11.8 8.5-11.8 4.2 0 8 13.8 12.2 13.8 2.2 0 4.1-3 4.1-6.2 0-3.9-2.3-6.8-5.2-6.8-4.6 0-8.5 14.2-13.7 14.2-3.1 0-5.5-2.7-5.5-6.1 0-3.7 2.2-6.5 5.1-6.5 1.2 0 2.3.5 3.4 1.5" fill="none" stroke="#0668E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
      </svg>
    );
  }

  if (platform === 'LinkedIn') {
    return (
      <svg className={'psa-platform-mark ' + className} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <rect x="2" y="2" width="28" height="28" rx="5" fill="#0A66C2" />
        <path d="M8 13h4v11H8zm2-5.2a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4M14.5 13h3.8v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7V24h-4v-5.1c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7V24h-4z" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg className={'psa-platform-mark ' + className} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M12.5 3.3c1.3 0 2.6 0 3.9-.1.2 2.3 1.1 4.1 2.6 5.4 1.2 1 2.7 1.6 4.4 1.8v4.2c-2.1-.1-4-.8-5.7-2v8.2c0 3.8-3 6.8-6.8 6.8a6.8 6.8 0 0 1-6.8-6.8c0-3.8 3-6.8 6.8-6.8.5 0 1 .1 1.5.2v4.4a2.6 2.6 0 1 0 1.1 2.2V3.3z" fill="#111" />
      <path d="M11.7 14.2v4.4a2.6 2.6 0 0 0-1.5-.5 2.6 2.6 0 1 0 2.6 2.6V9.5c1 .8 2.2 1.4 3.6 1.8v-4c-1.4-.5-2.5-1.5-3.1-2.8h-3.5v9.9a6.7 6.7 0 0 0-1.5-.2c-3.8 0-6.8 3-6.8 6.8 0 1 .2 1.9.6 2.7l3.1-2.1a2.6 2.6 0 0 1 2.5-3.2c.5 0 1 .1 1.4.4v-4.6c.8-.3 1.7-.4 2.6-.2z" fill="#25F4EE" opacity=".9" transform="translate(-1.3 1)" />
      <path d="M14.7 4c.7 1.7 2 3.1 3.8 3.9.8.4 1.7.6 2.7.7v3.2c-2.3-.2-4.3-1.1-5.9-2.6v10.3a5.5 5.5 0 1 1-5.5-5.5v3.4a2.1 2.1 0 1 0 2.1 2.1V4z" fill="#FE2C55" opacity=".82" transform="translate(1.1 -.5)" />
    </svg>
  );
}

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  light = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <div className={'psa-section-heading' + (light ? ' psa-section-heading--light' : '')} data-psa-reveal>
      <span className="psa-eyebrow"><i aria-hidden="true" />{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function PaidSocialAdvertisingView() {
  const rootRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>('[data-psa-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('psa-visible'));
      return;
    }

    root.classList.add('psa-motion-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('psa-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="psa-page" ref={rootRef}>
      <section className="psa-hero" aria-labelledby="psa-title">
        <div className="psa-hero-glow psa-hero-glow--one" aria-hidden="true" />
        <div className="psa-hero-glow psa-hero-glow--two" aria-hidden="true" />
        <div className="psa-container">
          <nav className="psa-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/services/ppc">Paid Advertising</Link><span aria-hidden="true">/</span>
            <span aria-current="page">Paid Social Advertising</span>
          </nav>

          <div className="psa-hero-grid">
            <div className="psa-hero-copy" data-psa-reveal>
              <h1 id="psa-title">Reach the right people with <em>purposeful</em> social campaigns.</h1>
              <p className="psa-hero-description">
                Plan paid social around your audience, your offer and the action you want people to take. ITBS helps UK businesses bring campaign strategy, creative and measurement together across Meta, LinkedIn and TikTok.
              </p>
              <div className="psa-hero-actions">
                <a className="psa-button psa-button--primary" href="mailto:info@infotechbusinesssolutions.com?subject=Paid%20Social%20Advertising%20Enquiry">
                  Discuss your campaign <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="psa-hero-visual" data-psa-reveal role="group" aria-label="Paid social campaign planning overview">
              <div className="psa-visual-orbit psa-visual-orbit--outer" aria-hidden="true" />
              <div className="psa-visual-orbit psa-visual-orbit--inner" aria-hidden="true" />
              <div className="psa-campaign-card">
                <div className="psa-campaign-top">
                  <span className="psa-campaign-brand"><span className="psa-brand-mark">i</span><span>ITBS <small>CAMPAIGN PLANNER</small></span></span>
                  <span className="psa-campaign-status"><i />PLANNING</span>
                </div>
                <div className="psa-campaign-intro">
                  <span>CAMPAIGN OBJECTIVE</span>
                  <strong>Make the next step clear.</strong>
                  <p>Audience, message and measurement working together.</p>
                </div>
                <div className="psa-campaign-flow" aria-label="Audience, creative and enquiry campaign flow">
                  <div className="psa-flow-node"><span className="psa-flow-icon"><UsersRound size={17} aria-hidden="true" /></span><b>Audience</b><small>Who you need to reach</small></div>
                  <span className="psa-flow-connector" aria-hidden="true"><i /></span>
                  <div className="psa-flow-node"><span className="psa-flow-icon"><Camera size={17} aria-hidden="true" /></span><b>Creative</b><small>What they need to see</small></div>
                  <span className="psa-flow-connector" aria-hidden="true"><i /></span>
                  <div className="psa-flow-node psa-flow-node--goal"><span className="psa-flow-icon"><MessageSquareText size={17} aria-hidden="true" /></span><b>Enquiry</b><small>A useful next step</small></div>
                </div>
                <div className="psa-campaign-foot"><span>PLATFORM MIX</span><div aria-label="Meta, LinkedIn and TikTok"><PlatformMark platform="Meta" /><PlatformMark platform="LinkedIn" /><PlatformMark platform="TikTok" /></div><span>Meta · LinkedIn · TikTok</span></div>
              </div>
            </div>
          </div>

          <div className="psa-hero-bottom" data-psa-reveal>
            <span>CORE PLATFORMS</span>
            <div className="psa-platform-rail">
              <span><i className="psa-platform-glyph psa-platform-glyph--meta"><PlatformMark platform="Meta" /></i>Meta <small>Facebook &amp; Instagram</small></span>
              <span><i className="psa-platform-glyph psa-platform-glyph--linkedin"><PlatformMark platform="LinkedIn" /></i>LinkedIn <small>Professional audiences</small></span>
              <span><i className="psa-platform-glyph psa-platform-glyph--tiktok"><PlatformMark platform="TikTok" /></i>TikTok <small>Video-led discovery</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className="psa-channels psa-section" aria-labelledby="psa-channels-title">
        <div className="psa-container">
          <SectionHeading
            id="psa-channels-title"
            eyebrow="CAMPAIGNS THAT FIT THE CHANNEL"
            title="Meet your audience where they are."
            description="Each platform has a different context. We shape the campaign around the people you want to reach and the next step you want them to take."
          />
          <div className="psa-channel-grid">
            {channels.map((channel) => {
              return (
                <article className="psa-channel-card" key={channel.number} data-psa-reveal>
                  <div className="psa-card-topline"><span>{channel.number}<i> / 03</i></span><span className="psa-channel-icon"><PlatformMark platform={channel.name} /></span></div>
                  <span className="psa-channel-label">{channel.label}</span>
                  <h3>{channel.name}</h3>
                  <p>{channel.description}</p>
                  <ul>
                    {channel.points.map((point) => <li key={point}><Check size={15} aria-hidden="true" />{point}</li>)}
                  </ul>
                  <span className="psa-card-accent" aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="psa-approach psa-section" id="psa-approach" aria-labelledby="psa-approach-title">
        <div className="psa-approach-pattern" aria-hidden="true" />
        <div className="psa-container">
          <SectionHeading
            id="psa-approach-title"
            eyebrow="A CLEAR, COLLABORATIVE PROCESS"
            title="From first brief to considered next steps."
            description="A practical approach that keeps the campaign tied to your audience and business objective."
            light
          />
          <div className="psa-process-grid">
            {process.map((step) => {
              const Icon = step.icon;
              return (
                <article className="psa-process-card" key={step.number} data-psa-reveal>
                  <div className="psa-process-meta"><span>{step.number}</span><Icon size={19} aria-hidden="true" /></div>
                  <span className="psa-process-rule"><i /></span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="psa-principles psa-section" aria-labelledby="psa-principles-title">
        <div className="psa-container psa-principles-layout">
          <div className="psa-principles-intro" data-psa-reveal>
            <span className="psa-eyebrow"><i aria-hidden="true" />BUILT AROUND YOUR OBJECTIVE</span>
            <h2 id="psa-principles-title">Good campaigns make the next step feel <em>natural.</em></h2>
            <p>We connect the audience, the message and the action, so your paid social activity has a clear purpose from the first impression to the enquiry.</p>
            <a className="psa-inline-link" href="mailto:info@infotechbusinesssolutions.com?subject=Paid%20Social%20Advertising%20Enquiry">Talk through your goals <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="psa-principle-list">
            {principles.map((principle) => (
              <article className="psa-principle-card" key={principle.number} data-psa-reveal>
                <span className="psa-principle-number">{principle.number}</span>
                <div><h3>{principle.title}</h3><p>{principle.description}</p></div>
                <ArrowUpRight className="psa-principle-arrow" size={19} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="psa-faq psa-section" aria-labelledby="psa-faq-title">
        <div className="psa-container psa-faq-layout">
          <div className="psa-faq-intro" data-psa-reveal>
            <span className="psa-eyebrow"><i aria-hidden="true" />PAID SOCIAL, EXPLAINED</span>
            <h2 id="psa-faq-title">Good questions deserve <em>clear answers.</em></h2>
            <p>Helpful information about platforms, campaign goals and how we get started.</p>
            <a className="psa-inline-link" href="mailto:info@infotechbusinesssolutions.com?subject=Paid%20Social%20Advertising%20Question">Ask us a question <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="psa-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = 'psa-faq-answer-' + index;
              return (
                <article className={'psa-faq-item' + (isOpen ? ' is-open' : '')} key={faq.question}>
                  <button
                    className="psa-faq-trigger"
                    id={'psa-faq-trigger-' + index}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span className="psa-faq-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="psa-faq-question">{faq.question}</span>
                    <span className="psa-faq-toggle"><ChevronDown size={17} aria-hidden="true" /></span>
                  </button>
                  <div
                    className={'psa-faq-answer' + (isOpen ? ' is-open' : '')}
                    id={answerId}
                    role="region"
                    aria-labelledby={'psa-faq-trigger-' + index}
                    aria-hidden={!isOpen}
                  >
                    {isOpen && <p>{faq.answer}</p>}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="psa-cta" aria-labelledby="psa-cta-title">
        <div className="psa-cta-glow" aria-hidden="true" />
        <div className="psa-container psa-cta-inner" data-psa-reveal>
          <span className="psa-eyebrow psa-eyebrow--light"><i aria-hidden="true" />LET’S TALK SOCIAL</span>
          <h2 id="psa-cta-title">Ready to give your next campaign a clear direction?</h2>
          <p>Tell us about your audience and what you want your campaign to achieve. We’ll help you work out a sensible next step.</p>
          <a className="psa-button psa-button--yellow" href="mailto:info@infotechbusinesssolutions.com?subject=Paid%20Social%20Advertising%20Enquiry">
            Start a conversation <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
