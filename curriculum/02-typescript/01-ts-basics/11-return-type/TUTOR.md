# Tutor: Return type

Her question: "Where does a function's return type come from?"

## Ladder

- "Look at each `return`. What type is the value after it?"
- "cleanPhone has two returns. What does each one give back?"

## Typical mistakes

- Guesses `string` for cleanPhone. Ask her to read both returns.
- Guesses from the name (`isAdult` → `number`). Ask what `>=` gives.
- Hovers first. Guesses go in before any hovering.

## What if

- Write `: string` after cleanPhone's `()`. What does `npx tsc` say?

## Tips

- Writing the return type is optional. Teams write it on functions other files use.
- `string | undefined` again: whoever calls cleanPhone must check it (no-phone).

## Links

- Functions: https://www.typescriptlang.org/docs/handbook/2/functions.html
