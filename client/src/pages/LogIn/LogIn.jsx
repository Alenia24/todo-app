import React from 'react'
import { Link } from 'react-router-dom';

import Logo from "../../assets/logo.png";
import LoginImage from "../../assets/login.png";
import "./LogIn.css"

export default function LogIn() {
  return (
    <div className="login-container">
      <div className="left">
        <img className="img-fluid" src={LoginImage} alt="" />
      </div>
      <div className="right">
        <Link to="/">
          <img src={Logo} alt="" width={70} />
        </Link>
        <h1>Get Started</h1>
        <h5 className="welcome">Welcome Back to Mintra!</h5>
        <form className="login-form">
          <label> Email</label> <br />
          <input type="email" /> <br />
          <label>Password</label> <br />
          <input type="password" name="password" id="password" /> <br />
          <input type="submit" value="Log In" />
        </form>
        <p className="account">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
