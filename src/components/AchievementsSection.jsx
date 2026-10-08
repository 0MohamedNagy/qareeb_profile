import React from 'react';
import { achievements } from '../data/contentData';

export function AchievementsSection() {
  return (
    <section id="achievements" className="section section-muted">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">باختصار</span>
          <h2>أرقام توضّح الاتجاه</h2>
        </div>
        <div className="stats-row">
          {achievements.map((a) => (
            <div className="stat-box" key={a.label}>
              <strong data-count={a.value}>{a.value}</strong>
              <span className="stat-box-label">{a.label}</span>
              <span className="stat-box-desc">{a.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
