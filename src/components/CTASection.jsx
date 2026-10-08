import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { contactInfo } from '../data/contentData';

export function CTASection() {
  return (
    <section id="contact" className="section cta-v2">
      <div className="container">
        <div className="cta-v2-card">
          <div className="cta-v2-text">
            <span className="eyebrow on-dark">الخطوة الجاية</span>
            <h2>خلّينا نقرّب الخدمة لمجتمعك</h2>
            <p>
              سواء مستخدم أو شريك محلي — تواصل معانا ونرتّب البداية في منطقتك.
            </p>
            <div className="cta-v2-actions">
              <a
                className="btn btn-primary btn-lg"
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('السلام عليكم، مهتم بقريب')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                واتساب
              </a>
              <a className="btn btn-ghost btn-lg" href={`tel:${contactInfo.phone}`}>
                <Phone size={18} />
                اتصال
              </a>
            </div>
          </div>
          <div className="cta-v2-meta">
            <div><Mail size={18} /><span>{contactInfo.email}</span></div>
            <div><Phone size={18} /><span>{contactInfo.phone}</span></div>
            <p>{contactInfo.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
