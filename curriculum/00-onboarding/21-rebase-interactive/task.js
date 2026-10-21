// Rebase -i (úklid vlastních commitů)                              Guided (s návodem)
//
// Cíl: z pěti nepořádných commitů (uložení změn) udělej dva čisté podle COMMITS.md.
//
// Všechny příkazy v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding/21-rebase-interactive/task.js
//
// Kroky:
//   1. Start jako vždy: čistý main, pak git switch -c onboarding/rebase-interactive
//   2. Přečti si krok 4. Pod "Kresba" nakresli git log --oneline po úklidu:
//      dva commity, s messages (popisy) podle COMMITS.md.
//      git add <soubor> a git commit -m "feat(onboarding): draw rebase-interactive target"
//   3. Branch (větev) na cvičení: git switch main && git switch -c practice/messy
//   4. Pět commitů. Po každé změně git add <soubor> (u e: git add junk.txt),
//      pak git commit -m "<message>":
//        a) "apple" změň na "banana".
//           message: wip
//        b) console.log(favoriteFruit) změň na console.log("Fruit: " + favoriteFruit).
//           message: fix
//        c) Pod to přidej řádek: const favoriteColor = "yelow";
//           message: feat(onboarding): add favorite color
//        d) "yelow" změň na "yellow".
//           message: fix typo
//        e) V root repa vytvoř soubor junk.txt s textem asdf.
//           message: asdf
//      git push -u origin practice/messy. git log --oneline.
//   5. Poprvé to vzdej. git rebase -i HEAD~5. Otevře se todo list (seznam úkolů) ve VS Code.
//      U prvního řádku přepiš pick na edit. Ulož, zavři tab (kartu). git status: co píše?
//      git rebase --abort. git log --oneline: změnilo se něco?
//   6. Teď doopravdy: git rebase -i HEAD~5. Použij squash (spojení commitů), fixup a drop.
//      Který řádek dostane co, rozhodni podle kresby. Nápověda je dole v todo listu.
//      Při squash git otevře tab se spojenou message. Napiš novou podle COMMITS.md.
//   7. Porovnej git log --oneline s kresbou. node <soubor> musí běžet. Kde je junk.txt?
//      Pokazila jsi to? git reset --hard ORIG_HEAD vrátí stav před rebase.
//   8. git push. Co píše? Pak git push --force-with-lease.
//      Smíš: je to tvoje branch a nikdo jiný na ní nepracuje.
//   9. Zkontroluj řádek "Hotovo, když" dole.
//  10. Zpět: git switch onboarding/rebase-interactive. Odpověz na otázky. Konec jako vždy.
//      Navíc smaž practice/messy: git branch -D practice/messy a na GitHubu stránka Branches.
//
// Proč na tom záleží: v tasku clean-history tím uklidíš starou historii celého repa.

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Kresba (krok 2) ---
//

// --- Otázky: odpověz pod každou ---

// 1. Proč mají commity po rebase nové SHA (otisky commitů)?
// Odpověď:

// 2. Proč rebase -i jen na své branchi? Co by musel udělat celý tým, kdyby to bylo na main?
// Odpověď:

// 3. Squash merge na GitHubu stejně udělá jeden commit.
//    Proč tedy uklízet commity před PR (žádostí o sloučení)?
// Odpověď:

// Hotovo, když: v kroku 9 ukázal git log --oneline -2 origin/practice/messy tvé dva čisté commity.
