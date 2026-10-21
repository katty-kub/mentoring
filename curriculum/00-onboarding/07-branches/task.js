// Branches (větve)                                                Guided (s návodem)
//
// Cíl: pochop, co je branch (větev) a HEAD (místo, kde jsi).
// Přepínej mezi branchemi bez ztráty práce.
//
// Branch je jen štítek na commitu (uložení změn). HEAD ukazuje, kde právě jsi.
//
// Všechny příkazy spouštěj v root (kořeni) repa, tam kde je README.md.
// <soubor> = curriculum/00-onboarding/07-branches/task.js
//
// Kroky:
//   1. Start: git switch main && git pull. Spusť git status. Musí říct "nothing to commit".
//   2. Nová branch pro tento task: git switch -c onboarding/branches
//   3. git log --oneline -3. Kde je HEAD? Pak: git switch -c practice/branch-a
//      Znovu git log --oneline -3. Kolik štítků je na stejném commitu?
//   4. Níže změň "apple" na "banana". git add <soubor>
//      a git commit -m "feat(onboarding): pick banana"
//      Pak git switch onboarding/branches. Podívej se do souboru. Co je tam za ovoce?
//      git log --oneline --graph --all. Kde je který štítek?
//   5. Na onboarding/branches změň "apple" na "kiwi". Commit nedělej.
//      Zkus git switch practice/branch-a. Co píše git?
//   6. git stash (odlož změny stranou). git status. Teď git switch practice/branch-a funguje.
//      Zpátky: git switch onboarding/branches a git stash pop. Je kiwi zpátky?
//   7. Kiwi zahoď: git restore <soubor>. git status: "nothing to commit".
//   8. Přečti v README.md pravidlo pro jména branchí.
//   9. Smaž cvičnou branch: git branch -D practice/branch-a
//  10. Odpověz na otázky.
//      Konec: git add <soubor> a git commit -m "feat(onboarding): solve branches"
//  11. Push (pošli na GitHub): git push -u origin onboarding/branches
//      Otevři pull request (žádost o sloučení). Title (název): feat(onboarding): solve branches
//  12. U tlačítka merge (sloučení) vyber šipkou "Squash and merge".
//      Message (popis) nech stejnou jako title.
//  13. Ukliď: git switch main && git pull && git branch -D onboarding/branches

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Otázky: odpověz pod každou ---

// 1. Svými slovy: co je branch a co je HEAD?
// Odpověď:

// 2. V kroku 5 git přepnutí odmítl. Proč? Co ti pomohlo?
// Odpověď:

// Hotovo, když: git branch neukazuje practice/branch-a, v souboru na main je "apple"
// a tvůj PR je merged (sloučený).
