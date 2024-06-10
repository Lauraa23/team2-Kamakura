import { products } from "../assets/data/data.js";

let productsToReceipt = [];


let precioTotal = 0;

function addToCart(productId) {
  let productElement = null;
  const productExists = productsToReceipt.some(
    (product) => product.id === Number(productId)
  );

  if (!productExists) {
    products.forEach((product) => {
      if (product.id === Number(productId)) {
        productElement = product;
        precioTotal += product.price;
        product.quantity = 1;
        productsToReceipt.push(product);
        return false;
      }
    });
    
  }

  const cartProductMessage = document.querySelector(".cart-product-empty");
  if (cartProductMessage) {
    cartProductMessage.remove();
  }

  
  if (productElement) {
    
    let cartContainerDiv = document.querySelector(
      '.cart-container[data-id="' + productId + '"]'
    );

    if (cartContainerDiv) {
      
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
      priceH5.value = parseFloat(productElement.price);

      const totalPriceH2 = document.getElementById("cart-total");
      totalPriceH2.textContent = "Total " + precioTotal + " €";

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
        
        precioTotal += priceH5.value;
        totalPriceH2.textContent = "Total " + precioTotal + " €";

        productsToReceipt.forEach((product, index) => {
          if (product.id === Number(productId)) {
            product.quantity++;
          }
        });
      });

      decreaseButton.addEventListener("click", function () {
        const currentQuantity = parseInt(quantityP.textContent);

        productsToReceipt.forEach((product, index) => {
          if (product.id === Number(productId)) {
            product.quantity--;
          }
          if (product.quantity <= 0) {
            removeProductsFromCartData(productId);
          }
        });

       
        if (currentQuantity > 0) {
          quantityP.textContent = currentQuantity - 1;
          precioTotal -= priceH5.value; 
          totalPriceH2.textContent = "Total " + precioTotal + " €";
        }
        
        if (parseInt(quantityP.textContent) === 0) {
          cartContainerDiv.remove();
          checkIfCartIsEmpty(); 
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
      }

      document.querySelector("#cart-products").appendChild(cartContainerDiv);
      closeButton.addEventListener("click", function () {
        precioTotal -= quantityP.textContent * priceH5.value;
        totalPriceH2.textContent = "Total " + precioTotal + " €";
       
        cartContainerDiv.remove();
        removeProductsFromCartData(productId);
        checkIfCartIsEmpty(); 
      });

      hideEmptyCartMessage();
    }
  }
}


function hideEmptyCartMessage() {
  const cartProductMessage = document.querySelector("#cart-products h3");
  if (
    cartProductMessage &&
    cartProductMessage.textContent === "Añade un plato a tu menú"
  ) {
    cartProductMessage.style.display = "none";
  }
}


function showEmptyCartMessage() {
  const cartProducts = document.querySelector("#cart-products");
  const existingMessage = cartProducts.querySelector("h3");
  if (!existingMessage) {
    const emptyMessage = document.createElement("h3");
    emptyMessage.textContent = "Añade un plato a tu menú";
    cartProducts.appendChild(emptyMessage);
  } else {
    existingMessage.style.display = "block";
  }
}


function checkIfCartIsEmpty() {
  const cartProducts = document.querySelector("#cart-products");
  if (!cartProducts.querySelector(".cart-container")) {
    showEmptyCartMessage();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  checkIfCartIsEmpty();
});

export { addToCart, productsToReceipt };
