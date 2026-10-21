// Víš, co commituješ                                               Guided (s návodem)
//
// Cíl: před commitem (uložením změn) víš, co v něm bude. Jde tam jen soubor ze zadání.
//
// Příkazy spouštěj v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding/03-check-changes/task.js
// Start a Konec: README.md → Onboarding.
//
// Kroky:
//   1. Start jako vždy. Branch (větev): training/check-changes
//   2. Níže změň "apple" na "banana". git status: pod jakým nadpisem je <soubor>?
//   3. git diff (rozdíl). Co znamená - a co +?
//   4. V root vytvoř notes.txt s textem: nepatří sem. git status, pak git diff. Kde je notes.txt?
//   5. Stage (připrav ke commitu): git add <soubor>. git status: co je zelené, co červené?
//   6. git diff, pak git diff --staged. Co ukázal který?
//   7. Smaž notes.txt v editoru. git status.
//   8. Odpověz na otázky. Konec jako vždy.
//
// Proč na tom záleží: git add . přidá všechno, i co tam nepatří. Kontrola trvá 5 sekund.

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Otázky: odpověz pod každou ---

// 1. Svými slovy: jaký je rozdíl mezi git diff a git diff --staged?
// Odpověď:

// 2. Proč git diff v kroku 4 neukázal notes.txt?
// Odpověď:

// 3. Co by v kroku 5 udělal git add . ? Odpověz slovy, nespouštěj ho.
// Odpověď:

// Hotovo, když: PR (žádost o sloučení) je merged (sloučený) a node <soubor> na main vypíše banana.
