import React from 'react';
import { trustPillars, images } from '../data/contentData';

export function TrustSection() {
  return (
    <section id="trust" className="section section-light">
      <div className="container split-block reverse">
        <div className="split-content">
          <span className="eyebrow">الثقة</span>
          <h2>اتصمم عشان المجتمع المحلي</h2>
          <p>
            مش منصة عامة مترجمة — قريب مبنية من الأول حول القرب الجغرافي، التوثيق، وتجربة عربية واضحة.
          </p>
          <div className="trust-grid">
            {trustPillars.map((t) => (
              <div className="trust-item" key={t.title}>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="split-media">
          <img src={images.trust} alt="فريق وتعاون" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
