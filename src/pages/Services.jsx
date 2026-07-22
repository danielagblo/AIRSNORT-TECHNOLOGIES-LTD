import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiArrowRight, HiShieldCheck, HiAcademicCap, HiWrenchScrewdriver, HiLifebuoy, HiHome, HiBuildingOffice2, HiCog6Tooth, HiCheck } from 'react-icons/hi2'
import { services } from '../data/servicesData'
import ServiceCard from '../components/services/ServiceCard'

const stats = [
  { icon: HiAcademicCap, value: '10+', label: 'Years Experience' },
  { icon: HiShieldCheck, value: '50+', label: 'Projects Delivered' },
  { icon: HiLifebuoy, value: '100+', label: 'Clients Served' },
  { icon: HiWrenchScrewdriver, value: 'End-to-End', label: 'Support' },
]

const approach = [
  {
    icon: HiAcademicCap,
    title: 'Consultation',
    description: 'We assess your property, understand your needs, and recommend the right solution.',
  },
  {
    icon: HiWrenchScrewdriver,
    title: 'Professional Installation',
    description: 'Our trained technicians install every system with precision and attention to detail.',
  },
  {
    icon: HiLifebuoy,
    title: 'After-Sales Support',
    description: 'We provide ongoing maintenance, troubleshooting, and system guidance after installation.',
  },
]

const markets = [
  {
    icon: HiHome,
    title: 'Residential',
    description: 'Smart homes, private residences, apartment complexes and gated communities.',
  },
  {
    icon: HiBuildingOffice2,
    title: 'Commercial',
    description: 'Office buildings, retail spaces, hotels, and corporate facilities.',
  },
  {
    icon: HiCog6Tooth,
    title: 'Industrial',
    description: 'Warehouses, construction sites, factories, and large-scale industrial facilities.',
  },
]

const reasons = [
  'Experienced technical team with practical knowledge',
  'Customised solutions designed around your needs and budget',
  'Quality industry-approved equipment built to last',
  'Neat, safe, organised installations with attention to detail',
  'Timely project delivery within agreed timelines',
]

function SectionHeader({ label, title, description }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      <span className="text-xs font-semibold text-primary uppercase tracking-widest">{label}</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
      {description && <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>}
    </div>
  )
}

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Services() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark pt-32 pb-20 lg:pb-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold text-blue-200 uppercase tracking-widest">What We Do</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-blue-100/80 leading-relaxed max-w-2xl">
              From CCTV surveillance and automated gates to structured networking and integrated smart systems
              — we deliver end-to-end security and technology solutions for properties of every scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
              >
                Get a Free Consultation
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-extrabold text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              label="Our Expertise"
              title="Comprehensive Service Categories"
              description="Tailored security, automation, networking and smart infrastructure solutions for residential, commercial and industrial properties."
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Link key={s.id} to={`/services/${s.id}`} className="block group">
                <ServiceCard service={s} index={i} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              label="How We Work"
              title="Our Approach"
              description="From initial consultation to ongoing support — we partner with you every step of the way."
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.15}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="relative mb-4">
                    <span className="text-5xl font-extrabold text-primary/10">0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              label="Who We Serve"
              title="Markets We Serve"
              description="We deliver tailored solutions across residential, commercial and industrial sectors."
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {markets.map((m, i) => (
              <FadeIn key={m.title} delay={i * 0.15}>
                <div className="p-6 sm:p-8 bg-white rounded-2xl border border-gray-200 shadow-sm text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <m.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <FadeIn>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">Why Choose Us</span>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                    A Trusted Partner for Smarter, Safer Properties
                  </h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    At AirSnort Technologies Ltd, we understand that every property has different security,
                    access and connectivity needs. We provide carefully planned solutions backed by professional
                    installation, quality equipment and dependable after-sales support.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="space-y-3">
                  {reasons.map((r) => (
                    <div key={r} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <HiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{r}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              Talk to us about your next security, automation, networking or smart infrastructure project.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
              >
                Get a Free Consultation
                <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-dark text-white font-semibold rounded-lg border border-blue-300/30 hover:bg-primary-dark/80 transition-colors"
              >
                View Our Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
