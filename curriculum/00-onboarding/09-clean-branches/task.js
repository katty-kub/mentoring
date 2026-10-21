// Clean branches (ukliď branche)                                  Guided (s návodem)
//
// Cíl: na GitHubu i u tebe zůstanou jen branches (větve), které někdo ještě potřebuje.
//
// Pravidlo: než smažeš branch, která není merged (sloučená), zjisti, kde je její práce.
//
// Všechny příkazy spouštěj v root (kořeni) repa, tam kde je README.md.
// <soubor> = curriculum/00-onboarding/09-clean-branches/task.js
//
// Kroky:
//   1. Start: git switch main && git pull. Spusť git status. Musí říct "nothing to commit".
//   2. Nová branch pro tento task: git switch -c onboarding/clean-branches
//   3. git fetch --prune. Pak git branch -a -vv. Kolik branchí vidíš u sebe a kolik na GitHubu?
//   4. Na GitHubu otevři Pull requests, filtr Closed. Ke každé branchi z remote (vzdáleného repa)
//      najdi její PR (pull request, žádost o sloučení). Je merged, nebo jen closed (zavřený)?
//   5. Mentorovy branche (czech-translation, repo-setup) taky patří k PR.
//      Platí pro ně stejné pravidlo.
//      onboarding-pr je tvoje první branch onboarding, jen přejmenovaná. Její PR je #2.
//   6. Na GitHubu otevři stránku Branches. Smaž branche, jejichž práce je už v main.
//   7. git fetch --prune. Pak git branch -vv. Co znamená [gone]?
//   8. Smaž své místní staré branche: nejdřív git branch -d <jméno>.
//      Odmítne to? Zkontroluj PR na GitHubu. Je merged? Pak git branch -D <jméno>.
//   9. Odpověz na otázky.
//      Konec: git add <soubor> a git commit -m "feat(onboarding): solve clean-branches"
//  10. Push (pošli na GitHub): git push -u origin onboarding/clean-branches
//      Otevři pull request. Title (název): feat(onboarding): solve clean-branches
//  11. U tlačítka merge vyber šipkou "Squash and merge".
//      Message (popis) nech stejnou jako title.
//  12. Ukliď: git switch main && git pull && git branch -D onboarding/clean-branches
//      Pak git fetch --prune a git branch -a.

// --- Otázky: odpověz pod každou ---

// 1. Proč git branch -d u některých branchí odmítl, i když jejich PR byl merged?
// Odpověď:

// 2. katy/05-check-nan patří k PR #11, který byl zavřený bez merge. Je ta práce někde jinde?
//    Jak jsi to zjistila?
// Odpověď:

// 3. Proč je dobré mazat branche po merge?
// Odpověď:

// Hotovo, když: po kroku 12 ukáže git branch -a jen main, origin/main a origin/HEAD.
