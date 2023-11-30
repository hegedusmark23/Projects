
let imgs = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg'];


function render() {
    let content = document.getElementById('content');
    let headline = document.getElementById('headline');
    headline.innerHTML = `<h1>Images</h1>`;
    content.innerHTML = '';


    for (let i = 0; i < imgs.length; i++) {
        content.innerHTML += /*html*/`
         <div onclick="openImage(${i})" class="img-container"><img class="img-size" src="${imgs[i]}" alt=""></div>
        `;
    }
}

function openImage(i) {
    let content = document.getElementById('content');
    headline.innerHTML = '';

    content.innerHTML = /*html*/`
    <div id="img" class="opened-div"><a class="nav-back" href="index.html">Back</a><img class="img-opened-size" src="${imgs[i]}"></div>
    `;

    removeFlash();
}

function removeFlash(){
    document.getElementById('content').classList.remove('img:hover');
}