// Predict what each line prints. Write your guess after it. Then run it.
// Number("12") → 12

console.log(Number("12px")); // guess: NaN 
console.log(parseInt("12px")); // guess: 12
console.log(Number("")); // guess: 0
console.log(parseInt("")); // guess: NaN
console.log(Number("3.5")); // guess: 3.5
console.log(parseInt("3.5")); // guess: 3

// node task.js prints 6 lines. Compare each one with your guess.
//parseInt` čte zleva, dokud jsou číslice.
//console.log(parseInt("12px")); // guess: 12 je prisnejsi



//Number() se dívá na celý řetězec najednou.
//Jestli jako celek vypadá jako číslo,
//převede ho. Pokud ne, nevybere si z něj kousek,
//ale vrátí NaN 
console.log(Number("12px")); // guess: NaN 
////parseInt` čte zleva, dokud jsou číslice.
console.log(parseInt("12px")); // guess: 12
//Pravidlo: když Number() dostane 
//prázdný řetězec nebo řetězec
//jen z mezer, vrátí 0.
console.log(Number("")); // guess: 0
console.log(parseInt("")); // guess: NaN
console.log(Number("3.5")); // guess: 3.5
console.log(parseInt("3.5")); // guess: 3

/*
Funguje to takhle: Number() 
nejdřív ořízne mezery na začátku a na konci. 
Když pak nezbyde nic, dá jako výsledek 0. 
Je to stará konvence, kterou už nejde změnit,
 aby se nerozbily existující weby.

parseInt k tomu přistupuje jinak.
 Hledá aspoň jednu číslici, a
  když žádnou nenajde, vrátí NaN