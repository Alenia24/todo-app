import React from 'react'

import Navigation from '../../components/Navigation/Navigation.jsx'
import VideoBanner from "../../assets/video-banner.mp4"
import "./Homepage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTasks, faBell, faExclamationCircle, faStar } from "@fortawesome/free-solid-svg-icons"

export default function Homepage() {
  return (
    <div>
      <Navigation />
      <div className="homepage-content">
        {/* Video Banner */}
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

        {/* Hero Section */}
        <div className="hero">
          <h1>Stay Organized. Get Things Done.</h1>
          <p>Your smart, simple daily planner is just a click away.</p>
          <button className="plan-btn">Start Planning!</button>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2>Features</h2>
          <div className="features-container">
            <div className="feature-card">
              <FontAwesomeIcon
                icon={faTasks}
                size="3x"
                className="feature-icon"
              />
              <h5>Smart Task Management</h5>
              <p>Create, edit, and prioritize tasks with ease.</p>
            </div>

            <div className="feature-card">
              <FontAwesomeIcon
                icon={faBell}
                size="3x"
                className="feature-icon"
              />
              <h5>Reminders & Notifications</h5>
              <p>Never miss a tasks with timely reminders.</p>
            </div>

            <div className="feature-card">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                size="3x"
                className="feature-icon"
              />
              <h5>Priority Levels</h5>
              <p>Sort tasks by urgency and focus on what matters most.</p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="testimonials-section">
          <h2>What Our Users Say</h2>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <img
                  src="https://i.pravatar.cc/80?img=1"
                  alt="Alex M."
                  className="testimonial-avatar"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="testimonial-name">Alex M.</div>
                  <div className="testimonial-rating">
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                  </div>
                </div>

                <div className="testimonial-review">
                  <p>
                    "This app has completely changed the way I organize my day.
                    It's simple, fast, and actually fun to use!"
                  </p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="testimonial-name">Jamie R.</div>
                  <div className="testimonial-rating">
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                  </div>
                </div>

                <div className="testimonial-review">
                  <p>
                    "I've tried dozens of to-do apps, and this one finally
                    clicked for me. It's intuitive and keeps me on track."
                  </p>
                </div>
              </div>
              <div className="testimonial-avatar">
                <img
                  src="https://i.pravatar.cc/80?img=1"
                  alt="Alex M."
                  className="testimonial-avatar"
                />
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <img
                  src="https://i.pravatar.cc/80?img=5"
                  alt="Priya S."
                  className="testimonial-avatar"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="testimonial-name">Priya S.</div>
                  <div className="testimonial-rating">
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                    <FontAwesomeIcon icon={faStar} className="review-star" />
                  </div>
                </div>

                <div className="testimonial-review">
                  <p>
                    "The reminders and priorites help me manage work and family
                    tasks without stress. Total game changer!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call To Action Section */}
        <div className="cta-section">
          <h2>Ready to take control of your day?</h2>
          <p>
            Start planning smarter with a simple, powerful to-do app made for
            your flow.
          </p>
          <button className="cta-button">Start Planning</button>
        </div>
      </div>
    </div>
  );
}
