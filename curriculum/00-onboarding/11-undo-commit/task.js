// Undo commit (oprava posledního commitu)                           Guided (s návodem)
//
// Cíl: oprav svůj poslední commit (uložení změn), dokud není na GitHubu.
//
// Mentor je v git shortlog -sne dvakrát. Správná identita:
//   Johana Rybarova <johanarybarova@gmail.com>
//
// Všechny příkazy v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding/11-undo-commit/task.js
//
// Kroky:
//   1. Start jako vždy: čistý main, pak git switch -c onboarding/undo-commit
//   2. Spusť git shortlog -sne. Najdi oba řádky mentora.
//      Do .mailmap v root přidej řádek, aby z nich byl jeden.
//   3. Schválně špatně: git add .mailmap a git commit -m "stuff"
//      Spusť git log --oneline -1. Opiš si SHA (otisk commitu) do chatu.
//   4. Oprav message (popis): git commit --amend
//      VS Code: první řádek změň na chore(git): add mentor to mailmap. Ulož, zavři tab (kartu).
//      Znovu git log --oneline -1. Je SHA stejný?
//   5. Zapomněla jsi soubor. Níže změň mentorCount na číslo, které teď ukáže git shortlog -sne.
//      git add <soubor> a git commit --amend --no-edit. Pak git show --stat HEAD.
//   6. Napiš jen odpověď 1. git add <soubor> a git commit -m "feat(onboarding): solve undo-commit"
//      Ups, moc brzy: odpovědi 2 a 3 chybí. Vrať commit: git reset --soft HEAD~1
//      Spusť git status. Co je zelené?
//   7. Dopiš odpovědi 2 a 3. git log --oneline -2.
//   8. Konec jako vždy.

const mentorCount = 2; // kolikrát je mentor v git shortlog -sne
console.log("mentor in shortlog:", mentorCount);

// --- Otázky: odpověz pod každou ---

// 1. Po --amend byl SHA jiný. Co to říká o commitu: změnil se, nebo je nový?
// Odpověď:

// 2. Kdy bys použila --amend a kdy reset --soft HEAD~1?
// Odpověď:

// 3. Proč jen před push (posláním na GitHub)? Co by se stalo, kdyby byl starý commit už na GitHubu?
// Odpověď:

// Hotovo, když: tvůj PR (žádost o sloučení) je merged (sloučený)
// a git shortlog -sne na main ukáže mentora jednou.
