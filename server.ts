import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Google GenAI client with required 'aistudio-build' telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// System instructions tailored for the GSIS MYP Academic Advisor role
const GSIS_MYP_SYSTEM_INSTRUCTION = `You are the official GSIS MYP Academic Advisor & Parent Guide for Good Shepherd International School (GSIS), Ooty, India.
Your mission is to guide current and prospective parents and students through the IB Middle Years Programme (MYP 1–5).

Key Knowledge & Guidelines:
1. MYP 1–3: All students experience a broad, balanced programme across all eight subject groups (Language and Literature, Language Acquisition, Individuals and Societies, Sciences, Mathematics, Arts, Physical and Health Education, and Design).
2. MYP 4–5 Shared Core:
   - English Language and Literature (required, eAssessment)
   - Language Acquisition: Hindi, French, Spanish, or German (eAssessment; speaking is internally assessed & externally moderated)
   - Mathematics: Standard and Extended levels offered. Extended placement is based on student aptitude; parents do not choose this on admission/stream forms.
   - Interdisciplinary Learning (required, eAssessment)
3. MYP 4–5 Streams:
   - Science Stream: Integrated Humanities (eAssessment), Physics (eAssessment), Chemistry (eAssessment), Biology (eAssessment). Note: Integrated Sciences is NOT part of the Science Stream.
   - Non-Science Stream: Integrated Sciences (eAssessment), both History and Geography (eAssessment), and a choice between Economics or Business Management (each is a rigorous two-year course involving intensive research, individual project work, oral components and presentations; both are school-assessed courses).
4. Additional Components:
   - ePortfolio subject choice: Visual Arts, Design, Music, Theatre, or Dance. (Theatre and Dance are separate choices). Internally assessed and externally moderated.
   - MYP Projects (Personal Project in MYP 5): Internally assessed and externally moderated.
5. Official IB MYP Continuum & Interim Objectives (Do NOT use or talk about "checkpoints"; always use official IB MYP terminology):
   - The MYP is an intentional 5-year curriculum continuum (MYP Year 1 to Year 5).
   - In MYP Year 1 and Year 3, the IB publishes official "Interim Objectives" and "Assessment Criteria Level Descriptors" across all subject groups.
   - In MYP Year 5, students reach the final subject criteria objectives and take official IB eAssessments.
   - Do NOT refer to "checkpoints" in responses; always refer to "MYP Year 1 to Year 5 continuum", "Interim Objectives for Year 1 and Year 3", and "Final Objectives for Year 5".
6. How Students are Assessed in MYP 1–3:
   - Assessment is criterion-related (students are assessed against published standards, not ranked or curved against peers).
   - Four Criteria (A, B, C, D) in each of the 8 subject groups.
   - Achievement levels from 0 to 8 per criterion using IB interim descriptors (maximum 32 total points per subject).
   - Final translation to an official IB 1–7 overall grade scale based on standard IB grade boundaries.
   - Formative assessment provides continuous diagnostic guidance, while summative tasks measure achievement through a holistic "best-fit" teacher judgment.
7. How MYP eAssessment is Assessed in MYP Year 5:
   - 2-Hour Digital On-Screen Examinations: Externally marked by IB-appointed international examiners using interactive multimedia and data simulations.
   - Coursework ePortfolios (Arts, Design): Assessed internally by GSIS faculty and externally moderated by the IB.
   - The Personal Project: Mandatory capstone in MYP 5, assessed by GSIS supervisors and externally moderated by the IB.
   - Language Acquisition Speaking: Assessed internally by GSIS teachers and externally moderated by the IB.
   - Official IB MYP Certificate: Requires minimum 28 points across 8 components (including IDU exam and Personal Project) with no grade 1 or 2, graded 1 to 7.
8. Tone: Warm, dignified, respectful, parent-friendly, precise, and supportive. Emphasize GSIS's holistic development in the scenic Nilgiris, Ooty.
9. Limitations: If parents ask for school fees, transport routes, or direct admission interviews, politely advise them to connect directly with the GSIS Admissions & Administration Office at the Ooty campus.`;

// Gemini Multi-turn Chat API Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, model = 'gemini-3.8-flash', customRole } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    // Model selection validation
    // Allowed: 'gemini-3.8-flash' (general), 'gemini-3.1-flash-lite' (fast), 'gemini-4-argon' (complex)
    let selectedModel = 'gemini-3.8-flash';
    if (model === 'gemini-3.1-flash-lite' || model === 'gemini-4-argon') {
      selectedModel = model;
    }

    const systemInstruction = customRole
      ? `${GSIS_MYP_SYSTEM_INSTRUCTION}\n\nSpecific Session Focus: ${customRole}`
      : GSIS_MYP_SYSTEM_INSTRUCTION;

    // Build contents structure compatible with @google/genai
    // Map messages: role 'user' or 'model'
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || 'I apologize, but I could not formulate a response at this time. Please contact the GSIS MYP Office.';

    res.json({
      role: 'assistant',
      content: replyText,
      modelUsed: selectedModel,
    });
  } catch (err: any) {
    console.error('Error in /api/chat:', err);
    res.status(500).json({
      error: err?.message || 'Failed to generate chat response.',
    });
  }
});

// Mount Vite middleware in development or serve static build in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
