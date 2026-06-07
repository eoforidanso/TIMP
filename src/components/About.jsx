import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header fade-up">
          <span className="tag">About TIMP</span>
          <h2>We Invest in People, Not Programs</h2>
          <div className="divider" />
          <p className="about-lead">
            Young immigrants aged 18–30 are in the most defining years of their lives. They're building
            identities across cultures, navigating new systems, and launching careers in a place they've
            only recently called home.
          </p>
        </div>

        <div className="about-grid fade-up d1">
          <div className="about-card">
            <div className="about-icon time" />
            <h3>Time</h3>
            <p>The most transformative resource. Our mentors commit real time—not resources or referrals, but consistent, personal presence.</p>
          </div>

          <div className="about-card">
            <div className="about-icon ascent" />
            <h3>Ascent</h3>
            <p>The journey toward stability and opportunity. We walk beside mentees through transition, helping them find footing in a new landscape.</p>
          </div>

          <div className="about-card">
            <div className="about-icon career" />
            <h3>Career Mobility</h3>
            <p>The path to long-term economic freedom. Skills, networks, and confidence compound over time into real career momentum.</p>
          </div>
        </div>

        <div className="about-mission fade-up d2">
          <div className="mission-text">
            <h3>Our Mission</h3>
            <p>
              To pair first-generation immigrants with trained mentors who guide them through the three most critical transitions:
            </p>
            <ul>
              <li><strong>Transition:</strong> From student to professional</li>
              <li><strong>Integration:</strong> From isolated to embedded in community & networks</li>
              <li><strong>Career Development:</strong> From entry-level to sustainable, upward mobility</li>
            </ul>
          </div>

          <div className="mission-stat">
            <span className="big-number">18-30</span>
            <span className="stat-label">The defining years</span>
            <p>Young immigrants in this age band are making decisions that will shape the next two decades of their lives.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
