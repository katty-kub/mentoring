# Tutor: No phone

Her question: "What is narrowing? Why does TS say 'possibly undefined'?"

## Ladder

- "Read the error. What could `phone` be besides a string?"
- "You know `if` from data-types. What do you check before you call `.trim()`?"

## Typical mistakes

- Adds `!` because a site said so. Ask what it does. It silences TS, it checks nothing.
- Checks `contact.name`. Ask: which value can be missing?
- Prints `undefined` instead of `no phone`. Ask her to compare with the expected output.

## What if

- Inside the `if`, hover over `contact.phone`. And in the else?
- Give Petr `phone: ""`. What prints? Is that what you want? (data-types: truthy-falsy)

## Tips

- After an `if` check, TS knows more. That is narrowing.
- `!` is a promise to TS, not a check. Code review flags it.

## Links

- Narrowing: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
