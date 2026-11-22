# Tutor: Name input

Her first `onChange`. The text in the field lives in state.
`value` on the input is not needed to pass. frozen-input brings it next.

Her question: "How do I get what the user types?"

## Ladder

- "What changes on this page? So what goes into state? What is it at the start?"
- "Search react.dev: 'input onChange'. What does the handler get as input?"
- "Print `event.target.value` in the handler. Type a letter. What do you see?"

## Typical mistakes

- `setName(event.target)`. Page: `Ahoj, [object HTMLInputElement]`. Ask: which part of it is the text?
- `onClick` on the input. Nothing happens while typing. Ask: is typing a click?
- Moves the handler into its own `const` above the JSX. `npx tsc`: `Parameter 'event' implicitly has an 'any' type.`
  Ask: where did TypeScript know the type of `event` by itself? Let her keep it in the prop.
- State starts as `"Eva"` but the field is empty. Ask: what should the page show before typing?

## What if

- Show the name in capital letters. The field stays as typed.
- Show `Ahoj, cizinče` while the field is empty.

## Tips

- `event.target` is the field. `event.target.value` is the text in it.
- Typing does not change the page by itself. Your state does.

## Links

- Controlling an input: https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
