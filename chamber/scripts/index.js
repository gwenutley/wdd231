const weatherLogo = document.querySelector("#weather-logo");
const currentTemp = document.querySelector("#temp");
const desc = document.querySelector("#description");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

const today = document.querySelector("#today-temp");
const tomorrow = document.querySelector("#tomorrow-temp");
const nextDay = document.querySelector("#nextday-temp");


const keyApi = "c4070dfb05251cdc9172c4ded57021fa";
const latitude = "20.68";
const longitude = "-103.35";
const count = 3;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${keyApi}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${keyApi}&units=metric`;


/*async function to get the weather*/
async function getWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}


/*async function to get the forecast*/
async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data2 = await response.json();
            console.log(data2);
            displayForecast(data2);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function getDates(unixTime) {
    const date = new Date(unixTime * 1000);
    return date.toLocaleDateString("en-US", { weekday: "long" });
}

/*display current temp, description, and icon */
function displayResults(data) {
    currentTemp.innerHTML = `<b>${data.main.temp}&deg;C</b>`;
    desc.innerHTML = `${data.weather[0].description}`;
    high.innerHTML = `High: ${data.main.temp_max}`;
    low.innerHTML = `Low: ${data.main.temp_min}`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}`;

    /* change sunrise/sunset data to a time */
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
    sunrise.innerHTML = `Sunrise: ${sunriseTime}`;
    sunset.innerHTML = `Sunset: ${sunsetTime}`;
    
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherLogo.setAttribute('src', icon);
    weatherLogo.setAttribute('alt', data.weather[0].description);
}


getWeather();


/*display 3 day weather forecast*/
function displayForecast(data2) {
    today.innerHTML = `Today: <b>${data2.list[0].main.temp}&deg;C</b>`;
    tomorrow.innerHTML = `${getDates(data2.list[8].dt)}: <b>${data2.list[8].main.temp}&deg;C</b>`;
    nextDay.innerHTML = `${getDates(data2.list[16].dt)}: <b>${data2.list[16].main.temp}&deg;C</b>`;
}

getForecast();








/*asynch function*/
async function GetBusinesses() {
    try {
        const response = await fetch('directory.json');
        const data = await response.json();
        console.log(data);

        if (!data.businesses || !Array.isArray(data.businesses)) {
            console.error("invalid JSON file");
            return;
        }
        
        const mixData = data.businesses.sort(() => 0.5 - Math.random());
        const threeBusiness = mixData.slice(0, 3);
        
        createBusinessCard(threeBusiness);
    } catch (error) {
        console.error('Error:', error);
    }
}

GetBusinesses();

//create member cards

function createBusinessCard(businesses) {
    const container = document.querySelector(".cards");
    container.innerHTML = "";

    businesses.forEach(business => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.setAttribute("src", business.imageUrl);
        img.setAttribute("alt", "Photo of" + business.businessName);
        img.setAttribute("loading", "lazy");


        const name = document.createElement("h2");
        name.innerHTML = `${business.businessName}`;

        const address = document.createElement("p");
        address.innerHTML = `<b>Address:</b> ${business.address}`;
        address.classList.add("address");

        const phone = document.createElement("p");
        phone.innerHTML = `<b>Phone:</b> ${business.phoneNumber}`;
        phone.classList.add("phone");

        const website = document.createElement("p");
        website.innerHTML = `<b>Website:</b> ${business.website}`;
        website.classList.add("website");

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        container.appendChild(card);
    }
    )
};
