# Tutor: isNaN or Number.isNaN

Her question: "When do I use isNaN() or Number.isNaN() in a real app?"

## Ladder

- "Run it. They disagree. Is "abc" itself NaN, or text?"
- "Read the first lines of both MDN pages. Which one converts first?"

## Typical mistakes

- Thinking one is broken. Both do what they say. They answer different questions.

## What if

- Try `""` and `"12px"`. Which answer would you want in a form check?

## Tips

- Raw text from a form: convert with Number, then Number.isNaN. Clear in two steps.

## Links

- isNaN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
- Number.isNaN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
