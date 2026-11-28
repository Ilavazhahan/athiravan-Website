
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Column 1: Brand */}
        <div className="footer-column footer-brand">
          <h2>Athiravan Scale</h2>
          <p className="tamil-tagline">
            துல்லியமான எடைக்கு நம்பிக்கையான தீர்வு
          </p>
          <p className="footer-description">
            Trusted weighing solutions built around
            precision and reliability.
          </p>
        </div>

        {/* Column 2: Explore */}
        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/products">Products</Link>
          <Link to="/apps">Software</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/showrooms">Showrooms</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Column 3: Showrooms */}
        <div className="footer-column">
          <h3>Showrooms</h3>
          <p>Madurai</p>
          <p>Tuticorin</p>
          <p>Tirunelveli</p>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-column footer-contact">
          <h3>Have a requirement?</h3>
          <p>Talk to our team about your weighing needs.</p>
          <Link to="/contact" className="footer-quote-button">
            Get a quote →
          </Link>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Athiravan Scale. All rights reserved.</p>
        <p>Madurai, Tamil Nadu</p>
      </div>
    </footer>
  );
}

export default Footer;
