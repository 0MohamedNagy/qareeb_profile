import React from 'react';
import { TrendingUp, Award, ShieldCheck, Users, Globe, ArrowLeft } from 'lucide-react';
import { achievements, marketInsights } from '../data/contentData';

export function AchievementsSection() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-badge reveal" style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#4ade80' }}>
          إنجازات وأرقام تتحدث عن نفسها
        </div>
        <h2 className="section-title reveal" style={{ color: 'white' }}>
          إنجازاتنا حتى الآن في قطاع الزراعة والتكنولوجيا
        </h2>
        <p className="section-subtitle reveal" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          نتائج حقيقية حققها عملاؤنا وشراكاتنا عبر المنظومة الذكية.
        </p>

        {/* Counter Grid */}
        <div className="achievements-grid stagger-children">
          {achievements.map(({ value, label, desc }) => (
            <div className="achievement-card reveal" key={label}>
              <div className="achievement-value">{value}</div>
              <div className="achievement-label">{label}</div>
              <div className="achievement-desc">{desc}</div>
            </div>
          ))}
        </div>

        {/* Market Potential & Investor Card */}
        <div className="market-card reveal">
          <div className="market-card-content">
            <h3>فرصة استثمارية واعدة في قطاع حيوي 📈</h3>
            <p>{marketInsights.description}</p>
            
            <div className="market-stats-row">
              <div className="market-stat-item">
                <span className="market-stat-num">{marketInsights.marketCap}</span>
                <span className="market-stat-lbl">حجم السوق المستهدف بـ {marketInsights.targetYear}</span>
              </div>
              <div className="market-stat-item">
                <span className="market-stat-num">{marketInsights.growthRate}</span>
                <span className="market-stat-lbl">معدل نمو سنوي مركب (CAGR)</span>
              </div>
            </div>
          </div>

          <div className="market-card-action">
            <a href="#contact" className="btn btn-white">
              كن شريكاً في رحلتنا
              <ArrowLeft size={18} color="var(--color-primary)" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
