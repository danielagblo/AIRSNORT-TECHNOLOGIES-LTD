import { useState } from 'react'
import { HiPaperAirplane, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi2'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    const form = e.target
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      service: form.service.value,
      message: form.message.value,
    }

    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!json.success) {
        throw new Error(json.error || 'Something went wrong.')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err.message || 'Failed to send. Please try again.')
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm text-center">
        <HiCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 text-sm">
          Thank you for reaching out. You will receive an SMS confirmation shortly.
          We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => { setSubmitted(false); setError('') }}
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
              name="name"
              type="text"
              required
              disabled={sending}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors disabled:opacity-50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={sending}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors disabled:opacity-50"
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
            name="phone"
            type="tel"
            disabled={sending}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors disabled:opacity-50"
            placeholder="024 XXX XXXX"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            disabled={sending}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors bg-white disabled:opacity-50"
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
            name="message"
            required
            rows={5}
            disabled={sending}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors resize-none disabled:opacity-50"
            placeholder="Tell us about your project or requirements..."
          />
        </div>

        {error && (
          <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
            <HiExclamationCircle className="w-5 h-5 shrink-0 mt-0.5" />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={sending}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <HiPaperAirplane className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  )
}
