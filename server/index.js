import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const ARKESEL_URL = 'https://sms.arkesel.com/api/v2/sms/send'
const ARKESEL_HEADERS = { 'api-key': process.env.ARKESEL_API_KEY }

function sendSms(to, message) {
  return axios.post(
    ARKESEL_URL,
    {
      sender_id: process.env.ARKESEL_SENDER_ID || 'AirSnortTech',
      recipient: Array.isArray(to) ? to : [to],
      message,
    },
    { headers: ARKESEL_HEADERS },
  )
}

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email and message are required.' })
  }

  try {
    const serviceLabel = service
      ? ({
          surveillance: 'Surveillance & Security',
          'access-control': 'Access Control',
          networking: 'Networking & Cabling',
          'tv-satellite': 'TV & Satellite',
        }[service] || service)
      : 'General Inquiry'

    const results = []

    // 1. Auto-reply to the sender
    if (phone) {
      const cleanPhone = phone.replace(/[\s-]/g, '')
      const formatted = cleanPhone.startsWith('0') ? '233' + cleanPhone.slice(1) : cleanPhone.startsWith('233') ? cleanPhone : null

      if (formatted) {
        const replyMsg = `Dear ${name}, thank you for contacting AirSnort Technologies Ltd. We have received your ${serviceLabel.toLowerCase()} enquiry and will get back to you shortly. Stay connected.`
        const replyRes = await sendSms(formatted, replyMsg)
        results.push({ to: 'sender', status: replyRes.status })
      }
    }

    // 2. Notify the owner
    const ownerPhone = process.env.OWNER_PHONE
    if (ownerPhone) {
      const ownerMsg = `New enquiry from ${name} (${email}, ${phone || 'no phone'}). Service: ${serviceLabel}. Message: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}`
      const ownerRes = await sendSms(ownerPhone, ownerMsg)
      results.push({ to: 'owner', status: ownerRes.status })
    }

    res.json({ success: true, results })
  } catch (err) {
    const detail = err.response?.data || err.message
    console.error('Arkesel error:', detail)
    res.status(500).json({ success: false, error: 'Failed to send SMS. Please try again later.' })
  }
})

app.listen(PORT, () => {
  console.log(`AirSnort SMS server running on http://localhost:${PORT}`)
})
