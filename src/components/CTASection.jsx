import React from 'react';
import { MessageCircle, Phone, Mail, QrCode } from 'lucide-react';
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
              <a
                className="store-badge"
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('السلام عليكم، عايز أعرف تفاصيل تطبيق قريب')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={24} />
                <div className="store-text">
                  <span className="store-small">التطبيق قريباً على المتاجر</span>
                  <span className="store-large">اطلبه على واتساب</span>
                </div>
              </a>

              <a className="store-badge" href={`tel:${contactInfo.phone}`}>
                <Phone size={24} />
                <div className="store-text">
                  <span className="store-small">للاستفسار الفوري</span>
                  <span className="store-large">اتصل بنا</span>
                </div>
              </a>
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

          <a
            className="cta-qr-box"
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="qr-wrapper">
              <QrCode size={110} color="var(--color-secondary)" />
            </div>
            <div className="qr-label">لسه بنجهز رابط التحميل — افتح واتساب وابدأ</div>
          </a>
        </div>
      </div>
    </section>
  );
}
