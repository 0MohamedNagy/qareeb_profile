import React from 'react';

const CHAPTERS = [
  { id: 'home', label: 'البداية' },
  { id: 'about', label: 'المشكلة' },
  { id: 'workflows', label: 'الحل' },
  { id: 'trust', label: 'الثقة' },
  { id: 'contact', label: 'الخطوة' },
];

export function StoryProgress({ activeChapter }) {
  return (
    <div className="story-progress" aria-hidden="true">
      <div className="story-progress-track">
        <div className="story-progress-fill" />
      </div>
      <div className="story-chapters">
        {CHAPTERS.map((ch) => {
          const active =
            activeChapter === ch.id ||
            (ch.id === 'about' && (activeChapter === 'agri-tech' || activeChapter === 'tech-services'));
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
