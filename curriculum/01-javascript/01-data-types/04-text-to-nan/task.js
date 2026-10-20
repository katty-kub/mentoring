// Turn the input into a number. Print it. Then print its type.
// "abc" → NaN number

const input = "abc";

// your code
const number = Number(input);

console.log(number); //NaN
console.log(typeof number); //number

// node task.js should print:
// NaN
// number

/*
const input = "abc";
const number = Number(input);

- input obsahuje text "abc".
- Number(input) zkusí z textu udělat číslo
- Z "abc" číslo udělat nejde, takže JavaScript uloží výsledek NaN.
NaN znamená: „převod na číslo se nepovedl“.

typeof number

Ten neověřuje, jestli je hodnota platné číslo. 
Říká, do jaké skupiny JavaScript tu hodnotu řadí. 
NaN JavaScript řadí do skupiny number, proto vypíše "number".


NaN je neplatná hodnota, 
kterou JavaScript přesto ukládá mezi čísla.
CRAZY 
 */