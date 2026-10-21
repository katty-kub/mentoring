// Rescue colleague (zachraň kolegův commit)                         Guided (s návodem)
//
// Cíl: kolegův commit (uložení změn) zmizel z GitHubu po tvém force push (vynuceném push).
// Vrať ho tam.
//
// Navazuje na force-push. Kolegův clone (kopie repa) ../mentoring-kolega od té doby nikdo nepoužil.
// Všechny příkazy v root (kořeni) repa, v obou clonech.
// <soubor> = curriculum/00-onboarding/18-rescue-colleague/task.js
//
// Kroky:
//   1. Start jako vždy: čistý main, pak git switch -c onboarding/rescue-colleague
//   2. Pod "Předpověď" napiš: co udělá git pull --rebase v kolegově clonu?
//      Bude tam pak kolegův commit "pick cherry"?
//      git add <soubor> a git commit -m "feat(onboarding): predict rescue-colleague"
//   3. Kolegův terminál: git status a git log --oneline -2. Kde je teď kolegův commit?
//   4. Kolegův terminál: git pull --rebase. Pak git log --oneline -2. Porovnej s předpovědí.
//   5. Najdi kolegův commit. SHA (otisk commitu) máš na papíře z tasku force-push.
//      Ztratila jsi ho? Zkus git reflog. Víc o něm v příštím tasku.
//   6. Kolegův terminál: git cherry-pick <sha>
//      Conflict (konflikt) vyřeš jako v tasku merge-conflict. Pak git add
//      curriculum/00-onboarding/17-force-push/task.js a git cherry-pick --continue
//      (VS Code: ulož, zavři tab, tedy kartu). Pak git push.
//   7. Tvůj terminál: git fetch. Pak git log --oneline -2 origin/practice/force.
//   8. Úklid: v obou clonech git switch main a git branch -D practice/force.
//      Na GitHubu: stránka Branches, smaž practice/force. Složku mentoring-kolega nemaž.
//   9. Tvůj terminál: git switch onboarding/rescue-colleague. Odpověz na otázky. Konec jako vždy.
//
// Proč na tom záleží: po force push nikdo nic nehlásí. Práce zmizí i tomu, kdo nic neudělal.

// --- Předpověď (krok 2) ---
// Odpověď:

// --- Otázky: odpověz pod každou ---

// 1. Kolega nic špatně neudělal. Proč jeho commit zmizel i u něj?
// Odpověď:

// 2. Proč má zachráněný commit jiný SHA než ten na papíře?
// Odpověď:

// 3. Proč stačil obyčejný git push, bez force?
// Odpověď:

// Hotovo, když: git log --oneline -2 origin/practice/force v kroku 7 ukázal kiwi a nad ním
// zachráněný kolegův commit, a tvůj PR (žádost o sloučení) je merged (sloučený).
