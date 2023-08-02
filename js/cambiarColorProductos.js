"use strict"

const nameProducts = document.querySelectorAll(".card__title")
const priceProducts = document.querySelectorAll(".card__precio__price")
const bgCards = document.querySelectorAll(".card--white")

window.addEventListener("load", () => {
  if (sessionStorage.getItem("mode") === "dark") {
    nameProducts.forEach(nameProduct => {
      nameProduct.classList.toggle("card__title--dark")
    });

    priceProducts.forEach(priceProduct => {
      priceProduct.classList.toggle("card__precio__price--light")
    })

    bgCards.forEach(card => {
      card.classList.toggle("card--dark")
    })
  }
})

svgMode.addEventListener("click", () => {
  nameProducts.forEach(nameProduct => {
    nameProduct.classList.toggle("card__title--dark")
  });

  priceProducts.forEach(priceProduct => {
    priceProduct.classList.toggle("card__precio__price--light")
  })

  bgCards.forEach(card => {
    card.classList.toggle("card--dark")
  })
})
