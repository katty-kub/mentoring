# Tutor: JSX predict

Her question: "What is JSX, and what do the curly braces `{}` do in it?"

## Ladder

- "Inside `{}` is plain JavaScript. What value does line 1 compute before React sees it?"
- "React gets a value. Which values would make no sense as text on a page?"

## Typical mistakes

- Runs it first. Tips go in before `npm run dev`.
- Guesses `true` for line 4. Ask: have you ever seen "true" written on a web page?
- Guesses nothing for line 6. Ask: is 0 a number? Numbers show. It returns in zero-on-page.
- Guesses `1,2,3` for line 8. Ask her to run `console.log(String([1, 2, 3]))` and compare.
- Thinks JSX is HTML. Ask: does HTML know what `price` is?

## What if

- Change line 7 to `{count > 0 ? "ano" : "ne"}`. What shows now?
- Add `<p>9: {undefined}</p>`. Tip first, then check.

## Tips

- JSX is JavaScript that looks like HTML. Everything in `{}` is a normal JS expression.
- `true`, `false`, `null` and `undefined` show nothing. That makes `&&` work later.

## Links

- JavaScript in JSX with curly braces: https://react.dev/learn/javascript-in-jsx-with-curly-braces
