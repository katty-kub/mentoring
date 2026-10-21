// Tvůj první pull request (žádost o sloučení)                    Guided (s návodem)
//
// Cíl: nauč se postup, kterým končí každý task (úkol):
// branch (větev) → commit (uložení změn) → pull request → merge (sloučení).
//
// Kroky:
//   1. Zkontroluj nástroje: node --version a git --version. Oba vypíšou verzi.
//   2. Vytvoř svou branch a jdi do této složky:
//        git switch -c onboarding
//        cd curriculum/00-onboarding/01-first-pull-request
//   3. Níže vypiš tři řádky. Spusť node task.js. Odpověz na otázky dole.
//   4. Spusť git status. Stage (připrav ke commitu): git add task.js.
//      Znovu spusť git status. Co se změnilo?
//      Commit: git commit -m "first pull request"
//   5. Push (pošli na GitHub): git push -u origin onboarding. Na GitHubu otevři pull request.
//      Udělej merge. Zpět na main (hlavní branch): git switch main && git pull
//
// Proč na tom záleží: nikdo nedělá push rovnou do main. Práce jde přes pull requesty,
// aby na ni ostatní mohli udělat review (kontrolu).

// TODO (krok 3): vypiš své jméno
console.log("Ahoj, jsem Katy.");
// TODO (krok 3): vypiš, proč se učíš programovat
 console.log("Baví mě tvořit vlastní aplikace a učit se, jak věci v kódu fungují.");
// TODO (krok 3): vypiš jednu věc, kterou chceš za tři měsíce vytvořit
console.log("Chci vytvořit vlastní aplikaci a učit se při tom programovat.");
// --- Otázky: odpověz pod každou ---

// 1. Svými slovy: co je branch, commit, pull request?
// Odpověď:Větev je oddělená pracovní linie, commit uložené změny a pull request žádost o kontrolu a sloučení.

// 2. Proč dávat do stage soubory podle jména, a ne „všechno“?
// Odpověď:Přidávám jen task.js, aby se do commitu nedostaly jiné nechtěné změny.

// 3. Přečti si README.md. Který z tvých pěti cílů je teď nejdůležitější? Proč?
// Odpověď:Nejdůležitější je pro mě rozdělit úkol na menší kroky, protože se tak lépe zorientuji a můžu postupovat postupně.
