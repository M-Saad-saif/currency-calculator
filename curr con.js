let screenPKR = document.getElementById("pkr-area");
let screenOther = document.getElementById("seleted-area");
let buttons = document.querySelectorAll(".buttons");
let convertBtn = document.getElementById("convert-btn");
let currencySelect = document.getElementById("currency-selection");
let currency_selection_self = document.querySelector(
  "#currency-selection-self"
);
let selectedLabel = document.querySelector(".box:nth-child(2) .label");
let selectedLabelSelf = document.querySelector("#label1");
let clearBtn = document.querySelector(".clearBtn");

let calculation = "";

let selfRate = {
  america: { rate: 0.003526, label: "USD" },
  india: { rate: 0.31, label: "INR" },
  turkey: { rate: 0.15, label: "TRY" },
  afghan: { rate: 0.25, label: "AFG" },
  Canada: { rate: 0.0049, label: "CAN" },
  china: { rate: 0.025, label: "CHI" },
  Pakistan: { rate: 1, label: "PKR" },
};

const rates = {
  america: { rate: 0.003526, label: "USD" },
  india: { rate: 0.31, label: "INR" },
  turkey: { rate: 0.15, label: "TRY" },
  afghan: { rate: 0.25, label: "AFG" },
  Canada: { rate: 0.0049, label: "CAN" },
  china: { rate: 0.025, label: "CHI" },
  Pakistan: { rate: 1, label: "PKR" },
};

// conversion function
function conversion() {
  let FromCurrency = currency_selection_self.value;
  let ToCurrency = currencySelect.value;

  if (selfRate[FromCurrency] && rates[ToCurrency]) {
    let value = parseFloat(calculation);

    let inPKR = value / selfRate[FromCurrency].rate;
    let converted = inPKR * rates[ToCurrency].rate;

    screenOther.innerText = converted.toFixed(4);
  } else {
    screenOther.innerText = "Select both!";
    screenPKR.innerHTML = "Select both!";
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    if (btn.id === "convert-btn") return;

    calculation += value;
    screenPKR.innerText = calculation;
    conversion();
  });
});

// first input
currency_selection_self.addEventListener("change", () => {
  let selected = currency_selection_self.value;

  if (selfRate[selected]) {
    selectedLabelSelf.innerText = selfRate[selected].label;
  } else {
    selectedLabelSelf.innerText = "???";
  }
});

// converted input
currencySelect.addEventListener("change", () => {
  let selected = currencySelect.value;
  if (rates[selected]) {
    selectedLabel.innerText = rates[selected].label;
  } else {
    selectedLabel.innerText = "???";
  }
});

clearBtn.addEventListener("click", () => {
  calculation = "";
  screenOther.innerHTML = "...";
  screenPKR.innerHTML = "...";
});
