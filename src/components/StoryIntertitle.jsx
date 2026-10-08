import React from 'react';

export function StoryIntertitle({ act, title, subtitle }) {
  return (
    <div className="story-intertitle">
      <span className="intertitle-act">{act}</span>
      <h2 className="intertitle-title">{title}</h2>
      {subtitle ? <p className="intertitle-sub">{subtitle}</p> : null}
      <div className="intertitle-line" />
    </div>
  );
}
