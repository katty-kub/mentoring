# Tutor: Notebook type

Her question: "How do I name a shape once and use it everywhere?"

## Ladder

- "Find both places with `{ id: string; name: string; notes: number }`. What does each one describe?"
- "In ts-basics, how did you name the shape of a book? Which keyword?"
- "The array holds many notebooks. How did you write 'an array of contacts' in ts-basics?"

## Typical mistakes

- Writes `type Notebook` but uses it only in one place. Ask: is the shape still written twice?
- Writes `Notebook` for the array. `npx tsc` complains. Ask: is it one notebook, or many?
- Names it `notebook` (small letter). Works. Ask: which names in ts-basics started with a capital?
- Puts the type below its first use. Works for types. Ask: where would a reader look for it?

## What if

- Add `status: "draft" | "ready"` to the type. What does `npx tsc` say about the data?
- Rename `notes` to `noteCount` in the type only. How many errors, and where?

## Tips

- One `type` = one name for a shape. Change it once, TypeScript shows every place that must follow.
- `Notebook[]` reads "array of Notebook".

## Links

- Object types: https://www.typescriptlang.org/docs/handbook/2/objects.html
- TypeScript with React components: https://react.dev/learn/typescript#typescript-with-react-components
