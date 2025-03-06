import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Sample user credentials (this would normally come from a database)
  const sampleUser = {
    email: "cii@gmail.com",
    password: "cii",
    name: "cii",
  };

  // Handle form submission (for both login and register)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login by checking credentials
    if (email === sampleUser.email && password === sampleUser.password) {
      setIsAuthenticated(true); // Set user as authenticated
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>AgroEye </h2>
        <h2 className="login-title">{isRegister ? "Register" : "Login"}</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {isRegister && (
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Full Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          )}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-button">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <p className="switch-text">
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <span className="switch-link" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? " Login" : " Register"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
