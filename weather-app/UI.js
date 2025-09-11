
const card = document.getElementById("card");

const loader = document.getElementById("loader");
function weatherDisplay(data){

    card.innerHTML = "";

    // Create elements
    const stateName = document.createElement("h2");
    stateName.textContent = data.name;

    const temp = document.createElement("p");
    temp.textContent = `Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C`;

    const desc = document.createElement("p");
    desc.textContent = `Description: ${data.weather[0].description}`;
    const iconElem = document.createElement("img");
    iconElem.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    iconElem.alt = data.weather[0].description;

    card.appendChild(stateName);
    card.appendChild(temp);
    card.appendChild(desc);
    card.appendChild(iconElem);
}

function errorMessage() {
   
        card.innerHTML = ""; // Clear previous content
        
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Error fetching weather data. Please check city name and try again.";
    card.appendChild(errorMessage);
 
}
loader.show = () => {
   
    loader.style.display = "block";
   
}
loader.hide = () => {
    loader.style.display = "none";
   
   
};

export { weatherDisplay,errorMessage,card,loader };
