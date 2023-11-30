let titles = [];
let notices = [];
load();

function render() {
    let input = document.getElementById('input');
    let content = document.getElementById('content');
    input.innerHTML = '';
    content.innerHTML = '';

    input.innerHTML += /*html*/`
        <div class="input-section">
            <input id="title" type="text" placeholder="Title ...">
            <input id="notice" type="text" placeholder="Notice ...">
            <button onclick="addNotice()">Add notice</button>
        </div>
    `;

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const notice = notices[i];

        content.innerHTML += /*html*/ `
        <div class="notice-block">
            <h1>${titles[i]}</h1>
            <p>${notices[i]}</p>
            <button  class="delete-button" onclick="deleteNotice()">Delete</button>
        </div>
    `;
    }
}

function addNotice() {
    let title = document.getElementById('title');
    let notice = document.getElementById('notice');

    titles.push(title.value);
    notices.push(notice.value);

    render();
    save();
}

function deleteNotice(i) {
    titles.splice(i, 1);
    notices.splice(i, 1);

    render();
    save();
}

function save() {
    let titlesAsText = JSON.stringify(titles)
    let noticesAsText = JSON.stringify(notices)
    localStorage.setItem('titles', titlesAsText);
    localStorage.setItem('notices', noticesAsText);
}

function load() {
    let titlesAsText = localStorage.getItem('titles');
    let noticesAsText = localStorage.getItem('notices')
    if (titlesAsText && noticesAsText) {
        titles = JSON.parse(titlesAsText);
        notices = JSON.parse(noticesAsText);
    }
}