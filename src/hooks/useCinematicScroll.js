import { useEffect, useState } from 'react';

const CHAPTER_IDS = ['home', 'agri-tech', 'about', 'workflows', 'trust', 'contact'];

export function useCinematicScroll() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeChapter, setActiveChapter] = useState('home');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onMq = () => setReducedMotion(mq.matches);
    mq.addEventListener?.('change', onMq);

    let ticking = false;
    const update = () => {
      const y = window.scrollY || 0;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, y / max));
      setScrollY(y);
      setProgress(p);

      document.documentElement.style.setProperty('--scroll-progress', String(p));
      document.documentElement.style.setProperty('--scroll-y', `${y}px`);

      if (!mq.matches) {
        document.documentElement.style.setProperty('--parallax-slow', `${y * 0.08}px`);
        document.documentElement.style.setProperty('--parallax-mid', `${y * 0.18}px`);
        document.documentElement.style.setProperty('--parallax-fast', `${y * 0.32}px`);
        document.documentElement.style.setProperty('--parallax-depth', `${Math.min(y * 0.04, 40)}px`);
      } else {
        document.documentElement.style.setProperty('--parallax-slow', '0px');
        document.documentElement.style.setProperty('--parallax-mid', '0px');
        document.documentElement.style.setProperty('--parallax-fast', '0px');
        document.documentElement.style.setProperty('--parallax-depth', '0px');
      }

      // Active chapter by viewport center
      const mid = y + window.innerHeight * 0.35;
      let current = CHAPTER_IDS[0];
      for (const id of CHAPTER_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) current = id;
      }
      setActiveChapter(current);
      document.body.dataset.chapter = current;

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      mq.removeEventListener?.('change', onMq);
    };
  }, []);

  return { progress, scrollY, activeChapter, reducedMotion };
}
