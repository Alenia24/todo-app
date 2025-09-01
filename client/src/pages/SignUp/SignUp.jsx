import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

// Import functions
import { postRegister } from '../../services/todo-api.jsx' 

import Logo from "../../assets/logo.png"
import LoginImage from "../../assets/login.png"
import "./SignUp.css"

export default function SignUp() {
  const [error, setError] = useState(null);
  const nav = useNavigate();

  // Define the handler
  const createRegister = (e) => {
    e.preventDefault();

    // Ensure passwords match
    if(e.target.password.value !== e.target["confirm-password"].value) {
      setError("Passwords do not match.")
      return;
    }

    // Create the user to send to the server
    const registerData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    // Create the user
    postRegister(registerData).then(() => {
      setError("");

      setTimeout(() => {
        nav("/login");
      }, 2000)
    }). catch((error) => {
      console.log(error);
      setError(error.response.data.message);
    })
  }
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
        <form className="signup-form" onSubmit={createRegister} method='post'>
          <label> Username</label> <br />
          <input type="text" name='name'
          id='name'required /> <br />
          <label> Email</label> <br />
          <input type="email" name='email' id='email' required /> <br />
          <label>Password (6 or more characters)</label> <br />
          <input type="password" name="password" id="password" required /> <br />
          <label>Confirm Password</label> <br />
          <input
            type="password"
            name="confirm-password"
            id="confirm-password" required
          />
          <br />
          <input type="submit" value="Sign Up" />
        </form>
        {error && <div className='message-error'> {error}</div>}
        <p className="account">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
