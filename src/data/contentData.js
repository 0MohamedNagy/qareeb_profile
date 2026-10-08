export const navItems = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#services', label: 'الخدمات' },
  { href: '#events', label: 'الفعاليات' },
  { href: '#how', label: 'كيف يعمل' },
  { href: '#trust', label: 'لماذا قريب' },
  { href: '#contact', label: 'تواصل' },
];

/** صور عالية الجودة (Unsplash) */
export const images = {
  hero: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=80',
  community: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  market: 'https://images.unsplash.com/photo-1488459716781-31db5253d4b4?auto=format&fit=crop&w=1200&q=80',
  clinic: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  delivery: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
  farm: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3030?auto=format&fit=crop&w=1200&q=80',
  event1: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
  event2: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
  event3: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
  trust: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
};

export const services = [
  {
    id: 'appointments',
    title: 'مواعيد وعيادات',
    desc: 'احجز موعدك مع دكتور أو عيادة قريبة — وقت واضح وتذكير قبل الزيارة.',
    image: images.clinic,
    tag: 'حجز',
  },
  {
    id: 'orders',
    title: 'أوردرات ومحلات',
    desc: 'اطلب من محلات ومنتجات حواليك وتابع حالة الطلب لحظة بلحظة.',
    image: images.market,
    tag: 'طلب',
  },
  {
    id: 'services',
    title: 'صيانة وخدمات',
    desc: 'وصف احتياجك، استلم عرض سعر، واتربط بأقرب فني أو شريك متاح.',
    image: images.delivery,
    tag: 'خدمة',
  },
  {
    id: 'marketplace',
    title: 'بيع وشراء محلي',
    desc: 'اعرض غرضك أو دور على اللي محتاجه من ناس في نفس المنطقة.',
    image: images.community,
    tag: 'سوق',
  },
  {
    id: 'agri',
    title: 'زراعة وثروة حيوانية',
    desc: 'حلول ومتابعة للمزارع والقطعان — من المتابعة اليومية لربط الخدمات.',
    image: images.farm,
    tag: 'زراعة',
  },
  {
    id: 'events',
    title: 'فعاليات وحجوزات',
    desc: 'اكتشف فعاليات محلية واحجز مكانك في معارض ومناسبات مجتمعك.',
    image: images.event1,
    tag: 'فعالية',
  },
];

export const events = [
  {
    id: 'e1',
    title: 'سوق المزارعين الأسبوعي',
    place: 'الوادي الجديد',
    date: 'كل سبت',
    image: images.event1,
    desc: 'منتجات طازجة من مزارع المنطقة — مباشرة من المنتج للمشتري.',
  },
  {
    id: 'e2',
    title: 'يوم التوعية البيطرية',
    place: 'العيادات الشريكة',
    date: 'قريبًا',
    image: images.event2,
    desc: 'فحص واستشارات للمربين — حجز مسبق عبر قريب.',
  },
  {
    id: 'e3',
    title: 'ملتقى الشركاء المحليين',
    place: 'أونلاين + حضوري',
    date: 'شهري',
    image: images.event3,
    desc: 'تعرف على شركاء جدد وفرص تعاون في مجتمعك.',
  },
];

export const steps = [
  { n: '1', title: 'سجّل مرة واحدة', desc: 'حساب واحد يفتح لك كل الخدمات.' },
  { n: '2', title: 'اختار احتياجك', desc: 'حجز، طلب، صيانة، بيع، أو فعالية.' },
  { n: '3', title: 'كمّل بثقة', desc: 'شركاء موثّقين وتقييمات واضحة.' },
  { n: '4', title: 'قيّم وارجع', desc: 'تجربة تتحسن مع كل استخدام.' },
];

export const trustPillars = [
  { title: 'قريب منك', desc: 'خدمات وناس في نفس المحافظة والمدينة والقرية.' },
  { title: 'حساب واحد', desc: 'مش كل خدمة تطبيق جديد — منصة واحدة متسقة.' },
  { title: 'توثيق تدريجي', desc: 'مستويات ثقة واضحة للشركاء حسب النشاط.' },
  { title: 'عربي أولًا', desc: 'واجهة عربية كاملة مع دعم الإنجليزية.' },
];

export const achievements = [
  { value: '6', label: 'مسارات خدمة أساسية', desc: 'من الحجز للسوق للفعاليات' },
  { value: '1', label: 'حساب موحّد', desc: 'لطالب الخدمة والشريك' },
  { value: '100%', label: 'تركيز محلي', desc: 'مصر — من القرية للمدينة' },
  { value: '24/7', label: 'منصة جاهزة', desc: 'توسع تدريجي حسب المنطقة' },
];

export const contactInfo = {
  phone: '01067156319',
  whatsapp: '201067156319',
  email: 'mn877007@gmail.com',
  location: 'مصر — نبدأ من الوادي الجديد ونتوسع',
};
