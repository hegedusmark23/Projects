let imgs = ['img.jpg','img2.jpg','img3.jpg',];
let currentImage = 0;

function start(){
    let seconds = +document.getElementById('speed').value * 1000;

    if (seconds>10000) {
        alert('Bitte kleinere Zahl eingeben!');
    } 

    if (seconds<1000) {
        alert('Bitte mindestens eine Sekunde als Zeit eingeben!');
    } 
    
    else{
    
        showImage(currentImage);
    currentImage++;

    if (currentImage == 3) {
        currentImage = 0;
    }

    setTimeout(start, seconds);
    }
}


function showImage(i){
    document.getElementById('img1').src = imgs[i];
}