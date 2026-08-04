import React from 'react';
import { ShieldCheck, Users, TrendingUp, Lock, WifiOff } from 'lucide-react';
import { trustPillars } from '../data/contentData';

const iconMap = {
  ShieldCheck,
  Users,
  TrendingUp,
  Lock,
  WifiOff,
};

export function TrustSection() {
  return (
    <section id="trust" className="section values" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <h2 className="section-title reveal">لماذا تختار قريب؟</h2>
        <p className="section-subtitle reveal">
          نجمع بين الخبرة الزراعية العميقة والتطوير التقني المتقدم لتقديم منظومة متكاملة وموثوقة.
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
  );
}
