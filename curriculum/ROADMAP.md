# Roadmap (plán cesty)

Jeden task (úkol) po druhém. Pořadí je jen návrh: můžeš přeskočit dopředu nebo se vrátit.
Task je hotový, když je v commitu a `node task.js` vypíše, co říká jeho comment `má vypsat`.
Predict (předpověz) tasky `má vypsat` nemají: tam musí mít každý řádek tvůj tip.
Git tasky v onboardingu ho nemají taky. Hotovo: odpovědi jsou v commitu
a příkaz z řádku `Hotovo, když` ukáže, co má.

## Level 0: Onboarding (začátek)

Git na tomhle repu, doopravdy. Opravíš, co je v něm špatně. Hlavně se naučíš opravit, co se rozbije.
Tasky onboardingu dělej popořadě: každý staví na stavu repa po tom předchozím.
Každý task má svou branch a svůj PR: [README → Onboarding](../README.md#onboarding-jeden-task--jedna-branch).

Každodenní práce:

1. `00-onboarding/01-first-pull-request`
2. `00-onboarding/02-git-config`
3. `00-onboarding/03-read-history`
4. `00-onboarding/04-commit-strategy`
5. `00-onboarding/05-squash-merge`
6. `00-onboarding/06-stage-and-diff`
7. `00-onboarding/07-ignore-files`
8. `00-onboarding/08-branches`
9. `00-onboarding/09-clean-branches`
10. `00-onboarding/10-fetch-and-pull`

Záchrana a společná historie:

11. `00-onboarding/11-undo-commit`
12. `00-onboarding/12-reset-modes`
13. `00-onboarding/13-merge-conflict`
14. `00-onboarding/14-pull-conflict`
15. `00-onboarding/15-rebase-on-main`
16. `00-onboarding/16-cherry-pick`
17. `00-onboarding/17-force-push`
18. `00-onboarding/18-rescue-colleague`
19. `00-onboarding/19-reflog`
20. `00-onboarding/20-wrong-branch`
21. `00-onboarding/21-rebase-interactive`
22. `00-onboarding/22-rescue-drill`

Historie a `main`:

23. `00-onboarding/23-clean-history`
24. `00-onboarding/24-bad-merge`
25. `00-onboarding/25-protect-main`
26. `00-onboarding/26-revert-merge`
27. `00-onboarding/27-final-drill`
28. Napiš `00-onboarding/SUMMARY.md`: tvůj tahák „Když se něco rozbije“. Tutor tě provede.

## Level 1: JavaScript

### 01 Data types (datové typy)

Tady přijde tvůj první `if` a tvůj první loop (smyčka). Moduly 02 a 03 jdou víc do hloubky.

Jedna value (hodnota), bez loopu:

1. `01-javascript/01-data-types/01-print-types`
2. `01-javascript/01-data-types/02-text-to-number`
3. `01-javascript/01-data-types/03-plus-or-minus`
4. `01-javascript/01-data-types/04-text-to-nan`
5. `01-javascript/01-data-types/05-check-nan`
6. `01-javascript/01-data-types/06-isnan-or-number-isnan`
7. `01-javascript/01-data-types/07-number-or-parseint`
8. `01-javascript/01-data-types/08-null-or-undefined`
9. `01-javascript/01-data-types/09-truthy-falsy`
10. `01-javascript/01-data-types/10-trim-greeting`
11. `01-javascript/01-data-types/11-pin-check`
12. `01-javascript/01-data-types/12-fix-the-total`

Lists (seznamy), s loopem:

13. `01-javascript/01-data-types/13-print-all`
14. `01-javascript/01-data-types/14-smallest-number`
15. `01-javascript/01-data-types/15-largest-number`
16. `01-javascript/01-data-types/16-negative-numbers`
17. `01-javascript/01-data-types/17-sum-numbers`
18. `01-javascript/01-data-types/18-sum-text-prices`
19. `01-javascript/01-data-types/19-sort-ascending`
20. `01-javascript/01-data-types/20-sort-descending`
21. `01-javascript/01-data-types/21-sort-big-numbers`
22. `01-javascript/01-data-types/22-only-real-numbers`

Všechno dohromady:

23. `01-javascript/01-data-types/23-capstone`
24. Napiš `01-javascript/01-data-types/SUMMARY.md`: svůj tahák.

### Co přijde dál

Tvůj mentor je připravuje.

| Level | Moduly |
|---|---|
| 1 JavaScript | 02 conditions (podmínky) · 03 loops (smyčky) · 04 functions (funkce) · 05 arrays (pole) · 06 objects (objekty) · 07 scope & closures (rozsah platnosti a uzávěry) · 08 errors & debugging (chyby a hledání chyb) |
| 2 JavaScript pro web | 01 DOM (stránka jako strom) · 02 events (události) · 03 modules (moduly) · 04 async & fetch (asynchronní kód a stahování dat) · 05 browser debugger (ladění v prohlížeči) |
| 3 React | 01 components (komponenty) · 02 props (vstupy komponenty) · 03 state (stav) · 04 effects (efekty) · 05 forms (formuláře) · 06 lists (seznamy) |
| 4 TypeScript | 01 typing (typování) tvého vlastního JavaScriptu · 02 React s TypeScriptem |
| 5 Node.js + Express | malý skutečný projekt, jako v opravdové práci |

Od modulu 04 (functions) pracuj nejdřív **sama**. Tutora zavolej na review (kontrolu), nebo když jsi 20 minut zaseklá.

## Task types (typy tasků)

Každý modul vede od čtení kódu k tomu, že ho napíšeš sama.

| Type | Co děláš |
|---|---|
| **Guided** (s návodem) | jdeš podle kroků, jen v onboardingu |
| **Predict** (předpověz) | čteš kód, napíšeš, co vypíše, spustíš ho, vysvětlíš překvapení |
| **Modify** (uprav) | změníš funkční kód, aby dělal něco nového |
| **Parsons** (poskládej) | seřadíš zamíchané řádky. Jeden řádek tam nepatří |
| **Make** (vytvoř) | napíšeš kód podle zadání na jeden řádek |
| **Fix-the-bug** (oprav chybu) | přečteš bug report (hlášení chyby), najdeš příčinu, opravíš ji |
| **Rescue** (záchrana) | rozbiješ to podle kroků, opravíš to sama, bez kroků |
| **Capstone** (závěrečný task) | jeden task, který použije celý modul |

## Čti dál

Docs (dokumentace) jsou anglicky. Pomůže ti překladač v prohlížeči.

- JavaScript: [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) · [javascript.info](https://javascript.info)
- React: [react.dev/learn](https://react.dev/learn)
- TypeScript: [the TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- Node.js: [nodejs.org/learn](https://nodejs.org/en/learn) · Express: [the Express guide](https://expressjs.com/en/guide/routing.html)
- Git: [Pro Git book](https://git-scm.com/book/en/v2) · [GitHub: about pull requests](https://docs.github.com/en/pull-requests)
- Commit messages (popisy commitů): [COMMITS.md](../COMMITS.md)
