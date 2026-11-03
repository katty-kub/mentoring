# Tutor: Notebook card

Her question: "How do I move a piece of a list into its own component?"

## Ladder

- "In split-component, how did you move the header out? What stayed in `Task`?"
- "Which part of the JSX is one card? Which values does it need from outside?"
- "In price-tag, how did `PriceTag` get its label and price?"
- "Two ways: pass `name` and `notes`, or the whole `notebook`. What does each one cost?"

## Typical mistakes

- No props type. `npx tsc`: `Binding element 'name' implicitly has an 'any' type`. Read it with her.
- Moves `key` into `NotebookCard`. Console warns again. Ask: who renders the list, the card or `Task`?
- Calls it `<NotebookCard notebook />`. Ask: what value does the prop get?
- Leaves the old `<li>` in `Task` and puts the card inside it. Now there is an `<li>` in an `<li>`.
  Ask her to look at F12 → Elements.

## What if

- The card needs one more field tomorrow. Which way of passing props changes less?
- Use `NotebookCard` outside the list, for one notebook only.

## Tips

- A component is a piece of JSX with a name. Props are its inputs, typed like function parameters.
- `key` stays where the list is made: on the element that `map` returns.

## Links

- Passing props to a component: https://react.dev/learn/passing-props-to-a-component
- Rendering lists: https://react.dev/learn/rendering-lists
