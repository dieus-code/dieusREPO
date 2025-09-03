class Portfolio {
  constructor(projectName,projectWeek, projectDescription, projectLanguage,projectExperience, projectLink) {
    this.projectName = projectName;
    this.projectWeek = projectWeek;
    this.projectDescription = projectDescription;
    this.projectLanguage = projectLanguage;
    this.projectExperience = projectExperience;
    this.projectLink = projectLink;
  }

  //  render the project card
  renderCard() {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
      <h2>Project Name: ${this.projectName}</h2>
      <p>Week: ${this.projectWeek}</p>
      <p>Description: ${this.projectDescription}</p>
      <p>Language: ${this.projectLanguage}</p>
      <p>Experience: ${this.projectExperience}</p><br>
      <a href="${this.projectLink}" target="_blank" class="viewButton">View Project</a>
    `;
    return projectCard;
  }
}

function runProject(e) {
  if (e.target.classList.contains("viewButton")) {//target the class = viewButton in the classlist
    const projectLink = e.target.href;
   
  }
}

const portfolioData = [
  [ "Weather App","Week 1", "A simple weather application", "HTML, CSS, JavaScript", "I learned about APIs and how to fetch data.", "./weather-app/index.html"],
  [ "To Do List","Week 2", "A simple to-do list application", "HTML, CSS, JavaScript", "I learned about local storage and parsing data.", "./to-do-list/js.html"],
  [ "Portfolio","Week 3", "A simple portfolio application", "HTML, CSS, JavaScript", "(●'◡'●)", "./portfolio.html"]
];   

const portfolioContainer = document.getElementById("portfolio-container"); 

portfolioData.forEach(element => {// for destructuring the array to get project details
  const [name,  week, description, language,experience , projectLink] = element;
  const project = new Portfolio(name, week, description, language,experience, projectLink);
  portfolioContainer.appendChild(project.renderCard());
});