import React from 'react';
import { Search } from 'lucide-react';
import { navItems } from '../data/contentData';

export function Header({ scrolled, menuOpen, setMenuOpen, closeMenu }) {
  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Nav */}
      <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`} aria-label="القائمة الرئيسية">
        <ul>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={closeMenu}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="logo" aria-label="قريب Qareeb">
            <span className="logo-icon-badge">
              <Search size={22} strokeWidth={2.5} />
            </span>
            <span className="logo-text">
              قريب <span>Qareeb</span>
            </span>
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
    </>
  );
}
