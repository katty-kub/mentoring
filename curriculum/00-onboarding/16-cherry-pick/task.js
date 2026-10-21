// Cherry-pick (přenesení jednoho commitu)                          Guided (s návodem)
//
// Cíl: pochop, co dělá git cherry-pick a kdy ho použít.
//
// Co to je: git cherry-pick <sha> vezme jeden commit (uložení změn) z jiné branch (větve).
// Udělá z něj nový commit na branchi, kde právě jsi. Změna je stejná, SHA (otisk commitu) je nový.
//
// Kdy se hodí:
//   - Jedna oprava je potřeba i na jiné branchi.
//   - Commitla jsi na špatnou branch s prací (ne na main).
//   - Chceš zachránit jeden dobrý commit ze staré nebo přepsané branch.
//
// Všechny příkazy v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding/16-cherry-pick/task.js
//
// Kroky:
//   1. Start jako vždy: čistý main, pak git switch -c onboarding/cherry-pick
//   2. Volitelné (nepovinné): vyzkoušej si to.
//        git switch main && git switch -c practice/pick-a
//        Níže změň "apple" na "banana". git add <soubor>
//        git commit -m "feat(onboarding): pick banana"
//        git log --oneline -1. Opiš si SHA.
//        git switch main && git switch -c practice/pick-b
//        git cherry-pick <sha>
//        git log --oneline -1. Porovnej SHA s tím, co sis opsala.
//        Ukliď: git switch onboarding/cherry-pick
//        a git branch -D practice/pick-a practice/pick-b
//   3. Odpověz na otázky. Konec jako vždy.
//
// Proč na tom záleží: v tasku rescue-colleague tím zachráníš commit, který zmizel z GitHubu.

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Otázky: odpověz pod každou ---

// 1. Proč má zkopírovaný commit nový SHA, když je změna stejná?
// Odpověď:

// 2. Kdy je cherry-pick lepší než merge (sloučení) celé branch?
// Odpověď:

// 3. Co se stane, když se později do main dostane i původní commit?
// Odpověď:

// Hotovo, když: tvůj PR (žádost o sloučení) je merged (sloučený)
// a git branch neukáže žádnou practice/pick branch.
