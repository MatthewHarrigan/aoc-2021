// let fishes = '3,4,3,1,2'.split(',');
let fishes = "3,4,3,1,2".split(",").map((x) => parseInt(x));
// let fishes = '5,4,3,5,1,1,2,1,2,1,3,2,3,4,5,1,2,4,3,2,5,1,4,2,1,1,2,5,4,4,4,1,5,4,5,2,1,2,5,5,4,1,3,1,4,2,4,2,5,1,3,5,3,2,3,1,1,4,5,2,4,3,1,5,5,1,3,1,3,2,2,4,1,3,4,3,3,4,1,3,4,3,4,5,2,1,1,1,4,5,5,1,1,3,2,4,1,2,2,2,4,1,2,5,5,1,4,5,2,4,2,1,5,4,1,3,4,1,2,3,1,5,1,3,4,5,4,1,4,3,3,3,5,5,1,1,5,1,5,5,1,5,2,1,5,1,2,3,5,5,1,3,3,1,5,3,4,3,4,3,2,5,2,1,2,5,1,1,1,1,5,1,1,4,3,3,5,1,1,1,4,4,1,3,3,5,5,4,3,2,1,2,2,3,4,1,5,4,3,1,1,5,1,4,2,3,2,2,3,4,1,3,4,1,4,3,4,3,1,3,3,1,1,4,1,1,1,4,5,3,1,1,2,5,2,5,1,5,3,3,1,3,5,5,1,5,4,3,1,5,1,1,5,5,1,1,2,5,5,5,1,1,3,2,2,3,4,5,5,2,5,4,2,1,5,1,4,4,5,4,4,1,2,1,1,2,3,5,5,1,3,1,4,2,3,3,1,4,1,1'.split(',');
let day = 0;
const MAX_DAYS = 256;

// function run(fishes, day) {

//     if (day === MAX_DAYS){
//         console.log(day, fishes.join(','), fishes.length )

//     }

//     let currNewFishes = [];
//     for ([index, timer] of fishes.entries()) {
//         if (timer === 0) {
//             fishes[index] = 7;
//             currNewFishes.push(8)
//         }
//         if (timer >= 0) {
//             fishes[index]--;
//         }
//     }
//     if (currNewFishes.length > 0) {
//         fishes = [...fishes, ...currNewFishes];
//     }

//  if (day < MAX_DAYS){
//         day++;
//         return run(fishes, day);
//     }
// }

// run(fishes, day)

let count = 0;
let register = {};

for (let day = 0; day < MAX_DAYS ; day++) {
//   console.log(day, fishes.join(","), fishes.length);

  for (let i = 0; i < fishes.length; i++) {
    fishes[i]--;
    if (fishes[i] === -1) {
    //   fishes[i] = '6';
      fishes.splice(i, 1);

      if (register.hasOwnProperty(day)) {
        register[day] += 1;
      } else {
        register[day] = 1;
      }

      // fishes.push(9);
    }
  }

//   console.log(register)

  for (let key in register) {
    if ((day + key) % 7 === 0) {
      for (let i = 0; i <= register[key]; i++) {
        fishes.push(8);
      }
    }
  }
}

let registerCount = 0;
for (let key in register) {
    registerCount += register[key];
}

console.log(fishes.length+ registerCount);

// console.log(fishes.length);
