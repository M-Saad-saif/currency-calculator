let screenPKR = document.getElementById("pkr-area");
let screenOther = document.getElementById("seleted-area");
let buttons = document.querySelectorAll(".buttons");
let convertBtn = document.getElementById("convert-btn");
let currencySelect = document.getElementById("currency-selection");
let selectedLabel = document.querySelector(".box:nth-child(2) .label");
let clearBtn = document.querySelector(".clearBtn");

let calculation = "";

const rates = {
  america: { rate: 0.0036, label: "USD" },
  india: { rate: 0.31, label: "INR" },
  turkey: { rate: 0.15, label: "TRY" },
  afghan: { rate: 0.25, label: "AFG" },
  Canada: { rate: 0.0049, label: "CAN" },
  china: { rate: 0.025, label: "CHI" },
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    if (btn.id === "convert-btn") return;

    calculation += value;
    screenPKR.innerText = calculation;
  });
});

currencySelect.addEventListener("change", () => {
  let selected = currencySelect.value;
  if (rates[selected]) {
    selectedLabel.innerText = rates[selected].label;
  } else {
    selectedLabel.innerText = "???";
  }
});

convertBtn.addEventListener("click", () => {
  let selected = currencySelect.value;

  if (!calculation) {
    screenOther.innerText = "Enter PKR!";
    return;
  }

  if (rates[selected]) {
    let converted = parseFloat(calculation) * rates[selected].rate;
    screenOther.innerText = converted.toFixed(2);
  } else {
    screenOther.innerText = "Select currency!";
  }
});

clearBtn.addEventListener("click", () => {
  calculation = "";
  screenOther.innerHTML = "---"
  screenPKR.innerHTML= "---"
});
