//DEBE contener las funcionalidades del carrito de compras.

import { products } from "../assets/data/data.js";

export function addToCart(productId) {
  console.info("inicio de añadir el producto => " + productId);

  let productElement = null;
  products.forEach((product) => {
    if (product.id === Number(productId)) {
      productElement = product;
      return false;
    }
  });

  //para que se borre "añade un plato a tu menu"
  const cartProductMessage = document.querySelector(".cart-product-empty");
  if (cartProductMessage) {
    cartProductMessage.remove();
  }

  // validamos si existe el producto en la lista data.js
  if (productElement) {

    // buscamos si existe en el carrito
   let cartContainerDiv = document.querySelector('.cart-container[data-id="' + productId + '"]');
   

    if (cartContainerDiv) {
        // solo actualizar la cantidad
        console.log('solo actualizar la cantidad');

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

      quantityContainerDiv.appendChild(increaseButton);
      quantityContainerDiv.appendChild(quantityP);
      quantityContainerDiv.appendChild(decreaseButton);

      cartContainerDiv.appendChild(closeButton);
      cartContainerDiv.appendChild(textContainerDiv);
      cartContainerDiv.appendChild(quantityContainerDiv);

      document.querySelector("#cart-products").appendChild(cartContainerDiv);

    }

  }
}

