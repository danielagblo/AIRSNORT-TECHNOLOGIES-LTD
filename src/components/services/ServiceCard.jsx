import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiArrowRight } from 'react-icons/hi2'

export default function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="group p-6 sm:p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-primary/30 hover:shadow-md transition-all h-full flex flex-col">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{service.tagline}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>

        <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.short}</p>

        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 group-hover:gap-2 transition-all">
          Learn more <HiArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.div>
  )
}
