# Tutor: Shared count

Modify. State moves up to Task. Down go the value and a function. The type for a function prop is in the task.

Her question: "How do two components show the same state?"

## Ladder

- "Who has the count now? Can Summary see into AddButton?"
- "Which component is above both of them? What if the state lived there?"
- "AddButton no longer owns the count. How does it tell Task about a click?" (the `onAdd` line in the task)

## Typical mistakes

- A second `useState` in Summary. It stays at 0. Ask her about two-counters.
- Moves the state up but forgets a prop. `npx tsc`: `Property 'count' is missing…`. Read it with her.
- Passes `setCount` down and types it with a long type from the hover. Works. Ask: does AddButton need
  to know how to count, or only to say "clicked"?

## What if

- Add a second `<AddButton />`. Do both add to the same count?
- Add a button Vysypat into Summary. It sets the count to 0. What does Summary need?

## Tips

- Two components need the same state: move it to their closest shared parent.
- Data goes down as props. Events go up as functions.

## Links

- Sharing state between components: https://react.dev/learn/sharing-state-between-components
