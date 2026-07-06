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

const grid = document.getElementById('topicsGrid');

dsaTopics.forEach(topic => {
    const card = document.createElement('div');
    card.classList.add('topic-card');
    
    let statusClass = '';
    if (topic.status === 'completed') statusClass = 'status-completed';
    else if (topic.status === 'review') statusClass = 'status-review';
    else if (topic.status === 'to-learn') statusClass = 'status-to-learn';

    card.innerHTML = `
        <span class="topic-status ${statusClass}">${topic.status.replace('-', ' ')}</span>
        <h3>${topic.name}</h3>
        <p class="progress-text">Progress: ${topic.progress}</p>
    `;
    
    // CHANGED: Replaced alert() with window.location.href redirect
    card.addEventListener('click', () => {
        window.location.href = `workspace.html?topic=${encodeURIComponent(topic.name)}`;
    });

    grid.appendChild(card);
});