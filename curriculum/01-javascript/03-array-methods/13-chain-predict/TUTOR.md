# Tutor: chain predict

Her question: "In what order do chained methods run?"

## Ladder

- "Cover everything after the first `)` of filter. What is the result so far? Write it down."
- "Now the next method gets that result, not prices. What does it do with it?"
- "2nd and 4th line use the same two functions. What is different? Why does one give `[]`?"
- "5th line: do it in three steps on paper. What comes out of each step?"

## Typical mistakes

- Running it before guessing. Ask her to write all 6 tips first.
- 4th tip: `[ 98, 90 ]`. Ask: which numbers does filter see here: the old ones or the doubled ones?
- 5th tip: an array. Ask: what is the last word on the line?
- 5th tip: 0, with the old prices. Ask her to write the array after map first.
- Reads right to left. Ask: which method touches prices first?

## What if

- Break the 2nd line into two lines with a name for the middle result. Same output?
- Put each method of a long chain on its own line. Does it still run?
- Chain `forEach` first, then `map`. Tip first. What does forEach give back?

## Tips

- Read a chain left to right. Each step gets the result of the step before.
- Order matters: filter then map is not map then filter.
- Stuck on a chain? Cut it after the first method and print that.

## Links

- Chaining: https://javascript.info/array-methods#chaining
