import React from 'react';
import { Calendar, UtensilsCrossed, Wrench, Car, Store, PartyPopper } from 'lucide-react';
import { workflows } from '../data/contentData';

const iconMap = {
  Calendar: Calendar,
  UtensilsCrossed: UtensilsCrossed,
  Wrench: Wrench,
  Car: Car,
  Store: Store,
  PartyPopper: PartyPopper,
};

export function WorkflowsSection() {
  return (
    <section id="workflows" className="section features">
      <div className="container">
        <h2 className="section-title reveal">المنصة المحلية الموحدة — خدمات لكل احتياج</h2>
        <p className="section-subtitle reveal">
          بجانب حلول الزراعة الذكية، قريب توفر منصة خدمات محلية متكاملة — كل فئة ليها طريقتها الخاصة بحساب وثقة واحدة.
        </p>

        <div className="features-grid stagger-children">
          {workflows.map(({ id, iconName, title, example, desc }, i) => {
            const IconComponent = iconMap[iconName] || Calendar;
            return (
              <div className="feature-card reveal" key={id}>
                <span className="feature-card-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="feature-icon"><IconComponent size={36} /></div>
                <h3>{title}</h3>
                <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.4rem' }}>{example}</p>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
