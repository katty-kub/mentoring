// Print "invalid" if the input isn't a number. Else print the number.
// "abc" → invalid
// "42"  → 42

const input = "abc";
const number = Number(input);

if (Number.isNaN(number)) {
  console.log("invalid");
} else {
  console.log(number);
}

// node task.js should print: invalid
