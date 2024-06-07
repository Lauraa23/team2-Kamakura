//Aquí intenta poner las funcionalidades del recibo

const receiptContainer = document.getElementById("receipt-container");
const receiptProduct = document.getElementById("receipt-product");
const receiptTotal = document.getElementById("receipt-total");

function showReceipt() {
  updateReceipt();
  receiptContainer.style.display = "block";
}
function closeReceipt() {
  receiptContainer.style.display = "none";
}

function updateReceipt() {
  receiptProduct.innerHTML = "";

  const cartProducts = document.querySelectorAll(".cart-container");

  let total = 0;

  cartProducts.forEach((product) => {
    const title = product.querySelector(".text-container h3").textContent;
    const priceText = product.querySelector(".text-container h5").textContent;
    const quantity = product.querySelector(".quantity").textContent;

    const price = parseFloat(priceText.replace("€ ", ""));
    const subtotal = price * parseInt(quantity);

    total += subtotal;

    const productDiv = document.createElement("div");
    productDiv.className = "receipt-product";

    const productTitle = document.createElement("h3");
    productTitle.textContent = title;

    const productDetails = document.createElement("div");
    productDetails.className = "receipt-price";

    const productQuantity = document.createElement("p");
    productQuantity.textContent = `Cantidad: ${quantity}`;

    const productSubtotal = document.createElement("h5");
    productSubtotal.textContent = `Subtotal:  € ${subtotal.toFixed(2)}`;

    productDetails.appendChild(productQuantity);
    productDetails.appendChild(productSubtotal);

    productDiv.appendChild(productTitle);
    productDiv.appendChild(productDetails);

    receiptProduct.appendChild(productDiv);
  });

  receiptTotal.textContent = `Total: € ${total.toFixed(2)}`;
}

export { showReceipt, closeReceipt };
