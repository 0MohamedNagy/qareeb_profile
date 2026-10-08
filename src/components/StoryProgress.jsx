import React from 'react';

const CHAPTERS = [
  { id: 'home', label: 'البداية' },
  { id: 'about', label: 'المشكلة' },
  { id: 'workflows', label: 'الحل' },
  { id: 'trust', label: 'الثقة' },
  { id: 'contact', label: 'الخطوة' },
];

export function StoryProgress({ progress }) {
  return (
    <div className="story-progress" aria-hidden="true">
      <div className="story-progress-track">
        <div
          className="story-progress-fill"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
      <div className="story-chapters">
        {CHAPTERS.map((ch, i) => {
          const active = progress >= i / Math.max(1, CHAPTERS.length - 1) - 0.05;
          return (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className={`story-chapter ${active ? 'active' : ''}`}
            >
              <span className="story-chapter-dot" />
              <span className="story-chapter-label">{ch.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
