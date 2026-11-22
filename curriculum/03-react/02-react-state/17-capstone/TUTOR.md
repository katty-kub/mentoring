# Tutor: Capstone

Capstone of react-state. Nothing new.
Higher bar for hints: before each rung, ask which earlier task helps.
All state can live in Task. The total is worked out, not stored. A loop or `reduce` are both fine for it.

Her question: "What is my state, and what can I work out from it?"

## Ladder

- "Draw the boxes. Which parts change after a click? What is the smallest thing to remember?"
- "Which earlier tasks added to a list and removed from one?" (add-item, remove-item)
- "Which component needs the cart? Which ones change it? So where does the state live?" (shared-count)

## Typical mistakes

- Total in its own state. Ask her about stale-length.
- The same product twice in the cart. Console warns about the same key. Ask: which method answers
  "is it there already"? (some-every-predict)
- `useState([])` for the cart. `npx tsc`: `not assignable to type 'never'`. Ask her about empty-cart.
- One big Task. Works. Ask: which boxes from your drawing are their own components?

## What if

- Show the number of items next to the word Košík.
- Add a button Vysypat košík.

## Tips

- First decide the state, then where it lives, then the JSX.
- Small state, the rest worked out: fewer bugs.

## Links

- Thinking in React: https://react.dev/learn/thinking-in-react
