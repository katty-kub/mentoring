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
// 1. rychle pochopit, co se změnilo a ve které části projektu
// 2. najít commit, který mohl způsobit chybu, a případně ho vrátit
// 3. vybrat správný commit pro revert nebo cherry-pick.

// --- Tabulka: stará message → nová message ---
// 1. 400c987 Add README
//    nová: docs(readme): add project documentation
// 2. cc507d2 Add tutor setup and first curriculum tasks
//    nová: feat(tutor): add tutor setup
// 3. 3c6f040 Print types of variables in task.js - "completed assignments"
//    nová: feat(data-types): solve print-types
// 4. c7a0186 first pull request
//    nová: feat(onboarding): solve first-pull-request
// 5. 72ec1a7 feat: complete javascript task 2
//    nová:feat(data-types): solve text-to-number
// 6. 472d164 feat: complete javascript task 3
//    nová:feat(data-types): solve plus-or-minus
// 7. a8c9497 feat: complete javascript task 4
//    nová:feat(data-types): solve text-to-nan
// 8. b2786af Restore starter task for printing value types
//b2786af Restore starter task for printing value types
//    nová:revert(data-types): solve print-types
// Reverts 3c6f040.
// 9. f677172 Solve print types exercise
//    nová:feat(data-types): solve print-types
// 10. 20e9336 Restore starter task for text to number
//    nová:revert(data-types): solve text-to-number
// 11. f1feb8c Restore starter task for coercion predictions
//    nová:revert(data-types): solve plus-or-minus
// 12. c4dcecb Solve text to number exercise
//    nová:feat(data-types): solve text-to-number
// 13. 60f83f7 Solve plus or minus predictions
//    nová:feat(data-types): solve plus-or-minus
// 14. d94194b Solve check NaN task
//    nová:feat(data-types): solve check-nan
// 15. e79fc75 Solve text to NaN exercise (#6)
//    nová:feat(data-types): solve text-to-nan (#6)
// 16. 80ab957 Katy/10 trim greeting (#16)
//    nová:feat(data-types): solve trim-greeting and 2 more (#16)
// 17. 5f62309 Solve number or parseInt exercise (#13)
//    nová:feat(data-types): solve number-or-parseint (#13)
// 18. b97f1b3 Katy/09 truthy falsy (#15)
//    nová: feat(data-types): solve truthy-falsy (#15)
// 19. f6a20c2 completed task (#14)
//    nová:feat(data-types): solve null-or-undefined (#14)
// 20. e12e626 Translate learner docs and task comments to Czech (#17)
//    nová:nová: docs(curriculum): translate learner materials to Czech (#17)

// Hotovo, když: každý řádek "nová:" má message podle COMMITS.md a tvůj PR je merged.
