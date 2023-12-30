
let cats = [];

async function init() {
    await getImgApi();
    generateCards();
}

async function getApi() {
    let url = 'https://api.thecatapi.com/v1/breeds';
    let response = await fetch(url);
    let responseAsJson = await response.json();
    cats.push(responseAsJson);
}

async function getImgApi() {
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_QzMzhvAUKEQ9ATr3Tdr7vFptUr0uYEFlOnutsSUCMFnH4rE5DhXX9OPMU8QhPMa4"
      });
      
      var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
      };
      
      fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100", requestOptions)
        .then(response => response.json())
        .then(result => cats.push(result))
        .catch(error => console.log('error', error)); 
}

function generateCards() {
    let content = document.getElementById('content');
    for (let i = 0; i < 9; i++) {
        const cat = cats[i];
        content.innerHTML += catCardHTML(i);

    }
}