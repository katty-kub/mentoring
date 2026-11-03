# Tutor: copy bug

Fix-the-bug. Higher bar for hints: she reads and prints first.
Her first `push`. If she asks: it adds an item at the end of the list.

Her question: "Why does `=` not copy a list?"

## Ladder

- "Which line adds tea? Which name does it use?"
- "Print `menu === guestCart` before the push. What do you get? What does it mean?"
- "In spread-predict, which line made a new list with the same items?"

## Typical mistakes

- Removes the `push` line. Ask: does the guest still get tea?
- Moves `console.log(menu)` above the push. Output matches, bug stays.
  Ask: what is in menu after the push? Print it at the end.
- Writes `[menu]`. Prints a list in a list. Ask: count the `[`.

## What if

- Add `guestCart.push("juice")` too. Is menu still safe?
- Change `const guestCart` to `let guestCart`. Does it fix the bug? Why not?

## Tips

- `=` gives the same list a second name. Two names, one list.
- `const` stops a new `=`. It does not stop `push`.
- React needs a new list too, not a changed one. Then it knows something changed.

## Links

- Copy an array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array
