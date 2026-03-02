import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const WHATSAPP_URL = `https://wa.me/31854015937?text=${encodeURIComponent('Hallo! Ik wil graag een afspraak plannen voor jullie schoonmaakdiensten.')}`

export default function Hero() {
  const heroRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const subRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.fromTo(line1Ref.current, 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(line2Ref.current, 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.9 }, 
      '-=0.6'
    )
    .fromTo(subRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7 }, 
      '-=0.4'
    )
    .fromTo(imgRef.current, 
      { scale: 1.05, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1 }, 
      '-=1'
    )
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-stone-50"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 via-transparent to-stone-100/50" />
      <motion.div
        className="absolute top-1/4 right-0 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-teal-200/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-40 sm:w-80 h-40 sm:h-80 rounded-full bg-amber-100/30 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 gap-10 items-center">
          {/* Content - first on mobile for instant impact */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="overflow-hidden">
              <h1 
                ref={line1Ref}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-stone-900 leading-[1.05] tracking-tight"
                style={{ fontFamily: 'Instrument Serif, serif' }}
              >
                The Clean.
              </h1>
            </div>
            <div className="overflow-hidden mt-1 sm:mt-2">
              <h2 
                ref={line2Ref}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-stone-600"
              >
                Professionele schoonmaak
              </h2>
            </div>
            <p 
              ref={subRef}
              className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg text-stone-500 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Zwaar vervuilde, licht beschadigde of ontbrekende gordijnen, banken en tapijten – wij zijn de experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10 justify-center lg:justify-start">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-[#25D366] text-white font-semibold rounded-xl min-h-[52px] touch-manipulation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Plan via WhatsApp
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-teal-600 text-white font-medium tracking-wider uppercase text-sm rounded-xl min-h-[52px] touch-manipulation"
                whileHover={{ scale: 1.02, backgroundColor: '#0f766e' }}
                whileTap={{ scale: 0.98 }}
              >
                Neem contact op
              </motion.a>
            </div>
          </div>

          <motion.div 
            ref={imgRef}
            className="order-1 lg:order-2 relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:pl-12"
          >
            <div className="aspect-[4/5] rounded-xl sm:rounded-lg overflow-hidden shadow-2xl shadow-stone-200/50">
              <img
                src="/images/4.jpeg"
                alt="Professionele schoonmaak van banken"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-stone-300 flex justify-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1 h-2 bg-stone-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
