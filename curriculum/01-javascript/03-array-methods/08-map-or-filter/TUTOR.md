# Tutor: map or filter

Fix-the-bug. Higher bar for hints: she reads and prints first.
The function is right. The method is wrong.

Her question: "When do I use `map` and when `filter`?"

## Ladder

- "How many items go in? How many do you want out?"
- "Which method always gives back the same count?"
- "What does the function give back for 49? Which method needs exactly that kind of answer?"

## Typical mistakes

- `price < 50 ? price : undefined` in map. Prints `[ 49, undefined, 45 ]`. Ask: count the items. Can map drop one?
- Adds `.filter((value) => value)` behind the map. Prints `[ true, true ]`. Ask: where did the prices go?
- Changes the function and the method. Ask: was the function wrong? What does it answer?
- Rewrites it with a loop. Ask: can you fix it by changing one word?

## What if

- You want `[ '49 CZK', '45 CZK' ]`. Is one method enough? (Just a tip. chain-predict comes later.)
- Rename cheapPrices to `isCheap` and keep map. Is the code a bug now, or just another feature?

## Tips

- Same count, changed items: map. Fewer items, same values: filter.
- Look at the output you want before you pick the method.

## Links

- map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
