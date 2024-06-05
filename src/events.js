//Intenta separar los eventos en este archivo.

import { createfilterButtons } from "./menu.js";
createfilterButtons();

//Intenta separar los eventos en este archivo.

import {searchProducts} from "./searcher.js";

const buttons = document.getElementsByClassName('filter');

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function() {
  
        let filtro = buttons[i].value;

        searchProducts({filtro});
    });
    
}




