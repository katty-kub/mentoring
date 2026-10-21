// Branches (větve)                                                Guided (s návodem)
//
// Cíl: pochop, co je branch (větev) a HEAD (místo, kde jsi).
// Přepínej mezi branchemi bez ztráty práce.
//
// Branch je jen štítek na commitu (uložení změn). HEAD ukazuje, kde právě jsi.
//
// Všechny příkazy spouštěj v root (kořeni) repa, tam kde je README.md.
// <soubor> = curriculum/00-onboarding/08-branches/task.js
//
// Kroky:
//   1. Start: git switch main && git pull. Spusť git status. Musí říct "nothing to commit".
//   2. Nová branch pro tento task: git switch -c onboarding/branches
//   3. Nakresli níže, jak bude vypadat git log --oneline --graph --all po kroku 5.
//      Ulož: git add <soubor> a git commit -m "feat(onboarding): draw branches graph"
//   4. git log --oneline -3. Kde je HEAD? Pak: git switch -c practice/branch-a
//      Znovu git log --oneline -3. Kolik štítků je na stejném commitu?
//   5. Níže změň "apple" na "banana". git add <soubor>
//      a git commit -m "feat(onboarding): pick banana"
//      Pak git switch onboarding/branches. Podívej se do souboru. Co je tam za ovoce?
//      git log --oneline --graph --all. Porovnej se svou kresbou.
//   6. Na onboarding/branches změň "apple" na "kiwi". Commit nedělej.
//      Zkus git switch practice/branch-a. Co píše git?
//   7. git stash (odlož změny stranou). git status. Teď git switch practice/branch-a funguje.
//      Zpátky: git switch onboarding/branches a git stash pop. Je kiwi zpátky?
//   8. Kiwi zahoď: git restore <soubor>. git status: "nothing to commit".
//   9. Na konec README.md připiš řádek "xxx". Zkus git switch practice/branch-a.
//      Co se stalo s tvým řádkem? Proč teď git nic nenamítal?
//      Ukliď: git restore README.md a git switch onboarding/branches
//  10. git branch -r. Přečti v README.md pravidlo pro jména branchí.
//  11. Smaž cvičnou branch: git branch -D practice/branch-a
//  12. Odpověz na otázky.
//      Konec: git add <soubor> a git commit -m "feat(onboarding): solve branches"
//  13. Push (pošli na GitHub): git push -u origin onboarding/branches
//      Otevři pull request (žádost o sloučení). Title (název): feat(onboarding): solve branches
//  14. U tlačítka merge (sloučení) vyber šipkou "Squash and merge".
//      Message (popis) nech stejnou jako title.
//  15. Ukliď: git switch main && git pull && git branch -D onboarding/branches

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Kresba (krok 3) ---
//

// --- Otázky: odpověz pod každou ---

// 1. Svými slovy: co je branch a co je HEAD?
// Odpověď:

// 2. V kroku 6 git přepnutí odmítl, v kroku 9 ne. Proč?
// Odpověď:

// 3. Které branche z git branch -r porušují pravidlo pro jména? Co je na nich špatně?
// Odpověď:

// Hotovo, když: git branch neukazuje practice/branch-a, v souboru na main je "apple"
// a tvůj PR je merged (sloučený).
