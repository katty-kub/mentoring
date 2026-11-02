# Tutor: Missing braces

Her question: "How do you show the value of a variable in JSX?"

## Ladder

- "Compare `{item}` and `price` on the same line. What is different?"
- "In jsx-predict, what did `{}` tell React?"

## Typical mistakes

- Fixes only the first line. Ask her to read line 2 slowly. Why does it show `stock`?
- Writes `{price}Kč` without the space. Let the page show it, then ask what is missing.
- Asks why TypeScript did not catch it. Ask: is "price Kč" wrong text? TS sees valid text.

## What if

- Write `{"price"}`. What shows? And `{price + " Kč"}`?

## Tips

- Text outside `{}` is shown as it is. Only `{}` switches to JavaScript.
- Not every bug is a type error. Look at the page, not only at `npx tsc`.

## Links

- JavaScript in JSX with curly braces: https://react.dev/learn/javascript-in-jsx-with-curly-braces
