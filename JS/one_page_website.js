//creating a lightbox (modal image gallery)

//Makes the picture is clicked on bigger.
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

//closes the modal when someone clicks the X sign.
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
//? When is this executed - someone has to call it? 
showSlides (slideIndex);

//shows the next or prev slide based on n
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

//This is how the n slide is shown.
function showSlides(n) {
    var i;
    // that element is like an array of things [div.mySlides, div.mySlides, div.mySlides, div.mySlides]
    var slides = document.getElementsByClassName("mySlides");
    console.log("+++++++++++ all slides ++++++++++" + slides);
    console.log("++++++++++ "+slides.length);
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    
    //limit n from 1 - slides.length
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for(i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i <dots.length; i++) {
        dots[i].className.replace(" active","");
    }
    console.log(slides[0]);
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex-1].className +=" active";
    captionText.innerHTML = dots[slideIndex -1].alt;
}