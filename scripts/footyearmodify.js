
/*populate the current date*/
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

/*place the last modification in the footer*/
let lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;