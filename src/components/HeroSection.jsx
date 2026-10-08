import React from 'react';
import { ArrowLeft, MapPin, ShieldCheck, Smartphone } from 'lucide-react';
import { images } from '../data/contentData';

export function HeroSection() {
  return (
    <section id="home" className="hero-v2">
      <div className="hero-v2-bg" style={{ backgroundImage: `url(${images.hero})` }} />
      <div className="hero-v2-overlay" />

      <div className="container hero-v2-inner">
        <div className="hero-v2-content">
          <span className="hero-v2-badge">منصة محلية مصرية</span>
          <h1>
            كل احتياج محلي…
            <br />
            <span>في مكان واحد قريب منك</span>
          </h1>
          <p>
            قريب بتجمع الحجز، الطلبات، الصيانة، البيع والشراء، والفعاليات في تجربة واحدة موثوقة — بدل ما تتنقل بين تطبيقات متفرقة.
          </p>

          <div className="hero-v2-actions">
            <a href="#services" className="btn btn-primary btn-lg">
              استكشف الخدمات
              <ArrowLeft size={18} />
            </a>
            <a href="#events" className="btn btn-ghost btn-lg">
              شوف الفعاليات
            </a>
          </div>

          <div className="hero-v2-pills">
            <span><MapPin size={16} /> محلي أولًا</span>
            <span><ShieldCheck size={16} /> شركاء موثّقين</span>
            <span><Smartphone size={16} /> حساب واحد</span>
          </div>
        </div>
      </div>
    </section>
  );
}
