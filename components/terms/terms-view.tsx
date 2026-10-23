import {
  ArrowRight,
  Check,
  ChevronDown,
  FileCheck2,
  Mail,
  ShieldCheck,
} from 'lucide-react';

const sections = [
  { id: 'about-these-terms', label: 'About these terms' },
  { id: 'using-our-website', label: 'Using our website' },
  { id: 'our-services', label: 'Our services' },
  { id: 'quotes-fees-payment', label: 'Quotes, fees and payment' },
  { id: 'what-we-need-from-you', label: 'What we need from you' },
  { id: 'revisions-and-changes', label: 'Revisions and changes' },
  { id: 'intellectual-property', label: 'Intellectual property' },
  { id: 'results', label: 'Results and guarantees' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'data-protection', label: 'Data protection' },
  { id: 'ending-services', label: 'Ending services' },
  { id: 'liability', label: 'Liability' },
  { id: 'events-outside-control', label: 'Events outside our control' },
  { id: 'changes-to-terms', label: 'Changes to these terms' },
  { id: 'general', label: 'General' },
  { id: 'governing-law', label: 'Governing law' },
  { id: 'contact', label: 'Contact us' },
];

function ContentsLinks({ compact = false }: { compact?: boolean }) {
  return (
    <nav className={compact ? 'terms-toc-links terms-toc-links--compact' : 'terms-toc-links'} aria-label="Terms of Service sections">
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

export function TermsView() {
  return (
    <main className="terms-page">
      <section className="terms-hero" aria-labelledby="terms-title">
        <div className="terms-hero-orbit terms-hero-orbit--one" aria-hidden="true" />
        <div className="terms-hero-orbit terms-hero-orbit--two" aria-hidden="true" />
        <div className="terms-container terms-hero-grid">
          <div className="terms-hero-copy">
            <p className="terms-eyebrow"><span /> CLEAR TERMS, CLEAR EXPECTATIONS</p>
            <h1 id="terms-title">Terms of Service</h1>
            <p className="terms-hero-lede">
              A clear guide to using our website and working with ITBS on your digital project.
            </p>
            <div className="terms-updated">
              <FileCheck2 size={17} aria-hidden="true" />
              <span>Last updated</span>
              <strong>21 October 2026</strong>
            </div>
          </div>

          <aside className="terms-hero-card" aria-label="Terms at a glance">
            <div className="terms-hero-card-head">
              <span className="terms-hero-icon"><ShieldCheck size={23} aria-hidden="true" /></span>
              <div>
                <p>WORKING TOGETHER</p>
                <h2>Clear from the start.</h2>
              </div>
            </div>
            <p className="terms-hero-card-intro">The key points before you begin a project with us.</p>
            <ul>
              <li><Check size={16} aria-hidden="true" /><span>Your accepted proposal sets the project scope, fees and timing.</span></li>
              <li><Check size={16} aria-hidden="true" /><span>Project-specific final work transfers after full payment, subject to third-party licences.</span></li>
              <li><Check size={16} aria-hidden="true" /><span>We work carefully, but search and marketing results cannot be guaranteed.</span></li>
            </ul>
            <p className="terms-hero-card-note">Your signed proposal may set additional terms for your project.</p>
          </aside>
        </div>
      </section>

      <section className="terms-content" aria-label="Terms of Service details">
        <div className="terms-container terms-content-grid">
          <aside className="terms-sidebar">
            <details className="terms-mobile-toc">
              <summary>On this page <ChevronDown size={17} aria-hidden="true" /></summary>
              <ContentsLinks compact />
            </details>
            <div className="terms-toc-card">
              <p className="terms-toc-kicker">THE DETAILS</p>
              <h2>On this page</h2>
              <ContentsLinks />
            </div>
            <div className="terms-side-note">
              <span><Mail size={17} aria-hidden="true" /></span>
              <p>Need help understanding a term?</p>
              <a href="mailto:info@infotechbusinesssolutions.com">Email our team <ArrowRight size={14} aria-hidden="true" /></a>
            </div>
          </aside>

          <article className="terms-article">
            <div className="terms-summary-card">
              <div className="terms-summary-mark"><ShieldCheck size={20} aria-hidden="true" /></div>
              <div>
                <p className="terms-summary-label">AT A GLANCE</p>
                <h2>Your proposal is the source of truth for project details.</h2>
                <p>
                  It sets out the agreed work, deliverables, schedule and fees. These terms explain
                  how we work together around that agreement.
                </p>
              </div>
            </div>

            <p className="terms-article-intro">
              Please read these terms alongside any proposal or agreement we send you. If a signed
              project document sets a different rule for that project, the signed document takes
              priority for that point.
            </p>

            <section className="terms-section" id="about-these-terms" aria-labelledby="terms-about-title">
              <p className="terms-section-number">01 <span>THE AGREEMENT</span></p>
              <h2 id="terms-about-title">About these terms</h2>
              <p>
                These terms apply when you use infotechbusinesssolutions.com or engage services
                provided under the ITBS (InfoTech Business Solution) name. Our services are intended
                for businesses and professionals. An accepted written proposal or signed agreement
                sets out the scope, deliverables, timeline and fees for each project and applies
                alongside these terms.
              </p>
            </section>

            <section className="terms-section" id="using-our-website" aria-labelledby="terms-website-title">
              <p className="terms-section-number">02 <span>WEBSITE USE</span></p>
              <h2 id="terms-website-title">Using our website</h2>
              <p>
                Use this website lawfully. Do not try to gain unauthorised access, introduce malicious
                code, interfere with how the site works, or copy or republish our content except where
                the law allows or we agree in writing.
              </p>
              <p>
                We take reasonable care to keep the website accurate and available, but cannot promise
                uninterrupted or error-free access. Website content is general information, not advice
                for your particular circumstances.
              </p>
            </section>

            <section className="terms-section" id="our-services" aria-labelledby="terms-services-title">
              <p className="terms-section-number">03 <span>WHAT WE DO</span></p>
              <h2 id="terms-services-title">Our services</h2>
              <p>
                Our services include web design and development, e-commerce development, WordPress
                development, search engine optimisation (SEO), generative engine optimisation (GEO),
                paid advertising, social media marketing, email marketing and graphic design.
              </p>
              <p>
                The exact scope, deliverables, timeline and fees are the ones in your accepted written
                proposal or order form. Work outside that agreed scope is handled as a change request.
              </p>
            </section>

            <section className="terms-section" id="quotes-fees-payment" aria-labelledby="terms-payment-title">
              <p className="terms-section-number">04 <span>COMMERCIAL TERMS</span></p>
              <h2 id="terms-payment-title">Quotes, fees and payment</h2>
              <p>
                Your proposal states the quote validity period, fees and payment schedule. Project work
                is usually invoiced at agreed milestones, and ongoing services are usually invoiced
                monthly in advance where the proposal says so. Invoices are due by the date shown on
                the invoice or agreed in writing. VAT is added where it applies.
              </p>
              <p>
                If an invoice is overdue, we may pause affected work where permitted by the agreement
                and applicable law. Third-party costs, such as domains, hosting, themes, plugins, stock
                assets and software subscriptions, are separate when stated in your proposal. Ad spend
                is paid to the advertising platform and is separate from our management fee.
              </p>
            </section>

            <section className="terms-section" id="what-we-need-from-you" aria-labelledby="terms-client-title">
              <p className="terms-section-number">05 <span>YOUR PART</span></p>
              <h2 id="terms-client-title">What we need from you</h2>
              <p>
                To keep work moving, please provide content, feedback, approvals and access to relevant
                accounts or systems on time. You confirm that you have the right to give us materials
                you supply, including text, images and logos, and that using them for the project will
                not infringe another person’s rights. Delays in receiving these items may affect the
                delivery dates in your proposal.
              </p>
            </section>

            <section className="terms-section" id="revisions-and-changes" aria-labelledby="terms-revisions-title">
              <p className="terms-section-number">06 <span>PROJECT CHANGES</span></p>
              <h2 id="terms-revisions-title">Revisions and change requests</h2>
              <p>
                Your proposal states how many revision rounds are included. Additional rounds or work
                outside the agreed scope may affect the price and schedule. We will explain the change
                and agree it with you in writing before starting the extra work.
              </p>
            </section>

            <section className="terms-section" id="intellectual-property" aria-labelledby="terms-ip-title">
              <p className="terms-section-number">07 <span>OWNERSHIP AND LICENCES</span></p>
              <h2 id="terms-ip-title">Intellectual property</h2>
              <p>
                Once we have received full payment, ownership of final deliverables created specifically
                for you, such as bespoke designs and final website files, transfers to you, subject to
                the points below and any terms in your proposal.
              </p>
              <ul className="terms-bullet-list">
                <li><strong>Third-party materials:</strong> Open-source code, themes, plugins, fonts, stock images and platform components remain subject to their own licences. You are responsible for renewals where applicable.</li>
                <li><strong>Our existing materials:</strong> We keep ownership of tools, code libraries, templates and know-how we had before your project. We give you permission to use those items as part of the paid deliverables.</li>
                <li><strong>Portfolio use:</strong> Unless you agree otherwise with us in writing, we may show completed work in our portfolio or case studies. You can tell us in writing if you would prefer us not to.</li>
              </ul>
            </section>

            <section className="terms-section" id="results" aria-labelledby="terms-results-title">
              <p className="terms-section-number">08 <span>REALISTIC EXPECTATIONS</span></p>
              <h2 id="terms-results-title">Results and guarantees</h2>
              <p>
                SEO and marketing outcomes depend on factors outside our control, including search
                engine changes, competitors, advertising platforms and your market. We work with care
                and report openly, but do not guarantee a particular ranking, amount of traffic, number
                of leads or sales.
              </p>
            </section>

            <section className="terms-section" id="confidentiality" aria-labelledby="terms-confidentiality-title">
              <p className="terms-section-number">09 <span>CONFIDENTIAL INFORMATION</span></p>
              <h2 id="terms-confidentiality-title">Confidentiality</h2>
              <p>
                Each of us will keep the other’s confidential information private and use it only for
                the project, unless disclosure is required by law. This responsibility continues after
                the project or services end.
              </p>
            </section>

            <section className="terms-section" id="data-protection" aria-labelledby="terms-data-title">
              <p className="terms-section-number">10 <span>PERSONAL INFORMATION</span></p>
              <h2 id="terms-data-title">Data protection</h2>
              <p>
                Our <a href="/privacy-policy">Privacy Policy</a> explains how we handle personal
                information. If we process personal data on your behalf as a processor, we will agree
                appropriate data-processing terms with you.
              </p>
            </section>

            <section className="terms-section" id="ending-services" aria-labelledby="terms-ending-title">
              <p className="terms-section-number">11 <span>ENDING THE WORK</span></p>
              <h2 id="terms-ending-title">Ending services</h2>
              <p>
                Any notice period or termination process for ongoing services is set out in your
                proposal or signed agreement. If the work ends, fees for work completed up to the end
                date and approved third-party costs remain payable, subject to applicable law and your
                agreement. We will hand over completed deliverables after outstanding amounts due are
                paid, where permitted by law.
              </p>
            </section>

            <section className="terms-section" id="liability" aria-labelledby="terms-liability-title">
              <p className="terms-section-number">12 <span>RESPONSIBILITY</span></p>
              <h2 id="terms-liability-title">Liability</h2>
              <p>
                Nothing in these terms limits liability where the law does not allow it to be limited,
                including liability for death or personal injury caused by negligence, or for fraud or
                fraudulent misrepresentation. Any other agreed allocation or limit of liability must
                be set out in your signed proposal or agreement and remains subject to applicable law.
              </p>
            </section>

            <section className="terms-section" id="events-outside-control" aria-labelledby="terms-events-title">
              <p className="terms-section-number">13 <span>UNEXPECTED EVENTS</span></p>
              <h2 id="terms-events-title">Events outside our control</h2>
              <p>
                Neither of us is responsible for delay or failure caused by events beyond reasonable
                control. Examples may include outages affecting third-party platforms or utilities,
                internet failures, severe weather, strikes or government action. We will communicate
                with you about the impact and reasonable next steps.
              </p>
            </section>

            <section className="terms-section" id="changes-to-terms" aria-labelledby="terms-changes-title">
              <p className="terms-section-number">14 <span>UPDATES</span></p>
              <h2 id="terms-changes-title">Changes to these terms</h2>
              <p>
                We may update these terms from time to time. The version and date shown on this page
                identify the current website terms. A change does not alter a signed project agreement
                unless both of us agree to that change.
              </p>
            </section>

            <section className="terms-section" id="general" aria-labelledby="terms-general-title">
              <p className="terms-section-number">15 <span>OTHER TERMS</span></p>
              <h2 id="terms-general-title">General</h2>
              <p>
                These terms and your accepted proposal or signed agreement set out our agreement about
                the relevant services. If a part of these terms is found invalid or unenforceable, the
                remaining parts continue to apply. If either of us does not enforce a right straight
                away, that does not mean the right has been given up. No one else may enforce these
                terms unless the law allows it.
              </p>
            </section>

            <section className="terms-section" id="governing-law" aria-labelledby="terms-law-title">
              <p className="terms-section-number">16 <span>APPLICABLE LAW</span></p>
              <h2 id="terms-law-title">Governing law</h2>
              <p>
                The governing law and courts for a project are those set out in its signed proposal or
                agreement. This page does not select a jurisdiction where your project documents have
                not specified one. Any term remains subject to mandatory legal rights that apply to you.
              </p>
            </section>

            <section className="terms-section" id="contact" aria-labelledby="terms-contact-title">
              <p className="terms-section-number">17 <span>QUESTIONS</span></p>
              <h2 id="terms-contact-title">Contact us</h2>
              <p>
                If you have a question about these terms or your proposal, email us at{' '}
                <a href="mailto:info@infotechbusinesssolutions.com">info@infotechbusinesssolutions.com</a>.
              </p>
            </section>

            <section className="terms-contact-card" aria-labelledby="terms-contact-card-title">
              <div className="terms-contact-icon"><Mail size={20} aria-hidden="true" /></div>
              <div>
                <p>LET’S TALK</p>
                <h2 id="terms-contact-card-title">Need a term clarified?</h2>
                <span>We can walk you through the details of your proposal.</span>
              </div>
              <a href="mailto:info@infotechbusinesssolutions.com" className="terms-contact-button">
                Contact ITBS <ArrowRight size={16} aria-hidden="true" />
              </a>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
