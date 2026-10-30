import React from 'react';
import { GsisCrest } from './GsisCrest';
import { IbMypLogo } from './IbMypLogo';
import { ExternalLink, Heart, Shield, Award } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-[#0A1630] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* School Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <GsisCrest size={40} className="h-10 w-10 shrink-0" />
              <div className="h-8 w-px bg-slate-700" />
              <IbMypLogo height={32} />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight block">
                Good Shepherd International School
              </span>
              <span className="text-xs text-amber-400 font-medium tracking-wide">
                Ooty · Nilgiris · Tamil Nadu, India · IB World School
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              An authorized IB World School offering the Middle Years Programme (MYP 1–5), 
              nurturing compassionate, intellectually inquisitive, and globally minded young leaders 
              amidst the Nilgiri hills.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-200">Campus: </span>
              Good Shepherd Knowledge Village, Palada P.O., Ootacamund (Ooty), The Nilgiris, India.
            </div>
          </div>

          {/* Quick Nav 1: Curriculum */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              MYP Programme
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#framework" className="hover:text-amber-400 transition-colors">
                  Curriculum Framework
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-amber-400 transition-colors">
                  Learning Journey (1–5)
                </a>
              </li>
              <li>
                <a href="#subject-groups" className="hover:text-amber-400 transition-colors">
                  MYP 1–3 Subject Groups
                </a>
              </li>
              <li>
                <a href="#streams" className="hover:text-amber-400 transition-colors">
                  MYP 4–5 Subject Streams
                </a>
              </li>
              <li>
                <a href="#eassessment" className="hover:text-amber-400 transition-colors">
                  IB eAssessment Guide
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-amber-400 transition-colors">
                  ATL Skills & Matrix
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Nav 2: Pathways */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Streams & Progression
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#streams" className="hover:text-amber-400 transition-colors">
                  Science Stream
                </a>
              </li>
              <li>
                <a href="#streams" className="hover:text-amber-400 transition-colors">
                  Non-Science Stream
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-amber-400 transition-colors">
                  Interim & Final Objectives (Years 1, 3, 5)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Parent & Student FAQ
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Contact MYP Office
                </button>
              </li>
            </ul>
          </div>

          {/* External IB References */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Official IB Links
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="https://www.ibo.org/programmes/middle-years-programme/curriculum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>IB MYP Curriculum</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ibo.org/programmes/middle-years-programme/assessment-and-exams/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>IB MYP Assessments</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ibo.org/programmes/middle-years-programme/assessment-and-exams/understanding-eassessment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>eAssessment Details</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Academic Disclosure & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-slate-400">Curriculum Framework Disclosure: </strong>
            The Middle Years Programme (MYP) is a curriculum framework developed by the International Baccalaureate Organization (IBO). 
            This website presents the specific implementation, subject streams, and learning continuum of 
            Good Shepherd International School (GSIS), Ooty, delivering the complete MYP Year 1 to Year 5 curriculum with official 
            IB interim and final assessment criteria descriptors and external eAssessments.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div>
              © {new Date().getFullYear()} Good Shepherd International School, Ooty. All rights reserved.
            </div>
            <div className="text-slate-400 flex items-center gap-2">
              <span>IB World School</span>
              <span aria-hidden="true">·</span>
              <span>Committed to Educational Excellence</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
