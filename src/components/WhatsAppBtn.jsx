import { FaWhatsapp } from 'react-icons/fa'
import { contactInfo } from '../data/contactData'

export default function WhatsAppBtn() {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-105 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline">Chat with us</span>
    </a>
  )
}
