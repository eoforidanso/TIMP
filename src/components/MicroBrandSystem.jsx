import './MicroBrandSystem.css';

export default function MicroBrandSystem() {
  const icons = [
    { symbol: '📈', name: 'Growth', meaning: 'Ascent, progression, upward momentum' },
    { symbol: '🎯', name: 'Focus', meaning: 'Precision, targeted impact, clear goals' },
    { symbol: '🤝', name: 'Partnership', meaning: 'Collaboration, support, mentorship' },
    { symbol: '🌍', name: 'Global', meaning: 'Worldwide reach, diversity, inclusion' },
    { symbol: '💼', name: 'Professional', meaning: 'Career mobility, industry insight' },
    { symbol: '🎓', name: 'Learning', meaning: 'Development, skills, knowledge transfer' }
  ];

  const colors = [
    { name: 'Navy', code: '#0D1B2A', meaning: 'Trust, stability, professionalism' },
    { name: 'Gold', code: '#C9973A', meaning: 'Achievement, opportunity, excellence' },
    { name: 'Green', code: '#2D6A4F', meaning: 'Growth, vitality, forward momentum' },
    { name: 'Cream', code: '#FFF8F0', meaning: 'Accessibility, warmth, approachability' }
  ];

  const typography = [
    { name: 'Display (Hero)', font: 'Playfair Display', size: '3.5rem', weight: '800', usage: 'Main headlines, hero sections' },
    { name: 'Heading (Section)', font: 'Inter', size: '2.2rem', weight: '800', usage: 'Section titles, major CTAs' },
    { name: 'Body', font: 'Inter', size: '1rem', weight: '400', usage: 'Paragraph text, descriptions' },
    { name: 'Label', font: 'Inter', size: '0.85rem', weight: '600', usage: 'Tags, badges, captions' }
  ];

  const motions = [
    { name: 'Fade Up', timing: '0.6s', easing: 'ease-out', usage: 'Content entry, scroll reveals' },
    { name: 'Scale In', timing: '0.5s', easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', usage: 'Card emphasis, focal points' },
    { name: 'Parallax', timing: 'continuous', easing: 'linear', usage: 'Background depth, hero sections' },
    { name: 'Hover Lift', timing: '0.3s', easing: 'ease-out', usage: 'Interactive elements, cards' }
  ];

  return (
    <section className="micro-brand-system">
      <div className="container">
        <div className="brand-header scroll-fade-up">
          <h1>TIMP Micro-Brand System</h1>
          <p>Design language for consistent, premium brand expression across all touchpoints</p>
        </div>

        {/* Icon Set */}
        <div className="brand-section">
          <h2>Icon Language</h2>
          <p className="section-intro">6 core icons representing TIMP's mission and values</p>
          <div className="icon-grid">
            {icons.map((icon, index) => (
              <div key={index} className="icon-item scroll-scale-in" style={{ animationDelay: `${(index + 1) * 0.08}s` }}>
                <div className="icon-display">{icon.symbol}</div>
                <h3>{icon.name}</h3>
                <p>{icon.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Color Palette */}
        <div className="brand-section">
          <h2>Color Palette</h2>
          <p className="section-intro">Primary colors conveying trust, achievement, growth, and warmth</p>
          <div className="color-grid">
            {colors.map((color, index) => (
              <div key={index} className="color-item scroll-fade-up" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                <div className="color-swatch" style={{ backgroundColor: color.code }}></div>
                <h3>{color.name}</h3>
                <p className="color-code">{color.code}</p>
                <p className="color-meaning">{color.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="brand-section">
          <h2>Typography Scale</h2>
          <p className="section-intro">Hierarchy for clear communication across devices</p>
          <div className="typography-grid">
            {typography.map((type, index) => (
              <div key={index} className="typography-item scroll-fade-up" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                <div
                  className="typography-sample"
                  style={{ fontFamily: type.font, fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: type.weight }}
                >
                  {type.name}
                </div>
                <p className="typography-meta">
                  <strong>{type.font}</strong> • {type.size} • Wt {type.weight}
                </p>
                <p className="typography-usage">{type.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Motion System */}
        <div className="brand-section">
          <h2>Motion System</h2>
          <p className="section-intro">Cinematic animations creating premium user experience</p>
          <div className="motion-grid">
            {motions.map((motion, index) => (
              <div key={index} className="motion-item">
                <div className={`motion-demo motion-demo-${index + 1}`}></div>
                <h3>{motion.name}</h3>
                <p className="motion-specs">
                  <span>{motion.timing}</span>
                  <span>{motion.easing}</span>
                </p>
                <p className="motion-usage">{motion.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Glassmorphism */}
        <div className="brand-section">
          <h2>Glassmorphism Pattern</h2>
          <p className="section-intro">Layered transparency creating depth and premium feel</p>
          <div className="glassmorphism-examples">
            <div className="glass-example glass-example-1">
              <h3>Light Glass</h3>
              <p>rgba(255, 255, 255, 0.95)<br/>backdrop-filter: blur(20px)</p>
            </div>
            <div className="glass-example glass-example-2">
              <h3>Dark Glass</h3>
              <p>rgba(13, 27, 42, 0.8)<br/>backdrop-filter: blur(20px)</p>
            </div>
            <div className="glass-example glass-example-3">
              <h3>With Gradient</h3>
              <p>linear-gradient + blur<br/>Inset light highlights</p>
            </div>
          </div>
        </div>

        {/* Visual Motifs */}
        <div className="brand-section">
          <h2>Visual Motifs</h2>
          <p className="section-intro">Brand-defining geometric shapes and patterns</p>
          <div className="motifs-grid">
            <div className="motif-card">
              <div className="motif-visual ascent-lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <h3>Ascent Lines</h3>
              <p>Angled lines symbolizing upward momentum and progress</p>
            </div>
            <div className="motif-card">
              <div className="motif-visual topographic">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,70 Q25,50 50,40 T100,20" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M0,80 Q25,60 50,50 T100,30" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M0,90 Q25,70 50,60 T100,40" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Topographic Curves</h3>
              <p>Organic flow representing geographic reach and landscape</p>
            </div>
            <div className="motif-card">
              <div className="motif-visual geometric">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
              <h3>Geometric Shapes</h3>
              <p>Circles, triangles, and intersections for modern dynamism</p>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="brand-section guidelines-section">
          <h2>Brand Guidelines</h2>
          <div className="guidelines-grid">
            <div className="guideline-card scroll-fade-up">
              <h3>✓ Do</h3>
              <ul>
                <li>Use gold (#C9973A) for key CTAs</li>
                <li>Maintain 1.6x spacing ratios</li>
                <li>Employ glassmorphism on hero sections</li>
                <li>Stagger animations for depth</li>
                <li>Respect mobile-first breakpoints</li>
              </ul>
            </div>
            <div className="guideline-card scroll-fade-up" style={{ animationDelay: '0.1s' }}>
              <h3>✗ Don't</h3>
              <ul>
                <li>Use navy on navy (use gold or green for contrast)</li>
                <li>Animate for more than 0.8s (feels sluggish)</li>
                <li>Skip focus states on interactive elements</li>
                <li>Use harsh shadows (prefer soft, subtle)</li>
                <li>Ignore motion preferences (prefers-reduced-motion)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
