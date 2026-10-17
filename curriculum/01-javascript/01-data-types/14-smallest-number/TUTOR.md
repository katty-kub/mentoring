# Tutor: smallest number

Her question: "Why `let smallest = Infinity`? Is the `<` the wrong way round?
Where is this used in practice, besides the smallest number?"

In practice: cheapest product, earliest date, top score, slowest request in a log.

## Ladder

- "Look at 5, 2, 8 with your eyes. How do *you* find the smallest? Say it step by step."
- "While you go through the list, what do you need to remember?" → "What do you remember before the first one?"

## Typical mistakes

- Starting at `0`. Prints 0: no number here is smaller. Ask: "Where did the 0 come from?"
- Comparing neighbours (`numbers[i] < numbers[i + 1]`) instead of "best so far".

## What if

- What does it print for `[7]`? For `[]`?

## Tips

- `Math.min` exists. Try it after she's done, not before.
- Textbook name: *running minimum*.

## Links

- for...of: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- Comparisons: https://javascript.info/comparison
