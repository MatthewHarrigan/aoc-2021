const readline = require("readline");
const fs = require("fs");

const readInterface = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  output: process.stdout,
  terminal: false,
});

let boards = [];
let board = [];
let draw = [];
readInterface
  .on("line", function (line) {
    // on first line get the draw numbers
    if (draw.length === 0) {
      draw = line.split(",").map((x) => parseInt(x));
      return;
    }

    if (line === "" && board.length > 0) {
      boards.push(board);
      board = [];
      return;
    } else {
      const row = line
        .split(" ")
        ?.filter((x) => x != "")
        .map((x) => [parseInt(x), false]);
      if (row.length > 0) board.push(row);
    }
  })
  .on("close", () => {
    boards.push(board);
    run(draw, boards);
  });

function run(draw, boards) {
  let foundBoard = "";
  let winningNumber = "";
  let foundIndex = 0;

  for (const number of draw) {
    for (const board of boards) {
      for (row of board) {
        for (cell of row) {
          if (number === cell[0]) {
            cell[1] = true;
          }
        }
      }
    }

    // search rows
    for (const [index, board] of boards.entries()) {
      let found = 0;

      for (const row of board) {
        let num = "";
        for (cell of row) {
          if (cell[1]) {
            found += 1;
            num = draw;
          }
        }
        if (found === 5) {
          foundBoard = board;
          foundIndex = index;
          break;
        }
        found = 0;
      }
      if (foundBoard) {
        break;
      }
    }

    if (foundBoard) {
      winningNumber = number;
      break;
    }

    found = 0;

    // search columns
    for (const [index, board] of boards.entries()) {
      let num = "";
      for (let column = 0; column < 5; column += 1) {
        found = 0;
        for (let row = 0; row < board.length; row += 1) {
          const cell = board[row][column];
          if (cell[1]) {
            found++;
            num = cell[0];
          }
          if (found === 5) {
            foundBoard = board;
            foundIndex = index;
            winningNumber = num;
            break;
          }
        }
      }
    }

    if (foundBoard) {
      winningNumber = number;
      break;
    }
  }



  if (foundBoard) {
    console.log("winning Number", winningNumber);
    console.log('index of winning board', foundIndex)
    console.log(foundBoard);

    let sum = 0;
    for (row of foundBoard) {
      sum += row.reduce((previousValue, currentElement) => {
        return !currentElement[1]
          ? previousValue + parseInt(currentElement[0])
          : previousValue;
      }, 0);
    }
    console.log(`sum * winningNumber = ${sum * winningNumber}`);

    boards.splice(foundIndex, 1);
    // recursion to the day 2 rescue!
    run(draw, boards);
  }

//   for (const board of boards) {
//     for (row of board) {
//       const out = row.map((x) => (x[1] ? x[0] + "" : x[0]));
//       console.log(out);
//     }
//     console.log("\n");
//   }
}
