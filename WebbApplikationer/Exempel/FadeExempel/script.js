var indexes = {current: 0};
var slides = document.getElementsByClassName('mySlides');
window.onload = slidePictures();

function slidePictures() {
    if (indexes.last) {
    	slides[indexes.last].classList.remove('visible');
    }

    slides[indexes.current].classList.add('visible');

    document.getElementById('indicator').innerHTML = (indexes.current + 1) + '/' + slides.length;
    
    indexes.last = indexes.current;
    indexes.current++;
    if (indexes.current >= slides.length) {
        indexes.current = 0;
    }

    setTimeout(slidePictures, 3000);
}