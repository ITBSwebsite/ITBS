import Image from 'next/image';
import { Sparkles } from 'lucide-react';

/* ==========================================================================
   HOW TO ADD OR UPDATE CLIENT LOGOS (NAYA LOGO KAISE ADD KAREIN):
   --------------------------------------------------------------------------
   1. Apna naya logo image "public/images/clients/" folder mein save karein
      (e.g., "my-brand.png").
   2. Neeche diye gaye "CLIENT_BRANDS" array mein naya object add kar dein:
      {
        id: 'brand-slug',
        name: 'Brand Name',
        logoSrc: '/images/clients/my-brand.png',
        industry: 'Sector / Industry',
      },
   3. Marquee slider automatically naye logo ko smooth animation ke sath
      continuous loop mein display karega!
   ========================================================================== */

export interface ClientBrand {
  id: string;
  name: string;
  logoSrc: string;
  industry: string;
  maxHeight?: number;
  scale?: number;
}

const CLIENT_BRANDS: ClientBrand[] = [
  {
    id: 'royale-stones',
    name: 'Royale Stones',
    logoSrc: '/images/clients/royale-stones.png',
    industry: 'Porcelain Tiles & Natural Stone',
    maxHeight: 52,
    scale: 1.08,
  },
  {
    id: 'perfect-line-swiss',
    name: 'Perfect-Line Swiss',
    logoSrc: '/images/clients/perfect-line-swiss.png',
    industry: 'Premium Swiss Hair & Beauty',
    maxHeight: 78,
    scale: 1.15,
  },
  {
    id: 'elizabeth-o',
    name: 'Elizabeth O Beauty',
    logoSrc: '/images/clients/elizabeth-o.png',
    industry: 'Cosmetics & Skincare USA',
    maxHeight: 90,
    scale: 1.18,
  },
  {
    id: 'pave-direct',
    name: 'Pave Direct',
    logoSrc: '/images/clients/pave-direct.png',
    industry: 'Paving & Landscaping Essentials',
    maxHeight: 58,
    scale: 1.05,
  },
];

export function BrandsSection() {
  // Multiply the brands array so the marquee loops seamlessly with zero gaps
  const marqueeItems = [
    ...CLIENT_BRANDS,
    ...CLIENT_BRANDS,
    ...CLIENT_BRANDS,
    ...CLIENT_BRANDS,
  ];

  return (
    <section className="brands-section-root" suppressHydrationWarning>
      {/* Self-contained CSS guaranteeing instant luxury rendering */}
      <style>{`
        .brands-section-root {
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 50%, #F5F5F5 100%);
          padding: clamp(70px, 8vw, 115px) 0 clamp(80px, 9vw, 125px);
          border-bottom: 1px solid #e3e5ef;
          overflow: hidden;
          font-family: var(--font-body), "Cardo", Georgia, serif;
          color: #111966;
        }
        .brands-ambient-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.55;
        }
        .brands-ambient-glow--top {
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 300px;
          background: radial-gradient(circle, rgba(246, 239, 228, 0.7) 0%, transparent 70%);
        }
        .brands-container {
          position: relative;
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 40px);
        }
        /* Header */
        .brands-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto clamp(40px, 5vw, 60px);
        }
        .brands-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          background: #FFFFFF;
          border: 1px solid rgba(17, 25, 102, 0.14);
          border-radius: 30px;
          box-shadow: 0 2px 10px rgba(17, 25, 102, 0.04);
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #111966;
          margin-bottom: 18px;
        }
        .brands-badge-icon {
          color: #EAB308;
        }
        .brands-title {
          font-family: "The Seasons", Georgia, "Times New Roman", serif !important;
          font-size: clamp(32px, 4.2vw, 48px);
          font-weight: 700;
          color: #111966;
          line-height: 1.18;
          letter-spacing: -0.01em;
          margin: 0 0 16px;
        }
        .brands-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 140px;
          margin: 18px auto 20px;
        }
        .brands-ornament-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #EAB308, transparent);
        }
        .brands-ornament-diamond {
          width: 7px;
          height: 7px;
          background: #EAB308;
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        .brands-intro {
          font-family: var(--font-body), "Cardo", Georgia, serif !important;
          font-size: clamp(16px, 1.2vw, 18px);
          line-height: 1.75;
          color: #202938;
          margin: 0;
        }
        /* Marquee Track Container */
        .brands-marquee-outer {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 16px 0;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
        .brands-marquee-track {
          display: flex;
          align-items: center;
          gap: 28px;
          width: max-content;
          animation: brandsMarquee 32s linear infinite;
        }
        .brands-marquee-outer:hover .brands-marquee-track {
          animation-play-state: paused;
        }
        @keyframes brandsMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 14px));
          }
        }
        /* Individual Luxury Brand Logo Card */
        .brand-logo-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid rgba(17, 25, 102, 0.09);
          border-radius: 20px;
          box-shadow: 0 4px 18px -4px rgba(17, 25, 102, 0.05);
          width: 290px;
          height: 130px;
          padding: 14px 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.2, 0.6, 0.3, 1);
        }
        .brand-logo-card:hover {
          transform: none !important;
          border-color: #EAB308;
          box-shadow: 0 8px 24px -4px rgba(234, 179, 8, 0.22);
        }
        .brand-logo-img {
          max-height: 82px;
          max-width: 245px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: contrast(104%);
          transition: all 0.3s ease;
        }
        .brand-logo-card:hover .brand-logo-img {
          filter: contrast(108%);
        }
        /* Mobile adjustment */
        @media (max-width: 768px) {
          .brand-logo-card {
            width: 240px;
            height: 110px;
            padding: 12px 18px;
          }
          .brand-logo-img {
            max-height: 64px;
            max-width: 200px;
          }
          .brands-marquee-track {
            gap: 20px;
            animation-duration: 22s;
          }
        }
      `}</style>

      {/* Decorative ambient background glows */}
      <div className="brands-ambient-glow brands-ambient-glow--top" aria-hidden="true" />

      <div className="brands-container">
        {/* Section Header */}
        <div className="brands-header">
          <div className="brands-badge">
            <Sparkles size={13} className="brands-badge-icon" />
            <span>CLIENT SUCCESS</span>
          </div>

          <h2 className="brands-title">
            Brands We&apos;ve Worked With
          </h2>

          <div className="brands-ornament" aria-hidden="true">
            <span className="brands-ornament-line" />
            <span className="brands-ornament-diamond" />
            <span className="brands-ornament-line" />
          </div>

          <p className="brands-intro">
            Partnering with ambitious ecommerce and retail brands across the UK and internationally
            to command search visibility, build digital authority, and generate measurable revenue.
          </p>
        </div>

        {/* Continuous Moving Logo Slider (Marquee) */}
        <div className="brands-marquee-outer" aria-label="Brands and clients we have worked with">
          <div className="brands-marquee-track">
            {marqueeItems.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="brand-logo-card"
                title={`${brand.name} - ${brand.industry}`}
              >
                <Image
                  src={brand.logoSrc}
                  alt={brand.name}
                  width={300}
                  height={100}
                  className="brand-logo-img"
                  style={{
                    maxHeight: brand.maxHeight ? `${brand.maxHeight}px` : undefined,
                    transform: brand.scale ? `scale(${brand.scale})` : undefined,
                  }}
                  priority={idx < 4}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
