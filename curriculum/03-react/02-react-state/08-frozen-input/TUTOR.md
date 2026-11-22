# Tutor: Frozen input

Fix-the-bug. The console warning is there from the start, on purpose. She reads it first.

Her question: "Why can I not type into a field that has `value`?"

## Ladder

- "Read the console warning out loud. Which two props does it name?"
- "The field shows `name`. You press a key. Who changes `name`?"
- "In name-input, which prop caught the typing?"

## Typical mistakes

- `defaultValue` (the warning offers it). Typing works, `Ahoj, Eva` stays. Ask: does the greeting follow?
- `readOnly` (the warning offers it too). No warning, still frozen. Ask her to read the bug report again.
- Removes `value`. Typing works, greeting stays. Same question.

## Check

- The warning shows in the browser console and in `npm run print`. Done = it is gone in both.

## What if

- Add a button Smazat. It empties the field and the greeting.
- Let the field take at most 5 letters. Where do you check it?

## Tips

- With `value`, React decides what the field shows. So every key press has to go through state.
- `value` + `onChange` together: a controlled input. The state is the one true text.

## Links

- Controlled input: https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
