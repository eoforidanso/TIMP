import { useState } from 'react';
import './NewsletterSignup.css';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="newsletter-signup">
      <div className="container">
        <div className="newsletter-card scroll-fade-up">
          <div className="newsletter-content">
            <h2>Join the TIMP Community</h2>
            <p>Get stories of transformation, career opportunities, and impact updates delivered to your inbox.</p>

            {submitted ? (
              <div className="success-message">
                <span className="success-icon">✓</span>
                <p>Thanks for subscribing! Check your email for a welcome message.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Subscribe →
                  </button>
                </div>
                <p className="privacy-note">
                  We care about your privacy. <a href="#">Read our policy.</a>
                </p>
              </form>
            )}
          </div>

          <div className="newsletter-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">📖</span>
              <span>Success Stories</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💼</span>
              <span>Opportunities</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🌟</span>
              <span>Impact Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
