// Revert (vrácení commitu)                                         Rescue (záchrana), jen cíl
//
// Cíl: main má špatný commit (uložení změn).
// Oprav main tak, aby nikomu nerozbil clone (kopii repa).
//
// Pravidla: main je chráněný (task protect-main). Žádný reset (posun branche),
// žádný force push (vynucený push).
// Oprava jde přes pull request (žádost o sloučení). Title (název) i body (tělo zprávy)
// podle COMMITS.md.
// Body napiš do políčka v okně Squash and merge, než potvrdíš.
//
// Všechny příkazy v root (kořeni) repa, i u kolegy.
// <soubor> = curriculum/00-onboarding/17-revert-merge/task.js
//
// Rozbij:
//   1. Čistý main (hlavní branch, větev): git switch main && git pull.
//      git status: "nothing to commit".
//   2. git switch -c practice/bad-fruit. Níže smaž uvozovky kolem "apple".
//      git add <soubor> a git commit -m "refactor(onboarding): drop quotes around apple".
//      Push -u. PR s title refactor(onboarding): drop quotes around apple. Squash and merge.
//   3. Kolega: složka ../mentoring-kolega z tasku bad-merge. Kolegův terminál není otevřený?
//      VS Code: Terminal → New Terminal, v něm cd ../mentoring-kolega
//      Kolegův terminál: git switch main && git pull. Spusť node <soubor>.
//
// Oprav: sama, bez kroků. Pak git branch -D practice/bad-fruit.
//
// Důkaz: u kolegy git pull projde bez resetu a node <soubor> zase vypíše apple.
// Teď zkontroluj řádek "Hotovo, když" dole.
//
// Konec: Start jako vždy, branch onboarding/revert-merge. Odpověz na otázky. Konec jako vždy.

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Otázky: odpověz pod každou ---

// 1. Co je v novém commitu na main? Podívej se: git show <sha>
// Odpověď:

// 2. Proč je tohle lepší než reset --hard a force push z bad-merge?
// Odpověď:

// 3. Ta změna byla nakonec správně. Jak ji vrátíš zpátky?
// Odpověď:

// Hotovo, když: po git fetch ukáže git log -1 origin/main tvůj revert commit podle COMMITS.md
// i s body, a kolegův git pull prošel bez resetu.
