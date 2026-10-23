'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQAccordion({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about our engineering standards, project timelines, and delivery process.',
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="svc-faq-wrap">
      <style>{`
        .svc-faq-wrap {
          margin-top: 40px;
        }
        .svc-faq-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 40px;
        }
        .svc-faq-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px;
          border-radius: 20px;
          background: #FFFFFF;
          border: 1px solid rgba(17, 25, 102, 0.12);
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #111966;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .svc-faq-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(28px, 3.2vw, 40px);
          font-weight: 700;
          color: #111966;
          margin: 0 0 12px;
          line-height: 1.2;
        }
        .svc-faq-subtitle {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 16px;
          color: #202938;
          line-height: 1.65;
          margin: 0;
        }
        .svc-faq-list {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .svc-faq-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .svc-faq-card.is-open {
          border-color: #EAB308;
          box-shadow: 0 8px 24px -6px rgba(17, 25, 102, 0.08);
        }
        .svc-faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          gap: 16px;
        }
        .svc-faq-q {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: 18px;
          font-weight: 700;
          color: #111966;
          line-height: 1.35;
          margin: 0;
          transition: color 0.2s ease;
        }
        .svc-faq-card.is-open .svc-faq-q {
          color: #0d1454;
        }
        .svc-faq-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #F5F5F5;
          border: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111966;
          flex-shrink: 0;
          transition: transform 0.3s ease, background 0.25s ease, color 0.25s ease;
        }
        .svc-faq-card.is-open .svc-faq-icon {
          transform: rotate(180deg);
          background: #111966;
          color: #FFFFFF;
          border-color: #111966;
        }
        .svc-faq-body {
          padding: 0 24px 22px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15.5px;
          line-height: 1.7;
          color: #202938;
          margin: 0;
        }
      `}</style>

      <div className="svc-faq-head">
        <div className="svc-faq-badge">
          <HelpCircle size={13} style={{ color: '#EAB308' }} />
          <span>GOT QUESTIONS?</span>
        </div>
        <h2 className="svc-faq-title">{title}</h2>
        <p className="svc-faq-subtitle">{subtitle}</p>
      </div>

      <div className="svc-faq-list">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`svc-faq-card ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="svc-faq-trigger"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <span className="svc-faq-q">{item.question}</span>
                <span className="svc-faq-icon">
                  <ChevronDown size={16} strokeWidth={2.4} />
                </span>
              </button>
              {isOpen && <p className="svc-faq-body">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
