'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';

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
  const [contactDetailsOpen, setContactDetailsOpen] = useState(true);
  const [projectDetailsOpen, setProjectDetailsOpen] = useState(false);

  function toggleServiceGroup(groupId: string) {
    setOpenServiceGroups((current) =>
      current.includes(groupId)
        ? current.filter((id) => id !== groupId)
        : current.concat(groupId)
    );
  }

  function updateServiceSelection(service: string, checked: boolean) {
    setSelectedServices((current) => {
      if (checked) return current.includes(service) ? current : current.concat(service);
      return current.filter((item) => item !== service);
    });
    setServiceError('');
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const firstInvalidField = form.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(':invalid');

    if (firstInvalidField) {
      const contactPanel = firstInvalidField.closest('.quote-contact-panel');
      if (contactPanel && !contactDetailsOpen) {
        setContactDetailsOpen(true);
        window.requestAnimationFrame(() => {
          firstInvalidField.focus();
          firstInvalidField.reportValidity();
        });
      } else {
        firstInvalidField.reportValidity();
      }
      return;
    }

    if (selectedServices.length === 0) {
      setServiceError('Choose at least one service so we can direct your enquiry.');
      setOpenServiceGroups((current) =>
        current.includes(serviceGroups[0].id)
          ? current
          : [serviceGroups[0].id, ...current]
      );
      form.querySelector<HTMLButtonElement>('.quote-service-toggle')?.focus();
      return;
    }

    setServiceError('');
    setSubmitted(true);
  }

  return (
    <main className="quote-page">
      <section className="quote-shell" aria-labelledby="quote-page-title">
        <nav className="quote-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Contact</span>
        </nav>

        <div className="quote-form-card" id="quote-form">
          <header className="quote-form-header">
            <span className="quote-form-eyebrow"><i aria-hidden="true" /> ITBS · LET’S TALK</span>
            <h1 id="quote-page-title">Request a quote</h1>
            <p>Share a few details about your project. Our team will review your enquiry and get back to you.</p>

          </header>

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
            noValidate
          >
            <section className={`quote-contact-accordion${contactDetailsOpen ? ' is-open' : ''}`}>
              <button
                type="button"
                className="quote-project-toggle quote-contact-toggle"
                aria-expanded={contactDetailsOpen}
                aria-controls="quote-contact-panel"
                onClick={() => setContactDetailsOpen((open) => !open)}
              >
                <span className="quote-project-toggle-number">01</span>
                <span className="quote-project-toggle-copy">
                  <strong>How can we reach you?</strong>
                </span>
                <ChevronDown size={22} aria-hidden="true" />
              </button>
              <div id="quote-contact-panel" className="quote-contact-panel" hidden={!contactDetailsOpen}>
                <fieldset className="quote-contact-fieldset">
                  <legend className="sr-only">Your contact details</legend>
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
                  </div>
                </fieldset>
              </div>
            </section>

            <section className="quote-services-section" aria-labelledby="quote-services-title">
              <div className="quote-contact-accordion quote-services-heading">
                <div className="quote-project-toggle quote-services-title-row">
                  <span className="quote-project-toggle-number">02</span>
                  <h2 className="quote-project-toggle-copy" id="quote-services-title">
                    <strong>What can we help you with?</strong>
                  </h2>
                </div>
              </div>
              <fieldset className="quote-services-fieldset">
                <legend className="sr-only">Choose one or more services</legend>
                <div className="quote-service-groups">
                  {serviceGroups.map((group) => {
                    const isOpen = openServiceGroups.includes(group.id);
                    const selectedCount = group.items.filter((service) =>
                      selectedServices.includes(service)
                    ).length;

                    return (
                      <section
                        className={'quote-service-group' + (isOpen ? ' is-open' : '')}
                        key={group.id}
                      >
                        <div className="quote-service-group-head">
                          <h3>{group.title}</h3>
                          <button
                            type="button"
                            className="quote-service-toggle"
                            aria-expanded={isOpen}
                            aria-controls={'service-panel-' + group.id}
                            onClick={() => toggleServiceGroup(group.id)}
                          >
                            <span>{selectedCount > 0 ? selectedCount + ' selected' : group.items.length + ' services'}</span>
                            <ChevronDown size={18} aria-hidden="true" />
                            <span className="sr-only">{isOpen ? 'Hide' : 'Show'} {group.title} services</span>
                          </button>
                        </div>
                        <div
                          id={'service-panel-' + group.id}
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
                                onChange={(event) =>
                                  updateServiceSelection(service, event.currentTarget.checked)
                                }
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
            </section>

            <section className={`quote-project-accordion${projectDetailsOpen ? ' is-open' : ''}`}>
              <button
                type="button"
                className="quote-project-toggle"
                aria-expanded={projectDetailsOpen}
                aria-controls="quote-project-panel"
                onClick={() => setProjectDetailsOpen((open) => !open)}
              >
                <span className="quote-project-toggle-number">03</span>
                <span className="quote-project-toggle-copy">
                  <strong>Add project details</strong>
                </span>
                <ChevronDown size={22} aria-hidden="true" />
              </button>
              <div id="quote-project-panel" className="quote-project-panel" hidden={!projectDetailsOpen}>
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
              </div>
            </section>

            <div className="quote-submit-row">
              <p>By submitting, you agree that ITBS may contact you about this enquiry.</p>
              <button type="submit" className="quote-submit-button" disabled={submitted}>
                {submitted ? 'Enquiry submitted' : 'Send an enquiry'}
                <ArrowRight size={18} />
              </button>
            </div>
            <p className="quote-secure-note"><span aria-hidden="true" /> Your information is handled by our team and used to respond to your request.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
