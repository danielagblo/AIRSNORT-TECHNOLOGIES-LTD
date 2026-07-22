import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiBars3, HiXMark, HiChevronDown, HiShieldCheck, HiLockClosed, HiWifi, HiTv } from 'react-icons/hi2'
import { services } from '../../data/servicesData'

const linkIcons = {
  surveillance: HiShieldCheck,
  'access-control': HiLockClosed,
  networking: HiWifi,
  'tv-satellite': HiTv,
}

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', hasDropdown: true },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact Us', isCta: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.jpg" alt="AirSnort" className="h-9 w-9 rounded-lg object-cover" />
            <span className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
              AirSnort <span className="text-primary">Technologies</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              if (l.hasDropdown) {
                return (
                  <div key={l.to} className="relative group">
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) =>
                        `flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`
                      }
                    >
                      {l.label}
                      <HiChevronDown className="w-3.5 h-3.5 mt-0.5 group-hover:rotate-180 transition-transform" />
                    </NavLink>
                    <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                      <div className="w-72 bg-white rounded-xl border border-gray-200 shadow-lg p-2">
                        {services.map((s) => {
                          const Icon = linkIcons[s.id]
                          return (
                            <Link
                              key={s.id}
                              to={`/services/${s.id}`}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <Icon className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{s.title}</p>
                                <p className="text-xs text-gray-500">{s.short}</p>
                              </div>
                            </Link>
                          )
                        })}
                        <div className="border-t border-gray-100 mt-1 pt-1">
                          <Link
                            to="/services"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-primary hover:bg-primary/5 transition-colors"
                          >
                            View All Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    l.isCta
                      ? 'ml-2 px-5 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-sm'
                      : `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`
                  }
                >
                  {l.label}
                </NavLink>
              )
            })}
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pb-4 pt-2">
          {links.map((l) => {
            if (l.hasDropdown) {
              return (
                <div key={l.to}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    {l.label}
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 space-y-1 pb-2">
                      {services.map((s) => {
                        const Icon = linkIcons[s.id]
                        return (
                          <Link
                            key={s.id}
                            to={`/services/${s.id}`}
                            onClick={() => { setOpen(false); setServicesOpen(false) }}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                          >
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <Icon className="w-3.5 h-3.5 text-primary" />
                            </div>
                            {s.title}
                          </Link>
                        )
                      })}
                      <Link
                        to="/services"
                        onClick={() => { setOpen(false); setServicesOpen(false) }}
                        className="block px-4 py-2.5 rounded-lg text-sm font-medium text-primary hover:bg-primary/5 transition-colors"
                      >
                        View All Services
                      </Link>
                    </div>
                  )}
                </div>
              )
            }
            return (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  l.isCta
                    ? 'block mt-2 px-4 py-3 bg-primary text-white text-sm font-semibold rounded-lg text-center'
                    : `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`
                }
              >
                {l.label}
              </NavLink>
            )
          })}
        </div>
      )}
    </nav>
  )
}
