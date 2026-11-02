# Tutor: Split component

Her question: "When do you split JSX into a new component?"

## Ladder

- "Which lines are the header? Where does that part start and end?"
- "In first-component, how did you make a new component? Could these lines be its return?"

## Typical mistakes

- Copies the header into `Header` but leaves it in `Task` too. The page shows it twice.
- Returns `<h1>` and `<p>` without `<header>`. `npx tsc`: `JSX expressions must have one parent`.
  Ask: how many elements does your return give back?
- Puts `<Header />` in the wrong place. Compare the page before and after.
- Page looks the same. That is the goal. Done = `Header` exists and `Task` uses it.

## What if

- Also make `TodaySpecials` from the `<main>` part. How short is `Task` now?
- Use `<Header />` twice. What happens?

## Tips

- Split when a part has its own name: header, card, menu item.
- Same page, cleaner code. That is called refactoring.

## Links

- Importing and exporting components: https://react.dev/learn/importing-and-exporting-components
