// Připomínky ve stejném PR                                         Guided (s návodem)
//
// Cíl: po review (kontrole) opravíš svůj PR (žádost o sloučení) dalším commitem (uložením změn).
// Pošleš ho přes git push. Nový PR nezakládáš.
//
// Příkazy spouštěj v root (kořeni) repa.
// <soubor> = curriculum/00-onboarding/05-review-fix/task.js
// Start a Konec: README.md → Onboarding.
//
// Kroky:
//   1. Start jako vždy. Branch (větev): training/review-fix
//   2. Zadání: níže změň "Mentoring" na své jméno. Jen to. Nic jiného neopravuj.
//   3. git status, git diff, git add <soubor>, git diff --staged.
//      git commit -m "feat(onboarding): add my name to greeting"
//   4. git push -u origin training/review-fix. Otevři pull request (žádost o sloučení).
//      Title (název): feat(onboarding): solve review-fix. Popis: co a proč. Nemerguj!
//   5. Teď si přečti Review dole. Oprav, co chce.
//   6. git status, git diff, git add <soubor>, git diff --staged.
//      git commit -m "fix(onboarding): correct greeting typo"
//   7. git push. Na GitHubu: kolik commitů má teď tvůj PR?
//   8. Odpověz na otázky. Konec jako vždy: push jde do stejného PR.
//   9. Na main: git log --oneline. Kolik commitů z PR tam je?
//
// Proč na tom záleží: review je normální. Push (odeslání) do stejné branch PR sám aktualizuje.

const teamName = "Mentoring";
const greeting = "Helo, " + teamName + "!";
console.log(greeting);

// --- Otázky: odpověz pod každou ---

// 1. Překlep jsi možná viděla už v kroku 2. Proč ho neopravit hned?
// Odpověď:

// 2. Proč git push v kroku 7 stačil bez -u origin …?
// Odpověď:

// 3. Proč neotevřít na opravu nový PR?
// Odpověď:

// 4. Tady merguješ sama. V týmu PR slučuje mentor. Proč?
// Odpověď:

// --- Review (připomínky) k tvému PR. Čti až po kroku 4. ---
// R1: V greeting je překlep "Helo". Oprav na "Hello".
// R2: Popis PR neříká, jak jsi změnu ověřila. Doplň ho na GitHubu (Edit u popisu).

// Hotovo, když: PR je merged (sloučený) a node <soubor> na main vypíše Hello, <tvé jméno>!
