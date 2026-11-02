# Tutor: Capstone

Her question: "How do you split a page into components?"

## Ladder

- "Draw boxes around the parts of the page. Which boxes repeat?"
- "Which of your components are like Card, PriceTag, Stock from earlier tasks?"
- "What data does each box need? That is its props."
- "Write the type for one menu item first. Which field can be missing?"

## Typical mistakes

- Starts in JSX without a plan. Ask her to name the components first.
- One big `Task` with two copied lists. Ask: what is the same for Nápoje and Dezerty?
- `note: string` for all. Ask: does Espresso have a note?
- Shows "Vyprodáno" and the price. Ask her to read the expected page again.
- `count && …` again. Ask her about zero-on-page.
- Forgets the console. Done = page matches, console clean, `npx tsc` clean.

## What if

- Add a third section: Snídaně with one item.
- Show "Poslední kus!" when `count` is 1.

## Tips

- Plan the boxes, then the data, then the JSX. The types tell you what's missing.
- Small components with clear props are easy to read and to change.

## Links

- Thinking in React: https://react.dev/learn/thinking-in-react
