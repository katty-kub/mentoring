// Protect main (ochrana main)                                      Guided (s návodem)
//
// Cíl: na main se dostane jen pull request (žádost o sloučení).
// Žádný force push (vynucený push), žádné smazání.
//
// Všechny příkazy v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding-extended/15-protect-main/task.js
//
// Kroky:
//   1. Čistý main (hlavní branch, větev): git switch main && git pull.
//      git status: "nothing to commit".
//   2. Na GitHubu otevři Settings. Vlevo pod "Code, planning, and automation" klikni Rules,
//      pak Rulesets. Klikni New ruleset → New branch ruleset.
//   3. Ruleset name: protect-main. Enforcement status: změň Disabled na Active.
//   4. Bypass list (kdo smí pravidla obejít): nech prázdný.
//   5. Target branches: Add a target → Include default branch.
//   6. V Branch protections zaškrtni jen tyhle tři:
//        Restrict deletions
//        Require a pull request before merging (Required approvals: 0)
//        Block force pushes
//      Klikni Create.
//   7. Zkontroluj seznam Rulesets (sady pravidel):
//      protect-main musí mít Active a cíl main (default branch).
//      Jinak push v kroku 9 opravdu skončí na main. Něco nesedí? Push nedělej, zeptej se tutora.
//   8. Níže napiš své tipy: co udělá git push a co git push --force?
//   9. Schválně na main: git add <soubor> a git commit -m "feat(onboarding): predict pushes"
//      Pak git push. Pak git push --force. Porovnej se svými tipy.
//  10. Commit (uložení změn) je jen u tebe, na main. Přesuň ho na branch onboarding/protect-main:
//      a) git switch -c onboarding/protect-main. Nová branch drží tvůj commit.
//      b) git switch main. Pak git log --oneline origin/main..main. Co ukáže?
//      c) Řekni tutorovi: co se ztratí a kde je to v bezpečí? Pak git reset --hard origin/main
//      d) git switch onboarding/protect-main. git log --oneline -2: je tam tvůj commit?
//  11. Na onboarding/protect-main odpověz na otázky. Konec jako vždy.
//      Na branchi jsou dva commity: title PR napiš přesně feat(onboarding): solve protect-main
//
// Proč na tom záleží: v bad-merge šel main přepsat. Teď na main jde jen PR, nikomu jinak.

// --- Tipy (krok 8) ---
// git push:
// git push --force:

// --- Otázky: odpověz pod každou ---

// 1. Kdo push odmítl: git u tebe, nebo GitHub? Podle čeho to poznáš?
// Odpověď:

// 2. Proč je Bypass list prázdný, i když jsi vlastník repa?
// Odpověď:

// 3. Co dalšího bys chránila v každém svém repu?
// Odpověď:

// Hotovo, když: git push --force na main GitHub odmítne a tvůj PR je merged (sloučený).
