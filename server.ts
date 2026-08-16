import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Enable large JSON body size for uploaded textbook images
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

// Lazy GoogleGenAI client
function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  return new GoogleGenAI({
    apiKey: apiKey || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Analyze Lesson & Generate Study Material / Quiz Endpoint
app.post('/api/analyze-lesson', async (req, res) => {
  try {
    const {
      title = '',
      text = '',
      imageBase64 = '',
      mimeType = 'image/jpeg',
      language = 'ar',
      gradeLevel = 'intermediate',
      difficulty = 'medium',
      questionCount = 5,
    } = req.body;

    if (!text && !imageBase64) {
      return res.status(400).json({
        error: language === 'ar' ? 'يرجى تقديم نص أو صورة لصفحة الدرس.' : 'Please provide lesson text or an uploaded page image.',
      });
    }

    const ai = getGeminiClient();

    const isArabic = language === 'ar';
    const langInstruction = isArabic
      ? 'All explanations, summaries, key points, flashcards, questions, options, and answers MUST be written in clear, natural, engaging Arabic (العربية الفصحى الميسرة).'
      : 'All explanations, summaries, key points, flashcards, questions, options, and answers MUST be written in clear, engaging, easy-to-understand English.';

    const systemPrompt = `You are "QuizMaster Hub AI", an expert pedagogical tutor and study mentor specialized in helping students understand their school and university lessons with maximum clarity, fun, and depth.
${langInstruction}
Target student level: ${gradeLevel} (adapt vocabulary and tone accordingly).
Quiz target difficulty: ${difficulty}.
Requested number of quiz questions: ${Math.min(Math.max(Number(questionCount) || 5, 3), 10)}.

Your task is to thoroughly analyze the provided lesson material (from text notes or textbook image) and generate a comprehensive, structured study package containing:
1. "lessonTitle": Catchy, accurate title for this lesson.
2. "subjectArea": Subject area (e.g. Science / أحياء, Physics / فيزياء, History / تاريخ, etc.).
3. "overview": A friendly 2-3 sentence overview introducing why this topic is exciting and what we will learn.
4. "simpleExplanation": A simplified, step-by-step conversational explanation that breaks down difficult concepts into simple ideas using friendly everyday analogies.
5. "detailedSections": An array of 2 to 4 major concept breakdowns, each with a "title", "content" (detailed friendly explanation), and "keyTakeaway" (1 punchy line).
6. "summary": A well-structured comprehensive study summary highlighting the core concepts.
7. "keyPoints": An array of 4 to 7 crucial points to remember for exams (each with "id", "point", "category", and "importance" which is either "high" or "medium").
8. "vocabulary": An array of 3 to 6 key scientific or educational terms defined simply with an example.
9. "flashcards": An array of 4 to 8 interactive flashcards for active recall (each with "id", "front" [a question or term], and "back" [the answer or explanation]).
10. "quiz": Exactly ${Math.min(Math.max(Number(questionCount) || 5, 3), 10)} high-quality multiple choice questions. Each question must have:
    - "id": string unique ID
    - "question": clear student-friendly question
    - "options": array of exactly 4 distinct options
    - "correctAnswerIndex": integer index (0, 1, 2, or 3) of the correct option
    - "explanation": helpful explanation why this option is correct and why it matters
    - "hint": a gentle clue that guides the student without giving away the answer directly
11. "studyTips": 2 to 4 actionable, practical study tricks (e.g. mnemonic device, visualization trick, real-world connection).
12. "estimatedReadingTimeMinutes": realistic number of minutes to read and absorb (e.g. 3, 5, 7).`;

    const userPrompt = `Please analyze this lesson material:
${title ? `Specified Topic / Title: ${title}\n` : ''}
${text ? `Lesson Text Content:\n${text}\n` : ''}
${imageBase64 ? 'Please carefully transcribe, read all text and diagrams from the provided textbook page image, and analyze it.' : ''}

Generate the complete study package according to the specified JSON schema.`;

    const contentsParts: Array<any> = [];

    if (imageBase64) {
      // Strip potential data URL prefix
      let cleanData = imageBase64;
      let effectiveMime = mimeType || 'image/jpeg';
      if (imageBase64.includes(',')) {
        const parts = imageBase64.split(',');
        const header = parts[0];
        cleanData = parts[1];
        const match = header.match(/data:([^;]+);/);
        if (match && match[1]) {
          effectiveMime = match[1];
        }
      }

      contentsParts.push({
        inlineData: {
          mimeType: effectiveMime,
          data: cleanData,
        },
      });
    }

    contentsParts.push({
      text: userPrompt,
    });

    const responseSchema = {
      type: Type.OBJECT,
      properties: {
        lessonTitle: { type: Type.STRING },
        subjectArea: { type: Type.STRING },
        overview: { type: Type.STRING },
        simpleExplanation: { type: Type.STRING },
        detailedSections: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              content: { type: Type.STRING },
              keyTakeaway: { type: Type.STRING },
            },
            required: ['title', 'content', 'keyTakeaway'],
          },
        },
        summary: { type: Type.STRING },
        keyPoints: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              point: { type: Type.STRING },
              category: { type: Type.STRING },
              importance: { type: Type.STRING },
            },
            required: ['id', 'point', 'importance'],
          },
        },
        vocabulary: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              term: { type: Type.STRING },
              definition: { type: Type.STRING },
              example: { type: Type.STRING },
            },
            required: ['term', 'definition'],
          },
        },
        flashcards: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              front: { type: Type.STRING },
              back: { type: Type.STRING },
            },
            required: ['id', 'front', 'back'],
          },
        },
        quiz: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              question: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              correctAnswerIndex: { type: Type.INTEGER },
              explanation: { type: Type.STRING },
              hint: { type: Type.STRING },
            },
            required: ['id', 'question', 'options', 'correctAnswerIndex', 'explanation'],
          },
        },
        studyTips: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
        estimatedReadingTimeMinutes: { type: Type.INTEGER },
      },
      required: [
        'lessonTitle',
        'subjectArea',
        'overview',
        'simpleExplanation',
        'detailedSections',
        'summary',
        'keyPoints',
        'vocabulary',
        'flashcards',
        'quiz',
        'studyTips',
        'estimatedReadingTimeMinutes',
      ],
    };

    const result = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: contentsParts.length === 1 ? contentsParts[0].text : { parts: contentsParts },
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
        temperature: 0.3,
      },
    });

    const outputText = result.text || '{}';
    let parsedData;
    try {
      parsedData = JSON.parse(outputText);
    } catch (parseErr) {
      console.error('Failed to parse Gemini output as JSON:', outputText);
      return res.status(500).json({ error: 'Failed to process AI response. Please try again.' });
    }

    res.json(parsedData);
  } catch (error: any) {
    console.error('Error analyzing lesson:', error);
    res.status(500).json({
      error: error?.message || 'An unexpected error occurred while analyzing the lesson.',
    });
  }
});

// Start Server with Vite Middleware
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`QuizMaster Hub server running on http://localhost:${PORT}`);
  });
}

startServer();
