let joke = [];

async function init(){
    await getApi();
    generateJoke();
}

async function getApi(){
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cb8f829953msh0adb2054449b539p15d197jsncc98c940709e',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        joke.push(result);
    } catch (error) {
        console.error(error);
    }
}

function generateJoke(){
    let content = document.getElementById('content');

    content.innerHTML = jokeHTML();
}

async function newJoke(){
    joke = [];
    await getApi();
    generateJoke();
}