import './MenteeJourney.css';

export default function MenteeJourney() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      subtitle: 'Weeks 1-4',
      icon: '🚀',
      steps: [
        'Application & Matching',
        'First Meeting Setup',
        'Goal Setting',
        'Relationship Building'
      ],
      outcome: 'You\'ve found your guide',
      color: 'phase-gold'
    },
    {
      phase: 'Phase 2',
      title: 'Momentum',
      subtitle: 'Weeks 5-12',
      icon: '📈',
      steps: [
        'Weekly Check-ins',
        'Skill Development',
        'Industry Exposure',
        'Network Building'
      ],
      outcome: 'You\'re gaining momentum',
      color: 'phase-green'
    },
    {
      phase: 'Phase 3',
      title: 'Transformation',
      subtitle: 'Months 4-12',
      icon: '💼',
      steps: [
        'Career Projects',
        'Interview Prep',
        'Job Applications',
        'Industry Connections'
      ],
      outcome: 'You\'re landing opportunities',
      color: 'phase-navy'
    },
    {
      phase: 'Phase 4',
      title: 'Growth',
      subtitle: 'Year 2-3',
      icon: '🌟',
      steps: [
        'Career Advancement',
        'Leadership Skills',
        'Mentor Others',
        'Long-term Planning'
      ],
      outcome: 'You\'re building your future',
      color: 'phase-gold'
    }
  ];

  return (
    <section className="mentee-journey">
      <div className="container">
        <div className="journey-header scroll-fade-up">
          <h2>Your Mentee Journey</h2>
          <div className="ascent-line ascent-line-center"></div>
          <p>
            Mentorship isn't a quick fix. It's a 3-year transformation. Here's exactly what happens to you.
          </p>
        </div>

        <div className="journey-timeline">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`journey-phase scroll-fade-up ${phase.color}`}
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className="phase-icon">{phase.icon}</div>

              <div className="phase-header">
                <span className="phase-label">{phase.phase}</span>
                <h3>{phase.title}</h3>
                <p className="phase-subtitle">{phase.subtitle}</p>
              </div>

              <div className="phase-steps">
                {phase.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="step-item">
                    <span className="step-dot"></span>
                    <span className="step-text">{step}</span>
                  </div>
                ))}
              </div>

              <div className="phase-outcome">
                <p>{phase.outcome}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="journey-cta scroll-fade-up" style={{ animationDelay: '1s' }}>
          <h3>Ready for your transformation?</h3>
          <button className="btn btn-primary">
            Start Your Journey →
          </button>
        </div>
      </div>
    </section>
  );
}
