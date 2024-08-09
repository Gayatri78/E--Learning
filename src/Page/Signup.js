import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Style/Signup.css';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", { name, email, password });
      if (response.data.status === "success") {
        alert("Signup successful. You can now log in.");
      } else if (response.data.status === "exist") {
        alert("Email already exists. Please use a different email.");
      } else {
        alert("An error occurred during signup");
      }
    } catch (error) {
      alert("Error during signup");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="form-container-signup">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth">
          <h3 className="form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <div className="text-center">
            Already registered? <Link to="/login">Log in</Link>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
