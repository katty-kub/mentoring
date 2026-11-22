# Tutor: for each

Modify. Her first array method with a callback. The loop body moves into a function.

Her question: "Who calls my function, and with what?"

## Ladder

- "In callback-predict, twice called action two times. How many times should your function run here?"
- "What does the loop give you in each round? Your function needs the same input."
- "Search MDN: 'forEach'. Read the first example. What goes inside the `( )`?"

## Typical mistakes

- `prices.forEach(console.log)`. Prints `49 0 [ 49, 65, 45 ]`. Ask: forEach passes more than the item. What else?
- `console.log(prices.forEach(…))`. One extra line: `undefined`. Ask: what does forEach give back?
- Keeps the loop and adds forEach inside. Prints 9 lines. Ask: who goes through the array now?
- Uses `map`. Same output. Ask: what does map build? Do you use it? (map-predict comes next.)
- Calls the function herself: `forEach(print())`. Ask: sayHi or sayHi() in callback-predict?

## What if

- Add a second input to your function: `(price, index)`. Print both. What is index?
- Store your function in a name first: `const printPrice = …`. How does the forEach line look then?
- Add 30 to the array. Do you change the forEach line?

## Tips

- forEach is the loop written as a method: "for each price, do this".
- forEach gives nothing back. It only runs your function. The next methods give something back.

## Links

- forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
