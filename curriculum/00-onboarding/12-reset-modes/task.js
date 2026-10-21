// Reset (posun branche): tři druhy                                Predict (předpověz)
//
// Cíl: předpověz, co udělá git reset --soft, --mixed a --hard s commitem (uložením změn).
//
// Všechny příkazy v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding/12-reset-modes/task.js
//
// Kroky:
//   1. Start jako vždy: čistý main, pak git switch -c onboarding/reset-modes
//   2. Přečti si kroky 4–7. Níže napiš ke každému "tip:" svůj tip.
//      Ulož tipy: git add <soubor> a git commit -m "feat(onboarding): predict reset-modes"
//   3. Branch (větev) na cvičení: git switch main && git switch -c practice/reset
//      Níže změň "apple" na "kiwi". git add <soubor> a git commit -m "feat(onboarding): pick kiwi"
//   4. git reset --soft HEAD~1. Spusť git status a node <soubor>.
//      Znovu commit: git commit -m "feat(onboarding): pick kiwi"
//   5. git reset HEAD~1 (to je --mixed). Spusť git status a node <soubor>.
//      Znovu commit: git add <soubor> a git commit -m "feat(onboarding): pick kiwi"
//   6. Spusť git status. Je čistý? Teprve pak: git reset --hard HEAD~1
//   7. Spusť git status, git log --oneline -1 a node <soubor>.
//   8. Zpět: git switch onboarding/reset-modes a git branch -D practice/reset
//   9. Porovnej výsledky se svými tipy. Odpověz na otázky. Konec jako vždy.

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Tipy (krok 2): zelené, červené, nebo nic? A co vypíše node? ---

// Krok 4, --soft. git status tip:
// Krok 4, --soft. node tip:
// Krok 5, --mixed. git status tip:
// Krok 5, --mixed. node tip:
// Krok 7, --hard. git status tip:
// Krok 7, --hard. node tip:

// --- Otázky: odpověz pod každou ---

// 1. Tři místa: working directory (pracovní složka), stage (příprava ke commitu), commit.
//    Co mění --soft, co --mixed, co --hard?
// Odpověď:

// 2. Proč máš v kroku 6 nejdřív spustit git status?
// Odpověď:

// 3. Je commit "pick kiwi" po --hard pryč navždy?
// Odpověď:

// Hotovo, když: u všech tipů máš výsledek, tvůj PR (žádost o sloučení) je merged (sloučený)
// a git branch neukáže practice/reset.
