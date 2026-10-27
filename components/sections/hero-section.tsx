import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Sparkles,
  MapPin,
  LayoutDashboard,
  ListChecks,
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
            <div className="inline-flex items-center gap-3 rounded-full border border-[#111966]/15 bg-white px-5 py-2.5 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#EAB308]" />
              <span className="text-[13px] sm:text-sm font-semibold tracking-[0.12em] uppercase text-[#111966]">
              UK DIGITAL MARKETING AGENCY
              </span>
            </div>

            {/* 2. MAIN HEADLINE */}
            <h1 className="mt-6 font-heading font-normal text-[38px] sm:text-[54px] lg:text-[60px] leading-[1.06] tracking-tight text-[#111966]">
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
            <p className="mt-6 max-w-2xl font-body text-[17px] sm:text-[19px] leading-relaxed text-[#202938]">
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
            <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="group flex min-h-[70px] items-center gap-3 rounded-full border border-[#111966]/10 bg-white/80 px-4 py-3 shadow-[0_8px_22px_rgba(17,25,102,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E8E2A0] hover:bg-[#FFF9AE]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#111966]/[0.08] bg-[#F5F5F5] text-[#111966] transition-colors duration-300 group-hover:bg-white">
                  <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-heading text-[15px] font-bold leading-tight text-[#111966]">UK-based</span>
                  <span className="mt-1 block text-[11px] leading-tight text-[#202938]">Digital agency</span>
                </span>
              </div>

              <div className="group flex min-h-[70px] items-center gap-3 rounded-full border border-[#111966]/10 bg-white/80 px-4 py-3 shadow-[0_8px_22px_rgba(17,25,102,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E8E2A0] hover:bg-[#FFF9AE]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#111966]/[0.08] bg-[#F5F5F5] text-[#111966] transition-colors duration-300 group-hover:bg-white">
                  <LayoutDashboard size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-heading text-[15px] font-bold leading-tight text-[#111966]">SEO &amp; web</span>
                  <span className="mt-1 block text-[11px] leading-tight text-[#202938]">Services in one place</span>
                </span>
              </div>

              <div className="group flex min-h-[70px] items-center gap-3 rounded-full border border-[#111966]/10 bg-white/80 px-4 py-3 shadow-[0_8px_22px_rgba(17,25,102,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E8E2A0] hover:bg-[#FFF9AE]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#111966]/[0.08] bg-[#F5F5F5] text-[#111966] transition-colors duration-300 group-hover:bg-white">
                  <ListChecks size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-heading text-[15px] font-bold leading-tight text-[#111966]">Clear scope</span>
                  <span className="mt-1 block text-[11px] leading-tight text-[#202938]">Goals, milestones, reporting</span>
                </span>
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


            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
