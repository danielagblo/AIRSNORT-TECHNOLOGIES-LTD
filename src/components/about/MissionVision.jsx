import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiLightBulb, HiEye } from 'react-icons/hi2'

export default function MissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <HiLightBulb className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
        <p className="text-gray-600 leading-relaxed">
          To provide intelligent, affordable and scalable technology solutions that
          strengthen security, improve communication and enhance operational efficiency
          for our clients.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <HiEye className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
        <p className="text-gray-600 leading-relaxed">
          To become Ghana&apos;s most trusted name in surveillance, security automation,
          networking and smart infrastructure services.
        </p>
      </motion.div>
    </div>
  )
}
