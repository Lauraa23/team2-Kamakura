//DEBE imprimir en pantalla la información de filtros.

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.
import { filters, products } from "../assets/data/data.js";

export function createfilterButtons() {
    const filtersContainer = document.getElementById("filters");
 filtersContainer.innerHTML = "";

filters.forEach((filter) => {
const button = document.createElement("button");
button.className = "filter";
button.textContent = filter;
button.value = filter
filtersContainer.appendChild(button);

});
}

