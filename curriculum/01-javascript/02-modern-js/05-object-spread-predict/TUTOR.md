# Tutor: object spread predict

Her first object. She knows lists: an object is a list with names instead of positions.

Her question: "What happens when two `city` meet in one object?"

## Ladder

- "In spread-predict, `...` took items out of a list. What can it take out of an object?"
- "The 3rd console.log has two `city`. An object can hold each name once. Which one stays?"
- "The 3rd and 4th console.log have the same parts. What is different? Read them left to right."

## Typical mistakes

- Running it before guessing. Ask her to write all 5 tips first.
- Tip with two `city` in one object. Ask: can a name be there twice?
- Tip for the 5th console.log with age or Ostrava. Ask: which line changed user?
- The 4th console.log prints `city` first. Ask: where did city stand in the line? The first spot stays.

## What if

- `{ ...user, ...{ age: 30 } }`. What prints?
- Swap the order in the 2nd console.log: `{ age: 30, ...user }`. Do any values change? What does change?

## Tips

- Left to right. The last value with the same name wins. The name keeps its first spot.
- Nothing changes user. Each line makes a new object.

## Links

- Objects: https://javascript.info/object
- Spread in object literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
