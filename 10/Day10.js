const readFile = require("fs").readFileSync;
const input = readFile("input.txt", "utf-8").split("\n");

const pairs = {
  "<": ">",
  "{": "}",
  "(": ")",
  "[": "]",
};

const out = input.map((line) => {
  const stack = [];
  const chars = Array.from(line);
  for (const char of chars) {
    switch (char) {
      case "<":
      case "{":
      case "(":
      case "[":
        stack.push(char);
        break;
      case ">":
      case "}":
      case ")":
      case "]":
        const last = stack.pop();
        if (pairs[last] !== char){
            if (char === ")") {
                return 3;
            } else if (char === "]") {
                return 57;
            } else if (char === "}") {
                return 1197;
            } else if (char === ">") {
                return 25137;
            }
        }
    }
  }
}).filter(_ => _ !== undefined).reduce((acc, cur) => acc + cur );

console.log(out)