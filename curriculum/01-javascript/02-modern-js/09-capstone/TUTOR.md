# Tutor: capstone

Capstone of modern-js. Higher bar for hints: before each rung, ask what she knows from earlier tasks.

Her question: "How does a function give back a change without changing its input?"

## Ladder

- "What goes in, what comes out? Write it as a comment first."
- "Which earlier task made a new object with one value changed?" (update-object)
- "Which task showed how to write an arrow function?" (arrow-function)

## Typical mistakes

- `todo.done = true` inside. The last line prints true. Ask: what does it print?
- `=> { ...todo, done: true }`. SyntaxError: "Rest parameter must be last…". Ask: what does `{` mean after `=>`?
- Forgets `return` inside `{ }`. Prints `undefined`. Ask: what does the function give back?
- Calls markDone, but never prints. Ask: where does the returned todo go?
- Prints both objects by hand. Ask: what if the title changes?

## What if

- Write markUndone too. How much code is the same?
- Print the new todo as `Write SUMMARY: true`. Can you use destructuring for it?
- Give markDone a list of two todos. What prints? (She meets `.map` in React: map-predict.)

## Tips

- Pure function: same input, same output, nothing outside changes. Easy to test.
- One-line arrow returning an object needs `( )` around the `{ }`. Let her find it, then say why.

## Links

- Arrow functions: https://javascript.info/arrow-functions-basics
- Spread in object literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
