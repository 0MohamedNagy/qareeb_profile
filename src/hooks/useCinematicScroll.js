import { useEffect, useState } from 'react';

const CHAPTER_IDS = ['home', 'agri-tech', 'about', 'workflows', 'trust', 'contact'];

export function useActiveChapter() {
  const [activeChapter, setActiveChapter] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.35;
      let current = CHAPTER_IDS[0];
      for (const id of CHAPTER_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) current = id;
      }
      setActiveChapter(current);
      document.body.dataset.chapter = current;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return activeChapter;
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener?.('change', fn);
    return () => mq.removeEventListener?.('change', fn);
  }, []);
  return reduced;
}
