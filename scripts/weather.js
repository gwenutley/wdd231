const currentTemp = document.querySelector("#current-temp");
const image = document.querySelector("#weather-icon");
const desc = document.querySelector("#description");
const caption = document.querySelector("figcaption");

const keyApi = "c4070dfb05251cdc9172c4ded57021fa"
const lat = "49.75"
const long = "6.64"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${keyApi}&units=metric`;

/*asynch function*/
async function getWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}


/*display cuerrent temp, description, and icon*/
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const image = `https://openweathermap.org/img/w/${______}.___`;
    let desc = data.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    caption.textContent = `${desc}`;
}


getWeather();