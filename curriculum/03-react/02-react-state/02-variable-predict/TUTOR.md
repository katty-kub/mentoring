# Tutor: Variable predict

The reason state exists. The variable changes, the page does not.

Her question: "Why does the page not change when the variable changes?"

## Ladder

- "Does the click run? What proves it?"
- "When did React read `count` to build the `<p>`? Did anyone ask React to build it again?"

## Typical mistakes

- Runs it first. Tips go in before she clicks.
- Tips `Kliků: 3` for the page. After checking, ask: who told React that something changed?
- Tips `0 0 0` for the console. Ask: is `count` really not changing?

## What if

- Click three times, then save the file again. What does the page show now? (It starts over: 0.)
- Move `let count = 0` inside Task. Tip first for the console. (Still 1, 2, 3: Task never runs again.)

## Tips

- React builds the page by calling your component. It does not watch your variables.
- A normal variable can change. But nothing tells React to call the component again.

## Links

- State: a component's memory: https://react.dev/learn/state-a-components-memory
