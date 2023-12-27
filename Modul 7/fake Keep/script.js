let titles = [];
let notices = [];
let deletedTitles = [];
let deletedNotices = [];
load();

function init(){
    render();
    renderTrash();
}

function render() {
    let input = document.getElementById('input');
    let content = document.getElementById('content');
    input.innerHTML = '';
    content.innerHTML = '';
    input.innerHTML += inputHTML();
    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const notice = notices[i];
        content.innerHTML += noticeHTML(i, title, notice);
    }
    if (titles.length >= 1) {
        document.getElementById('noticeCount').innerHTML = titles.length;
    }
}

function renderTrash(){
    let content = document.getElementById('trash');
    content.innerHTML = '';
    for (let i = 0; i < deletedTitles.length; i++) {
        const title = deletedTitles[i];
        const notice = deletedNotices[i];
        content.innerHTML += deletedNoticeHTML(i,title,notice);
    }
    if (deletedTitles.length >= 0) {
        document.getElementById('trashCount').innerHTML = deletedTitles.length;
    }
}

function addNotice() {
    let title = document.getElementById('title');
    let notice = document.getElementById('notice');

    titles.push(title.value);
    notices.push(notice.value);

    render();
    renderTrash();
    save();
}

function deleteNotice(i) {
    putToTrash(i);
    titles.splice(i, 1);
    notices.splice(i, 1);
    
    render();
    renderTrash();
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
    let dtitlesAsText = JSON.stringify(deletedTitles)
    let dnoticesAsText = JSON.stringify(deletedNotices)
    localStorage.setItem('titles', titlesAsText);
    localStorage.setItem('notices', noticesAsText);
    localStorage.setItem('deletedTitles', dtitlesAsText);
    localStorage.setItem('deletedNotices', dnoticesAsText);
}

function load() {
    let titlesAsText = localStorage.getItem('titles');
    let noticesAsText = localStorage.getItem('notices')
    let dtitlesAsText = localStorage.getItem('deletedTitles')
    let dnoticesAsText = localStorage.getItem('deletedNotices')
    if (titlesAsText && noticesAsText) {
        titles = JSON.parse(titlesAsText);
        notices = JSON.parse(noticesAsText);
    } if (dtitlesAsText && dnoticesAsText) {
        deletedTitles = JSON.parse(dtitlesAsText);
        deletedNotices = JSON.parse(dnoticesAsText);
    }
}

function showNotices(){
    document.getElementById('content').classList.remove('d-none');
    document.getElementById('trash').classList.remove('d-flex');
    document.getElementById('trash').classList.add('d-none');
}

function showTrash(){
    document.getElementById('content').classList.add('d-none');
    document.getElementById('trash').classList.remove('d-none');
    document.getElementById('trash').classList.add('d-flex');
    renderTrash();    
      
}

