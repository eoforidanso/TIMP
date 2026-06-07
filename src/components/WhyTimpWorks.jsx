import './WhyTimpWorks.css';

export default function WhyTimpWorks() {
  const reasons = [
    {
      title: 'Human-Centered Mentorship',
      stat: '1:1',
      statLabel: 'Matching',
      description: 'Real relationships, not transactional advice. Mentors invest consistent time building trust with each mentee.',
      story: '"My mentor didn\'t just teach me how to code—she taught me how to think like a founder."'
    },
    {
      title: 'Industry-Backed Career Pathways',
      stat: '80+',
      statLabel: 'Partners',
      description: 'Direct connections to tech companies, finance firms, and social impact orgs. Your mentor is your bridge.',
      story: '"Through TIMP, I landed an internship at a Fortune 500 company. My mentor knew the hiring manager."'
    },
    {
      title: 'Long-Term Mobility',
      stat: '3',
      statLabel: 'Year Journey',
      description: 'Not a quick fix. We measure success in career ascent, not certificate completion. Your mentor stays with you.',
      story: '"Two years in, I\'m now a senior analyst. My mentor is still my advisor—we text every week."'
    }
  ];

  return (
    <section className="why-timp-works">
      <div className="container">
        <div className="section-header">
          <h2 className="scroll-fade-up">Why TIMP Works</h2>
          <div className="ascent-line ascent-line-center"></div>
          <p className="section-lead scroll-fade-up" style={{ animationDelay: '0.1s' }}>
            We don't believe in one-size-fits-all solutions. TIMP works because it's built on real human connection, industry credibility, and long-term commitment.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card scroll-scale-in" style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
              <div className="reason-stat-badge">
                <span className="reason-stat">{reason.stat}</span>
                <span className="reason-stat-label">{reason.statLabel}</span>
              </div>

              <h3>{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>

              <blockquote className="reason-story">
                {reason.story}
              </blockquote>
            </div>
          ))}
        </div>

        <div className="golden-path"></div>
      </div>
    </section>
  );
}
