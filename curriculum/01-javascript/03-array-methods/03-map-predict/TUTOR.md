# Tutor: map predict

Her question: "What does `map` give back?"

## Ladder

- "Take the first item. Put it in place of price. What does the function give back?"
- "Do that for each item. Write the results next to each other. That is the new array."
- "How many items go in? How many come out?"
- "4th line: what does `49 > 50` give? Is that a price?"
- "5th line: map passes two inputs. The first is the item. What is the second? Where does it start?"

## Typical mistakes

- Running it before guessing. Ask her to write all 6 tips first.
- 4th tip: `[ 65 ]`. Ask: what does the function return for 49? Does map throw items away?
- 5th tip starts at 1. Ask: what is the position of the first item in an array?
- 6th tip: a changed array. Ask: did any line write into prices?
- Tips without `[ ]`. Ask: what does map build?

## What if

- `console.log(prices.map((price) => "x"))`. Tip first.
- `console.log(prices.map((price) => price * 2).length)`. Tip first.
- Store the first result in a name and print `doubled === prices`.

## Tips

- map: same count, each item changed. One in, one out.
- map makes a new array. The old one stays as it is. Same idea as spread in modern-js.
- React turns a list of data into a list of elements with exactly this.

## Links

- map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
