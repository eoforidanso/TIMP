import './DonorPage.css';

export default function DonorPage() {
  const benefits = [
    { icon: '📊', title: 'Measurable Impact', desc: 'Real data: 85% job placement, 500+ mentees served' },
    { icon: '🌍', title: 'Global Reach', desc: 'From 45+ countries, transforming lives in 12 US cities' },
    { icon: '💼', title: 'Industry Partners', desc: '30+ companies actively recruiting TIMP mentees' },
    { icon: '🎯', title: 'Efficient Model', desc: 'Low overhead, high ROI on every dollar invested' }
  ];

  const levels = [
    {
      name: 'Champion',
      amount: '$500/month',
      benefits: ['Recognition on website', 'Monthly impact reports', 'Network access']
    },
    {
      name: 'Advocate',
      amount: '$2,500/month',
      benefits: ['Premium recognition', 'Quarterly briefings', 'Mentee recruitment rights', 'Event sponsorship']
    },
    {
      name: 'Founder',
      amount: '$10,000+',
      benefits: ['Board insights', 'Custom impact metrics', 'Branded initiatives', 'VIP events']
    }
  ];

  return (
    <section className="donor-page">
      <div className="container">
        {/* Hero */}
        <div className="donor-hero scroll-fade-up">
          <h1>Partner With TIMP</h1>
          <p>Create upward mobility for immigrant talent. Your investment transforms careers.</p>
          <button className="btn btn-primary btn-large">Start a Partnership</button>
        </div>

        {/* Why Partner */}
        <div className="donor-section">
          <h2>Why Partner With TIMP?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card scroll-scale-in" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Levels */}
        <div className="donor-section">
          <h2>Partnership Levels</h2>
          <div className="levels-grid">
            {levels.map((level, index) => (
              <div key={index} className="level-card scroll-fade-up" style={{ animationDelay: `${(index + 1) * 0.15}s` }}>
                <h3>{level.name}</h3>
                <p className="level-amount">{level.amount}</p>
                <ul className="level-benefits">
                  {level.benefits.map((benefit, bIndex) => (
                    <li key={bIndex}>
                      <span className="checkmark">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-small">Learn More</button>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="donor-section impact-section">
          <h2>Your Impact</h2>
          <div className="impact-grid">
            <div className="impact-item scroll-scale-in">
              <p className="impact-label">$5,000 trains</p>
              <p className="impact-value">1 mentor</p>
              <p className="impact-desc">for a full year of mentorship</p>
            </div>
            <div className="impact-item scroll-scale-in" style={{ animationDelay: '0.1s' }}>
              <p className="impact-label">$25,000 enables</p>
              <p className="impact-value">5 mentee matches</p>
              <p className="impact-desc">with comprehensive support</p>
            </div>
            <div className="impact-item scroll-scale-in" style={{ animationDelay: '0.2s' }}>
              <p className="impact-label">$100,000 scales</p>
              <p className="impact-value">program to new city</p>
              <p className="impact-desc">serving 50+ mentees</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="donor-cta scroll-fade-up">
          <h2>Ready to invest in immigrant talent?</h2>
          <p>Let's discuss how your organization can drive real career mobility.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Schedule a Call</button>
            <button className="btn btn-outline">Download Prospectus</button>
          </div>
        </div>
      </div>
    </section>
  );
}
