import { motion } from 'framer-motion'
import { HiShieldCheck, HiHome, HiBuildingOffice, HiUserGroup } from 'react-icons/hi2'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from '../CountUp'

const stats = [
  { icon: HiShieldCheck, value: '10+', label: 'Years of Experience' },
  { icon: HiBuildingOffice, value: '50+', label: 'Projects Completed' },
  { icon: HiUserGroup, value: '100+', label: 'Happy Clients' },
  { icon: HiHome, value: '4', label: 'Service Categories' },
]

function StatItem({ icon: Icon, value, label, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <CountUp value={value} className="text-3xl font-extrabold text-gray-900" />
      <span className="text-sm text-gray-500 mt-1">{label}</span>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
