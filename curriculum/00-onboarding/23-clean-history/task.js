// Clean history (úklid historie)                                  Guided (s návodem)
//
// Cíl: každý starý commit (uložení změn) na main má message (popis) podle COMMITS.md.
//
// Přepíšeš main (hlavní branch, větev).
// Je to jedna ze dvou výjimek z pravidla "nikdy push do main".
// Přepis děláš ve druhém clonu (kopii repa). Tutor tě vede tady, v tomhle terminálu.
// Všechny příkazy v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding/23-clean-history/task.js
//
// Tag (štítek) je jméno pro jeden commit. Nikdy se nehne. Branch se hne s každým commitem.
// Týmy dávají tag na release (vydání), např. v1.0.0. Ty ho dnes použiješ jako zálohu.
//
// Kroky:
//   1. Na GitHubu: Pull requests. Žádný tvůj PR nesmí být Open.
//      git fetch --prune a git branch -a: jen main, origin/main a origin/HEAD.
//      Jiná branch? Najdi její PR. Merged? Smaž ji jako v tasku clean-branches.
//      Není merged? Zeptej se tutora.
//      Každá jiná branch by po přepisu neměla s main nic společného.
//   2. Čistý main: git switch main && git pull. git status: "nothing to commit".
//   3. Záloha:
//        git tag backup/main-before-rewrite origin/main
//        git push origin backup/main-before-rewrite
//      Najdi tag na GitHubu (Tags). Není tam? Nepokračuj. Bez zálohy žádný přepis.
//   4. Druhý clone jen na přepis. V root repa:
//        git clone https://github.com/katty-kub/mentoring.git ../mentoring-rewrite
//      Otevři druhý terminál (Terminal → New Terminal). V něm: cd ../mentoring-rewrite
//      Ve druhé složce budou soubory během přepisu mizet. Tady se nic nehne, tutor zůstane.
//   5. Nakresli tutorovi v chatu, jak bude vypadat git log --oneline --graph potom.
//      Do <soubor> teď nic nepiš: reset --hard v kroku 11 by to smazal.
//   6. Druhý terminál: git switch -c practice/clean-history
//   7. Druhý terminál: git rebase -i --root. Ve VS Code se otevře todo list (seznam úkolů).
//      U každého commitu z tvé tabulky přepiš pick na reword. Ostatní nech pick.
//      Ulož, zavři tab (kartu).
//      Tabulku máš tady, v prvním clonu: curriculum/00-onboarding/04-commit-strategy/task.js
//   8. U každého reword se otevře tab se starou message. První řádek přepiš podle tabulky.
//      Končí message na (#čísloPR)? Nech ho tam. Ulož, zavři tab.
//      Panika? git rebase --abort vrátí všechno zpátky. Pak znovu krok 7.
//   9. Druhý terminál, zkontroluj:
//        git diff origin/main practice/clean-history    nevypíše nic
//        git log --oneline --graph                      jedna rovná čára
//        git log --oneline backup/main-before-rewrite   pořád stará historie
//      Něco nesedí? Nic nepushuj. Ukaž výpis tutorovi.
//  10. Ukaž tutorovi, že tag je na GitHubu: git ls-remote --tags origin
//      Druhý terminál: git push --force-with-lease origin practice/clean-history:main
//      Na GitHubu zmizí u starých commitů odznak "Verified". To je v pořádku.
//  11. Tady i v kolegově clonu (mentoring-kolega):
//        git switch main && git fetch && git reset --hard origin/main
//  12. Zavři druhý terminál. Složku mentoring-rewrite smaž ve Finderu. Už ji nepotřebuješ.
//  13. Start jako vždy: branch onboarding/clean-history.
//      Do <soubor> napiš kresbu a odpovědi. Konec jako vždy.
//
// Proč na tom záleží: z historie teď přečteš, co se kdy stalo. Bez otevírání kódu.

// --- Kresba (krok 5) ---
//

// --- Otázky: odpověz pod každou ---

// 1. SHA (otisky commitů) z tvé tabulky na main už nejsou. Proč?
// Odpověď:

// 2. Proč tag backup/main-before-rewrite pořád ukazuje staré commity?
// Odpověď:

// 3. Proč během přepisu nesměl nikdo dělat merge?
// Odpověď:

// 4. Kde jsou teď merge commity ze staré historie? Proč?
// Odpověď:

// Hotovo, když: git log --oneline origin/main má každý řádek podle COMMITS.md
// a git log --oneline backup/main-before-rewrite pořád ukáže starou historii.
