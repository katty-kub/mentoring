// Reflog (deník, kde byl HEAD)                  Guided (s návodem), pak Rescue (záchrana)
//
// Cíl: vrať ztracené commity (uložení změn) zpátky.
//
// Všechny příkazy v root (kořeni) repa. <soubor> = curriculum/00-onboarding/19-reflog/task.js
//
// Nejdřív:
//   1. Start jako vždy: čistý main, pak git switch -c onboarding/reflog
//   2. Pod "Předpověď" odpověz: je commit po git reset --hard navždy pryč?
//      git add <soubor> a git commit -m "feat(onboarding): predict reflog"
//
// První ztráta, podle kroků:
//   3. git switch main && git switch -c practice/lost
//   4. Níže změň "apple" na "banana".
//      git add <soubor> a git commit -m "feat(onboarding): pick banana"
//      Změň "banana" na "cherry". git add <soubor> a git commit -m "feat(onboarding): pick cherry"
//   5. git log --oneline -3. Pak git reset --hard HEAD~2. Znovu git log --oneline -3.
//   6. git reflog. Najdi řádek s "pick cherry". Opiš si jeho SHA (otisk commitu) do chatu.
//   7. git reset --hard <sha>. git log --oneline -2: jsou oba commity zpátky?
//
// Druhá ztráta, oprav ji sama, bez kroků:
//   8. git switch main && git branch -D practice/lost
//      Cíl: branch (větev) practice/lost je zpátky, s oběma commity.
//
// Na konci: zkontroluj řádek "Hotovo, když" dole. Pak git switch onboarding/reflog.
// Odpověz na otázky. Konec jako vždy. Navíc smaž: git branch -D practice/lost

const favoriteFruit = "apple";
console.log(favoriteFruit);

// --- Předpověď (krok 2) ---
// Odpověď:

// --- Otázky: odpověz pod každou ---

// 1. Co si reflog pamatuje? Co ne?
// Odpověď:

// 2. Branch jsi smazala. Proč commity pořád existovaly?
// Odpověď:

// 3. Kterou práci by ti reflog nevrátil?
// Odpověď:

// Hotovo, když: po obou opravách git log --oneline -2 practice/lost ukáže cherry a banana.
