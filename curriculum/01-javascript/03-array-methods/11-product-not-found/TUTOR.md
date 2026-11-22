# Tutor: product not found

Modify. She breaks it first, on purpose: wantedId 9 crashes with
`TypeError: Cannot read properties of undefined (reading 'name')`. Let her read the error herself.
Any fix is fine if both ids work. Check both: wantedId 9 and wantedId 2.

Her question: "What do I do when `find` finds nothing?"

## Ladder

- "Read the error out loud. Which word is before `(reading 'name')`? Which name in the code holds that value?"
- "Print product on its own line, above the crash. What is it for id 9? And for id 2?"
- "You have two cases now. What do you use when the code should do one thing or another?"
- "How did you check for this value in null-or-undefined?"

## Typical mistakes

- `if (wantedId === 9)`. Works for 9. Ask her to try 7.
- `if (product.name === undefined)`. Still crashes. Ask: which part is undefined: product or its name?
- `if` without `else`: prints `not found`, then crashes. Ask: which lines run when product is missing?
- Adds a product with id 9. Ask: is that product on the menu?
- Finds `product?.name`. Prints `undefined`, no crash. Ask: is that what a guest should see?
- Fixes 9 and never tries 2 again. Ask her to run both.

## What if

- Use filter in place of find, with id 9. Does `.name` crash? What prints? Is that better or worse?
- Print `not found: 9`, with the id she looked for.
- What prints for `wantedId = "2"`? Why?

## Tips

- find gives `undefined` for no match. Check before you read from the result.
- This error is the most common one in JavaScript. Read it from the end: reading what, of what.
- TypeScript will warn you about this line before you run it.

## Links

- find, return value: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#return_value
