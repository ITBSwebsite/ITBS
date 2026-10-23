import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Check,
  Globe2,
  HeartHandshake,
  Search,
  Sparkles,
  Target,
} from 'lucide-react';

const strengths = [
  {
    icon: Search,
    number: '01',
    title: 'Search that brings the right people',
    text: 'Thoughtful SEO helps your business become easier to find by the people already looking for what you offer.',
  },
  {
    icon: Globe2,
    number: '02',
    title: 'Websites built to move you forward',
    text: 'High-performing websites give your customers a clear, confident path from first visit to next step.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Marketing tied to real goals',
    text: 'Growth-focused digital marketing connects the work to meaningful outcomes you can measure.',
  },
];

export function AboutView() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-orb about-hero-orb--one" aria-hidden="true" />
        <div className="about-hero-orb about-hero-orb--two" aria-hidden="true" />
        <div className="about-container about-hero-grid">
          <div className="about-hero-copy">
            <p className="about-eyebrow"><span /> About ITBS</p>
            <h1>Digital growth that starts with <em>your success.</em></h1>
            <p className="about-lede">
              With a decade of experience in the UK digital space, ITBS helps businesses grow,
              rank and thrive online. We bring SEO, high-performing websites and growth-focused
              marketing together in a strategy shaped around your goals.
            </p>
            <div className="about-actions">
              <Link className="about-button about-button--primary" href="/contact">
                Talk to our team <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className="about-button about-button--secondary" href="/#solutions">
                Explore our services
              </Link>
            </div>
            <div className="about-hero-note">
              <Check size={16} aria-hidden="true" />
              <span>UK expertise. Tailored strategy. Measurable progress.</span>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-photo-frame">
              <Image
                src="/images/seo-audits/web-workspace.jpg"
                alt="A bright digital workspace with a laptop and website design on screen"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 48vw"
              />
              <div className="about-photo-shade" aria-hidden="true" />
              <div className="about-photo-caption">
                <span><Sparkles size={17} aria-hidden="true" /></span>
                <div>
                  <small>BUILT AROUND YOUR BUSINESS</small>
                  <b>Clear thinking. Practical digital growth.</b>
                </div>
              </div>
            </div>
            <div className="about-floating-card">
              <span className="about-floating-icon"><HeartHandshake size={19} aria-hidden="true" /></span>
              <div><small>OUR COMMITMENT</small><b>Your success is our success.</b></div>
            </div>
            <div className="about-photo-orbit" aria-hidden="true"><i /><i /></div>
          </div>
        </div>
      </section>

      <section className="about-proof" aria-label="About ITBS at a glance">
        <div className="about-container about-proof-grid">
          <div><span className="about-proof-dot" /><strong>A decade</strong><small>of digital experience in the UK</small></div>
          <div><span className="about-proof-dot" /><strong>Business-first</strong><small>strategies shaped around your goals</small></div>
          <div><span className="about-proof-dot" /><strong>Measurable</strong><small>work focused on meaningful results</small></div>
        </div>
      </section>

      <section className="about-story about-section">
        <div className="about-container about-story-grid">
          <div className="about-story-aside">
            <span className="about-story-mark"><Target size={24} aria-hidden="true" /></span>
            <p className="about-kicker">A partner for the long term</p>
            <h2>Good digital work starts by understanding your business.</h2>
            <div className="about-story-rule" aria-hidden="true"><span /></div>
            <p className="about-story-aside-note">Every business has a different audience, ambition and next step.</p>
          </div>
          <div className="about-story-copy">
            <p className="about-kicker">Our experience</p>
            <h2>From local start-ups to established brands around the world.</h2>
            <p>
              We have helped businesses across industries build a stronger digital presence with
              strategies tailored to their needs. That work includes developing and supporting the
              online presence of Elizabeth O Beauty, alongside a growing group of businesses.
            </p>
            <p>
              Whether the need is smarter SEO, a high-performing website or a growth-focused digital
              marketing strategy, our focus stays on practical work that supports the business behind it.
            </p>
            <Link className="about-text-link" href="/contact">
              Tell us what you are working towards <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="about-strengths about-section" id="about-approach">
        <div className="about-container">
          <div className="about-section-heading">
            <p className="about-kicker">What we do</p>
            <h2>One team for the parts of digital growth that work together.</h2>
            <p>Our work brings strategy and delivery together, so each part of your digital presence supports the same direction.</p>
          </div>
          <div className="about-strength-grid">
            {strengths.map(({ icon: Icon, number, title: cardTitle, text }) => (
              <article className="about-strength-card" key={number}>
                <div className="about-card-top"><span>{number}</span><span className="about-card-icon"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span></div>
                <h3>{cardTitle}</h3>
                <p>{text}</p>
                <span className="about-card-accent" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-belief">
        <div className="about-container about-belief-grid">
          <div className="about-quote-block">
            <span className="about-quote-mark" aria-hidden="true">“</span>
            <blockquote>
              Some people don’t like change, but you need to embrace change if the alternative is disaster.
            </blockquote>
            <cite>Elon Musk</cite>
          </div>
          <div className="about-mission-card">
            <span className="about-mission-icon"><HeartHandshake size={21} aria-hidden="true" /></span>
            <p className="about-kicker">Our mission</p>
            <h2>Your success <em>is our success.</em></h2>
            <p>We bring creativity and data-led thinking together to help businesses grow with confidence.</p>
            <Link className="about-button about-button--light" href="/contact">
              Start a conversation <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="about-closing">
        <div className="about-container about-closing-inner">
          <div>
            <p className="about-kicker">InfoTech Business Solutions</p>
            <h2>A results-driven digital partner, based in the United Kingdom.</h2>
            <p>We combine creativity with data-led, measurable digital strategies to help businesses build loyal customer relationships and grow online.</p>
          </div>
          <Link className="about-button about-button--primary" href="/contact">
            Let’s talk about your goals <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
