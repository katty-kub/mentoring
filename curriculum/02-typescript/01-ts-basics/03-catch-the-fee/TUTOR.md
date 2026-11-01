# Tutor: Catch the fee

Her question: "How can a type catch a bug before the code runs?"

## Ladder

- "Which value is not what you'd expect? What type does TS think `fee` has? Hover."
- "You know how to tell TS what type a variable must have. Which variable needs it?"

## Typical mistakes

- Fixes the value only. Output is right, but nothing guards it. Ask: what stops this next time?
- Annotates `total` instead. Also fine: TS catches it there too. Ask: where did the text come in?
- Annotates `fee` but leaves `"5"`. Good: now ask her to read the error out loud.

## What if

- Keep the text from the form. How can it still become a number? (data-types: text-to-number)

## Tips

- In JS this bug shows up for the customer. In TS it shows up in the editor.
- Read an error from the end: "not assignable to type 'number'" = "I wanted a number".

## Links

- Everyday types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
