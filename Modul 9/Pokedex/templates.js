

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

function generateOpenedCardHtml(imageSrc, currentPokemon, i, data) {
    return /*html*/`
    <div  class="openedCard" >
        
        <div class="info-container" id="info-container">
            <img class="pokemonOpenedImage" src="${imageSrc}">
            <div class="card-opened-headline">
                <h1 id="pokemonOpenedName${i}"></h1>
                <p id="PokemonOpenedId${i}">#</p>
            </div>
            <div class="opened-card-links">
                <a onmouseover="showAbout(${i})">About</a>
                <a onmouseover="showStats(${i})">Stats</a>
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



function generatechartHtml(i){
    return `
    <div>
        <canvas width="340" id="statsChart${i}"></canvas>
      </div>
    `;
}

