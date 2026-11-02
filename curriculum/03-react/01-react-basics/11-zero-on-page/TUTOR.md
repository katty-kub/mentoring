# Tutor: Zero on page

Her question: "Why can `&&` print a 0 on the page?"

## Ladder

- "What is `items.length` for the empty cart? Run `console.log(0 && "hi")` in `node`."
- "In jsx-predict, which values showed nothing? Was 0 one of them?"
- "What condition gives `true` or `false`, never a number?"

## Typical mistakes

- Deletes the first line. The full cart loses "Položek: 2".
- Writes `!!items.length`. Works; ask her to say in Czech what it means. Compare with `> 0`.
- Fixes it with a ternary and `null`. Fine. Ask why it works.

## What if

- `items.length` is negative? Can it be? So which check reads clearest?
- Show "1 položka" vs "2 položky". Which condition do you need?

## Tips

- Left of `&&`, use a real `true`/`false`: `items.length > 0`. Never a bare number.
- Truthy and falsy from data-types: `0` is falsy, but React still shows it.

## Links

- Conditional rendering, pitfall: https://react.dev/learn/conditional-rendering#logical-and-operator-
