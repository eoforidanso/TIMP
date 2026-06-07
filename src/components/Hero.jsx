import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-overlay" />
        <div className="hero-pattern" />
      </div>

      <div className="container hero-content">
        <div className="hero-wrapper">
          <div className="hero-left fade-up d1">
            <div className="hero-eyebrow">
              <span className="flag gh" />
              <span className="flag us" />
              <span className="flag ca" />
              <span className="flag gb" />
              <span className="eyebrow-text">Empowering Young Immigrants Ages 18–30</span>
            </div>

            <h1 className="hero-title">
              We Invest Time.<br />
              We Build <span className="gold-text">Careers.</span>
            </h1>

            <p className="hero-sub">
              Mentorship for first-generation immigrants navigating transition, integration, and early career growth.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Apply as a Mentee ↗</a>
              <a href="#contact" className="btn btn-outline">Become a Mentor</a>
            </div>
          </div>

          <div className="hero-right fade-up d2">
            <div className="hero-visual">
              <svg viewBox="0 0 400 500" className="hero-graphic">
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c99738" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#c99738" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#1b2f45" stopOpacity="0.1" />
                  </linearGradient>
                  <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c99738" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#c99738" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Background glow */}
                <circle cx="200" cy="250" r="180" fill="url(#glowGradient)" className="glow-circle" />

                {/* Globe */}
                <circle cx="200" cy="250" r="120" fill="url(#globeGradient)" stroke="rgba(201,151,58,0.3)" strokeWidth="2" />

                {/* Climbing figure silhouette */}
                <g className="climber" transform="translate(200, 150)">
                  <circle r="12" fill="rgba(201,151,58,0.8)" />
                  <path d="M 0 12 L -15 35 M 0 12 L 15 35 M -15 35 L -20 60 M 15 35 L 20 60" stroke="rgba(201,151,58,0.6)" strokeWidth="3" strokeLinecap="round" />
                </g>

                {/* Upward motion lines */}
                <g className="motion-lines" opacity="0.4">
                  <path d="M 150 200 Q 160 180 170 160" stroke="rgba(201,151,58,0.3)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M 200 200 Q 210 170 220 140" stroke="rgba(201,151,58,0.3)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M 250 200 Q 240 170 230 140" stroke="rgba(201,151,58,0.3)" strokeWidth="2" fill="none" strokeLinecap="round" />
                </g>

                {/* Concentric circles for depth */}
                <circle cx="200" cy="250" r="100" fill="none" stroke="rgba(201,151,58,0.15)" strokeWidth="1" />
                <circle cx="200" cy="250" r="80" fill="none" stroke="rgba(201,151,58,0.1)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>

        <div className="hero-stats fade-up d3">
          {[
            { n: '500+', label: 'Immigrants Served' },
            { n: '200+', label: 'Trained Mentors' },
            { n: '85%', label: 'Career Placement Rate' },
            { n: '30+', label: 'Industries Represented' },
          ].map(({ n, label }) => (
            <div className="hero-stat" key={label}>
              <strong>{n}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span />
      </div>
    </section>
  );
}
