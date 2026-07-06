// workspace-script.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the topic name from the browser's URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTopic = urlParams.get('topic');

    // 2. Select the HTML placeholder elements from workspace.html
    const workspaceTitle = document.getElementById("workspaceTitle");
    const tutorialIntro = document.getElementById("tutorialIntro");
    const tutorialConcepts = document.getElementById("tutorialConcepts");
    const topicDiagram = document.getElementById("topicDiagram");
    const diagramFallback = document.getElementById("diagramFallback");
    const downloadPdfBtn = document.getElementById("downloadPdfBtn");

    // 3. Check if a topic parameter exists and if it matches an item in our data registry
    if (selectedTopic && typeof tutorialData !== 'undefined' && tutorialData[selectedTopic]) {
        const currentData = tutorialData[selectedTopic];

        // --- Update Content Headers & Text Blocks ---
        workspaceTitle.textContent = selectedTopic;
        tutorialIntro.textContent = currentData.introduction || currentData.intro;

        // --- Render Dynamic Bullet Points Safely ---
        tutorialConcepts.innerHTML = ""; // Clear out the "Loading..." placeholder text
        
        const conceptsList = currentData.keyConcepts || currentData.points || [];
        if (conceptsList.length > 0) {
            conceptsList.forEach(point => {
                const li = document.createElement("li");
                li.textContent = point;
                tutorialConcepts.appendChild(li);
            });
        } else {
            const noPointsLi = document.createElement("li");
            noPointsLi.textContent = "No specific rules provided for this structural element.";
            tutorialConcepts.appendChild(noPointsLi);
        }

        // --- Update Diagram & Fallback System ---
        if (currentData.diagramPath || currentData.diagram) {
            topicDiagram.src = currentData.diagramPath || currentData.diagram;
            topicDiagram.alt = `${selectedTopic} Conceptual Structure`;
            topicDiagram.style.display = "block";
            
            if (diagramFallback) {
                diagramFallback.style.display = "none"; // Hide the loading state text
            }
        }

        // --- Update Download Button Mapping ---
        if (currentData.pdfPath || currentData.pdf) {
            downloadPdfBtn.href = currentData.pdfPath || currentData.pdf;
            downloadPdfBtn.style.display = "inline-block";
        } else {
            downloadPdfBtn.style.display = "none";
        }

    } else {
        // --- Fallback State if the Topic is missing or mismatched ---
        workspaceTitle.textContent = "Module Configuration Empty";
        tutorialIntro.textContent = "This section hasn't been written yet or the path name was typed incorrectly. Go back to the main dashboard to select an active track.";
        
        if (diagramFallback) {
            diagramFallback.textContent = "No visualization architecture available for this module context.";
        }
        downloadPdfBtn.style.display = "none";
    }
});