const readFile = require("fs").readFileSync;
const input = readFile("input", "utf-8")
  .split(",")
  .map((_) => parseInt(_));

//const input = "16,1,2,0,4,2,7,1,2,14".split(",");

const MAX = Math.max(...input);
let lowestFuel = Number.MAX_SAFE_INTEGER;
for (let horizontal = 0; horizontal <= MAX; horizontal++) {
  let fuel = 0;
  for (let crab = 0; crab < input.length; crab++) {
    let range = 0;
    for (let j = 0; j <= Math.abs(input[crab] - horizontal); j++) {
      range += j;
    }
    fuel += range;
  }
  if (fuel <= lowestFuel) {
    lowestFuel = fuel;
  }
}

console.log(lowestFuel);
