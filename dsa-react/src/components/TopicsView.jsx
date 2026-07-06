import React, { useState } from "react";

const dsaTopics = [
  { name: "Arrays", status: "completed", progress: "95%" },
  { name: "Linked Lists", status: "completed", progress: "80%" },
  { name: "Stacks", status: "review", progress: "60%" },
  { name: "Queues", status: "review", progress: "55%" },
  { name: "Binary Trees", status: "to-learn", progress: "0%" },
  { name: "Binary Search Trees", status: "to-learn", progress: "0%" },
  { name: "Graphs", status: "to-learn", progress: "0%" },
  { name: "Recursion", status: "completed", progress: "88%" },
  { name: "Hashing", status: "review", progress: "70%" },
  { name: "Sorting Algorithms", status: "to-learn", progress: "0%" },
  { name: "Searching Algorithms", status: "to-learn", progress: "0%" },
  { name: "Heaps", status: "to-learn", progress: "0%" },
  { name: "Tries", status: "to-learn", progress: "0%" },
  { name: "Dynamic Programming", status: "to-learn", progress: "0%" },
  { name: "Greedy Algorithms", status: "to-learn", progress: "0%" },
  { name: "Bit Manipulation", status: "to-learn", progress: "0%" },
  { name: "String Algorithms", status: "to-learn", progress: "0%" },
  { name: "Backtracking", status: "to-learn", progress: "0%" },
  { name: "Segment Trees", status: "to-learn", progress: "0%" },
  { name: "Disjoint Set Union", status: "to-learn", progress: "0%" }
];

export default function TopicsView() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const getStatusStyle = (status) => {
    switch (status) {
      case "completed": return { backgroundColor: "#10b98120", color: "#34d399", border: "1px solid #10b98140" };
      case "review": return { backgroundColor: "#f59e0b20", color: "#fbbf24", border: "1px solid #f59e0b40" };
      default: return { backgroundColor: "#64748b20", color: "#94a3b8", border: "1px solid #64748b40" };
    }
  };

  if (selectedTopic) {
    return (
      <div style={styles.workspaceContainer}>
        <button onClick={() => setSelectedTopic(null)} style={styles.backBtn}>← Back to Topics Dashboard</button>
        <h2 style={{ color: "#fff", marginTop: "15px" }}>🚀 {selectedTopic.name} Study Room</h2>
        <div style={styles.panelGrid}>
          <div style={styles.panel}>
            <h3 style={styles.panelTitle}>📚 Reference Documents & PDFs</h3>
            <div style={styles.resourceCard}>
              <i className="fas fa-file-pdf" style={{ color: "#f87171", marginRight: "10px" }}></i>
              <a href="#pdf" style={{ color: "#818cf8" }}>Download {selectedTopic.name} Study Guide.pdf</a>
            </div>
          </div>
          <div style={styles.panel}>
            <h3 style={styles.panelTitle}>💻 Interactive Area</h3>
            <div style={{ padding: "15px", backgroundColor: "#0f172a", borderRadius: "6px", color: "#34d399", fontFamily: "monospace" }}>
              // Coding workspace initialized for {selectedTopic.name}...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", textAlign: "left" }}>
      <h2 style={{ color: "#fff", marginBottom: "20px" }}>📚 Data Structure Topics</h2>
      <div style={styles.topicsGrid}>
        {dsaTopics.map((topic, index) => (
          <div key={index} style={styles.topicCard} onClick={() => setSelectedTopic(topic)}>
            <span style={{ ...styles.statusBadge, ...getStatusStyle(topic.status) }}>{topic.status.replace("-", " ")}</span>
            <h3 style={styles.cardTitle}>{topic.name}</h3>
            <p style={styles.progressText}>Progress: {topic.progress}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  topicsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" },
  topicCard: { backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "12px", padding: "20px", cursor: "pointer" },
  cardTitle: { fontSize: "1.2rem", color: "#f8fafc", margin: "12px 0 6px 0" },
  progressText: { color: "#94a3b8", fontSize: "0.85rem", margin: 0 },
  statusBadge: { fontSize: "0.7rem", fontWeight: "bold", padding: "3px 6px", borderRadius: "4px" },
  workspaceContainer: { textAlign: "left", maxWidth: "1200px", margin: "0 auto" },
  backBtn: { backgroundColor: "#334155", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer" },
  panelGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "20px" },
  panel: { backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "12px", padding: "20px" },
  panelTitle: { fontSize: "1.2rem", color: "#fff", margin: "0 0 15px 0" },
  resourceCard: { display: "flex", alignItems: "center", backgroundColor: "#111827", padding: "12px", borderRadius: "8px" }
};