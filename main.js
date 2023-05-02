function menutoggle() {
  var x = document.getElementById("mymenu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
menutoggle ()

function aboutme () {
  let parentElement = document.querySelector('#odd');
  let mytext = document.createElement("p");
  mytext.textContent = "";
  let mylist = document.createElement("ul");

  let item1 = document.createElement("li");
  let item2 = document.createElement("li");
  let item3 = document.createElement("li");

  item1.textContent = "Modern Biology lab 1&2";
  item2.textContent = "Molecular cell biology lab";
  item3.textContent = "Intro to microbiology lab";

  mylist.appendChild(item1);
  mylist.appendChild(item2);
  mylist.appendChild(item3);

  mytext.appendChild(mylist);
  parentElement.appendChild(mytext);
}
aboutme ()

let slideIndex = 1;
showslide(slideIndex);

function plusSlides(n) {
  showslide(slideIndex += n);
}

function currentSlide(n) {
  showslide(slideIndex = n);
}

function showslide(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


