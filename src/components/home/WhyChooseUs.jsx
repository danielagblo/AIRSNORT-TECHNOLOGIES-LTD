import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiClock, HiWrenchScrewdriver, HiShieldCheck, HiArrowPath } from 'react-icons/hi2'

const strengths = [
  {
    icon: HiClock,
    title: '10+ Years Experience',
    description: 'Practical industry knowledge across security, automation and networking.',
  },
  {
    icon: HiWrenchScrewdriver,
    title: 'Customised Solutions',
    description: 'Every system designed around your property, requirements and budget.',
  },
  {
    icon: HiArrowPath,
    title: 'End-to-End Support',
    description: 'From consultation and design to installation, maintenance and after-sales care.',
  },
  {
    icon: HiShieldCheck,
    title: 'Quality Equipment',
    description: 'Industry-approved products selected for lasting performance and reliability.',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Why AirSnort</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600">
            We combine expertise, quality equipment and professional service to deliver solutions that last.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
