const convert_El = document.getElementById("convert-btn");
const inputValue = document.getElementById("input-box");
const Clearbtn = document.getElementById("clear-btn");
const Historybtn = document.getElementById("history-btn");

const toMeter = document.getElementById("tometer");
const toFeet = document.getElementById("tofeet");

const toGallons = document.getElementById("togallons");
const toLiters = document.getElementById("liters");

const toPounds = document.getElementById("topounds");
const toKilos = document.getElementById("tokilos");

convert_El.addEventListener("click", function () {
  let value = Number(inputValue.value);
  if (!value) return;

  localStorage.setItem("lastValue", value);
  calculation(value);
});


function calculation(value) {
  let meter = value * 0.3048;
  let feet = value * 3.28084;

  let gallons = value * 0.264172;
  let liters = value * 3.78541;

  let pounds = value * 2.20462;
  let kilos = value * 0.453592;

  toMeter.textContent = "To Meter : " + meter.toFixed(2);
  toFeet.textContent = "To Feet : " + feet.toFixed(2);

  toGallons.textContent = "To Gallons : " + gallons.toFixed(2);
  toLiters.textContent = "To Liters : " + liters.toFixed(2);

  toPounds.textContent = "To Pounds : " + pounds.toFixed(2);
  toKilos.textContent = "To Kilos : " + kilos.toFixed(2);
}


Clearbtn.addEventListener("click", function () {
  inputValue.value = "";

  toMeter.textContent = "";
  toFeet.textContent = "";

  toGallons.textContent = "";
  toLiters.textContent = "";

  toPounds.textContent = "";
  toKilos.textContent = "";
});


Historybtn.addEventListener("click", function () {
  let value = localStorage.getItem("lastValue");
  if (!value) return;

  calculation(Number(value));
});
