const readFile = require("fs").readFileSync;
const input = readFile("input.txt", "utf-8").split("\n");

const grid = input.map((row) => Array.from(row));

const lowestPoints = [];

grid.forEach((row, rIndex) => {
  row.forEach((element, cIndex) => {
    const up = grid[rIndex - 1] ? grid[rIndex - 1][cIndex] : 11;
    const right = grid[rIndex][cIndex + 1] ? grid[rIndex][cIndex + 1] : 11;
    const down = grid[rIndex + 1] ? grid[rIndex + 1][cIndex] : 11;
    const left = grid[rIndex][cIndex - 1] ? grid[rIndex][cIndex - 1] : 11;

    if (element < up && element < right && element < down && element < left) {
      lowestPoints.push(`${rIndex},${cIndex}`);
    }
  });
});

function search(start) {
  const queue = [];
  queue.push(start);

  const visited = [];
  visited.push(start);

  // BFS
  while (queue.length > 0) {
    const currElement = queue.shift();

    let [rIndex, cIndex] = currElement.split(",").map((_) => parseInt(_));

    // up
    if (grid[rIndex - 1] && grid[rIndex - 1][cIndex] < 9) {
      let key = [rIndex - 1, cIndex].join(",");
      if (!visited.includes(key)) {
        queue.push(key);
        visited.push(key);
      }
    }

    //right
    if (grid[rIndex][cIndex + 1] && grid[rIndex][cIndex + 1] < 9) {
      let key = [rIndex, cIndex + 1].join(",");
      if (!visited.includes(key)) {
        queue.push(key);
        visited.push(key);
      }
    }

    // down
    if (grid[rIndex + 1] && grid[rIndex + 1][cIndex] < 9) {
      let key = [rIndex + 1, cIndex].join(",");
      if (!visited.includes(key)) {
        queue.push(key);
        visited.push(key);
      }
    }

    // left
    if (grid[rIndex][cIndex - 1] && grid[rIndex][cIndex - 1] < 9) {
      let key = [rIndex, cIndex - 1].join(",");
      if (!visited.includes(key)) {
        queue.push(key);
        visited.push(key);
      }
    }
  }

  return visited.length;
}

const result = lowestPoints.map(_ => search(_)).sort((a, b) => b - a).splice(0, 3).reduce((acc, cur) => acc * cur);

console.log(result)
