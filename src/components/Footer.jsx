import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>
              <span className="logo-t">T</span>IMP
            </h4>
            <p>The Immigrant Mentorship Project: investing time, guiding the climb, building careers.</p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">In</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="Instagram">◉</a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#framework">Framework</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#impact">Impact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Programs</h5>
            <ul>
              <li><a href="#contact">Mentee Program</a></li>
              <li><a href="#contact">Mentor Program</a></li>
              <li><a href="#contact">Partnerships</a></li>
              <li><a href="#contact">Workshops</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@timp.org">hello@timp.org</a></li>
              <li>(555) 123-4567</li>
              <li>5 major cities</li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>&copy; 2024 The Immigrant Mentorship Project. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Impact Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
