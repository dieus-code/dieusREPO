const viewButton = document.getElementById("viewButton");


class Portfolio{
    constructor(projectName, projectDescription,projectLanguage, projectLink){
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.projectLanguage = projectLanguage;
        this.projectLink = projectLink;
    }
    runProject(){
        console.log(`Running project: ${this.projectName}`);
    }
    editProject(){

    }
}



const portfolioData = [
    ["Week 1", "Weather App", "A simple weather application", "HTML,CSS,JavaScript","I learned about APIs and how to fetch data."],
    ["Week 2", "To Do List", "A simple to-do list application", "HTML,CSS,JavaScript","I learned about local storage and parsing data."],
    ["Week 3", "Portfolio", "A simple portfolio application", "HTML,CSS,JavaScript","(●'◡'●)"]
];


const portfolio = document.createElement("div");
portfolio.id = "portfolio-container";


portfolioData.forEach(element => {

    const [week, name, description, language, experience] = element;

    
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

  
    projectCard.innerHTML = `
        <h2>Project Name: ${name}</h2>
        <p>Week: ${week}</p>
        <p>Description: ${description}</p>
        <p>Language: ${language}</p>
        <p>Experience gained: ${experience}</p>
        <button class="viewButton">View Project</button>
    `;

   
    portfolio.appendChild(projectCard);
});


document.body.appendChild(portfolio);
viewButton.addEventListener("click", () => {
  
    project.runProject();
});