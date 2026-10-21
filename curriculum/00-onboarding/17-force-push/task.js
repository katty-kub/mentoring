// Force push (vynucený push)                                       Guided (s návodem)
//
// Cíl: zjisti, proč --force-with-lease chrání práci kolegy a --force ne.
//
// Všechny příkazy v root (kořeni) repa. <soubor> = curriculum/00-onboarding/17-force-push/task.js
//
// Kroky:
//   1. Start jako vždy: čistý main, pak git switch -c onboarding/force-push
//   2. Přečti si kroky 3–7. Pod "Předpovědi" napiš, co vypíše každý push v kroku 7.
//      git add <soubor> a git commit -m "feat(onboarding): predict force-push"
//   3. Branch (větev) na cvičení: git switch main && git switch -c practice/force
//      Níže změň "apple" na "banana". git add <soubor>
//      a git commit -m "feat(onboarding): pick banana". git push -u origin practice/force
//   4. Kolega. V root repa:
//        git clone https://github.com/katty-kub/mentoring.git ../mentoring-kolega
//      Otevři druhý terminál (VS Code: Terminal → New Terminal). To je kolegův terminál. V něm:
//        cd ../mentoring-kolega
//        git config user.name "Kolega"
//        git config user.email kolega@example.com
//   5. Kolegův terminál: git switch practice/force
//      Otevři <soubor> ve složce mentoring-kolega. Změň "banana" na "cherry".
//      git add <soubor> a git commit -m "feat(onboarding): pick cherry". git push
//   6. Kolegův terminál: git log --oneline -1. SHA (otisk commitu) si napiš na papír.
//      Od teď kolegův clone (kopii repa) nech být. Budeš ho potřebovat v tasku rescue-colleague.
//   7. Tvůj terminál. Žádný git fetch! Změň "banana" na "kiwi". git add <soubor>
//      a git commit --amend -m "feat(onboarding): pick kiwi". Pak postupně,
//      po každém porovnej s předpovědí:
//        git push
//        git push --force-with-lease
//        git push --force
//   8. Na GitHubu otevři commity (uložení změn) branche practice/force. Je tam kolegův commit?
//   9. Zpět: git switch onboarding/force-push. Odpověz na otázky.
//      Konec jako vždy. practice/force zatím nemaž: potřebuješ ji v tasku rescue-colleague.
//
// Proč na tom záleží: --force přepíše cizí práci a nikdo nic nehlásí.

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Předpovědi (krok 2) ---
// git push:
// git push --force-with-lease:
// git push --force:

// --- Otázky: odpověz pod každou ---

// 1. Proč --force-with-lease odmítl push? Co hlídal?
// Odpověď:

// 2. Kdybys před --force-with-lease udělala git fetch, co by se stalo? Proč?
// Odpověď:

// 3. Kdy smíš použít --force-with-lease? A kdy --force?
// Odpověď:

// Hotovo, když: na GitHubu má practice/force tvůj kiwi commit a kolegův commit tam není.
