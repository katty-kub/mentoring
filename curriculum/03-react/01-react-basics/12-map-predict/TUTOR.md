# Tutor: Map predict

Her question: "What does `.map` do with the arrow function you give it?"

## Ladder

- "Read the example line 0. What goes into `n` the first time? The second time?"
- "Say `(price) => price * 2` in Czech: what goes in, what comes out?"
- "In data-types you went through a list with a loop. What would your loop do with `prices`?"

## Typical mistakes

- Runs it first. Tips go in before she opens the page.
- Line 3: guesses a sum, or 4. Ask: does map add or remove items? What does `.length` count?
- Line 4: thinks `prices` changed after line 1 and 3. Ask: did any line assign to `prices`?
- Line 5: starts the index at 1. Ask her to run `console.log(["a", "b"].indexOf("a"))` in `node`.
- Line 6: no idea what `key` is. Fine: it returns in render-list. Ask what the page shows.

## What if

- Change line 1 to `prices.map((price) => price > 50)`. Tip first.
- Remove `.join(", ")` from line 2. What shows? Remember line 8 in jsx-predict?

## Tips

- `map` makes a new array of the same length. The old array stays as it was.
- `(x) => x * 2` is a short function: input on the left, returned value on the right.

## Links

- Array map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- Arrow functions: https://javascript.info/arrow-functions-basics
