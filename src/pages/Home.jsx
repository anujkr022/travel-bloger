import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "../styles/Home.css";

// =========================================================================
// SUB-COMPONENTS (Clean, modularized, and structured)
// =========================================================================
 
function CoreServices() {
  const services = [
    { icon: "🌐", title: "Global Itinerary Architecture", desc: "Customized endpoint-to-endpoint route mapping for complex multi-destination expeditions." },
    { icon: "✈️", title: "Charter Asset Management", desc: "Real-time automated clearing and premium private booking handling for elite transport vectors." },
    { icon: "🛡️", title: "24/7 Priority Risk Mitigation", desc: "Continuous on-the-ground support networks monitoring localized geopolitical and weather parameters." },
    { icon: "💼", title: "VIP Hospitality Integration", desc: "Direct priority API connections into five-star hospitality suites and private enclaves worldwide." }
  ];

  return (
    <section className="dashboard-services-section">
        <div className="ttstyles-header"> 
          <span className="ttstyles-subtitle">── WHAT WE EXECUTE  ──</span>
          <h2>Core Operational Services</h2>
        </div>
       
      <div className="services-grid-layout">
        {services.map((svc, idx) => (
          <div key={idx} className="service-card-item">
            <div className="service-icon-frame">{svc.icon}</div>
            <h3>{svc.title}</h3>
            <p>{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function IndustrySolutions() {
  const industries = [
    { title: "Corporate Enterprise", stat: "45% Time Saved", metric: "Optimizing executive multi-city flight and terminal structures dynamically." },
    { title: "Luxury Hospitality", stat: "98.4% Retention", metric: "Syncing high-net-worth traveler profiles into priority booking workflows seamlessly." },
    { title: "Eco-Tourism Networks", stat: "Net Zero Base", metric: "Providing automated real-time carbon offset logs and sustainable logistical validation." }
  ];

  return (
    <section className="dashboard-solutions-section">
       <div className="ttstyles-header"> 
          <span className="ttstyles-subtitle">── INDUSTRIAL SOLUTIONS ──</span>
          <h2>Operational Performance Indices</h2>
        </div>
      
      <div className="solutions-flex-layout">
        {industries.map((ind, idx) => (
          <div key={idx} className="solution-panel-card">
            <div className="solution-meta-pill">{ind.title}</div>
            <div className="solution-metric-display">{ind.stat}</div>
            <p className="solution-desc-text">{ind.metric}</p>
            <div className="solution-card-footer">View Architecture Matrix →</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const travelData = [
  { title: "Honeymoon", subtitle: "Packages", packages: "120+ Packages", icon: "💖", image: "https://www.bayfrontmarinhouse.com/wp-content/uploads/2021/12/romantic-honeymoon-beach-couple.jpg" },
  { title: "Family", subtitle: "Trips", packages: "95+ Packages", icon: "👨‍👩‍👧‍👦", image: "https://plus.unsplash.com/premium_photo-1661475916373-5aaaeb4a5393?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fHww" },
  { title: "Adventure", subtitle: "Tours", packages: "80+ Packages", icon: "🏔️", image: "https://ustoa.com/blog/wp-content/uploads/2024/05/AdobeStock_286144007-1-1024x683.jpg" },
  { title: "Beach", subtitle: "Holidays", packages: "70+ Packages", icon: "🏖️", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFiNjhjelc2Sg3JWWgq10xir2fyVTORqd8A&s" },
  { title: "Luxury", subtitle: "Escapes", packages: "50+ Packages", icon: "💎", image: "https://www.elitehavens.com/magazine/wp-content/uploads/2024/11/Luxury-Travel-Trends-of-2024-The-Year-of-Rediscovery-1.png" },
  { title: "Solo", subtitle: "Travel", packages: "65+ Packages", icon: "🎒", image: "https://www.muchbetteradventures.com/magazine/content/images/2020/01/02173633/GettyImages-944543546-1.jpg" }
];

function TravelStyles() {
  return (
    <section className="ttstyles-section">
      <div className="ttstyles-header">
        <span className="ttstyles-subtitle">── TRAVEL STYLES ──</span>
        <h2>Explore By Travel Style</h2>
        <p>Find the perfect trip that matches your travel personality.</p>
      </div>

      <div className="ttstyles-grid">
        {travelData.map((item, index) => (
          <div
            className="ttstyles-card"
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="ttstyles-overlay"></div>
            <div className="ttstyles-content">
              <div className="ttstyles-icon">{item.icon}</div>
              <div className="ttstyles-info">
                <h3>
                  {item.title}
                  <br />
                  <span>{item.subtitle}</span>
                </h3>
                <div className="ttstyles-line"></div>
                <p>{item.packages}</p>
                <button>Explore Now →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SuccessStories() {
  const stories = [
    {
      company: "Vanguard Tech Group",
      quote: "Migrating our global retreats into their automated pipeline saved our administrative team hundreds of manual verification hours this year alone.",
      author: "Sarah Jenkins, VP of People Operations"
    },
    {
      company: "The Atlas Fund",
      quote: "When unexpected grounding protocols impacted our continental summit layout, their 24/7 mitigation matrix re-routed 40 executives in under 3 hours.",
      author: "Marcus Vance, Director of Security Logistics"
    }
  ];

  return (
    <section className="dashboard-stories-section">
        <div className="ttstyles-header"> 
          <span className="ttstyles-subtitle">── PROVEN EXECUTION ──</span>
          <h2>Client Success Stories</h2>
        </div>
      
      <div className="stories-grid-layout">
        {stories.map((story, idx) => (
          <div key={idx} className="story-testimonial-card">
            <div className="quote-mark-vector">“</div>
            <h4 className="client-company-tag">{story.company}</h4>
            <p className="client-testimonial-quote">{story.quote}</p>
            <div className="client-author-signature">— {story.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =========================================================================
// MAIN HOME COMPONENT
// =========================================================================
export default function Home() {
  const destinations = [
    { id: 1, title: "Paris, France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&q=80", description: "The city of lights, romance, and incredible architecture." },
    { id: 2, title: "Kyoto, Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=80", description: "Stunning classical Buddhist temples, gardens, and imperial palaces." },
    { id: 3, title: "Bali, Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=80", description: "A tropical paradise famed for its forested volcanic mountains." },
    { id: 4, title: "Rome, Italy", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&q=80", description: "A potent blend of haunting ruins and vibrant street life." },
    { id: 5, title: "New York, USA", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&q=80", description: "The city that never sleeps, filled with iconic landmarks." }
  ];

  const packages = [
    { id: 1, title: "Mediterranean Cruise Adventure", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=500&q=80", duration: "7 Days, 6 Nights", price: "$1,299", rating: "4.9", badge: "Best Seller" },
    { id: 2, title: "Swiss Alps Ski & Wellness Resort", image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=500&q=80", duration: "5 Days, 4 Nights", price: "$1,450", rating: "4.8", badge: "Trending" },
    { id: 3, title: "African Safari Wild Expedition", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80", duration: "6 Days, 5 Nights", price: "$1,899", rating: "5.0", badge: "Luxury" },
    { id: 4, title: "Maldives Private Island Escape", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&q=80", duration: "5 Days, 5 Nights", price: "$2,499", rating: "4.9", badge: "Exclusive" }
  ];

  const stats = [
    { number: "12+", label: "Years Exploring" },
    { number: "15k+", label: "Happy Travelers" },
    { number: "99%", label: "Satisfaction" }
  ];

  const cardsVisible = 4; 

  // Slider 1 Control Logic
  const [destIndex, setDestIndex] = useState(0);
  const maxDestIndex = destinations.length - cardsVisible;

  const nextDest = () => { destIndex < maxDestIndex ? setDestIndex(destIndex + 1) : setDestIndex(0); };
  const prevDest = () => { destIndex > 0 ? setDestIndex(destIndex - 1) : setDestIndex(maxDestIndex); };

  // Slider 2 Control Logic
  const [pkgIndex, setPkgIndex] = useState(0);
  const maxPkgIndex = packages.length - cardsVisible;

  const nextPkg = () => { pkgIndex < maxPkgIndex ? setPkgIndex(pkgIndex + 1) : setPkgIndex(0); };
  const prevPkg = () => { pkgIndex > 0 ? setPkgIndex(pkgIndex - 1) : setPkgIndex(maxPkgIndex); };

  return (
    <div className="global-app-bg">
      <Header />
      <Hero />

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-visuals">
            <div className="image-wrapper animate-slide-left">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" 
                alt="A traveler mapping out a road trip journey" 
                className="about-img"
              />
            </div>
            <div className="stats-badge animate-fade-in">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-content animate-slide-right">
            <span className="about-tagline">WHO WE ARE</span>
            <h2>We Create Immersive Journeys Across the Globe</h2>
            <p className="about-lead">
              We bridge local cultural insight with premium comforts to engineer curated travel itineraries.
            </p>
            <p className="about-body">
              Founded on a shared passion for deep exploration, our agency curates unique excursions and luxury escapes alongside local guides worldwide.
            </p>
            <div className="about-features">
              <div className="feature-bullet">
                <span className="bullet-icon">🌍</span>
                <div>
                  <h4>Handpicked Destinations</h4>
                  <p>Every single itinerary is scouted, vetted, and optimized for maximum excitement.</p>
                </div>
              </div>
              <div className="feature-bullet">
                <span className="bullet-icon">🛡️</span>
                <div>
                  <h4>24/7 Premium Concierge</h4>
                  <p>Travel confidently knowing our support network has your back.</p>
                </div>
              </div>
            </div>
            <button className="about-cta-btn">Learn More About Us →</button>
          </div>
        </div>
      </section>

      <TravelStyles />

      {/* Corporate Dashboard Integrations Background Wrapper */}
      <div className="dashboard-sections-wrapper">
        <CoreServices />
        <hr className="layout-divider-line" />
        <IndustrySolutions />
        <hr className="layout-divider-line" />
        <SuccessStories />
      </div>

      {/* Slider 1: Popular Destinations */}
      <section className="destinations-section">
        <div className="section-header">
          <h2>Popular Destinations</h2>
          <div className="slider-controls">
            <button onClick={prevDest} className="slider-btn">←</button>
            <button onClick={nextDest} className="slider-btn">→</button>
          </div>
        </div>

        <div className="slider-container" style={{ overflow: "hidden", width: "100%" }}>
          <div 
            className="slider-track" 
            style={{ 
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${destIndex * (100 / cardsVisible)}%)` 
            }}
          >
            {destinations.map((dest) => (
              <div key={dest.id} className="destination-card" style={{ minWidth: `${100 / cardsVisible}%`, flexShrink: 0 }}>
                <div className="card-image-wrapper">
                  <img src={dest.image} alt={dest.title} className="card-image" />
                </div>
                <div className="card-body">
                  <h3>{dest.title}</h3>
                  <p>{dest.description}</p>
                  <button className="card-action-btn">Explore</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slider 2: Tour Packages */}
      <section className="packages-section">
        <div className="section-header">
          <div>
            <h2>Trending Tour Packages</h2>
            <p className="section-subtitle">Curated exceptional getaways just for you.</p>
          </div>
          <div className="slider-controls">
            <button onClick={prevPkg} className="slider-btn">←</button>
            <button onClick={nextPkg} className="slider-btn">→</button>
          </div>
        </div>

        <div className="slider-container" style={{ overflow: "hidden", width: "100%" }}>
          <div 
            className="slider-track" 
            style={{ 
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${pkgIndex * (100 / cardsVisible)}%)` 
            }}
          >
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card" style={{ minWidth: `${100 / cardsVisible}%`, flexShrink: 0 }}>
                <div className="package-image-wrapper">
                  {pkg.badge && <span className="package-badge">{pkg.badge}</span>}
                  <img src={pkg.image} alt={pkg.title} className="package-image" />
                </div>
                
                <div className="package-body">
                  <div className="package-meta">
                    <span>🕒 {pkg.duration}</span>
                    <span>⭐ {pkg.rating}</span>
                  </div>
                  <h3 className="package-title">{pkg.title}</h3>
                  
                  <div className="package-footer">
                    <div className="package-price-box">
                      <span className="price-label">From</span>
                      <span className="price-amount">{pkg.price}</span>
                    </div>
                    <button className="btn-book">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}