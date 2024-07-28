// project-details.js

// Example data structure
const projects = [
  {
    id: 1,
    title: "Project 1",
    stages: [
      {
        stage: "Planning",
        description: "Planning stage description",
        image: "images/projects/project1.jpg",
      },
      {
        stage: "Design",
        description: "Design stage description",
        image: "images/stage2.jpg",
      },
      {
        stage: "Development",
        description: "Development stage description",
        image: "images/stage3.jpg",
      },
      {
        stage: "Testing",
        description: "Testing stage description",
        image: "images/stage4.jpg",
      },
      {
        stage: "Deployment",
        description: "Deployment stage description",
        image: "images/stage5.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Project 2",
    stages: [
      {
        stage: "Planning",
        description: "Planning stage description",
        image: "images/stage1.jpg",
      },
      {
        stage: "Design",
        description: "Design stage description",
        image: "images/stage2.jpg",
      },
      {
        stage: "Development",
        description: "Development stage description",
        image: "images/stage3.jpg",
      },
      {
        stage: "Testing",
        description: "Testing stage description",
        image: "images/stage4.jpg",
      },
      {
        stage: "Deployment",
        description: "Deployment stage description",
        image: "images/stage5.jpg",
      },
    ],
  },
  // Add more projects as needed
];

// Function to get the project ID from the URL
function getProjectIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"), 10);
}

// Function to load project details
function loadProjectDetails(projectId) {
  const project = projects.find((proj) => proj.id === projectId);
  if (project) {
    document.getElementById("project-title").textContent = project.title;
    const stagesContainer = document.getElementById("project-stages");
    project.stages.forEach((stage) => {
      const stageElement = document.createElement("div");
      stageElement.classList.add("project-stage");
      stageElement.innerHTML = `
        <h2>${stage.stage}</h2>
        <img src="${stage.image}" alt="${stage.stage}">
        <p>${stage.description}</p>
      `;
      stagesContainer.appendChild(stageElement);
    });
  } else {
    document.getElementById("project-stages").innerHTML =
      "<p>Project not found.</p>";
  }
}

// Load project details on page load
document.addEventListener("DOMContentLoaded", () => {
  const projectId = getProjectIdFromUrl();
  loadProjectDetails(projectId);
});
