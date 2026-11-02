# Tutor: Door status

Her question: "What is a literal type, and how does it catch typos?"

## Ladder

- "In guess-the-type, `const max = 5` had a strange type. What was it?"
- "Can a type be one exact text? Can a union hold two exact texts?"

## Typical mistakes

- Fixes the typo only. Ask: what stops `"opne"` next time?
- Type `string`. Ask: does `"opne"` fit a string?
- Types `"open" | "close"`. Ask her to read the task line again.

## What if

- Set status to `"OPEN"`. What does `npx tsc` say?
- Name the type `Status` and use it on two variables.

## Tips

- Teams use literal unions for states: `"loading" | "done" | "error"`.

## Links

- Literal types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
