import React from 'react';

export function HowItWorksSection() {
  const steps = [
    { n: '٠١', title: 'حدد احتياجك', desc: 'فئة، شريك معين، أو احتياج عام' },
    { n: '٠٢', title: 'قريب بيوجهك', desc: 'للفئة الصح والـ Workflow الخاص بيها' },
    { n: '٠٣', title: 'أنجز المعاملة', desc: 'حجز، أوردر، طلب، أو شراء — حسب الفئة' },
    { n: '٠٤', title: 'ثق وقيّم', desc: 'التوثيق والتقييمات ظاهرة طول الوقت' },
  ];

  return (
    <section id="how-it-works" className="stats">
      <div className="container">
        <h2 className="section-title reveal" style={{ color: 'white' }}>إزاي قريب بيشتغل</h2>
        <p className="section-subtitle reveal" style={{ color: 'rgba(255,255,255,0.75)' }}>
          المستخدم بيبدأ من احتياجه، والمنصة بتوجهه للـ Workflow المناسب — من غير ما نفترض طريقة معينة
        </p>
        <div className="stats-grid stagger-children">
          {steps.map(({ n, title, desc }) => (
            <div className="stat-item reveal" key={n}>
              <div className="stat-icon" style={{ fontSize: '1.1rem', fontWeight: 700 }}>{n}</div>
              <span className="stat-number" style={{ fontSize: '1.15rem' }}>{title}</span>
              <span className="stat-label">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
