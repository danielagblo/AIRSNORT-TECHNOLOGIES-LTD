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

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <section className="bg-gradient-to-br from-gray-50 to-white pt-32 pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors mb-6"
            >
              <HiArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">{service.title}</h1>
            <p className="text-primary font-semibold text-sm mb-8">{service.tagline}</p>
          </motion.div>

          <ServiceDetail service={service} index={0} />
        </div>
      </section>
    </motion.div>
  )
}
