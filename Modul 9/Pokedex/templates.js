

function generateCardHtml(imageSrc, i) {
    return /*html*/`
    <div onclick="openCard(event, ${i})" id="pokedex${i}" class="pokedex">
        <div class="card-headline">
            <div class="headline">
                <h1 id="pokemonName${i}"></h1>
                <p id="PokemonId${i}">#</p>
            </div>
            <b class="pokemon-type" id="PokemonType${i}"></b>
            
        </div>
        
        <img class="pokemonImage" src="${imageSrc}">  
    </div>
    `;
}

function generateOpenedCardHtml(imageSrc, currentPokemon, i) {
    return /*html*/`
    <div  class="openedCard" >
        
        <div class="info-container" id="info-container">
            <img class="pokemonOpenedImage" src="${imageSrc}">
            <div class="card-opened-headline">
                <h1 id="pokemonOpenedName${i}"></h1>
                <p id="PokemonOpenedId${i}">#</p>
            </div>
            <div class="opened-card-links">
                <a>About</a>
                <a onmouseover="showStats()">Stats</a>
            </div>
            <div class="line"></div>
            <div id="opened-card-content" class="opened-card-content"></div>
        </div>
    </div>
    `;
}

function generateAboutHtml(i) {
    return /*html*/`
    <div class="about-container">
        <div class="about-description">
            <b>Weight:</b>
            <b>Height:</b>
            <b>Abilities:</b>
        </div>   
        <div class="about-data"> 
            <b id="weight${i}"></b>
            <b id="height${i}"></b>
            <b id="abilities${i}"></b>
        </div>
    </div>   
    `;
}



function generatechartHtml(){
    return `
    <div>
        <canvas width="500" id="statsChart"></canvas>
      </div>
    `;
}
