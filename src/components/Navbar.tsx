
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">A</span>
        <span className="brand-text">
          <strong>Athiravan Scale</strong>
          <small>ATHIRA · ATWAY</small>
        </span>
      </Link>

      <button
        className="menu-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
  Home
</NavLink>
        <NavLink to="/products" onClick={() => setMenuOpen(false)}>
          Products
        </NavLink>

        <NavLink to="/apps" onClick={() => setMenuOpen(false)}>
          Software
        </NavLink>

        <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
          Gallery
        </NavLink>

        <NavLink to="/showrooms" onClick={() => setMenuOpen(false)}>
          Showrooms
        </NavLink>

        <Link
          to="/contact"
          className="quote-button"
          onClick={() => setMenuOpen(false)}
        >
          Get a quote
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
