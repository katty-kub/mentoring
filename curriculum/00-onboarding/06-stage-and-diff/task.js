// Stage (příprava ke commitu) a diff (rozdíl)                     Predict (předpověz)
//
// Cíl: git ukáže tvoje dvě identity jako jednu. Pomůže ti soubor .mailmap.
//
// Tři místa, kde žije změna:
//   working directory (pracovní složka) → stage (git add) → commit (uložení změn, git commit)
//
// Všechny příkazy spouštěj v root (kořeni) repa, tam kde je README.md.
// <soubor> = curriculum/00-onboarding/06-stage-and-diff/task.js
//
// Kroky:
//   1. Start: git switch main && git pull. Spusť git status. Musí říct "nothing to commit".
//   2. Nová branch (větev) pro tento task: git switch -c onboarding/stage-and-diff
//   3. Přečti si kroky 5–10. U každého [A]–[H] napiš dole předpověď: co ukáže git status
//      (které soubory, červeně, nebo zeleně?) nebo git diff.
//      Ulož předpovědi: git add <soubor> a git commit -m "feat(onboarding): predict stage-and-diff"
//   4. git shortlog -sne. Najdi své dva řádky. Opiš si obě jména a emaily.
//   5. Vytvoř v root soubor .mailmap. Jeden řádek: nejdřív správná identita, pak stará.
//      Tvar na cizích datech:  Jana Nová <jana@example.com> Jana N <stara@example.com>
//      Správná je ta z tasku git-config. Pak git status [A] a git diff [B].
//   6. git add .mailmap. git status [C]. git diff [D] a git diff --staged [E].
//   7. Vrať ho ze stage: git restore --staged .mailmap. git status [F]. Pak znovu git add .mailmap
//   8. Na konec README.md připiš řádek "xxx". git status [G]. git diff. Pak git restore README.md
//   9. Smaž README.md v editoru. git status [H]. Pak git restore README.md. Je zpátky?
//  10. git commit -m "chore(git): add mailmap". Pak git shortlog -sne. Kolikrát tam jsi teď?
//  11. Odpověz na otázky.
//      Konec: git add <soubor> a git commit -m "feat(onboarding): solve stage-and-diff"
//  12. Push (pošli na GitHub): git push -u origin onboarding/stage-and-diff
//      Otevři pull request (žádost o sloučení).
//      Title (název): feat(onboarding): solve stage-and-diff
//  13. U tlačítka merge (sloučení) vyber šipkou "Squash and merge".
//      Message (popis) nech stejnou jako title.
//  14. Ukliď: git switch main && git pull && git branch -D onboarding/stage-and-diff

// --- Předpovědi (krok 3) ---
// [A]
// [B]
// [C]
// [D]
// [E]
// [F]
// [G]
// [H]

// --- Otázky: odpověz pod každou ---

// 1. Která předpověď nesedí? Proč to git ukázal jinak?
// Odpověď:

// 2. Svými slovy: co je rozdíl mezi git diff a git diff --staged?
// Odpověď:

// 3. git restore README.md smazal tvůj řádek "xxx". Dá se vrátit? Proč?
// Odpověď:

// 4. Používá GitHub soubor .mailmap? Jak jsi tam spojila své emaily?
// Odpověď:

// Hotovo, když: na main ukáže git shortlog -sne tvé jméno jen jednou.
