import './MentorRecruitment.css';

export default function MentorRecruitment() {
  const benefits = [
    {
      icon: '⏰',
      title: 'Your Time Matters',
      description: '1 hour per week. That\'s it. We handle all the coaching, curriculum, and admin.'
    },
    {
      icon: '🎓',
      title: 'Training Provided',
      description: 'Comprehensive mentor onboarding, quarterly workshops, and ongoing coaching from our team.'
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      description: 'Shape the next generation of immigrant leaders. Your mentee\'s success is your legacy.'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Join 250+ mentors. Network with leaders, CEOs, and changemakers who share your values.'
    }
  ];

  return (
    <section className="mentor-recruitment">
      <div className="container">
        <div className="mentor-header scroll-fade-up">
          <span className="section-tag">BECOME A MENTOR</span>
          <h2>Be the Guide They Need</h2>
          <div className="ascent-line ascent-line-center"></div>
          <p>
            You got where you are because someone believed in you. Pay it forward. Shape careers. Change lives.
          </p>
        </div>

        <div className="mentor-content">
          <div className="mentor-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card scroll-scale-in" style={{ animationDelay: `${(index + 1) * 0.15}s` }}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mentor-impact scroll-fade-up" style={{ animationDelay: '0.6s' }}>
            <h3>Mentor Impact in Numbers</h3>
            <div className="impact-stats">
              <div className="impact-stat">
                <span className="impact-number">250+</span>
                <span className="impact-label">Active Mentors</span>
              </div>
              <div className="impact-stat">
                <span className="impact-number">500+</span>
                <span className="impact-label">Mentees Guided</span>
              </div>
              <div className="impact-stat">
                <span className="impact-number">85%</span>
                <span className="impact-label">Career Placement</span>
              </div>
              <div className="impact-stat">
                <span className="impact-number">10k+</span>
                <span className="impact-label">Hours Invested</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mentor-cta scroll-fade-up" style={{ animationDelay: '0.8s' }}>
          <h3>Ready to make a difference?</h3>
          <button className="btn btn-primary">
            Become a Mentor
          </button>
        </div>
      </div>
    </section>
  );
}
