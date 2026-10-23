import {
  ArrowRight,
  Check,
  ChevronDown,
  Cookie,
  FileCheck2,
  Mail,
  ShieldCheck,
} from 'lucide-react';

const sections = [
  { id: 'what-are-cookies', label: 'What are cookies?' },
  { id: 'how-we-use-cookies', label: 'How we use them' },
  { id: 'cookie-types', label: 'Types of cookies' },
  { id: 'cookies-on-our-site', label: 'Cookies on our website' },
  { id: 'third-party-cookies', label: 'Third-party cookies' },
  { id: 'manage-cookies', label: 'Managing your choices' },
  { id: 'personal-information', label: 'Your personal information' },
  { id: 'policy-changes', label: 'Changes to this policy' },
  { id: 'contact', label: 'Contact us' },
];

function ContentsLinks({ compact = false }: { compact?: boolean }) {
  return (
    <nav className={compact ? 'privacy-toc-links privacy-toc-links--compact' : 'privacy-toc-links'} aria-label="Cookie Policy sections">
      {sections.map((section, index) => (
        <a href={`#${section.id}`} key={section.id}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          {section.label}
          <ArrowRight size={14} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}

export function CookiePolicyView() {
  return (
    <main className="privacy-page cookie-policy-page">
      <section className="privacy-hero" aria-labelledby="cookie-policy-title">
        <div className="privacy-hero-orbit privacy-hero-orbit--one" aria-hidden="true" />
        <div className="privacy-hero-orbit privacy-hero-orbit--two" aria-hidden="true" />
        <div className="privacy-container privacy-hero-grid">
          <div className="privacy-hero-copy">
            <p className="privacy-eyebrow"><span /> A CLEAR VIEW OF COOKIES</p>
            <h1 id="cookie-policy-title">Cookie Policy</h1>
            <p className="privacy-hero-lede">
              How this website uses cookies and similar technologies, what we know about them and
              the choices currently available to you.
            </p>
            <div className="privacy-updated">
              <FileCheck2 size={17} aria-hidden="true" />
              <span>Last updated</span>
              <strong>21 October 2026</strong>
            </div>
          </div>

          <aside className="privacy-hero-card" aria-label="Cookie use at a glance">
            <div className="privacy-hero-card-head">
              <span className="privacy-hero-icon"><Cookie size={23} aria-hidden="true" /></span>
              <div>
                <p>YOUR BROWSER, YOUR CHOICE</p>
                <h2>Clear and considered.</h2>
              </div>
            </div>
            <p className="privacy-hero-card-intro">The short version of what we can confirm about this site.</p>
            <ul>
              <li><Check size={16} aria-hidden="true" /><span>The site loads a tracking script from LeadConnector (HighLevel).</span></li>
              <li><Check size={16} aria-hidden="true" /><span>Its exact cookie names and expiry depend on the provider configuration.</span></li>
              <li><Check size={16} aria-hidden="true" /><span>You can manage or clear cookies in your browser settings.</span></li>
            </ul>
            <p className="privacy-hero-card-note">We do not list unverified cookie names or durations.</p>
          </aside>
        </div>
      </section>

      <section className="privacy-content" aria-label="Cookie Policy details">
        <div className="privacy-container privacy-content-grid">
          <aside className="privacy-sidebar">
            <details className="privacy-mobile-toc">
              <summary>On this page <ChevronDown size={17} aria-hidden="true" /></summary>
              <ContentsLinks compact />
            </details>
            <div className="privacy-toc-card">
              <p className="privacy-toc-kicker">THE DETAILS</p>
              <h2>On this page</h2>
              <ContentsLinks />
            </div>
            <div className="privacy-side-note">
              <span><Mail size={17} aria-hidden="true" /></span>
              <p>Have a cookie question?</p>
              <a href="mailto:info@infotechbusinesssolutions.com">Email our team <ArrowRight size={14} aria-hidden="true" /></a>
            </div>
          </aside>

          <article className="privacy-article">
            <div className="privacy-summary-card">
              <div className="privacy-summary-mark"><Cookie size={20} aria-hidden="true" /></div>
              <div>
                <p className="privacy-summary-label">AT A GLANCE</p>
                <h2>We explain what we use and why.</h2>
                <p>
                  Our site includes an external tracking script. We are confirming its live settings
                  before listing exact cookie names and expiry periods.
                </p>
              </div>
            </div>

            <p className="privacy-article-intro">
              This policy covers cookies and similar technologies such as pixels, scripts, tags and
              local storage. It should be read with our <a href="/privacy-policy">Privacy Policy</a>,
              which explains how we handle personal information.
            </p>

            <section className="privacy-section" id="what-are-cookies" aria-labelledby="cookie-what-title">
              <p className="privacy-section-number">01 <span>THE BASICS</span></p>
              <h2 id="cookie-what-title">What are cookies?</h2>
              <p>
                Cookies are small text files that a website may store on your device. Similar
                technologies, including pixels, scripts, tags and local storage, can also store
                information or access information already on your device. Some technologies last
                only for a browser session; others may remain for a set period.
              </p>
            </section>

            <section className="privacy-section" id="how-we-use-cookies" aria-labelledby="cookie-use-title">
              <p className="privacy-section-number">02 <span>WHY THEY ARE USED</span></p>
              <h2 id="cookie-use-title">How we use cookies</h2>
              <p>
                Cookies and similar technologies can support website functions, remember preferences,
                measure how a site is used or support advertising. The technologies and purposes on a
                particular website depend on its current configuration.
              </p>
              <p>
                This website currently loads an external tracking script supplied by LeadConnector
                (HighLevel). It is used for website tracking and may support enquiry capture. The
                exact information it stores or accesses depends on the provider’s live settings.
              </p>
            </section>

            <section className="privacy-section" id="cookie-types" aria-labelledby="cookie-types-title">
              <p className="privacy-section-number">03 <span>COOKIE CATEGORIES</span></p>
              <h2 id="cookie-types-title">Types of cookies</h2>
              <p>
                The categories below describe common purposes. They are not a claim that every
                category is currently active on this website.
              </p>
              <ul className="privacy-bullet-list">
                <li><strong>Strictly necessary:</strong> support a feature or service you have requested, such as security or remembering a choice.</li>
                <li><strong>Functional:</strong> remember preferences such as language or region.</li>
                <li><strong>Analytics:</strong> help understand how a website is used.</li>
                <li><strong>Marketing and advertising:</strong> measure campaigns or support relevant advertising across services.</li>
              </ul>
              <p>
                Whether a technology needs consent depends on what it does and the rules that apply.
                We do not claim that analytics or advertising technologies are consent-gated on this
                site unless the live setup has been confirmed.
              </p>
            </section>

            <section className="privacy-section" id="cookies-on-our-site" aria-labelledby="cookie-inventory-title">
              <p className="privacy-section-number">04 <span>WHAT WE CAN CONFIRM</span></p>
              <h2 id="cookie-inventory-title">Cookies on our website</h2>
              <p>
                The following external tracking script is currently used on this website. Its
                provider configuration determines which cookies or similar technologies are set,
                what each one does, and how long it lasts. Those details have not yet been confirmed.
              </p>
              <div className="cookie-table-wrap" role="region" aria-label="Known tracking technology" tabIndex={0}>
                <table className="cookie-table">
                  <thead>
                    <tr>
                      <th scope="col">Technology or provider</th>
                      <th scope="col">Known purpose</th>
                      <th scope="col">Category and duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>LeadConnector (HighLevel) tracking script</td>
                      <td>Website tracking and supported enquiry capture</td>
                      <td>Exact storage items, category and duration are being confirmed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="cookie-inventory-note">
                We will update this section when the live cookie and storage inventory has been
                confirmed. Cookie names and expiry periods are not guessed here.
              </p>
            </section>

            <section className="privacy-section" id="third-party-cookies" aria-labelledby="cookie-third-party-title">
              <p className="privacy-section-number">05 <span>EXTERNAL SERVICES</span></p>
              <h2 id="cookie-third-party-title">Third-party cookies</h2>
              <p>
                Some website features and tracking services are provided by other organisations.
                Their scripts may set or access technologies on your device under their own
                configurations. The LeadConnector (HighLevel) tracking script is currently used on
                this site. If we add other providers or embedded content that use cookies, we will
                update this policy with the relevant details.
              </p>
            </section>

            <section className="privacy-section" id="manage-cookies" aria-labelledby="cookie-manage-title">
              <p className="privacy-section-number">06 <span>YOUR CONTROLS</span></p>
              <h2 id="cookie-manage-title">Managing your choices</h2>
              <p>
                Most browsers let you block or delete cookies through their privacy settings. Blocking
                some technologies may affect website features. Browser controls may not let you choose
                separately by category or record a preference for this website.
              </p>
              <p>
                This website does not currently provide an on-site cookie preference panel. We will
                not describe accept, reject or category controls as available until they are in place.
              </p>
            </section>

            <section className="privacy-section" id="personal-information" aria-labelledby="cookie-personal-title">
              <p className="privacy-section-number">07 <span>DATA AND PRIVACY</span></p>
              <h2 id="cookie-personal-title">Your personal information</h2>
              <p>
                Where cookies or similar technologies involve personal information, we handle it as
                explained in our <a href="/privacy-policy">Privacy Policy</a>. You can contact us at{' '}
                <a href="mailto:info@infotechbusinesssolutions.com">info@infotechbusinesssolutions.com</a> with
                questions about information connected with your visit.
              </p>
            </section>

            <section className="privacy-section" id="policy-changes" aria-labelledby="cookie-changes-title">
              <p className="privacy-section-number">08 <span>KEEPING THIS CURRENT</span></p>
              <h2 id="cookie-changes-title">Changes to this policy</h2>
              <p>
                We may update this policy when the technologies on our website or the applicable rules
                change. The latest version and its update date will appear on this page. We will review
                the cookie inventory when the tracking configuration changes.
              </p>
            </section>

            <section className="privacy-section" id="contact" aria-labelledby="cookie-contact-title">
              <p className="privacy-section-number">09 <span>QUESTIONS</span></p>
              <h2 id="cookie-contact-title">Contact us</h2>
              <p>
                If you have a question about cookies or tracking on this website, email{' '}
                <a href="mailto:info@infotechbusinesssolutions.com">info@infotechbusinesssolutions.com</a>.
              </p>
            </section>

            <section className="privacy-contact-card" aria-labelledby="cookie-contact-card-title">
              <div className="privacy-contact-icon"><Mail size={20} aria-hidden="true" /></div>
              <div>
                <p>NEED MORE DETAIL?</p>
                <h2 id="cookie-contact-card-title">Ask us about cookies.</h2>
                <span>Send our team a question about website tracking or your privacy.</span>
              </div>
              <a href="mailto:info@infotechbusinesssolutions.com" className="privacy-contact-button">
                Email ITBS <ArrowRight size={16} aria-hidden="true" />
              </a>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
