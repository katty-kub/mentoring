# Tutor: Stale length

Fix-the-bug. Two states for one fact. The good fix removes one of them.
Adding `setLength(0)` to the button passes too. Then ask the first What if.

Her question: "Which values belong in state, and which can I work out?"

## Ladder

- "Which line sets `length`? Does the Smazat button run it?"
- "If you know `text`, do you know the length? Do you need to remember it?"
- "How many `useState` lines does this component really need?"

## Typical mistakes

- Adds `setLength(0)` to Smazat. Works. Ask: add a button that sets the text to `Ahoj`. How many places now?
- Removes the length line from the page. Ask her to read `stránka má ukázat`.
- Keeps `length` in state and sets it in more places. Ask: can it ever be different from `text.length`?

## What if

- Add a button Pozdrav. It sets the text to `Ahoj`. Does Znaků follow without more code?
- Show `Moc dlouhé` when the text has more than 10 letters. New state, or not?

## Tips

- If you can work a value out from state or props, do not put it in state. Work it out in the render.
- Two states that must always agree will one day disagree.

## Links

- Avoid redundant state: https://react.dev/learn/choosing-the-state-structure#avoid-redundant-state
