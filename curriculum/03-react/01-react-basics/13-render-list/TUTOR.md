# Tutor: Render list

Her question: "How do you show a list in React, and why does each item need a `key`?"

## Ladder

- "In map-predict, what did line 6 show? Which part made the `<li>` tags?"
- "You need one `<li>` per product. What goes into the arrow function, what comes out?"
- "Read the console warning out loud. What does each `<li>` miss?"
- "Which field is different for every product and never changes?"

## Typical mistakes

- Writes four `<li>` by hand. Ask: the menu gets 40 products tomorrow?
- `forEach` instead of `map`. `npx tsc`: `Type 'void' is not assignable`. Ask: what does it return?
- `{ }` instead of `( )` after the arrow, no `return`. `npx tsc`: `Type 'void[]'…`, empty list.
  Ask what the arrow returns.
- `key={index}` or `key={product.name}`. Ask: can the index or name change or repeat? Next task.
- Doesn't open the console. Ask her to press F12 before she says done.

## What if

- Add a fifth product to the array. What changes in the JSX?
- Show only products under 60 Kč. Which array method helps before `map`?

## Tips

- `map` turns data into JSX. Each item gets a stable `key`, usually the `id`.
- The console is part of the result. A warning there is a bug report.

## Links

- Rendering lists: https://react.dev/learn/rendering-lists
- Keeping list items in order with key: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
