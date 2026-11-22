# Tutor: Empty cart

Modify. `npx tsc` is clean at the start. Her new button makes the error:
`Type 'string' is not assignable to type 'never'.` Let her read it. Her first `< >` in her own code.

Her question: "How does TypeScript know what will be in an empty array?"

## Ladder

- "Hover over `cart` in VS Code. Which type do you see? What can go into an array like that?"
- "TypeScript reads the type from the start value. What does `[]` tell it?"
- "Read the react.dev page for `useState` with TypeScript. Where does the type go?"

## Typical mistakes

- Starts with `[""]` to make the error go away. Page: `Položek: 1`. Ask: is the cart empty at the start?
- `any[]`, or `as string[]`. Not in this repo. Ask: which type do the items really have?
- Writes the type on the left: `const [cart, setCart]: string[]`. Read the new error with her.

## What if

- Add a button Přidat čaj.
- Add a button Vysypat. It empties the cart. Does `tsc` stay quiet?

## Tips

- `useState<string[]>([])`: the type in `< >` says what the state can hold, when the start value cannot.
- With a start value like `0` or `"Eva"`, TypeScript knows the type by itself.

## Links

- Typing useState: https://react.dev/learn/typescript#typing-usestate
