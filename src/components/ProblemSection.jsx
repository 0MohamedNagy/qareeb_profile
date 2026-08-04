import React from 'react';
import { Puzzle, ShieldCheck, Layers } from 'lucide-react';

export function ProblemSection() {
  const problemPoints = [
    {
      icon: <Puzzle size={22} />,
      title: 'تشتت الأدوات',
      desc: 'تطبيق مختلف لكل احتياج: دكتور، مطعم، مواصلات، صيانة، بيع وشراء.',
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'تشتت الثقة',
      desc: 'من غير نظام توثيق موحد، الثقة لازم تتبني من الصفر مع كل حد.',
    },
    {
      icon: <Layers size={22} />,
      title: 'تشتت التجربة',
      desc: 'كل أداة بواجهتها وحسابها الخاص — تتعلم من الأول كل مرة.',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-side reveal-left">
            <div className="problem-visual-card">
              <div className="problem-visual-tag">حل مشكلة التشتت</div>
              
              <div className="fragmented-apps-list">
                <span>❌ تطبيق عيادات</span>
                <span>❌ تطبيق مطاعم</span>
                <span>❌ تطبيق صيانة</span>
              </div>

              <div className="problem-arrow">⬇️</div>

              <div className="unified-solution-pill">
                <ShieldCheck size={24} />
                <span>منصة قريب الموحدة ✅</span>
              </div>
            </div>
            
            <div className="about-image-badge">
              <strong>٣</strong>
              <span>مستويات تشتت بنحلها</span>
            </div>
          </div>

          <div className="about-content reveal-right">
            <h2 className="section-title">المشكلة اللي قريب بيحلها</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              المشكلة الحقيقية مش إن الناس مش لاقية اللي محتاجاه — المشكلة هي
              <strong style={{ color: 'var(--color-primary)' }}> التشتت</strong>.
            </p>
            <ul className="about-points">
              {problemPoints.map(({ icon, title, desc }) => (
                <li className="about-point" key={title}>
                  <div className="about-point-icon">{icon}</div>
                  <div className="about-point-text">
                    <strong>{title}</strong>
                    <span>{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
