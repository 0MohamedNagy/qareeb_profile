import React from 'react'
import {
  nav,
  hero,
  storyBeats,
  solution,
  features,
  forWhom,
  contact,
} from '../data/productContent'

function Icon({ name }) {
  const c = {
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
      <svg {...c}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    )
  if (name === 'path')
    return (
      <svg {...c}>
        <path d="M4 19h4a2 2 0 0 0 2-2V7a2 2 0 0 1 2-2h4" />
        <polyline points="18 5 21 5 21 8" />
      </svg>
    )
  if (name === 'startup')
    return (
      <svg {...c}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    )
  return (
    <svg {...c}>
      <path d="M3 12h4l3-9 4 18 3-9h4" />
    </svg>
  )
}

export function HybridSite({ menuOpen, setMenuOpen, scrolled }) {
  const close = () => setMenuOpen(false)

  return (
    <div className="hy">
      <div className="story-progress" aria-hidden="true">
        <div className="story-progress-track">
          <div className="story-progress-fill" />
        </div>
      </div>

      <header className={`hy-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="hy-wrap hy-nav-inner">
          <a href="#top" className="hy-logo">
            قريب <span>Qareeb</span>
          </a>
          <nav className="hy-links">
            {nav.map((i) => (
              <a key={i.href} href={i.href}>
                {i.label}
              </a>
            ))}
          </nav>
          <a className="hy-btn hy-btn-primary hy-btn-sm hy-nav-cta" href="#contact">
            تواصل
          </a>
          <button type="button" className="hy-burger" onClick={() => setMenuOpen((v) => !v)} aria-label="القائمة">
            <span /><span /><span />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="hy-drawer">
          {nav.map((i) => (
            <a key={i.href} href={i.href} onClick={close}>
              {i.label}
            </a>
          ))}
        </div>
      )}

      <main id="top">
        {/* —— HERO (SaaS clarity) —— */}
        <section className="hy-hero">
          <div className="hy-wrap hy-hero-grid">
            <div className="hy-hero-copy">
              <span className="hy-badge">{hero.badge}</span>
              <h1 className="hy-h1">{hero.title}</h1>
              <p className="hy-lead">{hero.subtitle}</p>
              <div className="hy-actions">
                <a className="hy-btn hy-btn-primary hy-btn-lg" href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </a>
                <a className="hy-btn hy-btn-ghost hy-btn-lg" href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
            <div className="hy-hero-panel" aria-hidden="true">
              <div className="hy-panel">
                <div className="hy-panel-bar">
                  <i /><i /><i />
                </div>
                <div className="hy-panel-body">
                  {[=['التشغيل', 'رقمي'], ['الأنظمة', 'واضحة'], ['التحول', 'مبسط']].map(
                    ([k, v]) => (
                      <div className="hy-row" key={k}>
                        <span>{k}</span>
                        <strong>{v}</strong>
                      </div>
                    )
                  )}
                  <div className="hy-bars">
                    <i style={{ height: '50%' }} />
                    <i style={{ height: '75%' }} />
                    <i style={{ height: '40%' }} />
                    <i style={{ height: '88%' }} />
                    <i style={{ height: '62%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* —— STORY BEATS (cinematic full-bleed) —— */}
        <div id="story">
          {storyBeats.map((beat) => (
            <section
              key={beat.id}
              className="hy-beat"
              style={{ '--beat-img': `url(${beat.image})` }}
            >
              <div className="hy-beat-bg" data-parallax />
              <div className="hy-beat-veil" />
              <div className="hy-wrap hy-beat-copy">
                <p className="hy-kicker">{beat.kicker}</p>
                <h2 className="hy-beat-title">{beat.title}</h2>
                <p className="hy-beat-body">{beat.body}</p>
              </div>
            </section>
          ))}
        </div>

        {/* —— SOLUTION (SaaS) —— */}
        <section id="solution" className="hy-block">
          <div className="hy-wrap">
            <div className="hy-head">
              <span className="hy-eyebrow">{solution.eyebrow}</span>
              <h2 className="hy-h2">{solution.title}</h2>
              <p className="hy-sub">{solution.body}</p>
            </div>
            <div className="hy-steps">
              {solution.steps.map((s) => (
                <div className="hy-step" key={s.n}>
                  <span className="hy-step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* —— SYSTEMS (dark SaaS) —— */}
        <section id="systems" className="hy-block hy-block-dark">
          <div className="hy-wrap">
            <div className="hy-head on-dark">
              <span className="hy-eyebrow light">الأنظمة</span>
              <h2 className="hy-h2">ماذا نقدّم؟</h2>
            </div>
            <div className="hy-feats">
              {features.map((f) => (
                <article className="hy-feat" key={f.title}>
                  <div className="hy-feat-icon">
                    <Icon name={f.icon} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* —— WHO —— */}
        <section id="who" className="hy-block hy-block-muted">
          <div className="hy-wrap">
            <div className="hy-head">
              <span className="hy-eyebrow">{forWhom.eyebrow}</span>
              <h2 className="hy-h2">{forWhom.title}</h2>
            </div>
            <div className="hy-cards">
              {forWhom.segments.map((s) => (
                <article className="hy-card" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* —— CONTACT —— */}
        <section id="contact" className="hy-block">
          <div className="hy-wrap">
            <div className="hy-cta">
              <div>
                <h2 className="hy-h2">{contact.title}</h2>
                <p>{contact.body}</p>
              </div>
              <div className="hy-cta-actions">
                <a
                  className="hy-btn hy-btn-primary hy-btn-lg"
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('السلام عليكم، مهتم بحلول قريب للزراعة الرقمية')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  واتساب
                </a>
                <a className="hy-btn hy-btn-ghost hy-btn-lg" href={`tel:${contact.phone}`}>
                  اتصال
                </a>
                <a className="hy-mail" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="hy-footer">
        <div className="hy-wrap hy-footer-inner">
          <strong>
            قريب <span>Qareeb</span>
          </strong>
          <span>حلول الزراعة الرقمية للشركات الناشئة</span>
        </div>
      </footer>
    </div>
  )
}
