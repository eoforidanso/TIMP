import './FooterCTA.css';

export default function FooterCTA() {
  return (
    <section className="footer-cta-banner">
      <div className="cta-background"></div>

      <div className="container cta-content">
        <div className="cta-text scroll-fade-up">
          <h2>Your journey deserves a guide.</h2>
          <p>Start your ascent today.</p>
        </div>

        <div className="cta-buttons scroll-fade-up" style={{ animationDelay: '0.2s' }}>
          <button className="btn btn-primary">
            Apply as a Mentee →
          </button>
          <button className="btn btn-outline">
            Become a Mentor
          </button>
        </div>

        <div className="cta-subtext scroll-fade-up" style={{ animationDelay: '0.4s' }}>
          <p>Join 500+ young immigrants building careers. <span>No cost. Just commitment.</span></p>
        </div>
      </div>
    </section>
  );
}
