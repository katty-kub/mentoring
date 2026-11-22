# Tutor: reduce predict

Predict only. She should be able to read `reduce` in other people's code. She does not have to write it yet.
She wrote the same thing with a loop in sum-numbers.

Her question: "What is `sum` in each round, and where does it come from?"

## Ladder

- "The function has two inputs. One is the item. Where does the first sum come from? Look at the end of reduce."
- "First round: sum is 0, price is 49. What does the function give back? Where does that value go?"
- "Make a table on paper: round, sum, price, returned value. Fill three rows."
- "Open your sum-numbers task. Which name there does the same job as sum?"

## Typical mistakes

- Running it before guessing. Ask her to write all 5 tips first: three for the inner console.log.
- First inner tip: `49 65`. Ask: what is the `0` at the end of reduce for?
- Tips where sum stays 0. Ask: what happens with the returned value?
- Last tip: 159. Ask: does that function add the price, or something else?
- Total tip: an array. Ask: how many values come out of reduce?

## What if

- Change the `0` at the end of the first reduce to 100. Tip first.
- Remove `return` from the first function. Tip first. What is sum in the second round?
- Remove the `, 0` from the first reduce. How many inner lines print now? Why?

## Tips

- map: array to array. filter: array to smaller array. reduce: array to one value.
- Always give reduce a start value. Then an empty array works too.
- A loop with a sum is just as good. Pick what you can read.

## Links

- reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
