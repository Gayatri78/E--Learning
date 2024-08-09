import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Style/Signup.css'; // Assuming same styling as Signup

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", { email, password });
      if (response.data.status === "success") {
        alert(" login successfully");
        navigate("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("Error during login");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth">
          <h3 className="form-title">LOG IN</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label className="pass">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
