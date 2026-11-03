# Tutor: arrow function

Her question: "What is an arrow function, and why do teams write it?"

## Ladder

- "What goes into `text` when line `printPrice("Coffee", …)` runs? What does `return` give back?"
- If her trim-greeting has `const sayHello = () => {`: "What is the same here? What is different?"
- "Where do the parameters go? Where does the arrow go?"
- "Run it after each function. Same output?"
- "Is the word `function` still anywhere in the code?"

## Typical mistakes

- Keeps the word `function` in the new line. SyntaxError. Ask her to read the line out loud.
- Puts the arrow before the parameters. Ask: what comes first, the input or the arrow?
- Forgets `;` after `}`. It still runs. Ask: where does a `const` line end?
- Deletes `return` inside `{ }`. Prints `Coffee: undefined CZK`. Ask: what does the function give back?

## What if

- Move the two `printPrice(...)` lines above the functions. Tip first, then run.
  `Cannot access 'printPrice' before initialization`. Ask: where must a `const` stand?
  Move them back. Don't ask her to rewrite her code back to `function`.
- Write `toNumber = 5;` right under the `const toNumber` line. Tip first, then run.
  `Assignment to constant variable.` points at that line. Ask: what does `const` protect?
- toNumber only returns. Write it on one line, without `{ }` and `return`. Same output?

## Tips

- Shorter: a one-line function needs no `{ }` and no `return`: `(n) => n * 2`.
- `const` protects the name. Nobody overwrites the function by mistake.
- You define it before you use it. The code reads top to bottom.
- You meet them everywhere: `.map((n) => n * 2)`, React components `const Task = () => …`.
- `function` is not wrong. A team picks one style. This repo picks arrow functions.
- Don't bring up `this`. It matters later, with classes.

## Links

- Arrow functions: https://javascript.info/arrow-functions-basics
- MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
