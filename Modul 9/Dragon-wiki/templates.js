
function generateCharacterHTML(i) {
    return /*html*/`
        <div class="card" id="card${i}">
            <img class="character-image" src="${characters[0]['items'][i]['image']}" alt="">
            <h1>${characters[0]['items'][i]['name']}</h1>
        </div>
    `;
}

function generateOpenedCharacterHTML() {
    return/*html*/ `
        <div>
            <div>
                <img src="${characters[0]['items'][i]['image']}" alt="">
                <h1>${characters[0]['items'][i]['name']}</h1>
            </div>
            <div>
                <a href=""></a>
                <div class="line"></div>
                <a href=""></a>
            </div>
            <div id="opened-card-content"></div>
        </div>
     `;
}

function generateCharStatsHTML(){
    return/*html*/`
    
    `;
}

function generateTransformationsHTML(){
    return/*html*/ `
    
    `;
}