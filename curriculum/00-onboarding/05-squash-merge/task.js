// Squash and merge (spoj commity a sluč)                          Guided (s návodem)
//
// Cíl: nastav repo (repozitář) tak, aby každý pull request (PR, žádost o sloučení)
// přišel do main jako jeden commit (uložení změn) s dobrou message (popisem).
//
// Všechny příkazy spouštěj v root (kořeni) repa, tam kde je README.md.
// <soubor> = curriculum/00-onboarding/05-squash-merge/task.js
//
// Kroky:
//   1. Start: git switch main && git pull. Spusť git status. Musí říct "nothing to commit".
//   2. git log --oneline main. Najdi commit z PR #14. Odpověz na otázku 1.
//   3. Nová branch (větev) pro tento task: git switch -c onboarding/squash-merge
//   4. Nakresli níže dva grafy: tvoje branch se třemi commity, a main po squash (spojení commitů).
//      git add <soubor> a git commit -m "feat(onboarding): draw squash graphs"
//   5. Na GitHubu: Settings → General → sekce "Pull Requests".
//      Vypni "Allow merge commits" a "Allow rebase merging". Nech zapnuté "Allow squash merging".
//      Pod ním v menu vyber možnost jen s "pull request title".
//      Ne tu s "commit details" ani s "description".
//      Zapni "Automatically delete head branches".
//   6. Odpověz na otázku 2. git add <soubor>
//      a git commit -m "feat(onboarding): explain squash settings"
//   7. Odpověz na otázky 3 a 4: to jsou předpovědi.
//      Konec: git add <soubor> a git commit -m "feat(onboarding): solve squash-merge"
//   8. Push (pošli na GitHub): git push -u origin onboarding/squash-merge
//      Otevři PR. Title (název): feat(onboarding): solve squash-merge
//      V PR otevři záložku Commits. Kolik jich tam je?
//   9. Squash and merge. Přečti message v políčku, než potvrdíš.
//  10. git switch main && git pull. Pak git log --oneline -3. Porovnej se svou kresbou.
//  11. git fetch --prune. Pak git branch -vv. Co píše u tvé branche? Kde je na GitHubu?
//  12. Ukliď: git branch -d onboarding/squash-merge. Přečti, co git píše. Sedí to s předpovědí?
//      Zkontroluj na GitHubu, že PR je merged (sloučený). Pak git branch -D onboarding/squash-merge
//
// Volitelné: na GitHubu přejmenuj 1–2 staré PR podle COMMITS.md. Změní to main? Řekni tutorovi.

// --- Kresba (krok 4) ---
// Tvoje branch:
//
// main po squash:
//

// --- Otázky: odpověz pod každou ---

// 1. PR #14 měl title "completed task". Co vidíš u jeho commitu na main? Proč?
// Odpověď:

// 2. Co změní každé z nastavení v kroku 5?
// Odpověď:

// 3. Předpověď: kolik commitů z této branche bude na main?
// Odpověď:

// 4. Předpověď: co řekne git branch -d po squash? Proč?
// Odpověď:

// Hotovo, když: git log --oneline -1 main ukáže "feat(onboarding): solve squash-merge (#…)".
