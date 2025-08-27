import React from 'react'

import Navigation from '../../components/Navigation/Navigation.jsx'
import "./Homepage.css"

import VideoBanner from "../../assets/video-banner.mp4"

export default function Homepage() {
  return (
    <div>
      <Navigation />
      <div className="homepage-content">
        <div>
          <video
            src={VideoBanner}
            autoPlay
            muted
            loop
            playsInline
            className="video-banner"
          ></video>
        </div>

        <div className="hero">
          <h1>Stay Organized. Get Things Done.</h1>
          <p>Your smart, simple daily planner is just a click away.</p>
          <button className='plan-btn'>Start Planning!</button>
        </div>

        <div className="features-section">
          <h2>Features</h2>
          <div className="features-container">
            <div className="feature-card">
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
