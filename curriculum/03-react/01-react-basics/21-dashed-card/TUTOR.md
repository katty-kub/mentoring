# Tutor: Dashed card

Her question: "How do I change a style depending on the data?"

## Ladder

- "Read the `style` line. Which word in `"1px solid gray"` makes the line solid?"
- "Open `border-style` on MDN. Which value draws short dashes?"
- "In empty-notebook, how did you choose between two texts? Can a style value be chosen the same way?"
- "Is the `style` value plain JS? What can you write inside it?"

## Typical mistakes

- Writes two whole `<li>` elements, one per case. Works. Ask: what if the padding changes? How many places?
- Writes `style={{ border: "1px solid gray" }, { … }}`. Error. Ask: how many objects does `style` take?
- Checks the wrong value, e.g. `notebook.name === "Frontend"`. Ask: a second empty notebook tomorrow?
- Can't see a difference. Ask her to zoom in, or check the style in F12 → Elements.

## What if

- Make the empty card's name gray too. One condition or two?
- Put the condition into a `const` above the JSX. Is it easier to read?

## Tips

- `style` is an object. Any value in it can come from a condition.
- Decide from the data (`notes`), not from a name.

## Links

- Conditional rendering: https://react.dev/learn/conditional-rendering
- border-style values: https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
- Applying CSS styles: https://react.dev/reference/react-dom/components/common#applying-css-styles
