import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Award,
} from 'lucide-react';

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F5F5F5] to-[#F5F5F5] pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#E3E5EF]"
      suppressHydrationWarning
    >
      {/* Decorative subtle ambient glows */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[380px] bg-gradient-to-b from-[#F6EFE4]/50 via-transparent to-transparent blur-3xl"
        suppressHydrationWarning
      />
      <div
        className="pointer-events-none absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full bg-amber-200/20 blur-3xl"
        suppressHydrationWarning
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-20 w-[350px] h-[350px] rounded-full bg-[#111966]/5 blur-3xl"
        suppressHydrationWarning
      />

      <div className="relative mx-auto max-w-[1440px] px-[clamp(16px,3vw,40px)]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* 1. EYEBROW BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#111966]/15 bg-white px-4 py-1.5 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#111966]">
              UK DIGITAL MARKETING AGENCY
              </span>
              <span className="hidden sm:inline text-neutral-300">|</span>
              <span className="hidden sm:inline text-[11px] font-medium text-[#4D527F]">
                UK & Global Growth
              </span>
            </div>

            {/* 2. MAIN HEADLINE */}
            <h1 className="mt-6 font-heading font-normal text-[36px] sm:text-[50px] lg:text-[56px] leading-[1.1] tracking-tight text-[#111966]">
              Grow Your Business With Digital Marketing That{' '}
              <span className="relative inline-block font-bold italic text-[#111966]">
                Delivers Results
                <svg
                  className="absolute -bottom-2 left-0 w-full text-amber-400"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 9.5C65.5 2.5 185.5 2.5 297.5 9.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* 3. PARAGRAPH DESCRIPTION */}
            <p className="mt-6 max-w-2xl font-body text-[17px] sm:text-[19px] leading-relaxed text-[#4D527F]">
              We help ambitious businesses grow with data-driven digital marketing strategies,
              high-converting websites, SEO, and paid advertising. From building brand awareness
              to generating quality leads and increasing sales, we deliver tailored solutions
              designed to turn your business goals into measurable growth.
            </p>

            {/* 4. CALL TO ACTION BUTTONS (With guaranteed white text) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-primary min-h-[48px] px-8 py-3.5 text-[16px] font-medium shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                style={{ backgroundColor: '#111966', color: '#ffffff' }}
              >
                <span style={{ color: '#ffffff' }}>Get Free Growth Proposal</span>
                <ArrowRight className="h-4 w-4 text-white" style={{ color: '#ffffff' }} />
              </Link>

              <Link
                href="#services"
                className="btn-secondary min-h-[48px] px-7 py-3.5 text-[16px] font-medium shadow-xs transition-all duration-200"
                style={{ backgroundColor: '#ffffff', color: '#111966' }}
              >
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span>Explore Solutions</span>
              </Link>
            </div>

            {/* 5. TRUST BADGES & METRICS */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#E3E5EF] pt-6 w-full max-w-xl">
              <div>
                <div className="mt-1 font-heading text-lg font-bold text-[#111966]">
                  UK-based
                </div>
                <div className="text-xs text-[#4D527F]">Digital agency</div>
              </div>

              <div className="border-l border-[#E3E5EF] pl-4">
                <div className="font-heading text-lg font-bold text-[#111966]">
                  SEO &amp; web
                </div>
                <div className="text-xs text-[#4D527F]">Services in one place</div>
              </div>

              <div className="border-l border-[#E3E5EF] pl-4">
                <div className="font-heading text-lg font-bold text-[#111966]">
                  Clear scope
                </div>
                <div className="text-xs text-[#4D527F]">Goals, milestones, reporting</div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: HERO GRAPHIC ================= */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient card glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#111966]/8 to-amber-300/20 rounded-3xl blur-2xl transform scale-95" />

            {/* Main Hero Graphic Card */}
            <div className="relative w-full max-w-md rounded-2xl border border-[#E3E5EF] bg-white p-3 sm:p-4 shadow-2xl shadow-[#111966]/10 transition-transform duration-300 hover:-translate-y-1">
              <div className="overflow-hidden rounded-xl border border-[#E3E5EF] bg-[#FAFBFD]">
                <Image
                  src="/images/hero/digital-marketing-101.png"
                  alt="ITBS Digital Marketing 101"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Bottom Quick Feature Strip */}
              <div className="mt-3 flex items-center justify-between px-2 pt-1 text-xs text-[#111966] font-semibold">
                <span className="flex items-center gap-1.5 text-[#111966]">
                  <Sparkles className="h-3.5 w-3.5 text-[#EAB308]" />
                  Verified Digital Growth
                </span>
                <span className="text-[#EAB308] font-bold">Tailored scope</span>
              </div>
            </div>

            {/* Floating Glass Badge 1: Search visibility */}
            <div className="absolute -top-4 -left-4 sm:-left-6 hidden sm:flex items-center gap-2 rounded-xl border border-[#E3E5EF] bg-white px-3.5 py-2 shadow-lg z-10">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400 text-[#111966]">
                <Award className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#111966]">Search visibility</div>
                <div className="text-[10px] text-[#4D527F]">Evidence-led strategy</div>
              </div>
            </div>

            {/* Floating Glass Badge 2: Client Retention */}
            <div className="absolute -bottom-4 -right-3 sm:-right-4 hidden sm:flex items-center gap-2 rounded-xl border border-[#E3E5EF] bg-white px-3.5 py-2 shadow-lg z-10">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#111966] text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#111966]">Clear project milestones</div>
                <div className="text-[10px] text-[#4D527F]">Progress you can review</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
