let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const images = document.querySelectorAll('.slider .slider-line img');
let count = 0;


function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}
window.addEventListener('resize', init);
init();

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});


function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}




// document.querySelector('.slider-next').addEventListener('click', function () {
//     offset = offset + 230;  //  offset +=230;
//     if (offset > 690) {
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
// });

// document.querySelector('.slider-prev').addEventListener('click', function () {
//     offset = offset - 230;
//     if (offset < 0) {
//         offset = 690;
//     }
//     sliderLine.style.left = -offset + 'px';
// });



