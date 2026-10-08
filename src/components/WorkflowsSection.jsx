import React, { useRef, useEffect } from 'react';
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
  const railRef = useRef(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const down = (e) => {
      isDown = true;
      rail.classList.add('dragging');
      startX = (e.pageX || e.touches?.[0]?.pageX || 0) - rail.offsetLeft;
      scrollLeft = rail.scrollLeft;
    };
    const up = () => {
      isDown = false;
      rail.classList.remove('dragging');
    };
    const move = (e) => {
      if (!isDown) return;
      e.preventDefault?.();
      const x = (e.pageX || e.touches?.[0]?.pageX || 0) - rail.offsetLeft;
      rail.scrollLeft = scrollLeft - (x - startX);
    };

    rail.addEventListener('mousedown', down);
    rail.addEventListener('mouseleave', up);
    rail.addEventListener('mouseup', up);
    rail.addEventListener('mousemove', move);
    rail.addEventListener('touchstart', down, { passive: true });
    rail.addEventListener('touchend', up);
    rail.addEventListener('touchmove', move, { passive: false });

    return () => {
      rail.removeEventListener('mousedown', down);
      rail.removeEventListener('mouseleave', up);
      rail.removeEventListener('mouseup', up);
      rail.removeEventListener('mousemove', move);
      rail.removeEventListener('touchstart', down);
      rail.removeEventListener('touchend', up);
      rail.removeEventListener('touchmove', move);
    };
  }, []);

  return (
    <section id="workflows" className="section features cinematic-workflows">
      <div className="container">
        <h2 className="section-title reveal">المنصة المحلية الموحدة — خدمات لكل احتياج</h2>
        <p className="section-subtitle reveal">
          بجانب حلول الزراعة الذكية، قريب توفر منصة خدمات محلية متكاملة — كل فئة ليها طريقتها الخاصة بحساب وثقة واحدة.
        </p>
        <p className="reel-hint reveal">اسحب يمين وشمال لاستكشاف الخدمات ←</p>
      </div>

      <div className="workflow-reel-wrap">
        <div className="workflow-reel" ref={railRef}>
          {workflows.map(({ id, iconName, title, example, desc }, i) => {
            const IconComponent = iconMap[iconName] || Calendar;
            return (
              <article className="workflow-film-card reveal" key={id}>
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
