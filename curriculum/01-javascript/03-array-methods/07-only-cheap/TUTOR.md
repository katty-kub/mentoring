# Tutor: only cheap

Her first own `filter`.

Her question: "How do I keep only some items?"

## Ladder

- "Do the items change, or do you pick some of them? Which method picks?"
- "Take one price: 49. Which question do you ask about it? What is the answer: a number, or true/false?"
- "In filter-predict, which line is closest to this?"

## Typical mistakes

- Uses `map`. Prints `[ true, false, true ]`. Ask: does the count change here? Does map change the count?
- `{ }` after `=>` and no `return`. Prints `[]`. Ask: what does the function give back? Is undefined truthy?
- `price <= 45` or `price < 49`. Ask: does the task say 45? What about a price of 49.5?
- `forEach` with `if` and `push`. Works. Ask: which method does the picking for you?
- Prints the prices one per line. Ask her to compare with the expected line.

## What if

- Change the limit to 100. Then to 10. What prints?
- Put the limit in a name: `const limit = 50;`. Can the function see it?
- Print how many cheap prices there are.

## Tips

- filter never changes an item. It only says yes or no to each one.
- No match gives `[]`, not an error. Your next code can count on an array.

## Links

- filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
