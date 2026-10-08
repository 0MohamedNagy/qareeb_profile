import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export function createCinematicEngine({ reducedMotion = false } = {}) {
  let lenis = null
  const cleanups = []

  if (!reducedMotion) {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
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

    // Subtle entrance for sections
    gsap.utils.toArray('.mk-card, .mk-step, .mk-feature').forEach((el) => {
      gsap.from(el, {
        y: 28,
        opacity: 0,
        duration: 0.55,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      })
    })
  }

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
