// Merge conflict (konflikt při slučování)                         Guided (s návodem)
//
// Cíl: tvůj PR (pull request, žádost o sloučení) má konflikt s main. Vyřeš ho přes git merge main.
//
// Všechny příkazy v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding/13-merge-conflict/task.js
//
// Kroky:
//   1. Start jako vždy: čistý main, pak git switch -c onboarding/merge-conflict.
//      To je branch (větev) B.
//   2. Níže změň "apple" na "banana". git add <soubor>
//      a git commit -m "feat(onboarding): pick banana". Push (poslání na GitHub) -u.
//      Otevři PR, title (název): feat(onboarding): solve merge-conflict
//   3. Branch A, taky z main: git switch main && git switch -c practice/fruit-a
//      Změň "apple" na "cherry". git add <soubor> a git commit -m "feat(onboarding): pick cherry".
//      Push -u. PR s title feat(onboarding): pick cherry. Squash and merge.
//   4. Otevři PR z kroku 2. Co píše GitHub?
//   5. Zpátky na B: git switch onboarding/merge-conflict
//      Nakresli níže, jak bude vypadat git log --oneline --graph po merge main.
//      git add <soubor> a git commit -m "feat(onboarding): draw merge graph"
//   6. git switch main && git pull && git switch onboarding/merge-conflict && git merge main
//      Spusť node <soubor>. Co se stalo?
//   7. Poprvé to vzdej: git merge --abort. Spusť git status a znovu node <soubor>.
//   8. Teď doopravdy: git merge main. Vyber jedno ovoce. Smaž značky <<<<<<<, =======, >>>>>>>.
//      node <soubor> musí běžet. Pak git add <soubor> a git commit.
//      VS Code: ulož, zavři tab (kartu).
//   9. Porovnej git log --oneline --graph se svou kresbou. git push. Co píše PR teď?
//  10. Odpověz na otázky. Konec jako vždy. Navíc smaž: git branch -D practice/fruit-a

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Kresba (krok 5) ---
//

// --- Otázky: odpověz pod každou ---

// 1. Proč git nevybral ovoce sám?
// Odpověď:

// 2. Proč node spadl, když v souboru byly značky?
// Odpověď:

// 3. Co přesně vrátil git merge --abort?
// Odpověď:

// Hotovo, když: oba PR jsou merged (sloučené) a node <soubor> vypíše tvoje ovoce.
