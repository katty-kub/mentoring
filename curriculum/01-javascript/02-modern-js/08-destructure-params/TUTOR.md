# Tutor: destructure params

Modify. Two good answers: destructure in the body, or in the parameters. Both are fine.

Her question: "Where can I destructure a function's input?"

## Ladder

- "In destructuring-predict, how did you take name out of product?"
- "Write that line as the first line of printUser. What can you delete then?"
- "Now `user` stands twice: in the `( )` and in your new line. Can one of them go?"

## Typical mistakes

- `(name, city)` without `{ }`. Prints `[object Object] (undefined)`. Ask: how many values come in?
- Destructures but keeps one `user.name`. Ask her to search the function for `.name`.
- Changes the two calls. Ask: can you change how other people call your function?

## What if

- Call `printUser({ name: "Ada" })`. What prints? Give city a default value: `"?"`.
- Add `age` to Eva's object. Does printUser break?

## Tips

- In the parameters you see at once what the function needs.
- This is exactly how React components take props: `const Badge = ({ label }) => …`.

## Links

- Destructuring function parameters: https://javascript.info/destructuring-assignment#smart-function-parameters
