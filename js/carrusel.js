"use strict"

const slides = document.querySelectorAll(".carrusel__slider")
const arrowRight = document.querySelector(".carrusel--arrow-right")
const arrowLeft = document.querySelector(".carrusel--arrow-left")
let currentSlider = 0
let slidesSize = slides.length - 1


arrowRight.addEventListener("click", () => {
  if (currentSlider === 0){
    slides[currentSlider].style.display = "none"
    currentSlider = slidesSize
    slides[currentSlider].style.display = "block"
  }else{
    slides[currentSlider].style.display = "none"
    currentSlider--
    slides[currentSlider].style.display = "block"
  }
})

arrowLeft.addEventListener("click", () => {
  if (currentSlider === 2){
    slides[currentSlider].style.display = "none"
    currentSlider = 0
    slides[currentSlider].style.display = "block"
  }else{
    slides[currentSlider].style.display = "none"
    currentSlider++
    slides[currentSlider].style.display = "block"
  }
})
