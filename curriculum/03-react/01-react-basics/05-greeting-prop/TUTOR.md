# Tutor: Greeting prop

Her question: "What are props, and how does a component read them?"

## Ladder

- "Look at `src` in the img example. Who decides which picture? The img, or the one who uses it?"
- "So who should decide the name: `Greeting`, or `Task`?"
- "A component is a function. How did a function get input in ts-basics?"

## Typical mistakes

- Adds `name="Petr"` in `Task` but `Greeting` still shows Eva. Ask: where does `Greeting` read it?
- Writes `function Greeting(name: string)`. `npx tsc`: `Type '{ name: string; }' is not assignable`.
  Ask: what does React pass to the function, one text or one object?
- No type on the props. Read the `npx tsc` error with her: implicit `any`.
- Hard-codes two components `GreetingEva`, `GreetingPetr`. Ask: and for 100 people?

## What if

- Add a third `<Greeting />` without a name. What does `npx tsc` say?
- Add a prop `city` and show "Ahoj, Eva z Brna".
- Used `props.name`? Ask her to write `{ name }` as the parameter instead. What changes?

## Tips

- Props go in like attributes: `<Greeting name="Eva" />`. The component gets one object.
- Destructuring `{ name }` reads the field straight away. Teams write it that way.

## Links

- Passing props to a component: https://react.dev/learn/passing-props-to-a-component
- React with TypeScript: https://react.dev/learn/typescript#typescript-with-react-components
