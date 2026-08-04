import React from 'react';
import { ArrowLeft, Search, Sprout, PawPrint, Droplets, Smartphone, ShieldCheck, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-shape hero-shape-1" aria-hidden="true" />
      <div className="hero-shape hero-shape-2" aria-hidden="true" />
      <div className="hero-shape hero-shape-3" aria-hidden="true" />
      <div className="hero-dots" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-top-tag">
            <span>🌱 التقنية... من أجل الزراعة والحياة</span>
          </div>
          <h1>
            حلول تقنية ذكية <span>للزراعة والثروة الحيوانية</span> والمنصات المحلية
          </h1>
          <p>
            قريب نطور أنظمة وتطبيقات متكاملة تربط الأرض والقطعان والتكنولوجيا بالذكاء الاصطناعي — لرفع الإنتاجية، خفض التكاليف، وتقديم تجربة خدمات محلية موحدة وموثوقة.
          </p>

          <div className="hero-quick-features">
            <div className="hero-qf-item">
              <CheckCircle size={18} color="var(--color-primary)" />
              <span>ذكاء اصطناعي وحساسات IoT</span>
            </div>
            <div className="hero-qf-item">
              <CheckCircle size={18} color="var(--color-primary)" />
              <span>إدارة المزارع والقطعان</span>
            </div>
            <div className="hero-qf-item">
              <CheckCircle size={18} color="var(--color-primary)" />
              <span>تطبيقات تعمل بدون إنترنت</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#agri-tech" className="btn btn-primary">
              استكشف حلول المنظومة
              <ArrowLeft size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              تواصل مع الشركاء
            </a>
          </div>
        </div>

        {/* Hero Interactive App Mockup Showcase */}
        <div className="hero-showcase-card">
          <div className="showcase-header-bar">
            <div className="showcase-status-badge">
              <span className="dot-live" />
              منظومة قريب الذكية
            </div>
            <span className="showcase-app-ver">App v2.4</span>
          </div>

          <div className="showcase-search-bar">
            <Search size={18} className="search-icon" />
            <span>ابحث عن حالة المزرعة، العيادات، أو التنبيهات...</span>
          </div>

          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-item-icon" style={{ background: 'rgba(24, 152, 81, 0.2)' }}>
                <Sprout size={22} color="#4ade80" />
              </div>
              <div>
                <div className="showcase-item-title">مراقبة المحاصيل</div>
                <div className="showcase-item-sub">صحة النبات 92% ✅</div>
              </div>
            </div>

            <div className="showcase-item">
              <div className="showcase-item-icon" style={{ background: 'rgba(59, 130, 246, 0.2)' }}>
                <PawPrint size={22} color="#60a5fa" />
              </div>
              <div>
                <div className="showcase-item-title">الثروة الحيوانية</div>
                <div className="showcase-item-sub">78 رأس ماشية 🐄</div>
              </div>
            </div>

            <div className="showcase-item">
              <div className="showcase-item-icon" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
                <Droplets size={22} color="#fbbf24" />
              </div>
              <div>
                <div className="showcase-item-title">ري ذكي واستشعار</div>
                <div className="showcase-item-sub">توفير 30% مياه 💧</div>
              </div>
            </div>

            <div className="showcase-item">
              <div className="showcase-item-icon" style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
                <Smartphone size={22} color="#c084fc" />
              </div>
              <div>
                <div className="showcase-item-title">منصة خدمات محلية</div>
                <div className="showcase-item-sub">حساب واحد موحد 🛡️</div>
              </div>
            </div>
          </div>

          <div className="showcase-footer-pill">
            <span>🛡️ هوية وثقة واحدة موحدة (تزامن Offline)</span>
            <span className="badge-active">متصل</span>
          </div>

          <div className="hero-badge">
            <div className="hero-badge-dot" />
            نزرع اليوم... لنحصد غداً
          </div>
        </div>
      </div>
    </section>
  );
}
