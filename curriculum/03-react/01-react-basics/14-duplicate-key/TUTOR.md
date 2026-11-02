# Tutor: Duplicate key

Her question: "What makes a good `key`?"

## Ladder

- "Which two orders have the same key? Read the warning again."
- "Is a coffee name unique? What is unique for every order?"

## Typical mistakes

- Renames one Káva. Ask: is the data wrong, or the key?
- `key={order.name + order.table}`. Ask: two coffees for table 3?
- `key={index}`. Ask: if an order is deleted, does each order keep its number? Comes back in hooks.
- Page looks the same. Done = no warning in the console, F12.

## Check

- `npm run print` does not show this warning. Only the browser console does.
  Ask her to read the console out loud.

## What if

- Add a fourth order: Koláč for table 5. Still no warning?
- Remove the `id` fields. What would you use then?

## Tips

- Use the `id` from the data. Names and positions repeat or move.

## Links

- Rules of keys: https://react.dev/learn/rendering-lists#rules-of-keys
