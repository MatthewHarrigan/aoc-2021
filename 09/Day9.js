const readFile = require("fs").readFileSync;
const input = readFile("input.txt", "utf-8").split("\n");

const grid = input.map((row) => Array.from(row));

const results = [];

grid.forEach((row, rIndex) => {
  row.forEach((element, cIndex) => {
    const up = grid[rIndex - 1] ? grid[rIndex - 1][cIndex] : 11;
    const right = grid[rIndex][cIndex + 1] ? grid[rIndex][cIndex + 1] : 11;
    const down = grid[rIndex + 1] ? grid[rIndex + 1][cIndex] : 11;
    const left = grid[rIndex][cIndex - 1] ? grid[rIndex][cIndex - 1] : 11;

    if (element < up && element < right && element < down && element < left) {
        results.push(parseInt(element ));
    }

  });
});

console.log(results.map(x => x + 1).reduce((acc, cur) => acc + cur));
