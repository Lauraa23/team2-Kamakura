//Aquí intenta poner las funcionalidades del recibo

export function generateReceipt([shoppingCartProducts]) {
  let finalPrice = 0;

  shoppingCartProducts.forEach((product) => {
    document.getElementById("product-name").textContent = product.name;

    document.getElementById(
      "receipt-quantity"
    ).textContent = `Cantidad: ${product.quantity}`;

    document.getElementById("receipt-subtotal").textContent = product.subtotal;

    finalPrice += product.subtotal;
  });

  document.getElementById("receipt-total").innerHTML = finalPrice;
}
