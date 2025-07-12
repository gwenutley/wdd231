/*asynch function*/
async function GetBusinesses() {
    try {
        const response = await fetch('directory.json');
        const data = await response.json();
        console.log(data);

        createBusinessCard(data.businesses);
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


//create list/grid views of the cards
const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");
const display = document.querySelector(".cards");

display.classList.add("grid-view");

gridButton.addEventListener("click", () => {
    display.classList.remove("list-view");
    display.classList.add("grid-view");
});

listButton.addEventListener("click", () => {
    display.classList.add("list-view");
    display.classList.remove("grid-view");
});

