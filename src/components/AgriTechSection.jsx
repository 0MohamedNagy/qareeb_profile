import React, { useState } from 'react';
import { Sprout, PawPrint, Droplets, Cpu, LineChart, Boxes, Tractor, Store, CheckCircle, ArrowLeft } from 'lucide-react';
import { agriSolutions } from '../data/contentData';

const iconMap = {
  Sprout,
  PawPrint,
  Droplets,
  Cpu,
  LineChart,
  Boxes,
  Tractor,
  Store,
};

export function AgriTechSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSolutions = activeFilter === 'all'
    ? agriSolutions
    : activeFilter === 'crop'
    ? agriSolutions.filter(s => ['crop-mgmt', 'smart-irrigation', 'iot-sensors'].includes(s.id))
    : activeFilter === 'livestock'
    ? agriSolutions.filter(s => ['livestock-mgmt', 'feed-inventory'].includes(s.id))
    : agriSolutions.filter(s => ['machinery-gps', 'ai-analytics', 'agri-market'].includes(s.id));

  return (
    <section id="agri-tech" className="section agri-tech-section">
      <div className="container">
        <div className="section-badge reveal">تقنيات من الجيل القادم</div>
        <h2 className="section-title reveal">الزراعة والثروة الحيوانية بذكاء التكنولوجيا</h2>
        <p className="section-subtitle reveal">
          حلول تقنية مبتكرة تربط الأرض والماشية بالذكاء الاصطناعي وإنترنت الأشياء لزيادة الإنتاجية وتحقيق الاستدامة.
        </p>

        {/* Category Tabs */}
        <div className="filter-tabs reveal">
          <button
            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            كل الحلول 🌾
          </button>
          <button
            className={`filter-tab ${activeFilter === 'crop' ? 'active' : ''}`}
            onClick={() => setActiveFilter('crop')}
          >
            إدارة المزارع والمحاصيل 🌱
          </button>
          <button
            className={`filter-tab ${activeFilter === 'livestock' ? 'active' : ''}`}
            onClick={() => setActiveFilter('livestock')}
          >
            الثروة الحيوانية 🐄
          </button>
          <button
            className={`filter-tab ${activeFilter === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveFilter('tech')}
          >
            الذكاء الاصطناعي والمعدات 🚜
          </button>
        </div>

        {/* Solutions Grid */}
        <div className="agri-grid stagger-children">
          {filteredSolutions.map(({ id, iconName, title, desc, tag }) => {
            const IconComp = iconMap[iconName] || Sprout;
            return (
              <div className="agri-card reveal" key={id}>
                <div className="agri-card-header">
                  <div className="agri-card-icon">
                    <IconComp size={28} />
                  </div>
                  <span className="agri-tag">{tag}</span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="agri-card-footer">
                  <span>تطبيق ذكي متكامل</span>
                  <CheckCircle size={16} color="var(--color-primary)" />
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Highlight Banner */}
        <div className="ai-highlight-banner reveal">
          <div className="ai-banner-content">
            <span className="ai-badge">🤖 مدعومة بالذكاء الاصطناعي</span>
            <h3>نزرع اليوم... لنحصد غداً بقرارات أذكى</h3>
            <p>
              نماذج تشخيص أمراض النبات بالرؤية الحاسوبية، وتوصيات التغذية والتطعيم للقطعان مع تنبيهات مناخية فورية.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            تواصل للحصول على استشارة
            <ArrowLeft size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
