const readFile = require("fs").readFileSync;
const input = readFile("test-input-2-step.txt", "utf-8");

let grid = input
  .split("\n")
  .map((line) => Array.from(line).map((_) => parseInt(_)));

console.log("starting grid", grid);

for (let step = 0; step < 1; step += 1) {
  // add 1
  for (let row = 0; row < grid.length; row += 1) {
    for (let cell = 0; cell < grid[row].length; cell += 1) {
      if (grid[row][cell] === 9) {
        grid[row][cell] = "f";
      } else {
        grid[row][cell] += 1;
      }
    }
  }

//   console.log(grid) 

  // look for flashes
  let continueSearch = true;
  while (continueSearch) {
    continueSearch = false;

    for (let row = 0; row < grid.length; row += 1) {
      for (let cell = 0; cell < grid[row].length; cell += 1) {
        if (grid[row][cell] !== "f") {

        //   // diag up l
        //   if (
        //     grid[row - 1] &&
        //     grid[row - 1][cell - 1] &&
        //     grid[row - 1][cell - 1] !== "f"
        //   ) {
        //     if (grid[row - 1][cell - 1] + 1 < 10) {
        //       grid[row - 1][cell - 1] += 1;
        //     } else {
        //       grid[row - 1][cell - 1] = 0;
        //       continueSearch = true;
        //     }
        //   }

          // diag down r

          if (
            grid[row + 1] &&
            grid[row + 1][cell + 1] &&
            grid[row + 1][cell + 1] !== "f"
          ) {
            if (grid[row + 1][cell + 1] + 1 < 10) {
              grid[row + 1][cell + 1] += 1;
            } else {
              grid[row + 1][cell + 1] = 0;
              continueSearch = true;
            }
          }

          // diag up r

          if (
            grid[row - 1] &&
            grid[row - 1][cell + 1] &&
            grid[row - 1][cell + 1] !== "f"
          ) {
            if (grid[row - 1][cell + 1] + 1 < 10) {
              grid[row - 1][cell + 1] += 1;
            } else {
              grid[row - 1][cell + 1] = 0;
              continueSearch = true;
            }
          }

          // diag down l

          if (
            grid[row + 1] &&
            grid[row + 1][cell - 1] &&
            grid[row + 1][cell - 1] !== "f"
          ) {
            if (grid[row + 1][cell - 1] + 1 < 10) {
              grid[row + 1][cell - 1] += 1;
            } else {
              grid[row + 1][cell - 1] = 0;
              continueSearch = true;
            }
          }

          // l

          if (grid[row][cell - 1] && grid[row][cell - 1] !== "f") {
            if (grid[row][cell - 1] + 1 < 10) {
              grid[row][cell - 1] += 1;
            } else {
              grid[row][cell - 1] = 0;
              continueSearch = true;
            }
          }

            // r

          if (grid[row][cell + 1] && grid[row][cell + 1] !== "f") {
            if (grid[row][cell + 1] + 1 < 10) {
              grid[row][cell + 1] += 1;
            } else {
              grid[row][cell + 1] = 0;
              continueSearch = true;
            }
          }

          // u

          if (grid[row - 1] && grid[row - 1][cell] !== "f") {
            if (grid[row - 1][cell] + 1 < 10) {
              grid[row - 1][cell] += 1;
            } else {
              grid[row - 1][cell] = 0;
              continueSearch = true;
            }
          }

          // down

          if (grid[row + 1] && grid[row + 1][cell] !== "f") {
            if (grid[row + 1][cell] + 1 < 10) {
              grid[row + 1][cell] += 1;
            } else {
              grid[row + 1][cell] = 0;
              continueSearch = true;
            }
          }


        }
      }
    }
  }

console.log(grid)

  console.log(grid.map((_) => _.join(" ")).join("\n"));
  console.log();

  //   }

  //   grid = grid.map((row) =>
  //     row.map((cell) => {
  //       if (cell === "f"){
  //         return 0;
  //       } else {
  //           return cell
  //       }
  //     })
  //   );

//   const flashes = grid
//     .map((row) => row.filter((cell) => cell === 0))
//     .filter((row) => row.length > 0)
//     .reduce((acc, cur) => acc + cur.length, 0);

//   console.log(flashes);
}
