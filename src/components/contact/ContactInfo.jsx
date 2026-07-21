import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { contactInfo } from '../../data/contactData'

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Get in Touch</h3>
        <p className="text-sm text-gray-600 mb-6">
          Ready to discuss your project? Reach out to us through any of the channels below.
        </p>

        <ul className="space-y-4">
          <li>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 text-sm text-gray-700 hover:text-primary transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <HiEnvelope className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="block text-xs text-gray-500">Email</span>
                <span className="font-medium">{contactInfo.email}</span>
              </div>
            </a>
          </li>

          <li>
            <div className="flex items-start gap-3 text-sm text-gray-700">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <HiPhone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="block text-xs text-gray-500">Phone</span>
                {contactInfo.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, '')}`}
                    className="block font-medium hover:text-primary transition-colors"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>
          </li>

          <li>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-700 hover:text-green-600 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                <FaWhatsapp className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <span className="block text-xs text-gray-500">WhatsApp</span>
                <span className="font-medium">Chat with us</span>
              </div>
            </a>
          </li>

          <li>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <HiMapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="block text-xs text-gray-500">Location</span>
                <span className="font-medium">{contactInfo.address}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
