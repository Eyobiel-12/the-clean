import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_URL = `https://wa.me/31854015937?text=${encodeURIComponent('Hallo! Ik wil graag een afspraak plannen voor bankenreiniging.')}`

export default function Specialty() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 78%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.fromTo(imgRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    )
    .fromTo(textRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 
      '-=0.5'
    )
  }, [])

  return (
    <section 
      id="banken" 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-24 bg-teal-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 gap-8 lg:gap-20 items-center">
          {/* Image first on mobile - our strongest visual */}
          <motion.div 
            ref={imgRef}
            className="order-1 w-full lg:order-2"
          >
            <div className="aspect-[4/5] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50">
              <img
                src="/images/4.jpeg"
                alt="Professionele bankenreiniging"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div ref={textRef} className="order-2 lg:order-1 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm uppercase tracking-[0.3em] text-teal-600 font-medium"
            >
              Ook voor u
            </motion.span>
            <h2 
              className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display text-stone-900"
              style={{ fontFamily: 'Instrument Serif, serif' }}
            >
              Banken reinigen
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Banken, fauteuils en meubelstoffering verdienen dezelfde professionele aanpak. Met onze apparatuur en expertise maken we ook de meest vervuilde banken weer als nieuw.
            </p>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-6 sm:mt-8 px-6 sm:px-8 py-4 bg-[#25D366] text-white font-semibold rounded-xl min-h-[52px] touch-manipulation w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Plan bankenreiniging
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
