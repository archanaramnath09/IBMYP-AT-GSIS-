export interface AssessmentCriterion {
  letter: 'A' | 'B' | 'C' | 'D';
  name: string;
  weight: string;
  description: string;
}

export interface EAssessmentSpecification {
  formatType: 'On-Screen Examination' | 'ePortfolio Coursework' | 'On-Screen & Moderated Oral';
  duration?: string;
  totalMarks?: string;
  taskBreakdown?: string[];
  moderationDetails: string;
}

export interface SubjectGroup {
  id: string;
  name: string;
  categoryNumber: number;
  description: string;
  keyConcepts: string[];
  aims: string;
  skillsFocus: string;
  disciplines?: string[];
  criteria: AssessmentCriterion[];
  eAssessmentDetails: EAssessmentSpecification;
  learningTime: string;
}

export interface StageObjectivesDescription {
  stage: 'MYP 1' | 'MYP 3' | 'MYP 5';
  title: string;
  subtitle: string;
  focus: string;
  independenceLevel: string;
  skills: {
    communication: string;
    social: string;
    selfManagement: string;
    research: string;
    thinking: string;
  };
  sampleEvidence: string[];
}

export interface StreamSubject {
  name: string;
  code: string;
  assessmentType: 'eAssessment' | 'School-assessed course' | 'Internally assessed & externally moderated';
  description: string;
  notes?: string;
  isChoice?: boolean;
  choices?: string[];
}

export const SUBJECT_GROUPS: SubjectGroup[] = [
  {
    id: 'lang-lit',
    name: 'Language and Literature',
    categoryNumber: 1,
    description: 'Engages students in the study of language, literature, and media across 6 communicative domains (Listening, Speaking, Reading, Writing, Viewing, Presenting) to build critical literacy, analytical depth, and creative voice.',
    keyConcepts: ['Communication', 'Connections', 'Creativity', 'Perspective'],
    aims: 'Develop lifelong reading habits, appreciate linguistic variety, and craft sophisticated oral, visual, and written texts.',
    skillsFocus: 'Textual analysis, critical comparison, structural interpretation, and articulate expression.',
    disciplines: ['English Language & Literature'],
    learningTime: 'At least 50 hours per year; 70 guided hours in Years 4 & 5 for eAssessment.',
    criteria: [
      { letter: 'A', name: 'Analysing', weight: '25%', description: 'Analyse content, context, language, structure, technique, and style of literary and non-literary texts, and relationships among texts.' },
      { letter: 'B', name: 'Organizing', weight: '25%', description: 'Employ organizational structures that serve the context and intention; organize opinions and ideas coherently in structured forms.' },
      { letter: 'C', name: 'Producing text', weight: '25%', description: 'Produce texts that demonstrate insight, imagination, and sensitivity; select details and techniques to make impact.' },
      { letter: 'D', name: 'Using language', weight: '25%', description: 'Use appropriate and varied vocabulary, sentence structures, grammar, register, and style suitable for purpose and audience.' }
    ],
    eAssessmentDetails: {
      formatType: 'On-Screen Examination',
      duration: '2 Hours on-screen digital exam',
      totalMarks: '80 Marks',
      taskBreakdown: [
        'Task 1: Textual Analysis (30 marks) — Unseen literary/non-literary text evaluation',
        'Task 2: Comparison & Creative / Argumentative Writing (50 marks) — Synthesis and text production'
      ],
      moderationDetails: 'Marked externally by IB-appointed international examiners.'
    }
  },
  {
    id: 'lang-acq',
    name: 'Language Acquisition',
    categoryNumber: 2,
    description: 'Equips students with modern multilingual competence across listening, speaking, reading, and viewing in authentic global contexts. Offered at GSIS in Hindi, French, Spanish, and German.',
    keyConcepts: ['Communication', 'Connections', 'Creativity', 'Culture'],
    aims: 'Foster intercultural understanding, practical fluency, and confidence in diverse conversational and academic settings.',
    skillsFocus: 'Multimodal comprehension, contextual interaction, vocabulary acquisition, and cultural empathy.',
    disciplines: ['Hindi', 'French', 'Spanish', 'German'],
    learningTime: 'At least 50 hours per year; 70 guided hours in Years 4 & 5 for eAssessment.',
    criteria: [
      { letter: 'A', name: 'Listening', weight: '25%', description: 'Comprehend spoken text, identify conventions, draw conclusions, and interpret spoken interactions.' },
      { letter: 'B', name: 'Reading', weight: '25%', description: 'Comprehend written and visual text, recognize purpose, conventions, and nuance across diverse sources.' },
      { letter: 'C', name: 'Speaking', weight: '25%', description: 'Communicate orally in spontaneous and prepared interactions with clear pronunciation, intonation, and accuracy.' },
      { letter: 'D', name: 'Writing', weight: '25%', description: 'Communicate in written form for diverse audiences, organizing ideas with correct grammar, register, and conventions.' }
    ],
    eAssessmentDetails: {
      formatType: 'On-Screen & Moderated Oral',
      duration: 'Interactive on-screen tasks + Recorded oral interaction',
      totalMarks: '96 Marks (24 marks per criterion A, B, C, D)',
      taskBreakdown: [
        'Component 1: Oral Speaking Task (24 marks) — Assessed internally by GSIS teachers, externally moderated by the IB',
        'Components 2–4: On-Screen Tasks (72 marks) — Listening comprehension, reading analysis, and authentic written tasks'
      ],
      moderationDetails: 'Hybrid assessment: Oral speaking recorded and IB moderated; on-screen tasks marked externally by IB examiners.'
    }
  },
  {
    id: 'ind-soc',
    name: 'Individuals and Societies',
    categoryNumber: 3,
    description: 'Explores human history, physical and human geography, societies, and economic systems to cultivate responsible global citizenship and critical inquiry into the human condition.',
    keyConcepts: ['Change', 'Global interactions', 'Time, place and space', 'Systems'],
    aims: 'Inquire into historical transformations, geographical patterns, social justice, and international relationships.',
    skillsFocus: 'Source evaluation, geographical analysis, structured argumentation, and ethical inquiry.',
    disciplines: ['Integrated Humanities (Science stream)', 'History (Non-Science stream)', 'Geography (Non-Science stream)', 'Economics or Business Management (School-assessed elective)'],
    learningTime: 'At least 50 hours per year; 70 guided hours in Years 4 & 5 for eAssessment.',
    criteria: [
      { letter: 'A', name: 'Knowing and understanding', weight: '25%', description: 'Use humanities terminology in context; demonstrate detailed knowledge of subject content and historical/geographical concepts.' },
      { letter: 'B', name: 'Investigating', weight: '25%', description: 'Formulate a clear, focused research question; justify a comprehensive research plan; collect and record relevant data; evaluate research process.' },
      { letter: 'C', name: 'Communicating', weight: '25%', description: 'Communicate information matching purpose and audience; structure arguments logically; document all sources using recognized academic conventions.' },
      { letter: 'D', name: 'Thinking critically', weight: '25%', description: 'Analyse concepts, issues, events, and arguments; synthesize evidence to reach valid conclusions; evaluate differing perspectives and real-world implications.' }
    ],
    eAssessmentDetails: {
      formatType: 'On-Screen Examination',
      duration: '2 Hours on-screen digital exam',
      totalMarks: '80 Marks',
      taskBreakdown: [
        'Task 1: Investigating (26 marks) — Inquiry planning, source analysis, and process evaluation',
        'Task 2: Communicating (18 marks) — Structured presentation of historical/geographical arguments',
        'Task 3: Thinking Critically (36 marks) — Deep analysis of perspectives, synthesis, and evaluative judgments'
      ],
      moderationDetails: 'Marked externally by IB-appointed international examiners.'
    }
  },
  {
    id: 'sciences',
    name: 'Sciences',
    categoryNumber: 4,
    description: 'Investigates the natural and physical world through scientific inquiry, controlled experimentation, and empirical evaluation. Progresses from Integrated Sciences in MYP 1–2 into Discrete Sciences (Biology, Chemistry, Physics) or continued Integrated Sciences in MYP 4–5.',
    keyConcepts: ['Change', 'Relationships', 'Systems'],
    aims: 'Cultivate scientific curiosity, design valid experiments, evaluate laboratory data, and ponder ethical implications of science.',
    skillsFocus: 'Experimental design, quantitative data processing, hypothesis testing, and critical evaluation.',
    disciplines: ['Integrated Sciences (MYP 1–2 / Non-Science stream)', 'Biology (Science stream)', 'Chemistry (Science stream)', 'Physics (Science stream)'],
    learningTime: 'At least 50 hours per year; 70 guided hours in Years 4 & 5 for eAssessment.',
    criteria: [
      { letter: 'A', name: 'Knowing and understanding', weight: '25%', description: 'Explain scientific knowledge, apply to solve problems in familiar and unfamiliar situations, analyse information to make scientifically supported judgments.' },
      { letter: 'B', name: 'Inquiring and designing', weight: '25%', description: 'Explain a problem to be tested, formulate a testable hypothesis with scientific reasoning, manipulate variables, and design complete scientific investigations.' },
      { letter: 'C', name: 'Processing and evaluating', weight: '25%', description: 'Present collected/transformed data, interpret results using scientific reasoning, discuss hypothesis validity, evaluate investigation methods and propose improvements.' },
      { letter: 'D', name: 'Reflecting on the impacts of science', weight: '25%', description: 'Explain how science addresses specific real-world problems; discuss moral, ethical, social, economic, political, cultural, and environmental implications.' }
    ],
    eAssessmentDetails: {
      formatType: 'On-Screen Examination',
      duration: '2 Hours on-screen digital exam',
      totalMarks: '100 Marks',
      taskBreakdown: [
        'Task 1: Knowing and Understanding (25 marks) — Conceptual recall and problem-solving',
        'Task 2: Investigation & Experimentation (50 marks) — Inquiring, designing, processing data, and evaluating experimental models with interactive simulations',
        'Task 3: Real-World Applications & Impacts of Science (25 marks) — Ethical, environmental, and socio-economic analysis'
      ],
      moderationDetails: 'Marked externally by IB-appointed international examiners.'
    }
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    categoryNumber: 5,
    description: 'Promotes mathematical thinking, problem-solving in real-world contexts, and abstract conceptual reasoning. Offered at Standard and Extended levels in MYP 4–5 based on student aptitude and diagnostic performance.',
    keyConcepts: ['Form', 'Logic', 'Relationships'],
    aims: 'Empower students to appreciate the beauty of mathematics, model phenomena, and justify solutions with precision.',
    skillsFocus: 'Mathematical modeling, pattern recognition, logical deduction, and structured justification.',
    disciplines: ['Standard Mathematics', 'Extended Mathematics'],
    learningTime: 'At least 50 hours per year; 70 guided hours in Years 4 & 5 for eAssessment.',
    criteria: [
      { letter: 'A', name: 'Knowing and understanding', weight: '25%', description: 'Select and apply mathematics to solve problems in familiar and unfamiliar situations; select and apply general mathematical rules correctly.' },
      { letter: 'B', name: 'Investigating patterns', weight: '25%', description: 'Select and apply problem-solving techniques to recognize patterns; describe patterns as general rules; test and verify general rules.' },
      { letter: 'C', name: 'Communicating', weight: '25%', description: 'Use appropriate mathematical language and forms of mathematical representation; organize ideas in a logical structure (assessed continuously across all exam tasks: 25 marks).' },
      { letter: 'D', name: 'Applying mathematics in real-life contexts', weight: '25%', description: 'Identify relevant elements of authentic situations; select appropriate strategies; apply to reach valid solutions; explain the degree of accuracy.' }
    ],
    eAssessmentDetails: {
      formatType: 'On-Screen Examination',
      duration: '2 Hours on-screen digital exam',
      totalMarks: '100 Marks',
      taskBreakdown: [
        'Task 1: Mathematical Knowledge & Understanding (approx. 31–35 marks)',
        'Task 2: Investigating Patterns & Mathematical Modeling (approx. 31–35 marks)',
        'Task 3: Real-Life Contexts & Practical Application (approx. 31–35 marks)',
        'Criterion C (Communicating) is embedded across all three tasks (25 marks total)'
      ],
      moderationDetails: 'Marked externally by IB-appointed international examiners.'
    }
  },
  {
    id: 'arts',
    name: 'Arts',
    categoryNumber: 6,
    description: 'Encourages expressive creativity and aesthetic inquiry across visual and performing arts disciplines: Dance, Media Arts, Music, Visual Arts, and Theatre. Focuses on the core artistic cycle: Explore -> Create -> Reflect.',
    keyConcepts: ['Aesthetics', 'Change', 'Communication', 'Identity'],
    aims: 'Develop artistic craftsmanship, articulate creative intent, critique artworks, and engage personal and cultural identity.',
    skillsFocus: 'Creative process documentation, artistic technique, aesthetic critique, and expressive performance.',
    disciplines: ['Dance', 'Media Arts', 'Music', 'Visual Arts', 'Theatre'],
    learningTime: 'At least 50 hours per year; 70 guided hours in Years 4 & 5 for eAssessment.',
    criteria: [
      { letter: 'A', name: 'Investigating', weight: '25%', description: 'Research art movements, genres, and artworks or performances using relevant sources.' },
      { letter: 'B', name: 'Developing', weight: '25%', description: 'Develop ideas through practical exploration, skills, techniques, and experimentation.' },
      { letter: 'C', name: 'Creating or performing', weight: '25%', description: 'Demonstrate command of skills and techniques in a finalized artwork or performance.' },
      { letter: 'D', name: 'Evaluating', weight: '25%', description: 'Reflect on artistic work, personal development, and the role of arts in life and the world.' }
    ],
    eAssessmentDetails: {
      formatType: 'ePortfolio Coursework',
      duration: 'Delivered across Year 5 unit planner (Competent stage)',
      totalMarks: '32 Criterion Levels (Four Criteria A–D, max 8 each)',
      taskBreakdown: [
        'Part A: Investigation and contextual research folio',
        'Part B: Artistic development through practical exploration',
        'Part C: Finalized artwork or recorded performance',
        'Part D: Critical evaluation and personal artistic reflection'
      ],
      moderationDetails: 'Classroom teachers mark ePortfolios; the IB moderates a sample from each school to apply international standards.'
    }
  },
  {
    id: 'phe',
    name: 'Physical and Health Education',
    categoryNumber: 7,
    description: 'Fosters physical literacy, lifelong wellness, team strategy, and an understanding of physical and mental health through positive social interaction and active living.',
    keyConcepts: ['Change', 'Communication', 'Relationships'],
    aims: 'Encourage active living, tactical thinking in sports, self-reflection on wellness, and collaborative sportsmanship.',
    skillsFocus: 'Motor skill refinement, tactical decision-making, fitness planning, and collaborative leadership.',
    disciplines: ['Physical Performance', 'Health & Well-being', 'Tactical & Movement Concepts'],
    learningTime: 'At least 50 hours per year; 70 guided hours in Years 4 & 5 for eAssessment.',
    criteria: [
      { letter: 'A', name: 'Knowing and understanding', weight: '25%', description: 'Explain physical and health education knowledge; apply physical terminology accurately in context.' },
      { letter: 'B', name: 'Planning for performance', weight: '25%', description: 'Design, explain, and justify actionable plans for improving physical performance and personal health.' },
      { letter: 'C', name: 'Applying and performing', weight: '25%', description: 'Demonstrate and apply a range of skills, techniques, movement strategies, and tactical concepts.' },
      { letter: 'D', name: 'Reflecting and improving performance', weight: '25%', description: 'Explain and demonstrate strategies to enhance interpersonal skills, develop goals, and evaluate performance outcomes.' }
    ],
    eAssessmentDetails: {
      formatType: 'ePortfolio Coursework',
      duration: 'Year 5 portfolio evidence log & performance recordings',
      totalMarks: '32 Criterion Levels (Criteria A–D, max 8 each)',
      taskBreakdown: [
        'Evidence 1: Tactical and movement demonstration video',
        'Evidence 2: Physical training and health plan with justified goals',
        'Evidence 3: Performance reflection journal and interpersonal review'
      ],
      moderationDetails: 'Assessed internally by GSIS PHE educators; sample externally moderated by the IB.'
    }
  },
  {
    id: 'design',
    name: 'Design',
    categoryNumber: 8,
    description: 'Applies the iterative design cycle (Inquiring and Analysing -> Developing Ideas -> Creating the Solution -> Evaluating) to engineer practical solutions to authentic human challenges.',
    keyConcepts: ['Communication', 'Communities', 'Development', 'Systems'],
    aims: 'Train students as ethical problem-solvers using digital, product, or systems design to solve real-world needs.',
    skillsFocus: 'Design cycle fidelity, iterative prototyping, client empathy, and rigorous solution testing.',
    disciplines: ['Product Design', 'Digital Design', 'Combined Design'],
    learningTime: 'At least 50 hours per year; 70 guided hours in Years 4 & 5 for eAssessment.',
    criteria: [
      { letter: 'A', name: 'Inquiring and analysing', weight: '25%', description: 'Explain and justify the need for a solution, identify and prioritize research, analyse existing products, and develop a comprehensive design brief.' },
      { letter: 'B', name: 'Developing ideas', weight: '25%', description: 'Develop design specifications, generate feasible design concepts, present chosen design, and develop planning drawings/diagrams.' },
      { letter: 'C', name: 'Creating the solution', weight: '25%', description: 'Construct a logical plan, demonstrate technical skills, follow the plan to create the solution, and justify changes made during production.' },
      { letter: 'D', name: 'Evaluating', weight: '25%', description: 'Design detailed testing methods, evaluate success against specification, explain how the solution could be improved, and explain impact on the client/target audience.' }
    ],
    eAssessmentDetails: {
      formatType: 'ePortfolio Coursework',
      duration: '35–40 Hours design project portfolio in Year 5',
      totalMarks: '32 Criterion Levels (Criteria A–D, max 8 each)',
      taskBreakdown: [
        'Strand A: Research, client inquiry, and design brief (max 8)',
        'Strand B: Concept generation, CAD models, and design specification (max 8)',
        'Strand C: Technical manufacture plan, photographic proof, and solution build (max 8)',
        'Strand D: Client testing, rubric evaluation, and future modifications (max 8)'
      ],
      moderationDetails: 'Marked by GSIS design specialists; sample externally moderated by the IB.'
    }
  }
];

export const INTERDISCIPLINARY_LEARNING_SPECIFICATION = {
  title: 'MYP Interdisciplinary Learning (IDU)',
  requirement: 'Mandatory annual requirement: at least one collaboratively planned interdisciplinary unit in each year of the MYP involving at least two subject groups.',
  eAssessmentExam: {
    format: 'On-Screen Examination (Year 5)',
    duration: '2 Hours digital on-screen examination',
    totalPoints: '36 Points',
    tasks: [
      'Task 1: Disciplinary Foundations & Synthesis (24/12 points)',
      'Task 2: Synthesis & Reflective Application (12/24 points)'
    ]
  },
  criteria: [
    { letter: 'A', name: 'Evaluating', weight: '1/3', description: 'Evaluate disciplinary knowledge and its synthesis in addressing complex real-world issues.' },
    { letter: 'B', name: 'Synthesizing', weight: '1/3', description: 'Integrate knowledge and modes of thinking from two or more disciplines to demonstrate interdisciplinary understanding.' },
    { letter: 'C', name: 'Reflecting', weight: '1/3', description: 'Reflect on the development of interdisciplinary understanding and its implications for personal and global actions.' }
  ]
};

export const PERSONAL_PROJECT_SPECIFICATION = {
  title: 'MYP Personal Project (Year 5 Capstone)',
  requirement: 'Mandatory culminating inquiry project for all students seeking the official IB MYP Certificate.',
  workload: 'Approximately 25 hours of self-directed, independent inquiry guided by a GSIS faculty supervisor.',
  cycle: 'Inquiry / Planning -> Taking Action / Creating Outcome -> Reflecting on ATL Skills & Learning',
  criteria: [
    { letter: 'A', name: 'Planning', weight: '1/3', description: 'State a clear learning goal and product goal, explain how ATL skills will be applied, and develop a detailed action plan with success criteria.' },
    { letter: 'B', name: 'Applying skills', weight: '1/3', description: 'Achieve the product goal, demonstrate ATL thinking, self-management, and communication skills throughout the process.' },
    { letter: 'C', name: 'Reflecting', weight: '1/3', description: 'Explain the impact of the project on oneself and one’s learning, and evaluate the quality of the product against criteria.' }
  ],
  moderation: 'Assessed internally by GSIS project supervisors; standard sample submitted to the IB for external moderation.'
};

export const LEARNING_JOURNEY_STAGES = [
  {
    stage: 'MYP 1',
    year: 'Grade 6 / Year 1',
    isKeyObjectiveStage: true,
    stageBadge: 'MYP Year 1 Interim Objectives',
    theme: 'Building Foundations & Guided Strategies',
    summary: 'Build foundations and practise strategies with guidance.',
    narrative: 'Students transition into the MYP framework, discovering how to inquire systematically across eight broad subject groups while developing essential learning habits under structured teacher mentorship.',
    keyMilestones: [
      'Introduced to the 8 subject groups and fundamental inquiry concepts',
      'Learn standard routines, laboratory safety, and digital workspace organisation',
      'Practise framing simple inquiry questions with structured teacher support',
      'Complete initial guided reflection journals and basic peer collaboration tasks'
    ]
  },
  {
    stage: 'MYP 2',
    year: 'Grade 7 / Year 2',
    isKeyObjectiveStage: false,
    stageBadge: 'Skill Consolidation & Depth',
    theme: 'Expanding Perspectives & Developing Independence',
    summary: 'Deepen conceptual connections and widen inquiry scopes.',
    narrative: 'Learners broaden their analytical reach, moving from teacher-led instructions to collaborative investigations, applying disciplinary tools with growing confidence.',
    keyMilestones: [
      'Engage in deeper interdisciplinary connections across sciences and humanities',
      'Take active roles in collaborative group projects with minimal prompting',
      'Refine personal time management and self-tracking across multi-week assignments',
      'Begin evaluating source credibility and citing basic bibliographical references'
    ]
  },
  {
    stage: 'MYP 3',
    year: 'Grade 8 / Year 3',
    isKeyObjectiveStage: true,
    stageBadge: 'MYP Year 3 Interim Objectives',
    theme: 'Connecting Across Subjects & Growing Independence',
    summary: 'Connect learning across subjects and use strategies with increasing independence.',
    narrative: 'A milestone transition stage where students consolidate foundational mastery, articulate informed viewpoints across disciplines, and demonstrate autonomous strategy execution in preparation for upper MYP streams.',
    keyMilestones: [
      'Synthesise concepts between distinct subject groups with increasing autonomy',
      'Compare competing viewpoints and justify evidence-based conclusions',
      'Lead student-driven inquiries and manage multi-step project milestones independently',
      'Engage in MYP Year 3 progress reviews to inform MYP 4–5 stream aspirations'
    ]
  },
  {
    stage: 'MYP 4',
    year: 'Grade 9 / Year 4',
    isKeyObjectiveStage: false,
    stageBadge: 'Stream Specialisation & Advanced Inquiry',
    theme: 'Focused Academic Rigour & Methodological Depth',
    summary: 'Transition into focused streams and rigorous disciplinary methodologies.',
    narrative: 'Students enter their chosen academic pathways (Science or Non-Science stream) alongside the shared core, engaging in advanced syllabus depths, rigorous coursework, and ePortfolio preparation.',
    keyMilestones: [
      'Begin specialised stream coursework (integrated disciplines or separate pure sciences)',
      'Commence intensive two-year syllabus trajectories towards MYP eAssessment',
      'Develop sustained research methodologies, formal lab protocols, and portfolio curation',
      'Initiate exploratory thinking for the Personal Project'
    ]
  },
  {
    stage: 'MYP 5',
    year: 'Grade 10 / Year 5',
    isKeyObjectiveStage: true,
    stageBadge: 'MYP Year 5 Final Objectives & eAssessment',
    theme: 'Independent Application, Transfer & eAssessment Readiness',
    summary: 'Apply learning independently in complex or unfamiliar contexts and prepare for the next stage of learning.',
    narrative: 'The culminating year of the MYP. Students demonstrate advanced conceptual synthesis, undertake the internally assessed and externally moderated Personal Project, and complete MYP eAssessments with international IB benchmarks.',
    keyMilestones: [
      'Apply knowledge independently in novel, complex, and unfamiliar academic scenarios',
      'Complete and submit the externally moderated MYP Personal Project',
      'Sit on-screen examinations and submit moderated ePortfolios for official IB recognition',
      'Seamlessly transition to senior pre-university curricula (IB Diploma Programme)'
    ]
  }
];

export const STAGE_OBJECTIVES_DATA: StageObjectivesDescription[] = [
  {
    stage: 'MYP 1',
    title: 'MYP Year 1 Objectives',
    subtitle: 'Foundation with Guided Strategies',
    focus: 'Build foundations and practise strategies with guidance.',
    independenceLevel: 'Teacher-guided execution with regular scaffolding and formative feedback.',
    skills: {
      communication: 'Share ideas clearly in short oral, written or visual forms; listen and respond to others.',
      social: 'Take a role in a group and practise respectful collaboration.',
      selfManagement: 'Follow routines, organise materials and complete work with reminders.',
      research: 'Frame simple questions, locate information with support and identify basic source details.',
      thinking: 'Describe ideas, make simple connections, use feedback and explain a basic choice.'
    },
    sampleEvidence: [
      'Short illustrated oral presentation or structured visual mind map',
      'Guided science laboratory record with safety checklist and step-by-step observation',
      'Basic design folder documenting initial sketch ideas and simple user feedback',
      'Self-management checklist and goal-setting reflection sheet'
    ]
  },
  {
    stage: 'MYP 3',
    title: 'MYP Year 3 Objectives',
    subtitle: 'Growing Independence & Synthesis',
    focus: 'Connect learning across subjects and use strategies with increasing independence.',
    independenceLevel: 'Collaborative and individual self-direction with periodic milestone check-ins.',
    skills: {
      communication: 'Select an appropriate way to communicate for the task and support ideas with examples.',
      social: 'Contribute reliably to group work, share responsibility and respond constructively to different views.',
      selfManagement: 'Plan multi-step work, manage deadlines and reflect on progress.',
      research: 'Refine questions, compare sources, record evidence and acknowledge sources.',
      thinking: 'Analyse information, make connections across subjects, justify decisions and revise work using feedback.'
    },
    sampleEvidence: [
      'Comparative analytical essay evaluating historical perspectives with citation list',
      'Student-designed scientific investigation with controlled variables and data table',
      'Iterative design prototype accompanied by peer testing and structured modification logs',
      'Interdisciplinary inquiry synthesis linking scientific principles to societal impact'
    ]
  },
  {
    stage: 'MYP 5',
    title: 'MYP Year 5 Objectives',
    subtitle: 'Independent Application, Transfer & eAssessment',
    focus: 'Apply learning independently in complex or unfamiliar contexts and prepare for the next stage of learning.',
    independenceLevel: 'Autonomous, self-regulated inquiry demonstrating rigorous transfer and synthesis.',
    skills: {
      communication: 'Communicate a sustained, well-supported argument or solution for a specific audience and purpose.',
      social: 'Collaborate responsibly, manage differing perspectives and contribute to shared outcomes.',
      selfManagement: 'Independently plan, monitor and adjust extended work against goals and deadlines.',
      research: 'Evaluate the relevance and credibility of sources, synthesise evidence and acknowledge sources appropriately.',
      thinking: 'Evaluate ideas, justify conclusions, transfer learning to unfamiliar contexts and reflect on the effectiveness of strategies.'
    },
    sampleEvidence: [
      'Sustained Personal Project report detailing an independent investigation with full bibliography',
      'Complex laboratory report evaluating experimental anomalies and suggesting theoretical modifications',
      'Comprehensive ePortfolio (Design / Visual Arts / Performing Arts) with development stages and critical reflection',
      'Timed, on-screen examination response synthesising unfamiliar multimedia stimuli into nuanced written arguments'
    ]
  }
];

export const SHARED_CORE_SUBJECTS: StreamSubject[] = [
  {
    name: 'English Language and Literature',
    code: 'ENG-LL',
    assessmentType: 'eAssessment',
    description: 'Mandatory core subject for all MYP 4–5 students, exploring classical and contemporary literature, linguistic structures, and critical analysis.',
    notes: 'Required for all students; assessed via official IB on-screen eAssessment.'
  },
  {
    name: 'Language Acquisition',
    code: 'LANG-ACQ',
    assessmentType: 'eAssessment',
    description: 'Students choose one language from Hindi, French, Spanish, or German to develop advanced conversational, reading, and writing skills.',
    notes: 'eAssessment subject. The speaking component is internally assessed by GSIS teachers and externally moderated by the IB.',
    isChoice: true,
    choices: ['Hindi', 'French', 'Spanish', 'German']
  },
  {
    name: 'Mathematics',
    code: 'MATH',
    assessmentType: 'eAssessment',
    description: 'Rigorous mathematical study offered at Standard and Extended levels. Extended placement is determined strictly by student academic aptitude and diagnostic reviews.',
    notes: 'eAssessment subject. Note for families: Standard and Extended levels are both offered; placement is determined based on student aptitude rather than parental course selection.'
  },
  {
    name: 'Interdisciplinary Learning',
    code: 'IDU',
    assessmentType: 'eAssessment',
    description: 'Synthesises knowledge and modes of thinking from two or more subject disciplines to address real-world global issues and complex scenarios.',
    notes: 'Required for all students; evaluated through an official IB interdisciplinary on-screen eAssessment examination.'
  }
];

export const SCIENCE_STREAM_SUBJECTS: StreamSubject[] = [
  {
    name: 'Integrated Humanities',
    code: 'INT-HUM',
    assessmentType: 'eAssessment',
    description: 'A holistic investigation of human societies, historical developments, and geographical systems designed for Science stream students.'
  },
  {
    name: 'Physics',
    code: 'PHYS',
    assessmentType: 'eAssessment',
    description: 'In-depth study of mechanics, thermodynamics, waves, electricity, and modern physics through rigorous quantitative and practical inquiry.'
  },
  {
    name: 'Chemistry',
    code: 'CHEM',
    assessmentType: 'eAssessment',
    description: 'Detailed exploration of atomic structure, chemical bonding, stoichiometry, kinetics, energetics, and organic chemistry.'
  },
  {
    name: 'Biology',
    code: 'BIO',
    assessmentType: 'eAssessment',
    description: 'Comprehensive study of cell biology, molecular genetics, ecology, physiology, and evolutionary mechanisms.'
  }
];

export const NON_SCIENCE_STREAM_SUBJECTS: StreamSubject[] = [
  {
    name: 'Integrated Sciences',
    code: 'INT-SCI',
    assessmentType: 'eAssessment',
    description: 'A cohesive interdisciplinary science curriculum blending foundational biological, chemical, and physical principles for broad scientific literacy.'
  },
  {
    name: 'History',
    code: 'HIST',
    assessmentType: 'eAssessment',
    description: 'Deep inquiry into modern world history, historiography, cause and consequence, ideological conflicts, and primary source critique.'
  },
  {
    name: 'Geography',
    code: 'GEOG',
    assessmentType: 'eAssessment',
    description: 'Thorough investigation of physical landforms, climate dynamics, resource management, population shifts, and sustainable development.'
  },
  {
    name: 'Economics or Business Management',
    code: 'ECON-BUS',
    assessmentType: 'School-assessed course',
    description: 'Each is a rigorous two-year course involving intensive research, individual project work, oral components and presentations.',
    notes: 'Students choose ONE of the two options. Both are school-assessed courses by GSIS (distinct from external eAssessments).',
    isChoice: true,
    choices: ['Economics', 'Business Management']
  }
];

export const ADDITIONAL_COMPONENTS: StreamSubject[] = [
  {
    name: 'ePortfolio Subject Choice',
    code: 'E-PORT',
    assessmentType: 'Internally assessed & externally moderated',
    description: 'Students select ONE discipline from Visual Arts, Design, Music, Theatre, or Dance to develop an extensive digital portfolio over MYP 4–5.',
    notes: 'Theatre and Dance are separate choices. The ePortfolio is internally assessed by GSIS specialist educators and externally moderated by the IB.',
    isChoice: true,
    choices: ['Visual Arts', 'Design', 'Music', 'Theatre', 'Dance']
  },
  {
    name: 'MYP Projects (Personal Project)',
    code: 'PROJ',
    assessmentType: 'Internally assessed & externally moderated',
    description: 'A sustained, individual inquiry completed in MYP 5 where students investigate an area of deep personal interest, producing an outcome and reflective report.',
    notes: 'Internally assessed by GSIS faculty and externally moderated by the IB to achieve official IB recognition.'
  }
];

export const EASSESSMENT_STAGES = [
  {
    stepNumber: 1,
    title: 'Learning & Guided Practice',
    subtitle: 'Curriculum Exploration in MYP 4–5',
    description: 'Students engage in dynamic classroom inquiries, practical lab work, multimedia projects, and ATL skill building in their chosen stream.'
  },
  {
    stepNumber: 2,
    title: 'On-Screen Exam / ePortfolio Task',
    subtitle: 'Where Applicable by Subject',
    description: 'Depending on the subject, students complete interactive multimedia on-screen examinations or curate an extensive digital ePortfolio of practical work.'
  },
  {
    stepNumber: 3,
    title: 'Assessment Against Subject Criteria',
    subtitle: 'Four Rigorous Subject Objectives',
    description: 'Student performance is evaluated directly against the published IB subject-group criteria (Criteria A, B, C, and D) measuring conceptual and practical mastery.'
  },
  {
    stepNumber: 4,
    title: 'External Moderation or IB Assessment',
    subtitle: 'International IB Benchmarking',
    description: 'On-screen exams are marked by international IB examiners; internally assessed ePortfolios, speaking tasks, and Projects are moderated by IB to ensure international standards.'
  }
];

export const FAQS = [
  {
    question: 'What are the eight MYP subject groups?',
    answer: 'In MYP 1–3, students experience a broad, balanced programme across all eight subject groups: Language and Literature, Language Acquisition, Individuals and Societies, Sciences, Mathematics, Arts, Physical and Health Education, and Design. This guarantees intellectual breadth before subject stream choices in MYP 4–5.'
  },
  {
    question: 'What changes in MYP 4–5?',
    answer: 'In MYP 4–5, students transition from the universal broad curriculum to focused academic streams: the Science Stream (with separate Physics, Chemistry, Biology, and Integrated Humanities) or the Non-Science Stream (with Integrated Sciences, both History and Geography, and a choice between Economics and Business Management). All students continue with shared core subjects (English Language and Literature, Language Acquisition, Mathematics, and Interdisciplinary Learning) plus an ePortfolio subject and the Personal Project.'
  },
  {
    question: 'What is the difference between eAssessment and school assessment?',
    answer: 'MYP eAssessment provides internationally benchmarked results certified by the International Baccalaureate (IB), consisting of on-screen examinations and externally moderated ePortfolios. In contrast, school-assessed courses (such as Economics and Business Management at GSIS) are internally designed and evaluated by GSIS faculty using rigorous assessment frameworks tailored to our academic standards.'
  },
  {
    question: 'Does every student take the same stream?',
    answer: 'No. GSIS offers two distinct pathways in MYP 4–5: the Science Stream and the Non-Science Stream. Families and students select the pathway best aligned with the student’s academic strengths, intellectual interests, and long-term pre-university career ambitions.'
  },
  {
    question: 'How do Language Acquisition choices work?',
    answer: 'All students select one modern Language Acquisition course from Hindi, French, Spanish, or German. This subject is an eAssessment subject, featuring an internally assessed speaking component that is externally moderated by the International Baccalaureate.'
  },
  {
    question: 'Do parents choose Standard or Extended Mathematics on this form?',
    answer: 'No. Both Standard and Extended Mathematics are offered at GSIS for MYP 4–5. Placement into Extended Mathematics is based strictly on demonstrated student aptitude, diagnostic performance, and teacher recommendations, rather than family course selection.'
  },
  {
    question: 'Are Theatre and Dance one combined option?',
    answer: 'No. Theatre and Dance are separate, distinct ePortfolio subject choices. A student may select Visual Arts, Design, Music, Theatre, or Dance as their ePortfolio subject choice in MYP 4–5.'
  },
  {
    question: 'How do ATL skills connect with assessment?',
    answer: 'Approaches to Learning (ATL) skills (Communication, Social, Self-management, Research, Thinking) are intentionally taught and practised during daily learning. Students demonstrate these skills in their tasks and projects, while teachers evaluate subject-specific objectives using the four published assessment criteria established for each subject group. ATL is not a separate, identical score across all subjects; rather, it powers student success in subject-specific performance.'
  },
  {
    question: 'How does learning progression work across MYP Year 1 to Year 5?',
    answer: 'The MYP is an intentional five-year continuum (MYP Year 1 to Year 5). The International Baccalaureate defines age-appropriate Interim Objectives and Assessment Criteria Level Descriptors for Year 1 (Grade 6) and Year 3 (Grade 8), which prepare students systematically for the final Year 5 (Grade 10) objectives and external IB eAssessments.'
  },
  {
    question: 'What are IB Interim Objectives in MYP Year 1 and Year 3?',
    answer: 'In MYP Year 1 and Year 3, teachers evaluate student work using the IB’s published interim objectives and level descriptors. These provide age-appropriate developmental criteria across all four criteria (A, B, C, D) in each subject group, ensuring students progressively master complex inquiry and transfer skills before entering MYP Year 4–5.'
  },
  {
    question: 'How are students assessed in MYP 1–3 versus MYP 5 eAssessment?',
    answer: 'In MYP 1–3, assessment is criterion-related and school-based: students are assessed across four criteria (Criteria A, B, C, D) on a 0–8 scale (maximum 32 total points per subject), which teachers convert into an official IB 1–7 grade using published boundaries. In MYP Year 5, students can undertake external IB eAssessment: 2-hour digital on-screen examinations marked directly by international IB examiners, coursework ePortfolios (Arts/Design) moderated by the IB, and the Personal Project capstone moderated by the IB to qualify for the official IB MYP Certificate.'
  }
];

export const IB_CONTINUUM_AND_OBJECTIVES_FRAMEWORK = {
  title: 'The Official IB MYP 5-Year Continuum & Objectives',
  officialIbTerminology: 'MYP Year 1 & Year 3 Interim Objectives; Year 5 Final Assessment Criteria Descriptors',
  overview: 'The International Baccalaureate structures the MYP across five continuous years (MYP Year 1 to Year 5). To ensure seamless developmental progression, the IB publishes interim objectives and level descriptors for Year 1 (Grade 6) and Year 3 (Grade 8), preparing learners for the final criteria in Year 5 (Grade 10).',
  sources: [
    'https://www.ibo.org/programmes/middle-years-programme/curriculum/',
    'https://www.ibo.org/programmes/middle-years-programme/assessment-and-exams/'
  ]
};

export const MYP_1_3_ASSESSMENT_SYSTEM = {
  modelTitle: 'Criterion-Related Assessment in MYP 1–3',
  corePhilosophy: 'Students are evaluated against published, predetermined criteria and level descriptors, never graded on a bell curve or ranked against classmates.',
  fourCriteria: [
    {
      criterion: 'Criterion A',
      maxScore: 8,
      commonFocus: 'Knowing and Understanding / Analysing',
      description: 'Assesses disciplinary knowledge, conceptual comprehension, and analytical breakdown of ideas.'
    },
    {
      criterion: 'Criterion B',
      maxScore: 8,
      commonFocus: 'Inquiring, Designing, Planning & Organizing',
      description: 'Assesses how students formulate inquiry questions, design scientific tests, organize text, or plan solutions.'
    },
    {
      criterion: 'Criterion C',
      maxScore: 8,
      commonFocus: 'Processing, Communicating & Creating Solutions',
      description: 'Assesses the execution of work, communicative accuracy, data interpretation, and creative production.'
    },
    {
      criterion: 'Criterion D',
      maxScore: 8,
      commonFocus: 'Applying, Evaluating & Reflecting on Impacts',
      description: 'Assesses real-world application, critical self-evaluation, and reflection on societal or ethical implications.'
    }
  ],
  sampleSubjectCriteria: [
    {
      group: 'Sciences',
      critA: 'Knowing and understanding',
      critB: 'Inquiring and designing',
      critC: 'Processing and evaluating',
      critD: 'Reflecting on the impacts of science'
    },
    {
      group: 'Mathematics',
      critA: 'Knowing and understanding',
      critB: 'Investigating patterns',
      critC: 'Communicating',
      critD: 'Applying mathematics in real-life contexts'
    },
    {
      group: 'Language & Literature',
      critA: 'Analysing',
      critB: 'Organizing',
      critC: 'Producing text',
      critD: 'Using language'
    },
    {
      group: 'Design',
      critA: 'Inquiring and analysing',
      critB: 'Developing ideas',
      critC: 'Creating the solution',
      critD: 'Evaluating'
    }
  ],
  gradingMechanics: {
    scalePerCriterion: '0 to 8 achievement levels, using published IB interim descriptors for Years 1 and 3.',
    bestFitApproach: 'Teachers determine achievement levels using a qualitative "best-fit" approach across multiple tasks rather than mathematical averaging.',
    totalScore: 'Sum of four criteria scores out of a maximum of 32 points (8 + 8 + 8 + 8 = 32).',
    finalIbGrade: 'The 32-point total is mapped to the official IB 1–7 scale (Grade 7 is highest) using IB-published grade boundary tables.'
  },
  assessmentTypes: {
    formative: 'Continuous diagnostic tasks, drafts, lab experiments, peer dialogues, and self-checks that give constructive qualitative feedback to guide improvement without penalizing the final grade.',
    summative: 'Culminating unit tasks (essays, lab investigations, oral presentations, design folios, end-of-unit tests) evaluated against the 4 criteria to determine criterion levels.'
  }
};

export const MYP_EASSESSMENT_ASSESSMENT_SYSTEM = {
  title: 'How MYP eAssessment is Assessed (MYP Year 5)',
  overview: 'The MYP eAssessment provides rigorous, internationally benchmarked qualifications managed by the International Baccalaureate. It uses a hybrid model of external examinations and moderated coursework.',
  threePillars: [
    {
      pillar: '1. On-Screen Examinations (2-Hour Digital Exams)',
      examiner: 'Marked externally by IB-appointed international examiners',
      format: 'Interactive on-screen digital software using multimedia videos, dynamic data simulators, and authentic contextual problems.',
      subjectsCovered: 'Language and Literature, Individuals and Societies (History/Geography/Integrated Humanities), Sciences (Biology/Chemistry/Physics/Integrated Sciences), Mathematics, and the Interdisciplinary Learning on-screen exam.'
    },
    {
      pillar: '2. ePortfolios of Practical Coursework',
      examiner: 'Initially assessed by GSIS teachers, then externally moderated by the IB',
      format: 'Extensive digital portfolios documenting students’ full creative, design, or physical inquiry process across 2–3 units of study.',
      subjectsCovered: 'Arts (Visual Arts, Music, Theatre, Dance) and Design.'
    },
    {
      pillar: '3. The MYP Personal Project',
      examiner: 'Initially assessed by GSIS project supervisors, then externally moderated by the IB',
      format: 'Independent, student-driven inquiry culminating in a finished product or outcome and a structured formal academic reflective report.',
      subjectsCovered: 'Mandatory capstone project for all MYP 5 students worldwide.'
    }
  ],
  speakingModeration: 'In Language Acquisition, the speaking interaction component is recorded, assessed internally by GSIS language educators against Criterion C & D, and submitted to the IB for external moderation.',
  scoringAndCertification: {
    gradeScale: 'Each subject and component receives an official IB grade from 1 (lowest) to 7 (highest).',
    certificateRequirements: 'To earn the prestigious official IB MYP Certificate, students must achieve at least 28 points across 8 components (minimum 1 from each subject group, Interdisciplinary exam, and Personal Project) with no grade 1 or 2, meeting strict IB balance rules.',
    courseResults: 'Students not seeking the full certificate receive official IB MYP Course Results for individual subjects successfully assessed.'
  }
};

export const OFFICIAL_IB_SOURCES = [
  {
    title: 'IB MYP Curriculum Framework',
    url: 'https://www.ibo.org/programmes/middle-years-programme/curriculum/',
    description: 'Official overview of the Middle Years Programme curriculum model, 8 subject groups, and core components.'
  },
  {
    title: 'IB MYP Assessment and Exams',
    url: 'https://www.ibo.org/programmes/middle-years-programme/assessment-and-exams/',
    description: 'Official International Baccalaureate guide to criterion-related assessment, grading criteria, and moderation standards.'
  },
  {
    title: 'Understanding MYP eAssessment',
    url: 'https://www.ibo.org/programmes/middle-years-programme/assessment-and-exams/understanding-eassessment/',
    description: 'Official IB documentation on on-screen examinations, ePortfolios, and international qualification benchmarks.'
  }
];


