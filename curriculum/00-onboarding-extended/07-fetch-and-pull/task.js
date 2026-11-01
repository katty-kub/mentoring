// Fetch a pull (stažení změn z GitHubu)                            Guided (s návodem)
//
// Cíl: někdo přidal commit (uložení změn) do tvého PR (pull request, žádost o sloučení)
// na GitHubu. Dostaň ho k sobě.
//
// Všechny příkazy v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding-extended/07-fetch-and-pull/task.js
//
// Kroky:
//   1. Start: git switch main && git pull. git status musí říct "nothing to commit".
//      Nová branch (větev): git switch -c onboarding/fetch-and-pull
//   2. Odpověz na otázku 1.
//      git add <soubor> a git commit -m "feat(onboarding): answer fetch question"
//   3. Push (pošli na GitHub): git push -u origin onboarding/fetch-and-pull
//      Otevři pull request. Title (název): feat(onboarding): solve fetch-and-pull
//   4. Teď jsi kolega na GitHubu. V PR otevři Files changed → … → Edit file.
//      Změň "nobody" na "mentor". Klikni Commit changes. Do políčka pro message (popis) napiš:
//      feat(onboarding): set reviewer to mentor
//      Tady u sebe nic neměň.
//   5. git status. Pak git fetch. Pak znovu git status.
//   6. git log --oneline HEAD..origin/onboarding/fetch-and-pull
//   7. git pull
//   8. node <soubor>
//   9. Odpověz na otázky 2 a 3.
//  10. Konec: git add <soubor> a git commit -m "feat(onboarding): solve fetch-and-pull"
//      git push. PR už je otevřený. Squash and merge.
//      git switch main && git pull && git branch -D onboarding/fetch-and-pull

const reviewer = "nobody";
console.log("reviewer:", reviewer);

// --- Otázky: odpověz pod každou ---

// 1. Proč obyčejný git status neví o změnách na GitHubu?
// Odpověď:

// 2. Co řekl git status po git fetch?
// Odpověď:

// 3. Co udělal git fetch? A co navíc udělal git pull?
// Odpověď:

// Hotovo, když: tvůj PR je merged (sloučený) a node <soubor> na main vypíše mentor.
