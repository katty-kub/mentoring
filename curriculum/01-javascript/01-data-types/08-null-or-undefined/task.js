// Print "missing" if name is undefined, "empty" if it's null. Else print the name.
// undefined → missing
// null      → empty
// "Ada"     → Ada



// your code


// node task.js should print: empty


const name = null;

if (name === undefined) {
  console.log('missing');
} else if (name === null) {
  console.log('empty');
} else {
  console.log(name);
};

/*
// Vytvoříme proměnnou name a uložíme do ní hodnotu null.
// null znamená, že hodnota je záměrně prázdná.
const name = null;

// Pokud je name přesně undefined, vypíšeme "missing".
if (name === undefined) {
  console.log('missing');

// Pokud předchozí podmínka neplatila a name je přesně null,
// vypíšeme "empty".
} else if (name === null) {
  console.log('empty');

// Pokud name není ani undefined, ani null,
// vypíšeme jeho skutečnou hodnotu, například "Ada".
} else {
  console.log(name);
}
  */