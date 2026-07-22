import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowLeft } from 'react-icons/hi2'
import { services } from '../data/servicesData'
import ServiceDetail from '../components/services/ServiceDetail'

export default function ServiceDetailPage() {
  const { serviceId } = useParams()
  const service = services.find((s) => s.id === serviceId)

  if (!service) {
    return (
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Service not found</h1>
          <Link to="/services" className="text-primary hover:underline mt-4 inline-block">
            Back to services
          </Link>
        </div>
      </section>
    )
  }

  const Icon = service.icon

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      {/* Hero Banner */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${service.hero} pt-32 pb-16 lg:pb-20`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors mb-6"
            >
              <HiArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-sm text-white/70 font-medium uppercase tracking-wider">{service.tagline}</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">{service.title}</h1>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceDetail service={service} />
        </div>
      </section>
    </motion.div>
  )
}
