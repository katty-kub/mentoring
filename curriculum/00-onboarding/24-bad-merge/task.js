// Bad merge (špatné sloučení)                                      Guided (s návodem)
//
// Cíl: zkus špatný commit (uložení změn) z main vyhodit přes reset --hard
// a force push (vynucený push). Uvidíš, proč je to špatně.
//
// Je to druhá výjimka z pravidla "nikdy push do main".
// Všechny příkazy v root (kořeni) repa, i u kolegy.
// <soubor> = curriculum/00-onboarding/24-bad-merge/task.js
//
// Kroky:
//   1. Čistý main (hlavní branch, větev): git switch main && git pull.
//      git status: "nothing to commit".
//   2. Záloha, tag (štítek):
//        git tag backup/before-bad-merge origin/main
//        git push origin backup/before-bad-merge
//      Najdi tag na GitHubu (Tags). Není tam? Nepokračuj. Bez zálohy žádný reset.
//   3. Rozbij: git switch -c practice/oops. Níže smaž uvozovky kolem "apple".
//      node <soubor> nespouštěj. git add <soubor>
//      a git commit -m "refactor(onboarding): drop quotes around apple". Push -u.
//      PR (pull request, žádost o sloučení) s title (název):
//      refactor(onboarding): drop quotes around apple. Squash and merge.
//   4. Kolega: otevři druhý terminál ve složce mentoring-kolega (kolegův clone, kopie repa).
//        git switch main && git pull
//      Spusť tam node <soubor>. Co se stalo?
//   5. Než spustíš krok 6, řekni tutorovi: která branch, co se ztratí, jak zpátky.
//   6. U tebe:
//        git switch main && git pull
//        git reset --hard backup/before-bad-merge
//        git push --force-with-lease
//      Na GitHubu je main zase v pořádku.
//   7. Kolega: git fetch && git status. Přečti, co píše git. Push nedělej!
//   8. Kolega: git reset --hard origin/main
//   9. Na GitHubu otevři PR z kroku 3, záložku Commits. Je tam commit pořád?
//  10. U tebe: git branch -D practice/oops
//  11. Start jako vždy: branch onboarding/bad-merge. Odpověz na otázky. Konec jako vždy.
//
// Proč na tom záleží: main sdílí celý tým. Co se přepíše tam, přepíše se všem.

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Otázky: odpověz pod každou ---

// 1. Co napsal git status u kolegy v kroku 7? Co by udělal obyčejný git push?
// Odpověď:

// 2. Kolegů je deset. Někdo má rozdělanou práci. Co se stane?
// Odpověď:

// 3. Commit z kroku 3 je pořád v PR. Co kdyby v něm bylo heslo?
// Odpověď:

// 4. Proč jsi před krokem 6 dělala tag?
// Odpověď:

// Hotovo, když: git log --oneline origin/main nemá commit z practice/oops
// a git status u kolegy píše "up to date".
