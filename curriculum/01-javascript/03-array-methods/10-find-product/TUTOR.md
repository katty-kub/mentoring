# Tutor: find product

Her first own `find`.

Her question: "How do I get one object out of an array by its id?"

## Ladder

- "Do you want one product or an array of products? Which method gives one?"
- "Take one product. Which question do you ask about it? Which two values do you compare?"
- "Print what you found first. Is it the whole product? What do you need from it?"

## Typical mistakes

- Prints the whole object: `{ id: 2, name: 'Tea', price: 45 }`. Ask her to compare with the expected line.
- `filter(…).name`. Prints `undefined`. Ask: print it without `.name`. Count the `[`.
- `products[wantedId].name`. Prints `Cake`. Ask: is id the same as position? Where does position start?
- `products[wantedId - 1].name`. Prints `Tea`. Ask: what if the ids are 10, 20, 30?
- `product.id = wantedId` with one `=`. Prints `Coffee`. Ask: what does one `=` do? Print products after it.
- `product.id === 2`. Ask: what if wantedId changes?

## What if

- Change wantedId to 3. Do you change your code?
- Change wantedId to 9. Tip first, then run it. Read the error. (The next task fixes it.)
- Print `Tea: 45 CZK`. Can you use destructuring?

## Tips

- "Find by id" is one of the most common lines in any app: a product page, a user, an order.
- Compare with `===`. One `=` writes a value.

## Links

- find: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
