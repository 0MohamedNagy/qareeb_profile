import { useEffect } from 'react';

/** Desktop soft spotlight that follows the pointer — film lighting feel */
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

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const loop = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      el.style.transform = `translate(${cx}px, ${cy}px)`;
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
    window.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      el.remove();
    };
  }, [enabled]);
}
