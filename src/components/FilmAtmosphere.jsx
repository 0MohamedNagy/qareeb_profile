import React from 'react';

/** Ambient film layer: grain + soft vignette + floating orbs */
export function FilmAtmosphere() {
  return (
    <div className="film-atmosphere" aria-hidden="true">
      <div className="film-vignette" />
      <div className="film-grain" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
    </div>
  );
}
