import React from 'react';
import { services } from '../data/contentData';

export function ServicesSection() {
  return (
    <section id="services" className="section section-light">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">الخدمات</span>
          <h2>مسارات واضحة لكل احتياج</h2>
          <p>مش بنخلط كل حاجة في شاشة واحدة — كل خدمة ليها طريقها، بنفس الحساب ونفس مستوى الثقة.</p>
        </div>

        <div className="cards-grid-3">
          {services.map((s) => (
            <article className="img-card" key={s.id}>
              <div className="img-card-media">
                <img src={s.image} alt={s.title} loading="lazy" />
                <span className="img-card-tag">{s.tag}</span>
              </div>
              <div className="img-card-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
