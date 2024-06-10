

import { products } from "../assets/data/data.js";
import { createProductCards } from "./menu.js";


export function searchProducts({filter}){

let arrayFiltro = [];

if(filter === "todos"){

    arrayFiltro = products;
}else{
    arrayFiltro = products.filter((product) => product.category === filter);
}


createProductCards(arrayFiltro);

  return arrayFiltro;
}

