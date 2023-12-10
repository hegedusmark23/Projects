let allPokemon;
let pokemons = [];


async function init(){
    await getPokemon();
}

async function getPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
    let response = await fetch(url);
    let allPokemon = await response.json();
    console.log(allPokemon);

    await addPokemonToArray(allPokemon);

}

async function addPokemonToArray(allPokemon){
    for (let i = 0; i < allPokemon['results'].length; i++) {
        let names = allPokemon['results'][i]['name'];
        pokemons.push(names);
        
    }
}



function renderPokemonCards(currentPokemon) {
    let imageSrc = currentPokemon['sprites']['other']['dream_world']['front_default'];
    let card = document.getElementById('pokedex-container');
    card.innerHTML = generateCardHtml(imageSrc);
}



function generateCardHtml(imageSrc) {
    return /*html*/`
    <div class="pokedex">
        <div class="card-headline">
            <h1 id="pokemonName"></h1>
            <p id="PokemonId">#</p>
        </div>
           <img class="pokemonImage" src="${imageSrc}">  
        
    </div>
    `;
}

function renderPokemonInfo(currentPokemon) {
    document.getElementById('pokemonName').innerHTML = currentPokemon['forms'][0]['name'];
    document.getElementById('PokemonId').innerHTML += currentPokemon['id'];
}


function generateOpenedCardHtml(){
    return /*html*/`
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