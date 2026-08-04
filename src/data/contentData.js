export const navItems = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#agri-tech', label: 'الزراعة والثروة الحيوانية' },
  { href: '#tech-services', label: 'خدماتنا التقنية' },
  { href: '#workflows', label: 'المنصة المحلية' },
  { href: '#achievements', label: 'إنجازاتنا' },
  { href: '#trust', label: 'لماذا قريب' },
  { href: '#contact', label: 'تواصل معنا' },
];

// 1. AgriTech & Livestock Features (من الكروت البصرية 1، 2، 3، 4، 5)
export const agriSolutions = [
  {
    id: 'crop-mgmt',
    iconName: 'Sprout',
    title: 'إدارة المزارع والمحاصيل',
    desc: 'تحليل صحة النبات والتربة، توصيات مخصصة، وجدولة الري لزيادة إنتاجية المحاصيل.',
    tag: 'ذكاء اصطناعي'
  },
  {
    id: 'livestock-mgmt',
    iconName: 'PawPrint',
    title: 'إدارة الثروة الحيوانية',
    desc: 'متابعة الحالة الصحية للقطعان، التغذية المقترحة، والتطعيمات لرفع الكفاءة والإنتاجية.',
    tag: 'رعاية فائقة'
  },
  {
    id: 'smart-irrigation',
    iconName: 'Droplets',
    title: 'ري ذكي وتوفير الموارد',
    desc: 'أنظمة الاستشعار الذكية لتوفير استهلاك المياه وخفض التكاليف التشغيلية بنسبة 30%.',
    tag: 'استدامة'
  },
  {
    id: 'iot-sensors',
    iconName: 'Cpu',
    title: 'إنترنت الأشياء والحساسات (IoT)',
    desc: 'ربط المزرعة بحساسات ذكية لمراقبة الرطوبة، الحرارة، والطقس في الوقت الفعلي.',
    tag: 'تقنية حديثة'
  },
  {
    id: 'ai-analytics',
    iconName: 'LineChart',
    title: 'تحليلات وتقارير تنبؤية',
    desc: 'تقارير ذكية مدعومة بالذكاء الاصطناعي لمساعدتك على اتخاذ القرارات الزراعية والمالية السليمة.',
    tag: 'قرارات دقيقة'
  },
  {
    id: 'feed-inventory',
    iconName: 'Boxes',
    title: 'إدارة الأعلاف والمخزون',
    desc: 'تتبع المخزون، المشتريات، والموردين بمرونة وسهولة مع تنبيهات عند النقص.',
    tag: 'إدارة شاملة'
  },
  {
    id: 'machinery-gps',
    iconName: 'Tractor',
    title: 'تتبع وصيانة المعدات (GPS)',
    desc: 'تتبع الآلات الزراعية، جدولة الصيانة الدورية، ومتابعة استهلاك الوقود.',
    tag: 'تتبع GPS'
  },
  {
    id: 'agri-market',
    iconName: 'Store',
    title: 'سوق المزارعين المباشر',
    desc: 'منصة مفتوحة لبيع وشراء المحاصيل، الأعلاف والمستلزمات الزراعية بدون وسطاء.',
    tag: 'سوق مفتوح'
  }
];

// 2. Specialized Tech Services (من الكارت الأول)
export const techServices = [
  {
    iconName: 'LayoutDashboard',
    title: 'أنظمة إدارة المزارع والثروة الحيوانية',
    desc: 'تطبيقات وأنظمة متكاملة تساعد الشركات والمزارع على إدارة أعمالهم بكفاءة واستدامة.'
  },
  {
    iconName: 'Compass',
    title: 'تتبع المركبات والمعدات (GPS)',
    desc: 'أنظمة تتبع الجغرافيا والمعدات الثقيلة لرفع الكفاءة التشغيلية للأصول.'
  },
  {
    iconName: 'Radio',
    title: 'إنترنت الأشياء (IoT) والحساسات',
    desc: 'حلول ربط أجهزة الاستشعار بالمزارع والبيوت المحمية لمتابعة المناخ والتربة.'
  },
  {
    iconName: 'BrainCircuit',
    title: 'حلول الذكاء الاصطناعي التنبؤية',
    desc: 'بناء نماذج تشخيص الأمراض والآفات الزراعية والتنبؤ بالإنتاجية بدقة.'
  },
  {
    iconName: 'Smartphone',
    title: 'تطبيقات الجوال (Android & iOS)',
    desc: 'تطبيقات سهلة الاستخدام تعمل حتى بدون اتصال بالإنترنت وتتزامن فور الاتصال.'
  },
  {
    iconName: 'Headphones',
    title: 'استشارات تقنية ودعم فني متواصل',
    desc: 'فريق متخصص يجمع بين الخبرة الزراعية العميقة والتطوير التقني المتقدم.'
  }
];

// 3. Local Workflows (الخدمات المحلية التي تم الحفاظ عليها)
export const workflows = [
  { id: 'appointments', iconName: 'Calendar', title: 'مواعيد وعيادات', example: 'دكاترة وعيادات بيطرية وزراعية', desc: 'احجز موعدك، اختار الوقت المناسب، واستلم تذكير قبل الزيارة.' },
  { id: 'orders', iconName: 'UtensilsCrossed', title: 'أوردرات ومستلزمات', example: 'مطاعم، ومستلزمات زراعية', desc: 'اطلب من المنيو أو المنتجات، تابع حالة الأوردر لحظة بلحظة.' },
  { id: 'services', iconName: 'Wrench', title: 'طلب خدمة وصيانة', example: 'صيانة معدات، فنيين، وخدمات', desc: 'وصف احتياجك، استلم عرض سعر أو اتربط بأقرب شريك متاح.' },
  { id: 'rides', iconName: 'Car', title: 'طلب نقل وتوصيل', example: 'نقل مواشي، نقل محاصيل، وتوصيل', desc: 'حدد نقطة الانطلاق والوجهة، وتابع رحلتك لحظة بلحظة.' },
  { id: 'marketplace', iconName: 'Store', title: 'بيع وشراء محلي', example: 'سوق محلي ومستلزمات مزارع', desc: 'اعرض غرضك أو دور على اللي محتاجه من ناس حواليك.' },
  { id: 'events', iconName: 'PartyPopper', title: 'حجوزات وفعاليات', example: 'قاعات، معارض زراعية ومناسبات', desc: 'شوف التوفر والباقات، واحجز مكانك للمناسبة بثقة.' },
];

// 4. Investor & Achievements Data (من الكروت البصرية 5)
export const achievements = [
  { value: '+40%', label: 'زيادة في إنتاجية المزارع', desc: 'رفع الكفاءة وخفض التكاليف التشغيلية' },
  { value: '+25K', label: 'رأس ماشية تحت الإدارة', desc: 'متابعة صحية وتغذية دقيقة في الوقت الفعلي' },
  { value: '+850', label: 'مزرعة مسجلة', desc: 'تعتمد على حلول قريب الذكية' },
  { value: '+10K', label: 'مستخدم نشط', desc: 'من مزارعين، شركاء، وطالبي خدمات' }
];

export const marketInsights = {
  marketCap: '50+ مليار دولار',
  growthRate: '12.3%',
  targetYear: '2030',
  description: 'السوق الزراعي والحيواني في المنطقة ينمو بسرعة مدفوعاً بالحاجة للأمن الغذائي والتكنولوجيا.'
};

// 5. Trust & Why Choose Qareeb
export const trustPillars = [
  { iconName: 'ShieldCheck', title: 'حلول مخصصة وعالية الدقة', desc: 'نصمم الحلول وفقاً لاحتياجات مزرعتك وعملك الميداني.' },
  { iconName: 'Users', title: 'فريق متخصص وذو خبرة', desc: 'خبرة عميقة تجمع بين المجال الزراعي والتطوير التقني.' },
  { iconName: 'TrendingUp', title: 'زيادة الإنتاجية وتقليل التكاليف', desc: 'تقنيات حديثة لرفع كفاءة استهلاك الموارد والمياه.' },
  { iconName: 'Lock', title: 'أمان بيانات أعلى معايير', desc: 'حماية بياناتك وحساباتك وفق أحدث البروتوكولات الأمنية.' },
  { iconName: 'WifiOff', title: 'عمل بدون إنترنت (Offline Sync)', desc: 'تطبيق يعمل في المناطق النائية وتزامن البيانات عند توفر الاتصال.' }
];

export const contactInfo = {
  phone: '01067156319',
  whatsapp: '201067156319',
  email: 'mn877007@gmail.com',
  location: 'مصر والمنطقة العربية',
  website: 'www.qareeb.com'
};
