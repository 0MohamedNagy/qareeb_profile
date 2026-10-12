import React, { useEffect, useState } from 'react'
import { nav, hero, about, systems, who, contact } from '../data/content'

export function PortfolioSite({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const close = () => setMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pf">
      <div className="pf-progress" aria-hidden="true">
        <div className="pf-progress-fill" />
      </div>

      <header className={`pf-nav ${scrolled ? 'is-on' : ''}`}>
        <a href="#top" className="pf-brand">
          <span className="pf-brand-dot" />
          قريب
        </a>
        <nav className="pf-links">
          {nav.map((i) => (
            <a key={i.href} href={i.href}>
              {i.label}
            </a>
          ))}
        </nav>
        <div className="pf-nav-right">
          <a className="pf-btn pf-btn-sm" href="#contact">
            تواصل
          </a>
          <button
            type="button"
            className="pf-burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="القائمة"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="pf-drawer">
          {nav.map((i) => (
            <a key={i.href} href={i.href} onClick={close}>
              {i.label}
            </a>
          ))}
        </div>
      )}

      <main id="top">
        {/* HERO — cream, large type, stats */}
        <section className="pf-hero">
          <div className="pf-hero-grid">
            <div className="pf-hero-copy">
              <p className="pf-kicker">{hero.kicker}</p>
              <h1 className="pf-name">
                <span className="pf-name-solid">{hero.nameSolid}</span>
                <span className="pf-name-outline">{hero.nameOutline}</span>
              </h1>
              <div className="pf-stats">
                {hero.stats.map((s) => (
                  <div key={s.label} className="pf-stat">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <p className="pf-blurb">{hero.blurb}</p>
              <div className="pf-hero-cta">
                <a className="pf-btn pf-btn-primary" href={hero.primary.href}>
                  {hero.primary.label}
                </a>
                <a className="pf-btn pf-btn-ghost" href={hero.secondary.href}>
                  {hero.secondary.label}
                </a>
              </div>
            </div>

            <div className="pf-hero-visual">
              <div className="pf-frame">
                <div className="pf-frame-corner tl" />
                <div className="pf-frame-corner tr" />
                <div className="pf-frame-corner bl" />
                <div className="pf-frame-corner br" />
                <div className="pf-frame-card">
                  <div className="pf-frame-top">
                    <i /><i /><i />
                  </div>
                  <div className="pf-frame-body">
                    <p className="pf-frame-label">الحقل الرقمي</p>
                    <ul>
                      <li><span>التشغيل</span><strong>رقمي</strong></li>
                      <li><span>الأنظمة</span><strong>واضحة</strong></li>
                      <li><span>التحول</span><strong>مبسط</strong></li>
                    </ul>
                    <div className="pf-bars">
                      <i style={{ height: '48%' }} />
                      <i style={{ height: '72%' }} />
                      <i style={{ height: '38%' }} />
                      <i style={{ height: '90%' }} />
                      <i style={{ height: '58%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pf-scroll-hint">SCROLL</div>
        </section>

        {/* ABOUT — dark, huge type */}
        <section id="about" className="pf-about">
          <div className="pf-about-inner">
            <div className="pf-about-left">
              <p className="pf-sec-label">{about.section}</p>
              <h2 className="pf-huge">
                DIGITAL
                <span>AGRI.</span>
              </h2>
            </div>
            <div className="pf-about-right">
              {about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* SYSTEMS — dark cards like WORK */}
        <section id="systems" className="pf-work">
          <p className="pf-work-hint">الأنظمة اللي بنبني عليها التحول</p>
          <div className="pf-work-bg" aria-hidden="true">
            SYSTEMS
          </div>
          <div className="pf-work-grid">
            {systems.map((s) => (
              <article key={s.n} className="pf-card">
                <div className="pf-card-top">
                  <span className="pf-card-n">{s.n}</span>
                  <span className="pf-card-tag">{s.tag}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WHO */}
        <section id="who" className="pf-who">
          <div className="pf-who-inner">
            <p className="pf-sec-label light">لمن قريب؟</p>
            <h2 className="pf-h2">مصمم للشركات الناشئة\nومشاريع التحول الرقمي</h2>
            <div className="pf-who-grid">
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
        <section id="contact" className="pf-contact">
          <div className="pf-contact-inner">
            <div>
              <p className="pf-sec-label">{contact.section}</p>
              <h2 className="pf-h2">{contact.title}</h2>
              <p className="pf-contact-body">{contact.body}</p>
            </div>
            <div className="pf-contact-actions">
              <a
                className="pf-btn pf-btn-primary"
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('السلام عليكم، مهتم بحلول قريب للزراعة الرقمية')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                واتساب
              </a>
              <a className="pf-btn pf-btn-ghost" href={`tel:${contact.phone}`}>
                {contact.phone}
              </a>
              <a className="pf-mail" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="pf-foot">
        <span>
          قريب <em>Qareeb</em>
        </span>
        <span>حلول الزراعة الرقمية للشركات الناشئة</span>
      </footer>
    </div>
  )
}
