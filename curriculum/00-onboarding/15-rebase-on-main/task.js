// Rebase na main                                                    Guided (s návodem)
//
// Cíl: tvůj PR (pull request, žádost o sloučení) má konflikt s main. Vyřeš ho přes git rebase main.
//
// Všechny příkazy v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding/15-rebase-on-main/task.js
//
// Kroky:
//   1. Start jako vždy: čistý main, pak git switch -c onboarding/rebase-on-main.
//      To je branch (větev) B.
//   2. Přečti si všechny kroky. Nakresli níže dva grafy git log --oneline --graph:
//      po merge (sloučení) main (jako v tasku merge-conflict) a po rebase main.
//      Rebase = přehrání commitů na nový základ.
//      Ulož: git add <soubor> a git commit -m "feat(onboarding): draw rebase graphs"
//   3. Níže změň "apple" na "banana". git add <soubor>
//      a git commit -m "feat(onboarding): pick banana"
//      git push -u origin onboarding/rebase-on-main. Otevři PR,
//      title (název): feat(onboarding): solve rebase-on-main
//   4. Branch A, z main: git switch main && git switch -c practice/rebase-a
//      Změň "apple" na "cherry". git add <soubor> a git commit -m "feat(onboarding): pick cherry"
//      Push (poslání na GitHub) -u. PR s title feat(onboarding): pick cherry. Squash and merge.
//   5. Otevři PR z kroku 3. Co píše GitHub?
//   6. git switch main && git pull && git switch onboarding/rebase-on-main
//      git log --oneline -2. Opiš si oba SHA (otisky commitů) do chatu.
//   7. git rebase main. Vyber jedno ovoce. Smaž značky <<<<<<<, =======, >>>>>>>.
//      node <soubor> musí běžet. git add <soubor> a git rebase --continue.
//      VS Code: ulož, zavři tab (kartu).
//   8. git log --oneline --graph. Porovnej se svou kresbou a SHA s krokem 6.
//   9. git push. Přečti chybu. Pak git push --force-with-lease. Co píše PR teď?
//  10. Odpověz na otázky. Konec jako vždy. PR už je otevřený.
//      Navíc smaž: git branch -D practice/rebase-a

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Kresby (krok 2) ---
// Po merge main:
//
// Po rebase main:
//

// --- Otázky: odpověz pod každou ---

// 1. Proč mají tvoje commity (uložení změn) po rebase jiné SHA?
// Odpověď:

// 2. Proč git v kroku 9 odmítl obyčejný push? Co hlídá --force-with-lease?
// Odpověď:

// 3. Merge main, nebo rebase main: co skončí na main po squash (spojení commitů)? Je v tom rozdíl?
// Odpověď:

// 4. Proč rebase jen na své vlastní branchi?
// Odpověď:

// Hotovo, když: oba PR jsou merged (sloučené) a node <soubor> na main vypíše tvoje ovoce.
