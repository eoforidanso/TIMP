import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-overlay" />
        <div className="hero-pattern" />
      </div>

      <div className="container hero-content">
        <div className="hero-eyebrow fade-up">
          <span className="flag gh" />
          <span className="flag us" />
          <span className="flag ca" />
          <span className="flag gb" />
          <span className="eyebrow-text">Empowering Young Immigrants Ages 18–30</span>
        </div>

        <h1 className="hero-title fade-up d1">
          We Invest Time.<br />
          We Guide the <span className="gold-text">Climb.</span><br />
          We Build Careers.
        </h1>

        <p className="hero-sub fade-up d2">
          The Immigrant Mentorship Project pairs first-generation immigrants with
          trained mentors who walk beside them through transition, integration,
          and early career development.
        </p>

        <div className="hero-acronym fade-up d3">
          {[
            { letter: 'T', label: 'Time · Transition · Trust' },
            { letter: 'I', label: 'Integration · Insight · Industry' },
            { letter: 'M', label: 'Mentorship · Momentum · Mobility' },
            { letter: 'P', label: 'Progress · Peak Potential · Professional Growth' },
          ].map(({ letter, label }) => (
            <div className="acronym-item" key={letter}>
              <span className="acronym-letter">{letter}</span>
              <span className="acronym-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions fade-up d4">
          <a href="#contact" className="btn btn-primary">Apply as Mentee ↗</a>
          <a href="#contact" className="btn btn-outline">Become a Mentor</a>
        </div>

        <div className="hero-stats fade-up d5">
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
