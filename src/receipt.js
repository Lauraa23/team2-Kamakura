
import { productsToReceipt } from "./cart";

document.getElementById("receipt-product").remove();
const receiptContainer = document.getElementById("receipt-container");
const cartContainer = document.getElementById("products-container");

function showReceipt() {
  receiptContainer.style.display = "block";
  cartContainer.style.display = "none";
  resetReceipt();
  createReceiptProducts();
}

function closeReceipt() {
  receiptContainer.style.display = "none";
  cartContainer.style.display = "block";
  resetReceipt();
}

let totalPrice = 0;

function createReceiptProducts() {
  resetReceipt();
  if (productsToReceipt.length != 0) {
    productsToReceipt.forEach((product) => {
      const newReceiptDiv = document.createElement("div");
      newReceiptDiv.className = "receipt-product";
      const subtotal = product.quantity * product.price;
      totalPrice += subtotal;

      newReceiptDiv.innerHTML = `
    <h3>${product.name}</h3>
    <div class="receipt-price">
        <p>Cantidad: ${product.quantity}</p>
       <h5>Subtotal ${subtotal} €</h5>
    </div>
    `;
      document.getElementById(
        "receipt-total"
      ).textContent = `Total: ${totalPrice} €`;
      const receiptTotal = document.getElementById("receipt-total");
      receiptContainer.insertBefore(newReceiptDiv, receiptTotal);
    });
  } else {
    const cartEmptyNotice = document.createElement("div");
    cartEmptyNotice.className = "receipt-product";
    cartEmptyNotice.innerHTML = `<p>Aún no has encargado tu orden</p>`;

    document.getElementById("receipt-total").textContent = "Total 0.00 €";
    const receiptTotal = document.getElementById("receipt-total");
    receiptContainer.insertBefore(cartEmptyNotice, receiptTotal);
    const payButton = document.getElementById("pay-button");
    payButton.disabled = true;
  }
}

function resetReceipt() {
  const receiptProducts = receiptContainer.querySelectorAll(".receipt-product");
  totalPrice = 0;
  receiptProducts.forEach((product) => product.remove());
}

function messageToPayButton() {
  const thankYouMessage = document.createElement("div");
  thankYouMessage.style.display = "flex";
  thankYouMessage.style.flexDirection = "column";
  thankYouMessage.style.justifyContent = "center";
  thankYouMessage.style.alignItems = "center";
  thankYouMessage.style.backgroundColor = "white";
  thankYouMessage.style.width = "40%";
  thankYouMessage.style.boxShadow = "2px 2px 15px rgba(0, 0, 0, 0.2)";
  thankYouMessage.style.padding = "20px";
  thankYouMessage.style.position = "fixed";
  thankYouMessage.style.top = "50%";
  thankYouMessage.style.left = "50%";
  thankYouMessage.style.transform = "translate(-50%, -50%)";
  thankYouMessage.style.zIndex = "1000";

  const closeButton = document.createElement("img");
  closeButton.src = "../assets/img/close.svg";
  closeButton.style.position = "absolute";
  closeButton.style.top = "-8px";
  closeButton.style.right = "-8px";
  closeButton.style.backgroundColor = "#FC3232";
  closeButton.style.color = "white";
  closeButton.style.borderRadius = "50%";
  closeButton.style.padding = "8px";
  closeButton.style.cursor = "pointer";

  closeButton.addEventListener("click", () => {
    thankYouMessage.remove();
  });

  const messageTitle = document.createElement("h3");
  messageTitle.textContent = "Gracias por tu Compra";
  messageTitle.style.marginBottom = "20px";
  messageTitle.style.textAlign = "center";

  const messageText = document.createElement("p");
  messageText.textContent =
    "¡Pedido realizado con éxito, gracias por comprar en Kamakura Food!";
  messageText.style.marginBottom = "20px";
  messageText.style.textAlign = "center";

  const logo = document.createElement("img");
  logo.src = "../assets/img/logo.svg";
  logo.style.width = "68px";
  logo.style.height = "auto";
  logo.style.alignSelf = "center";
  logo.style.marginTop = "20px";

  thankYouMessage.appendChild(closeButton);
  thankYouMessage.appendChild(messageTitle);
  thankYouMessage.appendChild(messageText);
  thankYouMessage.appendChild(logo);

  document.body.appendChild(thankYouMessage);
}

export { showReceipt, closeReceipt, messageToPayButton };
