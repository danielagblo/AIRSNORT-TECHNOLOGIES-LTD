import { motion } from 'framer-motion'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

export default function Contact() {
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
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Get in Touch</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Talk to us about your next security, automation, networking or smart infrastructure project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127068.39701928593!2d-0.21729472196302014!3d5.603717364999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed5f1e3a9e8bb!2sAccra%2C%20Ghana!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AirSnort Technologies Location"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
