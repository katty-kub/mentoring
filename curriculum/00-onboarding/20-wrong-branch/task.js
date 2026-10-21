// Wrong branch (commit na špatné branchi)                           Rescue (záchrana)
//
// Cíl: tvůj commit (uložení změn) omylem skončil na main. Přesuň ho na novou branch (větev)
// onboarding/wrong-branch. Tvůj main pak musí být stejný jako origin/main na GitHubu.
//
// Všechny příkazy v root (kořeni) repa. <soubor> = curriculum/00-onboarding/20-wrong-branch/task.js
//
// Rozbij to podle kroků:
//   1. git switch main && git pull. git status musí říct "nothing to commit".
//   2. Pod "Kresba" nakresli, jak vypadá git log --oneline --graph teď.
//   3. Omylem commit na main: git add <soubor>
//      a git commit -m "feat(onboarding): draw wrong-branch graph"
//   4. Spusť git status. Co píše o origin/main?
//
// Oprav to sama, bez kroků. Nic nepushuj (neposílej na GitHub) na main.
// Před každým příkazem řekni tutorovi: která branch, co se ztratí, jak zpět.
//
// Pak na onboarding/wrong-branch odpověz na otázky. Konec jako vždy.

// --- Kresba (krok 2) ---
//

// --- Otázky: odpověz pod každou ---

// 1. Proč git status na main psal "ahead of 'origin/main' by 1 commit"?
// Odpověď:

// 2. Tvoje oprava smazala commit z main. Proč se tvoje kresba neztratila?
// Odpověď:

// 3. Najdi v git log --oneline --graph commity "Restore starter task…". Jak se dostaly do main?
// Odpověď:

// 4. Jaký zvyk ti tuhle chybu ušetří?
// Odpověď:

// Hotovo, když: git status na main píše "up to date with 'origin/main'"
// a tvůj PR (žádost o sloučení) z onboarding/wrong-branch je merged (sloučený).
