# Tutor: spread predict

Her question: "What does `...` do with a list?"

## Ladder

- "Read `...small` out loud as 'everything inside small'. What lands in the new list?"
- "The 4th and 5th console.log both use small and big. What is different in the output?"
- "Count the `[` in the 5th output line. How many lists do you see?"

## Typical mistakes

- Running it before guessing. Ask her to write all 6 tips first.
- Tip `[ [ 1, 2 ], 3 ]` for the 2nd console.log. Ask: what does `...` take out of small?
- Tip for the 6th console.log with brackets. Ask: is there a `[ ]` around `...small` there?

## What if

- Change small to `[1, 2, 3]`. Which lines change? Do you need to change any code?
- `console.log([...small, ...small])`. What prints?

## Tips

- `...` unpacks the list. The `[ ]` around it makes a new list.
- Without `...`, you put the whole list inside, as one item.
- You meet `...` again soon, with objects. Later in React too.

## Links

- Spread syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
