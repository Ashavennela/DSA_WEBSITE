import React from "react";

export default function Navbar({ user, onLogout, activeView, onViewChange }) {
  return (
    <nav className="navbar" style={styles.navbar}>
      {/* Platform Branding/Logo */}
      <div className="nav-brand" style={styles.brand} onClick={() => onViewChange("home")}>
        <i className="fas fa-brain" style={{ marginRight: "8px", color: "#6366f1" }}></i>
        <span>PathAI</span>
      </div>

      {/* Dynamic Navigation Tabs */}
      <div className="nav-links" style={styles.linksContainer}>
        <button 
          style={activeView === "home" ? { ...styles.navBtn, ...styles.activeBtn } : styles.navBtn} 
          onClick={() => onViewChange("home")}
        >
          Home
        </button>
        
        <button 
          style={activeView === "topics" ? { ...styles.navBtn, ...styles.activeBtn } : styles.navBtn} 
          onClick={() => onViewChange("topics")}
        >
          Topics
        </button>

        <button 
          style={activeView === "practice" ? { ...styles.navBtn, ...styles.activeBtn } : styles.navBtn} 
          onClick={() => onViewChange("practice")}
        >
          Practice
        </button>

        <button 
          style={activeView === "quiz" ? { ...styles.navBtn, ...styles.activeBtn } : styles.navBtn} 
          onClick={() => onViewChange("quiz")}
        >
          Quiz
        </button>
      </div>

      {/* Student Profile Action controls */}
      <div className="nav-profile" style={styles.profileContainer}>
        <span style={styles.welcomeText}>
          Hi, <strong style={{ color: "#818cf8" }}>{user}</strong>
        </span>
        <button className="logout-btn" onClick={onLogout} style={styles.logoutBtn}>
          Logout <i className="fas fa-sign-out-alt" style={{ marginLeft: "6px" }}></i>
        </button>
      </div>
    </nav>
  );
}

// Inline styles to match a professional, ultra-clean dark theme
const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "64px",
    backgroundColor: "#1e293b",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2rem",
    borderBottom: "1px solid #334155",
    zIndex: 1000,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  brand: {
    fontSize: "1.35rem",
    fontWeight: "bold",
    color: "#f8fafc",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  linksContainer: {
    display: "flex",
    gap: "1rem",
  },
  navBtn: {
    backgroundColor: "transparent",
    border: "none",
    color: "#94a3b8",
    fontSize: "1rem",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  activeBtn: {
    color: "#ffffff",
    backgroundColor: "#334155",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1.25rem",
  },
  welcomeText: {
    color: "#cbd5e1",
    fontSize: "0.95rem",
  },
  logoutBtn: {
    backgroundColor: "#ef444420",
    border: "1px solid #ef444440",
    color: "#f87171",
    padding: "0.4rem 0.8rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "500",
    transition: "all 0.2s ease",
  }
};