// const readFile = require("fs").readFileSync;
// const initial = readFile("input", "utf-8").split(",").map(_ => parseInt(_));


// Copied a solution - this has blown my mind...

const days = 256;
const cycle = 6;
const fishes = Array(cycle + 3).fill(0);

const initial = "5,4,3,5,1,1,2,1,2,1,3,2,3,4,5,1,2,4,3,2,5,1,4,2,1,1,2,5,4,4,4,1,5,4,5,2,1,2,5,5,4,1,3,1,4,2,4,2,5,1,3,5,3,2,3,1,1,4,5,2,4,3,1,5,5,1,3,1,3,2,2,4,1,3,4,3,3,4,1,3,4,3,4,5,2,1,1,1,4,5,5,1,1,3,2,4,1,2,2,2,4,1,2,5,5,1,4,5,2,4,2,1,5,4,1,3,4,1,2,3,1,5,1,3,4,5,4,1,4,3,3,3,5,5,1,1,5,1,5,5,1,5,2,1,5,1,2,3,5,5,1,3,3,1,5,3,4,3,4,3,2,5,2,1,2,5,1,1,1,1,5,1,1,4,3,3,5,1,1,1,4,4,1,3,3,5,5,4,3,2,1,2,2,3,4,1,5,4,3,1,1,5,1,4,2,3,2,2,3,4,1,3,4,1,4,3,4,3,1,3,3,1,1,4,1,1,1,4,5,3,1,1,2,5,2,5,1,5,3,3,1,3,5,5,1,5,4,3,1,5,1,1,5,5,1,1,2,5,5,5,1,1,3,2,2,3,4,5,5,2,5,4,2,1,5,1,4,4,5,4,4,1,2,1,1,2,3,5,5,1,3,1,4,2,3,3,1,4,1,1".split(",").map(_ => parseInt(_));

initial.forEach(_ => fishes[_]++);

for (let i = 0; i < days; i++) {
    const newFish = fishes[0];
    fishes.push(fishes.shift());
    fishes[cycle] += newFish;
    console.log(fishes.join(","))
}

const sum = fishes.reduce((acc, cur) => acc += cur)

console.log(sum)