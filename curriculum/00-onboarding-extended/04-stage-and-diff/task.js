// Stage (příprava ke commitu) a diff (rozdíl)                     Guided (s návodem)
//
// Cíl: před každým commitem (uložením změn) víš, co v něm bude. Zbytečnou změnu umíš zahodit.
//
// Tři místa, kde žije změna:
//   working directory (pracovní složka) → stage (git add) → commit (uložení změn, git commit)
//
// Všechny příkazy spouštěj v root (kořeni) repa, tam kde je README.md.
// <soubor> = curriculum/00-onboarding-extended/04-stage-and-diff/task.js
//
// Kroky:
//   1. Start: git switch main && git pull. Spusť git status. Musí říct "nothing to commit".
//   2. Nová branch (větev) pro tento task: git switch -c onboarding/stage-and-diff
//   3. Níže změň "apple" na "banana". git status: jakou barvu má <soubor>? git diff: co ukáže?
//   4. git add <soubor>. git status: jaká barva teď? git diff a git diff --staged: co ukážou?
//   5. Vrať ho ze stage: git restore --staged <soubor>. git status. Pak znovu git add <soubor>
//   6. Na konec README.md připiš řádek "xxx". git status. git diff README.md.
//      Zahoď to: git restore README.md. Je řádek pryč?
//   7. git commit -m "feat(onboarding): pick banana". git status: "nothing to commit"?
//   8. Odpověz na otázky.
//      Konec: git add <soubor> a git commit -m "feat(onboarding): solve stage-and-diff"
//   9. Push (pošli na GitHub): git push -u origin onboarding/stage-and-diff
//      Otevři pull request (žádost o sloučení).
//      Title (název): feat(onboarding): solve stage-and-diff. Squash and merge.
//  10. Ukliď: git switch main && git pull && git branch -D onboarding/stage-and-diff

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Otázky: odpověz pod každou ---

// 1. Svými slovy: co je rozdíl mezi git diff a git diff --staged?
// Odpověď:

// 2. git restore README.md smazal tvůj řádek "xxx". Dá se vrátit? Proč?
// Odpověď:

// Hotovo, když: tvůj PR je merged (sloučený) a node <soubor> na main vypíše banana.
