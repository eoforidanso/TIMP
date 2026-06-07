import { useState, useEffect } from 'react';
import './SuccessCounter.css';

export default function SuccessCounter() {
  const [counts, setCounts] = useState({
    mentees: 0,
    sessions: 0,
    jobs: 0,
    industries: 0
  });

  useEffect(() => {
    const finalCounts = {
      mentees: 500,
      sessions: 2400,
      jobs: 425,
      industries: 30
    };

    const duration = 3000; // 3 seconds animation
    const startTime = Date.now();

    const animateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        mentees: Math.floor(finalCounts.mentees * progress),
        sessions: Math.floor(finalCounts.sessions * progress),
        jobs: Math.floor(finalCounts.jobs * progress),
        industries: Math.floor(finalCounts.industries * progress)
      });

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, []);

  const metrics = [
    { icon: '👥', label: 'Mentees Matched', value: counts.mentees, suffix: '+' },
    { icon: '📞', label: 'Sessions Completed', value: counts.sessions, suffix: '+' },
    { icon: '💼', label: 'Jobs Secured', value: counts.jobs, suffix: '+' },
    { icon: '🏢', label: 'Industries Entered', value: counts.industries, suffix: '+' }
  ];

  return (
    <section className="success-counter">
      <div className="container">
        <div className="counter-header scroll-fade-up">
          <h2>Real Impact, Right Now</h2>
          <p>Every mentee's success is a win for TIMP</p>
        </div>

        <div className="counters-grid">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="counter-card scroll-scale-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="counter-icon">{metric.icon}</div>
              <div className="counter-value">
                {metric.value.toLocaleString()}{metric.suffix}
              </div>
              <div className="counter-label">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="counter-subtitle scroll-fade-up" style={{ animationDelay: '0.5s' }}>
          <p>These numbers grow every day. <strong>Your impact starts now.</strong></p>
        </div>
      </div>
    </section>
  );
}
