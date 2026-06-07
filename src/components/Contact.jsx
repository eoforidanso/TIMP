import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send to backend/email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-bg">
        <div className="contact-overlay" />
        <div className="contact-pattern" />
      </div>

      <div className="container">
        <div className="contact-header fade-up">
          <span className="tag">Get Involved</span>
          <h2>Let's Build Together</h2>
          <div className="divider" />
          <p>Whether you're seeking mentorship or ready to mentor, we'd love to hear from you.</p>
        </div>

        <div className="contact-grid fade-up d1">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="info-item">
              <span className="info-icon">✉</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:hello@timp.org">hello@timp.org</a>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>Based in 5 major cities across North America</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🔗</span>
              <div>
                <strong>Connect</strong>
                <div className="social-links">
                  <a href="#" aria-label="LinkedIn">LinkedIn</a>
                  <a href="#" aria-label="Instagram">Instagram</a>
                  <a href="#" aria-label="Twitter">Twitter</a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Quick Contact</h3>

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="interest">I'm Interested In *</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="mentee">Mentee Program</option>
                <option value="mentor">Mentor Program</option>
                <option value="partner">Corporate Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about yourself..."
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
