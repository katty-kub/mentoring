# Tutor: Annotate values

Her question: "What is a type annotation, and where does it go?"

## Ladder

- "Look at the example line. What stands between the name and the `=`?"
- "Which of the three types fits `21`? Which fits `false`?"

## Typical mistakes

- Type after the value: `let city = "Brno": string`. Ask her to compare with the example line.
- `String` with a capital S. Works, but teams write lowercase. Ask what the example uses.
- She never runs `npx tsc`. Done needs both commands.
- Output is the same before and after. Done = every variable in her code has a type.

## What if

- Change `temperature` to `"21"`. What does `npx tsc` say? What does `node task.ts` say?

## Tips

- `node` runs a .ts file but never checks the types. Only `npx tsc` checks them.
- VS Code underlines type errors in red while you type.

## Links

- Everyday types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
