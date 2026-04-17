import { getDataAPI } from "./dataAPI.js";

let dataAPI;
let price = 0;

document.addEventListener("DOMContentLoaded", () => {
  dataAPI = getDataAPI();

  setInterval(() => {
    price = Number((Math.random() * 3).toFixed(2));
    const date = new Date().toLocaleTimeString();
    renderData(price, date);
  }, 1000);
});

function renderData(price, date) {
  dataAPI.timeEl.textContent = date;
  dataAPI.priceEl.textContent = price;

  if (price > dataAPI.previousPrice) {
    dataAPI.indicatorEl.textContent = "🟢 UP";
  } else if (price < dataAPI.previousPrice) {
    dataAPI.indicatorEl.textContent = "🔴 DOWN";
  } else {
    dataAPI.indicatorEl.textContent = "⚪ SAME";
  }

  dataAPI.previousPrice = price;
}
