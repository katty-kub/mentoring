# Tutor: find predict

First task with an array of objects. She knows objects from modern-js.

Her question: "What does `find` give back: an item or an array?"

## Ladder

- "find stops at the first yes. Go item by item: where does it stop?"
- "1st and 2nd line use the same function. One gives an item, one gives an array. Which is which?"
- "3rd line: no price is over 100. Which value means 'nothing here'?" (null-or-undefined)
- "5th line: first read only `products.find(…)`. What is it? Then what does `.name` take from it?"

## Typical mistakes

- Running it before guessing. Ask her to write all 6 tips first.
- 1st tip: `[ 49, 45 ]` or `[ 49 ]`. Ask: is there a `[ ]` in the example on line 3?
- 3rd or 6th tip: `[]`, `null` or an error. Ask: what did filter give for no match? And find?
- 4th tip: only `Tea`. Ask: is there a `.name` on that line?
- 5th tip: `Cake`, "49 is in the 1st line". Ask: which product under 50 comes first in products?

## What if

- `console.log(products.find((product) => product.id === 9).name)`. Tip first. Do not run it yet: next tasks.
- `console.log(products.filter((product) => product.id === 2))`. How is it different from the 4th line?
- Move Cake to the top of products. Which line changes?

## Tips

- filter: all matches, always an array. find: the first match, or `undefined`.
- Use find when you look for one thing, mostly by id.

## Links

- find: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
