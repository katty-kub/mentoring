# Tutor: Price as text

Her question: "How does TypeScript help you pass the right props?"

## Ladder

- "What does `"59" + "45"` give in plain JS? Try it in `node`."
- "Which line should change so the bug can't come back: the props type, or the values?"
- "In catch-the-fee you had the same bug. Where did the fix go?"

## Typical mistakes

- Uses `Number(coffee) + Number(cake)`. Page is right, but ask: will TS catch `"59"` next time?
- Changes the values to `{59}` but keeps `string` in the type. Read the error with her.
- Changes the type only. Then `npx tsc` shows two errors. Good: the errors point to the fix.

## What if

- Pass `cake={"45"}`. What does `npx tsc` say?
- Add a prop `tip` and show it in the total.

## Tips

- Props types are a contract. Who uses the component can't pass the wrong thing.
- Numbers in JSX go in braces. Quotes always mean text.

## Links

- TypeScript with React components: https://react.dev/learn/typescript#typescript-with-react-components
