import React from 'react';
import { OFFICIAL_IB_SOURCES } from '../data/mypData';
import { ExternalLink, BookCheck, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

export const SourcesAndTerminology: React.FC = () => {
  const glossary = [
    {
      term: 'IB MYP (Middle Years Programme)',
      definition: 'A curriculum framework designed by the International Baccalaureate for students aged 11–16, focusing on intellectual challenge and practical real-world connections.'
    },
    {
      term: 'Approaches to Learning (ATL)',
      definition: 'Five core skill clusters (Communication, Social, Self-management, Research, Thinking) intentionally taught across disciplines to foster self-regulated, lifelong learners.'
    },
    {
      term: 'eAssessment',
      definition: 'The official IB digital assessment model for MYP 5 students, incorporating on-screen examinations and externally moderated ePortfolios benchmarked internationally.'
    },
    {
      term: 'ePortfolio',
      definition: 'A digital collection of authentic, process-driven coursework created over MYP 4–5 in Arts or Design, assessed by GSIS teachers and externally moderated by the IB.'
    },
    {
      term: 'External Moderation',
      definition: 'A quality-assurance process where the International Baccalaureate reviews a sample of school-marked student work to ensure global marking standards.'
    },
    {
      term: 'School-Assessed Courses',
      definition: 'Internal GSIS academic courses (such as Economics and Business Management in the Non-Science stream) that provide intensive two-year rigor without external IB on-screen exams.'
    },
    {
      term: 'IB Interim Objectives (Years 1 & 3)',
      definition: 'Published International Baccalaureate criteria level descriptors for MYP Year 1 and Year 3, scaffolding age-appropriate inquiry, analysis, and transfer skills leading into Year 5.'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-wider text-slate-500 uppercase">
            Accuracy & Academic Integrity
          </div>
          <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-[#0F224A] tracking-tight">
            Sources, References & Key Terminology
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            This guide distinguishes between broad, universal International Baccalaureate (IB) framework 
            guidelines and Good Shepherd International School (GSIS) internal curriculum allocations.
          </p>
        </div>

        {/* Official IB Links Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {OFFICIAL_IB_SOURCES.map((source, idx) => (
            <a
              key={idx}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-100/90 hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-blue-900 mb-1.5">
                  <span className="uppercase tracking-wide">Official IB Reference</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-900 transition-colors" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-900 transition-colors">
                  {source.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {source.description}
                </p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-slate-400 truncate">
                {source.url.replace('https://', '')}
              </div>
            </a>
          ))}
        </div>

        {/* Terminology Glossary */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
            Curriculum Glossary
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {glossary.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-lg border border-slate-200 bg-white">
                <div className="font-bold text-xs sm:text-sm text-[#0F224A]">
                  {item.term}
                </div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
