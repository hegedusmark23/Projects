let allPokemon;
let pokemons = [];
let currentPokemon;


async function init(){
    await getApi();
    }

async function getApi() {     //Fetches the API
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
    let response = await fetch(url);
    let allPokemon = await response.json();
    console.log(allPokemon['results'][10]['url']);

    await addPokemonToArray(allPokemon)
    await getPokemon(allPokemon);

}

async function addPokemonToArray(allPokemon){    //Adds the names of the Pokemon to an array
    for (let i = 0; i < allPokemon['results'].length; i++) {
        let names = allPokemon['results'][i]['name'];
        pokemons.push(names);
        
    }
}

async function getPokemon(allPokemon){                // Extracts the detaliled JSON of the Pokemons from the API
    for (let i = 0; i < 100; i++) {
        let currentPokemon = allPokemon['results'][i]['url'];
        let response = await fetch(currentPokemon);
        currentPokemon = await response.json();
        renderPokemonCards(currentPokemon,i);
   }

}



function renderPokemonCards(currentPokemon,i ) {        // Renders the Cards
    let imageSrc = currentPokemon['sprites']['other']['dream_world']['front_default'];
    let card = document.getElementById('pokedex-container');
    card.innerHTML += generateCardHtml(imageSrc, i);
    renderPokemonInfo(currentPokemon, i)
}



function generateCardHtml(imageSrc, i) {   // Generates HTML for the cards
    return /*html*/`
    <div id="pokedex${i}" class="pokedex">
        <div class="card-headline">
            <h1 id="pokemonName${i}"></h1>
            <p id="PokemonId${i}">#</p>
        </div>
           <img class="pokemonImage" src="${imageSrc}">  
        
    </div>
    `;
}


function renderPokemonInfo(currentPokemon, i) {
    document.getElementById(`pokemonName${i}`).innerHTML = currentPokemon['forms'][0]['name'];
    document.getElementById(`PokemonId${i}`).innerHTML += currentPokemon['id'];
    generateBackgroundColor(currentPokemon, i)
}

function generateBackgroundColor(currentPokemon, i){
    let type = currentPokemon['types'][0]['type']['name']
    let card = document.getElementById(`pokedex${i}`);

    if (type == 'bug') {
        card.classList.add('bug')
    }if (type == 'dark') {
        card.classList.add('dark')
    }if (type == 'dragon') {
        card.classList.add('dragon')
    }if (type == 'electric') {
        card.classList.add('electric')
    }if (type == 'fairy') {
        card.classList.add('fairy')
    }if (type == 'fire') {
        card.classList.add('fire')
    }if (type == 'fighting') {
        card.classList.add('fighting')
    }if (type == 'flying') {
        card.classList.add('flying')
    }if (type == 'ghost') {
        card.classList.add('ghost')
    }if (type == 'grass') {
        card.classList.add('grass')
    }if (type == 'ground') {
        card.classList.add('ground')
    }if (type == 'ice') {
        card.classList.add('ice')
    }if (type == 'normal') {
        card.classList.add('normal')
    }if (type == 'poison') {
        card.classList.add('poison')
    }if (type == 'psychic') {
        card.classList.add('psychic')
    }if (type == 'rock') {
        card.classList.add('rock')
    }if (type == 'steel') {
        card.classList.add('steel')
    }if (type == 'water') {
        card.classList.add('water')
    }
}

/*
function generateOpenedCardHtml(){
    return `
    <div class="pokedex">
        <div class="card-headline">
            <h1 id="pokemonName"></h1>
            <p id="PokemonId">#</p>
        </div>
        <div class="info-container" id="info-container">
           <img class="pokemonImage" src="${imageSrc}">  
        </div>
        
    </div>
    `;
}
*/