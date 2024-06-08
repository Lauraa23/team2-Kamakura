//DEBE contener las funcionalidades del carrito de compras.

import { products } from "../assets/data/data.js";

let productsToReceipt = [];

export function addToCart(productId) {
  console.info("inicio de añadir el producto => " + productId);

  let productElement = null;
  const productExists = productsToReceipt.some(product => product.id === Number(productId));

  if (!productExists) {
    products.forEach((product) => {
      if (product.id === Number(productId)) {
        productElement = product;
        productsToReceipt.push(product);
        return false;
      }
    });
    console.log(productsToReceipt);
  }
  
  //para que se borre "añade un plato a tu menu"
  const cartProductMessage = document.querySelector(".cart-product-empty");
  if (cartProductMessage) {
    cartProductMessage.remove();
  }

  // validamos si existe el producto en la lista data.js
  if (productElement) {
    // buscamos si existe en el carrito
    let cartContainerDiv = document.querySelector(
      '.cart-container[data-id="' + productId + '"]'
    );

    if (cartContainerDiv) {
      // solo actualizar la cantidad
      console.log("solo actualizar la cantidad");
    } else {
      cartContainerDiv = document.createElement("div");
      cartContainerDiv.className = "cart-container";
      cartContainerDiv.setAttribute("data-id", productId);

      const closeButton = document.createElement("button");
      closeButton.className = "close-button";

      const closeImg = document.createElement("img");
      closeImg.src = "./assets/img/close.svg";
      closeImg.setAttribute("alt", "close");

      closeButton.appendChild(closeImg);

      const textContainerDiv = document.createElement("div");
      textContainerDiv.className = "text-container";

      const titleH3 = document.createElement("h3");
      titleH3.textContent = productElement.name;

      const priceH5 = document.createElement("h5");
      priceH5.textContent = "€ " + productElement.price.toFixed(2);

      textContainerDiv.appendChild(titleH3);
      textContainerDiv.appendChild(priceH5);

      const quantityContainerDiv = document.createElement("div");
      quantityContainerDiv.className = "quantity-container";

      const increaseButton = document.createElement("button");
      increaseButton.textContent = "+";

      const quantityP = document.createElement("p");
      quantityP.className = "quantity";
      quantityP.textContent = 1;

      const decreaseButton = document.createElement("button");
      decreaseButton.textContent = "-";

      increaseButton.addEventListener("click", function () {
        const currentQuantity = parseInt(quantityP.textContent);
        quantityP.textContent = currentQuantity + 1;
      });

      decreaseButton.addEventListener("click", function () {
        const currentQuantity = parseInt(quantityP.textContent);
        // asegurarse de que la cantidad no sea menor que 1
        if (currentQuantity > 1) {
          quantityP.textContent = currentQuantity - 1;
        }
      });
      quantityContainerDiv.appendChild(increaseButton);
      quantityContainerDiv.appendChild(quantityP);
      quantityContainerDiv.appendChild(decreaseButton);

      cartContainerDiv.appendChild(closeButton);
      cartContainerDiv.appendChild(textContainerDiv);
      cartContainerDiv.appendChild(quantityContainerDiv);

      function removeProductsFromCartData(productId) {
        productsToReceipt.forEach((product, index) => {
          if (product.id === Number(productId)) {
            productsToReceipt.splice(index, 1);
          }
        });
        console.log(productsToReceipt);
      }

      document.querySelector("#cart-products").appendChild(cartContainerDiv);
      closeButton.addEventListener("click", function () {
        cartContainerDiv.remove();
        removeProductsFromCartData(productId);
      });
    }
  }
}
