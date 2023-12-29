
function openedImgHTML(i){
    return /*html*/`
    <div id="img" class="opened-div">
        <img onclick="render()" class="nav-back" src="./img/circle-x.png">
        <div class="image-slider">
            <img onclick="previousPicture(${i})" class="nav-arrow" src="./img/left-arrow.png" alt="">
            <img class="img-opened-size" src="${imgs[i]}">
            <img onclick="nextPicture(${i})" class="nav-arrow" src="./img/right-arrow.png" alt="">
        </div>
    </div>
    `;
}

function imagesHTML(i){
    return /*html*/`
    <div onclick="openImage(${i})" class="img-container"><img class="img-size" src="${imgs[i]}" alt=""></div>
   `;
    }