import React, { useState } from 'react';
import { SUBJECT_GROUPS, SubjectGroup } from '../data/mypData';
import { 
  BookOpen, 
  Languages, 
  Globe2, 
  FlaskConical, 
  Calculator, 
  Palette, 
  Activity, 
  Cpu, 
  Info, 
  Check, 
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  'lang-lit': <BookOpen className="w-6 h-6 text-blue-900" />,
  'lang-acq': <Languages className="w-6 h-6 text-amber-700" />,
  'ind-soc': <Globe2 className="w-6 h-6 text-emerald-800" />,
  'sciences': <FlaskConical className="w-6 h-6 text-cyan-800" />,
  'mathematics': <Calculator className="w-6 h-6 text-indigo-900" />,
  'arts': <Palette className="w-6 h-6 text-rose-800" />,
  'phe': <Activity className="w-6 h-6 text-teal-800" />,
  'design': <Cpu className="w-6 h-6 text-amber-800" />
};

export const SubjectGroups: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<SubjectGroup | null>(null);

  return (
    <section id="subject-groups" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-[#991B1B] uppercase">
            Section 02 · Broad & Balanced Curriculum
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F224A] tracking-tight">
            MYP 1–3: The Eight Subject Groups
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In MYP 1, 2, and 3, all students at Good Shepherd International School experience a 
            broad and balanced programme encompassing all eight IB subject groups. This balanced foundation 
            ensures holistic intellectual, physical, and creative development before stream choices begin in MYP 4.
          </p>
        </div>

        {/* Framework Statement Card */}
        <div className="mt-6 p-4 sm:p-5 rounded-lg bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
          <Info className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="font-semibold text-slate-900">IB Framework Architecture: </strong>
            The titles below represent the official International Baccalaureate Middle Years Programme subject 
            group framework. In MYP 1–3, students engage with all eight disciplines simultaneously without 
            premature specialization, cultivating multidisciplinary perspective and well-rounded inquiry habits.
          </div>
        </div>

        {/* 8 Subject Group Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUBJECT_GROUPS.map((group) => {
            return (
              <div
                key={group.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0F224A]/50 hover:shadow-md transition-all group"
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-slate-100 group-hover:bg-slate-200/80 transition-colors">
                      {ICON_MAP[group.id]}
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono tabular-nums">
                      Group 0{group.categoryNumber}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F224A] group-hover:text-blue-900 transition-colors">
                    {group.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {group.description}
                  </p>

                  {/* Key Concepts Preview */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Key Concepts Explored
                    </div>
                    <div className="text-xs text-slate-700 font-medium">
                      {group.keyConcepts.join(' · ')}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedGroup(group)}
                    className="text-xs font-semibold text-[#0F224A] hover:text-[#991B1B] flex items-center gap-1 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0F224A] rounded"
                  >
                    <span>View inquiry aims</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-400">All MYP 1–3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Modal / Drawer when a card aim is clicked */}
        {selectedGroup && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="group-modal-title"
          >
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    {ICON_MAP[selectedGroup.id]}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Subject Group 0{selectedGroup.categoryNumber}
                    </span>
                    <h3 id="group-modal-title" className="text-xl font-bold text-[#0F224A]">
                      {selectedGroup.name}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedGroup(null)}
                  className="text-slate-400 hover:text-slate-700 p-1.5 rounded-md hover:bg-slate-100 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-slate-900"
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              <div className="mt-5 space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Core Description
                  </div>
                  <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                    {selectedGroup.description}
                  </p>
                </div>

                {selectedGroup.disciplines && selectedGroup.disciplines.length > 0 && (
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Subject Disciplines / Courses at GSIS
                    </div>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {selectedGroup.disciplines.map((d, i) => (
                        <span key={i} className="px-2.5 py-0.5 text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200 rounded-md">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* The 4 Assessment Criteria (A-D, 25% each) */}
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                    <span>The Four Assessment Criteria (Levels 1–8)</span>
                    <span className="text-[11px] font-semibold text-blue-900">4 Criteria · 25% Each</span>
                  </div>
                  <div className="mt-2 space-y-2">
                    {selectedGroup.criteria.map((c) => (
                      <div key={c.letter} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                        <div className="flex items-center justify-between font-bold text-slate-900">
                          <span className="text-[#0F224A]">Criterion {c.letter}: {c.name}</span>
                          <span className="text-amber-700 font-mono">{c.weight}</span>
                        </div>
                        <p className="mt-1 text-slate-600 leading-relaxed">{c.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* eAssessment Details from Infographics */}
                <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs space-y-1.5">
                  <div className="font-bold text-indigo-950 flex items-center justify-between">
                    <span>Year 5 eAssessment Specification</span>
                    <span className="px-2 py-0.5 bg-indigo-700 text-white text-[10px] rounded font-semibold">
                      {selectedGroup.eAssessmentDetails.formatType}
                    </span>
                  </div>
                  {selectedGroup.eAssessmentDetails.duration && (
                    <div className="text-indigo-900 font-medium">
                      ⏱ {selectedGroup.eAssessmentDetails.duration} {selectedGroup.eAssessmentDetails.totalMarks && `· ${selectedGroup.eAssessmentDetails.totalMarks}`}
                    </div>
                  )}
                  {selectedGroup.eAssessmentDetails.taskBreakdown && (
                    <ul className="mt-1 space-y-1 text-slate-700 pl-3 list-disc">
                      {selectedGroup.eAssessmentDetails.taskBreakdown.map((t, idx) => (
                        <li key={idx}>{t}</li>
                      ))}
                    </ul>
                  )}
                  <div className="text-slate-600 pt-1 text-[11px] border-t border-indigo-200/60">
                    <strong>Quality Assurance: </strong>{selectedGroup.eAssessmentDetails.moderationDetails}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Key Disciplinary Concepts
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-2 text-xs text-slate-800 font-medium">
                    {selectedGroup.keyConcepts.map((concept, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Official IB Group Aims
                  </div>
                  <p className="mt-1 text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                    {selectedGroup.aims}
                  </p>
                </div>

                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{selectedGroup.learningTime}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setSelectedGroup(null)}
                  className="px-4 py-2 text-sm font-semibold text-white bg-[#0F224A] hover:bg-[#1B3A70] rounded-md transition-colors"
                >
                  Close Group Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* HOW STUDENTS ARE ASSESSED IN MYP 1–3 (OFFICIAL IB CRITERION-RELATED ASSESSMENT) */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#991B1B] uppercase tracking-wider">
              IB Assessment Architecture
            </span>
            <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0F224A] tracking-tight">
              How Students Are Assessed in MYP 1–3
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Assessment in the IB Middle Years Programme is strictly <strong>criterion-related</strong>. 
              Students are evaluated against published, international standards and level descriptors established by the IB, 
              never graded on a bell curve or ranked competitively against their peers.
            </p>
          </div>

          {/* 4 Pillars of MYP 1–3 Assessment */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-5">
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 font-bold flex items-center justify-center text-sm mb-3 font-mono">
                A–D
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Four Assessment Criteria
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                Every subject group uses exactly four criteria (Criterion A, B, C, and D) measuring discipline-specific objectives.
              </p>
              <div className="mt-3 text-[11px] font-semibold text-slate-500">
                Equal weighting across all four
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-900 font-bold flex items-center justify-center text-sm mb-3 font-mono">
                0–8
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Achievement Levels (0–8)
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                Each criterion is scored on a scale from 0 to 8 using the IB&apos;s published interim descriptors for Year 1 and Year 3.
              </p>
              <div className="mt-3 text-[11px] font-semibold text-slate-500">
                Max 32 total points (8 × 4)
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-900 font-bold flex items-center justify-center text-sm mb-3 font-mono">
                1–7
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Final IB Grade (1–7)
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                At reporting periods, the cumulative score out of 32 is translated into an official IB grade from 1 (lowest) to 7 (highest).
              </p>
              <div className="mt-3 text-[11px] font-semibold text-slate-500">
                Standard IB grade boundaries
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-900 font-bold flex items-center justify-center text-sm mb-3 font-mono">
                Fit
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                The &ldquo;Best-Fit&rdquo; Approach
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                Teachers look at student work across various tasks over a unit, applying professional judgment rather than raw mathematical averaging.
              </p>
              <div className="mt-3 text-[11px] font-semibold text-slate-500">
                Holistic performance review
              </div>
            </div>

          </div>

          {/* Formative vs Summative Comparison Row */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-100/70 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                  Continuous Feedback
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                  Learning for Mastery
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                Formative Assessment in MYP 1–3
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ongoing diagnostic tasks, lab drafts, rough sketches, peer discussions, and self-checks that give constructive qualitative feedback. 
                These do not calculate into the final report card grade, giving students room to experiment and learn from mistakes without penalty.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-100/70 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#991B1B] uppercase tracking-wider">
                  Evaluative Milestones
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-semibold">
                  Criterion Evidence
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                Summative Assessment in MYP 1–3
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Culminating unit tasks (essays, scientific investigations, design prototypes, oral presentations, or tests) 
                where students demonstrate mastery against the four criteria. The teacher awards achievement levels (0–8) based on demonstrated evidence.
              </p>
            </div>
          </div>

          {/* Sample Criteria Table Across Different Subject Groups */}
          <div className="mt-8 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-4 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
              Example Subject-Group Assessment Criteria (Official IB Structure)
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 font-bold text-slate-800">
                    <th className="p-3.5">Subject Group</th>
                    <th className="p-3.5 border-l border-slate-200">Criterion A (Max 8)</th>
                    <th className="p-3.5 border-l border-slate-200">Criterion B (Max 8)</th>
                    <th className="p-3.5 border-l border-slate-200">Criterion C (Max 8)</th>
                    <th className="p-3.5 border-l border-slate-200">Criterion D (Max 8)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-[#0F224A]">Sciences</td>
                    <td className="p-3.5 border-l border-slate-200">Knowing and understanding</td>
                    <td className="p-3.5 border-l border-slate-200">Inquiring and designing</td>
                    <td className="p-3.5 border-l border-slate-200">Processing and evaluating</td>
                    <td className="p-3.5 border-l border-slate-200">Reflecting on the impacts of science</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-[#0F224A]">Mathematics</td>
                    <td className="p-3.5 border-l border-slate-200">Knowing and understanding</td>
                    <td className="p-3.5 border-l border-slate-200">Investigating patterns</td>
                    <td className="p-3.5 border-l border-slate-200">Communicating</td>
                    <td className="p-3.5 border-l border-slate-200">Applying mathematics in real-life contexts</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-[#0F224A]">Language & Literature</td>
                    <td className="p-3.5 border-l border-slate-200">Analysing</td>
                    <td className="p-3.5 border-l border-slate-200">Organizing</td>
                    <td className="p-3.5 border-l border-slate-200">Producing text</td>
                    <td className="p-3.5 border-l border-slate-200">Using language</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-[#0F224A]">Design</td>
                    <td className="p-3.5 border-l border-slate-200">Inquiring and analysing</td>
                    <td className="p-3.5 border-l border-slate-200">Developing ideas</td>
                    <td className="p-3.5 border-l border-slate-200">Creating the solution</td>
                    <td className="p-3.5 border-l border-slate-200">Evaluating</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500">
              Each criterion evaluates student achievement levels from 0 to 8 using published IB descriptors. The 4 scores sum to a total out of 32 points.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
