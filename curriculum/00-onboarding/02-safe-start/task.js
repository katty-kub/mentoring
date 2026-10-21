// Bezpečný začátek                                                 Guided (s návodem)
//
// Cíl: každý task (úkol) začneš na čerstvém main (hlavní branch) a na nové branch (větvi).
//
// Příkazy spouštěj v root (kořeni) repa, tam kde je README.md.
// <soubor> = curriculum/00-onboarding/02-safe-start/task.js
//
// Kroky:
//   1. git status. Musí říct "nothing to commit". Jinak stop: nic nemaž, napiš tutorovi.
//   2. git switch main
//      git pull --ff-only. Vypsal "Already up to date", nebo "Fast-forward"?
//   3. git log --oneline. Najdi svůj commit (uložení změn) z first-pull-request.
//      Konec výpisu: klávesa q.
//   4. git switch -c training/safe-start. git status: na které branchi jsi?
//   5. Odpověz na otázky dole.
//   6. git add <soubor>, git status. Pak git commit -m "feat(onboarding): solve safe-start"
//   7. git push -u origin training/safe-start
//      -u: git si zapamatuje, kam branch patří. Příště stačí git push.
//   8. Na GitHubu otevři pull request (žádost o sloučení): base (cíl) main ← training/safe-start.
//      Title (název): feat(onboarding): solve safe-start. Popis: co, proč, jak jsi to ověřila.
//      Squash and merge. Pak Delete branch.
//   9. git switch main, git pull --ff-only, git log --oneline. Je tvůj commit nahoře?
//
// Proč na tom záleží: starý main = práce na starém kódu. Konflikt přijde později a horší.

console.log("Fresh main, new branch.");

// --- Otázky: odpověz pod každou ---

// 1. Proč git status jako první, ještě před git switch?
// Odpověď:

// 2. --ff-only znamená fast-forward only (jen posun dopředu). Co tím git odmítne udělat?
// Odpověď:

// 3. Co je jeden řádek v git log --oneline? Co je to číslo na začátku?
// Odpověď:

// 4. Podle README jsi jednou spustila git clone a git config. Kdy je spustíš znovu?
// Odpověď:

// Hotovo, když: PR je merged (sloučený) a git log --oneline na main
// má nahoře feat(onboarding): solve safe-start.
