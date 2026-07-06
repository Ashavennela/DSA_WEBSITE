import React, { useMemo, useState } from "react";

export default function TopicWorkspace({
  topic,
  videoId,
  initialCode = "",
  onRunCode,
}) {
  const [code, setCode] = useState(initialCode);

  const safeVideoId = useMemo(() => {
    // Accept either a raw ID or a full URL; prefer the ID.
    if (!videoId && topic?.videoId) return topic.videoId;
    const v = videoId ?? topic?.videoId;
    if (!v) return "";

    const str = String(v);
    // If it looks like a URL, try to extract v=...
    const urlMatch = str.match(/[?&]v=([^&]+)/);
    if (urlMatch?.[1]) return urlMatch[1];

    // Otherwise assume it's an ID.
    return str;
  }, [topic?.videoId, videoId]);

  const handleRun = () => {
    onRunCode?.(code, topic);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-icon">🧠</span> PathAI
        </div>
        <p className="sidebar-subtitle">DSA Learning Companion</p>
        <hr className="sidebar-divider" />
        <nav className="nav-menu">
          <a href="/" className="nav-item">
            🏠 My Learning Path
          </a>
          <a href="#" className="nav-item">
            📊 Analytics Dashboard
          </a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <div>
            <h1>{topic?.title ?? topic?.name ?? "Workspace"}</h1>
            <p className="subtitle">AI-Guided Tutorial & Interactive Visual Assets</p>
          </div>
          <a
            href="/"
            className="user-profile"
            style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 8 }}
          >
            ← Return to Path
          </a>
        </header>

        <div className="workspace-grid" style={{ marginTop: 0 }}>
          <section className="tutorial-card" style={{ marginTop: 0 }}>
            <div className="card-header-block">
              <span className="tutorial-badge">Core Concept Summary</span>
            </div>

            <p className="tutorial-paragraph">
              {topic?.description ?? topic?.intro ?? "Analyzing directory information structure..."}
            </p>

            <h3 className="section-subheading">Key Properties & Rules</h3>
            <ul className="concept-bullet-list">
              {(topic?.keyConcepts ?? topic?.points ?? []).length ? (
                (topic.keyConcepts ?? topic.points).map((point, idx) => <li key={idx}>{point}</li>)
              ) : (
                <li>No specific rules provided for this topic.</li>
              )}
            </ul>

            {safeVideoId ? (
              <div style={{ marginTop: 24 }}>
                <h3 className="section-subheading" style={{ marginTop: 0 }}>
                  Video Overview
                </h3>
                <div
                  className="diagram-viewport"
                  style={{ background: "rgba(5, 6, 15, 0.25)", borderStyle: "solid" }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${safeVideoId}`}
                    title={topic?.title ?? topic?.name ?? "Topic video"}
                    style={{ width: "100%", height: 360, border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : null}
          </section>

          <aside
            className="tutorial-card"
            style={{
              backgroundColor: "#0b0f1a",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              padding: 24,
            }}
          >
            <h3 className="section-subheading" style={{ marginTop: 0, marginBottom: 16 }}>
              Code Sandbox
            </h3>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="code-textarea"
              spellCheck={false}
              style={{
                width: "100%",
                minHeight: 280,
                resize: "vertical",
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(92,70,228,0.25)",
                borderRadius: 10,
                padding: 14,
                color: "#e5e7eb",
                outline: "none",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                fontSize: 13,
                lineHeight: 1.5,
              }}
              placeholder={`// Start coding for ${topic?.title ?? topic?.name ?? "this topic"}...`}
            />

            <div className="download-container" style={{ marginTop: 18 }}>
              <button
                type="button"
                onClick={handleRun}
                className="btn-download"
                style={{ width: "100%", border: 0 }}
              >
                Run Code
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

