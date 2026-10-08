import React from 'react';
import { images } from '../data/contentData';

export function ProblemSection() {
  return (
    <section id="about" className="section section-light">
      <div className="container split-block">
        <div className="split-media">
          <img src={images.community} alt="مجتمع محلي" loading="lazy" />
        </div>
        <div className="split-content">
          <span className="eyebrow">لماذا قريب؟</span>
          <h2>المشكلة مش قلة الخدمات… المشكلة التشتت</h2>
          <p>
            تطبيق للدكتور، وتطبيق للمطعم، وتطبيق للصيانة، وتطبيق للإعلانات.
            كل مرة حساب جديد، ثقة من الصفر، وتجربة مختلفة.
          </p>
          <ul className="check-list">
            <li>أدوات متفرقة لنفس الاحتياج المحلي</li>
            <li>ثقة مش موحّدة بين المنصات</li>
            <li>وقت ضايع في التعلّم والبحث</li>
          </ul>
          <p className="split-highlight">
            قريب بتجمع المسارات في منصة واحدة — محلية، عربية، وقابلة للتوسع من القرية للمدينة.
          </p>
        </div>
      </div>
    </section>
  );
}
