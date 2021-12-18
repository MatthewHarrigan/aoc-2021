const readFile = require("fs").readFileSync;
const input = readFile("input.txt", "utf-8").split("\n");

// const input = ["[({(<(())[]>[[{[]{<()<>>"];
const pairs = {
  "<": ">",
  "{": "}",
  "(": ")",
  "[": "]",
};

const out = input
  .filter((line) => {
    const stack = [];
    const chars = Array.from(line);
    let ok = true;
    for (const char of chars) {
      if (char === "<" || char === "{" || char === "(" || char === "[") {
        stack.push(char);
      } else if (char === ">" || char === "}" || char === ")" || char === "]") {
        const last = stack.pop();
        if (pairs[last] !== char) {
          ok = false;
        }
      }
    }
    return ok;
  })
  .map((line) => {
    const stack = [];
    const chars = Array.from(line);
    for (const char of chars) {
      if (char === "<" || char === "{" || char === "(" || char === "[") {
        stack.push(char);
      }
      if (char === ">" || char === "}" || char === ")" || char === "]") {
        stack.pop();
      }
    }
    return stack
      .reverse()
      .map((_) => pairs[_])
      .join("");
  })
  .map((completion) => {
    return Array.from(completion).reduce((acc, curr) => {
      acc = acc * 5;
      if (curr === ")") {
        acc += 1;
      }
      if (curr === "]") {
        acc += 2;
      }
      if (curr === "}") {
        acc += 3;
      }
      if (curr === ">") {
        acc += 4;
      }

      return acc;
    }, 0);
  })
  .sort((a, b) => a - b);

console.log(out[Math.round(out.length / 2) - 1]);
