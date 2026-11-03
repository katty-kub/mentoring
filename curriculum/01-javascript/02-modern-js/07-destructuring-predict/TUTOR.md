# Tutor: destructuring predict

Her question: "How does destructuring know which value goes where?"

## Ladder

- "In an object, how does JS find a value: by position or by name?"
- "In a list, by position or by name? Which one is first?"
- "Is there a color in product? What does JS give you for a value that is not there?"
- "What does `= 0` do, if stock is not there?"

## Typical mistakes

- Running it before guessing. Ask her to write all 4 tips first.
- Third tip: an error. Ask: is it an error, or a missing value? (null-or-undefined)
- Fourth tip: `undefined`. Ask: what is behind the `=`?

## What if

- Write `{ price, name }` instead of `{ name, price }`. Does the output change? And `[second, first]`?
- Add `inStock: false` to product and write `const { inStock = true } = product;`. What prints? Why not true?

## Tips

- Object: by name, order does not matter. List: by position.
- It is short for `const name = product.name;`. One line instead of many.
- React props use it in every component: `({ title }) => …`.

## Links

- Destructuring: https://javascript.info/destructuring-assignment
