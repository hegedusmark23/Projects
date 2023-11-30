

function startSlider(){
    setTimeout(function(){
        document.getElementById('img1').style = 'transform: translateX(-100%);';
        document.getElementById('img2').style = 'transform: translateX(0);';
        document.getElementById('img3').style = 'transform: translateX(100%);';
    }, 3000);

    setTimeout(function(){
        document.getElementById('img1').style = 'transform: translateX(-200%);';
        document.getElementById('img2').style = 'transform: translateX(-100%);';
        document.getElementById('img3').style = 'transform: translateX(0);';
    }, 6000);

    setTimeout(function(){
        document.getElementById('img1').style = 'transform: translateX(0);';
        document.getElementById('img2').style = 'transform: translateX(100%);';
        document.getElementById('img3').style = 'transform: translateX(200%);';

        startSlider();
    }, 9000);


    
}

function showImage1(){
    document.getElementById('img1').src = "img.jpg"
}

function showImage2(){

    document.getElementById('img1').src = "img2.jpg"
}
function showImage3(){
    document.getElementById('img1').src = "img3.jpg"
}