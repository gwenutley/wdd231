let allPrograms = [];

/*collect data with async function*/
export async function getPrograms() {
    try {
        const response = await fetch("data/programs.json");
        const data = await response.json();
        console.log(data);

        allPrograms = data.programs;
        /*show all programs*/
        createProgramCards(allPrograms);
        /*show programs based on user choice*/
        filterPrograms();

    } catch (error) {
        console.error("Error:", error);
    }
}

/*function to create cards for each training program*/
function createProgramCards(programs) {
    const container = document.querySelector("#programs");
    container.innerHTML = ""

    programs.forEach(program => {
        const card = document.createElement("div");
        card.className = "card";


        const name = document.createElement("h3");
        name.innerHTML = `${program.name}`;

        const img = document.createElement("img");
        img.setAttribute("src", program.image);
        img.setAttribute("alt", "Photo of" + program.name);
        img.setAttribute("loading", "lazy");

        const mainPurpose = document.createElement("p");
        mainPurpose.innerHTML = `${program.purpose}`;
        mainPurpose.classList.add("purpose");


        const openButton = document.createElement("button");
        openButton.textContent = program.button;
        openButton.id = `button-${program.num}`;

        /*create dialog box and add elements to it*/
        const dialog = document.createElement("dialog");
        const title = document.createElement("h4");
        title.innerHTML = `${program.name}`;

        const purpose = document.createElement("p");
        purpose.innerHTML = `${program.purpose}`;

        const moreDescription = document.createElement("p");
        moreDescription.innerHTML = `Training description: ${program.description}`;

        const priceDescription = document.createElement("p");
        priceDescription.innerHTML = `Pricing: ${program.costDescription}`;

        const duration = document.createElement("p");
        duration.innerHTML = `Training duration: ${program.duration} minutes`;

        const lowCost = document.createElement("p");
        lowCost.innerHTML = `Single training: $${program.oneCost}`;

        const highCost = document.createElement("p");
        highCost.innerHTML = `Full month of training: $${program.monthCost}`;

        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.classList.add("close")

        /*append the dialog content*/
        dialog.appendChild(title);
        dialog.appendChild(purpose);
        dialog.appendChild(moreDescription);
        dialog.appendChild(priceDescription);
        dialog.appendChild(duration);
        dialog.appendChild(lowCost);
        dialog.appendChild(highCost);
        dialog.appendChild(closeButton);

        /*open and close the modal dialog box*/
        openButton.addEventListener("click", () => {
            dialog.showModal();
        });
        closeButton.addEventListener("click", () => {
            dialog.close();
        });

        /*append items to the program cards*/
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(mainPurpose);
        card.appendChild(openButton);
        card.appendChild(dialog);

        container.appendChild(card);
    })
}

/*make a filter for cards based on age groups*/
function filterAges(min, max) {
    const filtered = allPrograms.filter(program =>
        program.ages.some(age => age >= min && age <= max)
    );
    createProgramCards(filtered);
}

/*use the filter to only display those in the age group selected*/
function filterPrograms() {
    document.querySelector("#age1").addEventListener("click", () => {
        filterAges(10, 12);
    });

    document.querySelector("#age2").addEventListener("click", () => {
        filterAges(13, 17);
    });

    document.querySelector("#age3").addEventListener("click", () => {
        filterAges(18, 20);
    })


    const showAll = document.getElementById("all");
    if (showAll) {
        showAll.addEventListener("click", () => {
            createProgramCards(allPrograms);
        })
    }
};


