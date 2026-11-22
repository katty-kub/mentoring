# Tutor: Snapshot predict

Predict only. Inside one click, `count` does not change.

Her question: "When does `count` get its new value?"

## Ladder

- "`count` is a `const`. Can it change in the middle of the function?"
- "For the +2? button: put the number in place of `count` in both lines. What do the two lines say?"

## Typical mistakes

- Runs it first. Tips go in before she clicks.
- Tip 1: `1`. After checking, ask: which run of Task made this click function? What was count then?
- Tip 3: `3`. Ask her to read both lines with the number in place of `count`.

## What if

- Give the second button just one line: `setCount(count + 2)`. Tip first.
- Click +1 three times. What does the console show each time?

## Tips

- State is a snapshot: during one click, `count` is the number from the last render.
- `setCount` asks for a new render. The new value is there in the next one.
- If she asks how to add twice in one click: `setCount((c) => c + 1)`. Do not bring it up first.

## Links

- State as a snapshot: https://react.dev/learn/state-as-a-snapshot
