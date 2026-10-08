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
import { useCinematicScroll } from './hooks/useCinematicScroll';
import './index.css';

/* ── Scroll Reveal Hook ── */
function useScrollReveal() {
  useEffect(() => {
    const selector = '.reveal, .reveal-right, .reveal-left, .reveal-scale';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const watch = (root) => {
      const list = root instanceof Element && root.matches?.(selector) ? [root] : [];
      const nested = root.querySelectorAll ? root.querySelectorAll(selector) : [];
      [...list, ...nested].forEach((el) => {
        if (!el.classList.contains('visible')) observer.observe(el);
      });
    };

    watch(document);
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) watch(node);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { progress } = useCinematicScroll();

  useScrollReveal();

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
    <div className="app-root cinematic-root">
      <StoryProgress progress={progress} />

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
        {/* Chapter 1 — Opening shot */}
        <div className="story-chapter-block" data-chapter="1">
          <HeroSection />
        </div>

        {/* Chapter 2 — World / products */}
        <div className="story-chapter-block" data-chapter="2">
          <AgriTechSection />
          <TechServicesSection />
        </div>

        {/* Chapter 3 — Conflict */}
        <div className="story-chapter-block" data-chapter="3" id="problem-wrap">
          <ProblemSection />
        </div>

        {/* Chapter 4 — Resolution */}
        <div className="story-chapter-block" data-chapter="4">
          <WorkflowsSection />
          <AchievementsSection />
          <TrustSection />
        </div>

        {/* Chapter 5 — Closing */}
        <div className="story-chapter-block" data-chapter="5">
          <VisionSection />
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
