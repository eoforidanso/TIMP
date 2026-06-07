import './Framework.css';

export default function Framework() {
  const pillars = [
    {
      letter: 'T',
      title: 'Time, Transition & Trust',
      value: 'Consistent mentorship builds lasting relationships.',
      desc: 'We invest real, consistent time. Our mentors commit to regular touchpoints, building trust as the foundation of growth.',
      bullets: ['Weekly mentorship sessions', 'Personal relationship building', 'Trust-based accountability'],
      icon: '⏰'
    },
    {
      letter: 'I',
      title: 'Integration, Insight & Industry',
      value: 'Your network is your net worth.',
      desc: 'We help mentees understand new systems and connect with industry professionals who share their background.',
      bullets: ['Navigating workplace culture', 'Professional network access', 'Industry connections'],
      icon: '🌐'
    },
    {
      letter: 'M',
      title: 'Mentorship, Momentum & Mobility',
      value: 'Strategic planning accelerates career growth.',
      desc: 'We build momentum through structured skill-building and career planning designed for upward mobility.',
      bullets: ['Career coaching & planning', 'Skill development roadmaps', 'Advancement strategies'],
      icon: '📈'
    },
    {
      letter: 'P',
      title: 'Progress, Peak Potential & Professional Growth',
      value: 'Success is measured by your full potential.',
      desc: 'We measure growth not by checkboxes, but by helping you realize your peak potential and long-term success.',
      bullets: ['Goal tracking & milestones', 'Professional development', 'Long-term career planning'],
      icon: '⭐'
    },
  ];

  return (
    <section className="framework" id="framework">
      <div className="framework-bg">
        <div className="framework-pattern" />
      </div>

      <div className="container">
        <div className="framework-header fade-up">
          <span className="tag">The TIMP Framework</span>
          <h2>Four Pillars of Support</h2>
          <div className="divider" />
          <p>
            Our mentorship model is built on four interconnected pillars, each designed to
            address a specific challenge young immigrants face during their transition years.
          </p>
        </div>

        <div className="pillars-grid fade-up d1">
          {pillars.map((p, i) => (
            <div className="pillar-card" key={p.letter}>
              <div className="pillar-accent" style={{animationDelay: `${i * 0.1}s`}} />
              <div className="pillar-icon">{p.icon}</div>
              <div className="pillar-letter">{p.letter}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-value">{p.value}</p>
              <p className="pillar-desc">{p.desc}</p>
              <ul className="pillar-bullets">
                {p.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="framework-flow fade-up d2">
          <h3>How It Works</h3>
          <div className="flow-steps">
            {[
              { n: '1', title: 'Match', desc: 'We pair mentees with mentors based on industry, values, and goals.' },
              { n: '2', title: 'Build', desc: 'Trust is built through consistent, personal mentorship over 12+ months.' },
              { n: '3', title: 'Grow', desc: 'Skills, networks, and confidence compound into real career momentum.' },
              { n: '4', title: 'Ascend', desc: 'Mentees move into stable roles, build generational wealth, and mentor others.' },
            ].map((s, i) => (
              <div className="flow-step" key={i}>
                <span className="flow-num">{s.n}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
