let allPokemon = [];
let pokemons = [];
let currentPokemon;
let loadedPokemons = 12;

async function init() {
    await getApi();
}

async function getApi() {     //Fetches the API.
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=1000';
    let response = await fetch(url);
    let allPokemon = await response.json();
    await addPokemonToArray(allPokemon)
    await getPokemon(allPokemon);
    scrollToBottom();
}



async function addPokemonToArray(allPokemon) {    //Adds the names of the Pokemon to an array.
    for (let i = 0; i < allPokemon['results'].length; i++) {
        let names = allPokemon['results'][i]['name'];
        pokemons.push(names);

    }
}

function loadMorePokemons() {
    let listOfPokemon = document.getElementById('pokedex-container');
    loadedPokemons += 7;
    listOfPokemon.innerHTML = '';
    getApi();

}

function scrollToBottom() {
    const element = document.getElementById("bottom");
    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({ block: "end" });
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

async function getPokemon(allPokemon) {                // Extracts the detaliled JSON of the Pokemons from the API.
    for (let i = 0; i < loadedPokemons; i++) {
        let currentPokemonUrl = allPokemon['results'][i]['url'];
        let response = await fetch(currentPokemonUrl);
        currentPokemon = await response.json();
        renderPokemonCards(currentPokemon, i);
    }
}

function renderPokemonInfo(currentPokemon, i) {   // Adds the details to the cards in the unopened form.
    let pokemonName = pokemons[i]
    document.getElementById(`pokemonName${i}`).innerHTML = pokemonName[0].toUpperCase() + pokemonName.substring(1);
    document.getElementById(`PokemonId${i}`).innerHTML += currentPokemon['id'];
    document.getElementById(`PokemonType${i}`).innerHTML += currentPokemon['types'][0]['type']['name'] + ' type';
    generateBackgroundColor(currentPokemon, i)
}

function renderPokemonCards(currentPokemon, i) {        // Renders the Cards.
    let imageSrc = currentPokemon['sprites']['other']['dream_world']['front_default'];
    let card = document.getElementById('pokedex-container');
    card.innerHTML += generateCardHtml(imageSrc, i);
    renderPokemonInfo(currentPokemon, i);
}

function searchPokemon(event) {
    let search = document.getElementById('input').value;
    search = search.toLowerCase();

    if ((event.key === "Enter" || event.type === "click") && search.trim() !== '') {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            if (pokemon.includes(search)) {
                searchPokemonData(pokemon, i);
            }
        }
    }
    document.getElementById('load-more-button').classList.add("d-none");
}

async function searchPokemonData(pokemon, i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    let listOfPokemon = document.getElementById('pokedex-container');
    listOfPokemon.innerHTML = '';
    document.getElementById('input').value = '';
    renderPokemonCards(currentPokemon, i);
    document.getElementById('back-btn').classList.remove('d-none');
}



function goBack() {
    let listOfPokemon = document.getElementById('pokedex-container');
    let button = document.getElementById('load-more-button');
    listOfPokemon.innerHTML = '';
    init();
    document.getElementById('back-btn').classList.add('d-none');
    document.getElementById('load-more-button').classList.remove('d-none');
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


function openCardOnClick(i) {
    displayOpenedCard(i);
}

function displayOpenedCard(i) {
    let clickedPokemon = pokemons[i];
    let url = `https://pokeapi.co/api/v2/pokemon/${clickedPokemon}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let imageSrc = data.sprites.other.dream_world.front_default;
            let openedCardHtml = generateOpenedCardHtml(imageSrc, currentPokemon, i, data);
            let openedCardContainer = document.getElementById('opened-card');
            openedCardContainer.innerHTML = openedCardHtml;
            openedCardContainer.style.display = 'flex';
            document.getElementById(`pokemonOpenedName${i}`).innerHTML = clickedPokemon[0].toUpperCase() + clickedPokemon.substring(1);
            document.getElementById(`PokemonOpenedId${i}`).innerHTML += data['id'];
            showAbout(data, i);
            showStats(i);
        });
}

function closeOpenedCard() {
    let openedCardContainer = document.getElementById('opened-card');
    openedCardContainer.style.display = 'none';
}

function showAbout(data, i) {
    let about = document.getElementById('opened-card-content');
    about.innerHTML = generateAboutHtml(i);
    document.getElementById(`weight${i}`).innerHTML = data['weight'] + ' lbs';
    document.getElementById(`height${i}`).innerHTML = data['height'] + '0 cm';
    for (let j = 0; j < 2; j++) {
        let ability = data['abilities'][j]['ability']['name']
        document.getElementById(`abilities${i}`).innerHTML += `<li>${ability}</li>`;
    }
}

async function showStats(index) {
    let stats = document.getElementById('opened-chart-content');
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemons[index]}/`;
    let response = await fetch(url);
    let pokemon = await response.json();
    allPokemon[index] = pokemon;
    stats.innerHTML = generatechartHtml(index);
    renderChart(index);
}

async function renderChartsForAllPokemons() {
    for (let i = 0; i < pokemons.length; i++) {
        await showStats(i);
    }
}

function previousPokemon(i) {
    i--;
    openCardOnClick(i);
}

function nextPokemon(i) {
    i++;
    openCardOnClick(i);
}

