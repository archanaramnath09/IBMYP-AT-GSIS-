import React, { useState } from 'react';
import { STAGE_OBJECTIVES_DATA } from '../data/mypData';
import { 
  MessageSquare, 
  Users, 
  Clock, 
  Search, 
  Brain, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Layers,
  Repeat
} from 'lucide-react';

const ATL_CATEGORIES = [
  {
    id: 'communication',
    name: 'Communication',
    icon: <MessageSquare className="w-5 h-5 text-blue-900" />,
    description: 'Exchanging thoughts, messages, and information effectively through speech, writing, and visual media.'
  },
  {
    id: 'social',
    name: 'Social (Collaboration)',
    icon: <Users className="w-5 h-5 text-emerald-800" />,
    description: 'Working productively with others, managing consensus, sharing responsibility, and building positive relationships.'
  },
  {
    id: 'selfManagement',
    name: 'Self-management',
    icon: <Clock className="w-5 h-5 text-amber-800" />,
    description: 'Organisational habits, time management, emotional regulation, perseverance, and reflective metacognition.'
  },
  {
    id: 'research',
    name: 'Research',
    icon: <Search className="w-5 h-5 text-purple-900" />,
    description: 'Information and media literacy: finding, interpreting, evaluating, synthesizing, and referencing knowledge ethically.'
  },
  {
    id: 'thinking',
    name: 'Thinking',
    icon: <Brain className="w-5 h-5 text-rose-800" />,
    description: 'Critical analysis, creative generation, conceptual transfer to novel problems, and reflective evaluation.'
  }
];

export const SkillsProgression: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'matrix' | 'stageCards'>('matrix');

  return (
    <section id="skills" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-[#991B1B] uppercase">
            Section 05 · Approaches to Learning (ATL)
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F224A] tracking-tight">
            Skills and Assessment Progression
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In the MYP, learning <em className="italic font-medium">how to learn</em> is as critical as mastering subject content. 
            Approaches to Learning (ATL) skills are intentionally taught, practised, and reflected upon. 
            Students demonstrate these skills in the work they produce and in how they approach challenging tasks.
          </p>
        </div>

        {/* Assessment Disambiguation Callout */}
        <div className="mt-6 p-4 sm:p-5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#0F224A] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="font-semibold text-slate-900">How ATL Connects to Subject Criteria: </strong>
            ATL is <span className="underline font-medium">not a separate, identical grading criterion</span> across subjects. 
            Instead, subject-group assessment criteria evaluate subject objectives (such as investigating in science, 
            or textual analysis in language). ATL skills provide the foundational competencies students draw upon to achieve 
            those subject objectives. Criteria names and descriptors vary by subject discipline.
          </div>
        </div>

        {/* Five ATL Categories Overview Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ATL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-[#0F224A]/40 transition-colors"
            >
              <div className="p-2 w-fit rounded-lg bg-slate-100 mb-2.5">
                {cat.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {cat.name}
              </h3>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        {/* PART 1: INTERACTIVE PROGRESSION MATRIX */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-[#0F224A] uppercase tracking-wider">
                Progression Across Key Stages
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F224A]">
                ATL Development Matrix: MYP Year 1 → Year 3 → Year 5
              </h3>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === 'all'
                    ? 'bg-[#0F224A] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Skills
              </button>
              {ATL_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                    selectedCategory === c.id
                      ? 'bg-[#0F224A] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {c.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-2 text-xs text-slate-500 italic">
            Note: Developmental descriptions below are illustrative examples used at GSIS, aligned with IB interim and final objectives.
          </div>

          {/* Tabular Progression Matrix */}
          <div className="mt-6 border border-slate-200 rounded-xl overflow-hidden shadow-xs bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[760px]">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200 text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-4 w-1/4">ATL Skill Category</th>
                    <th className="py-4 px-4 w-1/4 bg-blue-50/70 border-l border-slate-200">
                      <div className="text-[#0F224A]">MYP Year 1 Objectives</div>
                      <div className="text-[10px] font-medium text-slate-600 normal-case">Foundation with Guidance</div>
                    </th>
                    <th className="py-4 px-4 w-1/4 bg-amber-50/70 border-l border-slate-200">
                      <div className="text-amber-950">MYP Year 3 Objectives</div>
                      <div className="text-[10px] font-medium text-slate-600 normal-case">Growing Independence</div>
                    </th>
                    <th className="py-4 px-4 w-1/4 bg-rose-50/70 border-l border-slate-200">
                      <div className="text-rose-950">MYP Year 5 Objectives</div>
                      <div className="text-[10px] font-medium text-slate-600 normal-case">Independent Application & Transfer</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  
                  {/* Communication Row */}
                  {(selectedCategory === 'all' || selectedCategory === 'communication') && (
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900 align-top">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-blue-900 shrink-0" />
                          <span>Communication</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-blue-50/20">
                        Share ideas clearly in short oral, written or visual forms; listen and respond to others.
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-amber-50/20">
                        Select an appropriate way to communicate for the task and support ideas with examples.
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-rose-50/20">
                        Communicate a sustained, well-supported argument or solution for a specific audience and purpose.
                      </td>
                    </tr>
                  )}

                  {/* Social Row */}
                  {(selectedCategory === 'all' || selectedCategory === 'social') && (
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900 align-top">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-emerald-800 shrink-0" />
                          <span>Social (Collaboration)</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-blue-50/20">
                        Take a role in a group and practise respectful collaboration.
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-amber-50/20">
                        Contribute reliably to group work, share responsibility and respond constructively to different views.
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-rose-50/20">
                        Collaborate responsibly, manage differing perspectives and contribute to shared outcomes.
                      </td>
                    </tr>
                  )}

                  {/* Self-Management Row */}
                  {(selectedCategory === 'all' || selectedCategory === 'selfManagement') && (
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900 align-top">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-amber-800 shrink-0" />
                          <span>Self-management</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-blue-50/20">
                        Follow routines, organise materials and complete work with reminders.
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-amber-50/20">
                        Plan multi-step work, manage deadlines and reflect on progress.
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-rose-50/20">
                        Independently plan, monitor and adjust extended work against goals and deadlines.
                      </td>
                    </tr>
                  )}

                  {/* Research Row */}
                  {(selectedCategory === 'all' || selectedCategory === 'research') && (
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900 align-top">
                        <div className="flex items-center gap-2">
                          <Search className="w-4 h-4 text-purple-900 shrink-0" />
                          <span>Research</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-blue-50/20">
                        Frame simple questions, locate information with support and identify basic source details.
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-amber-50/20">
                        Refine questions, compare sources, record evidence and acknowledge sources.
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-rose-50/20">
                        Evaluate the relevance and credibility of sources, synthesise evidence and acknowledge sources appropriately.
                      </td>
                    </tr>
                  )}

                  {/* Thinking Row */}
                  {(selectedCategory === 'all' || selectedCategory === 'thinking') && (
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900 align-top">
                        <div className="flex items-center gap-2">
                          <Brain className="w-4 h-4 text-rose-800 shrink-0" />
                          <span>Thinking</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-blue-50/20">
                        Describe ideas, make simple connections, use feedback and explain a basic choice.
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-amber-50/20">
                        Analyse information, make connections across subjects, justify decisions and revise work using feedback.
                      </td>
                      <td className="py-4 px-4 text-slate-700 align-top border-l border-slate-200 leading-relaxed bg-rose-50/20">
                        Evaluate ideas, justify conclusions, transfer learning to unfamiliar contexts and reflect on the effectiveness of strategies.
                      </td>
                    </tr>
                  )}

                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Illustrative Task Evidence Across Key Stages */}
        <div className="mt-14">
          <div className="pb-3 border-b border-slate-200">
            <span className="text-xs font-bold text-[#0F224A] uppercase tracking-wider">
              Evidence in Authentic Tasks
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F224A]">
              What Evidence Could Look Like Across Key MYP Stages
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Clear examples of task evidence across presentations, investigations, design folios, reflections, and collaboration. 
              <span className="font-semibold text-slate-800"> (Clearly labelled as illustrative examples, aligned with IB interim and final objectives).</span>
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {STAGE_OBJECTIVES_DATA.map((cp) => (
              <div
                key={cp.stage}
                className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#991B1B]">
                      {cp.stage} Objectives
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Illustrative Evidence
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#0F224A]">
                    {cp.subtitle}
                  </h4>
                  
                  <p className="mt-1 text-xs text-slate-600 italic">
                    Focus: {cp.focus}
                  </p>

                  <div className="mt-4 space-y-2.5">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Sample Student Task Artifacts:
                    </div>
                    {cp.sampleEvidence.map((evidenceItem, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded bg-white border border-slate-200/80 text-xs text-slate-700 leading-relaxed flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                        <span>{evidenceItem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-medium">
                  Independence: {cp.independenceLevel}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: SECOND VISUAL - HOW SKILLS APPEAR THROUGH SUBJECT-GROUP ASSESSMENT */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Repeat className="w-4 h-4" />
              <span>Assessment Architecture In Action</span>
            </div>
            <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">
              How ATL Skills Appear Through Subject-Group Assessment
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              ATL skills are not measured as an isolated theoretical checklist. 
              Instead, they function through a continuous instructional cycle embedded directly into subject assignments.
            </p>
          </div>

          {/* 4-Step Cycle Visual */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Step 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center font-mono mb-3">
                  1
                </div>
                <h4 className="font-bold text-white text-base">
                  Learn & Practise ATL Skills
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Teachers explicitly model and scaffold research, collaboration, thinking, self-management, 
                  and communication strategies in class.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-amber-400 font-medium">
                Intentional skill instruction
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center font-mono mb-3">
                  2
                </div>
                <h4 className="font-bold text-white text-base">
                  Subject Task Creates Opportunity
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  An authentic assignment (e.g. laboratory investigation, textual critique, design prototype, or historical essay) 
                  requires deploying those skills.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-amber-400 font-medium">
                Disciplinary application
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center font-mono mb-3">
                  3
                </div>
                <h4 className="font-bold text-white text-base">
                  Teacher Assesses Subject Criteria
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Teachers evaluate student work against that subject group&apos;s published criteria (A, B, C, D) 
                  to assess subject-specific knowledge and competence.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-amber-400 font-medium">
                Criterion-related evaluation
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center font-mono mb-3">
                  4
                </div>
                <h4 className="font-bold text-white text-base">
                  Feedback & Next Steps
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Students reflect on their process, analyze teacher feedback, and refine both their subject 
                  mastery and underlying ATL strategy for the next milestone.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-amber-400 font-medium">
                Metacognitive growth
              </div>
            </div>

          </div>

          {/* Clarification footer */}
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
            <strong className="text-white">Note on Criteria Differentiation: </strong>
            Assessment criteria and task formats differ across subjects (for example, Science Criterion B focuses on 
            inquiring and designing experiments, whereas Language and Literature Criterion B focuses on organizing text). 
            ATL skills empower students across all these distinct disciplines.
          </div>
        </div>

      </div>
    </section>
  );
};
