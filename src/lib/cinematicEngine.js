import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export function createCinematicEngine({ reducedMotion = false } = {}) {
  let lenis = null
  const cleanups = []

  if (!reducedMotion) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.35,
    })
    lenis.on('scroll', ScrollTrigger.update)
    const ticker = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)
    cleanups.push(() => gsap.ticker.remove(ticker))

    const fill = document.querySelector('.story-progress-fill')
    if (fill) {
      const st = ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => gsap.set(fill, { scaleX: self.progress }),
      })
      cleanups.push(() => st.kill())
    }
  }

  // Scene parallax + copy entrance
  document.querySelectorAll('.film-scene').forEach((scene) => {
    const bg = scene.querySelector('.film-scene-bg')
    const copy = scene.querySelector('.film-scene-copy')

    if (bg && !reducedMotion) {
      gsap.fromTo(
        bg,
        { scale: 1.12, y: 40 },
        {
          scale: 1,
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: scene,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }

    if (copy && !reducedMotion) {
      gsap.from(copy.children, {
        y: 48,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: scene,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })
    }
  })

  requestAnimationFrame(() => ScrollTrigger.refresh())

  return {
    lenis,
    destroy() {
      cleanups.forEach((fn) => fn())
      ScrollTrigger.getAll().forEach((t) => t.kill())
      lenis?.destroy()
    },
  }
}
