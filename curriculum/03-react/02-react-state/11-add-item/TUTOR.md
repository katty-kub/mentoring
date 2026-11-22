# Tutor: Add item

Her first array in state. She makes a new array with one more item: merge-lists and copy-bug.

Her question: "How do I add an item to a list in state?"

## Ladder

- "`setGuests` wants the whole next list. What is in it?"
- "In merge-lists, how did you make a new list from an old one plus more?"
- "The new text has a number. Which value do you already have that gives 3 for the first click?"

## Typical mistakes

- `setGuests(guests.push(…))`. `npx tsc`: `Argument of type 'number' is not assignable…`.
  Ask: what does push give back? (MDN)
- Always adds `"Host 3"`. Second click: console warns about the same key. Ask: what is the fourth guest called?
- `guests.push(…)` and then `setGuests(guests)`. The page does not change. Leave it: push-bug is next.

## What if

- Add the new guest at the start of the list.
- Add a button Smazat všechny.

## Tips

- For state, make a new array. Do not change the old one.
- `[...guests, newGuest]`: everything from before, plus one.

## Links

- Adding to an array: https://react.dev/learn/updating-arrays-in-state#adding-to-an-array
