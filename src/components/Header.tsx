import React, { useState } from 'react';
import { GsisCrest } from './GsisCrest';
import { IbMypLogo } from './IbMypLogo';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          
          {/* Zone 1: Brand Dual Wordmark & Logos */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#"
              className="flex items-center gap-2 group whitespace-nowrap focus-visible:outline-2 focus-visible:outline-blue-900 rounded"
              title="Good Shepherd International School, Ooty"
            >
              <GsisCrest className="h-11 w-11 shrink-0 drop-shadow-xs transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-[#0F224A] leading-tight group-hover:text-blue-900">
                  Good Shepherd International School
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-slate-500 tracking-wide">
                  Ooty · IB World School
                </span>
              </div>
            </a>
            <div className="h-7 w-px bg-slate-200 mx-0.5 sm:mx-1" />
            <div className="flex items-center shrink-0">
              <IbMypLogo height={36} className="h-9 w-auto" />
            </div>
          </div>

          {/* Zone 2: Concise Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-700">
            <a
              href="#framework"
              className="hover:text-[#0F224A] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-500 decoration-2 underline-offset-8"
            >
              Curriculum Framework
            </a>
            <a
              href="#journey"
              className="hover:text-[#0F224A] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-500 decoration-2 underline-offset-8"
            >
              MYP Journey
            </a>
            <a
              href="#subject-groups"
              className="hover:text-[#0F224A] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-500 decoration-2 underline-offset-8"
            >
              MYP 1–3 Subjects
            </a>
            <a
              href="#streams"
              className="hover:text-[#0F224A] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-500 decoration-2 underline-offset-8"
            >
              MYP 4–5 Streams
            </a>
            <a
              href="#eassessment"
              className="hover:text-[#0F224A] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-500 decoration-2 underline-offset-8"
            >
              eAssessment
            </a>
            <a
              href="#skills"
              className="hover:text-[#0F224A] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-500 decoration-2 underline-offset-8"
            >
              ATL Skills
            </a>
            <a
              href="#faq"
              className="hover:text-[#0F224A] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-500 decoration-2 underline-offset-8"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: Actions (Single-line controls) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:+914232550371"
              className="text-xs font-semibold text-slate-600 hover:text-[#0F224A] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>+91 423 2550 371</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenContact}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0F224A] hover:bg-[#1B3A70] active:scale-[0.98] rounded-md transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#0F224A] cursor-pointer"
            >
              <span>Contact Office</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenContact}
              className="p-2 text-[#0F224A] bg-slate-100 hover:bg-slate-200 rounded-md sm:hidden text-xs font-semibold flex items-center gap-1 cursor-pointer"
              aria-label="Contact Office"
            >
              <Mail className="w-4 h-4 text-amber-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0F224A] hover:bg-slate-100 rounded-md focus-visible:outline-2 focus-visible:outline-[#0F224A] cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#framework"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-[#0F224A]"
            >
              IB MYP Curriculum Framework
            </a>
            <a
              href="#journey"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-[#0F224A]"
            >
              MYP Learning Journey (1–5)
            </a>
            <a
              href="#subject-groups"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-[#0F224A]"
            >
              MYP 1–3: Eight Subject Groups
            </a>
            <a
              href="#streams"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-[#0F224A]"
            >
              MYP 4–5: Subject Streams & Choices
            </a>
            <a
              href="#eassessment"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-[#0F224A]"
            >
              Understanding MYP eAssessment
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-[#0F224A]"
            >
              ATL Skills & Progression Matrix
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-[#0F224A]"
            >
              Parent & Student FAQ
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-[#0F224A] rounded-md shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact the GSIS MYP Office</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
