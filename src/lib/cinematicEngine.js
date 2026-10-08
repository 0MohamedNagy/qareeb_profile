import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

/**
 * Ultimate cinematic engine for Qareeb landing.
 * Lenis smooth scroll + GSAP ScrollTrigger scenes.
 */
export function createCinematicEngine({ reducedMotion = false } = {}) {
  let lenis = null;
  const cleanups = [];

  if (!reducedMotion) {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const ticker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);
    cleanups.push(() => gsap.ticker.remove(ticker));

    // Progress bar
    const fill = document.querySelector('.story-progress-fill');
    if (fill) {
      const st = ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          gsap.set(fill, { scaleX: self.progress });
        },
      });
      cleanups.push(() => st.kill());
    }
  }

  // ── Hero entrance ──
  const hero = document.querySelector('.cinematic-hero');
  if (hero && !reducedMotion) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-top-tag', { y: 30, opacity: 0, duration: 0.7 })
      .from(
        '.hero-title-cinematic .line',
        { y: 60, opacity: 0, duration: 0.85, stagger: 0.12 },
        '-=0.35'
      )
      .from('.hero-lead', { y: 24, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.hero-qf-item', { y: 16, opacity: 0, duration: 0.45, stagger: 0.08 }, '-=0.3')
      .from('.hero-actions .btn', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.25')
      .from(
        '.hero-showcase-card',
        { x: -40, opacity: 0, scale: 0.92, duration: 1, ease: 'power2.out' },
        '-=0.85'
      )
      .from('.hero-scroll-hint', { opacity: 0, duration: 0.5 }, '-=0.3');

    // Parallax shapes
    gsap.to('.hero-shape-1', {
      y: 120,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
    gsap.to('.hero-shape-2', {
      y: -80,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
    gsap.to('.hero-showcase-card', {
      y: 80,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 },
    });
  }

  // ── Intertitles ──
  document.querySelectorAll('.story-intertitle').forEach((el) => {
    if (reducedMotion) {
      el.classList.add('visible');
      return;
    }
    gsap.from(el.querySelectorAll('.intertitle-act, .intertitle-title, .intertitle-sub, .intertitle-line'), {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ── Generic section reveals ──
  document.querySelectorAll('.reveal, .reveal-right, .reveal-left, .reveal-scale').forEach((el) => {
    if (reducedMotion) {
      el.classList.add('visible');
      return;
    }
    const from =
      el.classList.contains('reveal-right')
        ? { x: 50, opacity: 0 }
        : el.classList.contains('reveal-left')
          ? { x: -50, opacity: 0 }
          : el.classList.contains('reveal-scale')
            ? { scale: 0.9, opacity: 0 }
            : { y: 36, opacity: 0 };

    gsap.fromTo(el, from, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      onComplete: () => el.classList.add('visible'),
    });
  });

  // ── Horizontal workflow reel (pinned scroll) ──
  const reelSection = document.querySelector('.cinematic-workflows');
  const reel = document.querySelector('.workflow-reel');
  if (reelSection && reel && !reducedMotion && window.innerWidth >= 768) {
    const getScroll = () => reel.scrollWidth - reel.clientWidth;
    const st = gsap.to(reel, {
      x: () => (document.documentElement.dir === 'rtl' ? getScroll() : -getScroll()),
      ease: 'none',
      scrollTrigger: {
        trigger: reelSection,
        start: 'top top+=60',
        end: () => `+=${getScroll() + 200}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });
    cleanups.push(() => st.scrollTrigger?.kill());
  }

  // ── Stats count-up ──
  document.querySelectorAll('[data-count]').forEach((el) => {
    const raw = el.getAttribute('data-count') || '0';
    const target = parseFloat(String(raw).replace(/[^0-9.]/g, '')) || 0;
    const hasPlus = String(raw).includes('+');
    const hasPct = String(raw).includes('%');
    const hasK = String(raw).includes('K');

    if (reducedMotion) {
      el.textContent = raw;
      return;
    }

    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        let t = Math.round(obj.val);
        el.textContent = `${hasPlus ? '+' : ''}${t}${hasPct ? '%' : hasK ? 'K' : ''}`;
      },
    });
  });

  // ── Cards stagger on enter ──
  document.querySelectorAll('.stagger-children').forEach((group) => {
    const kids = group.querySelectorAll(':scope > *');
    if (!kids.length || reducedMotion) return;
    gsap.from(kids, {
      y: 28,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: group,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ── CTA magnetic buttons ──
  if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.btn-magnetic').forEach((btn) => {
      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.35, ease: 'power2.out' });
      };
      const onLeave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
      };
      btn.addEventListener('pointermove', onMove);
      btn.addEventListener('pointerleave', onLeave);
      cleanups.push(() => {
        btn.removeEventListener('pointermove', onMove);
        btn.removeEventListener('pointerleave', onLeave);
      });
    });
  }

  // Refresh after images/fonts
  requestAnimationFrame(() => ScrollTrigger.refresh());

  return {
    lenis,
    destroy() {
      cleanups.forEach((fn) => fn());
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis?.destroy();
    },
  };
}
