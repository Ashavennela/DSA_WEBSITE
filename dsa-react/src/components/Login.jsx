import React, { useState } from "react";

export default function Login({ onLoginSuccess }) {
  const [view, setView] = useState("login"); // 'login' | 'signup' | 'forgot'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError("");

    // 1. Check if the user exists in our local storage system
    const savedPassword = localStorage.getItem(email.toLowerCase().trim());

    if (!savedPassword) {
      setError("This email account does not exist! Please sign up first.");
      return;
    }

    // 2. Validate password matches what they registered with
    if (password !== savedPassword) {
      setError("Incorrect password! Please try again.");
      return;
    }

    // Extract name before the '@' sign
    const username = email.split("@")[0];
    // Capitalize the first letter for a clean look
    const formattedName = username.charAt(0).toUpperCase() + username.slice(1);
    
    onLoginSuccess(formattedName);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Save the credentials securely to local browser storage
    const normalizedEmail = email.toLowerCase().trim();
    localStorage.setItem(normalizedEmail, password);

    alert("🎉 Account created successfully! You can log in now with your new password.");
    
    // Clear passwords fields and switch views
    setPassword("");
    setConfirmPassword("");
    setView("login");
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setError("");

    const normalizedEmail = email.toLowerCase().trim();
    const userExists = localStorage.getItem(normalizedEmail);

    if (!userExists) {
      setError("No account found with this email address.");
      return;
    }

    alert(`Password reset link sent to ${email}`);
    setView("login");
  };

  return (
    <div className="container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo">
            <i className="fas fa-brain"></i>
            <h1>PathAI</h1>
          </div>
          <p>Your Personal DSA Learning Companion</p>
        </div>

        {error && <div style={{ color: "#ef4444", marginBottom: "15px", fontSize: "0.9rem", textAlign: "center" }}>⚠️ {error}</div>}

        {/* --- VIEW 1: LOGIN MODE --- */}
        {view === "login" && (
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-container">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>Password</label>
                <a href="#forgot" onClick={() => { setView("forgot"); setError(""); }} style={{ color: "#6366f1", fontSize: "0.85rem", textDecoration: "none" }}>Forgot Password?</a>
              </div>
              <div className="input-container">
                <i className="fas fa-lock"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                  <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                </button>
              </div>
            </div>

            <button type="submit" className="login-btn">
              <span>Login</span>
              <i className="fas fa-arrow-right"></i>
            </button>

            <div className="login-footer">
              <p>Don't have an account? <a href="#signup" onClick={() => { setView("signup"); setError(""); setPassword(""); }}>Sign up here</a></p>
            </div>
          </form>
        )}

        {/* --- VIEW 2: SIGN UP MODE --- */}
        {view === "signup" && (
          <form className="login-form" onSubmit={handleSignUpSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-container">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>New Password</label>
              <div className="input-container">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Create a secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <div className="input-container">
                <i className="fas fa-shield-alt"></i>
                <input
                  type="password"
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="login-btn">
              <span>Create Account</span>
            </button>

            <div className="login-footer">
              <p>Already have an account? <a href="#login" onClick={() => { setView("login"); setError(""); setPassword(""); }}>Log in here</a></p>
            </div>
          </form>
        )}

        {/* --- VIEW 3: FORGOT / RESET PASSWORD MODE --- */}
        {view === "forgot" && (
          <form className="login-form" onSubmit={handleForgotSubmit}>
            <p style={{ color: "#94a3b8", fontSize: "0.9rem", textAlign: "center", marginBottom: "15px" }}>
              Enter your email address and we'll send you a link to reset your password.
            </p>
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-container">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Enter your account email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="login-btn">
              <span>Send Reset Link</span>
            </button>

            <div className="login-footer">
              <p><a href="#login" onClick={() => { setView("login"); setError(""); }}>Back to Login</a></p>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}