import { errorMessage,card,loader,weatherDisplay } from "./UI.js";
import { apiKey,apiUrl} from "./utils.js";
import {  findInput } from "./input.js";
const getWeatherButton = document.getElementById("getWeather");
const stateInput = document.getElementById("searchbox");
const searchBox = document.getElementById('searchbox');
const results = document.getElementById('results');
let typingTimer;


const attachListeners = () => {
    const buttons = results.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
           stateInput.value = e.target.textContent.trim();
            results.innerHTML = ""; 
        });
    });
};


searchBox.addEventListener("input", (e) => {
   
    clearTimeout(typingTimer);
    if (stateInput.value.trim() === '') {
        results.innerHTML = ""; 
        return;
    };
    typingTimer = setTimeout(() => {
        const matches = findInput(stateInput);
        
        if (matches.length > 0) {
            results.innerHTML = matches.map(item => `<button class="state-button">${item.state}</button>`).join("");
            attachListeners();
           

        } else {
            results.innerHTML = "<li>No matching state found</li>";
        }
    }, 500); 
});
getWeatherButton.addEventListener("click", async (event) => {
    event.preventDefault();
    
    loader.show();

    if (!stateInput.value) {
        errorMessage();
        loader.hide();
        return;
    }

    try {
        const state = stateInput.value.trim();
        const [response] = await Promise.all([fetch(`${apiUrl}?q=${state},NG&appid=${apiKey}`)
             , new Promise(resolve => setTimeout(resolve, 1500))
        ]);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        weatherDisplay(data);
        
    } catch (error) {
        errorMessage();
        console.error("Error fetching weather data:", error);

    } finally {
        loader.hide();
    }
});
