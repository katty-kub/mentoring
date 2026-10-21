// Fetch a pull (stažení změn z GitHubu)                            Predict (předpověz)
//
// Cíl: někdo přidal commit (uložení změn) do tvého PR (pull request, žádost o sloučení)
// na GitHubu. Dostaň ho k sobě.
//
// Všechny příkazy v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding/10-fetch-and-pull/task.js
//
// Kroky:
//   1. Start: git switch main && git pull. git status musí říct "nothing to commit".
//      Nová branch (větev): git switch -c onboarding/fetch-and-pull
//   2. Přečti si kroky 5–8. Níže napiš svůj tip ke každému řádku "tip:".
//      Ulož tipy: git add <soubor> a git commit -m "feat(onboarding): predict fetch-and-pull"
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
//   9. Porovnej výsledky se svými tipy. Odpověz na otázky.
//  10. Konec: git add <soubor> a git commit -m "feat(onboarding): solve fetch-and-pull"
//      git push. PR už je otevřený. Squash and merge.
//      git switch main && git pull && git branch -D onboarding/fetch-and-pull

const reviewer = "nobody";
console.log("reviewer:", reviewer);

// --- Tipy (krok 2) ---

// Krok 5, první git status (před fetch). tip:
// Krok 5, druhý git status (po fetch). tip:
// Krok 6, kolik commitů vypíše? tip:
// Krok 8, co vypíše node? tip:

// --- Otázky: odpověz pod každou ---

// 1. Co řekl první git status? Proč to řekl, když GitHub už měl nový commit?
// Odpověď:

// 2. Co udělal git fetch? A co navíc udělal git pull?
// Odpověď:

// 3. Proč v kroku 6 HEAD..origin/… a ne main..origin/…? Zkus obojí.
// Odpověď:

// Hotovo, když: tvůj PR je merged (sloučený) a node <soubor> na main vypíše mentor.
