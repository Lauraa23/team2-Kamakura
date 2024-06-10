

import { createFilterButtons, createProductCards } from "./menu.js";
import { searchProducts } from "./searcher.js";
import { addToCart } from "./cart.js";
import { products } from "../assets/data/data.js";
import { closeReceipt, showReceipt, messageToPayButton } from "./receipt.js";

document.body.addEventListener("click", (event) => {
  const cartProductText = document.querySelector(".cart-products h3");
  const dishCart = document.getElementById("cart-products");
  if (
    event.target &&
    event.target.classList.contains("add-button") &&
    dishCart
  ) {
    addToCart(event.target.getAttribute("data-id"));
    cartProductText.remove();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cartcont = document.querySelector(".cart-container");
  if (cartcont) {
    cartcont.remove();
  }
  const cartButton = document.getElementById("cart");
  const cartContainer = document.getElementById("cart-container");

  cartContainer.style.display = "none";

  cartButton.addEventListener("click", () => {
    if (cartContainer.style.display === "none") {
      cartContainer.style.display = "flex";
    } else {
      cartContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  createFilterButtons();
  createProductCards(products);

  const buttons = document.getElementsByClassName("filter");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      let filter = buttons[i].textContent;

      searchProducts({ filter });
    });
  }
});

document
  .getElementById("proceedPay-button")
  .addEventListener("click", showReceipt);

document
  .getElementById("close-receipt")
  .addEventListener("click", closeReceipt);

document
  .getElementById("pay-button")
  .addEventListener("click", messageToPayButton);
