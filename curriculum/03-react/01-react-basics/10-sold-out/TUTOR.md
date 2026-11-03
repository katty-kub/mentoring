# Tutor: Sold out

Her question: "How do you show one thing or another in JSX?"

## Ladder

- "Say it in Czech first: when is it Vyprodáno, when the count?"
- "Can you write `if` inside `{}`? What did `{}` accept in jsx-predict?"
- "`Stock` gives back `( … )` straight away. Where could a normal `if` go?"
- "In optional-prop, `Avatar` had `{ … }` after `=>`. What did it do before `return`?"

## Typical mistakes

- Puts `if` inside JSX braces. Read the error with her: `{}` takes an expression.
- Puts `if` inside `( … )` after `=>`. `npx tsc`: `Expression expected`. Ask: where did `Avatar` keep `const circle`?
- `{count === 0 && "Vyprodáno"}` alone. Page shows "Vyprodáno 0 ks". Ask what shows when.
- Uses `count == 0`. Ask: what did you learn about `===` in data-types?
- `{ }` body with `if` and two `return`s is a fine answer. So is `? :`. Ask her why she picked hers.

## What if

- `count` is 1. Show "Poslední kus!".
- Make the Vyprodáno text grey.

## Tips

- In JSX: `a ? b : c` for one or the other, `a && b` for something or nothing.
- With a `{ }` body after `=>`, plain `if` goes above `return`. Pick what reads best.

## Links

- Conditional rendering: https://react.dev/learn/conditional-rendering
