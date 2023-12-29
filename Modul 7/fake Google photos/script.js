
let imgs = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg'];


function render() {
    let content = document.getElementById('content');
    let headline = document.getElementById('headline');
    let openedImg = document.getElementById('opened-img');
    headline.innerHTML = `<h1>Images</h1>`;
    content.innerHTML = '';
    for (let i = 0; i < imgs.length; i++) {
        content.innerHTML += imagesHTML(i);
    }
    openedImg.classList.add('d-none');
}

function openImage(i) {
    let content = document.getElementById('opened-img');
    content.classList.remove('d-none');
    headline.innerHTML = '';
    content.innerHTML = '';
    content.innerHTML += openedImgHTML(i);
    
}

function previousPicture(i) {
    if (i >= 1) {
        i--;
        openImage(i);
    } if (i == 0) {
        let i = 0;
        openImage(i);
    }
}

function nextPicture(i) {
    if (i <= 7) {
        i++;
        openImage(i);
    } if (i == 8) {
        let i = 0;
        openImage(i);
    }
}