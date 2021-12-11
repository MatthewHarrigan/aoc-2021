const readFile = require("fs").readFileSync;
const input = readFile("input.txt", "utf-8")
  .split("\n")
  .map((_) => _.split(" | "));

// const input = "edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec ".split(" ");
// const input =
//   "acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab".split(" ");
// const input =
//   "be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb".split(" ");

function searchWordForNewLetters(foundLetters, word) {
  const lettersToRemoveSet = new Set(foundLetters);
  const newLetters = word.filter((letter) => {
    // return those elements not in the namesToDeleteSet
    return !lettersToRemoveSet.has(letter);
  });
  return newLetters;
}

const getConfiguration = (inp) => {
  const words = {};

  let input = inp[0].split(" ");
  let outputPatterns = inp[1].split(" ");

  var foundLetters = [];

  input.sort((a, b) => a.length - b.length);

  let configuration = Array(7).fill(0);

  for (const [index, cur] of input.entries()) {
    const currWord = Array.from(cur).sort();

    // console.log(index)

    // set "1"
    if (currWord.length === 2) {
      configuration[2] = configuration[5] = [...currWord];
      foundLetters.push(...currWord);
      input[index] = "";
      words[currWord.join("")] = 1;
    }

    // // set "7" which is the same "1" with a different letter at 0 position
    if (currWord.length === 3) {
      const newLetters = searchWordForNewLetters(foundLetters, currWord);
      configuration[0] = newLetters;
      foundLetters.push(...newLetters);
      input[index] = "";
      words[currWord.join("")] = 7;
    }

    // set "4"
    if (currWord.length === 4) {
      const newLetters = searchWordForNewLetters(foundLetters, currWord);
      configuration[1] = configuration[3] = newLetters;
      foundLetters.push(...newLetters);
      input[index] = "";
      words[currWord.join("")] = 4;
    }

    // set "8"
    if (currWord.length === 7) {
      const newLetters = searchWordForNewLetters(foundLetters, currWord);
      configuration[4] = configuration[6] = newLetters;
      foundLetters.push(...newLetters);
      input[index] = "";
      words[currWord.join("")] = 8;
    }
  }

  input = input.filter((_) => _ !== "");

  for (const [index, element] of input.entries()) {
    const currWord = Array.from(element).sort();

    if (element.length === 6) {
      // find the missing pair from the current element
      const p = Array(7).fill(0);

      for (const [index, pair] of configuration.entries()) {
        if (pair.length > 1) {
          let f = 2;
          for (const letter of pair) {
            if (element.search(letter) > -1) {
              f--;
            }
          }
          p[index] = f;
        }
      }

      // 0
      if (p[3] === 1) {
        configuration[3] = configuration[3].filter((x) => {
          if (element.search(x) === -1) return true;
        });
        configuration[1] = configuration[1].filter((x) => {
          if (element.search(x) > -1) return true;
        });
        words[currWord.join("")] = 0;
        input[index] = "";
      }

      //  6
      if (p[2] === 1) {
        configuration[2] = configuration[2].filter((x) => {
          if (element.search(x) === -1) return true;
        });
        configuration[5] = configuration[5].filter((x) => {
          if (element.search(x) > -1) return true;
        });
        words[currWord.join("")] = 6;
        input[index] = "";
      }

      // 9
      if (p[4] === 1) {
        configuration[4] = configuration[4].filter((x) => {
          if (element.search(x) === -1) return true;
        });
        configuration[6] = configuration[6].filter((x) => {
          if (element.search(x) > -1) return true;
        });
        words[currWord.join("")] = 9;
        input[index] = "";
      }
    }
  }

  for (const [index, element] of input.entries()) {
    if (element.length === 5) {
      let two = Array.from(
        configuration[0] +
          configuration[2] +
          configuration[3] +
          configuration[4] +
          configuration[6]
      )
        .sort()
        .join("");
      let three = Array.from(
        configuration[0] +
          configuration[2] +
          configuration[3] +
          configuration[5] +
          configuration[6]
      )
        .sort()
        .join("");
      let five = Array.from(
        configuration[0] +
          configuration[1] +
          configuration[3] +
          configuration[5] +
          configuration[6]
      )
        .sort()
        .join("");

      words[two] = 2;
      words[three] = 3;
      words[five] = 5;
    }
  }

  // console.log(words);

  const print = `
      ${configuration[0]}
    ${configuration[1]}  ${configuration[2]}
      ${configuration[3]}
    ${configuration[4]}  ${configuration[5]}
      ${configuration[6]}
    `;

  // console.log(print);

  const sum = outputPatterns.reduce((acc, cur) => {
    const lookupWord = Array.from(cur).sort().join("");
    return acc += `${words[lookupWord]}`;
  }, '');

  return parseInt(sum);
};

const totalSum = input.map(_ => getConfiguration(_)).reduce((acc, curr) => acc + curr);

console.log(totalSum);


// const readFile = require("fs").readFileSync;
// const count = readFile("input.txt", "utf-8")
//   .split("\n")
//   .map((_) => _.split(" | "))
//   .reduce(
//     (configuration, [uniqueSignalPattern, outputValue]) =>
//       configuration +
//       outputValue
//         .split(" ")
//         .reduce(
//           (configuration, curr) =>
//             curr.length === 2 ||
//             curr.length === 3 ||
//             curr.length === 4 ||
//             curr.length === 7
//               ? configuration + 1
//               : configuration,
//           0
//         ),
//     0
//   );

// let count = 0;
// for (const entry of entries) {
//     [uniqueSignalPattern, outputValue] = entry;

//     count += outputValue.split(" ").reduce((configuration, curr) => {
//         if (curr.length === 2 || curr.length === 3 || curr.length === 4 || curr.length === 7) {
//             return configuration + 1;
//         }

//         return configuration;
//     }, 0);

// }

// console.log(count);
