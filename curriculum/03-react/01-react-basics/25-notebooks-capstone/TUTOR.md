# Tutor: Notebooks capstone

Her question: "How do I plan a small page from data?"

This is the home page of her Dev-Notes app in small. Same ideas, no Next yet.

## Ladder

- "Read the expected page. Which parts repeat? Which part repeats inside a repeat?"
- "Which components will you need? Write their names as comments first."
- "Which types do you need? Which field is not on every notebook?"
- "Which values on the card follow from other data? Which tasks did those?"

## Typical mistakes

- Starts coding before the plan. Ask her to write the component names and types as comments first.
- One huge `Task` with everything inside. Works. Ask: which part would you test or reuse alone?
- `description: string` without `?`. `npx tsc` errors. Ask: does every notebook have one?
- Stores `empty: true` or a cluster count. Ask: what did cluster-count teach?
- Missing inner `key`. Ask her to open the console before she says done.
- Frontend card: dashed border but still "Poznámky: 0". Ask her to compare with the expected page line by line.

## What if

- Sort the cards: empty notebooks last. Before `map`, or inside it?
- Show "Celkem poznámek: 24" above the cards. Stored or computed?

## Tips

- Plan from the data: one object = one component, one optional field = one `?` and one check.
- Small components with typed props are easier to read than one big one.

## Links

- Thinking in React: https://react.dev/learn/thinking-in-react
- Rendering lists: https://react.dev/learn/rendering-lists
- Conditional rendering: https://react.dev/learn/conditional-rendering
