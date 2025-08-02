/*asynch function*/
async function GetInterests() {
    try {
        const response = await fetch('data/discover.json');
        const data = await response.json();
        console.log(data);

        createInterestsCard(data.interests);
    } catch (error) {
        console.error('Error:', error);
    }
}

GetInterests();

//create member cards

function createInterestsCard(interests) {
    const container = document.querySelector(".cards");
    container.innerHTML = "";

    interests.forEach(interest => {
        const card = document.createElement("div");
        card.className = "card";

        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.setAttribute("src", interest.image);
        img.setAttribute("alt", "Photo of" + interest.title);
        img.setAttribute("loading", "lazy");

        const title = document.createElement("h2");
        title.innerHTML = `${interest.title}`;

        const description = document.createElement("p");
        description.innerHTML = `${interest.description}`;
        description.classList.add("description");

        const address = document.createElement("address");
        address.innerHTML = `<em>${interest.address}</em>`;
        address.classList.add("address");

        const openButton = document.createElement("button");
        openButton.textContent = interest.button;
        openButton.classList.add("button");
        

        figure.appendChild(img);
        card.appendChild(figure);
        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(openButton);

        container.appendChild(card);
    }
    )
};



/*date*/

const lastVisitSaved = "lastVisitTimeStamp";
const now = Date.now();
const lastVisit = localStorage.getItem(lastVisitSaved);
const dateElement = document.getElementById("date");

if (!lastVisit) {
    dateElement.textContent = "Welcome! Let us know if you have any questions.";

} else {
    const timeSinceLastVisit = now - parseInt(lastVisit, 10);
    const hours = Math.floor(timeSinceLastVisit / 3600000);

    if (hours < 24) {
        dateElement.textContent = "Back so soon! Awesome!";
    }
    else if (hours >= 24) {
        const day = Math.floor(hours / 24);
        if (day === 1)
            dateElement.textContent = "You last visited one day ago.";
        else {
            dateElement.textContent = `You last visited ${day} days ago.`;
        }
    }
}

localStorage.setItem(lastVisitSaved, now.toString());


