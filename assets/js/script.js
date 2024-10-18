// Form Submission
function sendToMail(event) {
  event.preventDefault();
  const inputName = document.getElementById("inputName").value;
  const inputEmail = document.getElementById("inputEmail").value;
  const inputPhone = document.getElementById("inputPhone").value;
  const inputTechStack = document.getElementById("inputTechstack").value;
  const inputMessage = document.getElementById("inputMessage").value;

  const a = document.createElement("a");
  a.href = `mailto:edihardiansyahh@gmail.com?subject=${inputTechStack}&body=${inputMessage}`;
  a.click();

  console.log(a);
}

// Add Project Page
const projects = [];
let editIndex = -1;

// Get Content
function addProject(event) {
  event.preventDefault();

  const inpTitle = document.getElementById("inp-project-name").value;
  const inpDescription = document.getElementById(
    "inp-project-description"
  ).value;
  const inpFile = document.getElementById("inp-file-content").files;

  //   Get Date
  const startDate = new Date(document.getElementById("start-date").value);
  const endDate = new Date(document.getElementById("end-date").value);

  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  //   Get Image
  const image = URL.createObjectURL(inpFile[0]);

  // get checkbox
  const technologies = [];
  if (document.getElementById("nodejs").checked) technologies.push("NodeJS");
  if (document.getElementById("reactjs").checked) technologies.push("ReactJS");
  if (document.getElementById("nextjs").checked) technologies.push("NextJS");
  if (document.getElementById("typescript").checked)
    technologies.push("TypeScript");
  if (document.getElementById("vue").checked) technologies.push("Vue");
  if (document.getElementById("angular").checked) technologies.push("Angular");

  const project = {
    title: inpTitle,
    description: inpDescription,
    file: image,
    technologies: technologies,
    months: months,
  };

  if (editIndex >= 0) {
    projects[editIndex] = project;
    editIndex = -1;
  } else {
    projects.unshift(project);
  }

  // projects.unshift(project);
  console.log(projects);
  renderProject();
}

// Render Project
function renderProject() {
  let html = "";

  for (let i = 0; i < projects.length; i++) {
    html += `<div class="project">
          <div class="img-project">
            <img class="hero" src="${projects[i].file}" alt="${projects[i].title}" />
          </div>
          <div class="desc-project">
            <h2>${projects[i].title}</h2>
            <p>Duration: ${projects[i].months} months</p>
            <p>
              ${projects[i].description}
            </p>
            <div class="icon-stack">
              ${projects[i].technologies}
            </div>
            <div class="action">
              <button class="btn-edit" onclick="editProject(${i})">Edit</button>
              <button class="btn-delete" onclick="deleteProject(${i})">Delete</button>
            </div>
          </div>
        </div>`;
  }

  document.getElementById("my-project").innerHTML = html;
}

// Delete Project
function deleteProject(i) {
  projects.splice(i, 1);
  renderProject();
}

// Edit Project
function editProject(i) {
  const project = projects[i];
  editIndex = i;

  document.getElementById("inp-project-name").value = project.title;
  document.getElementById("inp-project-description").value =
    project.description;

  inpTitle = projects[i].title.includes();
  inpDescription = projects[i].description.includes();

  // Set checkbox
  document.getElementById("nodejs").checked =
    project.technologies.includes("NodeJS");
  document.getElementById("reactjs").checked =
    project.technologies.includes("ReactJS");
  document.getElementById("nextjs").checked =
    project.technologies.includes("NextJS");
  document.getElementById("typescript").checked =
    project.technologies.includes("TypeScript");
  document.getElementById("vue").checked = project.technologies.includes("Vue");
  document.getElementById("angular").checked =
    project.technologies.includes("Angular");
}
