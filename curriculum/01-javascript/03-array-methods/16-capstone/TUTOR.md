# Tutor: capstone

Capstone of array-methods. Nothing new.
Higher bar for hints: before each rung, ask which earlier task helps.
More than one good shape: two filters or one, map or not, forEach or `join`. All fine without `for`.

Her question: "Which method do I pick for which step?"

## Ladder

- "Say the task in steps. For each step: does it pick, change, or print?"
- "Which earlier task picked items?" (only-cheap) "Which one picked and then changed?" (cheap-names)
- "Do the first step only and print the result. Which products are left? Are they the right ones?"
- "Two conditions for one product. How do you say 'this and that' in an `if`?"
- "You have an array. The task wants one line per item. Which task printed one line per item?" (for-each)

## Typical mistakes

- Prints the array: `[ 'Tea: 45 CZK', 'Cookie: 25 CZK' ]`. Ask: one per line?
- Checks only the price. Cake prints too. Ask: read Cake's object. Should a guest see it?
- `inStock === "true"`. Prints nothing. Ask: what type is inStock? (print-types)
- `console.log(….forEach(…))`. One extra line: `undefined`. Ask: what does forEach give back?
- map before filter, then filters texts. Prints nothing. Ask: after map, what is one item? (cheap-names)
- Types the two lines by hand. Ask: what if Cookie sells out tomorrow?

## What if

- Set Cake to `inStock: true`. Does your output grow by one line, without a code change?
- Print how many products match, as a last line.
- Nothing matches. Print `nothing today`. Which method answers "is there at least one"?
- Print the total price of the matching products.

## Tips

- Filter first, while you have the whole object. Then change. Then print.
- Small functions, one job each. You can read the chain like a sentence.
- This is what a React list does: filter the data, map it to elements.

## Links

- Array methods: https://javascript.info/array-methods
