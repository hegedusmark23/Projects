
let characters = []
let transformations = []

async function init() {
    await getApi();
    generateCharacters();
}


async function getApi() {
    await fetchCharacters();
    await fetchTransformations()
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
    input = input.toLowerCase();
    content.innerHTML = '';

     for (let i = 0; i < characters[0]['items'].length; i++) {
         let character = characters[0]['items'][i]['name'];
         if (character.toLowerCase().includes(input)) {
             content.innerHTML += generateCharacterHTML(i);
         }
     }
   }

   function submit(){
    const myForm = document.getElementById('form')

    myForm.addEventListener('submit', (event) => {
      // this will prevent page from refreshing
      event.preventDefault() 
    
      // your other code
    })
}