import React from 'react';
import { navItems } from '../data/contentData';

export function Header({ scrolled, menuOpen, setMenuOpen, closeMenu }) {
  return (
    <>
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`} aria-label="القائمة">
        <ul>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={closeMenu}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <header className={`header header-v2 ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-v2-inner">
          <a href="#home" className="logo-v2">
            قريب <span>Qareeb</span>
          </a>
          <ul className="nav-links">
            {navItems.map(({ href, label }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary btn-sm header-cta">تواصل</a>
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="القائمة"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
    </>
  );
}
