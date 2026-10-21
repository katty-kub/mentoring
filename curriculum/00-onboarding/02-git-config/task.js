// Git config (nastavení gitu)                                     Guided (s návodem)
//
// Cíl: git i GitHub tě znají pod jedním jménem a jedním emailem.
//
// Všechny příkazy spouštěj v root (kořeni) repa, tam kde je README.md.
//
// Kroky:
//   1. Start: git switch main && git pull. Spusť git status. Musí říct "nothing to commit".
//   2. Ukliď starou branch (větev) z prvního tasku: git fetch --prune a git branch -D onboarding
//      Stará branch onboarding by blokovala nová jména onboarding/… Píše "not found"? Nevadí.
//   3. Nová branch pro tento task: git switch -c onboarding/git-config
//   4. Na GitHubu otevři Settings → Emails. Opiš si adresu, která končí na
//      users.noreply.github.com.
//      Pod ní přidej svůj yahoo email a potvrď ho v poště.
//   5. Nastav git. Jméno napiš přesně jako na svém GitHub profilu:
//        git config --global user.name "Tvoje Jméno"
//        git config --global user.email "<adresa z kroku 4>"
//        git config --global core.editor "code --wait"
//        git config --global pull.ff only
//   6. Zkus editor: code --version. Hlásí terminál "command not found"? Ve VS Code:
//      Cmd+Shift+P, napiš "Shell Command: Install 'code' command in PATH", Enter. Zkus znovu.
//   7. Zkontroluj: git config --list. Najdi své čtyři řádky.
//   8. Odpověz na otázky dole. Pak git add curriculum/00-onboarding/02-git-config/task.js
//   9. Commit (uložení změn) bez -m: git commit
//      Otevře se tab (karta) ve VS Code. Na první řádek napiš: feat(onboarding): solve git-config
//      Ulož, zavři tab. Terminál čekal, teď pokračuje.
//  10. Push (pošli na GitHub): git push -u origin onboarding/git-config
//      Otevři pull request (žádost o sloučení). Title (název): feat(onboarding): solve git-config
//  11. U tlačítka merge (sloučení) vyber šipkou "Squash and merge".
//      Message (popis) nech stejnou jako title.
//  12. Konec: git switch main && git pull && git branch -D onboarding/git-config
//
// Proč na tom záleží: každý commit nese jméno a email. Podle emailu GitHub pozná, že je to tvůj.

// --- Otázky: odpověz pod každou ---

// 1. Spusť git shortlog -sne. Kolikrát tam jsi? Proč?
// Odpověď:

// 2. Co dělá pull.ff only? Přečti si "git help config" (hledej pull.ff) nebo se zeptej tutora.
// Odpověď:

// Hotovo, když: git config user.email vypíše tvou noreply adresu a tvůj PR je merged (sloučený).
