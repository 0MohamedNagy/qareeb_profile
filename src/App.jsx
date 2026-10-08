import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AgriTechSection } from './components/AgriTechSection';
import { TechServicesSection } from './components/TechServicesSection';
import { ProblemSection } from './components/ProblemSection';
import { WorkflowsSection } from './components/WorkflowsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { TrustSection } from './components/TrustSection';
import { VisionSection } from './components/VisionSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { StoryProgress } from './components/StoryProgress';
import { FilmAtmosphere } from './components/FilmAtmosphere';
import { StoryIntertitle } from './components/StoryIntertitle';
import { useActiveChapter, useReducedMotion } from './hooks/useCinematicScroll';
import { useCursorGlow } from './hooks/useCursorGlow';
import { createCinematicEngine } from './lib/cinematicEngine';
import './index.css';
import './cinematic.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const activeChapter = useActiveChapter();
  const reducedMotion = useReducedMotion();

  useCursorGlow(!reducedMotion);

  // Boot GSAP + Lenis engine after paint
  useEffect(() => {
    let engine = null;
    const t = window.setTimeout(() => {
      engine = createCinematicEngine({ reducedMotion });
    }, 50);
    return () => {
      window.clearTimeout(t);
      engine?.destroy();
    };
  }, [reducedMotion]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowScrollTop(window.scrollY > 400);
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
    <div className="app-root cinematic-root cinematic-max">
      <FilmAtmosphere />
      <StoryProgress activeChapter={activeChapter} />

      <button
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="العودة للأعلى"
      >
        <ArrowLeft size={20} style={{ transform: 'rotate(90deg)' }} />
      </button>

      <Header
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        closeMenu={closeMenu}
      />

      <main className="story-reel">
        <div className="story-chapter-block" data-chapter="1">
          <HeroSection />
        </div>

        <StoryIntertitle
          act="الفصل الأول"
          title="العالم اللي بنبنيه"
          subtitle="زراعة · تقنية · مجتمع محلي"
        />

        <div className="story-chapter-block" data-chapter="2">
          <AgriTechSection />
          <TechServicesSection />
        </div>

        <StoryIntertitle
          act="الفصل الثاني"
          title="المشكلة"
          subtitle="التشتت في الأدوات والثقة والتجربة"
        />

        <div className="story-chapter-block" data-chapter="3">
          <ProblemSection />
        </div>

        <StoryIntertitle
          act="الفصل الثالث"
          title="الحل"
          subtitle="منصة واحدة… مسارات متعددة"
        />

        <div className="story-chapter-block" data-chapter="4">
          <WorkflowsSection />
          <AchievementsSection />
          <TrustSection />
        </div>

        <StoryIntertitle
          act="الخاتمة"
          title="الرؤية والخطوة الجاية"
          subtitle="انضم للقصة"
        />

        <div className="story-chapter-block" data-chapter="5">
          <VisionSection />
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
