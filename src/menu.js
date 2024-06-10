

import { filters, products } from "../assets/data/data.js";

export function createFilterButtons() {
  const filtersContainer = document.getElementById("filters");
  filtersContainer.innerHTML = "";

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.className = "filter";
    button.textContent = filter;
    filtersContainer.appendChild(button);
  });
}


export function createProductCards(productArray) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  productArray.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-container";

    const title = document.createElement("h3");
    title.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.description;

    const priceContainer = document.createElement("div");
    priceContainer.className = "price-container";

    const price = document.createElement("h5");
    price.textContent = `€${product.price.toFixed(2)}`;

    const addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.textContent = "Añadir";
    addButton.setAttribute("data-id", product.id);

    priceContainer.appendChild(price);
    priceContainer.appendChild(addButton);

    productDiv.appendChild(title);
    productDiv.appendChild(description);
    productDiv.appendChild(priceContainer);


   productsContainer.appendChild(productDiv);
  });
}

