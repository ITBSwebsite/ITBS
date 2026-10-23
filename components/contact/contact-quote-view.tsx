'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const serviceGroups = [
  {
    id: 'business-solutions',
    title: 'Business Solutions',
    items: ['CRM & Lead Management', 'AI Automation & Agents'],
  },
  {
    id: 'seo-ai-search',
    title: 'SEO & AI Search',
    items: [
      'SEO & Search Visibility',
      'Ecommerce SEO',
      'SEO Audits',
      'SEO Migration Services',
      'Content Marketing',
      'Answer Engine Optimisation (AEO)',
      'Generative Engine Optimisation (GEO)',
    ],
  },
  {
    id: 'website-development',
    title: 'Website Development',
    items: [
      'Custom Web Development',
      'Ecommerce Development',
      'WordPress Development',
      'Shopify Development',
      'App Design & Development',
    ],
  },
  {
    id: 'design-creative',
    title: 'Design & Creative',
    items: ['UI/UX Design', 'Figma Design', 'Graphic Design & Brand Identity'],
  },
  {
    id: 'paid-advertising',
    title: 'Paid Advertising',
    items: [
      'PPC & Google Ads',
      'Paid Social Advertising',
      'Google Shopping & Performance Max',
    ],
  },
];

const budgetOptions = [
  'Under £1,000',
  '£1,000 – £3,000',
  '£3,000 – £7,500',
  '£7,500 – £15,000',
  '£15,000+',
  'Not sure yet',
];

const timelineOptions = [
  'As soon as possible',
  'Within the next month',
  'In 1–3 months',
  'In 3–6 months',
  'I’m still exploring',
];

export function ContactQuoteView() {
  const [serviceError, setServiceError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [openServiceGroups, setOpenServiceGroups] = useState<string[]>([]);

  function toggleServiceGroup(groupId: string) {
    setOpenServiceGroups((current) =>
      current.includes(groupId)
        ? current.filter((id) => id !== groupId)
        : [...current, groupId]
    );
  }

  function updateServiceSelection(service: string, checked: boolean) {
    setSelectedServices((current) => {
      if (checked) return current.includes(service) ? current : [...current, service];
      return current.filter((item) => item !== service);
    });
    setServiceError('');
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;

    if (selectedServices.length === 0) {
      event.preventDefault();
      setServiceError('Choose at least one service so we can direct your enquiry.');
      setOpenServiceGroups((current) =>
        current.includes(serviceGroups[0].id) ? current : [serviceGroups[0].id, ...current]
      );
      form.querySelector<HTMLButtonElement>('.quote-service-toggle')?.focus();
      return;
    }

    event.preventDefault();
    setServiceError('');
    setSubmitted(true);

    // Let the site-wide HighLevel tracker read the submitted DOM fields first.
    window.setTimeout(() => {
      form.reset();
      setSelectedServices([]);
      setOpenServiceGroups([]);
    }, 500);
  }

  return (
    <main className="quote-page">
      <div className="quote-page-orb quote-page-orb--one" aria-hidden="true" />
      <div className="quote-page-orb quote-page-orb--two" aria-hidden="true" />

      <section className="quote-shell">
        <div className="quote-intro">
          <nav className="quote-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>

          <div className="quote-intro-copy">
            <span className="quote-eyebrow"><i /> LET’S BUILD SOMETHING THAT WORKS</span>
            <h1>
              Good work starts with <em>a good conversation.</em>
            </h1>
            <p className="quote-intro-lede">
              Tell us where you want to go. We’ll listen, ask the right questions and help you find a practical next step for your business.
            </p>

            <div className="quote-proof-row">
              <span><BadgeCheck size={17} /> Clear, considered advice</span>
              <span><Clock3 size={17} /> A reply within one working day</span>
            </div>
          </div>

          <div className="quote-contact-panel">
            <span className="quote-panel-label">Prefer a direct conversation?</span>
            <a href="mailto:info@infotechbusinesssolutions.com"><Mail size={17} /> info@infotechbusinesssolutions.com</a>
            <a href="tel:+447496296333"><Phone size={17} /> +44 (0) 7496 296333</a>
            <span className="quote-panel-location"><MapPin size={17} /> Manchester & London, United Kingdom</span>
          </div>

          <div className="quote-next-steps" aria-label="What happens next">
            <span className="quote-next-label">WHAT HAPPENS NEXT</span>
            <div><b>01</b><span>We review your goals and brief.</span></div>
            <div><b>02</b><span>We get back to you with useful next steps.</span></div>
          </div>
        </div>

        <div className="quote-form-card" id="quote-form">
          <div className="quote-form-header">
            <div>
              <h2>Request a quote</h2>
              <p>Share a few details and our team will take it from here.</p>
            </div>
          </div>

          {submitted && (
            <div className="quote-success" role="status" aria-live="polite">
              <span><Check size={18} /></span>
              <div>
                <strong>Thank you — your enquiry is on its way.</strong>
                <p>Our team will review the details and get back to you shortly.</p>
              </div>
            </div>
          )}

          <form
            className="quote-form"
            name="ITBS Website Quote Request"
            onSubmit={handleSubmit}
            onChange={() => setSubmitted(false)}
          >
            <fieldset className="quote-fieldset quote-services-fieldset">
              <legend><span>01</span> What can we help you with?</legend>
              <p className="quote-field-hint">Tick the box beside every service you’re interested in. You can choose more than one.</p>

              <div className="quote-service-groups">
                {serviceGroups.map((group) => {
                  const isOpen = openServiceGroups.includes(group.id);
                  const selectedCount = group.items.filter((service) => selectedServices.includes(service)).length;

                  return (
                    <section className={`quote-service-group${isOpen ? ' is-open' : ''}`} key={group.id}>
                      <div className="quote-service-group-head">
                        <h3>{group.title}</h3>
                        <button
                          type="button"
                          className="quote-service-toggle"
                          aria-expanded={isOpen}
                          aria-controls={`service-panel-${group.id}`}
                          onClick={() => toggleServiceGroup(group.id)}
                        >
                          <span>{selectedCount > 0 ? `${selectedCount} selected` : `${group.items.length} services`}</span>
                          <ChevronDown size={18} aria-hidden="true" />
                          <span className="sr-only">{isOpen ? 'Hide' : 'Show'} {group.title} services</span>
                        </button>
                      </div>
                      <div
                        id={`service-panel-${group.id}`}
                        className="quote-service-options"
                        hidden={!isOpen}
                      >
                        {group.items.map((service) => (
                          <label className="quote-service-option" key={service}>
                            <input
                              type="checkbox"
                              name="service_interest"
                              value={service}
                              checked={selectedServices.includes(service)}
                              onChange={(event) => updateServiceSelection(service, event.currentTarget.checked)}
                            />
                            <span>{service}</span>
                          </label>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
              {serviceError && <p className="quote-field-error" role="alert">{serviceError}</p>}
            </fieldset>

            <fieldset className="quote-fieldset">
              <legend><span>02</span> Tell us about the project</legend>
              <p className="quote-field-hint">A little context helps us make the first conversation useful.</p>

              <div className="quote-fields-grid">
                <label className="quote-field quote-field--full">
                  <span>Business website <small>Optional</small></span>
                  <input type="url" name="website" autoComplete="url" placeholder="https://yourwebsite.co.uk" />
                </label>
                <label className="quote-field">
                  <span>Indicative budget <small>Optional</small></span>
                  <select name="budget_range" defaultValue="">
                    <option value="" disabled>Select a range</option>
                    {budgetOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                </label>
                <label className="quote-field">
                  <span>When are you looking to start? <small>Optional</small></span>
                  <select name="project_timeline" defaultValue="">
                    <option value="" disabled>Select a timeframe</option>
                    {timelineOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                </label>
                <label className="quote-field quote-field--full">
                  <span>What would you like to achieve? <small>Optional</small></span>
                  <textarea
                    name="project_details"
                    rows={4}
                    placeholder="Tell us about your goals, what’s working today, or the challenge you’re trying to solve."
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className="quote-fieldset quote-contact-fieldset">
              <legend><span>03</span> How can we reach you?</legend>
              <p className="quote-field-hint">Your details stay with our team and are used to respond to this enquiry.</p>

              <div className="quote-fields-grid">
                <label className="quote-field">
                  <span>First name</span>
                  <input type="text" name="firstName" autoComplete="given-name" required placeholder="Your first name" />
                </label>
                <label className="quote-field">
                  <span>Last name</span>
                  <input type="text" name="lastName" autoComplete="family-name" required placeholder="Your last name" />
                </label>
                <label className="quote-field">
                  <span>Work email</span>
                  <input type="email" name="email" autoComplete="email" required placeholder="you@company.co.uk" />
                </label>
                <label className="quote-field">
                  <span>Phone number <small>Optional</small></span>
                  <input type="tel" name="phone" autoComplete="tel" placeholder="+44" />
                </label>
                <label className="quote-field quote-field--full">
                  <span>Company name <small>Optional</small></span>
                  <input type="text" name="companyName" autoComplete="organization" placeholder="Your business name" />
                </label>
              </div>
            </fieldset>

            <div className="quote-submit-row">
              <p>By submitting, you agree that ITBS may contact you about this enquiry.</p>
              <button type="submit" className="quote-submit-button">
                {submitted ? 'Send another enquiry' : 'Send my enquiry'}
                <ArrowRight size={17} />
              </button>
            </div>
            <p className="quote-secure-note"><span /> Your information is handled by our team and used to respond to your request.</p>
          </form>
        </div>
      </section>

      <section className="quote-bottom-note">
        <span>NOT SURE WHERE TO START?</span>
        <p>That’s completely fine. Tell us what you’re working towards and we’ll help you shape the right brief.</p>
      </section>
    </main>
  );
}
