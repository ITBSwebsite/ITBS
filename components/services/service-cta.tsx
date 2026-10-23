'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Mail, CheckCircle2 } from 'lucide-react';

interface ServiceCTAProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  features?: string[];
}

export function ServiceCTA({
  badge = 'LET’S BUILD TOGETHER',
  title = 'Ready to Build a High-Performance Digital Platform?',
  description = 'Schedule a complimentary architecture review with our senior UK web engineers. We’ll audit your requirements, outline clear timelines, and provide transparent fixed pricing.',
  primaryBtnText = 'Book A Consultation',
  primaryBtnHref = '/contact',
  features = [
    'Fixed Transparent Pricing',
    'Full Code & IP Ownership',
    'Enterprise SLA & Support',
    'UK-Based Technical Team',
  ],
}: ServiceCTAProps) {
  return (
    <div className="svc-cta-box" suppressHydrationWarning>
      <style>{`
        .svc-cta-box {
          position: relative;
          background: linear-gradient(135deg, #0c1250 0%, #111966 60%, #172175 100%);
          border: 1px solid rgba(255, 230, 0, 0.3);
          border-radius: 24px;
          padding: clamp(38px, 5vw, 64px) clamp(24px, 4.5vw, 58px);
          color: #FFFFFF;
          margin-top: 60px;
          overflow: hidden;
          box-shadow: 0 20px 50px -12px rgba(17, 25, 102, 0.45);
        }
        .svc-cta-glow {
          position: absolute;
          top: -120px;
          right: -100px;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 230, 0, 0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .svc-cta-inner {
          position: relative;
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }
        .svc-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px;
          border-radius: 20px;
          background: rgba(255, 230, 0, 0.14);
          border: 1px solid rgba(255, 230, 0, 0.45);
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #FCF000;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .svc-cta-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(28px, 3.6vw, 44px);
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.18;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
        }
        .svc-cta-desc {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 16.5px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.82);
          margin: 0 0 28px;
        }
        .svc-cta-features {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .svc-cta-feat-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.9);
          padding: 5px 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 20px;
        }
        .svc-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .svc-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 34px;
       background: #FCF000;
          color: #111966 !important;
          border-radius: 8px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15.5px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.02em;
        box-shadow: 0 6px 22px rgba(252, 240, 0, 0.38);
          transition: all 0.3s ease;
        }
        .svc-cta-btn-primary:hover {
          background: var(--brand-hover-yellow);
          box-shadow: 0 8px 28px rgba(252, 240, 0, 0.5);
        }
        .svc-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #FFFFFF;
          border-radius: 8px;
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .svc-cta-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #FCF000;
          color: #FCF000;
        }
      `}</style>

      <div className="svc-cta-glow" aria-hidden="true" />
      <div className="svc-cta-inner">
        <div className="svc-cta-badge">
          <Sparkles size={13} style={{ color: '#FCF000' }} />
          <span>{badge}</span>
        </div>
        <h2 className="svc-cta-title">{title}</h2>
        <p className="svc-cta-desc">{description}</p>

        <div className="svc-cta-features">
          {features.map((feat, idx) => (
            <span key={idx} className="svc-cta-feat-pill">
              <CheckCircle2 size={13} style={{ color: '#EAB308' }} />
              <span>{feat}</span>
            </span>
          ))}
        </div>

        <div className="svc-cta-actions">
          <Link href={primaryBtnHref} className="svc-cta-btn-primary">
            <span>{primaryBtnText}</span>
            <ArrowRight size={16} strokeWidth={2.2} />
          </Link>
          <a href="mailto:info@infotechbusinesssolutions.com" className="svc-cta-btn-secondary">
            <Mail size={16} strokeWidth={2} />
            <span>Request Fixed Quote</span>
          </a>
        </div>
      </div>
    </div>
  );
}
