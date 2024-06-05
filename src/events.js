//Intenta separar los eventos en este archivo.
// src/events.js
import { createFilterButtons, createProductCards } from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
  createFilterButtons();
  createProductCards();
});
