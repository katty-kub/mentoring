// Commit strategy (pravidla pro popisy commitů)                   Guided (s návodem)
//
// Cíl: navrhni novou message (popis) podle COMMITS.md pro každý z 20 starých
// commitů (uložení změn).
//
// Všechny příkazy spouštěj v root (kořeni) repa, tam kde je README.md.
// <soubor> = curriculum/00-onboarding-extended/02-commit-strategy/task.js
//
// Kroky:
//   1. Start: git switch main && git pull. Spusť git status. Musí říct "nothing to commit".
//   2. Nová branch (větev) pro tento task: git switch -c onboarding/commit-strategy
//   3. Přečti COMMITS.md v root repa (repozitáře).
//   4. Odpověz na otázku 1.
//   5. Seznam starých commitů (uložení změn): git log --oneline --no-merges --reverse e12e626
//      Je to stejný seznam jako dole, od nejstaršího. Vlevo je SHA (otisk commitu).
//   6. Pro každý commit: git show --stat <SHA>. Uvidíš, které soubory změnil.
//      Pod commit napiš novou message. U commitu s (#NN) nech číslo na konci.
//   7. Konec: git add <soubor> a git commit -m "feat(onboarding): solve commit-strategy"
//   8. Push (pošli na GitHub): git push -u origin onboarding/commit-strategy
//      Otevři pull request (žádost o sloučení).
//      Title (název): feat(onboarding): solve commit-strategy
//   9. U tlačítka merge (sloučení) vyber šipkou "Squash and merge".
//      Message nech stejnou jako title.
//  10. Ukliď: git switch main && git pull && git branch -D onboarding/commit-strategy
//
// Proč na tom záleží: tahle tabulka je tvůj plán. V tasku clean-history podle ní opravíš
// celou history (historii).

// --- Otázky: odpověz pod každou ---

// 1. K čemu je dobrá history s dobrými messages? Najdi aspoň tři situace.
// Odpověď:

// --- Tabulka: stará message → nová message ---
// 1. 400c987 Add README
//    nová:
// 2. cc507d2 Add tutor setup and first curriculum tasks
//    nová:
// 3. 3c6f040 Print types of variables in task.js - "completed assignments"
//    nová:
// 4. c7a0186 first pull request
//    nová:
// 5. 72ec1a7 feat: complete javascript task 2
//    nová:
// 6. 472d164 feat: complete javascript task 3
//    nová:
// 7. a8c9497 feat: complete javascript task 4
//    nová:
// 8. b2786af Restore starter task for printing value types
//    nová:
// 9. f677172 Solve print types exercise
//    nová:
// 10. 20e9336 Restore starter task for text to number
//    nová:
// 11. f1feb8c Restore starter task for coercion predictions
//    nová:
// 12. c4dcecb Solve text to number exercise
//    nová:
// 13. 60f83f7 Solve plus or minus predictions
//    nová:
// 14. d94194b Solve check NaN task
//    nová:
// 15. e79fc75 Solve text to NaN exercise (#6)
//    nová:
// 16. 80ab957 Katy/10 trim greeting (#16)
//    nová:
// 17. 5f62309 Solve number or parseInt exercise (#13)
//    nová:
// 18. b97f1b3 Katy/09 truthy falsy (#15)
//    nová:
// 19. f6a20c2 completed task (#14)
//    nová:
// 20. e12e626 Translate learner docs and task comments to Czech (#17)
//    nová:

// Hotovo, když: každý řádek "nová:" má message podle COMMITS.md a tvůj PR je merged.
