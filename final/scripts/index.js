/*asynch function for the programs section*/
export async function GetPrograms() {
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

//create 3 random member cards 

function createProgramsCard(programs) {
    const container = document.querySelector(".programs");
    container.innerHTML = "";

    programs.forEach(program => {
        const card = document.createElement("div");
        card.className = "card";
        card.id = `card-${program.num}`;

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

/*async function to bring in reviews data*/
export async function GetReviews() {
    try {
        const response2 = await fetch('data/reviews.json');
        const data2 = await response2.json();
        console.log(data2);

        if (!data2.reviews || !Array.isArray(data2.reviews)) {
            console.error("invalid JSON file");
            return;
        }

        const mixData2 = data2.reviews.sort(() => 0.5 - Math.random());
        const fiveReviews = mixData2.slice(0, 5);

        createReviews(fiveReviews);
    } catch (error) {
        console.error('Error:', error);
    }
}

function createReviews(reviews) {
    const contain = document.querySelector(".reviews");
    contain.innerHTML = "";

    reviews.forEach(review => {
        const box = document.createElement("div");
        box.className = "box";

        const name1 = document.createElement("h4");
        name1.innerHTML = `${review.name}`;

        const star = document.createElement("p");
        star.innerHTML = `${review.stars}`;
        star.classList.add("star");

        const comment= document.createElement("p");
        comment.innerHTML = `${review.comment}`;
        comment.classList.add("comment");

        box.appendChild(name1);
        box.appendChild(star);
        box.appendChild(comment);

        contain.appendChild(box);

    })
}
