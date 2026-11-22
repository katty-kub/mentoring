# Tutor: Show note

State with `true`/`false`, plus a condition in JSX from sold-out.

Her question: "How do I show and hide a part of the page?"

## Ladder

- "What does the component have to remember? How many values can it be?"
- "In sold-out you showed something only sometimes. How?"
- "The second click hides it. What is the next value, if you know the value now?"

## Typical mistakes

- Sets `true` on click. Opens, never closes. Ask: what should the second click set?
- State with text `"open"` / `"closed"`. Works. Ask: which type has exactly two values?
- Hides the note with an empty text in `<p>`. Ask: is the `<p>` still on the page? (`npm run print`)

## What if

- Change the button text: `Skrýt` when the note is open.
- Start with the note open. Which one place do you change?

## Tips

- State holds the fact (open or not). The JSX decides what to show from it.
- `!open` flips true and false.

## Links

- Conditional rendering: https://react.dev/learn/conditional-rendering
