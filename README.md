# Začni tady

Tady se učíš programovat, jeden malý task (úkol) po druhém.
Cesta: JavaScript → JavaScript v browseru (prohlížeči) → React → TypeScript → Node.js + Express.

**Claude je tvůj tutor (lektor), ne řešitel.** Ptá se. Nikdy nepíše tvůj kód.
Co vymyslíš sama, to si zapamatuješ.

Odborná slova z programování jsou vždy nejdřív anglicky, česky v závorce: `loop (smyčka)`.
Tak se naučíš slova, která programátoři opravdu používají. Ostatní je česky. Slova najdeš i ve [Slovníčku](#slovníček) dole.

Tvých pět cílů:

1. začít task, který jsi ještě neviděla,
2. rozdělit ho na malé kroky,
3. poznat, kdy použít loop (smyčku), condition (podmínku) nebo function (funkci),
4. sama najít a opravit bugy (chyby),
5. vysvětlit své řešení.

## Nastavení, jen jednou

1. Nainstaluj [Node.js](https://nodejs.org) (verzi LTS), [git](https://git-scm.com), [GitHub CLI](https://cli.github.com)
   a [Claude Code](https://code.claude.com/docs/en/quickstart).
2. `git config --global user.name "Tvoje Jméno"` a `git config --global user.email "ty@example.com"`.
   Task `git-config` to pak doladí.
3. `gh auth login`.
4. `git clone https://github.com/katty-kub/mentoring.git && cd mentoring`.
5. V editoru vypni AI suggestions (návrhy od AI). VS Code: tohle repo (repozitář) to dělá samo.
6. Spusť `claude`. Klikni na „Trust the folder“.

## Každá dávka tasků

Dávka = 1 až 3 tasky na jedné branchi (větvi). Git příkazy píšeš vždy sama, ve svém terminálu.
Tutor se ptá, ty spouštíš.

1. Začni na čistém main (hlavní branch): `git switch main && git pull`.
2. Nová branch: `<modul>/<první-task>`, např. `git switch -c data-types/pin-check`.
3. Vyřeš tasky, jeden po druhém. Každý task končí commitem (uložením změn) `solve`.
   Cvičné commity navíc nevadí: squash je spojí.
4. Otevři na GitHubu pull request (žádost o sloučení). Title (název) piš podle [COMMITS.md](COMMITS.md).
5. Merge (sloučení) jen přes **Squash and merge**.
6. Ukliď: `git switch main && git pull && git branch -D <branch>`. Další dávka = nová branch.
   Na sloučenou branch se nevracej.

Branch je pozadu za main? `git switch main && git pull`, zpátky na branch, pak `git merge main`.
Po posledním tasku modulu: napiš `SUMMARY.md` modulu, svůj tahák.

## Onboarding: jeden task = jedna branch

V `00-onboarding` je dávka vždy jeden task. Každý task má svou branch a svůj PR.
Všechny příkazy spouštěj v root (kořeni) repa, tam kde je `README.md`.
`<soubor>` v krocích = `task.js` toho tasku, s celou cestou: `curriculum/00-onboarding/…/task.js`.

**Start jako vždy:**

1. `git switch main && git pull`
2. `git status` musí říct `nothing to commit`.
3. `git switch -c onboarding/<task>`, např. `onboarding/reset-modes`.

**Konec jako vždy:**

1. `git add <soubor>` a `git commit -m "feat(onboarding): solve <task>"`
2. `git push -u origin onboarding/<task>`
3. Otevři PR (nebo použij ten otevřený). Title: `feat(onboarding): solve <task>`.
4. **Squash and merge.**
5. `git switch main && git pull && git branch -D onboarding/<task>`
6. Smaž i své `practice/…` branche z tohoto tasku. Na GitHubu: stránka Branches.
   Task říká, ať nějakou zatím necháš? Nech ji.

## Každý task

1. Spusť `claude`. Napiš **next** (další).
2. Vyřeš task pomocí pěti kroků níže.
3. Dej do stage (připrav ke commitu) soubory, které ti řekne tutor.
   Udělej commit, message (popis) podle [COMMITS.md](COMMITS.md): `feat(data-types): solve pin-check`.
4. `git push` (pošli na GitHub). Poprvé na nové branchi: `git push -u origin <branch>`.
5. Napiš `/clear`. Napiš **next**.

Můžeš kdykoli přestat. Příště napiš **continue** (pokračuj).
Pořadí tasků: [curriculum/ROADMAP.md](curriculum/ROADMAP.md).

| Napiš | Tutor |
|---|---|
| **next** (další) | dá ti další task |
| **start sort-ascending** (začni sort-ascending) | dá ti místo toho tenhle task |
| **continue** (pokračuj) | naváže tam, kde jsi skončila |
| **I'm stuck** (zasekla jsem se) | zeptá se na tvoje tři řádky, pak dá jednu nápovědu |
| **check my solution** (zkontroluj moje řešení) | ptá se na tvůj kód |
| **I'm done** (jsem hotová) | zkontroluje tvou práci, řekne ti soubory pro commit |

Tutorovi můžeš psát i česky.

V každé složce tasku: `task.js` je tvůj. Svůj kód piš pod comments (komentáře) se zadáním. Ty neměň.
`TUTOR.md` jsou nápovědy pro tutora. Nečti ho: zkazíš si tím nápovědy.

## Jak vyřešit task: pět kroků

Každý task, i ten malý. Piš si kroky, dokud ti nepřijdou automatické.

**1. Understand (pochop).** Zatím žádný kód. Řekni task vlastními slovy.
Napiš dva příklady: input (vstup) → output (výstup).
A jeden edge case (okrajový případ): prázdné, nula, špatný type (typ), chybějící.
Neumíš napsat příklady? Přečti si task znovu, nebo se zeptej.

**2. Plan (naplánuj).** Napiš kroky jako comments do `task.js`. Obyčejnými slovy, žádný kód.

```js
// projdi každé číslo
// pamatuj si zatím nejmenší
// na konci ho vypiš
```

| Zeptej se | Nejspíš potřebuješ |
|---|---|
| Něco se **opakuje**? | loop (smyčku) |
| **Vybírám** mezi možnostmi? | condition (podmínku), `if` |
| Dělám **to samé dvakrát**? | function (funkci) |

**3. Code (napiš kód).** Jdi do složky tasku: `cd`. Přepiš jeden comment na kód. Spusť `node task.js`.
Pak další comment.

**4. Check (zkontroluj).** Porovnej výsledek s řádkem `má vypsat` dole.
Vyzkoušej své příklady a svůj edge case. Pak vrať původní input.
Špatně? Nehádej. Vypiš hodnoty přes `console.log` těsně před tím místem. Najdi, **kde** se to rozbije.

**5. Explain (vysvětli).** Napiš tutorovi do chatu: co kód dělá krok po kroku, proč takhle,
co se stane s edge case.
Neumíš nějakou část vysvětlit? Vrať se k tomu kódu.

**Hotovo, když** `node task.js` vypíše, co má, i pro tvoje příklady, a ty jsi to vysvětlila.

## Když se zasekneš

Napiš tři řádky:

1. **Snažím se…**
2. **Čekala jsem…**
3. **Stalo se…**

Často ti už tohle ukáže bug. Když ne, tutor teď ví, co potřebuje.
Pořád zaseklá i po všech nápovědách? Napiš své tři řádky do `task.js` pod task, udělej commit
a dej si pauzu. Příště napiš **continue**. To je normální.

## Slovníček

| English | Česky |
|---|---|
| task | úkol |
| value | hodnota |
| type | typ (number = číslo, string = text, boolean = true/false) |
| array | pole, seznam hodnot `[5, 2, 8]` |
| loop | smyčka, opakování |
| condition | podmínka (`if`) |
| function | funkce |
| bug | chyba v kódu |
| edge case | okrajový případ |
| branch | větev v gitu |
| commit | uložení změn v gitu |
| stage | připravit soubor ke commitu (`git add`) |
| untracked | nový soubor, který git zatím nesleduje |
| ignore | git soubor nesleduje, protože je v `.gitignore` |
| push | poslat commity na GitHub |
| pull request (PR) | žádost o kontrolu a sloučení |
| merge | sloučit |
| review | kontrola kódu |
| remote | vzdálené repo, tady GitHub (`origin`) |
| fetch | stáhnout novinky z GitHubu, nic nezměnit |
| pull | stáhnout novinky a přidat je do své branche |
| HEAD | místo, kde právě jsi: tvoje branch a její poslední commit |
| conflict | dvě změny stejného řádku. Vybereš ty |
| squash | víc commitů → jeden |
| rebase | přehrání commitů na nový základ |
| reset | posunout branch na jiný commit |
| revert | nový commit, který vrátí starý |
| stash | odložit rozdělané změny stranou |
| reflog | deník gitu: kde všude HEAD byl |
| tag | štítek na commitu, který se nikdy neposune |
| SHA | otisk commitu, jeho jméno: `e12e626` |
| cherry-pick | zkopírovat jeden commit na jinou branch |
| force push | push, který přepíše historii na GitHubu |
