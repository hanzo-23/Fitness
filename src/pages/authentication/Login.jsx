import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import "./Login.css";

export const Login = ({setIsLoggedIn, setUser}) => {

    const navigate = useNavigate(); 

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginData.email.trim() || !loginData.password.trim()) {
      alert("Please fill in both email and password.");
      return;
    }

    console.log(loginData);
    
    
    const loggedInUser = {
      name: loginData.email.split("@")[0],
      email: loginData.email
    };

    localStorage.setItem("user", JSON.stringify(loggedInUser));
    localStorage.setItem("isLoggedIn", "true");
    setUser(loggedInUser);
    setIsLoggedIn(true);
    navigate("/Profile"); ;

  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Welcome Back</h2>

        <input
          type="email"
          id="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        />

        <Link to="/ForgotPass">Forgot Password?</Link>

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/Register">Register</Link>
        </p>
      </form>
    </div>
  );
};

