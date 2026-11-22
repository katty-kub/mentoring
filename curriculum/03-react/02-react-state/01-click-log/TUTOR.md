# Tutor: Click log

First task of react-state. Her first event handler. No state yet.

Her question: "How do I run my code when someone clicks?"

## Ladder

- "Search react.dev: 'responding to events'. Which prop does the button get?"
- "What goes into that prop: a value, or a function?"
- "In callback-predict: `sayHi` or `sayHi()`? Who should call your function, and when?"

## Typical mistakes

- `onClick={console.log("klik")}`. `npx tsc`: `Type 'void' is not assignable to type 'MouseEventHandler…'`.
  It logs when the page loads, not on click. Ask: who ran it? When?
- `onclick` or `onClick="…"`. Read the `tsc` error with her.
- Looks for the log in the terminal. Ask: where does this code run?

## Check

- `npm run print` shows only the first page. It cannot click. She clicks and reads the console out loud.
- The browser console may fold the same line: `klik` with a number next to it.

## What if

- Change the text to `objednáno`. Click again.
- Add a second button, Zrušit. It logs `zrušeno`.

## Tips

- An event handler is a callback: you hand React a function, React calls it on click.
- `onClick={doIt}` hands it over. `onClick={doIt()}` runs it right away.

## Links

- Responding to events: https://react.dev/learn/responding-to-events
