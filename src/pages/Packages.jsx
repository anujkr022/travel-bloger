import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Package.css"; // Imports your CSS stylesheet

export default function Destination() {
  
  // --- PACKAGES DATA ARRAYS ---
  const trendingPackages = [
    {
      id: "alt-t1",
      title: "Tokyo Neon Nights",
      price: "$1,299",
      badge: "🔥 Top Trend",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "alt-t2",
      title: "Ubud Rainforest Eco-Resort",
      price: "$849",
      badge: "✨ Popular",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "alt-t3",
      title: "Exuma Luxury Sailing",
      price: "$2,450",
      badge: "💎 Secluded",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "alt-t4",
      title: "Reykjavík Aurora Escape",
      price: "$1,850",
      badge: "❄️ Adventure",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const popularPackages = [
    {
      id: "alt-p1",
      title: "Parisian Classic Romance",
      meta: "6 Days • France Tour",
      rating: "★ 4.9",
      price: "$1,599",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "alt-p2",
      title: "Yosemite Guided Wilderness",
      meta: "4 Days • Camping & Hiking",
      rating: "★ 4.8",
      price: "$420",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const explorePackages = [
    {
      id: "alt-e1",
      title: "Arctic Ice",
      subtitle: "Glacial Trips",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "alt-e2",
      title: "Sahara Dunes",
      subtitle: "Desert Camp",
      image: "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=500&q=80"
    }
  ];

  const topDestinations = [
    {
      id: "alt-d1",
      rank: "I",
      title: "Amalfi Coast Resort",
      description: "Stunning pastel apartments terraced right into Italian cliffs looking over the deep blue Mediterranean sea."
    },
    {
      id: "alt-d2",
      rank: "II",
      title: "Queenstown Thrills",
      description: "The ultimate alpine adventure package inside the gorgeous fjord landscapes of New Zealand."
    },
    {
      id: "alt-d3",
      rank: "III",
      title: "Serengeti Safari Tents",
      description: "Premium five-star luxury lodging options situated inside active wilderness reserves."
    }
  ];

  // --- SLIDER REACTION CONTROL LOGIC ---
  const cardsVisible = 3; 
  const [slideIndex, setSlideIndex] = useState(0);
  const maxIndex = Math.max(0, trendingPackages.length - cardsVisible);

  const nextSlide = () => {
    slideIndex < maxIndex ? setSlideIndex(slideIndex + 1) : setSlideIndex(0);
  };

  const prevSlide = () => {
    slideIndex > 0 ? setSlideIndex(slideIndex - 1) : setSlideIndex(maxIndex);
  };

  return (
    <>
      <Header />

      <div className="alt-wrapper">
        
        {/* 1. ASYMMETRIC TRENDING SLIDER SECTION */}
        <section className="alt-section">
          <div className="alt-header-slider-wrapper">
            <div className="alt-header">
              <h2>Current Intentions</h2>
              <p>CRITICALLY ACCLAIMED TOURS CURRENTLY IN DEMAND</p>
            </div>
            
            <div className="editorial-slider-controls">
              <button onClick={prevSlide} className="editorial-slider-btn">←</button>
              <button onClick={nextSlide} className="editorial-slider-btn">→</button>
            </div>
          </div>

          <div className="editorial-slider-container">
            <div 
              className="editorial-slider-track"
              style={{ 
                transform: `translateX(-${slideIndex * (100 / cardsVisible)}%)` 
              }}
            >
              {trendingPackages.map((pkg) => (
                <div 
                  className="editorial-card-slider-item" 
                  key={pkg.id}
                  style={{ minWidth: `${100 / cardsVisible}%` }}
                >
                  <div className="editorial-img-frame">
                    <span className="editorial-badge">{pkg.badge}</span>
                    <img src={pkg.image} alt={pkg.title} />
                  </div>
                  <div className="editorial-details">
                    <h3>{pkg.title}</h3>
                    <span className="editorial-meta">{pkg.price} / Ticket</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. SPLIT-SCREEN FEATURE POPULAR SECTION */}
        <section className="alt-section">
          <div className="alt-header">
            <h2>The Signature Chronicles</h2>
            <p>TIMELESS RETREATS CELEBRATED GLOBALLY BY INDEPENDENT EXPLORERS</p>
          </div>

          <div className="split-container">
            {popularPackages.map((pkg, idx) => (
              <div className={`split-row ${idx % 2 !== 0 ? "reverse" : ""}`} key={pkg.id}>
                <img src={pkg.image} alt={pkg.title} className="split-img" />
                <div className="split-text">
                  <h3>{pkg.title}</h3>
                  <p>
                    Experience an unrivaled luxury escape crafted explicitly for those looking 
                    to disconnect completely. Included scheduling offers curated regional meals, private transit guidelines, 
                    and premium five-star accommodation arrangements.
                  </p>
                  <div className="split-footer">
                    <span className="split-rating">{pkg.rating} Rating</span>
                    <span className="split-price">{pkg.price} All-Inclusive</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. BUBBLE GRID EXPLORE SECTION */}
        <section className="alt-section">
          <div className="alt-header">
            <h2>Uncharted Pathways</h2>
            <p>SELECT AN ENVIRONMENT TO BEGIN SPECIFIC DISCOVERY TRAVELS</p>
          </div>

          <div className="bubble-grid">
            {explorePackages.map((pkg) => (
              <div className="bubble-card" key={pkg.id}>
                <img src={pkg.image} alt={pkg.title} />
                <div className="bubble-overlay">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TIMELINE LIST TOP DESTINATIONS */}
        <section className="alt-section">
          <div className="alt-header">
            <h2>The Global Anthology</h2>
            <p>OUR HIGH-END EXCLUSIVE COMMISSIONS RANKED BY TASTEMAKERS</p>
          </div>

          <div className="timeline-list">
            {topDestinations.map((dest) => (
              <div className="timeline-item" key={dest.id}>
                <span className="timeline-index">{dest.rank}</span>
                <div className="timeline-content">
                  <h3>{dest.title}</h3>
                  <p>{dest.description}</p>
                  <a href="#book" className="timeline-action">Reserve</a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}