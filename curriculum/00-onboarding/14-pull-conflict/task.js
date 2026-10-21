// Push rejected (odmítnutý push)                                    Guided (s návodem)
//
// Cíl: GitHub má na tvé branchi (větvi) commit (uložení změn), který ty nemáš.
// Spoj ho se svým a pošli.
//
// Všechny příkazy v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding/14-pull-conflict/task.js
//
// Kroky:
//   1. Start jako vždy: čistý main, pak git switch -c onboarding/pull-conflict
//   2. Přečti si všechny kroky. Nakresli níže git log --oneline --graph po kroku 8.
//      Ulož: git add <soubor> a git commit -m "feat(onboarding): draw pull-conflict graph"
//      git push -u origin onboarding/pull-conflict.
//      Otevři PR (pull request, žádost o sloučení),
//      title (název): feat(onboarding): solve pull-conflict
//   3. Teď jsi kolega na GitHubu. V PR otevři Files changed → … → Edit file.
//      Změň "apple" na "mango". Klikni Commit changes. Do políčka pro message (popis) napiš:
//      feat(onboarding): pick mango
//      Tady u sebe zatím nic nestahuj.
//   4. Tady změň "apple" na "pear". git add <soubor> a git commit -m "feat(onboarding): pick pear"
//   5. git push. Přečti chybu a řádky "hint:".
//   6. git pull. Co píše teď?
//   7. git pull --rebase. Spusť node <soubor>. Poprvé to vzdej: git rebase --abort.
//      Spusť git status a git log --oneline -3. Co se vrátilo?
//   8. Teď doopravdy: git pull --rebase. Vyber jedno ovoce. Smaž značky <<<<<<<, =======, >>>>>>>.
//      node <soubor> musí běžet. git add <soubor> a git rebase --continue.
//      VS Code: ulož, zavři tab (kartu).
//   9. Porovnej git log --oneline --graph se svou kresbou. git push.
//  10. Odpověz na otázky. Konec jako vždy. PR už je otevřený.

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Kresba (krok 2) ---
//

// --- Otázky: odpověz pod každou ---

// 1. Proč git v kroku 5 odmítl push?
// Odpověď:

// 2. Proč v kroku 6 nestačil obyčejný git pull?
// Odpověď:

// 3. Rebase (přehrání commitů na nový základ): co se stalo s tvým commitem "pick pear"?
//    Je pod, nebo nad commitem "pick mango"?
// Odpověď:

// 4. Proč v kroku 9 stačil obyčejný git push?
// Odpověď:

// Hotovo, když: tvůj PR je merged (sloučený) a node <soubor> na main vypíše tvoje ovoce.
