import React from 'react'
import { Link } from 'react-router-dom';

import Logo from "../../assets/logo.png"
import "./Footer.css"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-section">
      <div className="links">
        <Link>
          <div className="logo">
            <img src={Logo} alt="Mintra Logo" width={40} />
            <h4>Mintra</h4>
          </div>
        </Link>

        <div className="site-links">
          <h6>Site Links</h6>
          <Link to="/">Home</Link>
          <Link>About</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="legal-links">
          <h6>Legal Info</h6>
          <Link>Privacy Policies</Link>
          <Link>Terms & Conditions</Link>
        </div>
      </div>
      <div className="copy-right">
        <p>&copy; {currentYear} Mintra. All rights reserved.</p>
      </div>
    </div>
  );
}
