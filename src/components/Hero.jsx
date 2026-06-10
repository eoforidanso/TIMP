import { useState, useEffect } from 'react';
import Clock from './Clock';
import FocusDiagram from './FocusDiagram';
import './Hero.css';

export default function Hero() {
  const [showStory, setShowStory] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const stats = [
    { n: '500+', label: 'Immigrants Served' },
    { n: '200+', label: 'Trained Mentors' },
    { n: '85%', label: 'Career Placement Rate' },
    { n: '30+', label: 'Industries Represented' },
  ];

  useEffect(() => {
    // Check system preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Show story after animation sequence completes (2s)
    const timer = setTimeout(() => {
      console.log('Story timer fired');
      setShowStory(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate carousel on mobile
  useEffect(() => {
    const isMobile = window.innerWidth <= 600;
    if (!isMobile) return;

    const carousel = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % stats.length);
    }, 4000);

    return () => clearInterval(carousel);
  }, [stats.length]);

  const playSound = (type) => {
    if (!soundEnabled) return;

    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioContext.currentTime;

      if (type === 'hover') {
        // Gentle chime: Simple pure tone with smooth envelope
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.connect(gain);
        gain.connect(audioContext.destination);

        // 528Hz - solfeggio frequency
        osc.frequency.setValueAtTime(528, now);

        // Smooth gain envelope
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

        osc.start(now);
        osc.stop(now + 0.5);

        console.log('🔊 Chime played at', new Date().toLocaleTimeString());
      } else if (type === 'wind') {
        // Soft white noise wind sound
        const bufferSize = audioContext.sampleRate;
        const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const data = buffer.getChannelData(0);

        // Create white noise
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const source = audioContext.createBufferSource();
        const gain = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();

        source.buffer = buffer;
        source.loop = true;

        source.connect(filter);
        filter.connect(gain);
        gain.connect(audioContext.destination);

        filter.type = 'lowpass';
        filter.frequency.value = 600;

        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

        source.start(now);
        setTimeout(() => source.stop(), 2000);

        console.log('🌬️ Wind sound started');
      }
    } catch (e) {
      console.warn('Audio context error:', e.message);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Swipe threshold: 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left: next stat
        setCurrentStatIndex((prev) => (prev + 1) % stats.length);
      } else {
        // Swiped right: previous stat
        setCurrentStatIndex((prev) => (prev - 1 + stats.length) % stats.length);
      }
    }

    setTouchStart(null);
  };

  return (
    <section className={`hero ${reducedMotion ? 'reduced-motion' : ''}`} id="hero">
      <div className="hero-controls">
        <div className="sound-control-group">
          <button
            className={`control-btn ${soundEnabled ? 'active' : ''}`}
            onClick={() => {
              const newState = !soundEnabled;
              setSoundEnabled(newState);
              if (newState) {
                // Play a welcome chime when sound is enabled
                setTimeout(() => playSound('hover'), 200);
              }
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              if (soundEnabled) {
                playSound('wind');
              }
            }}
            title={soundEnabled ? 'Click to disable. Right-click for wind sound' : 'Click to enable sound'}
            aria-label={`${soundEnabled ? 'Disable' : 'Enable'} ambient sound`}
          >
            {soundEnabled ? '🔊' : '🔇'}
          </button>
          {soundEnabled && (
            <div className="sound-indicator">
              <span className="pulse" />
            </div>
          )}
        </div>
        <button
          className={`control-btn ${reducedMotion ? 'active' : ''}`}
          onClick={() => setReducedMotion(!reducedMotion)}
          title="Toggle reduced motion"
          aria-label={`${reducedMotion ? 'Enable' : 'Disable'} animations`}
        >
          ♿
        </button>
      </div>

      <div className="hero-bg">
        <div className="hero-video-fallback">
          <div className="video-element video-1" />
          <div className="video-element video-2" />
          <div className="video-element video-3" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-pattern" />
      </div>

      <div className="container hero-content">
        <div className="hero-wrapper">
          <div className="hero-left fade-up d1">
            <div className="hero-eyebrow scroll-fade-up" style={{ animationDelay: '0.7s' }}>
              <span className="eyebrow-text">Empowering Young Immigrants Ages 18–30</span>
            </div>

            <h1 className="hero-title stagger-reveal">
              <span className="word">We</span>
              <span className="word">Invest</span>
              <span className="word">Time.</span>
              <br />
              <span className="word">We</span>
              <span className="word">Build</span>
              <span className="word gold-text">Careers.</span>
            </h1>

            <p className="hero-sub scroll-fade-up" style={{ animationDelay: '1.2s' }}>
              Mentorship for first-generation immigrants navigating transition, integration, and early career growth.
            </p>

            <div className="hero-quote scroll-fade-up" style={{ animationDelay: '1.35s' }}>
              <p className="quote-text">
                It's not about having time.<br />
                <strong>It's about making time.</strong>
              </p>
              <p className="quote-subtext">
                You don't need more time. You need more focus.
              </p>
            </div>

            <FocusDiagram />

            <div className="hero-actions scroll-fade-up" style={{ animationDelay: '1.5s' }}>
              <a
                href="#contact"
                className="btn btn-primary btn-glow"
                onMouseEnter={() => {
                  if (soundEnabled) playSound('hover');
                }}
                onClick={(e) => {
                  if (soundEnabled) playSound('hover');
                }}
              >
                Start Your Ascent <span className="arrow">→</span>
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
                onMouseEnter={() => {
                  if (soundEnabled) playSound('hover');
                }}
                onClick={(e) => {
                  if (soundEnabled) playSound('hover');
                }}
              >
                Guide Someone's Journey
              </a>
            </div>
          </div>

          <div className="hero-right fade-up d2">
            <div className="hero-visual">
              <div className="hero-visual-bg" />
              <Clock />
            </div>
          </div>
        </div>

        {/* Desktop Stats Grid */}
        <div className="hero-stats hero-stats-desktop fade-up d3" style={{ animationDelay: '1.8s' }}>
          {stats.map(({ n, label }, index) => (
            <div className="hero-stat scroll-scale-in" key={label} style={{ animationDelay: `${1.8 + (index + 1) * 0.12}s` }}>
              <strong>{n}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Mobile Stats Carousel */}
        <div className="hero-stats-mobile">
          <div
            className="stats-carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-label="Statistics carousel"
          >
            {stats.map(({ n, label }, index) => (
              <div
                key={label}
                className={`hero-stat carousel-item ${index === currentStatIndex ? 'active' : ''}`}
              >
                <strong>{n}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="carousel-dots" aria-label="Carousel navigation">
            {stats.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentStatIndex ? 'active' : ''}`}
                onClick={() => setCurrentStatIndex(index)}
                aria-label={`Show stat ${index + 1}`}
                aria-current={index === currentStatIndex ? 'true' : 'false'}
              />
            ))}
          </div>
          <p className="carousel-hint">Swipe or tap dots to browse</p>
        </div>

        {showStory && (
          <div className="hero-story">
            <p className="story-text">
              "When Daniel arrived from Ghana at 19, he had no network, no roadmap, and no idea how to start.
              Today, he's a software engineer at a Fortune 500 company — thanks to a mentor who walked beside him."
            </p>
          </div>
        )}
      </div>

      <div className="hero-scroll-indicator">
        <span />
      </div>
    </section>
  );
}
