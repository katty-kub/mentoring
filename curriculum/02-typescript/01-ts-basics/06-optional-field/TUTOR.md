# Tutor: Optional field

Her question: "How do you mark a field that can be missing?"

## Ladder

- "Read the error. Which contact does it point to? What is it missing?"
- "Who should change: the data or the type? Can Petr just have no phone?"

## Typical mistakes

- Gives Petr `phone: ""`. Ask: does Petr have a phone? What does "" mean then?
- Output is the same before and after. Done = `contacts` has the type, `npx tsc` is clean.
- Union with undefined: Petr must still write `phone: undefined`. Ask her to try it.

## What if

- Hover over `contact.phone`. What type is it now? Why?

## Tips

- Data from forms and APIs often has holes. The type should say so.

## Links

- Optional properties: https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties
