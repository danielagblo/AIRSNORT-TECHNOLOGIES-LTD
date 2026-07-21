import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCheck } from 'react-icons/hi2'

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
      <div className="p-6 sm:p-8 bg-white rounded-2xl border border-gray-200 shadow-sm h-full">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-xs text-primary font-semibold uppercase tracking-wider">{service.tagline}</p>
            <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>

        <div className="space-y-6">
          {service.subServices.map((sub) => (
            <div key={sub.title}>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">{sub.title}</h4>
              <ul className="space-y-1.5">
                {sub.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <HiCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
