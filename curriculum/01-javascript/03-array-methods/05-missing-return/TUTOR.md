# Tutor: missing return

Fix-the-bug. Higher bar for hints: she reads and prints first.
Two good fixes: add the missing word, or remove the `{ }`. Both are fine. Ask for the second one after the first.

Her question: "Why does my function give `undefined`?"

## Ladder

- "How many items are in the output? So does map run? What does it collect?"
- "Call the function by hand, in your head, for 49. Which value comes out of it?"
- "Compare with your line from price-labels. What is different after the `=>`?"
- "In modern-js capstone: what did a function with `{ }` need, to give something back?"

## Typical mistakes

- Adds `console.log` inside the function. Prints three labels, then still `[ undefined, … ]`.
  Ask: does printing a value give it back?
- Changes `map` to `forEach`. Prints `undefined`. Ask: what does forEach give back?
- Wraps the template in `( )` but keeps `{ }`. Still undefined. Ask: what does `{` mean after `=>`?
- Rewrites it with a loop. Ask: can you fix it by changing one line?

## What if

- Fix it the other way too. Which one do you like more for a one-line function?
- When do you need `{ }`? Write a function with two lines inside.
- Change map to filter, keep the bug. What prints? Why is it empty?

## Tips

- `=> value` gives the value back. `=> { … }` gives back only what you `return`.
- A function without `return` gives `undefined`. No error, so the bug is quiet.
- This is the most common map bug in React: the list is empty and nothing warns you.

## Links

- Arrow function body: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body
