# Tutor: filter predict

Her question: "How does `filter` decide what stays?"

## Ladder

- "Take the first item. What does the function give back for it: true or false?"
- "Say it for each item: stays, goes, stays. What is left?"
- "2nd line: is any price over 100? What is an array with nothing in it?"
- "5th line: the function gives back the value itself. Which values count as true?" (truthy-falsy)

## Typical mistakes

- Running it before guessing. Ask her to write all 6 tips first.
- 1st tip: `[ true, false, true ]`. That is map. Ask: does filter change items, or pick them?
- 2nd tip: `undefined` or an error. Ask: what does filter always give back?
- 3rd tip: `[ true, true, true ]`. Ask: what does true mean for filter: the new value, or "keep it"?
- 5th tip keeps `0` or `""`. Ask her to open her truthy-falsy task.

## What if

- `console.log(values.filter((value) => !value))`. Tip first.
- `console.log(prices.filter((price) => false))`. Tip first.
- Can filter ever give back more items than it got?

## Tips

- filter: same items, fewer of them. The function answers one question: keep it?
- map changes each item. filter picks items. Neither changes the old array.

## Links

- filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
