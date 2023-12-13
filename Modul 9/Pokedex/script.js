let allPokemon;
let pokemons = [];
let currentPokemon;


async function init() {
    await getApi();
}

async function getApi() {     //Fetches the API.
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    let response = await fetch(url);
    let allPokemon = await response.json();
    console.log(allPokemon);

    await addPokemonToArray(allPokemon)
    await getPokemon(allPokemon);

}



async function addPokemonToArray(allPokemon) {    //Adds the names of the Pokemon to an array.
    for (let i = 0; i < allPokemon['results'].length; i++) {
        let names = allPokemon['results'][i]['name'];
        pokemons.push(names);

    }
}

async function getPokemon(allPokemon) {                // Extracts the detaliled JSON of the Pokemons from the API.
    for (let i = 0; i < 151; i++) {
        let currentPokemonUrl = allPokemon['results'][i]['url'];
        let response = await fetch(currentPokemonUrl);
        currentPokemon = await response.json();
        renderPokemonCards(currentPokemon, i);
    }

}

function generateCardHtml(imageSrc, i) {   // Generates HTML for the cards.
    return /*html*/`
    <div onclick="openCard(event)" id="pokedex${i}" class="pokedex">
        <div class="card-headline">
            <h1 id="pokemonName${i}"></h1>
            <p id="PokemonId${i}">#</p>
        </div>
           <img class="pokemonImage" src="${imageSrc}">  
        
    </div>
    `;
}

function renderPokemonInfo(currentPokemon, i) {   // Adds the details to the cards in the unopened form.
    let pokemonName = pokemons[i]
    document.getElementById(`pokemonName${i}`).innerHTML = pokemonName[0].toUpperCase() + pokemonName.substring(1);
    document.getElementById(`PokemonId${i}`).innerHTML += currentPokemon['id'];
    generateBackgroundColor(currentPokemon, i)
}

function renderPokemonCards(currentPokemon, i) {        // Renders the Cards.
    let imageSrc = currentPokemon['sprites']['other']['dream_world']['front_default'];
    let card = document.getElementById('pokedex-container');
    card.innerHTML += generateCardHtml(imageSrc, i);
    renderPokemonInfo(currentPokemon, i);
}

function searchPokemon() {
    let search = document.getElementById('input').value;
    search = search.toLowerCase();
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        if (pokemon.includes(search)) {
            searchPokemonData(pokemon, i);
        }
    }
}

async function searchPokemonData(pokemon, i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    let listOfPokemon = document.getElementById('pokedex-container');
    listOfPokemon.innerHTML = '';
    renderPokemonCards(currentPokemon, i);
    document.getElementById('back-btn').classList.remove('d-none');
}



function goBack() {
    let listOfPokemon = document.getElementById('pokedex-container');
    listOfPokemon.innerHTML = '';
    init();
    document.getElementById('back-btn').classList.add('d-none');
}




function generateBackgroundColor(currentPokemon, i) {         // Sorts out the background-color by Pokemon type.
    let type = currentPokemon['types'][0]['type']['name']
    let card = document.getElementById(`pokedex${i}`);

    if (type == 'bug') {
        card.classList.add('bug')
    } if (type == 'dark') {
        card.classList.add('dark')
    } if (type == 'dragon') {
        card.classList.add('dragon')
    } if (type == 'electric') {
        card.classList.add('electric')
    } if (type == 'fairy') {
        card.classList.add('fairy')
    } if (type == 'fire') {
        card.classList.add('fire')
    } if (type == 'fighting') {
        card.classList.add('fighting')
    } if (type == 'flying') {
        card.classList.add('flying')
    } if (type == 'ghost') {
        card.classList.add('ghost')
    } if (type == 'grass') {
        card.classList.add('grass')
    } if (type == 'ground') {
        card.classList.add('ground')
    } if (type == 'ice') {
        card.classList.add('ice')
    } if (type == 'normal') {
        card.classList.add('normal')
    } if (type == 'poison') {
        card.classList.add('poison')
    } if (type == 'psychic') {
        card.classList.add('psychic')
    } if (type == 'rock') {
        card.classList.add('rock')
    } if (type == 'steel') {
        card.classList.add('steel')
    } if (type == 'water') {
        card.classList.add('water')
    }
}

function openCard(event) {
    let cardId = event.currentTarget.id;
    let index = cardId.replace('pokedex', '');
    index = parseInt(index, 10);
    displayOpenedCard(index);
}

function displayOpenedCard(index) {
    let clickedPokemon = pokemons[index];
    let url = `https://pokeapi.co/api/v2/pokemon/${clickedPokemon}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let imageSrc = data.sprites.other.dream_world.front_default;
            let openedCardHtml = generateOpenedCardHtml(imageSrc, data);

            // Apply the opened card HTML to the 'opened-card' div
            let openedCardContainer = document.getElementById('opened-card');
            openedCardContainer.innerHTML = openedCardHtml;

            // Apply the background color to the opened card
            generateBackgroundColor(data, 0);

            // Display the opened card
            openedCardContainer.style.display = 'flex'; // or 'block' based on your container structure
        })
        .catch(error => console.error('Error fetching Pokemon data:', error));
}

function closeOpenedCard() {
    let openedCardContainer = document.getElementById('opened-card');
    openedCardContainer.style.display = 'none';
}


document.addEventListener('click', function (event) {
    if (document.querySelector('.opened-card')) {
        // If the opened card is currently visible
        if (!event.target.closest('.opened-card')) {
            // If the click is outside of the opened card
            closeOpenedCard();
        }
    }
});


function generateOpenedCardHtml(imageSrc, currentPokemon) {
    return `
    <div class="openedCard">
        <div class="card-headline">
            <h1 id="pokemonName">${currentPokemon.name}</h1>
            <p id="PokemonId">#${currentPokemon.id}</p>
        </div>
        <div class="info-container" id="info-container">
            <img class="pokemonImage" src="${imageSrc}">  
        </div>
    </div>
    `;
}