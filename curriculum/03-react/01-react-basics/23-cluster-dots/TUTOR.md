# Tutor: Cluster dots

Her question: "How do I show a list inside each item of another list?"

## Ladder

- "What is `notebook.clusters`? One thing, or an array?"
- "How did you turn `notebooks` into cards in notebook-list? Can you do the same one level deeper?"
- "Read the dot line from the task. Which style property gives it a color? Where does the color come from?"
- "In optional-prop, which style property filled the circle with teal?"
- "Which `key` fits a cluster?"

## Typical mistakes

- Writes `{notebook.clusters}`. Error: `Objects are not valid as a React child`. Ask: what is one cluster?
- Forgets `key` on the inner list. Console warns. Ask: is the inner `map` a list too?
- Uses `notebook.id` as the inner key. Console warns about duplicates. Ask: whose id is that?
- `color: cluster.color` instead of `background`. The `<span>` has no text, so nothing shows. Ask: what fills it?
- Returns `<>dot name</>` from the inner `map`. No place for `key`, console warns.
  Ask: which element could hold the dot and the name together?
- Frontend shows an empty `<ul>`. Fine for now. Ask: would you hide it? That is a what-if.

## What if

- Hide the cluster list when there are none.
- The data has `hue: 200` instead of a color name. Build the color with a template literal: `hsl(…)`.

## Tips

- A list in a list is a `map` in a `map`. Every `map` needs its own `key`.
- `style` values can come from data, like any other prop.

## Links

- Rendering lists: https://react.dev/learn/rendering-lists
- Applying CSS styles: https://react.dev/reference/react-dom/components/common#applying-css-styles
