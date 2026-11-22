# Tutor: callback predict

First task of array-methods. Every method in this module takes a function as input.
She gave `sort` a function once, in sort-big-numbers. She did not have a name for it.

Her question: "What is the difference between `sayHi` and `sayHi()`?"

## Ladder

- "Read `sayHi()` out loud as 'run sayHi now'. Read `sayHi` as 'the function itself'. Which one is in `twice(sayHi)`?"
- "Inside twice, the input is called action. What do the two lines with `action()` do?"
- "The 5th line with a tip has `sayHi()` inside. What runs first? What does sayHi give back?"
- "In sort-big-numbers, what did you put inside the `( )` of sort?"

## Typical mistakes

- Running it before guessing. Ask her to write all 6 tips first.
- One line of output per tip. Ask: how many times does twice call action?
- 5th tip: only `undefined`, or only `hi`. Ask: which part of the line runs first?
- 5th tip: `function`. Ask: is there a `()` after sayHi here? What comes out of sayHi?
- 3rd tip: nothing, "the function has no name". Ask: does twice need a name, or a function?

## What if

- Change `twice(sayHi)` to `twice(sayHi())`. Tip first. Read the error: what did twice get?
- Add `console.log(sayHi);`. What prints?
- Write `thrice`. How much code is new?

## Tips

- A function is a value, like a number. You can store it in a name and pass it on.
- Without `()`: you hand the function over. With `()`: you run it now and hand over the result.
- A function you pass to another function is a callback. The other function decides when to call it.

## Links

- Callback function: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
