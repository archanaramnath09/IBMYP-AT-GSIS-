import React, { useState } from 'react';
import { LEARNING_JOURNEY_STAGES } from '../data/mypData';
import { CheckCircle2, Compass, ChevronRight, BookOpen, Layers, Award } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const activeStage = LEARNING_JOURNEY_STAGES[activeStageIndex];

  return (
    <section id="journey" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-[#991B1B] uppercase">
            Section 01 · Progressive Continuum
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F224A] tracking-tight">
            The Five-Year MYP Learning Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            At Good Shepherd International School, student growth follows a deliberate developmental continuum across 
            MYP Year 1 to Year 5: moving from building foundational understanding and using guided strategies toward 
            greater independence, intellectual complexity, critical reflection, and real-world transfer of learning.
          </p>
        </div>

        {/* Official IB MYP Continuum & Interim Objectives Information Panel */}
        <div className="mt-6 p-5 rounded-xl bg-blue-50/70 border border-blue-200 shadow-xs">
          <div className="flex items-start gap-3.5">
            <BookOpen className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
              <div className="font-bold text-[#0F224A]">
                The IB Five-Year Continuum & Interim Objectives
              </div>
              <p className="text-slate-600">
                The International Baccalaureate structures the Middle Years Programme as an integrated 
                five-year continuum (MYP Year 1 to Year 5). To scaffold rigorous developmental progression, the IB publishes 
                official <strong>Interim Objectives and Criteria Level Descriptors</strong> for <strong>MYP Year 1 (Grade 6)</strong> and <strong>MYP Year 3 (Grade 8)</strong>, 
                culminating in the final criterion objectives and international eAssessments in <strong>MYP Year 5 (Grade 10)</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Pathway Progression (Interactive Stepper) */}
        <div className="mt-12">
          {/* Desktop/Tablet Horizontal Pathway */}
          <div className="relative">
            {/* Connecting Track Line */}
            <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-slate-200 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 relative z-10">
              {LEARNING_JOURNEY_STAGES.map((stageItem, index) => {
                const isActive = index === activeStageIndex;
                const isKeyObjectiveStage = stageItem.isKeyObjectiveStage;

                return (
                  <button
                    key={stageItem.stage}
                    onClick={() => setActiveStageIndex(index)}
                    className={`relative text-left p-4 rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                      isActive
                        ? 'bg-[#0F224A] text-white border-[#0F224A] shadow-md ring-2 ring-amber-400'
                        : isKeyObjectiveStage
                        ? 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-blue-200'
                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    <div>
                      {/* Top indicator: Objective stage tag or standard step */}
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            isActive
                              ? 'text-amber-300'
                              : isKeyObjectiveStage
                              ? 'text-[#991B1B]'
                              : 'text-slate-400'
                          }`}
                        >
                          {stageItem.year}
                        </span>
                        {isKeyObjectiveStage && (
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              isActive
                                ? 'bg-amber-400/20 text-amber-200 border border-amber-400/40'
                                : 'bg-blue-100 text-blue-900 border border-blue-200'
                            }`}
                          >
                            {stageItem.stage === 'MYP 5' ? 'Final Objectives' : 'Interim Objectives'}
                          </span>
                        )}
                      </div>

                      <div className="text-lg font-extrabold font-display leading-tight">
                        {stageItem.stage}
                      </div>

                      <p
                        className={`text-xs mt-2 leading-snug line-clamp-2 ${
                          isActive ? 'text-slate-200' : 'text-slate-500'
                        }`}
                      >
                        {stageItem.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-200/20 flex items-center justify-between text-xs font-semibold">
                      <span>{isActive ? 'Selected' : 'View details'}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isActive ? 'rotate-90 text-amber-300' : 'text-slate-400'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detailed Breakdown Panel */}
          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 transition-all">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-200">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wide uppercase">
                  <span className="text-[#0F224A]">{activeStage.stage}</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-600">{activeStage.year}</span>
                  {activeStage.stageBadge && (
                    <>
                      <span className="text-slate-400">·</span>
                      <span className="text-[#991B1B] font-bold">{activeStage.stageBadge}</span>
                    </>
                  )}
                </div>
                
                <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0F224A]">
                  {activeStage.theme}
                </h3>
                
                <p className="mt-2 text-sm sm:text-base font-medium text-slate-700 italic">
                  &ldquo;{activeStage.summary}&rdquo;
                </p>
              </div>

              {activeStage.isKeyObjectiveStage ? (
                <div className="bg-blue-100/70 border border-blue-200 rounded-xl p-4 shrink-0 max-w-sm">
                  <div className="flex items-center gap-2 text-blue-950 font-bold text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4 text-blue-800" />
                    <span>
                      {activeStage.stage === 'MYP 5' ? 'IB Final Objectives' : 'IB Interim Objectives'}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                    At {activeStage.stage}, curriculum expectations align with official IB criteria descriptors 
                    to ensure rigorous preparation before progressing to the next stage of learning.
                  </p>
                </div>
              ) : (
                <div className="bg-white border border-slate-200 rounded-xl p-4 shrink-0 max-w-sm">
                  <div className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider">
                    <Compass className="w-4 h-4 text-blue-800" />
                    <span>Skill Consolidation & Depth</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Students expand their conceptual vocabulary and practise applying multi-step processes 
                    with progressive autonomy.
                  </p>
                </div>
              )}
            </div>

            {/* Narrative & Milestones Grid */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Developmental Overview
                </h4>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeStage.narrative}
                </p>

                <div className="mt-6 p-4 rounded-lg bg-white border border-slate-200">
                  <div className="text-xs font-bold text-[#0F224A] uppercase tracking-wider">
                    Core Progression Focus
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-slate-700 font-medium">
                    {activeStageIndex === 0 && 'MYP 1: Build foundations and practise strategies with guidance.'}
                    {activeStageIndex === 1 && 'MYP 2: Expand perspectives and take initiative in guided inquiry.'}
                    {activeStageIndex === 2 && 'MYP 3: Connect learning across subjects and use strategies with increasing independence.'}
                    {activeStageIndex === 3 && 'MYP 4: Deepen disciplinary methodologies in chosen academic streams.'}
                    {activeStageIndex === 4 && 'MYP 5: Apply learning independently in complex or unfamiliar contexts and prepare for the next stage of learning.'}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Key Learning Milestones in {activeStage.stage}
                </h4>
                <div className="mt-3 space-y-3">
                  {activeStage.keyMilestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {milestone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step navigation buttons */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              <button
                disabled={activeStageIndex === 0}
                onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 text-xs sm:text-sm font-medium rounded-md border border-slate-300 text-slate-700 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Previous Stage
              </button>

              <div className="text-xs text-slate-500 font-medium">
                Stage {activeStageIndex + 1} of 5
              </div>

              <button
                disabled={activeStageIndex === LEARNING_JOURNEY_STAGES.length - 1}
                onClick={() =>
                  setActiveStageIndex((prev) =>
                    Math.min(LEARNING_JOURNEY_STAGES.length - 1, prev + 1)
                  )
                }
                className="px-4 py-2 text-xs sm:text-sm font-medium rounded-md bg-[#0F224A] text-white hover:bg-[#1B3A70] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next Stage
              </button>
            </div>
          </div>
        </div>

        {/* Summary Comparison of MYP 1, MYP 3, and MYP 5 Objectives */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
            Progression of Learning Expectations
          </div>
          <h3 className="mt-1 text-xl sm:text-2xl font-bold text-[#0F224A] text-center">
            Expectations Across MYP 1, MYP 3, and MYP 5
          </h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* MYP 1 Objectives */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-900/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#991B1B] uppercase tracking-wider">
                  Year 1 Interim Objectives
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-200/70 text-slate-700">
                  MYP 1 · Grade 6
                </span>
              </div>
              <h4 className="mt-3 text-lg font-bold text-[#0F224A]">
                Foundation with Guidance
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Build foundations and practise strategies with guidance. Students learn to follow structured 
                processes, organize work with reminders, and articulate simple ideas clearly.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 font-medium">
                Guidance Level: Highly structured teacher scaffolding and modelled strategies.
              </div>
            </div>

            {/* MYP 3 Objectives */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-900/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#991B1B] uppercase tracking-wider">
                  Year 3 Interim Objectives
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-200/70 text-slate-700">
                  MYP 3 · Grade 8
                </span>
              </div>
              <h4 className="mt-3 text-lg font-bold text-[#0F224A]">
                Growing Independence
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect learning across subjects and use strategies with increasing independence. Students frame 
                refined questions, compare source materials, and justify decisions.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 font-medium">
                Guidance Level: Guided autonomy with self-directed project milestones.
              </div>
            </div>

            {/* MYP 5 Objectives */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-900/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#991B1B] uppercase tracking-wider">
                  Year 5 Final Objectives
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-200/70 text-slate-700">
                  MYP 5 · Grade 10
                </span>
              </div>
              <h4 className="mt-3 text-lg font-bold text-[#0F224A]">
                Independent Application & Transfer
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Apply learning independently in complex or unfamiliar contexts and prepare for the next stage of learning 
                (senior high school / IB Diploma Programme).
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 font-medium">
                Guidance Level: Full self-regulation, academic rigour, and formal eAssessment readiness.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
