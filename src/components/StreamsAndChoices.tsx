import React, { useState } from 'react';
import { 
  SHARED_CORE_SUBJECTS, 
  SCIENCE_STREAM_SUBJECTS, 
  NON_SCIENCE_STREAM_SUBJECTS, 
  ADDITIONAL_COMPONENTS,
  StreamSubject
} from '../data/mypData';
import { 
  Check, 
  AlertCircle, 
  Layers, 
  GraduationCap, 
  Sparkles, 
  Sliders, 
  FileCheck, 
  HelpCircle,
  Award,
  BookOpen,
  Compass,
  CheckCircle2
} from 'lucide-react';

export const StreamsAndChoices: React.FC = () => {
  // Interactive Curriculum Stream Preview State for Families
  const [selectedStream, setSelectedStream] = useState<'science' | 'non-science'>('science');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('French');
  const [selectedPortfolio, setSelectedPortfolio] = useState<string>('Visual Arts');
  const [selectedNonScienceElective, setSelectedNonScienceElective] = useState<'Economics' | 'Business Management'>('Economics');

  // Assessment badge helper for visual consistency
  const renderAssessmentBadge = (type: StreamSubject['assessmentType']) => {
    if (type === 'eAssessment') {
      return (
        <span className="inline-flex items-center text-[11px] font-bold text-sky-900 bg-sky-100 border border-sky-300 px-2 py-0.5 rounded tracking-wide">
          eAssessment
        </span>
      );
    }
    if (type === 'School-assessed course') {
      return (
        <span className="inline-flex items-center text-[11px] font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded tracking-wide">
          School-assessed course
        </span>
      );
    }
    return (
      <span className="inline-flex items-center text-[11px] font-bold text-purple-900 bg-purple-100 border border-purple-300 px-2 py-0.5 rounded tracking-wide">
        Internally assessed & externally moderated
      </span>
    );
  };

  return (
    <section id="streams" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-[#991B1B] uppercase">
            Section 03 · Senior MYP Architecture
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F224A] tracking-tight">
            MYP 4–5: Subject Streams and Choices
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            As students advance into MYP 4 and MYP 5, the curriculum introduces intentional academic specialization. 
            All students undertake a rigorous shared core alongside either the Science Stream or Non-Science Stream, 
            complemented by chosen ePortfolio and independent project components.
          </p>
        </div>

        {/* Legend for Assessment Modalities */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="font-semibold text-slate-800">
            Assessment Status Guide:
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-sky-900 bg-sky-100 border border-sky-300 px-2 py-0.5 rounded">
                eAssessment
              </span>
              <span className="text-slate-600">Official IB online on-screen exam</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-purple-900 bg-purple-100 border border-purple-300 px-2 py-0.5 rounded">
                Internally assessed & externally moderated
              </span>
              <span className="text-slate-600">GSIS evaluated, IB moderated</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded">
                School-assessed course
              </span>
              <span className="text-slate-600">GSIS internal academic evaluation</span>
            </div>
          </div>
        </div>

        {/* PART A: SHARED CORE SUBJECTS (ALL STUDENTS STUDY) */}
        <div className="mt-12">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-[#0F224A] uppercase tracking-wider">
                Common Foundation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F224A]">
                1. Shared Core Subjects (All Students Study)
              </h3>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-900 rounded-md border border-blue-200">
              Universal Across Both Streams
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* English Language and Literature */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900 text-base">
                    English Language and Literature
                  </h4>
                  {renderAssessmentBadge('eAssessment')}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Required for all students. Rigorous textual analysis, critical literature review, and 
                  analytical writing assessed via official IB on-screen eAssessment.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-medium text-slate-500">
                Requirement: Mandatory for all MYP 4–5 students
              </div>
            </div>

            {/* Language Acquisition Choice */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900 text-base">
                    Language Acquisition
                  </h4>
                  {renderAssessmentBadge('eAssessment')}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Family Choice: Students choose one language from <strong className="text-slate-900">Hindi, French, Spanish, or German</strong>.
                </p>
                <div className="mt-2 text-xs text-slate-500 bg-white p-2.5 rounded border border-slate-200">
                  <span className="font-semibold text-slate-700">Speaking Assessment Note: </span>
                  The speaking component is internally assessed by GSIS teachers and externally moderated by the IB.
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-medium text-slate-500">
                Options: Hindi · French · Spanish · German (Choose One)
              </div>
            </div>

            {/* Mathematics with Aptitude placement note */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900 text-base">
                    Mathematics (Standard & Extended)
                  </h4>
                  {renderAssessmentBadge('eAssessment')}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Both Standard and Extended levels are offered. Assessed via official IB on-screen eAssessment.
                </p>
                <div className="mt-3 p-2.5 bg-amber-50/90 rounded border border-amber-200/90 text-xs text-amber-950">
                  <span className="font-bold text-amber-900">Information for Families: </span>
                  Extended placement is determined strictly based on student academic aptitude, diagnostic reviews, 
                  and teacher recommendations. There is no parent selection box on admission or stream forms.
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-medium text-slate-500">
                Placement: Based on student aptitude (Information only)
              </div>
            </div>

            {/* Interdisciplinary Learning */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900 text-base">
                    Interdisciplinary Learning (IDU)
                  </h4>
                  {renderAssessmentBadge('eAssessment')}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Required for all students. Synthesizes concepts and methodologies across two distinct disciplines 
                  to solve multifaceted global challenges.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-medium text-slate-500">
                Requirement: Assessed via official IB Interdisciplinary on-screen exam
              </div>
            </div>
          </div>
        </div>

        {/* PART B: PARALLEL STREAM COMPARISON COLUMNS */}
        <div className="mt-16">
          <div className="pb-3 border-b border-slate-200">
            <span className="text-xs font-bold text-[#0F224A] uppercase tracking-wider">
              Academic Specialisation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F224A]">
              2. Parallel Stream Comparison: Science vs Non-Science
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Compare the two pathways side-by-side. Notice the key differences in science structure and humanities choices.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* COLUMN 1: SCIENCE STREAM */}
            <div className="bg-slate-50/70 border-2 border-blue-900/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                    Pathway Option A
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                    Pure Sciences Focus
                  </span>
                </div>

                <h4 className="mt-2 text-2xl font-extrabold text-[#0F224A]">
                  Science Stream
                </h4>
                
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Engineered for students intending to pursue STEM fields, engineering, medicine, and physical sciences. 
                  Students study all three pure sciences independently alongside Integrated Humanities.
                </p>

                {/* Important Clarification Banner */}
                <div className="mt-4 p-3 rounded-lg bg-blue-100/70 border border-blue-200 text-xs text-blue-950 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold">Stream Boundary: </strong>
                    Integrated Sciences is <span className="underline font-bold">not</span> part of the Science Stream. 
                    Science stream students take separate Physics, Chemistry, and Biology.
                  </div>
                </div>

                {/* Subject List */}
                <div className="mt-6 space-y-3">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Science Stream Subjects:
                  </div>

                  {SCIENCE_STREAM_SUBJECTS.map((subj) => (
                    <div
                      key={subj.code}
                      className="p-3.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between gap-3 shadow-2xs"
                    >
                      <div>
                        <div className="font-bold text-slate-900 text-sm">
                          {subj.name}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {subj.description}
                        </div>
                      </div>
                      <div className="shrink-0">
                        {renderAssessmentBadge(subj.assessmentType)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Summary: </span>
                4 Stream Subjects (All 4 are IB eAssessment subjects).
              </div>
            </div>

            {/* COLUMN 2: NON-SCIENCE STREAM */}
            <div className="bg-slate-50/70 border-2 border-amber-700/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                    Pathway Option B
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                    Humanities & Business Focus
                  </span>
                </div>

                <h4 className="mt-2 text-2xl font-extrabold text-[#0F224A]">
                  Non-Science Stream
                </h4>
                
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tailored for students interested in economics, business, history, international relations, diplomacy, 
                  law, and the humanities. Combines integrated sciences with dual humanities and a specialized elective.
                </p>

                {/* Subject List */}
                <div className="mt-6 space-y-3">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Non-Science Stream Subjects:
                  </div>

                  {/* Integrated Sciences */}
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        Integrated Sciences
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Interdisciplinary study of biological, chemical, and physical principles.
                      </div>
                    </div>
                    <div className="shrink-0">
                      {renderAssessmentBadge('eAssessment')}
                    </div>
                  </div>

                  {/* History & Geography note */}
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-slate-900 text-sm">
                        History & Geography (Both Studied)
                      </div>
                      {renderAssessmentBadge('eAssessment')}
                    </div>
                    <div className="text-xs text-slate-600">
                      Students study <strong className="font-semibold text-slate-900">both History and Geography</strong> as separate eAssessment courses.
                    </div>
                  </div>

                  {/* Economics or Business Management Elective */}
                  <div className="p-4 bg-amber-50/60 rounded-lg border border-amber-300 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-bold text-amber-950 text-sm">
                        Economics or Business Management
                      </div>
                      {renderAssessmentBadge('School-assessed course')}
                    </div>
                    <div className="text-xs text-amber-900 font-medium">
                      Family Choice: Students choose <strong className="underline">ONE</strong> of the two.
                    </div>
                    <blockquote className="text-xs text-slate-700 italic border-l-2 border-amber-400 pl-2.5 py-0.5">
                      “Each is a rigorous two-year course involving intensive research, individual project work, oral components and presentations.”
                    </blockquote>
                    <div className="text-[11px] text-amber-800">
                      Both are GSIS school-assessed courses, distinct from external IB eAssessments.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Summary: </span>
                Integrated Sciences (eAssessment) + History (eAssessment) + Geography (eAssessment) + Choice of Economics or Business Management (School-assessed).
              </div>
            </div>

          </div>
        </div>

        {/* PART C: ADDITIONAL CURRICULUM COMPONENTS */}
        <div className="mt-16">
          <div className="pb-3 border-b border-slate-200">
            <span className="text-xs font-bold text-[#0F224A] uppercase tracking-wider">
              Creative & Capstone Components
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F224A]">
              3. Additional Components (ePortfolio Subject & Projects)
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Undertaken by every student regardless of stream choice.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* ePortfolio Subject Choice */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900 text-lg">
                    ePortfolio Subject Choice
                  </h4>
                  {renderAssessmentBadge('Internally assessed & externally moderated')}
                </div>
                
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Students choose <strong className="text-slate-900 font-semibold">ONE</strong> subject to build a digital process portfolio over MYP 4–5:
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {['Visual Arts', 'Design', 'Music', 'Theatre', 'Dance'].map((artOption) => (
                    <span
                      key={artOption}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white border border-slate-200 text-slate-800"
                    >
                      {artOption}
                    </span>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">Important Clarification: </strong>
                  <span className="underline font-semibold">Theatre and Dance are separate choices</span>, not a combined course. 
                  All ePortfolio work is internally assessed by GSIS faculty and externally moderated by the IB.
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-medium text-slate-500">
                Assessment: Internally assessed & externally moderated
              </div>
            </div>

            {/* MYP Projects (Personal Project) */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900 text-lg">
                    MYP Projects (Personal Project)
                  </h4>
                  {renderAssessmentBadge('Internally assessed & externally moderated')}
                </div>
                
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The flagship capstone of the Middle Years Programme completed in MYP 5. 
                  Students conduct an extended, self-directed inquiry on a topic of personal passion, 
                  producing a tangible product or outcome alongside a comprehensive reflective academic report.
                </p>

                <div className="mt-4 p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">Moderation & Recognition: </strong>
                  The Personal Project is internally evaluated by GSIS project supervisors and submitted for 
                  official IB external moderation to qualify for the formal IB MYP Certificate.
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-medium text-slate-500">
                Assessment: Internally assessed & externally moderated
              </div>
            </div>

          </div>
        </div>

        {/* PART D: INTERACTIVE STREAM EXPLORER FOR PARENTS */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-[#0F224A] text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Sliders className="w-4 h-4" />
              <span>Interactive Family Tool</span>
            </div>
            <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">
              MYP 4–5 Pathway & Subject Simulator
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Configure a prospective MYP 4–5 student pathway below. See which subjects will be studied, 
              which choices must be made, and how each component will be assessed.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Control Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* 1. Stream Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  1. Select Academic Stream:
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-white/10 rounded-lg">
                  <button
                    onClick={() => setSelectedStream('science')}
                    className={`py-2 px-3 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                      selectedStream === 'science'
                        ? 'bg-amber-400 text-slate-950 shadow-sm'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Science Stream
                  </button>
                  <button
                    onClick={() => setSelectedStream('non-science')}
                    className={`py-2 px-3 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                      selectedStream === 'non-science'
                        ? 'bg-amber-400 text-slate-950 shadow-sm'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Non-Science Stream
                  </button>
                </div>
              </div>

              {/* 2. Language Acquisition Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  2. Choose Language Acquisition (1 of 4):
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Hindi', 'French', 'Spanish', 'German'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                        selectedLanguage === lang
                          ? 'bg-white text-[#0F224A] border-white'
                          : 'bg-white/5 border-white/20 text-slate-200 hover:bg-white/10'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Speaking is internally assessed & externally moderated.
                </div>
              </div>

              {/* 3. Non-Science Elective (Only visible if Non-Science chosen) */}
              {selectedStream === 'non-science' && (
                <div className="animate-in fade-in duration-200">
                  <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                    3. Non-Science Elective (Choose 1 of 2):
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['Economics', 'Business Management'] as const).map((elective) => (
                      <button
                        key={elective}
                        onClick={() => setSelectedNonScienceElective(elective)}
                        className={`p-2.5 rounded-lg text-xs font-semibold text-center border transition-all ${
                          selectedNonScienceElective === elective
                            ? 'bg-amber-400 text-[#0F224A] border-amber-400 font-bold'
                            : 'bg-white/5 border-white/20 text-slate-200 hover:bg-white/10'
                        }`}
                      >
                        {elective}
                      </button>
                    ))}
                  </div>
                  <div className="text-[11px] text-amber-200/90 mt-1 italic">
                    School-assessed course with intensive research and presentations.
                  </div>
                </div>
              )}

              {/* 4. ePortfolio Subject Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  {selectedStream === 'non-science' ? '4.' : '3.'} Choose ePortfolio Subject (1 of 5):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Visual Arts', 'Design', 'Music', 'Theatre', 'Dance'].map((portfolio) => (
                    <button
                      key={portfolio}
                      onClick={() => setSelectedPortfolio(portfolio)}
                      className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                        selectedPortfolio === portfolio
                          ? 'bg-white text-[#0F224A] border-white'
                          : 'bg-white/5 border-white/20 text-slate-200 hover:bg-white/10'
                      }`}
                    >
                      {portfolio}
                    </button>
                  ))}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Theatre and Dance are separate choices.
                </div>
              </div>

              {/* Mathematics Reminder Note */}
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-white">Mathematics Placement: </span>
                Standard and Extended levels are both taught; student placement is determined strictly by student aptitude rather than selection on this form.
              </div>

              {/* Guidance for Families */}
              <div className="p-4 rounded-xl bg-white/10 border border-white/15 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Curriculum Planning Guidance</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Use the options above to explore how stream selections and elective choices shape a student's full 8-subject academic schedule and eAssessment profile.
                </p>
                <div className="text-[11px] text-slate-400 pt-1">
                  • All students prepare for official IB eAssessments across their selected subjects.
                </div>
              </div>
            </div>

            {/* Results Live Summary Column */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div>
                    <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                      Simulated Student Schedule
                    </div>
                    <div className="text-lg font-bold text-white">
                      {selectedStream === 'science' ? 'Science Stream Pathway' : 'Non-Science Stream Pathway'}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300">
                    MYP 4–5 (Grades 9 & 10)
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Core & Stream Subjects:
                  </div>

                  {/* 1. English */}
                  <div className="p-2.5 bg-white/10 rounded flex items-center justify-between text-xs">
                    <span className="font-medium text-white">English Language & Literature</span>
                    <span className="text-[10px] font-bold text-sky-200 bg-sky-900/60 px-2 py-0.5 rounded">eAssessment</span>
                  </div>

                  {/* 2. Selected Language */}
                  <div className="p-2.5 bg-white/10 rounded flex items-center justify-between text-xs">
                    <span className="font-medium text-white">Language Acquisition: <strong className="text-amber-300">{selectedLanguage}</strong></span>
                    <span className="text-[10px] font-bold text-sky-200 bg-sky-900/60 px-2 py-0.5 rounded">eAssessment (Speaking moderated)</span>
                  </div>

                  {/* 3. Math */}
                  <div className="p-2.5 bg-white/10 rounded flex items-center justify-between text-xs">
                    <span className="font-medium text-white">Mathematics (Standard / Extended by aptitude)</span>
                    <span className="text-[10px] font-bold text-sky-200 bg-sky-900/60 px-2 py-0.5 rounded">eAssessment</span>
                  </div>

                  {/* 4. IDU */}
                  <div className="p-2.5 bg-white/10 rounded flex items-center justify-between text-xs">
                    <span className="font-medium text-white">Interdisciplinary Learning (IDU)</span>
                    <span className="text-[10px] font-bold text-sky-200 bg-sky-900/60 px-2 py-0.5 rounded">eAssessment</span>
                  </div>

                  {/* Stream Specific */}
                  {selectedStream === 'science' ? (
                    <>
                      <div className="p-2.5 bg-white/10 rounded flex items-center justify-between text-xs">
                        <span className="font-medium text-white">Integrated Humanities</span>
                        <span className="text-[10px] font-bold text-sky-200 bg-sky-900/60 px-2 py-0.5 rounded">eAssessment</span>
                      </div>
                      <div className="p-2.5 bg-white/10 rounded flex items-center justify-between text-xs">
                        <span className="font-medium text-white">Physics</span>
                        <span className="text-[10px] font-bold text-sky-200 bg-sky-900/60 px-2 py-0.5 rounded">eAssessment</span>
                      </div>
                      <div className="p-2.5 bg-white/10 rounded flex items-center justify-between text-xs">
                        <span className="font-medium text-white">Chemistry</span>
                        <span className="text-[10px] font-bold text-sky-200 bg-sky-900/60 px-2 py-0.5 rounded">eAssessment</span>
                      </div>
                      <div className="p-2.5 bg-white/10 rounded flex items-center justify-between text-xs">
                        <span className="font-medium text-white">Biology</span>
                        <span className="text-[10px] font-bold text-sky-200 bg-sky-900/60 px-2 py-0.5 rounded">eAssessment</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-2.5 bg-white/10 rounded flex items-center justify-between text-xs">
                        <span className="font-medium text-white">Integrated Sciences</span>
                        <span className="text-[10px] font-bold text-sky-200 bg-sky-900/60 px-2 py-0.5 rounded">eAssessment</span>
                      </div>
                      <div className="p-2.5 bg-white/10 rounded flex items-center justify-between text-xs">
                        <span className="font-medium text-white">History</span>
                        <span className="text-[10px] font-bold text-sky-200 bg-sky-900/60 px-2 py-0.5 rounded">eAssessment</span>
                      </div>
                      <div className="p-2.5 bg-white/10 rounded flex items-center justify-between text-xs">
                        <span className="font-medium text-white">Geography</span>
                        <span className="text-[10px] font-bold text-sky-200 bg-sky-900/60 px-2 py-0.5 rounded">eAssessment</span>
                      </div>
                      <div className="p-2.5 bg-amber-500/20 border border-amber-400/40 rounded flex items-center justify-between text-xs">
                        <span className="font-medium text-amber-200">Elective: <strong className="text-white">{selectedNonScienceElective}</strong></span>
                        <span className="text-[10px] font-bold text-amber-200 bg-amber-900/60 px-2 py-0.5 rounded">School-assessed course</span>
                      </div>
                    </>
                  )}

                  {/* Additional Components */}
                  <div className="p-2.5 bg-purple-500/20 border border-purple-400/30 rounded flex items-center justify-between text-xs">
                    <span className="font-medium text-purple-200">ePortfolio Subject: <strong className="text-white">{selectedPortfolio}</strong></span>
                    <span className="text-[10px] font-bold text-purple-200 bg-purple-900/60 px-2 py-0.5 rounded">Moderated ePortfolio</span>
                  </div>

                  <div className="p-2.5 bg-purple-500/20 border border-purple-400/30 rounded flex items-center justify-between text-xs">
                    <span className="font-medium text-purple-200">Personal Project (MYP 5 Capstone)</span>
                    <span className="text-[10px] font-bold text-purple-200 bg-purple-900/60 px-2 py-0.5 rounded">Moderated Project</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-300 flex items-center justify-between">
                <span>Total Structured Learning Load</span>
                <span className="font-bold text-amber-400">Balanced Rigour & Worldwide Benchmarking</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
