import './Framework.css';

export default function Framework() {
  const pillars = [
    {
      letter: 'T',
      title: 'Time, Transition & Trust',
      desc: 'We invest real, consistent time. Our mentors commit to regular touchpoints, not sporadic advice. Building trust is the foundation.',
      bullets: ['Weekly mentorship sessions', 'Personal relationship building', 'Trust-based accountability'],
      color: 'gold'
    },
    {
      letter: 'I',
      title: 'Integration, Insight & Industry',
      desc: 'We help mentees understand new systems and connect with industry professionals. Insight comes from lived experience; industry comes from networks.',
      bullets: ['Navigating workplace culture', 'Professional network access', 'Industry mentors & guides'],
      color: 'green'
    },
    {
      letter: 'M',
      title: 'Mentorship, Momentum & Mobility',
      desc: 'We build momentum through structured skill-building and career planning. Mobility means moving up, not just staying in place.',
      bullets: ['Career coaching & planning', 'Skill development roadmaps', 'Advancement strategies'],
      color: 'navy'
    },
    {
      letter: 'P',
      title: 'Progress, Peak Potential & Professional Growth',
      desc: 'We measure success not by checkboxes but by peak potential realized. What does full potential look like for each mentee? That\'s our north star.',
      bullets: ['Goal tracking & milestones', 'Professional development', 'Long-term success planning'],
      color: 'red'
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
            <div className={`pillar pillar-${p.color}`} key={p.letter}>
              <div className="pillar-header">
                <span className="pillar-letter">{p.letter}</span>
                <h3>{p.title}</h3>
              </div>
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
