import { NavLink } from 'react-router-dom'
import { services } from '../../data/servicesData'

export default function ServiceTabBar() {
  return (
    <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-gray-100 rounded-xl">
      {services.map((s) => (
        <NavLink
          key={s.id}
          to={`/services/${s.id}`}
          className={({ isActive }) =>
            `px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
            }`
          }
        >
          {s.title}
        </NavLink>
      ))}
    </div>
  )
}
