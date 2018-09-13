var myIndex = 0;
window.onload = slidePictures();

function slidePictures() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].setAttribute("id", "fadeout");

  }
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1
  }
  slides[myIndex - 1].style.display = "block";
  document.getElementById("indicator").innerHTML = myIndex + "/" + slides.length;

  setTimeout(slidePictures, 3000);

}



