const svgMode = document.getElementById("mode-button__svg")
const mode = document.querySelector(".mode-button")
const container = document.querySelector(".container")
const eslogan = document.querySelector(".eslogan")
let dark = "true"

function changeColorEslogan(color){
  if (!(eslogan === null)){
    eslogan.style.color = color
  }
}

mode.addEventListener("click", () => {
  if (dark === "true"){
    changeColorEslogan("#121212")
    container.style.background = "#F5F5F7"
    dark = "false"
    svgMode.setAttribute("src", "/svg/moon.svg")
  }else{
    container.style.background = "#121212"
    changeColorEslogan("#F5F5F7")
    dark = "true"
    svgMode.setAttribute("src", "/svg/sun.svg")
  }
})

