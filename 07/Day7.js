const readFile = require("fs").readFileSync;
const input = readFile("input", "utf-8").split(",").map(_ => parseInt(_));

//const input = "16,1,2,0,4,2,7,1,2,14".split(",");

function sFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}


const MAX = Math.max(...input);
const sums = [];
let lowestFuel = Number.MAX_SAFE_INTEGER;
let prevFuel;
for (let i = 0; i <= MAX; i++) {
  let fuel = 0; 
  for (let position = 0; position < input.length; position++) {
    let range = 0;
    for (let j = 0; j <= Math.abs(input[position] - i); j++){
	range += j;
    }
    fuel += range;

  }
 if (fuel <= lowestFuel) {
   lowestFuel = fuel;
 }
}

console.log(lowestFuel)
