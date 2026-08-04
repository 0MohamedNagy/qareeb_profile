import React from 'react';
import { Eye, Target, CheckCircle } from 'lucide-react';

export function VisionSection() {
  return (
    <section id="vision" className="section vision-mission">
      <div className="container">
        <h2 className="section-title reveal">رؤيتنا ورسالتنا</h2>
        <p className="section-subtitle reveal">
          نؤمن إن الاحتياجات المحلية تستاهل تجربة أبسط وأوثق
        </p>

        <div className="vm-grid">
          <div className="vm-card reveal-left">
            <Eye size={100} className="vm-icon" strokeWidth={1} />
            <h3>رؤيتنا</h3>
            <p>
              إن نبقى المنصة المحلية الأساسية اللي الناس تقدر من خلالها
              تكتشف وتوصل وتطلب وتحجز وتبيع وتشتري أي حاجة محتاجينها في
              مجتمعهم، من خلال تطبيق واحد موثوق.
            </p>
            <div className="vm-checklist">
              {['Operating Platform للمجتمعات المحلية', 'أي فئة جديدة من غير إعادة بناء', 'تجربة واحدة موثوقة للجميع'].map((item) => (
                <div key={item} className="vm-check-item">
                  <CheckCircle size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="vm-card reveal-right">
            <Target size={100} className="vm-icon" strokeWidth={1} />
            <h3>رسالتنا</h3>
            <p>
              نخلي الاحتياجات المحلية متاحة من خلال منصة واحدة بسيطة
              وموثوقة وقابلة للتوسع — للأفراد والشركات على حد سواء.
            </p>
            <div className="vm-checklist">
              {['المنصة بتتكيف مع الخدمة، مش العكس', 'وصول مجاني لطالبي الخدمة دايماً', 'باقات اشتراك عادلة للشركاء'].map((item) => (
                <div key={item} className="vm-check-item">
                  <CheckCircle size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
