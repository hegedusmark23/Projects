
function generateCharacterHTML(i){
    return /*html*/`
        <div class="card" id="card${i}">
            <img class="character-image" src="${characters[0]['items'][i]['image']}" alt="">
            <h1>${characters[0]['items'][i]['name']}</h1>
        </div>
    `;
}