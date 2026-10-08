import React, { useEffect, useState } from 'react'
import { FilmSite } from './components/FilmSite'
import { createCinematicEngine } from './lib/cinematicEngine'
import { useReducedMotion } from './hooks/useCinematicScroll'
import './index.css'
import './film-site.css'

export default function App() {
  const reducedMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let engine = null
    const t = window.setTimeout(() => {
      engine = createCinematicEngine({ reducedMotion })
    }, 100)
    return () => {
      window.clearTimeout(t)
      engine?.destroy()
    }
  }, [reducedMotion])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <div className="film-root">
      <FilmSite menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}
