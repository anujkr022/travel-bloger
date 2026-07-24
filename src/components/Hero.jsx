import React, { useState, useEffect } from 'react';
 

export default function Hero() {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Build the Future of Web Apps",
      subtitle: "A modern, scalable starter kit for your next big idea. Built with React and clean code."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Scale Without Boundaries",
      subtitle: "Deploy globally with optimized performance frameworks that scale to millions of users automatically."
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const triggerAnimation = (callback) => {
    setIsAnimating(true);
    setTimeout(() => {
      callback();
      setIsAnimating(false);
    }, 50); 
  };

  const handleNext = () => {
    triggerAnimation(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    });
  };

  const handlePrev = () => {
    triggerAnimation(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    });
  };

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url(${slides[current].image})`,
  };

  return (
    <header className="hero-section" style={heroStyle}>
      <div className={`hero-bg-overlay ${isAnimating ? '' : 'zoom-animation'}`} style={{ backgroundImage: `url(${slides[current].image})` }}></div>

      <button className="nav-arrow left-arrow" onClick={handlePrev}>←</button>
      <button className="nav-arrow right-arrow" onClick={handleNext}>→</button>

      <div className="hero-content">
        {/* Changed class names to track right-side animations */}
        <h1 className={isAnimating ? 'hidden' : 'slide-right-text'}>
          {slides[current].title}
        </h1>
        <p className={isAnimating ? 'hidden' : 'slide-right-desc'}>
          {slides[current].subtitle}
        </p>
        
        <div className={`hero-buttons ${isAnimating ? 'hidden' : 'slide-right-buttons'}`}>
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>

      <div className="slide-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => triggerAnimation(() => setCurrent(index))}
          ></span>
        ))}
      </div>
    </header>
  );
}