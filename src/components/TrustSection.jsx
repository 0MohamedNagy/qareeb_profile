import React from 'react';
import { Fingerprint, Star, UserCheck, Flag, History, Search, ShieldCheck, Layers } from 'lucide-react';
import { trustPillars, uvpPoints } from '../data/contentData';

const iconMap = {
  Fingerprint,
  Star,
  UserCheck,
  Flag,
  History,
  Search,
  ShieldCheck,
  Layers,
};

export function TrustSection() {
  return (
    <>
      {/* Why Qareeb (UVP) */}
      <section id="why" className="section values">
        <div className="container">
          <h2 className="section-title reveal">ليه قريب؟</h2>
          <p className="section-subtitle reveal">
            ليه تستخدم قريب بدل ما تفتح خمس تطبيقات منفصلة
          </p>

          <div className="values-grid stagger-children">
            {uvpPoints.map(({ iconName, title, desc }) => {
              const IconComp = iconMap[iconName] || ShieldCheck;
              return (
                <div className="value-item reveal" key={title}>
                  <div className="value-icon"><IconComp size={28} /></div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section id="trust" className="section values" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <h2 className="section-title reveal">الثقة هي الأساس</h2>
          <p className="section-subtitle reveal">
            الثقة هي اللي بتخلي قريب أفضل من التوصية الشخصية أو جروبات السوشيال ميديا
          </p>

          <div className="values-grid stagger-children">
            {trustPillars.map(({ iconName, title, desc }) => {
              const IconComp = iconMap[iconName] || ShieldCheck;
              return (
                <div className="value-item reveal" key={title}>
                  <div className="value-icon"><IconComp size={32} /></div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
