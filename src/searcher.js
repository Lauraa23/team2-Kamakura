//DEBE buscar los productos por los filtros

import { products } from "../assets/data/data.js";
import { createProductCards } from "./menu.js";


export function searchProducts({filter}){

let arrayFiltro = [];

if(filter === "todos"){

    arrayFiltro = products;
}else{
    arrayFiltro = products.filter((product) => product.category === filter);
}


for (let i in arrayFiltro) { 
    console.log(arrayFiltro[i].name+" "+arrayFiltro[i].price+" "+arrayFiltro[i].description)}
    
createProductCards(arrayFiltro);

return arrayFiltro
}
