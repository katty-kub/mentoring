# Tutor: Remove item

Each button knows its own item: the click function is made inside `map`.

Her question: "How does a button know which item is its own?"

## Ladder

- "The button is written inside `map`. Which name there holds its item?"
- "The next cart has every item but one. Which array method gives you 'all but'?" (only-cheap)
- "Which value tells two items apart for sure?" (duplicate-key)

## Typical mistakes

- `other.id === item.id` in the filter. Only the clicked item stays. Ask: what does filter keep?
- `setCart([])`. Everything goes. Ask her to read `stránka má ukázat`.
- `onClick={setCart(…)}` without `() =>`. Console: `Too many re-renders`. Ask her about click-log.

## What if

- Show `Košík je prázdný` when the last item is gone.
- Show the number of items under the list. New state, or not?

## Tips

- `filter` gives a new array without the item. The old one stays as it was.
- A function made inside `map` can see the item of its own row.

## Links

- Removing from an array: https://react.dev/learn/updating-arrays-in-state#removing-from-an-array
