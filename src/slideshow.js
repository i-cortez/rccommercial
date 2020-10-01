// slideshow.js
//
// Ismael Cortez
// 9-30-2020
// RC Commercial Coatings, LLC Website
//
// This file contains javascript code for gallery slideshows
//

let slideIndex = 1;
slideshow(slideIndex);

function changeSlide(n)
{
  slideshow(slideIndex += n);
}

function currentSlide(n)
{
  slideshow(slideIndex = n);
}

function slideshow(n)
{
  let x = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("circles");
  if (n > x.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = x.length;}
  for (let i = 0; i < x.length; ++i)
  {
    x[i].style.display = "none";  
  }
  for (let i = 0; i < dots.length; ++i)
  {
    dots[i].className = dots[i].className.replace(" w3-dark-grey", "");
  }
  x[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " w3-dark-grey";
}

