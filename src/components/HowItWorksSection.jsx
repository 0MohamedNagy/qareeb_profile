import React from 'react';
import { steps } from '../data/contentData';

export function HowItWorksSection() {
  return (
    <section id="how" className="section section-dark">
      <div className="container">
        <div className="section-head on-dark">
          <span className="eyebrow">كيف يعمل</span>
          <h2>أربع خطوات بسيطة</h2>
          <p>من أول فتح للتطبيق لحد ما تخلّص احتياجك بثقة.</p>
        </div>
        <div className="steps-row">
          {steps.map((s) => (
            <div className="step-card" key={s.n}>
              <span className="step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
