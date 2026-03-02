import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.fromTo(textRef.current, 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    )
    .fromTo(imgRef.current, 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, 
      '-=0.6'
    )
  }, [])

  return (
    <section 
      id="over-ons" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-40 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={textRef}>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm uppercase tracking-[0.3em] text-teal-600 font-medium"
            >
              Over Ons
            </motion.span>
            <h2 
              className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-stone-900"
              style={{ fontFamily: 'Instrument Serif, serif' }}
            >
              Geen probleem te groot
            </h2>
            <p className="mt-5 sm:mt-8 text-base sm:text-lg text-stone-600 leading-relaxed">
              Zwaar vervuilde, licht beschadigde of ontbrekende gordijnen, banken en tapijten zijn geen probleem – wij zijn de experts.
            </p>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-stone-600 leading-relaxed">
              Ons ervaren personeel, dat gebruikmaakt van professionele apparatuur, verzorgt complete schoonmaakdiensten op diverse locaties.
            </p>
            <motion.div
              className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
                hidden: {}
              }}
            >
              {['Professioneel', 'Betrouwbaar', 'Ervaren'].map((word) => (
                <motion.span
                  key={word}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="px-3 sm:px-4 py-2 bg-stone-100 text-stone-700 rounded-lg text-sm font-medium"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div ref={imgRef} className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <motion.div 
                className="aspect-[3/4] rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src="/images/1.jpeg"
                  alt="Schoonmaak diensten"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="aspect-[3/4] rounded-xl overflow-hidden mt-8 sm:mt-12"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src="/images/2.jpeg"
                  alt="Professionele apparatuur"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
