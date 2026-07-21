import { useState } from 'react'
import { HiPaperAirplane, HiCheckCircle } from 'react-icons/hi2'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm text-center">
        <HiCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 text-sm">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
            placeholder="024 XXX XXXX"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Interested In
          </label>
          <select
            id="service"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors bg-white"
          >
            <option value="">Select a service...</option>
            <option value="surveillance">Surveillance &amp; Perimeter Security</option>
            <option value="access-control">Access Control &amp; Entrance Automation</option>
            <option value="networking">Networking &amp; Structured Cabling</option>
            <option value="tv-satellite">TV, Satellite &amp; Integrated Technology</option>
            <option value="other">Other / General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors resize-none"
            placeholder="Tell us about your project or requirements..."
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-sm"
        >
          <HiPaperAirplane className="w-4 h-4" />
          Send Message
        </button>
      </div>
    </form>
  )
}
