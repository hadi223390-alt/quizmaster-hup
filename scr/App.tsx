import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { LessonInputPage } from './components/LessonInputPage';
import { LessonViewPage } from './components/LessonViewPage';
import { SavedLessonsPage } from './components/SavedLessonsPage';
import {
  Language,
  SavedLesson,
  LessonAnalysisResult,
} from './types';
import { translations } from './i18n';
import {
  getSavedLessons,
  saveLesson,
  deleteSavedLesson,
  updateLessonQuizScore,
  getSavedLanguage,
  saveLanguagePreference,
} from './utils/storage';
import { SamplePreset, SAMPLE_PRESETS } from './sampleLessons';

// Initial pre-loaded seed lesson so the app looks rich on first launch
const SEED_LESSON: SavedLesson = {
  id: 'seed-photosynthesis',
  createdAt: new Date().toISOString(),
  inputType: 'text',
  targetLanguage: 'ar',
  lessonTitle: 'عملية البناء الضوئي في النباتات',
  subjectArea: 'علم الأحياء والنبات',
  overview: 'اكتشف كيف تحول النباتات الخضراء أشعة الشمس والماء وثاني أكسيد الكربون إلى طاقة وغذاء وأكسجين نقي يدعم الحياة على كوكب الأرض.',
  simpleExplanation: `تخيل أن أوراق النبات هي عبارة عن "مطابخ شمسية صغيرة ومتقدمة للغاية"! ☀️🍃

1. استلام المكونات الأساسية:
يقوم النبات بامتصاص الماء من الجذور عبر الساق، ويستنشق غاز ثاني أكسيد الكربون من الهواء عبر فتحات دقيقة تسمى "الثغور".

2. تشغيل الموقد الشمسي:
تحتوي الخلايا النباتية على صبغة خضراء سحرية تسمى "الكلوروفيل" موجودة داخل البلاستيدات الخضراء. تمتص هذه الصبغة أشعة الشمس وتستخدم طاقتها كطاقة تشغيلية.

3. تحضير الوجبة (الجلوكوز والأكسجين):
يتم كسر روابط جزيئات الماء وثاني أكسيد الكربون لإنتاج نوع من السكر يسمى "الجلوكوز" وهو غذاء النبات، وبالمقابل يُطلق غاز الأكسجين في الهواء لنتنفسه جميعاً!`,
  detailedSections: [
    {
      title: 'التفاعلات الضوئية (داخل الثايلاكويد)',
      content: 'تحدث في وجود الضوء مباشرة، حيث يُمتص الفوتون الضوئي ويتم شطر جزيء الماء H2O منتجاً غاز الأكسجين وجزيئات الطاقة ATP و NADPH.',
      keyTakeaway: 'الضوء + الماء = أكسجين وطاقة خلوية سريعة.',
    },
    {
      title: 'تفاعلات الظلام / دورة كالفن (داخل الستروما)',
      content: 'لا تشترط وجود الضوء المباشر، وتستخدم الطاقة المخزونة لتثبيت غاز ثاني أكسيد الكربون وتحويله إلى سكر الجلوكوز C6H12O6.',
      keyTakeaway: 'تثبيت الكربون لصنع الغذاء النهائي.',
    },
  ],
  summary: `البناء الضوئي هو عملية تحويل الطاقة الضوئية إلى طاقة كيميائية مخزنة في الجلوكوز وفق المعادلة:
6CO2 + 6H2O + طاقة شمسية -> C6H12O6 + 6O2.
تعد هذه العملية الأساس لكل السلاسل الغذائية ومصدر الأكسجين الجوي والمنظم الأكبر لظاهرة الاحتباس الحراري.`,
  keyPoints: [
    {
      id: 'kp1',
      point: 'الكلوروفيل هو الصبغة الخضراء المسؤولة عن امتصاص الطاقة الضوئية.',
      category: 'الأصباغ النباتية',
      importance: 'high',
    },
    {
      id: 'kp2',
      point: 'المعادلة الإجمالية تتطلب 6 جزيئات CO2 و 6 جزيئات ماء لإنتاج جزيء جلوكوز و 6 جزيئات أكسجين.',
      category: 'المعادلات الكيميائية',
      importance: 'high',
    },
    {
      id: 'kp3',
      point: 'تحدث التفاعلات الضوئية في الثايلاكويد بينما تحدث دورة كالفن في الستروما.',
      category: 'مواقع التفاعل الخلوي',
      importance: 'medium',
    },
    {
      id: 'kp4',
      point: 'الأكسجين الناتج ينبعث أساساً من انشطار جزيء الماء وليس من ثاني أكسيد الكربون.',
      category: 'مصدر النواتج',
      importance: 'high',
    },
  ],
  vocabulary: [
    {
      term: 'البلاستيدات الخضراء (Chloroplasts)',
      definition: 'عضيات خلوية متخصصة في الخلايا النباتية تحتوي على الكلوروفيل وتقوم بالبناء الضوئي.',
      example: 'تتركز بكثافة في خلايا النسيج المتوسط لأوراق الشجر.',
    },
    {
      term: 'الكلوروفيل (Chlorophyll)',
      definition: 'صبغة بيولوجية تمتص الضوء الأزرق والأحمر وتعكس الضوء الأخضر.',
      example: 'هي السبب وراء اللون الأخضر للأشجار والنباتات.',
    },
    {
      term: 'دورة كالفن (Calvin Cycle)',
      definition: 'سلسلة من التفاعلات الكيميائية الحيوية المستقلة عن الضوء لتثبيت الكربون وصنع السكر.',
      example: 'تحدث في الحشوة (الستروما) داخل البلاستيدة.',
    },
  ],
  flashcards: [
    {
      id: 'fc1',
      front: 'ما هي النواتج النهائية لعملية البناء الضوئي؟',
      back: 'سكر الجلوكوز (C6H12O6) وغاز الأكسجين (O2).',
    },
    {
      id: 'fc2',
      front: 'أين تحدث التفاعلات الضوئية في البلاستيدة الخضراء؟',
      back: 'في أغشية الثايلاكويد (Thylakoid membranes).',
    },
    {
      id: 'fc3',
      front: 'ما هو دور صبغة الكلوروفيل؟',
      back: 'امتصاص الطاقة الضوئية من الشمس لبدء التفاعلات الكيميائية.',
    },
    {
      id: 'fc4',
      front: 'من أين يأتي غاز الأكسجين المنبعث أثناء البناء الضوئي؟',
      back: 'من انشطار جزيئات الماء (H2O) وليس من ثاني أكسيد الكربون.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: 'ما هي الصبغة الأساسية المسؤولة عن امتصاص الضوء في النباتات؟',
      options: ['الكلوروفيل', 'الميلانين', 'الهيموجلوبين', 'الكيراتين'],
      correctAnswerIndex: 0,
      explanation: 'الكلوروفيل هو الصبغة الخضراء الموجودة في البلاستيدات الخضراء والتي تمتص أطوال موجات الضوء اللازمة للبناء الضوئي.',
      hint: 'صبغة تعطي النبات لونه الأخضر المميز.',
    },
    {
      id: 'q2',
      question: 'ما هو المركب العضوي الرئيسي (السكر) الناتج عن عملية البناء الضوئي؟',
      options: ['الجلوكوز', 'اللاكتوز', 'السكروز المركب', 'الأحماض الدهنية'],
      correctAnswerIndex: 0,
      explanation: 'ينتج النبات سكر الجلوكوز (C6H12O6) كمصدر طاقة رئيسي ومخزون نشوي.',
      hint: 'سكر أحادي بسيط صيغته C6H12O6.',
    },
    {
      id: 'q3',
      question: 'أين تحدث تفاعلات دورة كالفن (تفاعلات الظلام) داخل الخلية؟',
      options: ['في الستروما (الحشوة)', 'في جدار الخلية', 'في غشاء الثايلاكويد', 'في الميتوكوندريا'],
      correctAnswerIndex: 0,
      explanation: 'تحدث دورة كالفن في الستروما (الحشوة السائلة المحيطة بالثايلاكويدات داخل البلاستيدة).',
      hint: 'السائل الداخلي للبلاستيدة الخضراء.',
    },
    {
      id: 'q4',
      question: 'ما هو المصدر المباشر لغاز الأكسجين (O2) الناتج في الهواء؟',
      options: ['انشطار جزيء الماء (H2O)', 'غاز ثاني أكسيد الكربون (CO2)', 'الجلوكوز', 'ضوء الشمس المباشر'],
      correctAnswerIndex: 0,
      explanation: 'أثبتت التجارب العلمية أن الأكسجين المتصاعد ينتج من التحلل المائي لجزيئات الماء أثناء التفاعلات الضوئية.',
      hint: 'المركب الذي يمتصه النبات من الجذور.',
    },
    {
      id: 'q5',
      question: 'أي من الغازات التالية يمتصه النبات من الغلاف الجوي لإتمام البناء الضوئي؟',
      options: ['ثاني أكسيد الكربون (CO2)', 'النيتروجين الخامل', 'الميثان', 'الهيليوم'],
      correctAnswerIndex: 0,
      explanation: 'يمتص النبات غاز ثاني أكسيد الكربون عبر الثغور لتثبيته في دورة كالفن.',
      hint: 'الغاز الذي نخرجه أثناء عملية الزفير.',
    },
  ],
  studyTips: [
    'تذكر المعادلة كقصة: 6 قطرات ماء + 6 أنفاس CO2 + لمسة شمس = سكر حلو + هواء نقي.',
    'اربط موقع التفاعل الضوئي: ثايلاكويد يبدأ بحرف الثاء وممتلئ بالضوء، بينما كالفن في الستروما كالحشوة الناعمة.',
  ],
  estimatedReadingTimeMinutes: 4,
  quizHighScore: 100,
  quizCompletedCount: 1,
  lastQuizScore: {
    score: 5,
    total: 5,
    percentage: 100,
    date: new Date().toLocaleDateString(),
  },
};

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [view, setView] = useState<'home' | 'input' | 'lesson' | 'history'>('home');
  const [savedLessons, setSavedLessons] = useState<SavedLesson[]>([]);
  const [activeLesson, setActiveLesson] = useState<SavedLesson | null>(null);

  // Initial preset text when jumping from sample card
  const [presetInputText, setPresetInputText] = useState<string>('');
  const [presetInputTitle, setPresetInputTitle] = useState<string>('');

  // Load language and saved lessons on mount
  useEffect(() => {
    const savedLang = getSavedLanguage();
    setLang(savedLang);
    updateHtmlAttrs(savedLang);

    const lessons = getSavedLessons();
    if (lessons.length === 0) {
      // Seed with initial high-quality lesson
      saveLesson(SEED_LESSON);
      setSavedLessons([SEED_LESSON]);
    } else {
      setSavedLessons(lessons);
    }
  }, []);

  const updateHtmlAttrs = (newLang: Language) => {
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const handleToggleLang = () => {
    const nextLang: Language = lang === 'ar' ? 'en' : 'ar';
    setLang(nextLang);
    saveLanguagePreference(nextLang);
    updateHtmlAttrs(nextLang);
  };

  const handleSelectLesson = (lesson: SavedLesson) => {
    setActiveLesson(lesson);
    setView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteLesson = (id: string) => {
    deleteSavedLesson(id);
    setSavedLessons((prev) => prev.filter((l) => l.id !== id));
    if (activeLesson?.id === id) {
      setActiveLesson(null);
      setView('home');
    }
  };

  const handleUpdateQuizScore = (lessonId: string, score: number, total: number) => {
    updateLessonQuizScore(lessonId, score, total);
    setSavedLessons(getSavedLessons());
    if (activeLesson && activeLesson.id === lessonId) {
      const updated = getSavedLessons().find((l) => l.id === lessonId);
      if (updated) {
        setActiveLesson(updated);
      }
    }
  };

  const handleAnalysisComplete = (
    result: LessonAnalysisResult,
    meta: {
      title: string;
      inputType: 'text' | 'image';
      targetLanguage: Language;
      sourceSnippet: string;
    }
  ) => {
    const newLesson: SavedLesson = {
      ...result,
      id: `lesson-${Date.now()}`,
      createdAt: new Date().toISOString(),
      inputType: meta.inputType,
      targetLanguage: meta.targetLanguage,
      sourceSnippet: meta.sourceSnippet,
    };

    saveLesson(newLesson);
    setSavedLessons(getSavedLessons());
    setActiveLesson(newLesson);
    setView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSamplePreset = (preset: SamplePreset) => {
    const text = lang === 'ar' ? preset.contentAr : preset.contentEn;
    const title = lang === 'ar' ? preset.titleAr : preset.titleEn;
    setPresetInputText(text);
    setPresetInputTitle(title);
    setView('input');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartNewLesson = () => {
    setPresetInputText('');
    setPresetInputTitle('');
    setView('input');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        currentView={view}
        onNavigate={(newView) => {
          if (newView === 'input') {
            handleStartNewLesson();
          } else {
            setView(newView);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        hasActiveLesson={!!activeLesson}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {view === 'home' && (
          <HomePage
            lang={lang}
            savedLessons={savedLessons}
            onStartNewLesson={handleStartNewLesson}
            onSelectLesson={handleSelectLesson}
            onDeleteLesson={handleDeleteLesson}
            onSelectSamplePreset={handleSelectSamplePreset}
          />
        )}

        {view === 'input' && (
          <LessonInputPage
            lang={lang}
            initialPresetText={presetInputText}
            initialPresetTitle={presetInputTitle}
            onAnalysisComplete={handleAnalysisComplete}
          />
        )}

        {view === 'lesson' && activeLesson && (
          <LessonViewPage
            lesson={activeLesson}
            lang={lang}
            onUpdateQuizScore={handleUpdateQuizScore}
            onStartNewLesson={handleStartNewLesson}
            onBackToHome={() => setView('home')}
          />
        )}

        {view === 'history' && (
          <SavedLessonsPage
            lang={lang}
            savedLessons={savedLessons}
            onSelectLesson={handleSelectLesson}
            onDeleteLesson={handleDeleteLesson}
            onStartNewLesson={handleStartNewLesson}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="no-print border-t border-slate-200 bg-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-indigo-900">QuizMaster Hub</span>
            <span>•</span>
            <span>{t.appTagline}</span>
          </div>

          <div>
            <span className="text-slate-400">{lang === 'ar' ? 'منصة دراسية ذكية للطلاب' : 'AI-Powered Study & Quiz Platform'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
