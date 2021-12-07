// let oxygenInputs = co2Inputs = `00100
// 11110
// 10110
// 10111
// 10101
// 01111
// 00111
// 11100
// 10000
// 11001
// 00010
// 01010`.split("\n");

const fs = require("fs");

const data = fs.readFileSync("input", "utf8");

let oxygenInputs = (co2Inputs = data.split("\n"));

for (let column = 0; column <= 12; column += 1) {
  let counts = 0;
  for (let row = 0; row < oxygenInputs.length; row += 1) {
    if (oxygenInputs[row].charAt(column) === "1") {
      counts += 1;
    }
  }
  let mostOf = "0";
  if (counts >= oxygenInputs.length - counts) {
    mostOf = "1";
  }
  oxygenInputs = oxygenInputs.filter((el) => {
    return el.charAt(column) === mostOf;
  });

  if (oxygenInputs.length === 1) {
    console.log(parseInt(oxygenInputs, 2));
  }
}

for (let column = 0; column <= 12; column += 1) {
  let counts = 0;
  for (let row = 0; row < co2Inputs.length; row += 1) {
    if (co2Inputs[row].charAt(column) === "0") {
      counts += 1;
    }
  }
  let mostOf = "1";
  if (co2Inputs.length - counts >= counts) {
    mostOf = "0";
  }
  co2Inputs = co2Inputs.filter((el) => {
    return el.charAt(column) === mostOf;
  });

  if (co2Inputs.length === 1) {
    console.log(parseInt(co2Inputs, 2));
  }
}
