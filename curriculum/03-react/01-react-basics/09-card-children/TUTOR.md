# Tutor: Card children

Her question: "What is `children`, and when do you use it?"

## Ladder

- "Card doesn't know what goes inside. So who decides: Card, or Task?"
- "In greeting-prop the name came as a prop. What could the content inside `<Card>` be?"
- "Read the first line of the file. What could `ReactNode` describe?"

## Typical mistakes

- Makes props `title` and `text`. Works for the first card, but ask: the second card has 3 lines?
- `children: string`. Read the `npx tsc` error with her. Ask: is `<h2>` text?
- Writes `<Card />` and puts content after it. Ask: what is between `<Card>` and `</Card>`?
- Forgets `{children}` in Card. Page shows empty frames. Ask: where does Card show it?

## What if

- Put a `<Card>` inside a `<Card>`. What shows?
- Add a prop `title` next to `children`.

## Tips

- `children` = everything between the opening and closing tag. Layouts, cards, dialogs use it.
- `ReactNode` = anything React can show: text, numbers, JSX, lists, nothing.

## Links

- Passing JSX as children: https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
- Typing children: https://react.dev/learn/typescript#typing-children
