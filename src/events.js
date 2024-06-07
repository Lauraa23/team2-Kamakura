//Intenta separar los eventos en este archivo.

import { createFilterButtons, createProductCards } from "./menu.js";
import { searchProducts } from "./searcher.js";
import { addToCart } from "./cart.js";
import { products } from "../assets/data/data.js";
import { showReceipt, closeReceipt } from "./receipt.js";

document.body.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("add-button")) {
    addToCart(event.target.getAttribute("data-id"));
  }
});
 document.addEventListener('DOMContentLoaded', () => {
  const cartcont=document.querySelector(".cart-container");
  if (cartcont) {
    cartcont.remove();
  }
  const cartButton = document.getElementById('cart');
  const cartContainer = document.getElementById('cart-container');

  cartContainer.style.display = 'none';

  cartButton.addEventListener('click', () => {
    if(cartContainer.style.display === 'none') {
      cartContainer.style.display = 'block';
    } else {
      cartContainer.style.display = 'none';
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

document.addEventListener("DOMContentLoaded", () => {
  const cartButton = document.getElementById("cart");
  const cartContainer = document.getElementById("cart-container");

  cartContainer.style.display = "none";

  cartButton.addEventListener("click", () => {
    if (cartContainer.style.display === "none") {
      cartContainer.style.display = "block";
    } else {
      cartContainer.style.display = "none";
    }
  });
});
