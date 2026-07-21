import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiArrowRight } from 'react-icons/hi2'
import { services } from '../../data/servicesData'

function ServicePreviewCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/services/${service.id}`}
        className="group block p-6 sm:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
          {service.description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 group-hover:gap-2 transition-all">
          Learn more <HiArrowRight className="w-3.5 h-3.5" />
        </span>
      </Link>
    </motion.div>
  )
}

export default function ServicesPreview() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">What We Do</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600">
            Comprehensive security, automation, networking and smart infrastructure solutions
            tailored to your property.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServicePreviewCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
