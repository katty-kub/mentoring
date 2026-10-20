// Print "invalid" if the input isn't a number. Else print the number.
// "abc" → invalid
// "42"  → 42

const input = "abc"; // Text, který chceme převést na číslo
const number = Number(input); // Pokus o převod

if (Number.isNaN(number)) {
  // Pokud převod nevyšel, vypíšeme zprávu
  console.log("invalid");
} else {
  // Pokud převod vyšel, vypíšeme číslo
  console.log(number);
}

// node task.js should print: invalid
//Pro "abc" se Number(input) změní na NaN, takže program vypíše invalid. Když nastavím input na "42", vypíše 42.

/*
Program převede vstupní text na číslo
 pomocí Number(). 
 Funkce Number.isNaN() ověří,
zda převod selhal. Pokud ano, vypíše „invalid“;
jinak vypíše převedené číslo.

Protože "abc" nejde převést na číslo,
 number bude NaN a program vypíše:
 invalid

 Když změním vstup na const input = "42";, program vypíše 42.
 */