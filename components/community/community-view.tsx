'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Check,
  Globe2,
  Lightbulb,
  Mail,
  RefreshCw,
  ShoppingBag,
  Store,
  UsersRound,
} from 'lucide-react';

const SUPPORT_EMAIL = 'info@infotechbusinesssolutions.com';

const BENEFITS = [
  {
    title: 'Practical Guides',
    text: 'Clear, step-by-step tips on websites, SEO and online marketing, written in plain language.',
    icon: BookOpen,
  },
  {
    title: 'Platform Updates',
    text: 'Important changes in Shopify, WordPress, Google and social platforms, explained simply.',
    icon: RefreshCw,
  },
  {
    title: 'Shared Experience',
    text: 'Hear what has worked for other business owners and bring your own questions.',
    icon: UsersRound,
  },
  {
    title: 'Insights from Our Team',
    text: 'Advice from the specialists who build and grow online businesses every day.',
    icon: Lightbulb,
  },
];

const AUDIENCES = [
  { label: 'Business owners getting started online', icon: Globe2 },
  { label: 'Online store founders', icon: Store },
  { label: 'Marketing teams who want to stay ahead', icon: ShoppingBag },
];

const JOIN_STEPS = [
  { title: 'Subscribe', text: 'Add your email to receive our best tips and updates.' },
  { title: 'Connect', text: 'Follow us on LinkedIn, Facebook and Instagram, or message us on WhatsApp.' },
  { title: 'Take part', text: 'Ask questions, share wins and learn alongside others.' },
];

const GUIDELINES = [
  'Be respectful and supportive.',
  'No spam or self-promotion.',
  'Share real experiences, not guesses.',
  'Keep client and business information private.',
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/infotech-business-solution/posts/', platform: 'linkedin', color: '#0A66C2' },
  { label: 'Facebook', href: 'https://www.facebook.com/InfoTechBusinessSolutionsOfficial/', platform: 'facebook', color: '#1877F2' },
  { label: 'Instagram', href: 'https://www.instagram.com/infotech_business_solutions/', platform: 'instagram', color: '#E4405F' },
  { label: 'WhatsApp', href: 'https://wa.me/923701660317', platform: 'whatsapp', color: '#25D366' },
] as const;

type SocialPlatform = (typeof SOCIAL_LINKS)[number]['platform'];

function CommunitySocialGlyph({ platform, color }: { platform: SocialPlatform; color: string }) {
  const svgProps = { viewBox: '0 0 24 24', width: 19, height: 19, fill: 'currentColor', style: { color }, 'aria-hidden': true as const };
  if (platform === 'linkedin') {
    return <svg {...svgProps}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
  }
  if (platform === 'facebook') {
    return <svg {...svgProps}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>;
  }
  if (platform === 'instagram') {
    return <svg {...svgProps}><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg>;
  }
  return <svg {...svgProps}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
}

export function CommunityView() {
  const [email, setEmail] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  function submitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent('Parent Community newsletter subscription');
    const body = encodeURIComponent(`Please add ${email} to the ITBS Parent Community newsletter.`);
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    setNewsletterMessage('Your email app should open with a subscription request. Send the email to complete your signup.');
  }

  return (
    <main className="community-page">
      <section className="community-hero" aria-labelledby="community-title">
        <div className="community-hero-orb community-hero-orb--one" aria-hidden="true" />
        <div className="community-hero-orb community-hero-orb--two" aria-hidden="true" />
        <div className="community-container community-hero-inner">
          <div className="community-hero-copy">
            <p className="community-eyebrow"><span /> GROW BETTER, TOGETHER</p>
            <h1 id="community-title">Welcome to the ITBS Parent Community</h1>
            <p>The central hub for our clients, partners and business owners to learn, connect and grow together.</p>
            <Link className="community-button community-button--yellow" href="#community-newsletter">
              Join the Community <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="community-hero-art" role="img" aria-label="A community of business owners learning and growing together">
            <div className="community-art-ring community-art-ring--outer" aria-hidden="true" />
            <div className="community-art-ring community-art-ring--inner" aria-hidden="true" />
            <div className="community-art-core"><UsersRound size={42} strokeWidth={1.5} aria-hidden="true" /></div>
            <span className="community-art-chip community-art-chip--guides"><BookOpen size={16} aria-hidden="true" /> Useful guides</span>
            <span className="community-art-chip community-art-chip--ideas"><Lightbulb size={16} aria-hidden="true" /> Shared ideas</span>
            <span className="community-art-chip community-art-chip--growth"><ArrowRight size={15} aria-hidden="true" /> Shared growth</span>
          </div>
        </div>
      </section>

      <section className="community-about community-section" aria-labelledby="community-about-title">
        <div className="community-narrow">
          <p className="community-kicker">A place to learn and grow</p>
          <h2 id="community-about-title">You don’t have to grow alone.</h2>
          <p>Running a business online is easier when you’re not doing it alone. The Parent Community brings together the people behind growing brands, from first-time store owners to experienced marketing teams, so everyone can share ideas, ask questions and learn what’s working right now.</p>
        </div>
      </section>

      <section className="community-benefits community-section" aria-labelledby="community-benefits-title">
        <div className="community-container">
          <div className="community-section-heading">
            <p className="community-kicker">Made for real business challenges</p>
            <h2 id="community-benefits-title">What you’ll find here</h2>
            <p>Useful knowledge, fresh ideas and people who understand the work behind growing online.</p>
          </div>
          <div className="community-benefit-grid">
            {BENEFITS.map(({ title, text, icon: Icon }, index) => (
              <article className="community-benefit-card" key={title}>
                <div className="community-card-topline"><span>0{index + 1}</span><Icon size={19} aria-hidden="true" /></div>
                <span className="community-benefit-icon"><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="community-audience community-section" aria-labelledby="community-audience-title">
        <div className="community-container community-audience-inner">
          <div className="community-audience-heading">
            <p className="community-kicker">Your people are here</p>
            <h2 id="community-audience-title">Who it’s for</h2>
          </div>
          <div className="community-audience-list">
            {AUDIENCES.map(({ label, icon: Icon }) => (
              <div className="community-audience-chip" key={label}>
                <Icon size={19} aria-hidden="true" /><span>{label}</span><Check size={15} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="community-join community-section" aria-labelledby="community-join-title">
        <div className="community-container">
          <div className="community-section-heading community-section-heading--center">
            <p className="community-kicker">Simple to get involved</p>
            <h2 id="community-join-title">How to join</h2>
          </div>
          <div className="community-steps">
            {JOIN_STEPS.map((step, index) => (
              <article className="community-step" key={step.title}>
                <span className="community-step-number">0{index + 1}</span>
                <span className="community-step-line" aria-hidden="true"><i /></span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="community-newsletter" id="community-newsletter" aria-labelledby="community-newsletter-title">
        <div className="community-container community-newsletter-inner">
          <div className="community-newsletter-copy">
            <span className="community-newsletter-icon"><Mail size={21} aria-hidden="true" /></span>
            <p className="community-newsletter-kicker">A NOTE FROM ITBS</p>
            <h2 id="community-newsletter-title">One useful email. No spam.</h2>
            <p>Fresh ideas for growing your business online, sent only when we have something worth your time.</p>
          </div>
          <form className="community-newsletter-form" onSubmit={submitNewsletter}>
            <label className="community-sr-only" htmlFor="community-email">Your email address</label>
            <input
              id="community-email"
              type="email"
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />
            <button type="submit">Subscribe <ArrowRight size={16} aria-hidden="true" /></button>
            <p className="community-newsletter-status" aria-live="polite">
              {newsletterMessage || 'Subscribe opens a pre-filled email request; it does not add you to a mailing list automatically.'}
            </p>
          </form>
        </div>
      </section>

      <section className="community-guidelines community-section" aria-labelledby="community-guidelines-title">
        <div className="community-guidelines-card">
          <div className="community-guidelines-heading">
            <span><Check size={20} aria-hidden="true" /></span>
            <div><p className="community-kicker">A good space for everyone</p><h2 id="community-guidelines-title">Community guidelines</h2></div>
          </div>
          <ul>
            {GUIDELINES.map((guideline) => <li key={guideline}><Check size={15} aria-hidden="true" />{guideline}</li>)}
          </ul>
        </div>
      </section>

      <section className="community-social community-section" aria-labelledby="community-social-title">
        <div className="community-container community-social-inner">
          <div><p className="community-kicker">Stay in the loop</p><h2 id="community-social-title">Let’s connect</h2></div>
          <div className="community-social-links">
            {SOCIAL_LINKS.map(({ label, href, platform, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Connect with ITBS on ${label}`} title={label}>
                <CommunitySocialGlyph platform={platform} color={color} /><span>{label}</span><ArrowRight className="community-social-arrow" size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="community-closing">
        <div className="community-container community-closing-inner">
          <div><p className="community-kicker">Your experience matters</p><h2>Have a success story?</h2><p>We’d love to hear how your business has grown. Your story could inspire someone else.</p></div>
          <Link className="community-button community-button--yellow" href="/contact">Share Your Story <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}

