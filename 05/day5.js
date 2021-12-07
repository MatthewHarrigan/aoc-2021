const fs = require("fs");

// const data = fs.readFileSync("input.txt", "utf8");
// let input = data.split("\n")

let MAX_X = 1000;
let MAX_Y = 1000;

const values = [];
for (let x = 0; x < MAX_X; x++) {
  let row = [];
  for (let y = 0; y < MAX_Y; y++) {
    row.push(0);
  }
  values.push(row);
}

let input = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`.split("\n");

for (const line of input) {
  const coordinates = line.split(" -> ");
  const start = coordinates[0];
  const end = coordinates[1];
  let x1 = parseInt(start.split(",")[0]);
  let y1 = parseInt(start.split(",")[1]);
  let x2 = parseInt(end.split(",")[0]);
  let y2 = parseInt(end.split(",")[1]);

  // horizontal line left-right
  if (x1 <= x2 && y1 === y2) {
    for (let i = x1; i <= x2; i++) {
      // reverse the asignment for the values table
      values[y1][i] += 1;
    }
  }

  // horizontal right-left
  if (x1 >= x2 && y1 === y2) {
    for (let i = x1; i >= x2; i--) {
      values[y1][i] += 1;
    }
  }

  // vertical line bottom-top
  if (y1 >= y2 && x1 === x2) {
    for (let i = y1; i >= y2; i--) {
      values[i][x2] += 1;
    }
  }

  // vertical line top-bottom
  if (y1 <= y2 && x1 === x2) {
    for (let i = y1; i <= y2; i++) {
      values[i][x1] += 1;
    }
  }
}

// console.table(values);

let count = 0;
for (let x = 0; x < MAX_X; x++) {
  for (let y = 0; y < MAX_Y; y++) {
    if (values[x][y] > 1) {
      count++;
    }
  }
}

console.log(count);
