import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export const Register = ({setUser}) => {
  const [successMsg, setSuccessMsg] = useState("");

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confpass: ""
  });

  const handleReg = (e) => {
    e.preventDefault();

    const { name, email, password, confpass } = registerForm; // 3achen bl line li tahet ma 223od iktob registerForm.name.trim

    if (!name.trim() || !email.trim() || !password.trim() || !confpass.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confpass) {
      alert("Passwords do not match.");
      return;
    }

    const newUser={
      name:registerForm.name,
      email:registerForm.email,
      password:registerForm.password,
      confpass:registerForm.confpass

    };

  localStorage.setItem("user", JSON.stringify(newUser));
  setUser(newUser);
    setSuccessMsg("Account created successfully!");


    setRegisterForm({
      name: "",
      email: "",
      password: "",
      confpass: ""
    });
  };

  return (
    <div className="reg">
      
      <form className="auth-form reg-form" onSubmit={handleReg}>
        <h1>Create Account</h1>
        {successMsg && <p className="success-msg">{successMsg}</p>}

        <input
          type="text"
          id="name"
          placeholder="Name"
          value={registerForm.name}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, name: e.target.value })
          }
        />

        <input
          type="email"
          id="email"
          placeholder="Email"
          value={registerForm.email}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, email: e.target.value })
          }
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          value={registerForm.password}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, password: e.target.value })
          }
        />

        <input
          type="password"
          id="conf-password"
          placeholder="Confirm Password"
          value={registerForm.confpass}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, confpass: e.target.value })
          }
        />

        <button type="submit">Create Account</button>

        <p>
          Already have an account? <Link to="/Login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;