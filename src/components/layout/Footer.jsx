import { Link } from 'react-router-dom'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { contactInfo } from '../../data/contactData'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.jpg" alt="AirSnort" className="h-8 w-8 rounded-lg object-cover" />
              <span className="text-base font-bold text-white">
                AirSnort <span className="text-primary-light">Technologies</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Smart Security. Seamless Connectivity. Reliable Control.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Security, Automation, Networking &amp; Smart Infrastructure Solutions
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/projects', label: 'Our Projects' },
                { to: '/contact', label: 'Contact Us' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/services/surveillance', label: 'Surveillance & Security' },
                { to: '/services/access-control', label: 'Access Control' },
                { to: '/services/networking', label: 'Networking & Cabling' },
                { to: '/services/tv-satellite', label: 'TV & Satellite' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <HiEnvelope className="w-4 h-4 text-primary-light shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <HiPhone className="w-4 h-4 text-primary-light shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    {contactInfo.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <HiMapPin className="w-4 h-4 text-primary-light shrink-0" />
                  {contactInfo.address}
                </div>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AirSnort Technologies Ltd. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Residential | Commercial | Industrial
          </p>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs text-gray-600">
            Designed by{' '}
            <a href="http://skytechghana.com/" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">
              Sky Tech Ghana
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
