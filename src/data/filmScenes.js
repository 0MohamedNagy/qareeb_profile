/**
 * مشاهد مبنية على بحث بصري:
 * - أسواق وشوارع مصر / شمال أفريقيا
 * - زراعة وواحات (سياق الوادي الجديد)
 * - خدمات يومية (طعام، صحة، مجتمع)
 * مصادر: Unsplash — صور حرة للاستخدام التجاري
 */

export const scenes = [
  {
    id: 'open',
    tone: 'warm',
    align: 'center',
    // سوق توابل / حياة يومية — دفء ولون محلي
    image:
      'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=2000&q=85',
    kicker: 'قريب',
    title: 'كل احتياج محلي…\nفي مكان واحد',
    body: 'من الحجز للطلب للبيع والفعاليات — حساب واحد، ثقة واحدة، قريب منك.',
  },
  {
    id: 'problem',
    tone: 'dark',
    align: 'start',
    // شارع مزدحم — إحساس المدينة والحركة
    image:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=2000&q=85',
    kicker: 'المشكلة',
    title: 'مش قلة خدمات.\nالمشكلة التشتت.',
    body: 'تطبيق للدكتور. تطبيق للمحل. تطبيق للصيانة. كل مرة تبدأ من الصفر.',
  },
  {
    id: 'promise',
    tone: 'warm',
    align: 'center',
    // خضار طازج / سوق محلي
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2000&q=85',
    kicker: 'الحل',
    title: 'منصة واحدة.\nمسارات متعددة.',
    body: 'قريب بتوجّهك للاحتياج الصح — من غير ما تتعلم أداة جديدة كل مرة.',
  },
  {
    id: 'appointments',
    tone: 'dark',
    align: 'end',
    // رعاية صحية هادئة ومهنية
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=85',
    kicker: '01 — مواعيد',
    title: 'احجز.\nوخلّص.',
    body: 'عيادات وخدمات بميعاد واضح وتذكير قبل الزيارة.',
  },
  {
    id: 'orders',
    tone: 'warm',
    align: 'start',
    // منتجات ومحلات — أرفف وبضائع
    image:
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=2000&q=85',
    kicker: '02 — طلبات',
    title: 'اطلب من اللي قريب منك.',
    body: 'محلات ومنتجات محلية — من الطلب للمتابعة.',
  },
  {
    id: 'services',
    tone: 'dark',
    align: 'center',
    // حِرَف ويد عاملة — صيانة وخدمات
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=85',
    kicker: '03 — صيانة وخدمات',
    title: 'وصف احتياجك.\nوصل للشريك.',
    body: 'فنيين وخدمات موثّقة — عرض سعر أو أقرب متاح.',
  },
  {
    id: 'events',
    tone: 'warm',
    align: 'end',
    // تجمع / سوق مفتوح — فعاليات مجتمع
    image:
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=2000&q=85',
    kicker: '04 — فعاليات',
    title: 'مجتمعك بيتحرك.',
    body: 'أسواق وملتقيات وحجوزات — اكتشف واحجز من مكان واحد.',
  },
  {
    id: 'agri',
    tone: 'warm',
    align: 'center',
    // حقل / زراعة — سياق الوادي الجديد والواحات
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3030?auto=format&fit=crop&w=2000&q=85',
    kicker: '05 — زراعة وثروة',
    title: 'من الواحة للحقل.',
    body: 'متابعة وخدمات للمزارع والقطعان — قريبة من أرضك.',
  },
  {
    id: 'close',
    tone: 'dark',
    align: 'center',
    // أفق دافئ / غروب صحراوي — ختام
    image:
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2000&q=85',
    kicker: 'البداية',
    title: 'خلّينا نقرّب الخدمة لمجتمعك.',
    body: 'مستخدم أو شريك — تواصل ونرتّب الانطلاقة في منطقتك.',
    cta: {
      label: 'تواصل على واتساب',
      href: 'https://wa.me/201067156319?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D9%82%D8%B1%D9%8A%D8%A8',
    },
  },
]
