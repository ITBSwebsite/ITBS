'use client';

import { useMemo, useState, type FormEvent } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  Globe2,
  Headset,
  Mail,
  Megaphone,
  Palette,
  Search,
  Sparkles,
  WalletCards,
} from 'lucide-react';
import { HELP_ARTICLES, HELP_CATEGORIES, HOW_WE_WORK } from './help-data';

const CATEGORY_ICONS = {
  'getting-started': Sparkles,
  'web-development': Globe2,
  'seo-marketing': Megaphone,
  'graphic-design': Palette,
  'billing-payments': WalletCards,
  'account-support': Headset,
} as const;

const SUPPORT_EMAIL = 'info@infotechbusinesssolutions.com';
const SUPPORT_WHATSAPP = 'https://wa.me/923701660317';

export function HelpCenterView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const visibleArticles = useMemo(() => {
    const articlePool = selectedCategory
      ? HELP_ARTICLES.filter((article) => article.category === selectedCategory)
      : normalizedQuery
        ? HELP_ARTICLES
        : HELP_ARTICLES.filter((article) => article.popular);

    if (!normalizedQuery) return articlePool;

    return articlePool.filter((article) => {
      const searchableText = `${article.question} ${article.answer} ${article.keywords} ${article.category}`;
      return searchableText.toLowerCase().includes(normalizedQuery);
    });
  }, [normalizedQuery, selectedCategory]);

  function chooseCategory(categoryId: string) {
    setSelectedCategory((current) => current === categoryId ? null : categoryId);
    window.setTimeout(() => {
      document.getElementById('popular-articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById('popular-articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const selectedCategoryTitle = HELP_CATEGORIES.find((category) => category.id === selectedCategory)?.title;

  return (
    <main className="help-page">
      <section className="help-hero">
        <div className="help-hero-orbit help-hero-orbit--one" aria-hidden="true" />
        <div className="help-hero-orbit help-hero-orbit--two" aria-hidden="true" />
        <div className="help-container help-hero-inner">
          <div className="help-hero-top">
            <div className="help-hero-copy-block">
              <p className="help-eyebrow"><span /> ITBS HELP CENTER</p>
              <h1>How can we help you today?</h1>
              <p className="help-hero-copy">
                Find answers about our services, project process, billing and support. Can’t find what
                you need? Our team is just a message away.
              </p>
            </div>
            <aside className="help-quick-card">
              <span className="help-quick-icon"><Headset size={21} aria-hidden="true" /></span>
              <p>REAL PEOPLE. CLEAR ANSWERS.</p>
              <h2>Need a hand with something specific?</h2>
              <span className="help-quick-response">Our team replies within one working day.</span>
              <Link href="/contact">Talk to our team <ArrowRight size={16} aria-hidden="true" /></Link>
            </aside>
          </div>
          <form className="help-search" role="search" onSubmit={submitSearch}>
            <Search size={21} aria-hidden="true" />
            <input
              id="help-search-input"
              type="search"
              aria-label="Search help articles"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search for help, e.g. ‘website timeline’"
              autoComplete="off"
            />
            <button className="help-search-submit" type="submit">Search</button>
          </form>
          <div className="help-hero-footnote"><Check size={15} aria-hidden="true" /> Search by keyword or browse topics below.</div>
        </div>
      </section>

      <section className="help-categories help-section" aria-labelledby="help-categories-title">
        <div className="help-container">
          <div className="help-section-heading help-section-heading--split">
            <div>
              <p className="help-kicker">Browse by topic</p>
              <h2 id="help-categories-title">What can we help with?</h2>
            </div>
            <p>Choose a topic to see the answers people ask us for most.</p>
          </div>
          <div className="help-category-grid">
            {HELP_CATEGORIES.map((category) => {
              const Icon = CATEGORY_ICONS[category.id as keyof typeof CATEGORY_ICONS];
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  className={`help-category-card${isSelected ? ' is-selected' : ''}`}
                  type="button"
                  key={category.id}
                  aria-pressed={isSelected}
                  onClick={() => chooseCategory(category.id)}
                >
                  <span className="help-category-icon"><Icon size={19} strokeWidth={1.8} aria-hidden="true" /></span>
                  <span className="help-category-copy"><strong>{category.title}</strong><small>{category.description}</small></span>
                  <ArrowRight className="help-category-arrow" size={17} aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="help-articles help-section" id="popular-articles" aria-labelledby="help-articles-title">
        <div className="help-container help-articles-container">
          <div className="help-section-heading help-section-heading--articles">
            <div>
              <p className="help-kicker">Useful answers</p>
              <h2 id="help-articles-title">{selectedCategoryTitle ? `${selectedCategoryTitle} help` : 'Popular articles'}</h2>
              <p>Open a question to find a clear answer and the next step.</p>
            </div>
            {selectedCategory && (
              <button className="help-clear-filter" type="button" onClick={() => setSelectedCategory(null)}>
                View popular articles <ArrowRight size={15} aria-hidden="true" />
              </button>
            )}
          </div>

          {visibleArticles.length > 0 ? (
            <div className="help-article-list">
              {visibleArticles.map((article, index) => (
                <details className="help-article" key={article.question}>
                  <summary>
                    <span className="help-article-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="help-article-question">{article.question}</span>
                    <ChevronDown size={19} aria-hidden="true" />
                  </summary>
                  <div className="help-article-answer"><p>{article.answer}</p><Link href="/contact">Ask us about this <ArrowRight size={15} aria-hidden="true" /></Link></div>
                </details>
              ))}
            </div>
          ) : (
            <div className="help-no-results">
              <span><FileText size={21} aria-hidden="true" /></span>
              <div><strong>No matching articles yet</strong><p>Try another search or send your question to our team.</p></div>
              <Link href="/contact">Contact us <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
          )}
        </div>
      </section>

      <section className="help-process help-section" aria-labelledby="help-process-title">
        <div className="help-container">
          <div className="help-section-heading help-section-heading--center">
            <p className="help-kicker">A straightforward process</p>
            <h2 id="help-process-title">From first message to launch day.</h2>
            <p>Here is what working with ITBS looks like, step by step.</p>
          </div>
          <div className="help-process-grid">
            {HOW_WE_WORK.map((step) => (
              <article className="help-process-card" key={step.number}>
                <span className="help-step-number">{step.number}</span>
                <span className="help-step-rule" aria-hidden="true"><i /></span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="help-support">
        <div className="help-container help-support-inner">
          <div className="help-support-copy">
            <span className="help-support-icon"><Headset size={22} aria-hidden="true" /></span>
            <p className="help-kicker">Here when you need us</p>
            <h2>Still need help? Talk to a real person.</h2>
            <p>Send us a message and we’ll get back to you within 1 working day.</p>
          </div>
          <div className="help-support-actions">
            <Link className="help-button help-button--yellow" href="/contact">Contact Us <ArrowRight size={17} aria-hidden="true" /></Link>
            <a className="help-button help-button--outline" href={SUPPORT_WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="help-email-link" href={`mailto:${SUPPORT_EMAIL}`}><Mail size={16} aria-hidden="true" /> {SUPPORT_EMAIL}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
