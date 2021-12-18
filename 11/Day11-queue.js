const readFile = require("fs").readFileSync;
const input = readFile("input.txt", "utf-8");

let queue = [];
let flashed = [];
const queuePush = (row, cell) => {
  flashed.push(`${row},${cell}`);
  queue.push(`${row},${cell}`);
};

let grid = input
  .split("\n")
  .map((line) => Array.from(line).map((_) => parseInt(_)));

console.log("Starting grid\n", grid.map((_) => _.join(" ")).join("\n"), "\n");

let countFlashes = 0;

for (let step = 0; step < 100; step += 1) {
  queue = [];
  flashed = [];

  // add 1
  for (let row = 0; row < grid.length; row += 1) {
    for (let cell = 0; cell < grid[row].length; cell += 1) {
      if (grid[row][cell] >= 9) {
        grid[row][cell] = 0;
        queuePush(row, cell);
      } else {
        grid[row][cell] += 1;
      }
    }
  }

  // for (let row = 0; row < grid.length; row += 1) {
  //   for (let cell = 0; cell < grid[row].length; cell += 1) {
  //     if (grid[row][cell] > 9) {
  //       //   grid[row][cell] = 0;
  //       queuePush(row, cell);
  //       // } else {
  //       // grid[row][cell] += 1;
  //       // }
  //     }
  //   }
  // }

  // console.log("+1\n", grid.map((_) => _.join(" ")).join("\n"), "\n");
  // console.log("queue after adding +1", queue);

  while (queue.length > 0) {
    // console.log("+1\n", grid.map((_) => _.join(" ")).join("\n"), "\n");

    const [row, cell] = queue
      .shift()
      .split(",")
      .map((_) => parseInt(_));

    let key = "";

    // console.log("shift from the queue", queue, row, cell);
    // diag up l
    if (
      !flashed.includes(`${row - 1},${cell - 1}`) &&
      grid[row - 1] &&
      grid[row - 1][cell - 1]
    ) {
      if (grid[row - 1][cell - 1] + 1 < 10) {
        grid[row - 1][cell - 1] += 1;
      } else {
        grid[row - 1][cell - 1] = 0;
        queuePush(row - 1, cell - 1);
      }
    }

    // diag down r

    if (
      !flashed.includes(`${row + 1},${cell + 1}`) &&
      grid[row + 1] &&
      grid[row + 1][cell + 1]
    ) {
      if (grid[row + 1][cell + 1] + 1 < 10) {
        grid[row + 1][cell + 1] += 1;
      } else {
        grid[row + 1][cell + 1] = 0;
        queuePush(row + 1, cell + 1);
      }
    }

    // diag up r

    if (
      !flashed.includes(`${row - 1},${cell + 1}`) &&
      grid[row - 1] &&
      grid[row - 1][cell + 1]
    ) {
      if (grid[row - 1][cell + 1] + 1 < 10) {
        grid[row - 1][cell + 1] += 1;
      } else {
        grid[row - 1][cell + 1] = 0;
        queuePush(row - 1, cell + 1);
      }
    }

    // diag down l

    if (
      !flashed.includes(`${row + 1},${cell - 1}`) &&
      grid[row + 1] &&
      grid[row + 1][cell - 1]
    ) {
      if (grid[row + 1][cell - 1] + 1 < 10) {
        grid[row + 1][cell - 1] += 1;
      } else {
        grid[row + 1][cell - 1] = 0;
        queuePush(row + 1, cell - 1);
      }
    }

    // l

    if (!flashed.includes(`${row},${cell - 1}`) && grid[row][cell - 1]) {
      if (grid[row][cell - 1] + 1 < 10) {
        grid[row][cell - 1] += 1;
      } else {
        grid[row][cell - 1] = 0;
        queuePush(row, cell - 1);
      }
    }

    // r

    if (!flashed.includes(`${row},${cell + 1}`) && grid[row][cell + 1]) {
      if (grid[row][cell + 1] + 1 < 10) {
        grid[row][cell + 1] += 1;
      } else {
        grid[row][cell + 1] = 0;
        queuePush(row, cell + 1);
      }
    }

    // u

    if (!flashed.includes(`${row - 1},${cell}`) && grid[row - 1]) {
      if (grid[row - 1][cell] + 1 < 10) {
        grid[row - 1][cell] += 1;
      } else {
        grid[row - 1][cell] = 0;
        queuePush(row - 1, cell);
      }
    }

    // down

    if (!flashed.includes(`${row + 1},${cell}`) && grid[row + 1]) {
      if (grid[row + 1][cell] + 1 < 10) {
        grid[row + 1][cell] += 1;
      } else {
        grid[row + 1][cell] = 0;
        queuePush(row + 1, cell);
      }
    }
    // console.log(queue);
  }

  console.log(step + 1)
  console.log(grid.map((_) => _.join(" ")).join("\n"), "\n");

  countFlashes += flashed.length
}

console.log(countFlashes)