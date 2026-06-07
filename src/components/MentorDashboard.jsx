import './MentorDashboard.css';

export default function MentorDashboard() {
  const features = [
    { icon: '📅', title: 'Session Scheduling', desc: 'Easy booking & reminders' },
    { icon: '📊', title: 'Progress Tracking', desc: 'Monitor mentee growth' },
    { icon: '🎯', title: 'Goal Management', desc: 'Align on objectives' },
    { icon: '📚', title: 'Resource Library', desc: 'Curated mentoring materials' },
    { icon: '🤝', title: 'Community Events', desc: 'Network with mentors' },
    { icon: '🔔', title: 'Smart Reminders', desc: 'Never miss a check-in' }
  ];

  return (
    <section className="mentor-dashboard">
      <div className="container">
        <div className="dashboard-header scroll-fade-up">
          <h2>Mentor Dashboard Preview</h2>
          <div className="ascent-line ascent-line-center"></div>
          <p>
            Everything you need to mentor effectively. Built for mentors by mentors.
          </p>
        </div>

        <div className="dashboard-preview scroll-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="dashboard-mockup">
            <div className="dashboard-header-bar">
              <span className="dashboard-title">📊 Your Dashboard</span>
              <span className="dashboard-user">Welcome, Mentor!</span>
            </div>

            <div className="dashboard-content">
              <div className="dashboard-sidebar">
                <div className="sidebar-item active">Dashboard</div>
                <div className="sidebar-item">My Mentee</div>
                <div className="sidebar-item">Sessions</div>
                <div className="sidebar-item">Resources</div>
                <div className="sidebar-item">Community</div>
              </div>

              <div className="dashboard-main">
                <div className="dashboard-card">
                  <h4>Next Session</h4>
                  <p>Tuesday, 3:00 PM</p>
                  <p className="dashboard-detail">15 min prep recommended</p>
                </div>

                <div className="dashboard-card">
                  <h4>Mentee Progress</h4>
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                  <p className="dashboard-detail">3 of 6 goals completed</p>
                </div>

                <div className="dashboard-card">
                  <h4>Resources Available</h4>
                  <p>Resume templates, Interview guides, Career roadmaps</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card scroll-scale-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
