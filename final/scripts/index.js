/*asynch function for the programs section*/
async function GetPrograms() {
    try {
        const response = await fetch('data/programs.json');
        const data = await response.json();
        console.log(data);

        if (!data.programs || !Array.isArray(data.programs)) {
            console.error("invalid JSON file");
            return;
        }

        const mixData = data.programs.sort(() => 0.5 - Math.random());
        const fourPrograms = mixData.slice(0, 4);

        createProgramsCard(fourPrograms);
    } catch (error) {
        console.error('Error:', error);
    }
}

GetPrograms();

//create 3 random member cards 

function createProgramsCard(programs) {
    const container = document.querySelector(".programs");
    container.innerHTML = "";

    programs.forEach(program => {
        const card = document.createElement("div");
        card.className = "card";

        const name = document.createElement("h3");
        name.innerHTML = `${program.name}`;

        const img = document.createElement("img");
        img.setAttribute("src", program.image);
        img.setAttribute("alt", "Photo of" + program.name);
        img.setAttribute("loading", "lazy");

        const purpose = document.createElement("p");
        purpose.innerHTML = `${program.purpose}`;
        purpose.classList.add("purpose");

        const description = document.createElement("p");
        description.innerHTML = `${program.description}`;
        description.classList.add("description");

        /*createa a link to the programs page for more info*/
        const span = document.createElement("span");
        const link = document.createElement("a");
        link.href = "programs.html";
        link.classList.add("program-link");
        link.innerHTML = "More Information";
        span.appendChild(link);

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(purpose);
        card.appendChild(description);
        card.appendChild(span);

        container.appendChild(card);
    }
    )
};
