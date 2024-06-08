//Aquí intenta poner las funcionalidades del recibo

const receiptContainer = document.getElementById("receipt-container");
const cartContainer = document.getElementById("products-container");

function showReceipt() {
  receiptContainer.style.display = "block";
  cartContainer.style.display = "none";
}
function closeReceipt() {
  receiptContainer.style.display = "none";
  cartContainer.style.display = "block";
}

export { showReceipt, closeReceipt };
