//header

const menuButton = document.querySelector('#menu');
const navList = document.querySelector('.navlist');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('open');
})


//footer
/*populate the current date*/
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

/*place the last modification in the footer*/
let lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;


/*import the modules*/
import { GetPrograms } from './index.js';
import { GetReviews } from './index.js';
import { getPrograms } from './programs.js';
import { createRegister } from './register.js';
import { createThanks } from './thanks.js';

/*run modules based on the html which is open*/
const path = window.location.pathname;
if (path.endsWith("programs.html")) {
    getPrograms();
} else if (path.endsWith('index.html')) {
    GetPrograms();
    GetReviews();
} else if (path.endsWith("register.html")) {
    createRegister();
} else if (path.endsWith("thanks.html")) {
    createThanks();
}



