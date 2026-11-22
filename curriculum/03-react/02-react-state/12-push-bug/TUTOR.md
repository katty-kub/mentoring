# Tutor: Push bug

Fix-the-bug. The same bug as copy-bug in modern-js, now with a visible price: the page stays still.

Her question: "Why does React not see my `push`?"

## Ladder

- "Add `console.log(tables)` after the push. Click. Does the array grow?"
- "Before the click and after the click: is `tables` a new array, or the same one?"
- "How did you fix copy-bug? What does React need, to know something changed?"

## Typical mistakes

- Keeps `push` and then sets `[...tables]`. Works on the page. Ask: did the old array change? Is that needed?
- Removes `setTables`. Ask: who tells React to render again?
- Rewrites the list as numbers in state. Ask: can you fix it in the two lines of the click?

## Check

- She clicked, then saved the file: the pushed tables show up at once. The save made React render again.
  Ask: where were they until now? Then reload the page for a clean start.

## What if

- After your fix: add `console.log(tables.length)` as the last line of the click. Tip first.
- Add the new table at the start.

## Tips

- React compares the old state and the new one. Same array = "nothing changed", no render.
- `push`, `sort`, `splice` change the array in place. For state use spread, `map`, `filter`.

## Links

- Updating arrays in state: https://react.dev/learn/updating-arrays-in-state
