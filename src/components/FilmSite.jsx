import React from 'react'
import { scenes } from '../data/filmScenes'

export function FilmSite({ menuOpen, setMenuOpen }) {
  return (
    <>
      <header className="film-nav">
        <a href="#scene-0" className="film-logo">قريب</a>
        <nav className="film-nav-links">
          <a href="#scene-1">التحدي</a>
          <a href="#scene-2">الحل</a>
          <a href="#scene-7">تواصل</a>
        </nav>
        <button
          className="film-menu-btn"
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="القائمة"
        >
          {menuOpen ? 'إغلاق' : 'قائمة'}
        </button>
      </header>

      {menuOpen && (
        <div className="film-mobile-menu">
          <a href="#scene-1" onClick={() => setMenuOpen(false)}>التحدي</a>
          <a href="#scene-2" onClick={() => setMenuOpen(false)}>الحل</a>
          <a href="#scene-7" onClick={() => setMenuOpen(false)}>تواصل</a>
        </div>
      )}

      <div className="story-progress" aria-hidden="true">
        <div className="story-progress-track">
          <div className="story-progress-fill" />
        </div>
      </div>

      <main className="film-reel">
        {scenes.map((scene, i) => (
          <section
            key={scene.id}
            id={`scene-${i}`}
            className={`film-scene film-scene--${scene.tone || 'dark'}`}
            style={scene.image ? { '--scene-img': `url(${scene.image})` } : undefined}
          >
            {scene.image && <div className="film-scene-bg" />}
            <div className="film-scene-veil" />
            <div className={`film-scene-copy film-align-${scene.align || 'center'}`}>
              {scene.kicker && <p className="film-kicker">{scene.kicker}</p>}
              <h1 className="film-title">{scene.title}</h1>
              {scene.body && <p className="film-body">{scene.body}</p>}
              {scene.cta && (
                <a className="film-cta" href={scene.cta.href}>
                  {scene.cta.label}
                </a>
              )}
            </div>
          </section>
        ))}
      </main>

      <footer className="film-footer">
        <span>قريب Qareeb</span>
        <span>حلول الزراعة الرقمية للشركات الناشئة</span>
      </footer>
    </>
  )
}
