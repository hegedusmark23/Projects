

function generateCardHtml(imageSrc, i) {
    return /*html*/`
    <div onclick="openCardOnClick(${i})" id="pokedex${i}" class="pokedex">
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
    <img onclick="previousPokemon(${i})" class="swap-card-icon" src="./img/left-arrow.png" alt="">
    <div class="openedCard">
        <div class="info-container" id="info-container">
            <div class="image-headline">
                <img class="pokemonOpenedImage" src="${imageSrc}">
                <img class="close-element swap-card-icon" onclick="closeOpenedCard()" src="./img/circle-x.png" alt="">
            </div>
            <div class="card-opened-headline">
                <h1 class="opened-name" id="pokemonOpenedName${i}"></h1>
                <p id="PokemonOpenedId${i}">#</p>
            </div>
            <p class="description">About</p>
            <div class="line"></div>
            <div id="opened-card-content" class="opened-card-content"></div>
            <p class="description">Stats</p>
            <div class="line"></div>
            <div id="opened-chart-content" class="opened-card-content"></div>
        </div>
    </div>
    <img onclick="nextPokemon(${i})" class="swap-card-icon" src="./img/right-arrow.png" alt="">
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



function generatechartHtml(i) {
    return `
    <div class="chart-div">
        <canvas width="340" id="statsChart${i}"></canvas>
      </div>
    `;
}

