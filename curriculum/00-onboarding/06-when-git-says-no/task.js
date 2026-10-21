// Když git řekne ne                                                Guided (s návodem)
//
// Cíl: chybu gitu přečteš. Víš, kdy ji spravíš sama a kdy se zastavíš a napíšeš o pomoc.
//
// Příkazy spouštěj v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding/06-when-git-says-no/task.js
// Konec: README.md → Onboarding.
// U každé hlášky: hlavní řádek si opiš a řekni tutorovi, co znamená.
//
// Kroky:
//   1. git status: "nothing to commit"? git switch main, git pull --ff-only.
//      Branch (větev) zatím nezakládej!
//   2. Níže dopiš do name své jméno. git status: na které branchi je ta změna?
//   3. Jejda, měníš main. Nedělej commit (uložení změn). git switch -c training/when-git-says-no
//      git status: kde je změna teď?
//   4. git commit -m "test". Co hlásí git? Proč nic neuložil?
//   5. git add notes.txt (ten soubor neexistuje). Co hlásí git?
//   6. git add <soubor>, git commit -m "feat(onboarding): add my name"
//      git push, schválně bez -u. Co hlásí git? Pak git push -u origin training/when-git-says-no
//   7. git switch -c training/safe-start. Co hlásí git? Proč?
//   8. Odpověz na otázky. Pak s tutorem napiš curriculum/00-onboarding/SUMMARY.md.
//   9. Konec jako vždy. Do stage (připrav ke commitu) dej i curriculum/00-onboarding/SUMMARY.md.
//
// Proč na tom záleží: oprava neznámé chyby naslepo může smazat tvou i cizí práci.

const name = "";
console.log("Hi, " + name + "!");

// --- Otázky: odpověz pod každou ---

// 1. Krok 3 funguje jen před commitem. Co uděláš, když už jsi na main commitla?
// Odpověď:

// 2. Rozbila nebo smazala něco některá hláška z kroků 4–7? Jak to poznáš?
// Odpověď:

// 3. Zpráva o pomoc, když git hlásí "push rejected". Napiš ji: čeho chceš dosáhnout,
//    poslední příkaz, přesná chyba, výstup git status, odkaz na PR.
// Odpověď:

// 4. Projdi "Před každým push" v README.md. Který bod nejspíš zapomeneš?
// Odpověď:

// Hotovo, když: PR (žádost o sloučení) je merged (sloučený) a SUMMARY.md je na main.
