import './Impact.css';

export default function Impact() {
  return (
    <section className="impact" id="impact">
      <div className="impact-bg">
        <div className="impact-overlay" />
      </div>

      <div className="container">
        <div className="impact-header fade-up">
          <span className="tag">Our Impact</span>
          <h2>Results That Matter</h2>
          <div className="divider" />
        </div>

        <div className="impact-metrics fade-up d1">
          {[
            { num: '500+', label: 'Immigrants Mentored', color: 'gold' },
            { num: '89%', label: 'Career Progression Rate', color: 'green' },
            { num: '$15K+', label: 'Avg Salary Increase', color: 'navy' },
            { num: '250+', label: 'Active Mentors', color: 'red' },
          ].map((m, i) => (
            <div className={`metric metric-${m.color}`} key={i}>
              <span className="metric-num">{m.num}</span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="impact-stories fade-up d2">
          <h3>Success Stories</h3>
          <div className="stories-grid">
            {[
              {
                name: 'Maria H.',
                role: 'Software Engineer',
                story: '"When I arrived, I was lost between two worlds. My mentor helped me navigate tech culture, build my network, and land a role at a Fortune 500 company. TIMP gave me the confidence to belong."'
              },
              {
                name: 'James O.',
                role: 'Product Manager',
                story: '"I came as a refugee and thought my dreams were behind me. My mentor saw my potential when I couldn\'t. Three years later, I\'m leading product teams and mentoring others."'
              },
              {
                name: 'Fatima K.',
                role: 'Startup Founder',
                story: '"TIMP didn\'t just teach me career skills—they taught me how to think like a founder. My mentor believed in my business before I did. Now we\'re scaling."'
              },
            ].map((s, i) => (
              <div className="story-card" key={i}>
                <p className="story-text">{s.story}</p>
                <div className="story-author">
                  <div className="author-avatar">{s.name[0]}</div>
                  <div>
                    <strong>{s.name}</strong>
                    <span>{s.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="impact-cta fade-up d3">
          <p>Every mentee story is a life transformed. Every mentor makes a generational difference.</p>
          <a href="#contact" className="btn btn-primary">Join the Movement</a>
        </div>
      </div>
    </section>
  );
}
