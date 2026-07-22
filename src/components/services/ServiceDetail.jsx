import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi2'

export default function ServiceDetail({ service }) {
  const Icon = service.icon

  return (
    <article className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full" />
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.features.map((f) => (
            <div key={f} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <HiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{f}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <div className="border-t border-gray-200" />

      {service.subServices.map((sub, i) => (
        <motion.section
          key={sub.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-3">{sub.title}</h2>
          <ul className="space-y-2">
            {sub.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>
      ))}

      <div className="border-t border-gray-200" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 sm:p-10 text-center"
      >
        <Icon className="w-10 h-10 text-white/80 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Interested in {service.title}?</h3>
        <p className="text-blue-100 text-sm max-w-lg mx-auto mb-6">
          Let us discuss your property&apos;s requirements and provide a tailored solution.
        </p>
        <a
          href={`mailto:airsnorttech25@gmail.com?subject=Enquiry about ${service.title}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
        >
          Get a Free Consultation
        </a>
      </motion.div>
    </article>
  )
}
