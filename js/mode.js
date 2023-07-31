const svgMode = document.getElementById("mode-button__svg")
const mode = document.querySelector(".mode-button")
const container = document.querySelector(".container")
const textToChangeColor = document.querySelectorAll(".text--change-color")
let dark = "true"

function changeColorAllText(color){
  textToChangeColor.forEach(text => {
    text.style.color = color
  })
}

mode.addEventListener("click", () => {
  if (dark === "true"){
    changeColorAllText("#121212")
    container.style.background = "#F5F5F7"
    dark = "false"
    svgMode.setAttribute("src", "/svg/moon.svg")
  }else{
    container.style.background = "#121212"
    changeColorAllText("#F5F5F7")
    dark = "true"
    svgMode.setAttribute("src", "/svg/sun.svg")
  }
})

