import React, { useEffect, useState } from 'react'
import { FieldSite } from './components/FieldSite'
import { createFieldEngine } from './lib/fieldEngine'
import { useReducedMotion } from './hooks/useCinematicScroll'
import './styles/tokens.css'
import './styles/field.css'

export default function App() {
  const reducedMotion = useReducedMotion()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let engine = null
    const t = window.setTimeout(() => {
      engine = createFieldEngine({ reducedMotion })
    }, 60)
    return () => {
      window.clearTimeout(t)
      engine?.destroy()
    }
  }, [reducedMotion])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return <FieldSite menuOpen={open} setMenuOpen={setOpen} />
}
