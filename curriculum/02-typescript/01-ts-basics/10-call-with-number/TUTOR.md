# Tutor: Call with number

Her question: "What do parameter types protect?"

## Ladder

- "Read the function's first line. What does it want for `price`? What do you have?"
- "In data-types you turned text into a number. Which way did you like?"

## Typical mistakes

- Changes `addVat` to take a string. Ask: whose job is it to clean form data?
- Pastes `100` by hand. Ask: what if the form sends `"250"` tomorrow?
- `parseInt` vs `Number`. Both pass here. Ask about `"100abc"` (data-types: number-or-parseint).

## What if

- Call `addVat(100)` with one argument. What does `npx tsc` say?
- Set input to `"abc"`. What prints? Does TS catch it? Why not?

## Tips

- Types check the code, not the data at runtime. Text from users still needs checking.

## Links

- Functions: https://www.typescriptlang.org/docs/handbook/2/functions.html
