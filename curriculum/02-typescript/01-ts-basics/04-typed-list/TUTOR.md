# Tutor: Typed list

Her question: "How do you write the type of an array (pole)?"

## Ladder

- "Hover over `scores`. What type did TS infer? What do you want instead?"
- "In the type, which part says 'list' and which says 'of what'?"

## Typical mistakes

- `Array` or `[]` alone. Ask: a list of what?
- `[number]`. That is one number in a list. Ask her to add a fourth score.
- Fixes the data but adds no type. Ask: what stops `"85"` next time?

## What if

- Add a fourth score `"60"`. What does `npx tsc` say?
- A list of names. What type?

## Tips

- You will also see `Array<number>`. Same thing, longer.

## Links

- Arrays: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
