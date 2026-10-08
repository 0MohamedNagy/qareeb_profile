import { useEffect } from 'react';

export function useCursorGlow(enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    const el = document.createElement('div');
    el.className = 'cursor-glow';
    el.setAttribute('aria-hidden', 'true');
    document.body.appendChild(el);

    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const loop = () => {
      cx += (x - cx) * 0.14;
      cy += (y - cy) * 0.14;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      el.classList.add('active');
    };
    const onLeave = () => el.classList.remove('active');

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      el.remove();
    };
  }, [enabled]);
}
