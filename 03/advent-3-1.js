inputs = document.getElementsByTagName("pre")[0].innerHTML.split("\n");

counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (const input of inputs) {
  num = parseInt(input, 2);
  // get one position
  bitmask = 0b1;
  for (let i = 0; i < input.length; i += 1) {
    counts[i] += (num >> i) & bitmask;
  }
}

counts.reverse();
gamma = [];
epsilon = [];

for (const element of counts) {
  if (element >= inputs.length / 2) {
    gamma.push(1);
    epsilon.push(0);
  } else {
    gamma.push(0);
    epsilon.push(1);
  }
}

if (parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2) === 3309596) {
  console.log("correct");
}
