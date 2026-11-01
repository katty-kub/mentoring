// Vypiš "door open", jen když typed přesně odpovídá savedPin.
// Jinak vypiš "wrong PIN".
// "1234"   → door open
// " 1234 " → wrong PIN

const savedPin = 1234;
const typed = " 1234 ";

//console.log(typeof savedPin, typeof typed);
// your code

if (typed === String(savedPin)) {
    console.log('door open');
} else {
    console.log('wrong PIN')
}


// node task.js should print: wrong PIN


 /*
 - == (volná rovnost) před porovnáním sama převádí typy. Řetězec " 1234 " převede na číslo, mezery přitom zahodí a vyjde 1234. Proto == pustí dovnitř i PIN s mezerami.
- === (striktní rovnost) typy nepřevádí. Jiný typ znamená false. V týmech se používá skoro výhradně === a nástroje jako ESLint na == upozorní.
- Převod typů je pak potřeba udělat ručně a vědomě. Tím máš pod kontrolou, co přesně se porovnává.
*/

/*
dvě věci: savedPin je číslo, ale typed je text. PIN je nejlepší porovnávat jako text, protože mezery se mají počítat jako součást zadané hodnoty.

if typed === String(saved) {
    console.log('door open');
} else {
    console.log('wrong PIN')
}

String(savedPin) převede číslo 1234 na text "1234". Zadaný text " 1234 " pořád obsahuje mezery, takže se přesně neshoduje a vypíše se wrong PIN.

Kontrola s typed = "1234" by naopak vypsala door open.

 Number(typed) by mezery odstranilo při převodu, takže i " 1234 " by se změnilo na číslo 1234. Proto je tady vhodnější převést uložený PIN na text.
*/
