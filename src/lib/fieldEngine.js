import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export function createFieldEngine({ reducedMotion = false } = {}) {
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
  }

  // Progress
  const fill = document.querySelector('.field-progress-fill, .story-progress-fill')
  if (fill) {
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => gsap.set(fill, { scaleX: self.progress }),
    })
    cleanups.push(() => st.kill())
  }

  // Layer active states on rail
  document.querySelectorAll('.field-layer').forEach((layer, i) => {
    ScrollTrigger.create({
      trigger: layer,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setRail(i),
      onEnterBack: () => setRail(i),
    })

    if (!reducedMotion) {
      const main = layer.querySelector('.field-layer-main')
      if (main) {
        gsap.from(main.children, {
          y: 50,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: layer,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        })
      }
    }
  })

  function setRail(index) {
    document.querySelectorAll('.field-rail-dot').forEach((dot, i) => {
      dot.classList.toggle('is-on', i === index)
    })
  }

  if (!reducedMotion) {
    gsap.utils.toArray('.field-sys-card, .field-who-row article').forEach((el) => {
      gsap.from(el, {
        y: 28,
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
    destroy() {
      cleanups.forEach((fn) => fn())
      ScrollTrigger.getAll().forEach((t) => t.kill())
      lenis?.destroy()
    },
  }
}
