import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const locations = [
  'Ziekenhuizen',
  'Militaire gebouwen',
  'Overheidsgebouwen',
  'Kantoren',
  'Kinderdagverblijven',
  'Scholen',
  'Theaters',
  'Bouwplaatsen',
  'Toiletten',
  'Kleedkamers',
  'Zwembaden',
  'Industriële gebouwen',
]

export default function Services() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      if (!item) return
      gsap.fromTo(item,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 92%',
            toggleActions: 'play none none reverse'
          },
          delay: i * 0.04
        }
      )
    })
  }, [])

  return (
    <section 
      id="diensten" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-40 bg-stone-50"
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
            Onze Diensten
          </span>
          <h2 
            className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-stone-900"
            style={{ fontFamily: 'Instrument Serif, serif' }}
          >
            Complete schoonmaak op diverse locaties
          </h2>
          <p className="mt-4 sm:mt-6 text-stone-600 leading-relaxed text-base sm:text-lg">
            Van ziekenhuizen tot industriële gebouwen – wij verzorgen professionele schoonmaakdiensten overal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {locations.map((location, i) => (
            <motion.div
              key={location}
              ref={el => itemsRef.current[i] = el}
              className="group p-4 sm:p-6 bg-white rounded-xl border border-stone-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 min-h-[72px] sm:min-h-0 flex items-center touch-manipulation"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="font-medium text-stone-800 text-sm sm:text-base">{location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
