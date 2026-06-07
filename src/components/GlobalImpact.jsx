import './GlobalImpact.css';

export default function GlobalImpact() {
  const stats = [
    { icon: '🌍', label: 'Countries', value: '45+' },
    { icon: '🏙️', label: 'Cities Served', value: '12' },
    { icon: '👥', label: 'Mentors', value: '250+' },
    { icon: '💼', label: 'Industries', value: '30+' }
  ];

  return (
    <section className="global-impact">
      <div className="container">
        <div className="impact-header scroll-fade-up">
          <h2>Global Reach, Local Impact</h2>
          <div className="ascent-line ascent-line-center"></div>
          <p>TIMP mentees and mentors span continents. One mission: upward mobility for immigrant talent.</p>
        </div>

        <div className="impact-showcase scroll-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="map-container">
            <svg viewBox="0 0 1200 600" className="world-map-visualization">
              {/* Animated background */}
              <rect width="1200" height="600" fill="rgba(13, 27, 42, 0.05)" />

              {/* Connection points - Countries of origin */}
              <circle cx="300" cy="250" r="8" fill="var(--gold)" opacity="0.8" className="origin-point" />
              <circle cx="400" cy="280" r="8" fill="var(--gold)" opacity="0.8" className="origin-point" />
              <circle cx="550" cy="200" r="8" fill="var(--gold)" opacity="0.8" className="origin-point" />
              <circle cx="650" cy="300" r="8" fill="var(--gold)" opacity="0.8" className="origin-point" />
              <circle cx="750" cy="250" r="8" fill="var(--gold)" opacity="0.8" className="origin-point" />
              <circle cx="900" cy="200" r="8" fill="var(--gold)" opacity="0.8" className="origin-point" />

              {/* Connection lines */}
              <line x1="300" y1="250" x2="450" y2="350" stroke="var(--gold)" strokeWidth="2" opacity="0.3" />
              <line x1="400" y1="280" x2="450" y2="350" stroke="var(--gold)" strokeWidth="2" opacity="0.3" />
              <line x1="550" y1="200" x2="450" y2="350" stroke="var(--gold)" strokeWidth="2" opacity="0.3" />
              <line x1="650" y1="300" x2="450" y2="350" stroke="var(--gold)" strokeWidth="2" opacity="0.3" />
              <line x1="750" y1="250" x2="450" y2="350" stroke="var(--gold)" strokeWidth="2" opacity="0.3" />
              <line x1="900" y1="200" x2="450" y2="350" stroke="var(--gold)" strokeWidth="2" opacity="0.3" />

              {/* Hub - US Cities */}
              <circle cx="450" cy="350" r="12" fill="var(--green)" opacity="0.9" className="hub-point" />

              {/* Mentor locations */}
              <circle cx="480" cy="320" r="6" fill="var(--navy)" opacity="0.7" className="mentor-point" />
              <circle cx="420" cy="330" r="6" fill="var(--navy)" opacity="0.7" className="mentor-point" />
              <circle cx="440" cy="380" r="6" fill="var(--navy)" opacity="0.7" className="mentor-point" />

              {/* Label backgrounds */}
              <text x="300" y="235" fontSize="14" fill="var(--text)" textAnchor="middle" fontWeight="600">
                Ghana
              </text>
              <text x="400" y="265" fontSize="14" fill="var(--text)" textAnchor="middle" fontWeight="600">
                Nigeria
              </text>
              <text x="550" y="185" fontSize="14" fill="var(--text)" textAnchor="middle" fontWeight="600">
                India
              </text>
              <text x="650" y="315" fontSize="14" fill="var(--text)" textAnchor="middle" fontWeight="600">
                Philippines
              </text>
              <text x="750" y="235" fontSize="14" fill="var(--text)" textAnchor="middle" fontWeight="600">
                Vietnam
              </text>
              <text x="900" y="185" fontSize="14" fill="var(--text)" textAnchor="middle" fontWeight="600">
                Pakistan
              </text>

              <text x="450" y="375" fontSize="16" fill="var(--white)" textAnchor="middle" fontWeight="700">
                USA HUB
              </text>
            </svg>
          </div>

          <div className="impact-legend">
            <div className="legend-item">
              <span className="legend-dot gold"></span>
              <span>Countries of Origin</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot green"></span>
              <span>Mentee Hub (USA)</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot navy"></span>
              <span>Mentor Locations</span>
            </div>
          </div>
        </div>

        <div className="impact-stats">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card scroll-scale-in"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
