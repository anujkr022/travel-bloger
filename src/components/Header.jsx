import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="glass-header">
      <div className="glass-navbar">

        {/* Logo */}
        <Link to="/" className="logo">
          🌍 TravelGo
        </Link>

        {/* Desktop Menu */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>

          <button className="mobile-btn">
            Book Now
          </button>
        </nav>

        {/* CTA Button */}
        <button className="book-btn">
          Book Now
        </button>

        {/* Mobile Toggle */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}