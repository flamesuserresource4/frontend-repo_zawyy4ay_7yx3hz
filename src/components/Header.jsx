import React from 'react';
import { Menu } from 'lucide-react';

const LogoBlock = ({ letter }) => (
  <div className="h-8 w-8 flex items-center justify-center bg-[#434545] text-[#CCFF00] font-semibold tracking-wider select-none">
    {letter}
  </div>
);

const CTAButton = ({ className = '', children = 'Book a Call', ...props }) => (
  <a
    href="#book"
    className={`inline-flex items-center justify-center px-5 py-2.5 bg-[#CCFF00] text-[#434545] font-medium rounded-full shadow-[0_8px_24px_rgba(204,255,0,0.35)] hover:brightness-95 transition ${className}`}
    {...props}
  >
    {children}
  </a>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Left: Logo on desktop, centered on mobile via absolute centering wrapper */}
          <div className="flex-1 flex items-center gap-1 sm:gap-1.5">
            <a href="/" className="flex items-center gap-1 sm:gap-1.5" aria-label="PBL Home">
              <LogoBlock letter="P" />
              <LogoBlock letter="B" />
              <LogoBlock letter="L" />
            </a>
          </div>

          {/* Centered logo for mobile overlay */}
          <div className="absolute left-1/2 -translate-x-1/2 sm:hidden pointer-events-none">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <LogoBlock letter="P" />
              <LogoBlock letter="B" />
              <LogoBlock letter="L" />
            </div>
          </div>

          {/* Right: Nav + CTA */}
          <nav className="flex-1 flex items-center justify-end gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
              <a href="/#how" className="hover:text-neutral-900 transition">How It Works</a>
              <a href="/#pricing" className="hover:text-neutral-900 transition">Pricing</a>
              <a href="/#results" className="hover:text-neutral-900 transition">Results</a>
            </div>
            <div className="hidden sm:block">
              <CTAButton />
            </div>
            <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-200 text-neutral-700">
              <Menu size={18} />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { CTAButton };