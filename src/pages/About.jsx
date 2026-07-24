import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/About.css"; // Imports stylesheet from the custom folder path

// Shared Grid Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const AboutUs = () => {
  // --- TOUR PACKAGES DATA MATRIX ---
  const packagesData = [
    {
      id: "pkg-1",
      title: "Goa Beach Tour",
      duration: "4 Days / 3 Nights",
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pkg-2",
      title: "Kashmir Tour",
      duration: "6 Days / 5 Nights",
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80" // Fixed the string typo here
    },
    {
      id: "pkg-3",
      title: "Andaman Escape",
      duration: "5 Days / 4 Nights",
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pkg-4",
      title: "Kerala Backwaters",
      duration: "5 Days / 4 Nights",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // --- BLOGS DATA MATRIX ---
  const blogsData = [
    {
      id: "blog-1",
      title: "Best Time To Visit Andaman",
      subtitle: "Travel Guide & Weather Tips",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "blog-2",
      title: "Top Places In Kashmir",
      subtitle: "Explore Beautiful Valleys",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "blog-3",
      title: "Goa Travel Guide",
      subtitle: "Beaches, Food & Nightlife",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "blog-4",
      title: "Hidden Gems of Himachal",
      subtitle: "Offbeat Mountain Escapes",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // --- ENGINE CONSTANTS ---
  const cardsVisible = 3; 

  // --- TRACK 1 STATE MECHANICS: PACKAGES ---
  const [pkgIndex, setPkgIndex] = useState(0);
  const maxPkgIndex = Math.max(0, packagesData.length - cardsVisible);

  const nextPkg = () => {
    setPkgIndex((prev) => (prev < maxPkgIndex ? prev + 1 : 0));
  };
  const prevPkg = () => {
    setPkgIndex((prev) => (prev > 0 ? prev - 1 : maxPkgIndex));
  };

  // --- TRACK 2 STATE MECHANICS: BLOGS ---
  const [blogIndex, setBlogIndex] = useState(0);
  const maxBlogIndex = Math.max(0, blogsData.length - cardsVisible);

  const nextBlog = () => {
    setBlogIndex((prev) => (prev < maxBlogIndex ? prev + 1 : 0));
  };
  const prevBlog = () => {
    setBlogIndex((prev) => (prev > 0 ? prev - 1 : maxBlogIndex));
  };

  return (
    <div className="travel-page-wrapper">
      
      {/* Header component integration */}
      <Header />

      {/* ABOUT US HERO SECTION */}
      <section className="about-section">
        <div className="about-container">

          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="about-image"
          >
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Travel Hero Scene"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="about-content"
          >
            <span className="about-tag">ABOUT US</span>
            <h2>Creating Unforgettable Travel Experiences</h2>
            <p>
              We help travelers discover amazing destinations, create memorable journeys, 
              and enjoy stress-free vacations with customized travel packages.
            </p>

            <div className="about-stats">
              <div className="stat-box">
                <h3>10K+</h3>
                <p>Happy Travelers</p>
              </div>
              <div className="stat-box">
                <h3>150+</h3>
                <p>Destinations</p>
              </div>
              <div className="stat-box">
                <h3>8+</h3>
                <p>Years Experience</p>
              </div>
            </div>

            <button className="primary-btn">Explore Tours</button>
          </motion.div>

        </div>
      </section>

      {/* 1. POPULAR TOUR PACKAGES SLIDER SECTION */}
      <section className="package-section">
        <div className="section-heading-slider-wrapper">
          <div className="section-heading">
            <h2>Popular Tour Packages</h2>
            <p>Explore our most booked destinations.</p>
          </div>

          <div className="package-slider-controls">
            <button onClick={prevPkg} className="pkg-nav-btn">←</button>
            <button onClick={nextPkg} className="pkg-nav-btn">→</button>
          </div>
        </div>

        <div className="package-slider-mask">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="package-slider-track"
            animate={{ x: `-${pkgIndex * (100 / cardsVisible)}%` }}
            transition={{ type: "spring", damping: 22, stiffness: 100 }}
          >
            {packagesData.map((pkg) => (
              <motion.div 
                variants={fadeInUp} 
                className="package-card slider-item-card" 
                key={pkg.id}
                style={{ minWidth: `${100 / cardsVisible}%` }}
              >
                <img src={pkg.image} alt={pkg.title} />
                <div className="package-content">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.duration}</p>
                  <button>View Package</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. LATEST TRAVEL BLOGS SLIDER SECTION */}
      <section className="blog-section">
        <div className="section-heading-slider-wrapper">
          <div className="section-heading">
            <h2>Latest Travel Blogs</h2>
            <p>Travel tips, guides, and destination insights.</p>
          </div>

          <div className="blog-slider-controls">
            <button onClick={prevBlog} className="blog-nav-btn">←</button>
            <button onClick={nextBlog} className="blog-nav-btn">→</button>
          </div>
        </div>

        <div className="blog-slider-mask">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="blog-slider-track"
            animate={{ x: `-${blogIndex * (100 / cardsVisible)}%` }}
            transition={{ type: "spring", damping: 22, stiffness: 100 }}
          >
            {blogsData.map((blog) => (
              <motion.div 
                variants={fadeInUp} 
                className="blog-card slider-item-blog" 
                key={blog.id}
                style={{ minWidth: `${100 / cardsVisible}%` }}
              >
                <img src={blog.image} alt={blog.title} />
                <div className="blog-content">
                  <h3>{blog.title}</h3>
                  <p>{blog.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer component integration */}
      <Footer />
    </div>
  );
};

export default AboutUs;