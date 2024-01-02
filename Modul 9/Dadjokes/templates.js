
function jokeHTML() {
    return /*html*/`
        <div class="joke">
            <h2>${joke[0]['body'][0]['setup']}</h2>
            <h3>${joke[0]['body'][0]['punchline']}</h3>
            <div class="button-div">
                <button onclick="newJoke()">New Joke</button>
            </div>
        </div>
    `;
}