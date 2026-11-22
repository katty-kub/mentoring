# Tutor: Search menu

State is only the text. The visible list is worked out from it, like in stale-length.
New for her: `includes` on a text. Let her find it on MDN.

Her question: "How do I show only part of a list, by what the user types?"

## Ladder

- "What does the user change? So what is the one thing in state?"
- "Which array method picks some items?" (only-cheap) "Where in the JSX does it go?"
- "Search MDN: 'string includes'. What does it give back?"

## Typical mistakes

- Puts the filtered list in state and filters that list again. Type `latte`, then delete it:
  the two items stay. Ask: where did the other products go? Which list never changes?
- `product.name === search`. Empty field shows nothing. Ask: what does the start page have to show?
- Types `Latte` and gets nothing. Not a bug in this task: the data is lower case. See What if.

## What if

- Show `Nic jsme nenašli` when no product matches.
- Make `LATTE` find latte too.

## Tips

- State: what the user did. The rest you work out from it on every render.
- `filter` then `map`, the same chain as in cheap-names.

## Links

- String includes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
