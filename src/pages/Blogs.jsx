import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Blogs.css"; // Ensure this matches your CSS folder paths

export default function BlogPage() {
  
  // --- INTERNAL DATA ARRAYS ---
  const trendingBlogs = [
    {
      id: "trend-1",
      title: "The Ultimate Guide to Packing Light for a Two-Week Backpacking Journey",
      category: "Travel Tips",
      author: "Sarah Jenkins",
      date: "June 14, 2026",
      excerpt: "Capsule wardrobes, structural packing cubes, and weight boundaries—learn how to fit everything you need into a single carry-on frame without sacrificing essentials.",
      image: "https://images.unsplash.com/photo-1506125840744-167167210587?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "trend-2",
      title: "Hidden Overwater Bungalows in Southeast Asia You Didn't Know Existed",
      category: "Destinations",
      author: "Marcus Vance",
      date: "June 10, 2026",
      excerpt: "Skip the over-commercialized resorts. We dive deep into remote islands mapping out untouched tropical paradises offering high-end luxury at half the cost.",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const popularBlogs = [
    {
      id: "pop-1",
      title: "Top 10 Cafes in Kyoto for Digital Nomads",
      category: "Remote Work",
      excerpt: "Excellent Wi-Fi, hidden aesthetic stone gardens, and phenomenal matcha lattes curated for creators.",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pop-2",
      title: "How to Safely Navigate Solo Female Travel",
      category: "Safety Guides",
      excerpt: "Key digital verification routines, local communication apps, and smart boundary setups for safe exploring.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pop-3",
      title: "A Foodie's Roadmap Through Northern Italy",
      category: "Culinary",
      excerpt: "From hidden truffle farms in Piedmont to world-class balsamic cellars inside Modena layouts.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=500&q=80"
    }
  ];

  const exploreBlogs = [
    {
      id: "exp-1",
      title: "The Shift Toward Slow Travel in 2026",
      category: "Sustainability",
      date: "May 29, 2026"
    },
    {
      id: "exp-2",
      title: "Understanding Travel Insurance Loop-Holes",
      category: "Finance",
      date: "May 24, 2026"
    },
    {
      id: "exp-3",
      title: "Photographing the Northern Lights Natively",
      category: "Photography",
      date: "May 18, 2026"
    },
    {
      id: "exp-4",
      title: "Best Multi-Day Hiking Trails in Patagonia",
      category: "Adventure",
      date: "May 12, 2026"
    }
  ];

  // State Management for Trending Hero Slider
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === trendingBlogs.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? trendingBlogs.length - 1 : prev - 1));
  };

  return (
    <>
      <Header />

      <div className="blog-page-container">
        
        {/* 1. TRENDING SLIDER SECTION */}
        <section className="blog-main-section">
          <h2 className="blog-section-title">🔥 Trending Stories</h2>
          
          <div className="trending-slider-wrapper">
            {/* Navigation Arrows */}
            <button className="slider-arrow-btn prev" onClick={prevSlide}>&larr;</button>
            <button className="slider-arrow-btn next" onClick={nextSlide}>&rarr;</button>

            {/* Render Active Slide */}
            <div className="trending-slide">
              <img 
                src={trendingBlogs[currentSlide].image} 
                alt={trendingBlogs[currentSlide].title} 
              />
              <div className="slider-dark-overlay" />
              
              <div className="slider-content-box">
                <span className="blog-badge">{trendingBlogs[currentSlide].category}</span>
                <h2>{trendingBlogs[currentSlide].title}</h2>
                <div className="blog-meta-data">
                  <span>By <b>{trendingBlogs[currentSlide].author}</b></span>
                  <span>•</span>
                  <span>{trendingBlogs[currentSlide].date}</span>
                </div>
                <p>{trendingBlogs[currentSlide].excerpt}</p>
                <a href={`#blog/${trendingBlogs[currentSlide].id}`} className="read-more-link" style={{marginTop: "1rem"}}>
                  Read Article &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. POPULAR CAROUSEL SECTION */}
        <section className="blog-main-section">
          <h2 className="blog-section-title">✨ Popular Reads</h2>
          
          <div className="popular-carousel-row">
            {popularBlogs.map((blog) => (
              <div className="popular-blog-card" key={blog.id}>
                <div className="popular-img-container">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="popular-card-content">
                  <span className="blog-badge" style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}>
                    {blog.category}
                  </span>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <a href={`#blog/${blog.id}`} className="read-more-link" style={{ marginTop: "1rem" }}>
                    Read Full Story &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. EXPLORE MORE GRID */}
        <section className="blog-main-section">
          <h2 className="blog-section-title">🌐 Explore Further</h2>
          
          <div className="explore-blog-grid">
            {exploreBlogs.map((blog) => (
              <div className="explore-blog-card" key={blog.id}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "#6366f1", fontWeight: "700", textTransform: "uppercase" }}>
                    {blog.category}
                  </span>
                  <h3>{blog.title}</h3>
                </div>
                <div style={{ display: "flex", justifyContent: "between", alignItems: "center", width: "100%" }}>
                  <span style={{ fontSize: "0.8rem", color: "#4b5563" }}>{blog.date}</span>
                  <a href={`#blog/${blog.id}`} className="read-more-link">
                    Open &rarr;
                  </a>
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