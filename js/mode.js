"use strict"

const svgMode = document.getElementById("mode-button__svg")
const textToChangeColor = document.querySelectorAll(".text--change-color")
const modeButton = document.querySelector(".mode-button")
const container = document.querySelector(".container")

window.addEventListener("load", () => {
  if (sessionStorage.getItem("mode") === null){
    sessionStorage.setItem("mode", "light")
  }

  if (sessionStorage.getItem("mode") === "dark"){
    changeColorAllText("#121212")
    container.style.background = "#F5F5F7"
    svgMode.setAttribute("src", "/svg/moon.svg")
  }
})

function changeColorAllText(color){
  textToChangeColor.forEach(text => {
    text.style.color = color
  })
}

modeButton.addEventListener("click", () => {
  if (sessionStorage.getItem("mode") === "light"){
    changeColorAllText("#121212")
    container.style.background = "#F5F5F7"
    sessionStorage.setItem("mode", "dark")
    svgMode.setAttribute("src", "/svg/moon.svg")
  }else{
    container.style.background = "#121212"
    changeColorAllText("#F5F5F7")
    sessionStorage.setItem("mode", "light")
    svgMode.setAttribute("src", "/svg/sun.svg")
  }
})

