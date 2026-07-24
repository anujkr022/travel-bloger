import React, { useState } from "react";
 

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Handle your subscription pipeline logic here
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="premium-footer-root">
      {/* TOP DECK: Branding & Newsletter Capture */}
      <div className="footer-top-deck">
        <div className="footer-brand-column">
          <div className="footer-logo">
            <span className="logo-icon">🌐</span> NEXUS<span className="logo-accent">TRAVEL</span>
          </div>
          <p className="brand-pitch">
            Engineering end-to-end itinerary architecture, secure transport vectors, and VIP enclaves for high-net-worth ecosystems.
          </p>
          <div className="social-glyph-row">
            <a href="#linkedin" aria-label="LinkedIn" className="social-link">LN</a>
            <a href="#twitter" aria-label="X / Twitter" className="social-link">TW</a>
            <a href="#instagram" aria-label="Instagram" className="social-link">IG</a>
            <a href="#github" aria-label="GitHub" className="social-link">GH</a>
          </div>
        </div>

        <div className="footer-newsletter-column">
          <h4>Subscribe to Intelligence Briefings</h4>
          <p>Get quarterly updates on global logistical updates, risk evaluation matrix logs, and private terminal updates.</p>
          
          {subscribed ? (
            <div className="subscription-success">
              ✓ Operational matrix briefings activated. Check your secure inbox.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form-container">
              <input 
                type="email" 
                placeholder="Enter corporate email address..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-submit-btn">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <hr className="footer-divider-line" />

      {/* MIDDLE DECK: Functional Navigation Matrix Grid */}
      <div className="footer-middle-deck">
        <div className="footer-links-grid">
          
          {/* Column 1 */}
          <div className="link-group-node">
            <h5>Core Architecture</h5>
            <ul>
              <li><a href="#services">Global Itineraries</a></li>
              <li><a href="#services">Asset Management</a></li>
              <li><a href="#services">Risk Mitigation</a></li>
              <li><a href="#services">VIP API Integration</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="link-group-node">
            <h5>Market Verticals</h5>
            <ul>
              <li><a href="#solutions">Corporate Enterprise</a></li>
              <li><a href="#solutions">Luxury Hospitality</a></li>
              <li><a href="#solutions">Eco-Tourism Networks</a></li>
              <li><a href="#solutions">Custom Clearances</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="link-group-node">
            <h5>Global Hubs</h5>
            <ul>
              <li><a href="#destinations">Paris Corridor</a></li>
              <li><a href="#destinations">Kyoto Enclave</a></li>
              <li><a href="#destinations">Bali Sanctuary</a></li>
              <li><a href="#destinations">Rome Architecture</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="link-group-node">
            <h5>Enterprise Ops</h5>
            <ul>
              <li><a href="#about">Our Core Roots</a></li>
              <li><a href="#stories">Success Records</a></li>
              <li><a href="#careers">Logistics Careers</a></li>
              <li><a href="#contact">Contact Main Operations</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM DECK: Legal Clearances & System Metadata */}
      <div className="footer-bottom-deck">
        <div className="legal-left-row">
          <span>&copy; {new Date().getFullYear()} Nexus Travel Systems Inc. All rights operational.</span>
        </div>
        <div className="legal-right-row">
          <a href="#privacy">Privacy Protocol</a>
          <a href="#terms">Terms of Clearance</a>
          <a href="#security">SLA System Status</a>
        </div>
      </div>
    </footer>
  );
}