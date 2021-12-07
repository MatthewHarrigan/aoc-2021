const fs = require("fs");

const data = fs.readFileSync("input", "utf8");

// Part one

// const inputs = data.split("\n");

// let horizontal = 0;
// let depth = 0;
// let aim = 0;

// for(position of inputs) {
//   const direction = position.split(' ')[0];
//   const distance = parseInt(position.split(' ')[1]);

//   switch(direction){
//     case 'down':
//       depth += distance;
//       aim += distance;
//       break;
//     case 'up':
//       depth -= distance;
//       aim -= distance;
//       break;
//     case 'forward':
//       horizontal += distance;
//       depth += aim * distance;
//       break;
//   }
// }

// console.log(horizontal*depth);

// Part two

const inputs = data.split("\n");
// const inputs = `forward 5
// down 5
// forward 8
// up 3
// down 8
// forward 2`.split("\n");

let horizontal = 0;
let depth = 0;
let aim = 0;

for (position of inputs) {
  const direction = position.split(" ")[0];
  const distance = parseInt(position.split(" ")[1]);

  switch (direction) {
    case "down":
      aim += distance;
      break;
    case "up":
      aim -= distance;
      break;
    case "forward":
      horizontal += distance;
      depth += aim * distance;
      break;
  }
}

console.log(horizontal * depth);
