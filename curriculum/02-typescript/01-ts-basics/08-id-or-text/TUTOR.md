# Tutor: Id or text

Her question: "What is a union type (`|`)?"

## Ladder

- "Read the error. What type does orderId have, and what are you putting in?"
- "Can a type say 'this or that'? Look in Links for the word union."

## Typical mistakes

- Changes the type to `string` and makes 1042 text. Ask: does the old system still send numbers?
- Makes a new variable. Ask: is it still the same order id?

## What if

- Call `orderId.toUpperCase()`. What does `npx tsc` say? Why? (narrowing again)

## Tips

- A union is honest about messy data. You'll check which one it is before using it.

## Links

- Union types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
