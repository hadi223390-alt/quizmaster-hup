export type Language = 'ar' | 'en';

export type GradeLevel = 'primary' | 'intermediate' | 'secondary' | 'university' | 'general';

export type QuizDifficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  hint?: string;
}

export interface KeyPoint {
  id: string;
  point: string;
  category?: string;
  importance: 'high' | 'medium';
}

export interface VocabularyTerm {
  term: string;
  definition: string;
  example?: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  mastered?: boolean;
}

export interface DetailedSection {
  title: string;
  content: string;
  keyTakeaway: string;
}

export interface LessonAnalysisResult {
  lessonTitle: string;
  subjectArea: string;
  overview: string;
  simpleExplanation: string;
  detailedSections: DetailedSection[];
  summary: string;
  keyPoints: KeyPoint[];
  vocabulary: VocabularyTerm[];
  flashcards: Flashcard[];
  quiz: Question[];
  studyTips: string[];
  estimatedReadingTimeMinutes: number;
}

export interface SavedLesson extends LessonAnalysisResult {
  id: string;
  createdAt: string;
  inputType: 'text' | 'image';
  sourceSnippet?: string;
  targetLanguage: Language;
  quizHighScore?: number;
  quizCompletedCount?: number;
  lastQuizScore?: {
    score: number;
    total: number;
    percentage: number;
    date: string;
  };
}

export type ActiveTab = 'explanation' | 'summary' | 'flashcards' | 'quiz' | 'print';

export interface QuizAttemptState {
  currentQuestionIndex: number;
  selectedAnswers: Record<number, number>; // questionIndex -> optionIndex
  showAnswerState: Record<number, boolean>;
  isCompleted: boolean;
  score: number;
  timeSpentSeconds: number;
  startedAt: string;
}
