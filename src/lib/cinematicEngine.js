import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export function createCinematicEngine({ reducedMotion = false } = {}) {
  let lenis = null
  const cleanups = []

  if (!reducedMotion) {
    lenis = new Lenis({
      duration: 1.15,
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

    // Parallax on cinematic beats
    document.querySelectorAll('.hy-beat').forEach((beat) => {
      const bg = beat.querySelector('.hy-beat-bg')
      const copy = beat.querySelector('.hy-beat-copy')
      if (bg) {
        gsap.fromTo(
          bg,
          { scale: 1.12, y: 30 },
          {
            scale: 1,
            y: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: beat,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      }
      if (copy) {
        gsap.from(copy.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: beat,
            start: 'top 65%',
            toggleActions: 'play none none none',
          },
        })
      }
    })

    // Cards / steps / features
    gsap.utils.toArray('.hy-step, .hy-feat, .hy-card').forEach((el) => {
      gsap.from(el, {
        y: 24,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
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
