import React from "react";

const statusToClass = (status) => {
  if (status === "completed") return "status-completed";
  if (status === "review") return "status-review";
  if (status === "to-learn") return "status-to-learn";
  return "";
};

export default function Dashboard({ topics = [], onSelectTopic }) {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-icon">🧠</span> PathAI
        </div>
        <p className="sidebar-subtitle">DSA Learning Companion</p>
        <hr className="sidebar-divider" />
        <nav className="nav-menu">
          <a href="/" className="nav-item active">
            📚 My Learning Path
          </a>
          <a href="#" className="nav-item">
            📝 Diagnostic Test
          </a>
          <a href="#" className="nav-item">
            📊 Analytics Dashboard
          </a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <div>
            <h1>Welcome Back!</h1>
            <p className="subtitle">Your customized AI learning path is active.</p>
          </div>
          <div className="user-profile">
            <span className="status-dot" /> Student Mode
          </div>
        </header>

        <section className="topics-section">
          <div className="section-title-container">
            <h2>Data Structures & Algorithms Topics</h2>
            <p className="section-desc">
              Click on any module to view AI-generated explanations, SVG diagrams, and adaptive quizzes.
            </p>
          </div>

          <div className="topics-grid" role="list">
            {topics.map((topic) => {
              const statusClass = statusToClass(topic?.status);
              const statusLabel = (topic?.status || "").replace("-", " ");

              return (
                <div
                  key={topic?.name ?? topic?.id}
                  className="topic-card"
                  role="listitem"
                  tabIndex={0}
                  onClick={() => onSelectTopic?.(topic)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") onSelectTopic?.(topic);
                  }}
                >
                  {topic?.status ? (
                    <span className={`topic-status ${statusClass}`}>{statusLabel}</span>
                  ) : null}
                  <h3>{topic?.name}</h3>
                  {topic?.progress ? (
                    <p className="progress-text">Progress: {topic.progress}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

