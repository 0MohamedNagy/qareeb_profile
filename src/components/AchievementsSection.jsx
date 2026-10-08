import React from 'react';
import { achievements } from '../data/contentData';

export function AchievementsSection() {
  return (
    <section id="achievements" className="stats cinematic-stats">
      <div className="container">
        <h2 className="section-title" style={{ color: '#fff' }}>
          أرقام تتكلم
        </h2>
        <p className="section-subtitle">أثر قريب على الأرض — إنتاجية، قطعان، ومزارع</p>
        <div className="stats-grid stagger-children">
          {achievements.map((a) => (
            <div className="stat-item" key={a.label}>
              <span className="stat-number" data-count={a.value}>
                {a.value}
              </span>
              <span className="stat-label">{a.label}</span>
              {a.desc ? <span className="stat-desc">{a.desc}</span> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
