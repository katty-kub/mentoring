# Tutor: null or undefined

Her question: "What's the difference between null, undefined and NaN?"

In practice: undefined = not there yet (profile still loading, field missing).
null = someone cleared it on purpose. NaN = a number calculation failed.

## Ladder

- "How do you check if a value is exactly null?"
- "Change `name` to undefined, then "Ada". Does each print right?"

## Typical mistakes

- `if (!name)`. Mixes up null, undefined and "". Ask what `""` should print.
- Using `==`: `null == undefined` is true. Let pin-check show why that matters.

## What if

- What should `""` print? Is an empty name "empty" or a name?

## Tips

- APIs often send `null` for "no value". A field that isn't sent at all is `undefined`.

## Links

- null: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
- undefined: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
