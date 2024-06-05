//Intenta separar los eventos en este archivo.
// src/events.js
import { createFilterButtons, createProductCards } from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
  createFilterButtons();
  createProductCards();
});


//Intenta separar los eventos en este archivo.

import {searchProducts} from "./searcher.js";

const buttons = document.getElementsByClassName('filter');

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function() {
  
        let filtro = buttons[i].value;

        searchProducts({filtro});
    });
    
}







