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
          <button className="plan-btn">Start Planning!</button>
        </div>

        <div className="features-section">
          <h2>Features</h2>
          <div className="features-container">
            <div className="feature-card">
              <h5>Smart Task Management</h5>
              <p>Create, edit, and prioritize tasks with ease.</p>
            </div>

            <div className="feature-card">
              <h5>Reminders & Notifications</h5>
              <p>Never miss a tasks with timely reminders.</p>
            </div>

            <div className="feature-card">
              <h5>Priority Levels</h5>
              <p>Sort tasks by urgency and focus on what matters most.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
