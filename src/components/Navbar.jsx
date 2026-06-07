import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Framework', 'Programs', 'Impact', 'Team', 'Contact'];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#hero" className="nav-logo">
          <span className="logo-t">T</span>IMP
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
              Join Us
            </a>
          </li>
        </ul>

        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
