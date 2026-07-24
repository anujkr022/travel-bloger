import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Destinations.css";

export default function Destination() {
  
  // --- SECTION 1 DATA MATRIX (TRENDING SLIDER) ---
  const trendingDestinations = [
    {
      id: "trend-d1",
      badge: "#1 HOT",
      title: "Tokyo Lights, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "trend-d2",
      badge: "#2 HOT",
      title: "Ubud Rainforest, Bali",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "trend-d3",
      badge: "#3 HOT",
      title: "Exuma Keys, Bahamas",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "trend-d4",
      badge: "#4 HOT",
      title: "Reykjavík Auroras, Iceland",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=500&q=80"
    }
  ];

  // --- SECTION 2 DATA ---
  const popularPackages = [
    {
      id: "pop-1",
      title: "Parisian Romance",
      meta: "France • Cultural Experience",
      rating: "★ 4.9 (2.4k reviews)",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "pop-2",
      title: "Yosemite Camping",
      meta: "USA • National Park Adventure",
      rating: "★ 4.8 (1.8k reviews)",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=300&q=80"
    }
  ];

  // --- SLIDER ENGINE CONFIGURATION ---
  const cardsVisible = 3; 
  const [slideIndex, setSlideIndex] = useState(0);
  const maxIndex = Math.max(0, trendingDestinations.length - cardsVisible);

  const nextSlide = () => {
    slideIndex < maxIndex ? setSlideIndex(slideIndex + 1) : setSlideIndex(0);
  };

  const prevSlide = () => {
    slideIndex > 0 ? setSlideIndex(slideIndex - 1) : setSlideIndex(maxIndex);
  };

  return (
    <>
      {/* Primary Global Navigation */}
      <Header />

      <div className="overview-wrapper">
        
        {/* 1. REFACTORED TRENDING SLIDER SECTION */}
        <section className="destination-section">
          <div className="section-header project-slider-header">
            <div>
              <h2>Trending Right Now</h2>
              <p>The fastest-growing destinations catching everyone's eyes this week.</p>
            </div>
            
            <div className="trending-action-controls">
              <span className="view-all-link">View All Trends</span>
              <div className="trend-nav-buttons">
                <button onClick={prevSlide} className="trend-nav-btn">←</button>
                <button onClick={nextSlide} className="trend-nav-btn">→</button>
              </div>
            </div>
          </div>

          <div className="trending-slider-mask">
            <div 
              className="trending-slider-track" 
              style={{ 
                transform: `translateX(-${slideIndex * (100 / cardsVisible)}%)` 
              }}
            >
              {trendingDestinations.map((dest) => (
                <div 
                  key={dest.id} 
                  className="trending-card slider-node-item"
                  style={{ minWidth: `${100 / cardsVisible}%` }}
                >
                  <span className="trend-badge">{dest.badge}</span>
                  <img src={dest.image} alt={dest.title} />
                  <div className="trending-overlay">
                    <h3>{dest.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. POPULAR SECTION */}
        <section className="destination-section">
          <div className="section-header">
            <div>
              <h2>Most Popular All-Time</h2>
              <p>Our historically highest-rated global packages and getaways.</p>
            </div>
            <span className="view-all-link">Browse Popular</span>
          </div>

          <div className="popular-row">
            {popularPackages.map((pkg) => (
              <div className="popular-card" key={pkg.id}>
                <img src={pkg.image} alt={pkg.title} />
                <div className="popular-info">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.meta}</p>
                  <span className="rating">{pkg.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. EXPLORE SECTION */}
        <section className="destination-section">
          <div className="section-header">
            <div>
              <h2>Explore Hidden Paths</h2>
              <p>Step outside the box into remote, pristine, and wild regions.</p>
            </div>
            <span className="view-all-link">Filter Styles</span>
          </div>

          <div className="explore-bento">
            <div className="bento-card">
              <img src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80" alt="Iceland" />
              <div className="bento-content">
                <h3>Glacial Horizons</h3>
                <p>Traverse across black volcanic sands and giant frozen ice caverns deep within Iceland.</p>
              </div>
            </div>

            <div className="bento-card">
              <img src="https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=500&q=80" alt="Sahara Desert" />
              <div className="bento-content">
                <h3>Desert Caravans</h3>
                <p>Sleep beneath stargazing skies in the quiet luxury of Morocco's dunes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TOP DESTINATIONS SECTION */}
        <section className="destination-section">
          <div className="section-header">
            <div>
              <h2>Top Rated Choices</h2>
              <p>Our crown jewel packages carefully curated for premium luxury travel.</p>
            </div>
            <span className="view-all-link">See Leaderboards</span>
          </div>

          <div className="top-dest-grid">
            <div className="top-dest-card">
              <span className="top-number">01</span>
              <h3>Amalfi Coast</h3>
              <p>Spectacular pastel towns terraced into sheer Italian cliffs facing Mediterranean breezes.</p>
            </div>

            <div className="top-dest-card">
              <span className="top-number">02</span>
              <h3>Queenstown</h3>
              <p>The supreme adventure capital of New Zealand offering dramatic lakeside fjord views.</p>
            </div>

            <div className="top-dest-card">
              <span className="top-number">03</span>
              <h3>Serengeti</h3>
              <p>Witness standard-setting luxury safari retreats during the great wildlife migrations.</p>
            </div>
          </div>
        </section>

      </div>

      {/* Global Interface Footnotes */}
      <Footer />
    </>
  );
}