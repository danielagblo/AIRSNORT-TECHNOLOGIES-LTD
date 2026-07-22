import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({ value, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  const match = value.match(/^([\d.]+)(.*)$/)
  const target = match ? parseFloat(match[1]) : null
  const suffix = match ? match[2] : value

  useEffect(() => {
    if (!isInView || target === null) return

    let start = 0
    const duration = 1200
    const step = 16
    const totalSteps = duration / step
    const increment = target / totalSteps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)

    return () => clearInterval(timer)
  }, [isInView, target])

  if (target === null) {
    return <span ref={ref} className={className}>{value}</span>
  }

  return (
    <span ref={ref} className={className}>
      {isInView ? count : 0}{suffix}
    </span>
  )
}
