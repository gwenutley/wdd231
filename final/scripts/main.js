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