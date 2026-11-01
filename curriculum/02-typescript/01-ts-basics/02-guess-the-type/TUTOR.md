# Tutor: Guess the type

Her question: "What is type inference? When do you not need to write a type?"

## Ladder

- "Hover over `count`. Now hover over `max`. What is different between the two lines?"
- "Can `max` ever change? So which values can it hold?"

## Typical mistakes

- Guesses `number` for `max`. Ask: can a `const` get a new value later?
- Guesses `array` for `tags`. Ask what is inside the array.
- `mixed` shows `|`, which she has not met yet. Ask her to read it out loud. It returns in id-or-text.
- Guesses `object` for `user`. Ask her to hover and read the whole popup.
- Runs it first. Guesses go in before any hovering.

## What if

- Change `let count` to `const count`. Hover again.
- Add `tags.push(3)`. What does `npx tsc` say? Why?

## Tips

- Teams let TS infer local variables. They write types where the data comes in.

## Links

- Type inference: https://www.typescriptlang.org/docs/handbook/type-inference.html
- Literal types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
