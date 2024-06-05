//DEBE buscar los productos por los filtros

import { products } from "../assets/data/data.js";



export function searchProducts({filtro}){

let arrayFiltro = ""

if(filtro === "todos"){

    arrayFiltro = products
}else{
    arrayFiltro = products.filter((products => products.category === filtro))
}


for (let i in arrayFiltro){ console.log(arrayFiltro[i].name+" "+arrayFiltro[i].price+" "+arrayFiltro[i].description)}

return arrayFiltro
}
