import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { EventsSection } from './components/EventsSection';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { AchievementsSection } from './components/AchievementsSection';
import { TrustSection } from './components/TrustSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { createCinematicEngine } from './lib/cinematicEngine';
import { useReducedMotion } from './hooks/useCinematicScroll';
import './index.css';
import './cinematic.css';
import './design-v2.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let engine = null;
    const t = window.setTimeout(() => {
      engine = createCinematicEngine({ reducedMotion });
    }, 80);
    return () => {
      window.clearTimeout(t);
      engine?.destroy();
    };
  }, [reducedMotion]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const closeMenu = () => {
    document.body.style.overflow = '';
    setMenuOpen(false);
  };

  return (
    <div className="app-root design-v2">
      <div className="story-progress" aria-hidden="true">
        <div className="story-progress-track">
          <div className="story-progress-fill" />
        </div>
      </div>

      <button
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="الأعلى"
      >
        <ArrowLeft size={18} style={{ transform: 'rotate(90deg)' }} />
      </button>

      <Header
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        closeMenu={closeMenu}
      />

      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <EventsSection />
        <HowItWorksSection />
        <AchievementsSection />
        <TrustSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
