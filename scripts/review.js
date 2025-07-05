// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');

// Varibles for activity use
let citynames = ["New York", "Sacramento", "Cleveland", "South Bend", "Tampa Bay", "Corpus Christi"];
let volume = 409;

function getCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

// Question #1
today1.innerHTML = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
});

// Question #2
today2.innerHTML = `<strong>Volume</strong>: ${volume} liters`;

// Question #3
let quantity = document.querySelector("#q").value;
// Question #4
document.querySelector("aside").innerHTML = "Welcome to <em>our</em> neighborhood!";

// Question #5
const temp = document.querySelector("#temp");
temp.innerHTML = getCelcius(33);
// Question #6
const divs = querySelectorAll("div");
// Question #7
let filterC = citynames.filter(cityname => cityname.startsWith("C"));
