import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.png";
import LoginImage from "../../assets/login.png";
import "./LogIn.css";
import { postLogin } from "../../services/todo-api";

export default function LogIn() {
  const [error, setError] = useState(null);
  const nav = useNavigate();

  // Define the handler
  const createLogin = (e) => {
    e.preventDefault();

    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    postLogin(loginData)
      .then((res) => {
        nav("/");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  

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
        <form className="login-form" onSubmit={createLogin} method="post">
          <label> Email</label> <br />
          <input type="email" name="email" id="email" required /> <br />
          <label>Password</label> <br />
          <input type="password" name="password" id="password" required /> <br />
          <input type="submit" value="Log In" />
        </form>
        {error && <div>{error}</div>}
        <p className="account">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
