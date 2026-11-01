// Tidy commits (úklid commitů před PR)                              Guided (s návodem)
//
// Cíl: spoj své nepořádné commity (uložení změn) v jeden, než otevřeš PR (žádost o sloučení).
// Nástroj: git reset --soft z tasku reset-modes.
// Změny zůstanou zelené ve stage (přípravě ke commitu).
//
// Všechny příkazy v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding-extended/12-tidy-commits/task.js
//
// Kroky:
//   1. Start jako vždy: čistý main, pak git switch -c onboarding/tidy-commits
//   2. Tři nepořádné commity. Po každé změně git add <soubor> a git commit -m "<message>":
//        a) Odpověz na otázku dole.            message: wip
//        b) "apple" změň na "banana".          message: fix
//        c) "banana" změň na "cherry".         message: asdf
//      git push -u origin onboarding/tidy-commits. git log --oneline -4. Hnus, že?
//   3. Úklid: git reset --soft origin/main. git status: co je zelené? git log --oneline -1?
//   4. git commit -m "feat(onboarding): solve tidy-commits". Teď je jen jeden commit.
//   5. git push. Přečti chybu. Pak git push --force-with-lease.
//      Smíš: je to tvoje branch (větev) a nikdo jiný na ní nepracuje.
//   6. PR, title (název): feat(onboarding): solve tidy-commits.
//      Záložka Commits: kolik jich tam je? Squash and merge.
//      Ukliď: git switch main && git pull && git branch -D onboarding/tidy-commits

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Otázky: odpověz pod každou ---

// 1. Proč úklid commitů jen na své branchi, ne na main?
// Odpověď:

// Hotovo, když: tvůj PR je merged (sloučený) a v záložce Commits byl jen jeden commit.
