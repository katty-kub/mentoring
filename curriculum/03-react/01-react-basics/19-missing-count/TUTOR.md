# Tutor: Missing count

Her question: "How does a type catch a typo in data?"

## Ladder

- "What is `notebook.notes` for Frontend? Add `console.log` and look in F12."
- "Why did `npx tsc` say nothing? What does TypeScript know about these objects now?"
- "In price-as-text, where did the fix go so the bug could not come back?"
- "Read the new `npx tsc` error word by word. Which line, which property?"

## Typical mistakes

- Fixes `note` to `notes` only. Page is right. Ask: next typo, who finds it?
- Writes `{notebook.notes ?? 0}`. Page shows 0. Ask: is the data right now, or only the page?
- Adds the type but not to the array. `npx tsc` stays quiet. Ask: which value does the type describe?
- Panics at the long error: `Object literal may only specify known properties, but 'note' does not
  exist in type 'Notebook'. Did you mean to write 'notes'?` Ask her to find the line number and the last sentence.

## What if

- Type the array, then write `notes: "0"`. What does `npx tsc` say?
- Remove `notes` from Starter. Which error now?

## Tips

- Without a type, TypeScript guesses from the data. A typo is then just another shape.
- With a type, data must match it. The error names the exact line and property.

## Links

- TypeScript with React components: https://react.dev/learn/typescript#typescript-with-react-components
