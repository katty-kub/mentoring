// Ignore files (soubory, které git nesleduje)                      Guided (s návodem)
//
// Cíl: git status neukazuje soubory, které do repa (repozitáře) nepatří.
//
// Soubor .gitignore v root (kořeni) repa říká gitu: tyhle soubory nesleduj.
// Jeden řádek = jeden pattern (vzor). *.log znamená: každý soubor, který končí na .log.
//
// Všechny příkazy spouštěj v root repa, tam kde je README.md.
// <soubor> = curriculum/00-onboarding-extended/05-ignore-files/task.js
//
// Kroky:
//   1. Start: git switch main && git pull. Spusť git status. Musí říct "nothing to commit".
//   2. Nová branch (větev) pro tento task: git switch -c onboarding/ignore-files
//   3. Přečti .gitignore v root. Odpověz na otázku 1.
//   4. V root vytvoř dva soubory:
//        .env       s řádkem  PASSWORD=banana123
//        debug.log  s řádkem  started
//      Spusť git status. Pak git diff. Odpověz na otázku 2.
//   5. Na konec .gitignore připiš tři řádky:
//        # Secrets and logs
//        .env
//        *.log
//      Spusť git status. Kde jsou teď .env a debug.log? Co je v seznamu nové?
//   6. git add .gitignore a git commit -m "chore(git): ignore env and log files"
//   7. Odpověz na otázku 3.
//      Konec: git add <soubor> a git commit -m "feat(onboarding): solve ignore-files"
//   8. Push (pošli na GitHub): git push -u origin onboarding/ignore-files
//      Otevři pull request (žádost o sloučení).
//      Title (název): feat(onboarding): solve ignore-files
//   9. U tlačítka merge (sloučení) vyber šipkou "Squash and merge".
//      Message (popis) nech stejnou jako title.
//  10. Ukliď: git switch main && git pull && git branch -D onboarding/ignore-files
//      Spusť git status. Je .env pořád ve složce? Ukazuje ho git?
//
// Proč na tom záleží: hesla nesmí na GitHub. Co je jednou na GitHubu, může vidět každý.

// --- Otázky: odpověz pod každou ---

// 1. Co už v .gitignore je? Proč tam asi je každý řádek?
// Odpověď:

// 2. Pod jakým nadpisem ukázal git status nové soubory? Proč je git diff neukázal?
// Odpověď:

// 3. Proč git status v kroku 5 ukázal jiné soubory než v kroku 4?
// Odpověď:

// Hotovo, když: tvůj PR je merged (sloučený) a git status na main neukáže .env ani debug.log.
