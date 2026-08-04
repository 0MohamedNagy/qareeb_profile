import React from 'react';
import { ArrowLeft, Search, Calendar, UtensilsCrossed, Wrench, Store } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-shape hero-shape-1" aria-hidden="true" />
      <div className="hero-shape hero-shape-2" aria-hidden="true" />
      <div className="hero-shape hero-shape-3" aria-hidden="true" />
      <div className="hero-dots" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-content">
          <span className="subtitle">منصة محلية موحدة</span>
          <h1>
            كل احتياج محلي، <span>في مكان واحد</span>
          </h1>
          <p>
            قريب منصة محلية موحدة بتجمع خدمات وأعمال ومنتجات ومعاملات محلية
            متعددة في تجربة واحدة متسقة — بدل ما تدور بين تطبيقات متفرقة
            لكل احتياج، حساب واحد وثقة واحدة تكفيك لكل حاجة في منطقتك.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              انضم كشريك مبكر
              <ArrowLeft size={20} />
            </a>
            <a href="#workflows" className="btn btn-secondary">
              استكشف الفئات
            </a>
          </div>
        </div>

        {/* Hero Interactive App Mockup Card */}
        <div className="hero-showcase-card">
          <div className="showcase-search-bar">
            <Search size={20} className="search-icon" />
            <span>ابحث عن أي خدمة، عيادة، مطعم، أو صيانة...</span>
          </div>

          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-item-icon"><Calendar size={22} color="#189851" /></div>
              <div>
                <div className="showcase-item-title">مواعيد وعيادات</div>
                <div className="showcase-item-sub">Workflow مخصص</div>
              </div>
            </div>

            <div className="showcase-item">
              <div className="showcase-item-icon"><UtensilsCrossed size={22} color="#3b82f6" /></div>
              <div>
                <div className="showcase-item-title">أوردرات ومطاعم</div>
                <div className="showcase-item-sub">Workflow مخصص</div>
              </div>
            </div>

            <div className="showcase-item">
              <div className="showcase-item-icon"><Wrench size={22} color="#f59e0b" /></div>
              <div>
                <div className="showcase-item-title">خدمات وصيانة</div>
                <div className="showcase-item-sub">Workflow مخصص</div>
              </div>
            </div>

            <div className="showcase-item">
              <div className="showcase-item-icon"><Store size={22} color="#8b5cf6" /></div>
              <div>
                <div className="showcase-item-title">بيع وشراء وسوق</div>
                <div className="showcase-item-sub">Workflow مخصص</div>
              </div>
            </div>
          </div>

          <div className="showcase-footer-pill">
            <span>🛡️ هوية وثقة واحدة موحدة</span>
            <span className="badge-active">مفعل</span>
          </div>

          <div className="hero-badge">
            <div className="hero-badge-dot" />
            المنصة بتتكيف مع الخدمة
          </div>
        </div>
      </div>
    </section>
  );
}
