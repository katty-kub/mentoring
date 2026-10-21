// Read history (přečti historii)                                  Guided (s návodem)
//
// Cíl: najdi v history (historii) repa (repozitáře) všechno, co není v pořádku.
// Napiš to do seznamu dole.
//
// Všechny příkazy spouštěj v root (kořeni) repa, tam kde je README.md.
// <soubor> = curriculum/00-onboarding/03-read-history/task.js
//
// Kroky:
//   1. Start: git switch main && git pull. Spusť git status. Musí říct "nothing to commit".
//   2. Nová branch (větev) pro tento task: git switch -c onboarding/read-history
//   3. git log --oneline main
//      Jeden řádek = jeden commit (uložení změn). Vlevo je SHA (otisk commitu),
//      vpravo message (popis).
//   4. git log --oneline --graph --all
//      Čáry vlevo jsou branche. * je commit. Kde se čáry spojí, je merge (sloučení).
//   5. Vyber si tři commity. Pro každý: git show <SHA>
//      Uvidíš autora, datum a změny. Klávesa q tě vrátí do terminálu.
//   6. git shortlog -sne
//      Kdo dělal commity a kolik. Za jménem je email.
//   7. git branch -r
//      Branche na GitHubu, na remote (vzdáleném repu).
//   8. Odpověz na otázky. Napiš seznam nepořádku.
//   9. Konec: git add <soubor> a git commit -m "feat(onboarding): solve read-history"
//  10. Push (pošli na GitHub): git push -u origin onboarding/read-history
//      Otevři pull request (žádost o sloučení). Title (název): feat(onboarding): solve read-history
//  11. U tlačítka merge vyber šipkou "Squash and merge". Message nech stejnou jako title.
//  12. Ukliď: git switch main && git pull && git branch -D onboarding/read-history

// --- Otázky: odpověz pod každou ---

// 1. Jen z git log --oneline main: který task řeší každý commit? Kde to poznat nejde?
// Odpověď:

// 2. Najdi commit, který vyřešil trim-greeting. Kdy začala práce a kdy byl merged?
//    Pomůže ti git log bez --oneline: ukazuje datum.
//    Podívej se na main i na branch (větev) z git branch -r.
// Odpověď:

// 3. Které commity se dostaly do main bez pull requestu (žádosti o sloučení)? Jak to poznáš?
// Odpověď:

// 4. Kdo jsou Katka a Katarína v git shortlog -sne? Proč jsou tam dvakrát?
// Odpověď:

// 5. Proč je v grafu tolik čar, které nikam nevedou?
// Odpověď:

// --- Seznam nepořádku: jedna věc na řádek, přidej, kolik potřebuješ ---
// 1.
// 2.
// 3.

// Hotovo, když: v seznamu je každý druh nepořádku, který jsi našla, a tvůj PR je merged.
