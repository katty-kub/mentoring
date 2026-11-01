# Tutor: Capstone

Her question: "When you get new data, which types do you write first?"

## Ladder

- "List the fields. Which ones can be missing? Which one came from a form?"
- "You wrote the type. What do the errors now point at? Take them one by one."

## Typical mistakes

- Writes the loop first, then sees many errors. Fine: ask her to start with the type.
- `discount: number` for all. Ask: does Pen have one?
- `price: string | number`. Ask: what should the shop work with? Where should text become a number?
- Uses `!` to silence an error. Ask what it checks (no-phone).
- Edits `"35"` to `35` by hand. Ask: the form sends text again tomorrow. Then what?

## What if

- Add `{ name: "Cup", price: 80, discount: 100 }`. What prints? Does TS catch it?
- Add a field `status` that can only be `"in stock"` or `"sold out"`.

## Tips

- Start with the type. The errors then tell you what code is missing.

## Links

- Everyday types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
- Narrowing: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
