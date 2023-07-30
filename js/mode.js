const svgMode = document.getElementById("mode-button__svg")
const mode = document.querySelector(".mode-button")
const container = document.querySelector(".container")
const eslogan = document.querySelector(".eslogan")
let dark = "true"

mode.addEventListener("click", () => {
  if (dark === "true"){
    container.style.background = "#F5F5F7"
    eslogan.style.color = "#121212"
    svgMode.setAttribute("src", "svg/moon.svg")
    dark = "false"
  }else{
    container.style.background = "#121212"
    eslogan.style.color = "#F5F5F7"
    dark = "true"
    svgMode.setAttribute("src", "svg/sun.svg")
  }
})
