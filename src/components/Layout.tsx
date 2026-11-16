
import { Outlet, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        Atway | Athira
      </div>

      <button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={menuOpen ? "nav-links open" : "nav-links"}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
        <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink>
        <NavLink to="/apps" onClick={() => setMenuOpen(false)}>Apps</NavLink>
        <NavLink to="/showrooms" onClick={() => setMenuOpen(false)}>Showrooms</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div>
        <h3>Athiravan Scale</h3>
        <p>Precision weighing solutions</p>
      </div>

      <div>
        <h4>Our Showrooms</h4>
        <p>Madurai</p>
        <p>Tuticorin</p>
        <p>Tirunelveli</p>
      </div>

      <div>
        <h4>Contact Us</h4>
        <p>Phone: +91 XXXXXXXXXX</p>
        <a href="https://wa.me/91XXXXXXXXXX">
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
