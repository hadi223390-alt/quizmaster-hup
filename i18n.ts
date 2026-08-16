import { Language } from './types';

export interface Translations {
  appName: string;
  appTagline: string;
  navHome: string;
  navNewLesson: string;
  navSavedLessons: string;
  languageToggle: string;
  
  // Home page
  welcomeTitle: string;
  welcomeSubtitle: string;
  startNowBtn: string;
  browseHistoryBtn: string;
  statsLessons: string;
  statsQuizzes: string;
  statsAvgScore: string;
  featuresTitle: string;
  featureExplainTitle: string;
  featureExplainDesc: string;
  featureSummaryTitle: string;
  featureSummaryDesc: string;
  featureQuizTitle: string;
  featureQuizDesc: string;
  featureFlashcardsTitle: string;
  featureFlashcardsDesc: string;
  sampleLessonsTitle: string;
  trySampleBtn: string;
  recentLessonsTitle: string;
  noRecentLessons: string;
  viewLessonBtn: string;
  deleteLessonBtn: string;
  confirmDelete: string;
  
  // Input page
  inputPageTitle: string;
  inputPageSubtitle: string;
  lessonTitleLabel: string;
  lessonTitlePlaceholder: string;
  tabPasteText: string;
  tabUploadImage: string;
  pasteTextLabel: string;
  pasteTextPlaceholder: string;
  uploadPrompt: string;
  uploadSubprompt: string;
  uploadDragDrop: string;
  uploadSupportedFormats: string;
  uploadedFilePreview: string;
  removeUploadedFile: string;
  
  // Customization options
  settingsSectionTitle: string;
  gradeLevelLabel: string;
  gradePrimary: string;
  gradeIntermediate: string;
  gradeSecondary: string;
  gradeUniversity: string;
  gradeGeneral: string;
  quizDifficultyLabel: string;
  diffEasy: string;
  diffMedium: string;
  diffHard: string;
  questionCountLabel: string;
  outputLanguageLabel: string;
  
  // Action buttons
  analyzeBtn: string;
  analyzingBtn: string;
  analyzingStep1: string;
  analyzingStep2: string;
  analyzingStep3: string;
  analyzingStep4: string;
  fillSampleBtn: string;
  clearBtn: string;
  
  // Lesson view tabs
  tabExplanation: string;
  tabSummary: string;
  tabFlashcards: string;
  tabQuiz: string;
  tabPrint: string;
  
  // Explanation tab
  overviewTitle: string;
  simpleExplanationTitle: string;
  detailedBreakdownTitle: string;
  readAloudBtn: string;
  stopAudioBtn: string;
  keyTakeawayLabel: string;
  studyTipsTitle: string;
  
  // Summary tab
  summaryTitle: string;
  keyPointsTitle: string;
  importanceHigh: string;
  importanceMedium: string;
  vocabularyTitle: string;
  termDefinitionLabel: string;
  termExampleLabel: string;
  
  // Flashcards tab
  flashcardsTitle: string;
  flashcardsSubtitle: string;
  cardCount: string;
  flipCardPrompt: string;
  markMastered: string;
  masteredBadge: string;
  prevCardBtn: string;
  nextCardBtn: string;
  resetCardsBtn: string;
  shuffleCardsBtn: string;
  
  // Quiz tab
  quizTitle: string;
  quizSubtitle: string;
  startQuizBtn: string;
  restartQuizBtn: string;
  questionNumber: string;
  checkAnswerBtn: string;
  nextQuestionBtn: string;
  finishQuizBtn: string;
  showExplanationBtn: string;
  hideExplanationBtn: string;
  correctAnswerAlert: string;
  wrongAnswerAlert: string;
  explanationLabel: string;
  hintLabel: string;
  scoreTitle: string;
  scoreHighMsg: string;
  scoreMidMsg: string;
  scoreLowMsg: string;
  retryQuizBtn: string;
  reviewAnswersBtn: string;
  timeSpentLabel: string;
  
  // Print view
  printDocTitle: string;
  printDocBtn: string;
  backToLessonBtn: string;
  
  // Common
  loading: string;
  errorTitle: string;
  errorMessage: string;
  backToHome: string;
  minutesRead: string;
  newBadge: string;
  highScoreBadge: string;
}

export const translations: Record<Language, Translations> = {
  ar: {
    appName: 'QuizMaster Hub',
    appTagline: 'مركز كويز ماستر للدراسة الذكية',
    navHome: 'الرئيسية',
    navNewLesson: 'درس جديد',
    navSavedLessons: 'دروسي المحفوظة',
    languageToggle: 'English',
    
    welcomeTitle: 'حوّل أي درس إلى ملخص واختبار تفاعلي بذكاء',
    welcomeSubtitle: 'اكتب عنوان الدرس، الصق الشرح أو ارفع صورة لصفحة الكتاب وسيقوم الذكاء الاصطناعي بشرحه بأسلوب ميسر وتوليد ملخص وأسئلة ذكية.',
    startNowBtn: 'ابدأ دراسة درس جديد',
    browseHistoryBtn: 'سجل الدروس السابقة',
    statsLessons: 'دروس تم تحليلها',
    statsQuizzes: 'اختبارات تم إنجازها',
    statsAvgScore: 'متوسط الدرجات',
    featuresTitle: 'كيف يساعدك كويز ماستر؟',
    featureExplainTitle: 'شرح مبسط وممتع',
    featureExplainDesc: 'تبسيط المفاهيم الصعبة بأمثلة من واقع الحياة تناسب مستواك الدراسي.',
    featureSummaryTitle: 'ملخص ونقاط أساسية',
    featureSummaryDesc: 'استخراج الأفكار الجوهرية والمصطلحات لترسيخ المعلومات بسرعة.',
    featureQuizTitle: 'اختبارات اختيار من متعدد',
    featureQuizDesc: 'اختبارات تفاعلية مع تفسير فوري لكل إجابة لتعزيز الفهم والتقييم الذاتي.',
    featureFlashcardsTitle: 'بطاقات حفظ ومراجعة',
    featureFlashcardsDesc: 'بطاقات ذكية للمصطلحات والمفاهيم لتسريع الحفظ قبل الامتحانات.',
    sampleLessonsTitle: 'نماذج جاهزة للتجربة السريعة',
    trySampleBtn: 'جرب هذا الدرس',
    recentLessonsTitle: 'آخر الدروس التي درستها',
    noRecentLessons: 'لم تدرس أي درس بعد. ابدأ الآن بإدخال درسك الأول!',
    viewLessonBtn: 'فتح الدرس',
    deleteLessonBtn: 'حذف',
    confirmDelete: 'هل أنت متأكد من حذف هذا الدرس؟',
    
    inputPageTitle: 'إدخال محتوى الدرس',
    inputPageSubtitle: 'الصق النص أو ارفع صورة لصفحة من كتابك المدرسي وسنتكفل بالباقي',
    lessonTitleLabel: 'عنوان الدرس أو الموضوع (اختياري)',
    lessonTitlePlaceholder: 'مثال: التمثيل الضوئي في النباتات، قوانين نيوتن، الحضارة الإسلامية...',
    tabPasteText: '📝 كتابة أو لصق نص الدرس',
    tabUploadImage: '📷 رفع صورة أو مستند صفحة الكتاب',
    pasteTextLabel: 'نص الدرس',
    pasteTextPlaceholder: 'الصق فقرات الدرس أو الملاحظات هنا ليقوم الذكاء الاصطناعي بتحليلها بالكامل...',
    uploadPrompt: 'اسحب وأفلت صورة صفحة الكتاب هنا، أو انقر للاختيار',
    uploadSubprompt: 'يدعم صور الكتب والمذكرات والمستندات (PNG, JPG, WEBP)',
    uploadDragDrop: 'أفلت الصورة هنا للرفع',
    uploadSupportedFormats: 'حجم أقصى 10 ميجابايت',
    uploadedFilePreview: 'معاينة الملف المرفوع',
    removeUploadedFile: 'إزالة الصورة',
    
    settingsSectionTitle: 'خيارات التخصيص للدراسة',
    gradeLevelLabel: 'المستوى الدراسي',
    gradePrimary: 'ابتدائي',
    gradeIntermediate: 'متوسط / إعدادي',
    gradeSecondary: 'ثانوي',
    gradeUniversity: 'جامعي',
    gradeGeneral: 'عام / للجميع',
    quizDifficultyLabel: 'مستوى صعوبة الاختبار',
    diffEasy: 'سهل ومباشر',
    diffMedium: 'متوسط ومتوازن',
    diffHard: 'متقدم وتحدي',
    questionCountLabel: 'عدد أسئلة الاختبار',
    outputLanguageLabel: 'لغة التحليل والشرح',
    
    analyzeBtn: '✨ ابدأ الشرح وتوليد الاختبار',
    analyzingBtn: 'جاري القراءة والتحليل الذكي...',
    analyzingStep1: 'قراءة محتوى الدرس والمستندات...',
    analyzingStep2: 'تبسيط الشرح واستخراج الأفكار الأساسية...',
    analyzingStep3: 'صياغة ملخص ذكي وبطاقات تعليمية...',
    analyzingStep4: 'توليد أسئلة الاختبار التفاعلية وتجهيز الإجابات...',
    fillSampleBtn: 'تعبئة بنموذج تجريبي',
    clearBtn: 'مسح الحقول',
    
    tabExplanation: '💡 الشرح المبسط',
    tabSummary: '📑 الملخص والمفاهيم',
    tabFlashcards: '📇 بطاقات الحفظ',
    tabQuiz: '🎯 الاختبار التفاعلي',
    tabPrint: '🖨️ ورقة المراجعة',
    
    overviewTitle: 'نظرة عامة على الدرس',
    simpleExplanationTitle: 'الشرح المبسط خطوة بخطوة',
    detailedBreakdownTitle: 'تفصيل المفاهيم الرئيسية',
    readAloudBtn: 'استمع للشرح صوتياً',
    stopAudioBtn: 'إيقاف الصوت',
    keyTakeawayLabel: 'الفكرة الأساسية:',
    studyTipsTitle: 'نصائح ذكية لحفظ واستيعاب هذا الدرس',
    
    summaryTitle: 'ملخص الدرس الشامل',
    keyPointsTitle: 'النقاط الأكثر أهمية (للمراجعة السريعة)',
    importanceHigh: 'مهم جداً',
    importanceMedium: 'مهم',
    vocabularyTitle: 'المصطلحات والمفاهيم العلمية',
    termDefinitionLabel: 'التعريف:',
    termExampleLabel: 'مثال توضيحي:',
    
    flashcardsTitle: 'بطاقات المراجعة السريعة',
    flashcardsSubtitle: 'انقر على البطاقة لقلبها ومعرفة الإجابة والمفهوم',
    cardCount: 'بطاقة',
    flipCardPrompt: 'انقر لقلب البطاقة 🔄',
    markMastered: 'حفظتها وتم الإتقان ✓',
    masteredBadge: 'تم الحفظ 🌟',
    prevCardBtn: 'السابق',
    nextCardBtn: 'التالي',
    resetCardsBtn: 'إعادة ضبط التقدم',
    shuffleCardsBtn: 'خلط البطاقات',
    
    quizTitle: 'اختبار تقييم الفهم',
    quizSubtitle: 'أجب على الأسئلة التالية لقياس مدى استيعابك للنقاط الجوهرية في الدرس',
    startQuizBtn: 'ابدأ الاختبار الآن',
    restartQuizBtn: 'إعادة الاختبار من جديد',
    questionNumber: 'السؤال',
    checkAnswerBtn: 'تأكيد الإجابة',
    nextQuestionBtn: 'السؤال التالي',
    finishQuizBtn: 'عرض النتيجة النهائية',
    showExplanationBtn: 'لماذا هذه الإجابة؟',
    hideExplanationBtn: 'إخفاء التفسير',
    correctAnswerAlert: 'إجابة صحيحة! أحسنت 👏',
    wrongAnswerAlert: 'إجابة خاطئة. راجع التفسير أدناه لتعلم الصواب.',
    explanationLabel: 'تفسير الإجابة:',
    hintLabel: 'تلميح:',
    scoreTitle: 'نتيجتك في الاختبار',
    scoreHighMsg: 'ممتاز ورائع جداً! استيعابك للموضوع فائق 🌟🎓',
    scoreMidMsg: 'أداء جيد جداً! راجع النقاط التي أخطأت فيها لتصل لعلامة كاملة 👍',
    scoreLowMsg: 'لا بأس، التدريب سر النجاح! اقرأ الشرح المبسط مرة أخرى وحاول ثانية 💪',
    retryQuizBtn: 'إعادة الاختبار لتحسين الدرجة',
    reviewAnswersBtn: 'مراجعة جميع الأسئلة والإجابات',
    timeSpentLabel: 'الوقت المستغرق',
    
    printDocTitle: 'ورقة ملخص واختبار الدرس',
    printDocBtn: 'طباعة أو حفظ كملف PDF',
    backToLessonBtn: 'العودة للدرس',
    
    loading: 'جاري التحميل...',
    errorTitle: 'حدث خطأ في التحليل',
    errorMessage: 'يرجى التحقق من اتصالك والمحاولة مرة أخرى أو التأكد من إدخال نص كافٍ.',
    backToHome: 'العودة للرئيسية',
    minutesRead: 'دقيقة قراءة',
    newBadge: 'جديد',
    highScoreBadge: 'أعلى درجة',
  },
  en: {
    appName: 'QuizMaster Hub',
    appTagline: 'Smart Student Study & Quiz Platform',
    navHome: 'Home',
    navNewLesson: 'New Lesson',
    navSavedLessons: 'My Lessons',
    languageToggle: 'العربية',
    
    welcomeTitle: 'Turn Any Lesson into a Simplified Guide & Quiz with AI',
    welcomeSubtitle: 'Enter a lesson topic, paste textbook text, or upload a textbook photo. AI will simplify concepts, extract key points, and generate interactive quizzes.',
    startNowBtn: 'Start New Lesson',
    browseHistoryBtn: 'Study History',
    statsLessons: 'Lessons Studied',
    statsQuizzes: 'Quizzes Taken',
    statsAvgScore: 'Average Score',
    featuresTitle: 'How QuizMaster Hub Helps You',
    featureExplainTitle: 'Simple Explanations',
    featureExplainDesc: 'Break down tough concepts with friendly, relatable real-world analogies tailored to your grade level.',
    featureSummaryTitle: 'Summaries & Key Points',
    featureSummaryDesc: 'Extract core takeaways and glossaries so you can revise quickly before exams.',
    featureQuizTitle: 'Multiple-Choice Quizzes',
    featureQuizDesc: 'Interactive MCQ quizzes with immediate explanations for every option to solidify understanding.',
    featureFlashcardsTitle: 'Revision Flashcards',
    featureFlashcardsDesc: 'Interactive cards for vocabulary and definitions to boost long-term retention.',
    sampleLessonsTitle: 'Quick-Start Sample Lessons',
    trySampleBtn: 'Try This Lesson',
    recentLessonsTitle: 'Recently Studied Lessons',
    noRecentLessons: 'No lessons studied yet. Start with your first lesson now!',
    viewLessonBtn: 'Open Lesson',
    deleteLessonBtn: 'Delete',
    confirmDelete: 'Are you sure you want to delete this lesson?',
    
    inputPageTitle: 'Enter Lesson Content',
    inputPageSubtitle: 'Paste your notes or upload a photo of your textbook page',
    lessonTitleLabel: 'Lesson Title or Topic (Optional)',
    lessonTitlePlaceholder: 'e.g. Photosynthesis in Plants, Newton Laws, The French Revolution...',
    tabPasteText: '📝 Paste or Type Text',
    tabUploadImage: '📷 Upload Textbook Photo / Document',
    pasteTextLabel: 'Lesson Text',
    pasteTextPlaceholder: 'Paste your lesson text, study notes, or textbook chapter here...',
    uploadPrompt: 'Drag and drop your textbook page photo here, or click to browse',
    uploadSubprompt: 'Supports photos of book pages and study notes (PNG, JPG, WEBP)',
    uploadDragDrop: 'Drop image here to upload',
    uploadSupportedFormats: 'Maximum file size: 10MB',
    uploadedFilePreview: 'Uploaded Page Preview',
    removeUploadedFile: 'Remove Image',
    
    settingsSectionTitle: 'Study Customization Options',
    gradeLevelLabel: 'Grade / Target Level',
    gradePrimary: 'Elementary / Primary',
    gradeIntermediate: 'Middle / Intermediate',
    gradeSecondary: 'High School / Secondary',
    gradeUniversity: 'University / College',
    gradeGeneral: 'General / All Levels',
    quizDifficultyLabel: 'Quiz Difficulty',
    diffEasy: 'Easy & Direct',
    diffMedium: 'Balanced / Medium',
    diffHard: 'Advanced / Challenging',
    questionCountLabel: 'Number of Quiz Questions',
    outputLanguageLabel: 'Explanation & Quiz Language',
    
    analyzeBtn: '✨ Explain & Generate Quiz',
    analyzingBtn: 'Analyzing Content with AI...',
    analyzingStep1: 'Reading lesson content and documents...',
    analyzingStep2: 'Simplifying explanations and extracting ideas...',
    analyzingStep3: 'Crafting summaries and flashcards...',
    analyzingStep4: 'Generating interactive quiz questions and feedback...',
    fillSampleBtn: 'Fill Sample Lesson',
    clearBtn: 'Clear Fields',
    
    tabExplanation: '💡 Simple Explanation',
    tabSummary: '📑 Summary & Concepts',
    tabFlashcards: '📇 Flashcards',
    tabQuiz: '🎯 Interactive Quiz',
    tabPrint: '🖨️ Study Sheet',
    
    overviewTitle: 'Lesson Overview',
    simpleExplanationTitle: 'Step-by-Step Simplified Explanation',
    detailedBreakdownTitle: 'Key Concept Breakdown',
    readAloudBtn: 'Listen to Explanation (Audio)',
    stopAudioBtn: 'Stop Audio',
    keyTakeawayLabel: 'Key Takeaway:',
    studyTipsTitle: 'Smart Study Tips to Master This Topic',
    
    summaryTitle: 'Comprehensive Summary',
    keyPointsTitle: 'Most Important Points (Quick Review)',
    importanceHigh: 'High Priority',
    importanceMedium: 'Important',
    vocabularyTitle: 'Key Vocabulary & Terms',
    termDefinitionLabel: 'Definition:',
    termExampleLabel: 'Example:',
    
    flashcardsTitle: 'Quick Revision Flashcards',
    flashcardsSubtitle: 'Click any card to flip and reveal the answer & definition',
    cardCount: 'cards',
    flipCardPrompt: 'Click to flip 🔄',
    markMastered: 'Mastered ✓',
    masteredBadge: 'Mastered 🌟',
    prevCardBtn: 'Previous',
    nextCardBtn: 'Next',
    resetCardsBtn: 'Reset Progress',
    shuffleCardsBtn: 'Shuffle Cards',
    
    quizTitle: 'Knowledge Check Quiz',
    quizSubtitle: 'Answer the questions below to test your understanding of core concepts',
    startQuizBtn: 'Start Quiz Now',
    restartQuizBtn: 'Restart Quiz',
    questionNumber: 'Question',
    checkAnswerBtn: 'Submit Answer',
    nextQuestionBtn: 'Next Question',
    finishQuizBtn: 'View Results',
    showExplanationBtn: 'Why this answer?',
    hideExplanationBtn: 'Hide Explanation',
    correctAnswerAlert: 'Correct! Excellent job 👏',
    wrongAnswerAlert: 'Not quite. Check the explanation below to learn why.',
    explanationLabel: 'Explanation:',
    hintLabel: 'Hint:',
    scoreTitle: 'Your Quiz Score',
    scoreHighMsg: 'Outstanding performance! You have mastered this lesson 🌟🎓',
    scoreMidMsg: 'Great job! Review a few tricky points to reach 100% 👍',
    scoreLowMsg: 'Good effort! Read the simplified explanation and try again 💪',
    retryQuizBtn: 'Retake Quiz to Improve',
    reviewAnswersBtn: 'Review All Questions & Answers',
    timeSpentLabel: 'Time Spent',
    
    printDocTitle: 'Study Sheet & Quiz Summary',
    printDocBtn: 'Print or Save as PDF',
    backToLessonBtn: 'Back to Lesson',
    
    loading: 'Loading...',
    errorTitle: 'Analysis Error',
    errorMessage: 'Please check your connection and try again with sufficient text.',
    backToHome: 'Back to Home',
    minutesRead: 'min read',
    newBadge: 'New',
    highScoreBadge: 'High Score',
  }
};
