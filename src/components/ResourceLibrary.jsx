import './ResourceLibrary.css';

export default function ResourceLibrary() {
  const resources = [
    {
      category: 'Career',
      icon: '💼',
      items: ['Resume Templates', 'Cover Letter Guide', 'Salary Negotiation Playbook', 'Career Roadmap']
    },
    {
      category: 'Interview',
      icon: '🎤',
      items: ['Interview Prep Guide', 'Common Questions', 'STAR Method Template', 'Company Research']
    },
    {
      category: 'Skills',
      icon: '🛠️',
      items: ['Communication Skills', 'Leadership Toolkit', 'Technical Skills Guide', 'Soft Skills Checklist']
    },
    {
      category: 'Integration',
      icon: '🌱',
      items: ['Cultural Integration Guide', 'Workplace Norms', 'Networking Tips', 'Community Resources']
    },
    {
      category: 'Mentoring',
      icon: '👥',
      items: ['Mentoring Best Practices', 'Goal Setting Framework', 'Session Templates', 'Feedback Guide']
    },
    {
      category: 'Finance',
      icon: '💰',
      items: ['Financial Planning Basics', 'Tax Guide for Immigrants', 'Budgeting Template', 'Investment 101']
    }
  ];

  return (
    <section className="resource-library">
      <div className="container">
        <div className="library-header scroll-fade-up">
          <h2>Resource Library</h2>
          <div className="ascent-line ascent-line-center"></div>
          <p>Free, curated resources to support your success. From resume templates to cultural integration guides.</p>
        </div>

        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="resource-card scroll-fade-up"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="resource-icon">{resource.icon}</div>
              <h3>{resource.category}</h3>

              <ul className="resource-items">
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span className="resource-dot"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="btn btn-small">Explore</button>
            </div>
          ))}
        </div>

        <div className="library-cta scroll-fade-up" style={{ animationDelay: '1.2s' }}>
          <h3>More resources coming soon</h3>
          <p>We're constantly adding new materials based on mentee & mentor feedback.</p>
          <button className="btn btn-primary">Subscribe for Updates</button>
        </div>
      </div>
    </section>
  );
}
