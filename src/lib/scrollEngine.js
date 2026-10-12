import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export function createScrollEngine({ reducedMotion = false } = {}) {
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
  }

  const fill = document.querySelector('.pf-progress-fill')
  if (fill) {
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => gsap.set(fill, { scaleX: self.progress }),
    })
    cleanups.push(() => st.kill())
  }

  if (!reducedMotion) {
    gsap.utils.toArray('.pf-card, .pf-who-grid article').forEach((el) => {
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

    const aboutLeft = document.querySelector('.pf-about-left')
    if (aboutLeft) {
      gsap.from(aboutLeft, {
        x: -30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutLeft,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })
    }
  }

  requestAnimationFrame(() => ScrollTrigger.refresh())

  return {
    destroy() {
      cleanups.forEach((fn) => fn())
      ScrollTrigger.getAll().forEach((t) => t.kill())
      lenis?.destroy()
    },
  }
}
