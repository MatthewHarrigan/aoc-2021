// const input =

const { join } = require("path/posix");

//   "acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab".split(" ");
const input =
  "be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb".split(" ");

var foundLetters = [];

const getConfiguration = (input) => {
  let configuration = Array(7).fill(0);

  return input
    .sort((a, b) => a.length - b.length)
    .reduce((acc, cur) => {
      const word = Array.from(cur).sort();

      // set "1"
      if (word.length === 2) {
        acc[2] = acc[5] = [...word];
        foundLetters.push(...word);
      }

      // set "7" which is the same "1" with a different letter at 0 position
      if (word.length === 3) {
        const lettersToRemoveSet = new Set(foundLetters);
        const remaining = word.filter((letter) => {
          // return those elements not in the namesToDeleteSet
          return !lettersToRemoveSet.has(letter);
        });
        acc[0] = remaining;
        foundLetters.push(...remaining);
      }

      // set "4"
      if (word.length === 4) {
        const lettersToRemoveSet = new Set(foundLetters);
        const remaining = word.filter((letter) => {
          // return those elements not in the namesToDeleteSet
          return !lettersToRemoveSet.has(letter);
        });

        acc[1] = acc[3] = remaining;
        foundLetters.push(...remaining);
      }

      // set "8"
      if (word.length === 7) {
        const lettersToRemoveSet = new Set(foundLetters);
        const remaining = word.filter((letter) => {
          // return those elements not in the namesToDeleteSet
          return !lettersToRemoveSet.has(letter);
        });
        acc[4] = acc[6] = remaining;
        foundLetters.push(...remaining);
      }

      return acc;
    }, configuration);
};

const config = getConfiguration(input);
// console.log(foundLetters);

const print = `
  ${config[0]}
${config[1]}  ${config[2]}
  ${config[3]}
${config[4]}  ${config[5]}
  ${config[6]}
`;

console.log(print);
// const readFile = require("fs").readFileSync;
// const count = readFile("input.txt", "utf-8")
//   .split("\n")
//   .map((_) => _.split(" | "))
//   .reduce(
//     (acc, [uniqueSignalPattern, outputValue]) =>
//       acc +
//       outputValue
//         .split(" ")
//         .reduce(
//           (acc, curr) =>
//             curr.length === 2 ||
//             curr.length === 3 ||
//             curr.length === 4 ||
//             curr.length === 7
//               ? acc + 1
//               : acc,
//           0
//         ),
//     0
//   );

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

// console.log(count);
