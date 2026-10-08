import React, { useState, useEffect } from 'react'
import { layers, systems, who, contact } from '../data/fieldContent'

export function FieldSite({ menuOpen, setMenuOpen }) {
  const [active, setActive] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="field">
      {/* progress */}
      <div className="field-progress" aria-hidden="true">
        <div className="field-progress-fill story-progress-fill" />
      </div>

      {/* layer indicator */}
      <aside className="field-rail" aria-label="طبقات الرحلة">
        {layers.map((l, i) => (
          <a
            key={l.id}
            href={`#layer-${l.id}`}
            className={`field-rail-dot ${active === i ? 'is-on' : ''}`}
            data-layer-index={i}
            title={l.phase}
          >
            <span>{l.label}</span>
          </a>
        ))}
      </aside>

      <header className={`field-nav ${scrolled ? 'is-on' : ''}`}>
        <a href="#top" className="field-logo">
          قريب <em>Qareeb</em>
        </a>
        <nav className="field-nav-links">
          <a href="#layer-surface">الرحلة</a>
          <a href="#systems">الأنظمة</a>
          <a href="#contact">تواصل</a>
        </nav>
        <button
          type="button"
          className="field-menu"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="القائمة"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </header>

      {menuOpen && (
        <div className="field-drawer">
          <a href="#layer-surface" onClick={() => setMenuOpen(false)}>الرحلة</a>
          <a href="#systems" onClick={() => setMenuOpen(false)}>الأنظمة</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>تواصل</a>
        </div>
      )}

      <main id="top">
        {/* OPENING */}
        <section className="field-open">
          <div className="field-open-inner">
            <p className="field-open-kicker">قريب · الحقل الرقمي</p>
            <h1>
              تحوّل رقمي زراعي
              <span>على مقاس الشركات الناشئة</span>
            </h1>
            <p className="field-open-sub">
              مش منصة بيع. مش أجهزة. حلول وأنظمة تبسّط الانتقال من التقليدي إلى الرقمي.
            </p>
            <div className="field-open-cta">
              <a className="field-btn primary" href="#contact">
                ابدأ الحوار
              </a>
              <a className="field-btn ghost" href="#layer-surface">
                انزل للرحلة ↓
              </a>
            </div>
          </div>
          <div className="field-open-scroll" aria-hidden="true">
            <span>اسكرول</span>
          </div>
        </section>

        {/* LAYERS — the new idea: 4 continuous field layers */}
        {layers.map((layer, i) => (
          <section
            key={layer.id}
            id={`layer-${layer.id}`}
            className={`field-layer field-layer--${layer.id}`}
            data-layer={i}
          >
            <div className="field-layer-bg" />
            <div className="field-layer-grid">
              <div className="field-layer-meta">
                <span className="field-phase">{layer.phase}</span>
                <span className="field-tag">{layer.tag}</span>
              </div>
              <div className="field-layer-main">
                <span className="field-num">{layer.label}</span>
                <h2>{layer.title}</h2>
                <p>{layer.body}</p>
              </div>
            </div>
          </section>
        ))}

        {/* SYSTEMS strip */}
        <section id="systems" className="field-systems">
          <div className="field-inner">
            <div className="field-systems-head">
              <span>الجذور</span>
              <h2>ماذا تحت النظام؟</h2>
            </div>
            <div className="field-systems-row">
              {systems.map((s, i) => (
                <article key={s.title} className="field-sys-card">
                  <span className="field-sys-i">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHO */}
        <section className="field-who">
          <div className="field-inner">
            <h2>لمن الحقل الرقمي؟</h2>
            <div className="field-who-row">
              {who.map((w) => (
                <article key={w.title}>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="field-contact">
          <div className="field-inner field-contact-box">
            <div>
              <h2>الخطوة الجاية
                <span>نرتّبها سوا</span>
              </h2>
              <p>احكي عن مشروعك — ونحدد أنسب نقطة بداية للتحول الرقمي.</p>
            </div>
            <div className="field-contact-actions">
              <a
                className="field-btn primary"
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('السلام عليكم، مهتم بحلول قريب للزراعة الرقمية')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                واتساب
              </a>
              <a className="field-btn ghost-dark" href={`tel:${contact.phone}`}>
                {contact.phone}
              </a>
              <a className="field-mail" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="field-foot">
        <div className="field-inner field-foot-inner">
          <strong>قريب <em>Qareeb</em></strong>
          <span>الحقل الرقمي — للشركات الناشئة</span>
        </div>
      </footer>
    </div>
  )
}
