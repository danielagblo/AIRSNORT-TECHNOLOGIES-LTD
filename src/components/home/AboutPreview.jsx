import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiArrowRight } from 'react-icons/hi2'

export default function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">About Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Security &amp; Smart Infrastructure Experts
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              AirSnort Technologies Ltd is a security and smart infrastructure company providing
              reliable and customised technology solutions for residential, commercial and industrial
              properties across Ghana.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              With over a decade of collective industry experience, our team of trained technicians and
              engineers delivers integrated systems that improve security, communication, connectivity
              and operational efficiency.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors mt-5"
            >
              Learn More About Us
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'CCTV & Surveillance', desc: 'Clear visibility & intrusion detection' },
              { label: 'Access Control', desc: 'Gates, biometrics & intercom systems' },
              { label: 'Networking', desc: 'Structured cabling & data networks' },
              { label: 'TV & Smart Systems', desc: 'Satellite, AV & integrated tech' },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
