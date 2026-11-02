# Roadmap (plán cesty)

Jeden task (úkol) po druhém. Pořadí je jen návrh: můžeš přeskočit dopředu nebo se vrátit.
Task je hotový, když je v commitu a `node task.js` vypíše, co říká jeho comment `má vypsat`.
TypeScript task (`task.ts`): `node task.ts` vypíše `má vypsat` a `npx tsc` nevypíše nic.
React task (`task.tsx`): stránka ukáže `stránka má ukázat`, console (konzole) v browseru (prohlížeči)
je bez varování (F12) a `npx tsc` nevypíše nic.
Predict (předpověz) tasky `má vypsat` nemají: tam musí mít každý řádek tvůj tip.
Git tasky v onboardingu ho nemají taky. Hotovo: odpovědi jsou v commitu
a příkaz z řádku `Hotovo, když` ukáže, co má.

## Level 0: Onboarding (začátek)

Povinné, hned teď. Git, jak ho potřebuješ v týmu. Tasky dělej popořadě.
Každý task má svou branch a svůj pull request (žádost o sloučení):
[README → Onboarding](../README.md#onboarding-jeden-task--jedna-branch).

1. `00-onboarding/01-first-pull-request`
2. `00-onboarding/02-safe-start`
3. `00-onboarding/03-check-changes`
4. `00-onboarding/04-keep-secrets`
5. `00-onboarding/05-review-fix`
6. `00-onboarding/06-when-git-says-no`
7. Napiš `00-onboarding/SUMMARY.md` (v PR tasku 06): tvůj tahák. Tutor tě provede.
8. `00-onboarding/07-fix-conflict`

Zbytek gitu přijde později: [Po mentoringu](#po-mentoringu-onboarding-extended-volitelné).

## Level 1: JavaScript

### 01 Data types (datové typy)

Tady přijde tvůj první `if` a tvůj první loop (smyčka).

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

## Level 2: TypeScript

TypeScript = JavaScript s types (typy). Najde chybu dřív, než kód spustíš.
Jednou, v root (kořeni) repa: `npm install`. V tasku pak `node task.ts` a `npx tsc`.
`npx tsc` nevypíše nic = žádná chyba v types.

### 01 TS basics (základy TypeScriptu)

Types (typy) hodnot:

1. `02-typescript/01-ts-basics/01-annotate-values`
2. `02-typescript/01-ts-basics/02-guess-the-type`
3. `02-typescript/01-ts-basics/03-catch-the-fee`
4. `02-typescript/01-ts-basics/04-typed-list`

Objects (objekty) a chybějící hodnoty:

5. `02-typescript/01-ts-basics/05-book-type`
6. `02-typescript/01-ts-basics/06-optional-field`
7. `02-typescript/01-ts-basics/07-no-phone`

Jedno, nebo druhé:

8. `02-typescript/01-ts-basics/08-id-or-text`
9. `02-typescript/01-ts-basics/09-door-status`

Functions (funkce):

10. `02-typescript/01-ts-basics/10-call-with-number`
11. `02-typescript/01-ts-basics/11-return-type`

Všechno dohromady:

12. `02-typescript/01-ts-basics/12-capstone`
13. Napiš `02-typescript/01-ts-basics/SUMMARY.md`: svůj tahák.

## Level 3: React

React = library (knihovna) na stránky z components (komponent). Běží v browseru.
Jednou: `cd curriculum/03-react`, pak `npm install`. V tasku pak `npm run dev`:
otevři adresu z terminálu a klikni na task. Po uložení se stránka obnoví sama.
`npx tsc` spouštěj taky v `03-react` nebo ve složce tasku.

### 01 React basics (základy Reactu)

JSX a components:

1. `03-react/01-react-basics/01-jsx-predict`
2. `03-react/01-react-basics/02-missing-braces`
3. `03-react/01-react-basics/03-first-component`
4. `03-react/01-react-basics/04-split-component`

Props (vstupy komponenty):

5. `03-react/01-react-basics/05-greeting-prop`
6. `03-react/01-react-basics/06-price-tag`
7. `03-react/01-react-basics/07-price-as-text`
8. `03-react/01-react-basics/08-optional-prop`
9. `03-react/01-react-basics/09-card-children`

Conditions (podmínky):

10. `03-react/01-react-basics/10-sold-out`
11. `03-react/01-react-basics/11-zero-on-page`

Lists (seznamy):

12. `03-react/01-react-basics/12-map-predict`
13. `03-react/01-react-basics/13-render-list`
14. `03-react/01-react-basics/14-duplicate-key`

Všechno dohromady:

15. `03-react/01-react-basics/15-capstone`
16. Napiš `03-react/01-react-basics/SUMMARY.md`: svůj tahák.

## Co přijde dál

Další tasky připravuje tvůj mentor.

## Po mentoringu: Onboarding extended (volitelné)

Volitelné. Vrať se k tomu, až mentoring skončí. Tutor ti to sám nenabídne: napiš **start git-config**.

Git na tomhle repu, doopravdy. Opravíš, co je v něm špatně. Hlavně se naučíš opravit, co se rozbije.
Navazuje na `01-first-pull-request`. Tasky dělej popořadě: každý staví na stavu repa po tom předchozím.
Každý task má svou branch a svůj PR: [README → Onboarding extended](../README.md#onboarding-extended-jeden-task--jedna-branch).

Než začneš, přečti si [`COMMANDS.md`](00-onboarding-extended/COMMANDS.md):
všechny příkazy, které tu procvičíš, co dělají a jak moc je v práci potřebuješ.

Každodenní práce:

1. `00-onboarding-extended/01-git-config`
2. `00-onboarding-extended/02-commit-strategy`
3. `00-onboarding-extended/03-squash-merge`
4. `00-onboarding-extended/04-stage-and-diff`
5. `00-onboarding-extended/05-ignore-files`
6. `00-onboarding-extended/06-branches`
7. `00-onboarding-extended/07-fetch-and-pull`

Konflikty a záchrana:

8. `00-onboarding-extended/08-merge-conflict`
9. `00-onboarding-extended/09-rebase-on-main`
10. `00-onboarding-extended/10-reset-modes`
11. `00-onboarding-extended/11-reflog`
12. `00-onboarding-extended/12-tidy-commits`

Historie a `main`:

13. `00-onboarding-extended/13-clean-history`
14. `00-onboarding-extended/14-bad-merge`
15. `00-onboarding-extended/15-protect-main`
16. `00-onboarding-extended/16-revert-merge`
17. Napiš `00-onboarding-extended/SUMMARY.md`: tvůj tahák „Když se něco rozbije“. Tutor tě provede.

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
- TypeScript: [the TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- React: [react.dev/learn](https://react.dev/learn)
- Git: [Pro Git book](https://git-scm.com/book/en/v2) · [GitHub: about pull requests](https://docs.github.com/en/pull-requests)
- Commit messages (popisy commitů): [COMMITS.md](../COMMITS.md)
