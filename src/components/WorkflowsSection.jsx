import React from 'react';
import { Calendar, UtensilsCrossed, Wrench, Car, Store, PartyPopper } from 'lucide-react';
import { workflows } from '../data/contentData';

const iconMap = {
  Calendar,
  UtensilsCrossed,
  Wrench,
  Car,
  Store,
  PartyPopper,
};

export function WorkflowsSection() {
  return (
    <section id="workflows" className="section features cinematic-workflows">
      <div className="container workflows-intro">
        <h2 className="section-title">المنصة المحلية الموحدة — خدمات لكل احتياج</h2>
        <p className="section-subtitle">
          بجانب حلول الزراعة الذكية، قريب توفر منصة خدمات محلية متكاملة — كل فئة ليها طريقتها الخاصة بحساب وثقة واحدة.
        </p>
        <p className="reel-hint">اسكرول للأسفل لاستكشاف شريط الخدمات ←</p>
      </div>

      <div className="workflow-reel-wrap">
        <div className="workflow-reel">
          {workflows.map(({ id, iconName, title, example, desc }, i) => {
            const IconComponent = iconMap[iconName] || Calendar;
            return (
              <article className="workflow-film-card" key={id}>
                <span className="film-card-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="feature-icon">
                  <IconComponent size={36} />
                </div>
                <h3>{title}</h3>
                <p className="film-card-example">{example}</p>
                <p className="film-card-desc">{desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
