import React, { useEffect, useRef, useState } from 'react';
import {
  MapPin,
  LineChart,
  BrainCircuit,
  Smartphone,
  Truck,
  Sprout,
  Users,
  Leaf,
  ShieldCheck,
  Award,
  Lightbulb,
  Eye,
  Target,
  ArrowLeft,
  PawPrint,
  Globe,
  Zap,
  TrendingUp,
  CheckCircle,
  Mail,
  Phone,
  MessageCircle,
  X,
} from 'lucide-react';
import './index.css';

/* ── Scroll Reveal Hook ── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      '.reveal, .reveal-right, .reveal-left, .reveal-scale'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Animated Counter ── */
function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-number">
      {count.toLocaleString('ar-SA')}
      {suffix}
    </span>
  );
}

/* ── Main App ── */
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useScrollReveal();

  /* Sticky header + scroll-to-top visibility */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'من نحن' },
    { href: '#features', label: 'منظومتنا' },
    { href: '#values', label: 'قيمنا' },
    { href: '#vision', label: 'رؤيتنا' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  return (
    <>
      {/* ── Scroll to Top ── */}
      <button
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="العودة للأعلى"
      >
        <ArrowLeft size={20} style={{ transform: 'rotate(90deg)' }} />
      </button>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Mobile Nav ── */}
      <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`} aria-label="القائمة الرئيسية">
        <ul>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={closeMenu}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Header ── */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="logo" aria-label="قريب Qareeb">
            <MapPin size={32} color="var(--color-primary)" strokeWidth={2.5} />
            قريب<span>Qareeb</span>
          </a>

          <nav aria-label="التنقل الرئيسي">
            <ul className="nav-links">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="home" className="hero">
        {/* Floating background shapes */}
        <div className="hero-shape hero-shape-1" aria-hidden="true" />
        <div className="hero-shape hero-shape-2" aria-hidden="true" />
        <div className="hero-shape hero-shape-3" aria-hidden="true" />
        <div className="hero-dots" aria-hidden="true" />

        <div className="container hero-container">
          <div className="hero-content">
            <span className="subtitle">نقرب اليوم من مستقبل أفضل</span>
            <h1>
              مرحباً بك في <span>قريب</span>
            </h1>
            <p>
              قريب هي شركة تقنية تعمل على تطوير حلول رقمية ذكية تخدم مختلف
              القطاعات، مع التركيز على الابتكار والذكاء الاصطناعي والتحول
              الرقمي. نقدم مجموعة من المنتجات والخدمات التي تهدف إلى تحسين
              الكفاءة، وتعزيز الاستدامة، وخلق قيمة حقيقية للأفراد والشركات
              والمجتمع.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">
                استثمر في المستقبل
                <ArrowLeft size={20} />
              </a>
              <a href="#features" className="btn btn-secondary">
                اكتشف منظومتنا
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop"
              alt="الزراعة الذكية - قريب"
              loading="eager"
            />
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              ذكاء اصطناعي متقدم
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section id="stats" className="stats">
        <div className="container">
          <div className="stats-grid stagger-children">
            <div className="stat-item reveal">
              <div className="stat-icon">
                <TrendingUp size={24} />
              </div>
              <AnimatedCounter target={6} suffix="+" />
              <span className="stat-label">قطاعات نخدمها</span>
            </div>
            <div className="stat-item reveal">
              <div className="stat-icon">
                <Users size={24} />
              </div>
              <AnimatedCounter target={500} suffix="+" />
              <span className="stat-label">عميل راضٍ</span>
            </div>
            <div className="stat-item reveal">
              <div className="stat-icon">
                <Zap size={24} />
              </div>
              <AnimatedCounter target={15} suffix="+" />
              <span className="stat-label">حل تقني متكامل</span>
            </div>
            <div className="stat-item reveal">
              <div className="stat-icon">
                <Globe size={24} />
              </div>
              <AnimatedCounter target={5} suffix="+" />
              <span className="stat-label">دول في المنطقة</span>
            </div>
          </div>
        </div>
      </section>
      {/* ── About ── */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-side reveal-left">
              <img
                className="about-image-main"
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1400&auto=format&fit=crop"
                alt="فريق قريب"
                loading="lazy"
              />
              <div className="about-image-badge">
                <strong>٢٠٢٣</strong>
                <span>تأسست قريب</span>
              </div>
            </div>

            <div className="about-content reveal-right">
              <h2 className="section-title">من نحن؟</h2>
              <ul className="about-points">
                {[
                  {
                    icon: <BrainCircuit size={22} />,
                    title: 'شركة تقنية متعددة القطاعات',
                    desc: 'نطوّر حلولاً رقمية ذكية للزراعة، الثروة الحيوانية، اللوجستيات، والأعمال.',
                  },
                  {
                    icon: <Globe size={22} />,
                    title: 'حضور إقليمي متنامٍ',
                    desc: 'نخدم عملاء في أكثر من ٥ دول في المنطقة العربية ونسعى للتوسع.',
                  },
                  {
                    icon: <Zap size={22} />,
                    title: 'تقنيات الجيل القادم',
                    desc: 'نعتمد الذكاء الاصطناعي وتحليل البيانات في صميم كل منتج نقدمه.',
                  },
                  {
                    icon: <Leaf size={22} />,
                    title: 'رؤية مستدامة',
                    desc: 'نبني بمسؤولية تجاه البيئة والمجتمع لضمان مستقبل أفضل للجميع.',
                  },
                ].map(({ icon, title, desc }) => (
                  <li className="about-point" key={title}>
                    <div className="about-point-icon">{icon}</div>
                    <div className="about-point-text">
                      <strong>{title}</strong>
                      <span>{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section features">
        <div className="container">
          <h2 className="section-title reveal">منظومة متكاملة... قطاعات متعددة</h2>
          <p className="section-subtitle reveal">
            نقدم حلولاً شاملة ومتكاملة تغطي مختلف القطاعات بتقنيات متقدمة
            وذكاء اصطناعي من الجيل القادم
          </p>

          <div className="features-grid stagger-children">
            {[
              {
                icon: <LineChart size={36} />,
                title: 'حلول الأعمال',
                desc: 'أنظمة متكاملة لإدارة الأعمال وزيادة النمو والربحية لمختلف أحجام المؤسسات.',
              },
              {
                icon: <BrainCircuit size={36} />,
                title: 'الذكاء الاصطناعي',
                desc: 'بناء نماذج ذكية وتحليل البيانات لدعم اتخاذ القرار بدقة واحترافية.',
              },
              {
                icon: <Smartphone size={36} />,
                title: 'المنصات الرقمية',
                desc: 'منصات وتطبيقات مبتكرة تربط الأفراد والشركات والخدمات بسلاسة.',
              },
              {
                icon: <Truck size={36} />,
                title: 'الخدمات اللوجستية',
                desc: 'حلول نقل ذكية وسلسلة إمداد متكاملة بأعلى مستويات الكفاءة والشفافية.',
              },
              {
                icon: <PawPrint size={36} />,
                title: 'الثروة الحيوانية',
                desc: 'مراقبة صحة الحيوانات وتغذيتها وإنتاجيتها بذكاء وكفاءة لا مثيل لها.',
              },
              {
                icon: <Sprout size={36} />,
                title: 'الزراعة الذكية',
                desc: 'حلول متقدمة لإدارة المزارع وتحليل البيانات الزراعية ورفع الإنتاجية.',
              },
            ].map(({ icon, title, desc }, i) => (
              <div className="feature-card reveal" key={title}>
                <span className="feature-card-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section id="values" className="section values">
        <div className="container">
          <h2 className="section-title reveal">قيمنا</h2>
          <p className="section-subtitle reveal">
            ندار بقيم راسخة تجعل من كل خطوة نخطوها فرقاً حقيقياً في حياة الناس
          </p>

          <div className="values-grid stagger-children">
            {[
              { icon: <Users size={32} />, title: 'المجتمع', desc: 'نخلق قيمة للمجتمع' },
              { icon: <Leaf size={32} />, title: 'الاستدامة', desc: 'نعمل من أجل مستقبل مستدام' },
              { icon: <ShieldCheck size={32} />, title: 'الموثوقية', desc: 'نبني شراكات تدوم' },
              { icon: <Award size={32} />, title: 'الجودة', desc: 'نلتزم بأعلى المعايير' },
              { icon: <Lightbulb size={32} />, title: 'الابتكار', desc: 'نبتكر حلولاً تصنع فارقاً' },
            ].map(({ icon, title, desc }) => (
              <div className="value-item reveal" key={title}>
                <div className="value-icon">{icon}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section id="vision" className="section vision-mission">
        <div className="container">
          <h2 className="section-title reveal">رؤيتنا ورسالتنا</h2>
          <p className="section-subtitle reveal">
            نؤمن بأن التكنولوجيا يجب أن تخدم الإنسان وتحسّن حياته اليومية
          </p>

          <div className="vm-grid">
            <div className="vm-card reveal-left">
              <Eye size={100} className="vm-icon" strokeWidth={1} />
              <h3>رؤيتنا</h3>
              <p>
                أن نكون المنصة الرائدة في المنطقة في تقديم حلول ذكية ومستدامة
                تربط التكنولوجيا بالحياة اليومية، وتمكّن المجتمعات من الازدهار
                في عالم رقمي متطور.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['ريادة التحول الرقمي الإقليمي', 'دعم التنمية المستدامة', 'تمكين المجتمعات'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
                    <CheckCircle size={18} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="vm-card reveal-right">
              <Target size={100} className="vm-icon" strokeWidth={1} />
              <h3>رسالتنا</h3>
              <p>
                تمكين القطاعات المختلفة بحلول رقمية مبتكرة تعتمد على الذكاء
                الاصطناعي لخلق مستقبل أفضل للجميع، وتحقيق أثر إيجابي حقيقي
                على المستوى الاقتصادي والاجتماعي.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['حلول مدعومة بالذكاء الاصطناعي', 'شراكات استراتيجية طويلة الأمد', 'أثر اجتماعي واقتصادي حقيقي'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
                    <CheckCircle size={18} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="cta">
        <div className="container">
          <h2 className="reveal">ندعو المستثمرين والشركاء للانضمام إلى رحلتنا</h2>
          <p className="reveal">تواصل معنا مباشرة عبر البريد أو الهاتف أو الواتساب</p>
          <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <a href="https://wa.me/201067156319" target="_blank" rel="noopener noreferrer" className="btn btn-white">
              <MessageCircle size={20} color="var(--color-primary)" />
              واتساب: 01067156319
            </a>
            <a href="tel:01067156319" className="btn btn-white">
              <Phone size={20} color="var(--color-primary)" />
              اتصال: 01067156319
            </a>
            <a href="mailto:mn877007@gmail.com" className="btn btn-white">
              <Mail size={20} color="var(--color-primary)" />
              mn877007@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <a href="#home" className="logo" style={{ color: 'white' }}>
              <MapPin size={32} color="var(--color-primary)" strokeWidth={2.5} />
              قريب
            </a>

            <p className="footer-tagline">
              أقرب إليك... وأذكى في خدمتك. نربط الأرض بالتكنولوجيا لننمي حياة
              أفضل للجميع.
            </p>

            <div className="social-links" style={{ gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="https://wa.me/201067156319" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} style={{ marginLeft: '6px' }} />
                واتساب: 01067156319
              </a>
              <a href="tel:01067156319">
                <Phone size={18} style={{ marginLeft: '6px' }} />
                هاتف: 01067156319
              </a>
              <a href="mailto:mn877007@gmail.com">
                <Mail size={18} style={{ marginLeft: '6px' }} />
                mn877007@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} شركة قريب. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
