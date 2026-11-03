# Tutor: Notebook list

Her question: "How do I turn an array of objects into a list on the page?"

## Ladder

- "In render-list, how did you get one `<li>` per product? Open your solution."
- "What is one object in `notebooks`? And the whole array?"
- "Which field of a notebook do you need on the page? Which one could be the `key`?"

## Typical mistakes

- Writes four `<li>` by hand. Ask: the app gets a fifth notebook tomorrow. What changes?
- `key` on `<ul>` instead of `<li>`. Ask her to read the console warning: which element misses it?
- `key={notebook.name}`. Works now. Ask: can a user rename a notebook? What is `id` for?
- Shows `{notebook}`. React error: `Objects are not valid as a React child`. Ask: which part is text?

## What if

- Delete `key`. Read the warning out loud. Why does React want it?
- Show the number of notes next to each name.

## Tips

- One object = one thing, the array = all of them. `map` turns each object into JSX.
- `key` is the item's stable name for React. Take it from the data, usually `id`.

## Links

- Rendering lists: https://react.dev/learn/rendering-lists
