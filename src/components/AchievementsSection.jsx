import React, { useEffect, useRef, useState } from 'react';
import { achievements } from '../data/contentData';

function parseTarget(value) {
  const clean = String(value).replace(/[^0-9.]/g, '');
  return parseFloat(clean) || 0;
}

function formatDisplay(raw, target) {
  const prefix = String(raw).startsWith('+') ? '+' : '';
  const suffix = String(raw).includes('%') ? '%' : String(raw).includes('K') ? 'K' : '';
  if (suffix === 'K') return `${prefix}${Math.round(target)}${suffix}`;
  if (suffix === '%') return `${prefix}${Math.round(target)}${suffix}`;
  return `${prefix}${Math.round(target)}${suffix}`;
}

function CountUp({ value, active }) {
  const target = parseTarget(value);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setN(target);
      return;
    }
    let start = null;
    const dur = 1400;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(target * eased);
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [active, target]);

  return <span className="stat-number">{formatDisplay(value, n)}</span>;
}

export function AchievementsSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="achievements" className="stats cinematic-stats" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal" style={{ color: '#fff' }}>
          أرقام تتكلم
        </h2>
        <p className="section-subtitle reveal">أثر قريب على الأرض — إنتاجية، قطعان، ومزارع</p>
        <div className="stats-grid stagger-children">
          {achievements.map((a) => (
            <div className="stat-item reveal" key={a.label}>
              <CountUp value={a.value} active={active} />
              <span className="stat-label">{a.label}</span>
              {a.desc ? <span className="stat-desc">{a.desc}</span> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
