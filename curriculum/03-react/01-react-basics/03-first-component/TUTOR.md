# Tutor: First component

Her question: "What is a component, and how do you use it?"

## Ladder

- "Look at the `Hello` example. What does the function return?"
- "How does `Task` use `Hello`? Where would you put that tag in each `<li>`?"

## Typical mistakes

- Names it `badge`. `npx tsc`: `Property 'badge' does not exist on type 'JSX.IntrinsicElements'`.
  Ask her to read it out loud. Lowercase tags are HTML tags for React.
- Calls it as `{Badge()}`. It works, but ask: how does the example use it?
- Writes `NEW` three times without a component. Ask: what if NEW must become NOVÉ tomorrow?
- `Matcha latteNEW` without a space. Let her see it on the page, then ask why.
- Defines `Badge` inside `Task`. Works, but ask her to move it out. Teams keep components top level.

## What if

- Make the badge red: `<strong style={{ color: "red" }}>`. How many places do you change?
- Use `<Badge />` outside the list, in a heading.

## Tips

- A component is a function that returns JSX. Its name starts with a capital letter.
- Write it once, use it many times, change it in one place.

## Links

- Your first component: https://react.dev/learn/your-first-component
