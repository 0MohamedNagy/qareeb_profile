import React, { useEffect, useState } from 'react'
import { MarketingSite } from './components/MarketingSite'
import { createCinematicEngine } from './lib/cinematicEngine'
import { useReducedMotion } from './hooks/useCinematicScroll'
import './styles/tokens.css'
import './styles/marketing.css'

export default function App() {
  const reducedMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let engine = null
    const t = window.setTimeout(() => {
      engine = createCinematicEngine({ reducedMotion })
    }, 80)
    return () => {
      window.clearTimeout(t)
      engine?.destroy()
    }
  }, [reducedMotion])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <MarketingSite
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      scrolled={scrolled}
    />
  )
}
