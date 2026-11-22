# Tutor: some every predict

Predict only. She will read these two more often than write them.

Her question: "What do `some` and `every` give back?"

## Ladder

- "Read the line as a question: 'is some price over 60?' What kind of answer does a question like that have?"
- "For every: find one item that says no. Is there one?"
- "For some: find one item that says yes. Is there one?"

## Typical mistakes

- Running it before guessing. Ask her to write all 6 tips first.
- Tips with arrays: `[ 65 ]`. That is filter. Ask: is the answer to 'is there one?' an array?
- Tips with an item: `65`. That is find.
- 3rd tip: false, "45 is small". Ask: is 45 over 40?
- 5th tip: true, "most are in stock". Ask: does every mean most?

## What if

- `console.log([].every((n) => n > 5))` and `[].some(…)`. Tip first. Why is every true for an empty array?
- Write the 4th line with filter and `.length`. Which one reads better?
- Which of the two can stop early, at the first item?

## Tips

- some = "at least one". every = "all of them". Both give true or false, never items.
- Good in an `if`: "if some product is sold out, show a note".

## Links

- some: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
- every: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
