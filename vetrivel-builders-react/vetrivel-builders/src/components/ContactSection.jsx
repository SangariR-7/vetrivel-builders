import { useState } from 'react'

// Edit your real details here
const details = [
  { label: 'Phone', value: 'Your phone number', icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /> },
  { label: 'Location', value: 'Your location address', icon: <><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></> },
  { label: 'Email', value: 'yourname@domain.com', icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></> },
]
const empty = { name: '', phone: '', service: '', message: '' }

export default function ContactSection() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)
  const set = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    // TODO: send `form` to your backend / EmailJS / Formspree here
    console.log('Enquiry:', form)
    setSent(true)
    setForm(empty)
  }

  return (
    <section className="contact">
      <div className="wrap">
        <div>
          <small>GET IN TOUCH</small>
          <h2>Contact Us / Enquiry</h2>
          <p>Have a project in mind? We'd love to hear from you. Get in touch with us for more information or a free quote.</p>
          <div className="info">
            {details.map(d => (
              <div key={d.label}>
                <i><svg viewBox="0 0 24 24">{d.icon}</svg></i>
                <span><b>{d.label}</b>{d.value}</span>
              </div>
            ))}
          </div>
        </div>
        <form className="fm" onSubmit={submit}>
          {sent && <div className="ok">Thank you! We will contact you soon.</div>}
          <input name="name" placeholder="Your Name" value={form.name} onChange={set} required />
          <input name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={set} required />
          <select name="service" value={form.service} onChange={set} required>
            <option value="">Select Service</option>
            <option>Residential Construction</option>
            <option>Commercial Construction</option>
            <option>Renovation</option>
          </select>
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={set} />
          <button className="btn" type="submit">Get a Quote</button>
        </form>
      </div>
    </section>
  )
}
