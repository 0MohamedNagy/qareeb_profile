import React from 'react';
import { LayoutDashboard, Compass, Radio, BrainCircuit, Smartphone, Headphones } from 'lucide-react';
import { techServices } from '../data/contentData';

const iconMap = {
  LayoutDashboard,
  Compass,
  Radio,
  BrainCircuit,
  Smartphone,
  Headphones,
};

export function TechServicesSection() {
  return (
    <section id="tech-services" className="section tech-services-section">
      <div className="container">
        <h2 className="section-title reveal">خدماتنا التقنية وحلول المنظومة</h2>
        <p className="section-subtitle reveal">
          نطور أنظمة وتطبيقات متكاملة تساعد الشركات والمزارع على إدارة أعمالهم بكفاءة واستدامة عالية.
        </p>

        <div className="tech-services-grid stagger-children">
          {techServices.map(({ iconName, title, desc }, index) => {
            const IconComp = iconMap[iconName] || Smartphone;
            return (
              <div className="tech-service-card reveal" key={title}>
                <div className="tech-service-num">{String(index + 1).padStart(2, '0')}</div>
                <div className="tech-service-icon">
                  <IconComp size={32} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
