import React, { useState } from 'react';
import { FAQS } from '../data/mypData';
import { ChevronDown, Search, HelpCircle, BookOpen } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-[#991B1B] uppercase">
            Section 06 · Family Guidance
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F224A] tracking-tight">
            Frequently Asked Questions for Parents & Students
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Essential answers to the most common questions regarding MYP subjects, stream allocations, 
            eAssessment criteria, and learning progression.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 max-w-md mx-auto relative">
          <label htmlFor="faq-search" className="sr-only">
            Search FAQ questions
          </label>
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="faq-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., Mathematics, Streams, Objectives)..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F224A] focus:border-[#0F224A] shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded"
            >
              Clear
            </button>
          )}
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-200 bg-white overflow-hidden ${
                    isOpen
                      ? 'border-[#0F224A]/40 shadow-sm ring-1 ring-[#0F224A]/10'
                      : 'border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left py-4 px-5 sm:px-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0F224A]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-[#0F224A]">
                      {faq.question}
                    </span>
                    <span
                      className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 bg-slate-100 text-[#0F224A]' : 'text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">
                No matching questions found
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for a different keyword or browse through the guide sections.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-2 text-xs font-semibold bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
