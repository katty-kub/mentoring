# Tutor: Toggle done

The hardest task of the module. A new array, and inside it one new object: `map` plus update-object.
Give her time. Let her say the plan in Czech before code.

Her question: "How do I change one object in a list in state?"

## Ladder

- "The next list has the same count. Which array method keeps the count?" (map-predict)
- "For each todo: is it the clicked one? If not, what goes into the new list?"
- "If it is the clicked one: in update-object, how did you make a new object with one value changed?"

## Typical mistakes

- `todo.done = !todo.done` and `setTodos(todos)`. The page does not change. Ask her about push-bug.
- Flips every todo. Ask: which todo did you click? How does the function know?
- Sets `done: true`. The second click does nothing. Ask her to read the last line of the task.

## What if

- Show `Hotovo: 1 z 3` under the list. New state, or not?
- Add a button Vše hotovo.

## Tips

- `map` for the list, spread for the one object. Everything else goes through as it is.
- Never change an object that is in state. Make a new one.

## Links

- Updating objects inside arrays: https://react.dev/learn/updating-arrays-in-state#updating-objects-inside-arrays
