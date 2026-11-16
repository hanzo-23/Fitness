import React, { useState } from "react";
import "./ForgotPass.css";

export const ForgotPass = () => {
const [resetMsg,setResetMsg]=useState("");

  const [forgotForm, setForgotForm] = useState({
    email: "",
  });

  const handleForgot = (e) => {
    e.preventDefault();

    if( forgotForm.email.trim()=== ""){
      alert("Please type in your email.");
      return;
    }

    console.log("Reset request:", forgotForm.email);

    setResetMsg("Reset link sent! Check your email.")

    setForgotForm({email:""});
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <h1>Forgot Password?</h1>
        <h2>Enter your email and we'll send you a reset link.</h2>

        <form className="forgot-form" onSubmit={handleForgot}>

         {resetMsg && 
         <p className="success-msg">{resetMsg}</p>}

          <input
            type="email"
            id="email"
            placeholder="Email"
            value={forgotForm.email}
            onChange={(e) => setForgotForm({ ...forgotForm, email: e.target.value })}
          />
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};