// Squash and merge (spoj commity a sluč)                          Guided (s návodem)
//
// Cíl: nastav repo (repozitář) tak, aby každý pull request (PR, žádost o sloučení)
// přišel do main jako jeden commit (uložení změn) s dobrou message (popisem).
// Pak ukliď staré branche (větve) na GitHubu.
//
// Všechny příkazy spouštěj v root (kořeni) repa, tam kde je README.md.
// <soubor> = curriculum/00-onboarding/04-squash-merge/task.js
//
// Kroky:
//   1. Start: git switch main && git pull. Spusť git status. Musí říct "nothing to commit".
//   2. Nová branch pro tento task: git switch -c onboarding/squash-merge
//   3. git log --oneline main. Najdi commit z PR #14. Odpověz na otázku 1.
//      git add <soubor> a git commit -m "feat(onboarding): explain pr 14 message"
//   4. Na GitHubu: Settings → General → sekce "Pull Requests".
//      Vypni "Allow merge commits" a "Allow rebase merging". Nech zapnuté "Allow squash merging".
//      Pod ním v menu vyber možnost jen s "pull request title".
//      Ne tu s "commit details" ani s "description".
//      Zapni "Automatically delete head branches".
//   5. Staré branche: git fetch --prune a git branch -a.
//      Ke každé staré branchi najdi na GitHubu její PR (Pull requests → Closed).
//      PR je merged? Smaž branch na GitHubu (stránka Branches, koš).
//      PR je closed bez merge? Najdi PR, který vyřešil stejný task. Odpověz na otázku 3.
//      PR je open? Branch nech.
//      Stará branch je i u tebe v git branch? git branch -D <jméno>
//      Pak znovu git fetch --prune a git branch -a.
//   6. Odpověz na otázku 2.
//      Konec: git add <soubor> a git commit -m "feat(onboarding): solve squash-merge"
//   7. Push (pošli na GitHub): git push -u origin onboarding/squash-merge
//      Otevři PR. Title (název): feat(onboarding): solve squash-merge
//      V PR otevři záložku Commits. Kolik jich tam je?
//   8. Squash and merge. Přečti message v políčku, než potvrdíš.
//   9. git switch main && git pull. Pak git log --oneline -3. Kolik commitů přibylo?
//  10. Ukliď: git branch -D onboarding/squash-merge
//
// --- Otázky: odpověz pod každou ---

// 1. PR #14 měl title "completed task". Co vidíš u jeho commitu na main? Proč?
// Odpověď:

// 2. Co změní každé z nastavení v kroku 4?
// Odpověď:

// 3. Jedna stará branch měla PR closed bez merge. Proč ji smíš smazat taky?
// Odpověď:

// Hotovo, když: git log --oneline -1 main ukáže "feat(onboarding): solve squash-merge (#…)"
// a po git fetch --prune ukáže git branch -a jen main a branche s open PR.
