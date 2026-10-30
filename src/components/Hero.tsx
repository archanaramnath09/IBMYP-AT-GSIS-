import React from 'react';
import { Compass, BookOpen, Layers, Award, Sparkles, ChevronDown } from 'lucide-react';
import { GsisCrest } from './GsisCrest';
import { IbMypLogo } from './IbMypLogo';

interface HeroProps {
  onExploreClick: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenContact }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F224A] via-[#162E61] to-[#0D1D40] text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle architectural & topographic grid background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Warm ambient gold aura in corner */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual Brand Identity Banner at top of page / hero */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-sm">
          <div className="flex items-center gap-3">
            <GsisCrest size={48} className="h-12 w-auto shrink-0 drop-shadow-md" />
            <div>
              <div className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                GOOD SHEPHERD INTERNATIONAL SCHOOL
              </div>
              <div className="text-xs text-amber-300 font-semibold tracking-wide flex items-center gap-1.5">
                <span>Ooty, Nilgiris, India</span>
                <span className="text-white/40">·</span>
                <span>Authorized IB World School</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Official Programme
            </span>
            <IbMypLogo height={42} className="h-10 sm:h-11 w-auto drop-shadow-md shrink-0" />
          </div>
        </div>

        {/* Editorial Subheading / Location trust kicker */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-amber-400 mb-3 uppercase">
          <span>The Official IB Middle Years Programme Framework</span>
          <span aria-hidden="true" className="text-amber-500/60">·</span>
          <span>MYP 1 to MYP 5</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight lg:leading-[1.15] text-balance">
            The MYP Learning Journey at GSIS: From Inquiry to Independence
          </h1>
          
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-3xl font-normal">
            A comprehensive, transparent guide for current and prospective families. 
            Discover how students build conceptual foundations in MYP 1–3, transition into specialized 
            MYP 4–5 streams, master Approaches to Learning (ATL) skills, and achieve globally benchmarked 
            IB eAssessments.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={onExploreClick}
            className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-[#0F224A] font-bold text-sm rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400"
          >
            <Compass className="w-4 h-4" />
            <span>Explore MYP 1–5 Pathway</span>
          </button>
          
          <a
            href="#streams"
            className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2 hover:border-white/40 cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            <Layers className="w-4 h-4 text-amber-300" />
            <span>View MYP 4–5 Subject Streams</span>
          </a>

          <button
            onClick={onOpenContact}
            className="px-5 py-3.5 text-slate-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-white rounded"
          >
            <span>Have a Question? Contact MYP Office</span>
          </button>
        </div>

        {/* Key Highlights Bar (Clean unboxed metadata with subtle separators) */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
              8 Groups
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1">
              Broad & balanced foundation across all subject disciplines in MYP 1–3
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-amber-400 tabular-nums">
              2 Streams
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1">
              Specialised Science & Non-Science pathways with rich choices in MYP 4–5
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-rose-300 tabular-nums">
              5-Year Continuum
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1">
              Interim Objectives in Years 1 & 3, culminating in Year 5 Final Objectives
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-sky-300 tabular-nums">
              IB eAssessment
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1">
              International benchmarks via on-screen exams & moderated ePortfolios
            </div>
          </div>
        </div>

      </div>

      {/* Decorative down anchor */}
      <div className="hidden sm:flex justify-center mt-10">
        <a
          href="#journey"
          className="text-white/60 hover:text-white transition-colors p-2 rounded-full focus-visible:outline-2 focus-visible:outline-white"
          aria-label="Scroll down to learning journey section"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
