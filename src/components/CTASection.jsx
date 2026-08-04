import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { contactInfo } from '../data/contentData';

export function CTASection() {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <h2 className="reveal">عايز تكون من أول الشركاء في قريب؟</h2>
        <p className="reveal">تواصل معنا مباشرة عبر البريد أو الهاتف أو الواتساب</p>
        <div className="reveal cta-buttons-wrapper">
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
    </section>
  );
}
