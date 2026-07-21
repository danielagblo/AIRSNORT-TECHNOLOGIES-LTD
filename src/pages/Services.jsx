import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../data/servicesData'
import ServiceCard from '../components/services/ServiceCard'

export default function Services() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <section className="bg-gradient-to-br from-gray-50 to-white pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-12"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">What We Do</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Comprehensive security, automation, networking and smart infrastructure solutions
              tailored to your property&apos;s unique needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Link key={s.id} to={`/services/${s.id}`} className="block group">
                <ServiceCard service={s} index={i} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
