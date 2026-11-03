# Tutor: Empty notebook

Her question: "How do I show different text when a notebook is empty?"

## Ladder

- "In sold-out, what did `Stock` show for count 0? How did it choose?"
- "Which value tells you the notebook is empty?"
- "Which part of the `<p>` changes, and which part stays?"

## Typical mistakes

- Adds `empty: true` to Frontend's data. Ask: what if someone adds a note? Who updates `empty`?
- Writes `notebook.notes === 0 && "Zatím žádné poznámky"`. Others lose their count. Ask: what shows when it is false?
- Uses `if` inside the JSX. Syntax error. Ask: in sold-out, what fits inside `{ }`?
- Checks `!notebook.notes`. Works. Ask: in zero-on-page, what did 0 do inside `&&`?

## What if

- One note shows "Jedna poznámka". Three cases now: one `? :` is not enough. What reads best?
  (A `? :` inside a `? :` is hard to read. Ask her which way is easier.)
- Move the condition into a small component `NotesCount`.

## Tips

- Two options to show → `? :`. One thing or nothing → `&&`.
- Decide from the data you have (`notes`), don't store a second value that says the same.

## Links

- Conditional rendering: https://react.dev/learn/conditional-rendering
