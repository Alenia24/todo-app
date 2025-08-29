import React from 'react'

import Logo from "../../assets/logo.png"
import "./Footer.css"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-section">
      <div className="links">
        <div className="logo">
          <img src={Logo} alt="Mintra Logo" width={40} />
          <h4>Mintra</h4>
        </div>

        <div className="site-links">
          <h6>Site Links</h6>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Login</a>
        </div>

        <div className="legal-links">
          <h6>Legal Info</h6>
          <a href="">Privacy Policies</a>
          <a href="">Terms & Conditions</a>
        </div>
      </div>
      <div className="copy-right">
      <p>&copy; {currentYear} Mintra. All rights reserved.</p>
      </div>
    </div>
  );
}
