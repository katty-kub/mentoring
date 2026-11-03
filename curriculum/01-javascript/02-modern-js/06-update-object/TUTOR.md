# Tutor: update object

Her question: "How do I change one value and keep the old object?"

## Ladder

- "In object-spread-predict, which line changed city? Did user change?"
- "You need a new object. What do you write first? What goes inside?"
- "Does price come before `...product` or after it? Which one wins?"

## Typical mistakes

- `product.price = 49`. Changes the old one. The last line prints 49. Ask: what does it print?
- `{ price: 49, ...product }`. Prints price 45. Ask: left to right, which price wins?
- `{ product, price: 49 }`. Prints an object in an object. Ask: what does `...` do here?
- Writes the new object by hand. Ask: what if product has 10 fields?

## What if

- The product gets a new field: `inStock: true`. Do you need to change your line?
- Change name and price at once. Still one object?

## Tips

- You don't list every field. `...` brings the rest along, also fields added later.
- This is how React state changes: always a new object, never a changed one.

## Links

- Spread in object literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
