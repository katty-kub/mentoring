# Tutor: Book type

Her question: "What is a type alias (`type`), and why name a shape?"

## Ladder

- "Look at the `Point` example. Which part is the name? Which part is the shape?"
- "What fields does each book have? What type is each field?"

## Typical mistakes

- Writes the object values into the type: `title: "Dune"`. Ask: can a second book use it?
- Commas vs semicolons. Both work. Don't fix it; teams pick one.
- Writes the type but never uses it on the books. Ask: how does TS know dune is a Book?
- Output is the same before and after. Done = both books use `Book`.

## What if

- Remove `pages` from hobbit. What does `npx tsc` say?
- Add `author` to dune only. What happens?

## Tips

- Type names start with a capital letter: `Book`, `User`.
- One type, many objects: change it in one place.

## Links

- Type aliases: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
- Object types: https://www.typescriptlang.org/docs/handbook/2/objects.html
