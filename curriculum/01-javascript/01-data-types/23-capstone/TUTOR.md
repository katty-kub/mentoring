# Tutor: capstone

Combines largest-number, text-to-number and only-real-numbers. Nothing new.
Higher bar for hints: before each rung, ask which earlier task helps.

## Ladder

- "Which earlier task is closest? What's missing from it?"
- "What does `Number("abc")` give? How do you check for that value?"

## Typical mistakes

- `value === NaN`. Always false. Let her find out with a `console.log`.
- `isNaN` vs `Number.isNaN`: both work here. Ask what each does with `"abc"`.

## What if

- What prints for `["abc"]`? What should?

## Tips

- Real apps do this daily: clean the input, skip bad values, then calculate.

## Links

- Number.isNaN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
