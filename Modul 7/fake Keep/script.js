let titles = [];
let notices = [];
let deletedTitles = [];
let deletedNotices = [];
load();

function init(){
    render();
}

function render() {
    let input = document.getElementById('input');
    let content = document.getElementById('content');
    input.innerHTML = '';
    content.innerHTML = '';

    input.innerHTML += /*html*/`
        <form onsubmit="addNotice();return false;" class="input-section">
            <input required minlength="2" id="title" type="text" placeholder="Title ...">
            <input required minlength="2" id="notice" type="text" placeholder="Notice ...">
            <button>Add notice</button>
        </form>
    `;

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const notice = notices[i];

        content.innerHTML += /*html*/ `
        <div id="notice-block${i}" class="notice-block">
            <h1 id="title${i}">${title}</h1>
            <p id="notice${i}">${notice}</p>
            <button  class="delete-button" onclick="deleteNotice(${i})">Delete</button>
        </div>
    `;
    }
}

function renderTrash(){
    let content = document.getElementById('trash');
    content.innerHTML = '';
    for (let i = 0; i < deletedTitles.length; i++) {
        const title = deletedTitles[i];
        const notice = deletedNotices[i];

        content.innerHTML += /*html*/ `
        <div id="notice-block${i}" class="notice-block">
            <h1 id="title${i}">${title}</h1>
            <p id="notice${i}">${notice}</p>
            <button  class="delete-button" onclick="deleteNotice(${i})">Delete</button>
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
    putToTrash(i);
    titles.splice(i, 1);
    notices.splice(i, 1);
    
    render();
    save();
}

function putToTrash(i){
    let title = document.getElementById(`title${i}`).innerHTML;
    let notice = document.getElementById(`notice${i}`).innerHTML;
    deletedTitles.push(title);
    deletedNotices.push(notice);
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

function showNotices(){
    document.getElementById('content')
}

