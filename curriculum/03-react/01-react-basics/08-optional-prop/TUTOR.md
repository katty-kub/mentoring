# Tutor: Optional prop

Her question: "How do you make a prop optional, with a default value?"

## Ladder

- "In optional-field, how did you mark a field that can be missing?"
- "If `size` is missing, what is it? What should it be instead?"
- "Where can a function parameter get a value when nobody passes one?"

## Typical mistakes

- Makes `size` optional but no default. `npx tsc` is clean, but E and P lose their circle.
  Ask: what is `size` for Eva now? How wide is `undefined` px?
- Uses `size || 48` in the body. Works, but ask: what if someone passes `0`?
- Leaves `size={48}` on Eva and Petr. Done = they have no `size`, Jana keeps 96.
- Page looks the same. That is the goal.

## What if

- Add `<Avatar name="Ota" size={0} />`. Then try `size || 48`. What changes?
- Add an optional `color` with default `"teal"`.

## Tips

- Optional prop + default value = short calls for the common case.
- `style={{ … }}`: outer braces = JavaScript, inner braces = an object.

## Links

- Specifying a default value for a prop: https://react.dev/learn/passing-props-to-a-component#specifying-a-default-value-for-a-prop
- Optional properties: https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties
