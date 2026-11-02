# Tutor: Price tag

Her question: "How do you pass a number as a prop?"

## Ladder

- "What does one menu line need? Which part changes from line to line?"
- "In greeting-prop you passed text. Is the price text or a number?"

## Typical mistakes

- `price="59"`. With `price: number` the type catches it. Ask her to read the error out loud.
- Writes the type inline or as `type PriceTagProps`. Both are fine.
- Puts "Kč" into the prop. Ask: what if we need to sum the prices?
- Forgets to use `PriceTag` three times. Ask her to compare the page with the task.

## What if

- Add a prop `currency` with "Kč" or "€".
- Pass `price={59.5}`. What shows?

## Tips

- Text goes in quotes: `label="Káva"`. Anything else goes in braces: `price={59}`.
- Teams name the props type after the component: `PriceTagProps`.

## Links

- Passing props to a component: https://react.dev/learn/passing-props-to-a-component
