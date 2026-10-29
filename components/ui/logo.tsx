'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link
      href="/"
      className={`brand inline-flex items-center text-decoration-none transition-opacity hover:opacity-85 ${className}`}
      aria-label="Infotec Business Solutions, home"
    >
      <Image
        src="/images/itbs-logo.png"
        alt="Infotec Business Solutions"
        width={125}
        height={24}
        style={{ width: '125px', height: 'auto' }}
        priority
        className="h-6 w-auto max-h-[25px] object-contain select-none"
      />
    </Link>
  );
}
