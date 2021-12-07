const fs = require("fs");

const data = fs.readFileSync("input", "utf8");

const measurements = data.split("\n");

// Part one: first attempt
// for (let currentValue of measurements) {
//   let currWindow = measurements
//   if (currentValue >= prevValue) {
//     increased += 1;
//   }
//   prevValue = currentValue;
// }

// Part one: second attempt
// const ret = numbers
//   .split("\n")
//   .reduce(
//     (previousValue, currentValue, currentIndex, array) =>
//       currentValue >= (array[currentIndex - 1] || 0)
//         ? (previousValue += 1)
//         : previousValue,
//     0
//   );

// Part two first attempt: 1429

// const measurements = `199
// 200
// 208
// 210
// 200
// 207
// 240
// 269
// 260
// 263`.split('\n');

// let prevWindow = 0;
// let increased = 0;

// for (let [index] of measurements.entries()) {
//   let inc = false;

//   const currentWindow =
//     parseInt(measurements[index]) +
//     parseInt(measurements[index + 1]) +
//     parseInt(measurements[index + 2]);

//   if (index > 0) {
//     if (currentWindow > prevWindow) {
//       increased += 1;
//       inc = true;
//     }
//   }

//   prevWindow = currentWindow;

//   console.log(
//     parseInt(measurements[index]),
//     parseInt(measurements[index + 1]),
//     parseInt(measurements[index + 2]),
//     currentWindow,
//     increased,
//     inc
//   );
// }

// console.log(increased);

// Part one: second attempt
