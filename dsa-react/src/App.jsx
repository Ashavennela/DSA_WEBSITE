import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import TopicsView from "./components/TopicsView"; // Imported your real Topics view component
import "./App.css";

// --- CORE DASHBOARD HOME PAGE ---
function HomeView({ user }) {
  return (
    <div className="view-content" style={{ padding: "40px 20px" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "16px" }}>
        DSA Learning Platform 🚀
      </h1>
      <p style={{ color: "#cbd5e1", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
        Welcome back, <strong style={{ color: "#6366f1" }}>{user}</strong>! Select a section above to start practicing.
      </p>
    </div>
  );
}

// --- CURATED PRACTICE ENVIRONMENT (Expand later) ---
function PracticeView() {
  return (
    <div className="view-content" style={{ padding: "40px 20px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "12px" }}>💻 Practice Arena</h2>
      <p style={{ color: "#cbd5e1" }}>Solve curated problems with adaptive flexibility levels.</p>
    </div>
  );
}

// --- ACTIVE QUIZ SUBSECTION (Expand later) ---
function QuizView() {
  return (
    <div className="view-content" style={{ padding: "40px 20px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "12px" }}>🧠 Active Quizzes</h2>
      <p style={{ color: "#cbd5e1" }}>Test your conceptual understanding of algorithms.</p>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null); // Stores the clean username
  const [activeView, setActiveView] = useState("home"); // 'home' | 'topics' | 'practice' | 'quiz'

  // Restricts app navigation until login database auth credentials succeed
  if (!user) {
    return <Login onLoginSuccess={(name) => setUser(name)} />;
  }

  // Helper function to render the correct component dynamically
  const renderView = () => {
    switch (activeView) {
      case "home":
        return <HomeView user={user} />;
      case "topics":
        return <TopicsView />; // Calls your 20-topic interactive grid from your separate file
      case "practice":
        return <PracticeView />;
      case "quiz":
        return <QuizView />;
      default:
        return <HomeView user={user} />;
    }
  };

  return (
    <div>
      {/* Connected navigation panel passing control states */}
      <Navbar 
        user={user} 
        onLogout={() => { setUser(null); setActiveView("home"); }} 
        activeView={activeView}
        onViewChange={setActiveView}
      />
      
      {/* Central Application Main Window Space */}
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        {renderView()}
      </div>
    </div>
  );
}

export default App;