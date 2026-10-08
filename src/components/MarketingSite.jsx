import React from 'react'
import {
  nav,
  hero,
  problem,
  solution,
  features,
  forWhom,
  contact,
} from '../data/productContent'

function Icon({ name }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  if (name === 'systems')
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    )
  if (name === 'path')
    return (
      <svg {...common}>
        <path d="M4 19h4a2 2 0 0 0 2-2V7a2 2 0 0 1 2-2h4" />
        <polyline points="18 5 21 5 21 8" />
      </svg>
    )
  if (name === 'startup')
    return (
      <svg {...common}>
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="m4.93 4.93 2.83 2.83" />
        <path d="m16.24 16.24 2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    )
  return (
    <svg {...common}>
      <path d="M3 12h4l3-9 4 18 3-9h4" />
    </svg>
  )
}

export function MarketingSite({ menuOpen, setMenuOpen, scrolled }) {
  const close = () => setMenuOpen(false)

  return (
    <div className="mk">
      {/* Progress */}
      <div className="story-progress" aria-hidden="true">
        <div className="story-progress-track">
          <div className="story-progress-fill" />
        </div>
      </div>

      {/* Nav */}
      <header className={`mk-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="mk-container mk-nav-inner">
          <a href="#top" className="mk-logo">
            قريب <span>Qareeb</span>
          </a>
          <nav className="mk-nav-links" aria-label="رئيسي">
            {nav.map((i) => (
              <a key={i.href} href={i.href}>
                {i.label}
              </a>
            ))}
          </nav>
          <a className="mk-btn mk-btn-primary mk-btn-sm mk-nav-cta" href="#contact">
            تواصل
          </a>
          <button
            type="button"
            className="mk-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="القائمة"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mk-drawer">
          {nav.map((i) => (
            <a key={i.href} href={i.href} onClick={close}>
              {i.label}
            </a>
          ))}
        </div>
      )}

      <main id="top">
        {/* HERO */}
        <section className="mk-hero">
          <div className="mk-container mk-hero-grid">
            <div className="mk-hero-copy">
              <span className="mk-badge">{hero.badge}</span>
              <h1 className="mk-h1">{hero.title}</h1>
              <p className="mk-lead">{hero.subtitle}</p>
              <div className="mk-hero-actions">
                <a className="mk-btn mk-btn-primary mk-btn-lg" href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </a>
                <a className="mk-btn mk-btn-ghost mk-btn-lg" href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </a>
              </div>
              <ul className="mk-trust-row">
                <li>للشركات الناشئة</li>
                <li>أنظمة عملية</li>
                <li>تحول رقمي زراعي</li>
              </ul>
            </div>
            <div className="mk-hero-visual" aria-hidden="true">
              <div className="mk-hero-card">
                <div className="mk-hero-card-top">
                  <span className="mk-dot" />
                  <span className="mk-dot" />
                  <span className="mk-dot" />
                </div>
                <div className="mk-hero-card-body">
                  <div className="mk-metric">
                    <span>التشغيل</span>
                    <strong>رقمي</strong>
                  </div>
                  <div className="mk-metric">
                    <span>الأنظمة</span>
                    <strong>واضحة</strong>
                  </div>
                  <div className="mk-metric">
                    <span>التحول</span>
                    <strong>مبسط</strong>
                  </div>
                  <div className="mk-hero-bars">
                    <i style={{ height: '55%' }} />
                    <i style={{ height: '78%' }} />
                    <i style={{ height: '42%' }} />
                    <i style={{ height: '90%' }} />
                    <i style={{ height: '65%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="mk-section mk-section-muted">
          <div className="mk-container">
            <div className="mk-section-head">
              <span className="mk-eyebrow">{problem.eyebrow}</span>
              <h2 className="mk-h2">{problem.title}</h2>
            </div>
            <div className="mk-cards-3">
              {problem.points.map((p) => (
                <article className="mk-card" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section id="solution" className="mk-section">
          <div className="mk-container">
            <div className="mk-section-head">
              <span className="mk-eyebrow">{solution.eyebrow}</span>
              <h2 className="mk-h2">{solution.title}</h2>
              <p className="mk-section-sub">{solution.body}</p>
            </div>
            <div className="mk-steps">
              {solution.steps.map((s) => (
                <div className="mk-step" key={s.n}>
                  <span className="mk-step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mk-section mk-section-dark">
          <div className="mk-container">
            <div className="mk-section-head on-dark">
              <span className="mk-eyebrow light">الأنظمة</span>
              <h2 className="mk-h2">ماذا نقدّم؟</h2>
            </div>
            <div className="mk-cards-4">
              {features.map((f) => (
                <article className="mk-feature" key={f.title}>
                  <div className="mk-feature-icon">
                    <Icon name={f.icon} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FOR WHOM */}
        <section id="for-whom" className="mk-section">
          <div className="mk-container">
            <div className="mk-section-head">
              <span className="mk-eyebrow">{forWhom.eyebrow}</span>
              <h2 className="mk-h2">{forWhom.title}</h2>
            </div>
            <div className="mk-cards-3">
              {forWhom.segments.map((s) => (
                <article className="mk-card mk-card-accent" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="mk-section mk-cta">
          <div className="mk-container">
            <div className="mk-cta-box">
              <div>
                <h2 className="mk-h2">{contact.title}</h2>
                <p>{contact.body}</p>
              </div>
              <div className="mk-cta-actions">
                <a
                  className="mk-btn mk-btn-primary mk-btn-lg"
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('السلام عليكم، مهتم بحلول قريب للزراعة الرقمية')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  واتساب
                </a>
                <a className="mk-btn mk-btn-ghost-dark mk-btn-lg" href={`tel:${contact.phone}`}>
                  اتصال
                </a>
                <a className="mk-link" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mk-footer">
        <div className="mk-container mk-footer-inner">
          <strong>
            قريب <span>Qareeb</span>
          </strong>
          <span>حلول الزراعة الرقمية للشركات الناشئة</span>
        </div>
      </footer>
    </div>
  )
}
