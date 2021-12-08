const readFile = require("fs").readFileSync;
const crabStartingPositions = readFile("input", "utf-8")
  .split(",")
  .map((_) => parseInt(_));

//const input = "16,1,2,0,4,2,7,1,2,14".split(",");

const MAX = Math.max(...crabStartingPositions);
let lowestFuel = Number.MAX_SAFE_INTEGER;
for (let horizontal = 0; horizontal <= MAX; horizontal++) {
  let fuel = 0;
  for (let crab = 0; crab < crabStartingPositions.length; crab++) {
    let fuelConsumption = 0;
    for (let j = 0; j <= Math.abs(crabStartingPositions[crab] - horizontal); j++) {
      fuelConsumption += j;
    }
    fuel += fuelConsumption;
  }
  if (fuel <= lowestFuel) {
    lowestFuel = fuel;
  }
}

console.log(lowestFuel);
