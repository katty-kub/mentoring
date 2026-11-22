# Tutor: Two counters

Predict only. Each place on the page where a component sits has its own state.

Her question: "Do two copies of one component share state?"

## Ladder

- "How many times does Task use Counter? How many times does `useState` run?"
- "You click the first button. Which Counter gets the new render?"

## Typical mistakes

- Runs it first. Tips go in before she clicks.
- Tips `Líbí 3` for both: "it is the same component". Ask: same code, or same memory?

## What if

- Add a third `<Counter />`. Where does it start?
- You want both buttons to show the same number. Where would the state have to live? (Just a tip: shared-count.)

## Tips

- A component is a recipe. Each `<Counter />` on the page is its own dish with its own state.

## Links

- State is isolated and private: https://react.dev/learn/state-a-components-memory#state-is-isolated-and-private
