import React, { useEffect, useState } from 'react'
import { PortfolioSite } from './components/PortfolioSite'
import { createScrollEngine } from './lib/scrollEngine'
import { useReducedMotion } from './hooks/useCinematicScroll'
import './styles/portfolio.css'

export default function App() {
  const reducedMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let engine = null
    const t = window.setTimeout(() => {
      engine = createScrollEngine({ reducedMotion })
    }, 50)
    return () => {
      window.clearTimeout(t)
      engine?.destroy()
    }
  }, [reducedMotion])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return <PortfolioSite menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
}
