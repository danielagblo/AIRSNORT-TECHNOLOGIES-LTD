import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiClock, HiWrenchScrewdriver, HiArrowPath, HiShieldCheck } from 'react-icons/hi2'

const strengths = [
  {
    icon: HiClock,
    title: 'Over 10 Years of Collective Experience',
    description:
      'Practical industry knowledge across security, automation and networking installations.',
  },
  {
    icon: HiWrenchScrewdriver,
    title: 'Customised Solutions',
    description:
      'Every system is carefully designed around the client\'s property, requirements and budget.',
  },
  {
    icon: HiArrowPath,
    title: 'End-to-End Support',
    description:
      'We support our clients from consultation and system design to installation, maintenance and after-sales service.',
  },
  {
    icon: HiShieldCheck,
    title: 'Quality Equipment',
    description:
      'We use reliable and industry-approved products selected for lasting performance.',
  },
]

function StrengthCard({ strength, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = strength.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 text-sm">{strength.title}</h4>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{strength.description}</p>
      </div>
    </motion.div>
  )
}

export default function Strengths() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span className="text-xs font-semibold text-primary uppercase tracking-widest">Why Choose Us</span>
        <h3 className="mt-2 text-2xl font-bold text-gray-900">Our Strengths</h3>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {strengths.map((s, i) => (
          <StrengthCard key={s.title} strength={s} index={i} />
        ))}
      </div>
    </section>
  )
}
