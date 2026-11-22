# Tutor: First state

Fix-the-bug. Her first `useState`. Same code as variable-predict. The import is ready.
She has to give Task a `{ }` body with `return`: a hook needs a line of its own.

Her question: "How does React remember a value and show the new one?"

## Ladder

- "Read the first example on the react.dev page for `useState`. What two things does it give you?"
- "Which one do you show on the page? Which one do you call on click?"
- "Where does the `useState` line go? Task has no `{ }` yet. How did you add a body in modern-js?"

## Typical mistakes

- `useState` above Task, outside the component. Blank page, console: `Invalid hook call`.
  Ask: who needs the memory, the file or the component?
- Keeps `count = count + 1`. `npx tsc`: `Cannot assign to 'count' because it is a constant.`
  Ask: which of the two things from useState changes the value?
- `onClick={setCount(count + 1)}`. Console: `Too many re-renders`. Ask her about click-log.
- Adds `{ }` and forgets `return`. Blank page. Ask: what does Task give back?

## What if

- Start at 10. Which one place do you change?
- Add a button Odebrat. It takes 1 away.

## Tips

- `const [count, setCount] = useState(0)`: the value now, and the function that sets the next one.
- Calling `setCount` does two things: React remembers the new value and calls your component again.

## Links

- useState: https://react.dev/reference/react/useState
