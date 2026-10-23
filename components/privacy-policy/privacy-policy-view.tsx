import {
  ArrowRight,
  Check,
  ChevronDown,
  FileCheck2,
  Mail,
  ShieldCheck,
} from 'lucide-react';

const sections = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'information-we-collect', label: 'Information we collect' },
  { id: 'how-we-use-information', label: 'How we use information' },
  { id: 'marketing', label: 'Marketing choices' },
  { id: 'cookies-and-tracking', label: 'Cookies and tracking' },
  { id: 'sharing-and-transfers', label: 'Sharing and transfers' },
  { id: 'retention-and-security', label: 'Retention and security' },
  { id: 'your-rights', label: 'Your rights' },
  { id: 'complaints', label: 'Questions and complaints' },
  { id: 'children-and-changes', label: 'Children and changes' },
];

function ContentsLinks({ compact = false }: { compact?: boolean }) {
  return (
    <nav className={compact ? 'privacy-toc-links privacy-toc-links--compact' : 'privacy-toc-links'} aria-label="Privacy policy sections">
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

export function PrivacyPolicyView() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero" aria-labelledby="privacy-title">
        <div className="privacy-hero-orbit privacy-hero-orbit--one" aria-hidden="true" />
        <div className="privacy-hero-orbit privacy-hero-orbit--two" aria-hidden="true" />
        <div className="privacy-container privacy-hero-grid">
          <div className="privacy-hero-copy">
            <p className="privacy-eyebrow"><span /> CLEAR, CONSIDERED, PRIVATE</p>
            <h1 id="privacy-title">Privacy Policy</h1>
            <p className="privacy-hero-lede">
              A straightforward guide to the personal information we use when you visit our website,
              contact us or work with ITBS.
            </p>
            <div className="privacy-updated">
              <FileCheck2 size={17} aria-hidden="true" />
              <span>Last updated</span>
              <strong>21 October 2026</strong>
            </div>
          </div>

          <aside className="privacy-hero-card" aria-label="Privacy at a glance">
            <div className="privacy-hero-card-head">
              <span className="privacy-hero-icon"><ShieldCheck size={23} aria-hidden="true" /></span>
              <div>
                <p>YOUR INFORMATION</p>
                <h2>Handled with care.</h2>
              </div>
            </div>
            <p className="privacy-hero-card-intro">Here’s the short version of what this policy covers.</p>
            <ul>
              <li><Check size={16} aria-hidden="true" /><span>Details you share through an enquiry or project.</span></li>
              <li><Check size={16} aria-hidden="true" /><span>Website activity collected by our tracking provider.</span></li>
              <li><Check size={16} aria-hidden="true" /><span>How to ask about, access or correct your information.</span></li>
            </ul>
            <p className="privacy-hero-card-note">We do not sell personal information.</p>
          </aside>
        </div>
      </section>

      <section className="privacy-content" aria-label="Privacy policy details">
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
              <p>Have a privacy question?</p>
              <a href="mailto:info@infotechbusinesssolutions.com">Email our team <ArrowRight size={14} aria-hidden="true" /></a>
            </div>
          </aside>

          <article className="privacy-article">
            <div className="privacy-summary-card">
              <div className="privacy-summary-mark"><ShieldCheck size={20} aria-hidden="true" /></div>
              <div>
                <p className="privacy-summary-label">AT A GLANCE</p>
                <h2>Only the information needed to respond and do the work.</h2>
                <p>
                  We use information you provide to answer enquiries, prepare proposals and deliver
                  agreed services. We also use a website tracking service, explained below.
                </p>
              </div>
            </div>

            <p className="privacy-article-intro">
              This policy applies to visitors, people who contact us and our clients. If ITBS handles
              personal information on behalf of a client as part of a project, the client may be the
              organisation responsible for that information; our role is then set out in the relevant
              project agreement.
            </p>

            <section className="privacy-section" id="who-we-are" aria-labelledby="privacy-who-title">
              <p className="privacy-section-number">01 <span>ABOUT ITBS</span></p>
              <h2 id="privacy-who-title">Who we are</h2>
              <p>
                This website is operated by InfoTech Business Solution (“ITBS”). We provide web
                design and development, SEO, paid advertising, social media and email marketing,
                and graphic design services.
              </p>
              <p>
                For questions about this policy or to make a privacy request, email{' '}
                <a href="mailto:info@infotechbusinesssolutions.com">info@infotechbusinesssolutions.com</a>.
              </p>
            </section>

            <section className="privacy-section" id="information-we-collect" aria-labelledby="privacy-info-title">
              <p className="privacy-section-number">02 <span>WHAT WE COLLECT</span></p>
              <h2 id="privacy-info-title">Information we collect</h2>
              <p>Depending on how you interact with us, this may include:</p>
              <ul className="privacy-bullet-list">
                <li><strong>Enquiry details:</strong> your name, email address, phone number, business name, website, services of interest, budget or timeline, and information you choose to include in a message or form.</li>
                <li><strong>Project and business records:</strong> communications, project requirements, proposals, agreements and relevant invoice or payment records when you become a client.</li>
                <li><strong>Website activity:</strong> information collected through the HighLevel (LeadConnector) tracking script on this site, such as pages visited, device or browser details, IP address, approximate location, campaign or session information, and enquiry form activity.</li>
              </ul>
              <p>
                Please do not send sensitive personal information through a general enquiry form unless
                we specifically ask for it and explain why it is needed.
              </p>
            </section>

            <section className="privacy-section" id="how-we-use-information" aria-labelledby="privacy-use-title">
              <p className="privacy-section-number">03 <span>WHY WE USE IT</span></p>
              <h2 id="privacy-use-title">How we use information</h2>
              <p>We use personal information to:</p>
              <ul className="privacy-bullet-list">
                <li>respond to enquiries and take steps you request before entering an agreement;</li>
                <li>prepare proposals, deliver services and manage our client relationship;</li>
                <li>maintain business, invoice and accounting records where required;</li>
                <li>understand website visits and enquiry activity, and improve how people find and use our services; and</li>
                <li>protect our website, respond to legal requests and establish or defend legal claims.</li>
              </ul>
              <p>
                The lawful basis depends on the purpose. This may be taking steps at your request
                before a contract, performing a contract, meeting a legal obligation, our legitimate
                interests in running and securing our business, or your consent where consent is
                required. Where we rely on legitimate interests, these include responding to business
                enquiries, managing client work and maintaining a secure, useful website.
              </p>
              <p>
                We do not make decisions about you solely by automated means where those decisions
                would have a legal or similarly significant effect on you.
              </p>
            </section>

            <section className="privacy-section" id="marketing" aria-labelledby="privacy-marketing-title">
              <p className="privacy-section-number">04 <span>YOUR CHOICES</span></p>
              <h2 id="privacy-marketing-title">Marketing choices</h2>
              <p>
                We follow the electronic marketing rules that apply to the type of address and message.
                Where consent is required, we will ask for it first. Each marketing email will provide
                a way to unsubscribe. You can also ask us to stop at any time by emailing{' '}
                <a href="mailto:info@infotechbusinesssolutions.com">info@infotechbusinesssolutions.com</a>.
                We do not sell personal information.
              </p>
            </section>

            <section className="privacy-section" id="cookies-and-tracking" aria-labelledby="privacy-tracking-title">
              <p className="privacy-section-number">05 <span>WEBSITE TECHNOLOGY</span></p>
              <h2 id="privacy-tracking-title">Cookies and tracking</h2>
              <p>
                This website loads an external tracking script from HighLevel (LeadConnector). The
                service is used to understand page visits and campaign activity and to detect
                submissions made through supported enquiry forms. Its tracking may involve page URLs,
                device and browser information, IP address, approximate location, session or campaign
                details, and information entered into an enquiry form.
              </p>
              <p>
                The script may use cookies or similar technologies depending on its configuration.
                You can manage cookies through your browser settings. For details about a particular
                tracking technology or a request relating to your information, contact us using the
                email address in this policy.
              </p>
            </section>

            <section className="privacy-section" id="sharing-and-transfers" aria-labelledby="privacy-sharing-title">
              <p className="privacy-section-number">06 <span>WHO MAY RECEIVE IT</span></p>
              <h2 id="privacy-sharing-title">Sharing and transfers</h2>
              <p>
                We do not sell personal information. We may share it where necessary with service
                providers that help us operate the website, manage enquiries or deliver our services.
                This includes HighLevel (LeadConnector) for website tracking and enquiry capture.
              </p>
              <p>
                We may also disclose information to professional advisers, public authorities or other
                organisations where required by law, needed to protect legal rights, or as part of a
                business sale or transfer. Where a service provider processes information outside the
                UK, we will use an applicable data-transfer safeguard. You can contact us for further
                information about a relevant transfer.
              </p>
            </section>

            <section className="privacy-section" id="retention-and-security" aria-labelledby="privacy-retention-title">
              <p className="privacy-section-number">07 <span>KEEPING IT SAFE</span></p>
              <h2 id="privacy-retention-title">Retention and security</h2>
              <p>
                We keep personal information only for as long as it is needed for the purpose it was
                collected, including to respond to you, provide a service, meet legal or accounting
                obligations, and deal with disputes. The period depends on the type of information and
                our reason for holding it. Marketing information is kept until you unsubscribe or it is
                no longer needed. Website tracking records follow the settings of the relevant service.
              </p>
              <p>
                We use appropriate technical and organisational measures to protect information. No
                method of sending or storing information is completely secure, so we cannot promise
                absolute security.
              </p>
            </section>

            <section className="privacy-section" id="your-rights" aria-labelledby="privacy-rights-title">
              <p className="privacy-section-number">08 <span>YOUR DATA RIGHTS</span></p>
              <h2 id="privacy-rights-title">Your rights</h2>
              <p>
                Depending on the circumstances and the lawful basis we use, you may have the right to
                ask us to access, correct, erase or restrict the use of your personal information; to
                receive certain information in a portable format; or to object to processing based on
                legitimate interests. You can object to direct marketing at any time and withdraw
                consent where we rely on it. These rights are subject to legal conditions and
                exceptions.
              </p>
              <p>
                To make a request, email{' '}
                <a href="mailto:info@infotechbusinesssolutions.com">info@infotechbusinesssolutions.com</a>.
                We may ask for information to confirm your identity and will respond within one month
                of receiving a valid request, subject to any lawful extension or other applicable rule.
              </p>
            </section>

            <section className="privacy-section" id="complaints" aria-labelledby="privacy-complaints-title">
              <p className="privacy-section-number">09 <span>WE’RE HERE TO LISTEN</span></p>
              <h2 id="privacy-complaints-title">Questions and complaints</h2>
              <p>
                If you have a concern about how we use your information, please contact us first at{' '}
                <a href="mailto:info@infotechbusinesssolutions.com">info@infotechbusinesssolutions.com</a>.
                We will acknowledge a data protection complaint within 30 days, investigate it
                appropriately and explain the outcome without unjustifiable or excessive delay.
              </p>
              <p>
                You can also raise a concern with the UK Information Commissioner’s Office (ICO).
              </p>
            </section>

            <section className="privacy-section" id="children-and-changes" aria-labelledby="privacy-children-title">
              <p className="privacy-section-number">10 <span>OTHER INFORMATION</span></p>
              <h2 id="privacy-children-title">Children, external links and changes</h2>
              <p>
                Our services are intended for businesses and adults. We do not knowingly seek to
                collect personal information from anyone under 18. If you believe a child has sent us
                personal information, please contact us so we can review it.
              </p>
              <p>
                Our website may link to other websites. Their privacy practices are controlled by
                those organisations, so please read their notices. We may update this policy when our
                practices or legal requirements change. The latest version and its update date will
                appear on this page.
              </p>
            </section>

            <section className="privacy-contact-card" aria-labelledby="privacy-contact-title">
              <div className="privacy-contact-icon"><Mail size={20} aria-hidden="true" /></div>
              <div>
                <p>NEED MORE DETAIL?</p>
                <h2 id="privacy-contact-title">Talk to us about your privacy.</h2>
                <span>Send your question or data request to our team.</span>
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
