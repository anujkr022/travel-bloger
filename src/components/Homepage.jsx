// import React from 'react';
// import "../styles/Homepage.css";

// const Homepage = () => {
//   // Mock data for features
//   const features = [
//     {
//       id: 1,
//       icon: '⚡',
//       title: 'Lightning Fast',
//       description: 'Optimized for maximum speed and flawless performance across all devices.'
//     },
//     {
//       id: 2,
//       icon: '🛡️',
//       title: 'Secure by Default',
//       description: 'Enterprise-grade security to ensure your data remains safe and private.'
//     },
//     {
//       id: 3,
//       icon: '⚙️',
//       title: 'Easy Customization',
//       description: 'Highly modular architecture allows you to tweak everything to your liking.'
//     }
//   ];

//   return (
//     <div className="homepage">
//       {/* Navbar Section */}
//       <nav className="navbar">
//         <div className="nav-logo">DevSphere</div>
//         <ul className="nav-links">
//           <li><a href="#features">Features</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//         <button className="btn btn-primary">Sign Up</button>
//       </nav>

//       {/* Hero Section */}
//       <header className="hero-section">
//         <div className="hero-content">
//           <h1>Build the Future of Web Apps</h1>
//           <p>A modern, scalable starter kit for your next big idea. Built with React, passion, and clean code.</p>
//           <div className="hero-buttons">
//             <button className="btn btn-primary">Get Started</button>
//             <button className="btn btn-secondary">Learn More</button>
//           </div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section id="features" className="features-section">
//         <h2>Why Choose Us?</h2>
//         <div className="features-grid">
//           {features.map((feature) => (
//             <div key={feature.id} className="feature-card">
//               <div className="feature-icon">{feature.icon}</div>
//               <h3>{feature.title}</h3>
//               <p>{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} DevSphere. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Homepage;