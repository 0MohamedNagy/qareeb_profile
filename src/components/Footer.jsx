import React from 'react';
import { Search, MessageCircle, Phone, Mail } from 'lucide-react';
import { contactInfo } from '../data/contentData';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#home" className="logo" style={{ color: 'white' }}>
            <span className="logo-icon-badge" style={{ background: 'rgba(255, 255, 255, 0.15)', color: 'white' }}>
              <Search size={22} strokeWidth={2.5} />
            </span>
            <span className="logo-text" style={{ color: 'white' }}>
              قريب <span style={{ color: '#4ade80' }}>Qareeb</span>
            </span>
          </a>

          <p className="footer-tagline">
            منصة محلية موحدة بتربطك بكل خدمة وعمل ومنتج في مجتمعك، من خلال
            تجربة واحدة موثوقة.
          </p>

          <div className="social-links" style={{ gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} style={{ marginLeft: '6px' }} />
              واتساب: {contactInfo.phone}
            </a>
            <a href={`tel:${contactInfo.phone}`}>
              <Phone size={18} style={{ marginLeft: '6px' }} />
              هاتف: {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`}>
              <Mail size={18} style={{ marginLeft: '6px' }} />
              {contactInfo.email}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} قريب Qareeb. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
