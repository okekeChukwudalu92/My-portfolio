import { useState } from 'react'
import { profile } from '../data.js'

const socials = [
  { label: 'GH', href: `https://github.com/${profile.handle}` },
  { label: 'LI', href: 'https://facebook.com/Fredrick_Nate14/' },
  { label: 'FB', href: 'https://facebook.com/Fredrick_Nate/' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [note, setNote] = useState('')

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setNote(`Thanks, ${form.name || 'friend'} — message drafted. Opening your mail app...`)
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio contact',
    )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`
    window.location.href = mailto
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div>
            <div className="info-list">
              <div className="info-item">
                <span className="info-icon">@</span>
                <div>
                  <div className="info-label">Email</div>
                  <div className="info-value">{profile.email}</div>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">#</span>
                <div>
                  <div className="info-label">Phone</div>
                  <div className="info-value">{profile.phone}</div>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">~</span>
                <div>
                  <div className="info-label">Location</div>
                  <div className="info-value">{profile.location}</div>
                </div>
              </div>
            </div>
            <div className="social-row">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
            <p className="form-note">{note}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
