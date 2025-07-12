const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}


const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = createElement('section');
        let fullName = createElement('h2');
        let portrait = createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastName}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${ prophet.name } ${ prophet.lastName }`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        
        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);


    });
}

getData();