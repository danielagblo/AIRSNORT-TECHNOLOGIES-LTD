import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiHome, HiBuildingOffice2, HiCog6Tooth } from 'react-icons/hi2'

const markets = [
  {
    icon: HiHome,
    title: 'Residential',
    description: 'Smart homes, private residences, apartment complexes and gated communities.',
    gradient: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: HiBuildingOffice2,
    title: 'Commercial',
    description: 'Office buildings, retail spaces, hotels, and corporate facilities.',
    gradient: 'from-slate-50 to-gray-100',
    border: 'border-gray-200',
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-700',
  },
  {
    icon: HiCog6Tooth,
    title: 'Industrial',
    description: 'Warehouses, construction sites, factories, and large-scale industrial facilities.',
    gradient: 'from-amber-50 to-orange-50',
    border: 'border-amber-100',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
]

export default function MarketsPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Who We Serve</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Markets We Serve
          </h2>
          <p className="mt-4 text-gray-600">
            Tailored solutions for every sector — from private homes to large industrial facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {markets.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 sm:p-8 rounded-2xl border ${m.border} ${m.gradient}`}
            >
              <div className={`w-12 h-12 rounded-xl ${m.iconBg} flex items-center justify-center mb-4`}>
                <m.icon className={`w-6 h-6 ${m.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{m.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
