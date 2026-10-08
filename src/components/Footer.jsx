import React from 'react';
import { contactInfo } from '../data/contentData';

export function Footer() {
  return (
    <footer className="footer-v2">
      <div className="container footer-v2-inner">
        <div>
          <strong className="footer-brand">قريب <span>Qareeb</span></strong>
          <p>منصة محلية واحدة لكل احتياج قريب منك.</p>
        </div>
        <div className="footer-links">
          <a href="#services">الخدمات</a>
          <a href="#events">الفعاليات</a>
          <a href="#how">كيف يعمل</a>
          <a href="#contact">تواصل</a>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} قريب — {contactInfo.location}
        </div>
      </div>
    </footer>
  );
}
