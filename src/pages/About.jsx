import { motion } from 'framer-motion'
import MissionVision from '../components/about/MissionVision'
import Strengths from '../components/about/Strengths'

export default function About() {
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
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">About Us</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900">
              Who We Are
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              AirSnort Technologies Ltd is a security and smart infrastructure company providing
              reliable and customised technology solutions for residential, commercial and industrial properties.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With over a decade of collective industry experience, we deliver integrated systems
              that improve security, communication, connectivity and operational efficiency. Our team
              of trained technicians and engineers combines technical expertise, quality equipment and
              professional installation to provide practical solutions that are scalable and built to last.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From CCTV surveillance and automated gate systems to structured networking, access control
              and video intercom solutions, we help clients protect their properties while creating safer,
              smarter and better-connected environments.
            </p>
          </motion.div>

          <div className="mb-12">
            <MissionVision />
          </div>

          <Strengths />
        </div>
      </section>
    </motion.div>
  )
}
