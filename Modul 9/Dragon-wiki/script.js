
let characters = []
let transformations = []

async function init() {
    await getApi();
    generateCharacters();
}


async function getApi() {
    await fetchCharacters();
    await fetchTransformations();
}


async function fetchCharacters() {
    let url = 'https://dragonball-api.com/api/characters?limit=100';
    let response = await fetch(url);
    let responseAsJson = await response.json();
    characters.push(responseAsJson);
}


async function fetchTransformations() {
    let url = 'https://dragonball-api.com/api/transformations';
    let response = await fetch(url);
    let responseAsJson = await response.json();
    transformations.push(responseAsJson);
}

function generateCharacters() {
    let content = document.getElementById('content');
    for (let i = 0; i < characters[0]['items'].length; i++) {
        content.innerHTML += generateCharacterHTML(i);
    }
}

function search() {
    let input = document.getElementById('search').value;
    let content = document.getElementById('content');
    let button = document.getElementById('btn');
    input = input.toLowerCase();
    content.innerHTML = '';
    for (let i = 0; i < characters[0]['items'].length; i++) {
        let character = characters[0]['items'][i]['name'];
        if (character.toLowerCase().includes(input)) {
            content.innerHTML += generateCharacterHTML(i);
            button.classList.remove('d-none');
        }
    }
}

function cancelSearch() {
    let button = document.getElementById('btn');
    document.getElementById('content').innerHTML = '';
    generateCharacters();
    button.classList.add('d-none');
    document.getElementById('search').value = '';
}

function openCard(i){
    let container = document.getElementById('opened-card-container');
    container.innerHTML = generateOpenedCharacterHTML(i);
    document.getElementById('opened-card-container').classList.remove('d-none');
    document.getElementById('opened-card-container').classList.add('d-flex');
}

function closeCard(){
    document.getElementById('opened-card-container').classList.remove('d-flex');
    document.getElementById('opened-card-container').classList.add('d-none');
}

function showStats(i){
    let cardContent = document.getElementById('opened-card-content');
    cardContent.innerHTML = generateCharStatsHTML(i); 
}

function showTransformations(i){
    let cardContent = document.getElementById('opened-card-content');
    let charName = characters[0]['items'][i]['name'];
    let transformName = transformations[0][i]['name'];
    if (charName == transformName.split(' ')[0]) {
        cardContent.innerHTML = generateTransformationsHTML(i);
    } else {
        cardContent.innerHTML = `<h1>No transformation.</h1>`
    }
}