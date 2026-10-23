'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CircleHelp, Globe2, Megaphone, WalletCards } from 'lucide-react';
import { FAQ_CATEGORIES, FAQ_ITEMS, type FaqCategoryFilter } from './faq-data';

const HERO_SHORTCUTS = [
  { category: 'Web', label: 'Web development', icon: Globe2 },
  { category: 'SEO & Marketing', label: 'SEO & marketing', icon: Megaphone },
  { category: 'Pricing', label: 'Pricing & payments', icon: WalletCards },
] as const;

export function FaqView() {
  const [activeCategory, setActiveCategory] = useState<FaqCategoryFilter>('All');
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const visibleFaqs = activeCategory === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((faq) => faq.category === activeCategory);

  function selectCategory(category: FaqCategoryFilter) {
    setActiveCategory(category);
    setOpenQuestion(null);
  }

  function openTopic(category: FaqCategoryFilter) {
    selectCategory(category);
    document.getElementById('faq-questions')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <main className="faq-page">
      <section className="faq-hero">
        <div className="faq-hero-orb" aria-hidden="true" />
        <div className="faq-container faq-hero-inner">
          <div className="faq-hero-copy">
            <p className="faq-eyebrow"><span /> KNOW BEFORE YOU BEGIN</p>
            <h1>Frequently Asked Questions.</h1>
            <p>Quick answers to the things our clients ask most.</p>
            <div className="faq-hero-actions">
              <Link className="faq-hero-browse" href="#faq-questions">Browse questions <ArrowRight size={16} aria-hidden="true" /></Link>
              <span className="faq-hero-count"><strong>15</strong> answers <i /> <strong>5</strong> topics</span>
            </div>
          </div>
          <aside className="faq-hero-panel" aria-label="Quick FAQ topic shortcuts">
            <div className="faq-hero-panel-heading">
              <span className="faq-hero-panel-icon"><CircleHelp size={21} aria-hidden="true" /></span>
              <div><p>QUICK TOPICS</p><h2>Find your answer faster.</h2></div>
            </div>
            <p className="faq-hero-panel-copy">Jump straight to answers for the work you’re planning.</p>
            <div className="faq-hero-shortcuts">
              {HERO_SHORTCUTS.map(({ category, label, icon: Icon }) => {
                const count = FAQ_ITEMS.filter((faq) => faq.category === category).length;
                return (
                  <button key={category} type="button" onClick={() => openTopic(category)}>
                    <Icon size={18} aria-hidden="true" />
                    <span><strong>{label}</strong><small>{count} answers</small></span>
                    <ArrowRight className="faq-hero-shortcut-arrow" size={16} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
            <div className="faq-hero-panel-note"><span /> Clear answers, no jargon.</div>
          </aside>
        </div>
      </section>

      <section className="faq-content" id="faq-questions" aria-label="Frequently asked questions">
        <div className="faq-container">
          <div className="faq-filter-row" aria-label="Filter questions by category">
            <p>Browse by topic</p>
            <div className="faq-category-pills">
              {FAQ_CATEGORIES.map((category) => (
                <button
                  className={`faq-category-pill${activeCategory === category ? ' is-active' : ''}`}
                  type="button"
                  key={category}
                  aria-pressed={activeCategory === category}
                  onClick={() => selectCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="faq-list" aria-live="polite">
            {visibleFaqs.map((faq, index) => {
              const isOpen = openQuestion === faq.id;
              const answerId = `faq-answer-${faq.id}`;
              return (
                <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={faq.id}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenQuestion(isOpen ? null : faq.id)}
                  >
                    <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="faq-question-copy">
                      <span>{faq.question}</span>
                      <small>{faq.category}</small>
                    </span>
                    <span className="faq-toggle" aria-hidden="true"><i /></span>
                  </button>
                  <div className="faq-answer" id={answerId} aria-hidden={!isOpen}>
                    <div className="faq-answer-inner"><p>{faq.answer}</p></div>
                  </div>
                </article>
              );
            })}
          </div>

          <section className="faq-cta" aria-labelledby="faq-cta-title">
            <div className="faq-cta-mark" aria-hidden="true"><span /></div>
            <div className="faq-cta-copy">
              <p>WE’RE HERE TO HELP</p>
              <h2 id="faq-cta-title">Didn’t find your answer?</h2>
              <span>Ask us directly. We’ll point you in the right direction.</span>
            </div>
            <Link href="/contact" className="faq-cta-button">Contact Us <ArrowRight size={17} aria-hidden="true" /></Link>
          </section>
        </div>
      </section>
    </main>
  );
}

