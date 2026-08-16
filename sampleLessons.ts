export interface SamplePreset {
  id: string;
  titleAr: string;
  titleEn: string;
  subjectAr: string;
  subjectEn: string;
  category: 'science' | 'physics' | 'history' | 'tech';
  icon: string;
  contentAr: string;
  contentEn: string;
}

export const SAMPLE_PRESETS: SamplePreset[] = [
  {
    id: 'photosynthesis',
    titleAr: 'عملية البناء الضوئي في النباتات',
    titleEn: 'Photosynthesis in Green Plants',
    subjectAr: 'أحياء وعلم النبات',
    subjectEn: 'Biology & Botany',
    category: 'science',
    icon: '🌱',
    contentAr: `عملية البناء الضوئي (التمثيل الضوئي) هي العملية الحيوية الأساسية التي تقوم بها النباتات الخضراء وبعض الكائنات الدقيقة لتحويل الطاقة الضوئية القادمة من الشمس إلى طاقة كيميائية مخزنة في جزيئات الجلوكوز (السكر).
تحدث هذه العملية داخل عضيات خلوية متخصصة تسمى "البلاستيدات الخضراء" (Chloroplasts)، والتي تحتوي على صبغة الكلوروفيل المسؤولة عن امتصاص الضوء الأخضر.
المعادلة الكيميائية الإجمالية:
6CO2 (ثاني أكسيد الكربون) + 6H2O (الماء) + طاقة ضوئية -> C6H12O6 (الجلوكوز) + 6O2 (الأكسجين).
مراحل العملية:
1. التفاعلات الضوئية: تحدث في أغشية الثايلاكويد، حيث يُمتص الضوء ويتم شطر جزيئات الماء لتوليد غاز الأكسجين وجزيئات الطاقة (ATP و NADPH).
2. تفاعلات الظلام (دورة كالفن): تحدث في الستروما (الحشوة)، حيث يُستخدم ثاني أكسيد الكربون مع الطاقة الناتجة لإنتاج سكر الجلوكوز.
أهمية البناء الضوئي:
- إنتاج الأكسجين اللازم لتنفس الكائنات الحية.
- تكوين الغذاء الأساسي الذي يمثل قاعدة السلاسل والشبكات الغذائية على كوكب الأرض.
- خفض نسبة غاز ثاني أكسيد الكربون في الغلاف الجوي مما يحد من ظاهرة الاحتباس الحراري.`,
    contentEn: `Photosynthesis is the fundamental biological process by which green plants, algae, and certain bacteria convert light energy from the sun into chemical energy stored in glucose molecules.
This process occurs inside specialized plant cell organelles called Chloroplasts, which contain the green pigment chlorophyll that absorbs sunlight.
The overall chemical equation:
6CO2 (Carbon Dioxide) + 6H2O (Water) + Light Energy -> C6H12O6 (Glucose) + 6O2 (Oxygen).
The two main stages:
1. Light-Dependent Reactions: Take place in the thylakoid membranes, where sunlight is captured and water molecules are split to release oxygen gas and generate energy carriers (ATP and NADPH).
2. Light-Independent Reactions (The Calvin Cycle): Take place in the stroma, where carbon dioxide is fixed using the energy carriers to synthesize high-energy glucose.
Significance:
- Produces the oxygen required for aerobic respiration by living organisms.
- Forms the primary foundation of food webs on Earth.
- Regulates atmospheric CO2 levels, helping stabilize global climate.`
  },
  {
    id: 'newton-laws',
    titleAr: 'قوانين نيوتن الثلاثة للحركة',
    titleEn: "Newton's Three Laws of Motion",
    subjectAr: 'فيزياء وميكانيكا',
    subjectEn: 'Physics & Mechanics',
    category: 'physics',
    icon: '⚡',
    contentAr: `تعتبر قوانين نيوتن للحركة أساس الميكانيكا الكلاسيكية، وصاغها العالم السير إسحاق نيوتن عام 1687 لتفسير حركة الأجسام والقوى المؤثرة عليها.
1. القانون الأول (قانون القصور الذاتي):
"يبقى الجسم الساكن ساكناً، والجسم المتحرك في خط مستقيم وبسرعة ثابتة يستمر في حركته، ما لم تؤثر عليه قوة محصلة خارجية تجبره على تغيير حالته".
القصور الذاتي هو ميل الجسم لمقاومة أي تغير في حالته الحركية. مثال: اندفاع الركاب للأمام عند توقف الحافلة فجأة.
2. القانون الثاني (قانون التسارع والقوة):
"إذا أثرت قوة محصلة على جسم فإنها تكسبه تسارعاً يتناسب طردياً مع القوة المؤثرة وعكسياً مع كتلته".
الصيغة الرياضية: القوة (F) = الكتلة (m) × التسارع (a).
وحدة القياس: النيوتن (Newton) = كغم . م / ث².
3. القانون الثالث (قانون الفعل ورد الفعل):
"لكل فعل رد فعل، مساوٍ له في المقدار ومضاد له في الاتجاه".
القوتان تؤثران على جسمين مختلفين في نفس اللحظة. مثال: اندفاع الصاروخ للأعلى نتيجة اندفاع الغازات المحترقة للأسفل، أو السباحة في الماء.`,
    contentEn: `Sir Isaac Newton formulated the three classical laws of motion in 1687, forming the foundation of classical mechanics and describing how physical objects interact with forces.
1. First Law (Law of Inertia):
"An object at rest stays at rest and an object in motion continues in motion with a constant velocity along a straight line unless acted upon by a net external force."
Inertia is the natural resistance of any physical object to any change in its velocity. Example: Passengers lurching forward when a bus brakes suddenly.
2. Second Law (Force and Acceleration):
"The acceleration of an object is directly proportional to the net force acting upon it and inversely proportional to its mass."
Mathematical formula: Force (F) = mass (m) × acceleration (a).
Unit of measurement: Newton (N) = kg·m/s².
3. Third Law (Action and Reaction):
"For every action, there is an equal and opposite reaction."
Action and reaction forces always act on two different bodies simultaneously. Examples include rocket propulsion (hot exhaust gas pushes down, rocket accelerates upward) and swimming.`
  },
  {
    id: 'water-cycle',
    titleAr: 'دورة الماء في الطبيعة والتغير المناخي',
    titleEn: 'The Natural Water Cycle & Climate',
    subjectAr: 'علوم الأرض والبيئة',
    subjectEn: 'Earth & Environmental Science',
    category: 'science',
    icon: '💧',
    contentAr: `دورة الماء (الدورة الهيدرولوجية) هي الحركة الدائرية المستمرة للمياه بين المحيطات والغلاف الجوي واليابسة على كوكب الأرض.
المراحل الرئيسية لدورة الماء:
1. التبخر (Evaporation): تسخن أشعة الشمس المياه في البحار والمحيطات والبحيرات فتتحول من الحالة السائلة إلى بخار ماء يصعد للأعلى. ويشمل أيضاً عملية النتح (Transpiration) من أوراق النباتات.
2. التكثف (Condensation): مع صعود بخار الماء لطبقات الجو العليا الباردة، يبرد ويتحول إلى قطرات ماء صغيرة تتجمع لتشكل الغيوم والسحب.
3. الهطول (Precipitation): عندما تصبح قطرات الماء في الغيوم ثقيلة جداً، تسقط على الأرض على شكل مطر أو ثلج أو برد.
4. الجريان السطحي والارتشاح (Runoff & Infiltration): تجري المياه الساقطة على سطح الأرض نحو الأنهار والبحار، بينما يتسرب جزء منها لداخل التربة ليغذي المياه الجوفية.
تعد دورة الماء من أهم العمليات الحيوية لأنها تنقي المياه طبيعياً وتوزع الحرارة عبر الكوكب وتدعم جميع أشكال الحياة.`,
    contentEn: `The water cycle (hydrological cycle) describes the continuous movement of water on, above, and below the surface of the Earth.
Key stages of the cycle:
1. Evaporation & Transpiration: Solar energy heats surface water in oceans and lakes, transforming liquid water into water vapor that rises into the atmosphere. Plants also release water vapor through stomata via transpiration.
2. Condensation: As rising warm water vapor reaches colder altitudes, it cools and condenses into microscopic water droplets, forming clouds and fog.
3. Precipitation: When cloud droplets coalesce and become too heavy to remain suspended, they fall to Earth as rain, snow, sleet, or hail.
4. Runoff & Infiltration: Precipitation flows over land as surface runoff back into streams, rivers, and oceans, while some percolates deep into soil layers to replenish underground aquifers.
The water cycle purifies water naturally and redistributes solar heat across Earth.`
  }
];
