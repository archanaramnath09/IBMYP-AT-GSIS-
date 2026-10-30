import React, { useState } from 'react';
import { IbMypLogo } from './IbMypLogo';
import { GsisCrest } from './GsisCrest';
import { 
  Compass, 
  Layers, 
  Globe, 
  BookOpen, 
  Users, 
  Sparkles, 
  CheckCircle, 
  Eye, 
  Maximize2,
  Clock,
  Award
} from 'lucide-react';

export const MypCurriculumFramework: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'model' | 'subjectGuides' | 'globalContexts' | 'concepts' | 'artsInfographic'>('model');
  const [lightboxImage, setLightboxImage] = useState<'framework' | 'arts' | null>(null);
  const [selectedGuideIndex, setSelectedGuideIndex] = useState(0);

  const globalContexts = [
    {
      title: 'Identities and relationships',
      focus: 'Who we are: identity, beliefs, values, mental and physical health, human relationships, rights and responsibilities.'
    },
    {
      title: 'Orientation in space and time',
      focus: 'Where and when: personal histories, landmarks, explorations, human migrations, interconnectedness of individuals and civilizations.'
    },
    {
      title: 'Personal and cultural expression',
      focus: 'How we express ourselves: discovery and expression of ideas, feelings, beliefs; aesthetic enjoyment, creativity, and philosophy.'
    },
    {
      title: 'Scientific and technical innovation',
      focus: 'How we understand world systems: the natural world and its laws; technology impact on communities and the environment.'
    },
    {
      title: 'Globalization and sustainability',
      focus: 'How we are connected: human-made systems and communities; local and global impact; resource consumption and environmental responsibility.'
    },
    {
      title: 'Fairness and development',
      focus: 'How we live together: rights, communities, sharing the planet, equal opportunities, peace, and conflict resolution.'
    }
  ];

  const fourKeyConceptsInArts = ['Aesthetics', 'Change', 'Communication', 'Identity'];
  const relatedConceptsInArts = ['Audience', 'Boundaries', 'Composition', 'Expression', 'Genre', 'Innovation', 'Interpretation', 'Narrative', 'Play', 'Presentation', 'Representation', 'Style', 'Visual Culture'];

  return (
    <section id="framework" className="py-20 bg-slate-100/70 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with dual branding */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#991B1B] uppercase">
              <span>Official Curriculum Structure</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>International Baccalaureate</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F224A] tracking-tight">
              The IB MYP Curriculum Framework
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              The International Baccalaureate Middle Years Programme is a conceptual, inquiry-based framework 
              structured as concentric circles around the developing learner. It connects disciplinary rigor 
              with global contexts, learning strategies, and international benchmarks.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <GsisCrest size={48} className="h-12 w-auto drop-shadow-xs" />
            <IbMypLogo height={42} />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-8 flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('model')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'model'
                ? 'bg-white text-[#0F224A] border-t-2 border-x border-slate-200 border-t-[#0F224A] shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-900" />
            <span>The Official Concentric MYP Framework</span>
          </button>
          <button
            onClick={() => setActiveTab('subjectGuides')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'subjectGuides'
                ? 'bg-white text-[#0F224A] border-t-2 border-x border-slate-200 border-t-[#0F224A] shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-700" />
            <span>Subject Criteria & Exam Blueprints</span>
          </button>
          <button
            onClick={() => setActiveTab('globalContexts')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'globalContexts'
                ? 'bg-white text-[#0F224A] border-t-2 border-x border-slate-200 border-t-[#0F224A] shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-emerald-700" />
            <span>The 6 Global Contexts</span>
          </button>
          <button
            onClick={() => setActiveTab('concepts')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'concepts'
                ? 'bg-white text-[#0F224A] border-t-2 border-x border-slate-200 border-t-[#0F224A] shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Key & Related Concepts</span>
          </button>
          <button
            onClick={() => setActiveTab('artsInfographic')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'artsInfographic'
                ? 'bg-white text-[#991B1B] border-t-2 border-x border-slate-200 border-t-[#991B1B] shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>GSIS MYP Arts Infographic Exemplar</span>
          </button>
        </div>

        {/* Tab 1: Official Concentric Circular Framework Model with Image */}
        {activeTab === 'model' && (
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Official Concentric Framework Diagram Image */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div 
                  className="relative w-full max-w-md aspect-square rounded-2xl border-2 border-slate-200 p-2 bg-gradient-to-tr from-slate-50 to-white shadow-md overflow-hidden group cursor-pointer"
                  onClick={() => setLightboxImage('framework')}
                  title="Click to zoom full-resolution framework diagram"
                >
                  <img
                    src="/assets/ib-myp-framework.png"
                    alt="Official IB Middle Years Programme Concentric Curriculum Framework"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-xs sm:text-sm font-semibold gap-1.5 p-4 text-center rounded-xl">
                    <Maximize2 className="w-6 h-6 text-amber-400" />
                    <span>Click to view full-resolution diagram</span>
                    <span className="text-[11px] text-slate-200 font-normal">Official IB Middle Years Programme Concentric Model</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <Eye className="w-3.5 h-3.5 text-slate-400" />
                  <span>Click diagram to inspect in full resolution</span>
                </div>
              </div>

              {/* Explanatory Rings Breakdown (Concentric Layers from Core to Rim) */}
              <div className="lg:col-span-6 space-y-3.5">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0F224A] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Center: The IB Learner Profile
                    </h4>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed pl-7">
                    The student is at the heart of the programme, developing the 10 IB Learner Profile attributes: <em>Inquirers, Knowledgeable, Thinkers, Communicators, Principled, Open-minded, Caring, Risk-takers, Balanced, and Reflective</em>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-800 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Approaches to Teaching (ATT) & Learning (ATL)
                    </h4>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed pl-7">
                    Teaching is inquiry-based, concept-driven, contextualized, collaborative, and differentiated. Learning develops 5 key ATL skill categories across 10 skill clusters so students "learn how to learn."
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Key Concepts & The 6 Global Contexts
                    </h4>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed pl-7">
                    Inquiry is structured through 16 overarching Key Concepts and discipline-specific Related Concepts, anchored in six Global Contexts that connect classroom lessons to real-world significance.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-rose-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      4
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Action, Service & Culminating Projects
                    </h4>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed pl-7">
                    Students turn understanding into principled action through Service as Action, culminating in the <strong>Community Project</strong> (MYP 3/4) and the mandatory <strong>MYP Personal Project</strong> in Year 5.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      5
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      The Eight Subject Groups Radiating Outward
                    </h4>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed pl-7">
                    Surrounding the core inquiry framework are the 8 rigorous subject groups: <em>Language & Literature, Language Acquisition, Individuals & Societies, Sciences, Mathematics, Arts, Physical & Health Education, and Design</em>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      6
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Outer Rim: International-Mindedness
                    </h4>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed pl-7">
                    The entire curriculum is encased in international-mindedness, preparing students to be empathetic global citizens who recognize their shared humanity and guardianship of the planet.
                  </p>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-950 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-800 shrink-0" />
                  <span>
                    <strong>Official Learning Time Requirement: </strong>
                    At least 50 hours of instructional time per subject area, per year (with 70 guided learning hours recommended in Years 4 and 5 for eAssessment subjects).
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Comprehensive Subject Criteria & Exam Blueprints (from all 12 infographics) */}
        {activeTab === 'subjectGuides' && (
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-bold text-[#991B1B] uppercase tracking-wider">
                Comprehensive Assessment Standards
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F224A] mt-1">
                Official Criteria (A–D), Marks & Blueprints by Subject
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Directly grounded in the official GSIS MYP subject infographics. Every subject is assessed against 
                4 published criteria (equally weighted, Levels 1–8), culminating in rigorous on-screen examinations or moderated ePortfolios in Year 5.
              </p>
            </div>

            {/* Subject Selector Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
              {[
                'Language & Literature',
                'Language Acquisition',
                'Individuals & Societies',
                'Sciences',
                'Mathematics',
                'Arts',
                'Physical & Health Education',
                'Design',
                'Interdisciplinary (IDU)',
                'Personal Project'
              ].map((name, idx) => (
                <button
                  key={name}
                  onClick={() => setSelectedGuideIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    selectedGuideIndex === idx
                      ? 'bg-[#0F224A] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Dynamic Subject Guide Card */}
            <div className="mt-6">
              {/* Sciences */}
              {selectedGuideIndex === 3 && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-cyan-50 border border-cyan-200 rounded-xl">
                    <div>
                      <span className="text-xs font-bold text-cyan-900 uppercase tracking-wide">Sciences Progression</span>
                      <h4 className="text-lg font-bold text-[#0F224A]">Integrated Sciences (MYP 1–2) → Discrete Sciences (Biology, Chemistry, Physics)</h4>
                    </div>
                    <span className="px-3 py-1 bg-cyan-700 text-white text-xs font-bold rounded-md">
                      2 Hours · 3 Tasks · 100 Marks
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-blue-900 mb-1">Criterion A (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Knowing and understanding</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Explain scientific knowledge, apply to solve problems in familiar and unfamiliar situations, analyse information to make scientifically supported judgments.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-blue-900 mb-1">Criterion B (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Inquiring and designing</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Explain a problem or question to be tested, formulate a testable hypothesis with scientific reasoning, manipulate variables, design scientific investigations.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-blue-900 mb-1">Criterion C (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Processing and evaluating</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Present collected data, interpret data and explain results using scientific reasoning, discuss hypothesis validity, evaluate investigation methods.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-blue-900 mb-1">Criterion D (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Reflecting on impacts of science</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Explain how science is applied to address a specific issue, discuss moral, ethical, social, economic, political, and environmental implications.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h5 className="text-xs font-bold text-[#0F224A] uppercase tracking-wider mb-2">Year 5 eAssessment Blueprint Breakdown (100 Marks)</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-700">
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <strong>Task 1: Knowing & Understanding (25 marks)</strong>
                        <p className="mt-1 text-slate-500">Recalling concepts, applying theories, scientific explanations.</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <strong>Task 2: Investigation & Experiment (50 marks)</strong>
                        <p className="mt-1 text-slate-500">Interactive digital simulation: formulating hypotheses, manipulating virtual variables, processing data tables, error analysis.</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <strong>Task 3: Real-World Applications & Impacts (25 marks)</strong>
                        <p className="mt-1 text-slate-500">Applying science to complex global dilemmas, evaluating environmental/ethical trade-offs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mathematics */}
              {selectedGuideIndex === 4 && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
                    <div>
                      <span className="text-xs font-bold text-indigo-900 uppercase tracking-wide">Mathematics Structure</span>
                      <h4 className="text-lg font-bold text-[#0F224A]">Standard Mathematics & Extended Mathematics (Aptitude Placed)</h4>
                    </div>
                    <span className="px-3 py-1 bg-indigo-800 text-white text-xs font-bold rounded-md">
                      2 Hours · 3 Tasks · 100 Marks
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-indigo-900 mb-1">Criterion A (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Knowing and understanding</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Select and apply mathematics to solve problems in both familiar and unfamiliar situations; select and apply general mathematical rules.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-indigo-900 mb-1">Criterion B (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Investigating patterns</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Select and apply problem-solving techniques to recognize patterns, describe patterns as general rules, test and verify general rules.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-indigo-900 mb-1">Criterion C (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Communicating (Embedded)</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Use appropriate mathematical language and forms of mathematical representation, organize ideas logically (25 marks across the exam).
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-indigo-900 mb-1">Criterion D (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Applying in real-life contexts</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Identify relevant elements of authentic situations, select appropriate strategies, apply to reach valid solutions, explain degree of accuracy.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <h5 className="font-bold text-[#0F224A] uppercase tracking-wider mb-1.5">Exam Task Weighting</h5>
                    <p>Three authentic inquiry tasks (approx. 31–35 marks each), with Criterion C assessed across all tasks (25 marks total). In Extended Mathematics, questions include advanced calculus, trigonometry, and complex proofs.</p>
                  </div>
                </div>
              )}

              {/* Language and Literature */}
              {selectedGuideIndex === 0 && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <div>
                      <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">6 Communicative Domains</span>
                      <h4 className="text-lg font-bold text-[#0F224A]">Listening, Speaking, Reading, Writing, Viewing, and Presenting</h4>
                    </div>
                    <span className="px-3 py-1 bg-blue-900 text-white text-xs font-bold rounded-md">
                      2 Hours · 2 Tasks · 80 Marks
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-blue-900 mb-1">Criterion A (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Analysing</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Analyse content, context, language, structure, technique, and style of texts and relationships among texts.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-blue-900 mb-1">Criterion B (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Organizing</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Employ organizational structures that serve context and intention; organize opinions and ideas coherently.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-blue-900 mb-1">Criterion C (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Producing text</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Produce texts that demonstrate insight, imagination, and sensitivity; select details and techniques.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-blue-900 mb-1">Criterion D (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Using language</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Use appropriate and varied vocabulary, sentence structures, grammar, register, and style for purpose and audience.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <h5 className="font-bold text-[#0F224A] uppercase tracking-wider mb-1">On-Screen eAssessment Format</h5>
                    <p>Task 1: Unseen Text Analysis (30 marks) · Task 2: Comparison & Creative / Argumentative Writing (50 marks). Marked externally by IB examiners.</p>
                  </div>
                </div>
              )}

              {/* Language Acquisition */}
              {selectedGuideIndex === 1 && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <div>
                      <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">Languages Offered at GSIS</span>
                      <h4 className="text-lg font-bold text-[#0F224A]">Hindi, French, Spanish, German (Phases 1–6)</h4>
                    </div>
                    <span className="px-3 py-1 bg-amber-800 text-white text-xs font-bold rounded-md">
                      Oral (IB Moderated) + On-Screen · 96 Marks
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-amber-900 mb-1">Criterion A (25%) · 24 Marks</div>
                      <div className="text-sm font-bold text-slate-900">Listening</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Comprehend spoken text, identify conventions, draw conclusions, interpret authentic interactions.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-amber-900 mb-1">Criterion B (25%) · 24 Marks</div>
                      <div className="text-sm font-bold text-slate-900">Reading</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Comprehend written and visual text, recognize purpose, nuance, and structural conventions.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-amber-900 mb-1">Criterion C (25%) · 24 Marks</div>
                      <div className="text-sm font-bold text-slate-900">Speaking (Moderated Oral)</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Communicate orally, interact with clear pronunciation, intonation, and fluency. Internally assessed, IB moderated.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-amber-900 mb-1">Criterion D (25%) · 24 Marks</div>
                      <div className="text-sm font-bold text-slate-900">Writing</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Communicate in written form for diverse purposes and audiences with appropriate register and accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Individuals & Societies */}
              {selectedGuideIndex === 2 && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                    <div>
                      <span className="text-xs font-bold text-emerald-900 uppercase tracking-wide">Courses Offered</span>
                      <h4 className="text-lg font-bold text-[#0F224A]">Integrated Humanities (Science Stream) · History & Geography (Non-Science Stream)</h4>
                    </div>
                    <span className="px-3 py-1 bg-emerald-800 text-white text-xs font-bold rounded-md">
                      2 Hours · 3 Tasks · 80 Marks
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-emerald-900 mb-1">Criterion A (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Knowing and understanding</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Use humanities terminology in context, demonstrate knowledge of content, events, and concepts.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-emerald-900 mb-1">Criterion B (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Investigating</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Formulate focused research questions, justify research plans, collect/record data, evaluate inquiry process.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-emerald-900 mb-1">Criterion C (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Communicating</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Structure work logically, communicate matching audience and purpose, cite sources using academic conventions.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-emerald-900 mb-1">Criterion D (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Thinking critically</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Analyse concepts, issues, and arguments; synthesize evidence; evaluate differing perspectives and consequences.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <h5 className="font-bold text-[#0F224A] uppercase tracking-wider mb-1">Tasks Distribution (80 Marks)</h5>
                    <p>Task 1: Investigating (26 marks) · Task 2: Communicating (18 marks) · Task 3: Thinking critically (36 marks).</p>
                  </div>
                </div>
              )}

              {/* Arts */}
              {selectedGuideIndex === 5 && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl">
                    <div>
                      <span className="text-xs font-bold text-rose-900 uppercase tracking-wide">Arts Disciplines</span>
                      <h4 className="text-lg font-bold text-[#0F224A]">Dance, Media Arts, Music, Visual Arts, Theatre</h4>
                    </div>
                    <span className="px-3 py-1 bg-rose-800 text-white text-xs font-bold rounded-md">
                      Year 5 ePortfolio · Teacher Assessed · IB Moderated
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-rose-900 mb-1">Criterion A (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Investigating</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Research art movements, genres, and artworks or performances using relevant sources.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-rose-900 mb-1">Criterion B (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Developing</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Develop ideas through practical exploration, skills, techniques, and experimentation.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-rose-900 mb-1">Criterion C (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Creating or performing</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Demonstrate command of skills and techniques in a finalized artwork or performance.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-rose-900 mb-1">Criterion D (25%) · Levels 1–8</div>
                      <div className="text-sm font-bold text-slate-900">Evaluating</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Reflect on artistic work, personal development, and the role of arts in life and the world.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* PHE */}
              {selectedGuideIndex === 6 && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl">
                    <div>
                      <span className="text-xs font-bold text-teal-900 uppercase tracking-wide">Physical & Health Education</span>
                      <h4 className="text-lg font-bold text-[#0F224A]">Active Living, Well-being, Tactical Concepts & Team Strategy</h4>
                    </div>
                    <span className="px-3 py-1 bg-teal-800 text-white text-xs font-bold rounded-md">
                      ePortfolio · Performance Videos & Health Plans
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-teal-900 mb-1">Criterion A (25%)</div>
                      <div className="text-sm font-bold text-slate-900">Knowing and understanding</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">Explain health knowledge and apply physical terms in context.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-teal-900 mb-1">Criterion B (25%)</div>
                      <div className="text-sm font-bold text-slate-900">Planning for performance</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">Design and justify actionable plans for improving fitness and performance.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-teal-900 mb-1">Criterion C (25%)</div>
                      <div className="text-sm font-bold text-slate-900">Applying and performing</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">Demonstrate and apply movement skills, techniques, and strategies.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-teal-900 mb-1">Criterion D (25%)</div>
                      <div className="text-sm font-bold text-slate-900">Reflecting & improving</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">Evaluate performance, demonstrate interpersonal skills, refine personal goals.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Design */}
              {selectedGuideIndex === 7 && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <div>
                      <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">Design Disciplines</span>
                      <h4 className="text-lg font-bold text-[#0F224A]">Product Design, Digital Design, Combined Systems</h4>
                    </div>
                    <span className="px-3 py-1 bg-amber-800 text-white text-xs font-bold rounded-md">
                      35–40 Hours ePortfolio Project
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-amber-900 mb-1">Criterion A (25%)</div>
                      <div className="text-sm font-bold text-slate-900">Inquiring and analysing</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">Explain and justify need, prioritize research, develop detailed design brief.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-amber-900 mb-1">Criterion B (25%)</div>
                      <div className="text-sm font-bold text-slate-900">Developing ideas</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">Develop design specifications, generate feasible concepts, produce planning drawings.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-amber-900 mb-1">Criterion C (25%)</div>
                      <div className="text-sm font-bold text-slate-900">Creating the solution</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">Construct step-by-step manufacture plan, demonstrate skills, create working prototype.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-amber-900 mb-1">Criterion D (25%)</div>
                      <div className="text-sm font-bold text-slate-900">Evaluating</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">Conduct client testing against specifications, explain improvements and societal impact.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* IDU */}
              {selectedGuideIndex === 8 && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl">
                    <div>
                      <span className="text-xs font-bold text-purple-900 uppercase tracking-wide">Interdisciplinary Learning (IDU)</span>
                      <h4 className="text-lg font-bold text-[#0F224A]">Annual Collaborative Unit (2+ Subject Groups)</h4>
                    </div>
                    <span className="px-3 py-1 bg-purple-900 text-white text-xs font-bold rounded-md">
                      2 Hours On-Screen Exam · 36 Points
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-purple-900 mb-1">Criterion A (1/3 Weight)</div>
                      <div className="text-sm font-bold text-slate-900">Evaluating</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">Evaluate disciplinary knowledge and its synthesis in addressing complex real-world issues.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-purple-900 mb-1">Criterion B (1/3 Weight)</div>
                      <div className="text-sm font-bold text-slate-900">Synthesizing</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">Integrate knowledge and modes of thinking from two or more disciplines to demonstrate interdisciplinary understanding.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-purple-900 mb-1">Criterion C (1/3 Weight)</div>
                      <div className="text-sm font-bold text-slate-900">Reflecting</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">Reflect on the development of interdisciplinary understanding and its implications for personal action.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <h5 className="font-bold text-[#0F224A] uppercase tracking-wider mb-1">eAssessment Exam Blueprint</h5>
                    <p>Task 1: Disciplinary Foundations & Synthesis (24/12 points) · Task 2: Synthesis & Reflective Application (12/24 points). Total 36 points, externally marked by IB examiners.</p>
                  </div>
                </div>
              )}

              {/* Personal Project */}
              {selectedGuideIndex === 9 && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <div>
                      <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">MYP 5 Culminating Capstone</span>
                      <h4 className="text-lg font-bold text-[#0F224A]">The Personal Project (~25 Hours Independent Inquiry)</h4>
                    </div>
                    <span className="px-3 py-1 bg-amber-800 text-white text-xs font-bold rounded-md">
                      Supervisor Assessed · IB Moderated
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-amber-900 mb-1">Criterion A (1/3 Weight)</div>
                      <div className="text-sm font-bold text-slate-900">Planning</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">State a clear learning goal and product goal, explain how ATL skills will be applied, develop a detailed action plan.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-amber-900 mb-1">Criterion B (1/3 Weight)</div>
                      <div className="text-sm font-bold text-slate-900">Applying skills</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">Achieve the product goal, demonstrate ATL thinking, self-management, and communication skills throughout.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-amber-900 mb-1">Criterion C (1/3 Weight)</div>
                      <div className="text-sm font-bold text-slate-900">Reflecting</div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">Explain the impact of the project on self and learning; evaluate the quality of the product against criteria.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <h5 className="font-bold text-[#0F224A] uppercase tracking-wider mb-1">Inquiry Cycle</h5>
                    <p>Inquiry / Planning → Taking Action / Creating Outcome → Reflecting on ATL Skills & Learning. Mandatory for the official IB MYP Certificate.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: The 6 Global Contexts */}
        {activeTab === 'globalContexts' && (
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#0F224A] uppercase tracking-wider">
                Real-World Inquiry Lenses
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F224A] mt-1">
                The Six IB MYP Global Contexts
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Students at GSIS learn by contextualizing subject content within authentic global environments. 
                These six lenses help answer: <em>Why are we learning this? Why does it matter to humanity?</em>
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {globalContexts.map((gc, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#991B1B] mb-1">
                    Context 0{idx + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {gc.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {gc.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Concept-Driven Inquiry */}
        {activeTab === 'concepts' && (
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#0F224A] uppercase tracking-wider">
                Deep Understanding Over Rote Recall
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F224A] mt-1">
                Key Concepts & Related Concepts
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                In the MYP, facts are organized under big, enduring concepts that transfer across disciplines, years, and cultures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide text-blue-900">
                  The 16 Prescribed Key Concepts (Interdisciplinary)
                </h4>
                <p className="mt-1 text-xs text-slate-600">
                  Broad, powerful conceptual anchors shared across the curriculum:
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 text-xs font-medium text-slate-800">
                  {[
                    'Aesthetics', 'Change', 'Communication', 'Communities', 
                    'Connections', 'Creativity', 'Culture', 'Development', 
                    'Form', 'Global interactions', 'Identity', 'Logic', 
                    'Perspective', 'Relationships', 'Systems', 'Time, place and space'
                  ].map((kc) => (
                    <span key={kc} className="px-2 py-0.5 rounded bg-white border border-slate-200">
                      {kc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide text-rose-900">
                  Related Concepts (Discipline-Specific Depth)
                </h4>
                <p className="mt-1 text-xs text-slate-600">
                  Targeted concepts explored inside specific subject groups (e.g. In Arts as demonstrated in the GSIS infographic):
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 text-xs font-medium text-slate-800">
                  {relatedConceptsInArts.map((rc) => (
                    <span key={rc} className="px-2 py-0.5 rounded bg-white border border-slate-200">
                      {rc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Official GSIS MYP Arts Infographic Exemplar */}
        {activeTab === 'artsInfographic' && (
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-[#991B1B] uppercase tracking-wider">
                  Authentic School Publication
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F224A] mt-1">
                  GSIS MYP Arts Subject Infographic
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Official Good Shepherd International School infographic illustrating MYP Arts disciplines, 4 criteria (A–D), and ePortfolio evidence.
                </p>
              </div>

              <button
                onClick={() => setLightboxImage('arts')}
                className="px-4 py-2 bg-[#0F224A] text-white text-xs font-semibold rounded-lg hover:bg-[#1B3A70] flex items-center gap-1.5 shrink-0 self-start sm:self-auto cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                <span>View Full-Resolution Image</span>
              </button>
            </div>

            {/* Embedded High-Resolution Preview */}
            <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group bg-slate-900 cursor-pointer" onClick={() => setLightboxImage('arts')}>
              <img
                src="/assets/aistudio/GSIS_MYP_Arts_Infographic_Landscape_4fc5fc4c.png"
                alt="Official Good Shepherd International School MYP Arts Infographic"
                className="w-full h-auto object-cover group-hover:opacity-95 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-semibold gap-2">
                <Eye className="w-5 h-5 text-amber-400" />
                <span>Click to expand full infographic</span>
              </div>
            </div>

            {/* Structured Insights extracted from the Infographic */}
            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-[#0F224A] uppercase tracking-wider mb-1">
                  Arts Disciplines Offered
                </div>
                <div className="text-xs text-slate-700 leading-relaxed">
                  Dance · Media Arts · Music · Visual Arts · Theatre. Learning focuses on one or more arts disciplines.
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-[#0F224A] uppercase tracking-wider mb-1">
                  4 Criteria (25% Each · Levels 1–8)
                </div>
                <div className="text-xs text-slate-700 leading-relaxed">
                  Criterion A: Investigating · Criterion B: Developing · Criterion C: Creating or performing · Criterion D: Evaluating.
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-[#0F224A] uppercase tracking-wider mb-1">
                  Year 5 ePortfolio & Quality Assurance
                </div>
                <div className="text-xs text-slate-700 leading-relaxed">
                  Classroom teachers mark ePortfolios; IB moderates a sample from each school to uphold international standards.
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal for Full View (Framework Image or Arts Infographic) */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-2 border-b border-slate-200">
              <span className="text-sm font-bold text-[#0F224A]">
                {lightboxImage === 'framework'
                  ? 'Official IB Middle Years Programme Concentric Curriculum Framework'
                  : 'Good Shepherd International School — MYP Arts Official Infographic'}
              </span>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="max-h-[82vh] overflow-y-auto mt-2 flex items-center justify-center bg-slate-50 p-2 rounded">
              {lightboxImage === 'framework' ? (
                <img
                  src="/assets/ib-myp-framework.png"
                  alt="Official IB Middle Years Programme Concentric Curriculum Framework"
                  className="max-h-[78vh] w-auto object-contain rounded shadow-xs"
                />
              ) : (
                <img
                  src="/assets/aistudio/GSIS_MYP_Arts_Infographic_Landscape_4fc5fc4c.png"
                  alt="Good Shepherd International School MYP Arts Infographic Full Size"
                  className="w-full h-auto rounded shadow-xs"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
