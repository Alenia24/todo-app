import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Logo from "../../assets/logo.png"
import LoginImage from "../../assets/login.png"
import "./SignUp.css"

export default function SignUp() {
  const nav = useNavigate();
  return (
    <div className="signup-container">
      <div className="left">
        <img className="img-fluid" src={LoginImage} alt="" />
      </div>
      <div className="right">
        <Link to="/">
          <img src={Logo} alt="" width={70} />
        </Link>
        <h1>Get Started</h1>
        <h5 className="welcome">
          Welcome to Mintra! Let's create your account.
        </h5>
        <form className="signup-form">
          <label> Username</label> <br />
          <input type="text" /> <br />
          <label> Email</label> <br />
          <input type="email" /> <br />
          <label>Password (6 or more characters)</label> <br />
          <input type="password" name="password" id="password" /> <br />
          <label>Confirm Password</label> <br />
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
          <br />
          <input type="submit" value="Sign Up" />
        </form>
        <p className="account">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
