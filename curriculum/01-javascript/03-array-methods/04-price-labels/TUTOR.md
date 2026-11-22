# Tutor: price labels

Her first own `map`.

Her question: "How do I make a new array from an old one, item by item?"

## Ladder

- "What goes in, what comes out? How many items in, how many out?"
- "In map-predict, which line had the same count in and out?"
- "Take one price: 49. Which text do you want from it? Write only that part first."
- "Where does that part go, so it runs for each price?"

## Typical mistakes

- `prices + " CZK"`. Prints `49,65,45 CZK`. Ask: one label or three?
- `price + "CZK"`. Prints `'49CZK'`. Ask her to compare with the expected line, letter by letter.
- `forEach` with `push` into an empty array. Works. Ask: which method builds the new array for you?
- `console.log(prices.forEach(…))`. Prints `undefined`. Ask: what does forEach give back? (for-each)
- `{ }` after `=>` and no `return`. Prints `[ undefined, undefined, undefined ]`.
  Ask: what does your function give back? Do not explain more: missing-return is next.
- Writes the three labels by hand. Ask: what if there are 100 prices?

## What if

- Print prices after your code. Did it change?
- The shop wants `49,- Kč`. How many places do you change?
- Add the position: `1. 49 CZK`. Which second input does map give you?

## Tips

- Think about one item first. map does the rest.
- Template literal or `+`: both are fine here.

## Links

- map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
