import React from 'react';
import { MessageCircle, Phone, Mail, QrCode, Smartphone, ArrowLeft } from 'lucide-react';
import { contactInfo } from '../data/contentData';

export function CTASection() {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <div className="cta-container-card reveal">
          <div className="cta-main-info">
            <span className="cta-tag">حمل التطبيق وابدأ رحلتك الذكية</span>
            <h2>حمل تطبيق قريب الآن وابدأ تجربة المنظومة الذكية</h2>
            <p>تطبيق يعمل بسهولة، يتيح لك إدارة مزرعتك وقطعانك والخدمات المحلية من أي مكان حتى بدون اتصال بالإنترنت.</p>

            <div className="app-download-stores">
              <div className="store-badge">
                <Smartphone size={24} />
                <div className="store-text">
                  <span className="store-small">متوفر على</span>
                  <span className="store-large">Google Play</span>
                </div>
              </div>

              <div className="store-badge">
                <Smartphone size={24} />
                <div className="store-text">
                  <span className="store-small">متوفر على</span>
                  <span className="store-large">App Store</span>
                </div>
              </div>
            </div>

            <div className="cta-direct-contacts">
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white"
              >
                <MessageCircle size={20} color="var(--color-primary)" />
                واتساب: {contactInfo.phone}
              </a>
              <a href={`tel:${contactInfo.phone}`} className="btn btn-white">
                <Phone size={20} color="var(--color-primary)" />
                اتصال: {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="btn btn-white">
                <Mail size={20} color="var(--color-primary)" />
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="cta-qr-box">
            <div className="qr-wrapper">
              <QrCode size={110} color="var(--color-secondary)" />
            </div>
            <div className="qr-label">امسح الكود لتحميل التطبيق مباشرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}
