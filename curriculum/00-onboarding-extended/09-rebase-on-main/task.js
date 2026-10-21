// Rebase na main                                                    Guided (s návodem)
//
// Cíl: tvůj PR (pull request, žádost o sloučení) má konflikt s main. Vyřeš ho přes git rebase main.
//
// Rebase = přehrání tvých commitů (uložení změn) na nový základ, nový main. Bez merge commitu.
//
// Všechny příkazy v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding-extended/09-rebase-on-main/task.js
//
// Kroky:
//   1. Start jako vždy: čistý main, pak git switch -c onboarding/rebase-on-main.
//      To je branch (větev) B.
//   2. Níže změň "apple" na "banana". git add <soubor>
//      a git commit -m "feat(onboarding): pick banana"
//      git push -u origin onboarding/rebase-on-main. Otevři PR,
//      title (název): feat(onboarding): solve rebase-on-main
//   3. Branch A, z main: git switch main && git switch -c practice/rebase-a
//      Změň "apple" na "cherry". git add <soubor> a git commit -m "feat(onboarding): pick cherry"
//      Push (poslání na GitHub) -u. PR s title feat(onboarding): pick cherry. Squash and merge.
//   4. Otevři PR z kroku 2. Co píše GitHub?
//   5. git switch main && git pull && git switch onboarding/rebase-on-main
//      git log --oneline -2. Opiš si oba SHA (otisky commitů) do chatu.
//   6. git rebase main. Vyber jedno ovoce. Smaž značky <<<<<<<, =======, >>>>>>>.
//      node <soubor> musí běžet. git add <soubor> a git rebase --continue.
//      VS Code: ulož, zavři tab (kartu).
//   7. git log --oneline --graph. Porovnej SHA s krokem 5. Je tam merge commit?
//   8. git push. Přečti chybu. Pak git push --force-with-lease. Co píše PR teď?
//   9. Odpověz na otázky. Konec jako vždy. PR už je otevřený.
//      Navíc smaž: git branch -D practice/rebase-a

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Otázky: odpověz pod každou ---

// 1. Proč mají tvoje commity (uložení změn) po rebase jiné SHA?
// Odpověď:

// 2. Proč git v kroku 8 odmítl obyčejný push? Co hlídá --force-with-lease?
// Odpověď:

// 3. Proč rebase jen na své vlastní branchi?
// Odpověď:

// Hotovo, když: oba PR jsou merged (sloučené) a node <soubor> na main vypíše tvoje ovoce.
