import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Operational execution API handler logic connects here
    console.log("Transmission Data verified:", formData);
  };

  return (
    <>
      <Header />

      <div className="contact-canvas">
        <div className="contact-layout-box">
          
          {/* LEFT COLUMN: EDITORIAL DIRECTORY */}
          <div className="contact-editorial-panel">
            <div>
              <span className="contact-tagline">Connect Coordinates</span>
              <h1>Let’s Map Your Next Expedition</h1>
              <p>
                Have questions about our custom itineraries, destination updates, 
                or interested in a media partnership? Drop our route architecture team a transmission line.
              </p>
            </div>

            <div className="contact-channels-list">
              <div className="channel-node">
                <div className="channel-icon-avatar">📬</div>
                <div className="channel-info-block">
                  <h3>General Inquiries</h3>
                  <a href="mailto:expeditions@travelblog.com">expeditions@travelblog.com</a>
                </div>
              </div>

              <div className="channel-node">
                <div className="channel-icon-avatar">✈️</div>
                <div className="channel-info-block">
                  <h3>Partnership Management</h3>
                  <a href="mailto:alliances@travelblog.com">alliances@travelblog.com</a>
                </div>
              </div>

              <div className="channel-node">
                <div className="channel-icon-avatar">📍</div>
                <div className="channel-info-block">
                  <h3>Base Command</h3>
                  <p>104 Venture Outpost, Suite 400<br />San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM MODULE */}
          <div className="contact-form-holder">
            <form onSubmit={handleFormSubmit}>
              <div className="travel-input-group">
                
                <div className="travel-field-wrapper">
                  <label htmlFor="name">Your Nomenclature</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="e.g., Captain Alex Mercer" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="travel-field-wrapper">
                  <label htmlFor="email">Transmission Endpoint</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="name@domain.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="travel-field-wrapper">
                  <label htmlFor="subject">Expedition Sector</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    placeholder="Itinerary Planning / Media / Feedback" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="travel-field-wrapper">
                  <label htmlFor="message">Log Entry Details</label>
                  <textarea 
                    id="message"
                    name="message"
                    placeholder="Outline your coordinates, project scope, or inquiries..." 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

              </div>

              <button type="submit" className="travel-submit-button">
                Transmit Message Line →
              </button>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}