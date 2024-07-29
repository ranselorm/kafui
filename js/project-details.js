// Define project data (could be fetched from a server in a real app)
const projects = [
  {
    id: 1,
    title: "Project 1",
    stages: [
      {
        img: "images/projects/project1.jpg",
        description: "Stage 1 Description",
      },
      {
        img: "images/projects/project1_stage2.jpg",
        description: "Stage 2 Description",
      },
    ],
  },
  {
    id: 2,
    title: "Project 2",
    stages: [
      {
        img: "images/projects/pro2.jpg",
        description: "Stage 1 Description",
      },
      {
        img: "images/projects/project2_stage2.jpg",
        description: "Stage 2 Description",
      },
    ],
  },
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
    console.log(project);
    document.getElementById("project-title").textContent = project.title;
    const stagesContainer = document.getElementById("project-stages");
    project.stages.forEach((stage) => {
      const stageDiv = document.createElement("div");
      stageDiv.classList.add("col-lg-4", "col-md-6", "shuffle-item");
      stageDiv.innerHTML = `
        <div class="project-img-container">
          <a class="gallery-popup" href="${stage.img}" aria-label="project-img">
            <img class="img-fluid" src="${stage.img}" alt="project-img">
            <span class="gallery-icon"><i class="fa fa-plus"></i></span>
          </a>
          <div class="project-item-info">
            <div class="project-item-info-content">
              <p class="project-cat">${stage.description}</p>
            </div>
          </div>
        </div>
      `;
      stagesContainer.appendChild(stageDiv);
    });
  }
}

// Get the project ID from the URL and load the project details
const projectId = getProjectIdFromUrl();
loadProjectDetails(projectId);
