import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  '/images/5.jpeg',
  '/images/4.jpeg',
  '/images/6.jpeg',
  '/images/7.jpeg',
  '/images/8.jpeg',
  '/images/3.jpeg',
]

export default function Gallery() {
  const sectionRef = useRef(null)
  const galleryRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      if (!item) return
      gsap.fromTo(item,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 95%',
            toggleActions: 'play none none reverse'
          },
          delay: i * 0.08
        }
      )
    })
  }, [])

  return (
    <section 
      id="galerij" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-40 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-teal-600 font-medium">
            Ons Werk
          </span>
          <h2 
            className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-stone-900"
            style={{ fontFamily: 'Instrument Serif, serif' }}
          >
            Professionele resultaten
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" ref={galleryRef}>
          {images.map((src, i) => (
            <motion.div
              key={src}
              ref={el => itemsRef.current[i] = el}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden reveal-img"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={src}
                alt={`Schoonmaak diensten ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
