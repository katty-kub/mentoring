# Tutor: Notebook description

Her question: "How do I show a field that only some objects have?"

## Ladder

- "Add the description to API's data first. What does `npx tsc` say? Why?"
- "In ts-basics, some contacts had a phone and some didn't. How did the type say that?"
- "In optional-prop, what did a missing prop give you?"
- "One thing or nothing on the page. Which of `? :` and `&&` fits?"

## Typical mistakes

- `description: string` without `?`. `npx tsc`: `Property 'description' is missing` three times.
  Ask: does every notebook have one?
- Shows `{notebook.description}` without a check. Page looks right. Ask her to look at F12 → Elements:
  is there an empty `<p>` in the other cards?
- Writes `notebook.description !== undefined && …`. Works. Ask: is there a shorter check you used before?
- Puts `description: ""` into the other notebooks. Ask: is an empty text the same as no description?

## What if

- Give Backend an empty description `""`. What shows? Is that what you want?
- Show "Bez popisu" in gray when there is none. Which operator now?

## Tips

- `?` in a type = the field may be missing. TypeScript then makes you check before you use it.
- `&&` shows one thing or nothing. Watch out for `0` on the left side (zero-on-page).

## Links

- Optional properties: https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties
- Conditional rendering: https://react.dev/learn/conditional-rendering#logical-and-operator-
