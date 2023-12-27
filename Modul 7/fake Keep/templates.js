
function inputHTML(){
    return /*html*/`
    <form onsubmit="addNotice();return false;" class="input-section">
        <input required minlength="2" id="title" type="text" placeholder="Title ...">
        <input required minlength="2" id="notice" type="text" placeholder="Notice ...">
        <button>Add notice</button>
    </form>
`;
}

function noticeHTML(i, title, notice){
    return /*html*/ `
    <div id="notice-block${i}" class="notice-block">
        <h1 id="title${i}">${title}</h1>
        <p id="notice${i}">${notice}</p>
        <button  class="delete-button" onclick="deleteNotice(${i})">Delete</button>
    </div>
`;
}

function deletedNoticeHTML(i,title,notice){
    return /*html*/ `
    <div id="dnotice-block${i}" class="notice-block">
        <h1 id="dtitle${i}">${title}</h1>
        <p id="dnotice${i}">${notice}</p>
    </div>
`;
}