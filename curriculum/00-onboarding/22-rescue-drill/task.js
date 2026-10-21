// Rescue drill (záchranný trénink)                                  Rescue (záchrana)
//
// Cíl: šest rozbitých stavů. Každý rozbiješ podle kroků a opravíš sama, bez kroků.
//
// Všechny příkazy v root (kořeni) repa. <soubor> = curriculum/00-onboarding/22-rescue-drill/task.js
//
// U každého stavu, než cokoli opravíš:
//   - Spusť git status a git log --oneline --graph --all.
//   - Řekni tutorovi v chatu: co se stalo, co se může ztratit, jak to opravíš.
//   - Na konci zase git status: "nothing to commit".
//
// Začátek:
//   1. Start jako vždy: čistý main, pak git switch -c onboarding/rescue-drill
//   2. Branch (větev) na cvičení: git switch -c practice/drill
//      Všechny změny níže dělej v <soubor>, na řádku s ovocem.
//
// Stav 1. Rozbij:
//   - Změň "apple" na "kiwi". git add <soubor>. Pak změň "kiwi" na "lemon".
//   Oprav: <soubor> je jako v posledním commitu (uložení změn).
//   Stage (příprava ke commitu) je prázdný.
//
// Stav 2. Rozbij:
//   - git switch main. Změň "apple" na "mango".
//   - git add <soubor> a git commit -m "feat(onboarding): pick mango"
//   Oprav: commit s mango je na nové branchi practice/drill-mango. main je jako origin/main.
//   Pak se vrať: git switch practice/drill
//
// Stav 3. Rozbij:
//   - git switch main && git switch -c practice/drill-other
//   - Změň "apple" na "pear". git add <soubor> a git commit -m "feat(onboarding): pick pear"
//   - git switch practice/drill. Změň "apple" na "plum".
//     git add <soubor> a git commit -m "feat(onboarding): pick plum"
//   Oprav: practice/drill obsahuje i commit s pear. Vyber si: merge (sloučení),
//   nebo rebase (přehrání commitů na nový základ).
//   Poprvé dej abort (přerušení) uprostřed conflict (konfliktu). Pak doopravdy.
//   node <soubor> běží.
//
// Stav 4. Rozbij:
//   - Na konec souboru přidej // one. Commit: chore(onboarding): add one
//   - Přidej // two. Commit: chore(onboarding): add two
//   - git reset --hard HEAD~2
//   Oprav: oba commity jsou zpátky na practice/drill.
//
// Stav 5. Rozbij:
//   - git push -u origin practice/drill
//   - Kolegův terminál, složka ../mentoring-kolega (kolegův clone, kopie repa):
//     git switch main && git pull && git switch practice/drill
//     Do jeho <soubor> přidej // kolega jako nový první řádek.
//     Commit: chore(onboarding): add kolega. git push
//   - Zpět ve svém terminálu: na konec přidej // me. Commit: chore(onboarding): add me. git push
//   Oprav: na GitHubu jsou oba commity, kolegův i tvůj. Bez force push (vynuceného push).
//
// Stav 6. Rozbij:
//   - Změň ovoce na "fig". Commit: wip
//   - Přidej // fig is sweet. Commit: fix
//   - Vytvoř v root soubor junk.txt. git add junk.txt. Commit: asdf
//   Oprav: z těchhle tří je jeden commit s message (popisem) podle COMMITS.md.
//   junk.txt v něm není. Pak git push, bez force.
//
// Zkontroluj řádek "Hotovo, když" dole. Pak git switch onboarding/rescue-drill.
// Odpověz na otázky. Konec jako vždy. Navíc smaž practice/drill, practice/drill-mango
// a practice/drill-other: git branch -D u sebe. practice/drill i v kolegově clonu
// (nejdřív git switch main) a na GitHubu stránka Branches.

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Otázky: odpověz pod každou ---

// 1. Pro každý stav: jak se ta situace jmenuje a jakým příkazem jsi ji opravila?
// Odpověď:

// 2. Ve kterém stavu se mohlo něco ztratit navždy? Proč?
// Odpověď:

// 3. Ve stavu 3: proč sis vybrala merge, nebo rebase?
// Odpověď:

// 4. Ve stavu 6: proč nebyl potřeba force push?
// Odpověď:

// Hotovo, když: git log --oneline origin/practice/drill ukáže kolegův commit i tvůj čistý commit
// a tvůj PR (žádost o sloučení) je merged (sloučený).
