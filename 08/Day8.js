const readFile = require("fs").readFileSync;
const count = readFile("input.txt", "utf-8")
  .split("\n")
  .map((_) => _.split(" | "))
  .reduce(
    (acc, [uniqueSignalPattern, outputValue]) =>
      acc +
      outputValue
        .split(" ")
        .reduce(
          (acc, curr) =>
            curr.length === 2 ||
            curr.length === 3 ||
            curr.length === 4 ||
            curr.length === 7
              ? acc + 1
              : acc,
          0
        ),
    0
  );

// let count = 0;
// for (const entry of entries) {
//     [uniqueSignalPattern, outputValue] = entry;

//     count += outputValue.split(" ").reduce((acc, curr) => {
//         if (curr.length === 2 || curr.length === 3 || curr.length === 4 || curr.length === 7) {
//             return acc + 1;
//         }

//         return acc;
//     }, 0);

// }

console.log(count);
