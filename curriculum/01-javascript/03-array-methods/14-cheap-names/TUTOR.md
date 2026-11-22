# Tutor: cheap names

Her first own chain. Two steps: pick, then change.

Her question: "How do I pick some items and then take one value from each?"

## Ladder

- "Say the task in two steps. Which step picks? Which step changes?"
- "Do the first step only and print it. What do you have now: names or products?"
- "What does the second step get as input? What should come out for one item?"
- "In chain-predict, which line picked first and changed second?"

## Typical mistakes

- Only filter. Prints two whole objects. Ask her to compare with the expected line.
- map first, then filter with `.price`. Prints `[]`. Ask: after map, what is one item? Does a text have a price?
- One map with `price < 50 ? name : undefined`. Prints `[ undefined, 'Tea', 'Cake' ]`. Ask: can map drop an item?
- `find` in place of filter. Crashes or gives one name. Ask: one product or all of them?
- `price <= 49`. Ask: what does the task say?

## What if

- Use destructuring in both functions. Is it easier to read?
- Add a third step: names in capital letters.
- No product is under 10. What prints? Does your code crash?

## Tips

- filter while you still have the whole object. After map the price is gone.
- Name the middle result when a chain gets hard to read. Two lines are fine.

## Links

- filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
