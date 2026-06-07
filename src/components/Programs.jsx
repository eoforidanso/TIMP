import './Programs.css';

export default function Programs() {
  const programs = [
    {
      icon: '→',
      title: 'Mentee Program',
      desc: 'Are you a young immigrant looking for career guidance, networks, and mentorship?',
      points: ['Matched with industry mentor', '12-month structured program', 'Career coaching & planning', 'Professional network access'],
      cta: 'Apply as Mentee',
      badge: 'For Ages 18–30'
    },
    {
      icon: '↑',
      title: 'Mentor Program',
      desc: 'Ready to invest your time and experience in the next generation?',
      points: ['Make meaningful impact', 'Structured training provided', 'Flexible time commitment', 'Build your leadership skills'],
      cta: 'Become a Mentor',
      badge: 'Professionals Welcome'
    },
    {
      icon: '◆',
      title: 'Corporate Partnerships',
      desc: 'Partner with TIMP to invest in emerging talent and build diverse teams.',
      points: ['Talent pipeline development', 'Employee mentorship programs', 'Internship placements', 'Community engagement'],
      cta: 'Partner With Us',
      badge: 'For Organizations'
    },
  ];

  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="programs-header fade-up">
          <span className="tag">Our Programs</span>
          <h2>Three Ways to Get Involved</h2>
          <div className="divider" />
        </div>

        <div className="programs-grid fade-up d1">
          {programs.map((prog, i) => (
            <div className="program-card" key={i}>
              <div className="program-icon">{prog.icon}</div>
              <span className="program-badge">{prog.badge}</span>
              <h3>{prog.title}</h3>
              <p className="program-desc">{prog.desc}</p>
              <ul className="program-points">
                {prog.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary btn-full">{prog.cta}</a>
            </div>
          ))}
        </div>

        <div className="programs-cta fade-up d2">
          <h3>Ready to invest in the next generation?</h3>
          <p>Whether you're looking for mentorship or ready to mentor, TIMP is where time meets impact.</p>
          <a href="#contact" className="btn btn-dark">Get Started Today</a>
        </div>
      </div>
    </section>
  );
}
