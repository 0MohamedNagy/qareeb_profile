import { useEffect, useState } from 'react';

/**
 * Cinematic scroll: page progress + parallax offsets.
 * Respects prefers-reduced-motion.
 */
export function useCinematicScroll() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
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
      // Parallax factors (slower background = depth)
      if (!mq.matches) {
        document.documentElement.style.setProperty('--parallax-slow', `${y * 0.12}px`);
        document.documentElement.style.setProperty('--parallax-mid', `${y * 0.22}px`);
        document.documentElement.style.setProperty('--parallax-fast', `${y * 0.35}px`);
      } else {
        document.documentElement.style.setProperty('--parallax-slow', '0px');
        document.documentElement.style.setProperty('--parallax-mid', '0px');
        document.documentElement.style.setProperty('--parallax-fast', '0px');
      }
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

  return { progress, scrollY, reducedMotion };
}
