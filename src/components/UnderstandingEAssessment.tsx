import React from 'react';
import { EASSESSMENT_STAGES } from '../data/mypData';
import { 
  Laptop, 
  FileText, 
  CheckCircle, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Globe, 
  Award,
  BookOpen,
  Users
} from 'lucide-react';

export const UnderstandingEAssessment: React.FC = () => {
  return (
    <section id="eassessment" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-[#991B1B] uppercase">
            Section 04 · Global Benchmarking
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F224A] tracking-tight">
            Understanding MYP eAssessment
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            MYP eAssessment is an innovative, digitally delivered assessment model offering 
            internationally recognized benchmarks from the International Baccalaureate (IB). 
            It evaluates more than rote recall: students demonstrate real conceptual understanding, 
            critical thinking, and the capacity to apply skills in authentic, unfamiliar situations.
          </p>
        </div>

        {/* 4-Stage "How It Works" Pipeline Diagram */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-[#0F224A] uppercase tracking-wider">
                Assessment Pipeline
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F224A]">
                How eAssessment Works: The Four Stages
              </h3>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-sky-50 text-sky-800 rounded-md border border-sky-200 shrink-0">
              International IB Quality Standards
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {EASSESSMENT_STAGES.map((stage, idx) => (
              <div
                key={stage.stepNumber}
                className="relative bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#0F224A] text-white font-bold text-xs flex items-center justify-center font-mono">
                      0{stage.stepNumber}
                    </span>
                    {idx < 3 && (
                      <span className="hidden md:inline text-slate-300 font-bold text-lg">
                        →
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {stage.title}
                  </h4>
                  
                  <div className="text-xs font-semibold text-[#991B1B] mt-1">
                    {stage.subtitle}
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-medium text-slate-500">
                  {idx === 0 && 'Classroom & Laboratory Learning'}
                  {idx === 1 && 'Digital Multimedia Interface'}
                  {idx === 2 && 'Criteria A, B, C, & D'}
                  {idx === 3 && 'Certified Worldwide Recognition'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Distinct Assessment Formats at GSIS */}
        <div className="mt-14">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Format Distinctions
          </div>
          <h3 className="mt-1 text-xl sm:text-2xl font-bold text-[#0F224A]">
            Assessment Formats & Responsibilities
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-3xl">
            Not all subjects use the same format. Explore how on-screen examinations, ePortfolios, 
            speaking components, and school-assessed courses differ in delivery and moderation.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. On-Screen Examinations */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between">
              <div>
                <div className="p-2.5 w-fit rounded-lg bg-sky-50 text-sky-800 mb-3">
                  <Laptop className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">
                  On-Screen Examinations
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Interactive digital exams taken on computers using multimedia simulations, dynamic graphs, 
                  and case studies. Marked directly by international IB examiners.
                </p>
                <div className="mt-3 text-xs text-slate-500">
                  <strong className="text-slate-800">Subjects: </strong>
                  English Lit, Sciences/Integrated Sciences, Math, History, Geography, Interdisciplinary.
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-sky-900">
                Marking: External IB Examiners
              </div>
            </div>

            {/* 2. ePortfolio Work */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between">
              <div>
                <div className="p-2.5 w-fit rounded-lg bg-purple-50 text-purple-800 mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">
                  ePortfolio Assessment
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A curated digital portfolio tracking the student&apos;s artistic or design inquiry from inception 
                  through testing and final reflection.
                </p>
                <div className="mt-3 text-xs text-slate-500">
                  <strong className="text-slate-800">Subjects: </strong>
                  Visual Arts, Design, Music, Theatre, or Dance (chosen subject).
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-purple-900">
                Marking: GSIS assessed · IB moderated
              </div>
            </div>

            {/* 3. Moderated Oral Speaking & Projects */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between">
              <div>
                <div className="p-2.5 w-fit rounded-lg bg-emerald-50 text-emerald-800 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">
                  Speaking & Projects
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Includes the Language Acquisition oral speaking component and the MYP Personal Project report. 
                  Both are evaluated internally and sampled by IB moderators.
                </p>
                <div className="mt-3 text-xs text-slate-500">
                  <strong className="text-slate-800">Components: </strong>
                  Language Acquisition Speaking + Personal Project.
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-emerald-900">
                Marking: GSIS assessed · IB moderated
              </div>
            </div>

            {/* 4. School-Assessed Courses */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between">
              <div>
                <div className="p-2.5 w-fit rounded-lg bg-amber-50 text-amber-800 mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">
                  School-Assessed Courses
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High-rigour two-year courses evaluated directly by GSIS faculty. 
                  Not every subject or course offered at GSIS is an external IB eAssessment.
                </p>
                <div className="mt-3 text-xs text-slate-500">
                  <strong className="text-slate-800">Subjects: </strong>
                  Economics or Business Management elective in the Non-Science stream.
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-amber-900">
                Marking: Internal GSIS Assessment
              </div>
            </div>

          </div>
        </div>

        {/* HOW MYP eASSESSMENT IS ASSESSED (OFFICIAL IB STANDARDS) */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#991B1B] uppercase tracking-wider">
              Year 5 Culmination
            </span>
            <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0F224A] tracking-tight">
              How MYP eAssessment is Assessed in MYP Year 5
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              In MYP Year 5 (Grade 10), the International Baccalaureate provides an external, 
              internationally benchmarked assessment model. It combines digital examinations marked 
              directly by IB examiners worldwide with coursework moderated by the IB.
            </p>
          </div>

          {/* Three Core Assessment Pillars */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                  Pillar 01 · External Exams
                </span>
                <h4 className="mt-1 text-lg font-bold text-[#0F224A]">
                  2-Hour On-Screen Examinations
                </h4>
                <div className="mt-2 text-xs text-sky-950 font-semibold bg-sky-50 px-2.5 py-1 rounded w-fit">
                  Marked by IB-Appointed Examiners
                </div>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  Students sit 2-hour digital exams using custom IB software featuring video clips, 
                  interactive data modeling, dynamic graphs, and contextual case studies.
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <strong className="text-slate-800">Subjects: </strong>
                  English Language & Lit, Math, Sciences (or Integrated Sciences), History, Geography, and Interdisciplinary Learning.
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700">
                Format: 100% Digital on-screen
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-purple-800 uppercase tracking-wider">
                  Pillar 02 · Practical Portfolios
                </span>
                <h4 className="mt-1 text-lg font-bold text-[#0F224A]">
                  Coursework ePortfolios
                </h4>
                <div className="mt-2 text-xs text-purple-950 font-semibold bg-purple-50 px-2.5 py-1 rounded w-fit">
                  Marked by GSIS · Moderated by IB
                </div>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  For practical and creative disciplines, students submit digital ePortfolios documenting 
                  their design or creative process across multiple units.
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <strong className="text-slate-800">Subjects: </strong>
                  Visual Arts, Design, Music, Theatre, or Dance (chosen subject).
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700">
                Format: Digital process folio
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Pillar 03 · Mandatory Capstone
                </span>
                <h4 className="mt-1 text-lg font-bold text-[#0F224A]">
                  The MYP Personal Project
                </h4>
                <div className="mt-2 text-xs text-emerald-950 font-semibold bg-emerald-50 px-2.5 py-1 rounded w-fit">
                  Marked by GSIS · Moderated by IB
                </div>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  An individual, sustained inquiry on a topic chosen by the student. Evaluated based on 
                  investigation, planning, taking action, and reflecting.
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <strong className="text-slate-800">Mandatory: </strong>
                  Required for all Year 5 students worldwide to qualify for IB MYP certification.
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700">
                Format: Product + Formal academic report
              </div>
            </div>

          </div>

          {/* Grading Scale & Certificate Eligibility Box */}
          <div className="mt-8 p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-[#0F224A] uppercase tracking-wider">
                  Official IB Certification Criteria
                </span>
                <h4 className="text-xl font-bold text-[#0F224A]">
                  How Scores & The IB MYP Certificate Are Awarded
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded-md bg-amber-100 text-amber-900 font-bold">
                  Scale: Grades 1 to 7
                </span>
                <span className="text-xs px-3 py-1 rounded-md bg-blue-100 text-blue-900 font-bold">
                  Min 28 Points for Certificate
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600">
              <div className="space-y-2">
                <strong className="text-slate-900 block text-sm">
                  1. Official IB 1–7 Grade Scale
                </strong>
                <p className="leading-relaxed">
                  Each on-screen examination, moderated ePortfolio, and the Personal Project receives an official 
                  IB grade from <strong>1 (lowest) to 7 (highest)</strong>. Grade 7 represents consistent, 
                  sophisticated conceptual understanding and exceptional independent transfer of learning.
                </p>
              </div>

              <div className="space-y-2">
                <strong className="text-slate-900 block text-sm">
                  2. Earning the Full IB MYP Certificate
                </strong>
                <p className="leading-relaxed">
                  To achieve the formal <strong>IB MYP Certificate</strong>, a student must participate in at least 8 components 
                  (Language & Lit, Language Acquisition, Individuals & Societies, Sciences, Mathematics, 1 ePortfolio course, 
                  the Interdisciplinary on-screen exam, and the Personal Project) scoring at least <strong>28 out of 56 points</strong> with no grade 1 or 2.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Students who do not register for the full certificate or who complete individual subjects receive official <strong>IB MYP Course Results</strong> for all assessed disciplines.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
