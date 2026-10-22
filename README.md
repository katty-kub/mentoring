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
   Volitelný task `git-config` to po mentoringu doladí.
3. `gh auth login`.
4. `git clone https://github.com/katty-kub/mentoring.git && cd mentoring`.
5. V editoru vypni AI suggestions (návrhy od AI). VS Code: tohle repo (repozitář) to dělá samo.
6. Spusť `claude`. Klikni na „Trust the folder“.

## Každá dávka tasků

Dávka = 1 až 3 tasky na jedné branchi (větvi). Git příkazy píšeš vždy sama, ve svém terminálu.
Tutor se ptá, ty spouštíš.

1. Začni na čistém main (hlavní branch): `git status` říká `nothing to commit`.
   Pak `git switch main && git pull --ff-only`.
2. Nová branch: `<modul>/<první-task>`, např. `git switch -c data-types/pin-check`.
3. Vyřeš tasky, jeden po druhém. Každý task končí commitem (uložením změn) `solve`.
   Cvičné commity navíc nevadí: squash je spojí.
4. Otevři na GitHubu pull request (žádost o sloučení). Title (název) piš podle [COMMITS.md](COMMITS.md).
5. Merge (sloučení) jen přes **Squash and merge**, pak **Delete branch**.
6. `git status`, pak `git switch main && git pull --ff-only`. Další dávka = nová branch.
   Na sloučenou branch se nevracej.

PR hlásí conflict (konflikt)? Stop: napiš tutorovi zprávu o pomoc, jako v `06-when-git-says-no`.
Vyřešíte to spolu. Mentor je až poslední možnost.
Po posledním tasku modulu: napiš `SUMMARY.md` modulu, svůj tahák.

## Onboarding: jeden task = jedna branch

V `00-onboarding` má každý task svou branch a svůj PR. Příkazy spouštěj v root (kořeni) repa.
`<soubor>` = `task.js` toho tasku, s celou cestou: `curriculum/00-onboarding/…/task.js`.

**Start jako vždy:**

1. `git status` musí říct `nothing to commit`. Jinak stop: nic nemaž, napiš tutorovi.
2. `git switch main`
3. `git pull --ff-only`
4. `git switch -c training/<task>`, např. `training/check-changes`.

**Konec jako vždy:**

1. `git status`, `git add <soubor>`, pak `git diff --staged`: je tam jen to, co chceš?
2. `git commit -m "feat(onboarding): solve <task>"`
3. `git push`. První push na této branchi: `git push -u origin training/<task>`.
4. Otevři PR (nebo použij ten otevřený): base `main` ← `training/<task>`.
   Title: `feat(onboarding): solve <task>`. Popis: co se změnilo, proč, jak jsi to ověřila.
   Zkontroluj **Files changed**: jen soubory ze zadání?
5. **Squash and merge**, pak **Delete branch**. Merge děláš sama.
6. `git status`, `git switch main`, `git pull --ff-only`, `git log --oneline`. Tvůj commit je nahoře.

**Před každým push:**

- Jsem na své branchi, ne na `main`.
- Měnila jsem jen soubory ze zadání.
- Zkontrolovala jsem `git status` a `git diff --staged`.
- V commitu nejsou hesla, tokeny ani `.env`.
- PR míří z mé branche do `main`.

## Onboarding extended: jeden task = jedna branch

Volitelné, po mentoringu: [ROADMAP](curriculum/ROADMAP.md#po-mentoringu-onboarding-extended-volitelné).
V `00-onboarding-extended` je dávka vždy jeden task. Každý task má svou branch a svůj PR.
Všechny příkazy spouštěj v root (kořeni) repa, tam kde je `README.md`.
`<soubor>` v krocích = `task.js` toho tasku, s celou cestou: `curriculum/00-onboarding-extended/…/task.js`.

**Start jako vždy:**

1. `git status` musí říct `nothing to commit`.
2. `git switch main && git pull`
3. `git switch -c onboarding/<task>`, např. `onboarding/reset-modes`.

**Konec jako vždy:**

1. `git add <soubor>` a `git commit -m "feat(onboarding): solve <task>"`
2. `git push -u origin onboarding/<task>`
3. Otevři PR (nebo použij ten otevřený). Title: `feat(onboarding): solve <task>`.
4. **Squash and merge.**
5. `git switch main && git pull && git branch -D onboarding/<task>`
6. Smaž i své `practice/…` branche z tohoto tasku. Na GitHubu: stránka Branches.

## Git commands (příkazy)

Hodnocení 0–10 a ⚠️ vysvětluje [COMMANDS.md](curriculum/00-onboarding-extended/COMMANDS.md#hodnocení).

### Povinné: `00-onboarding`

Jen tyhle. Jiné git commands v onboardingu nepoužívej.

| Command | Co dělá | Hodnocení | Poprvé v |
|---|---|---|---|
| `git status` | ukáže branch, změněné soubory a co je ve stage | 10 · `nutnost, denně` | first-pull-request |
| `git switch main` | přepne zpátky na `main` | 10 · `nutnost, denně` | first-pull-request |
| `git switch -c <branch>` | založí novou branch a přepne na ni | 10 · `nutnost, denně` | first-pull-request |
| `git add <soubor>` | dá soubor do stage. Vždy jménem, ne „všechno“ | 10 · `nutnost, denně` | first-pull-request |
| `git commit -m "…"` | uloží stage jako commit s popisem | 10 · `nutnost, denně` | first-pull-request |
| `git push -u origin <branch>` | první push nové branche | 10 · `nutnost, denně` | first-pull-request |
| `git pull --ff-only` | aktualizuje tvůj `main` z GitHubu | 9 · `nutnost, denně` | safe-start |
| `git log --oneline` | krátká historie: jeden commit na řádek | 8 · `nutnost` | safe-start |
| `git diff` | změny, které ještě nejsou ve stage | 9 · `nutnost, denně` | check-changes |
| `git diff --staged` | změny ve stage: to půjde do commitu | 8 · `nutnost` | check-changes |
| `.gitignore` | soubor, ne command: co git nesleduje | 8 · `nutnost` | keep-secrets |
| `git push` | pošle další commity na GitHub. PR se aktualizuje | 10 · `nutnost, denně` | review-fix |
| `git clone <adresa>` | stáhne repo z GitHubu | 7 · `nutnost` | safe-start |
| `git config --global user.name "…"` | nastaví jméno do commitů. Stejně `user.email` | 7 · `nutnost` | safe-start |

### Navíc v `00-onboarding-extended`

Volitelné, po mentoringu. Podrobnosti: [COMMANDS.md](curriculum/00-onboarding-extended/COMMANDS.md).

| Command | Co dělá | Hodnocení | Poprvé v |
|---|---|---|---|
| `git config --global core.editor "code --wait"` | popis commitu se píše ve VS Code | 5 · `občas, s nápovědou` | git-config |
| `git config --global pull.ff only` | `git pull` se zastaví, když se branch a GitHub rozešly | 5 · `občas, s nápovědou` | git-config |
| `git config --list` | vypíše všechna nastavení gitu | 5 · `občas, s nápovědou` | git-config |
| `git help <command>` | otevře návod ke commandu | 5 · `občas, s nápovědou` | git-config |
| `git log --oneline --graph --all` | historie jako strom, všechny branche | 9 · `nutnost, denně` | branches |
| `git show <sha>` | jeden commit: jeho popis a změny | 7 · `nutnost` | commit-strategy |
| `git show --stat <sha>` | jen soubory, které commit změnil | 5 · `občas, s nápovědou` | commit-strategy |
| `git log --oneline A..B` | commity, které má B a nemá A | 5 · `občas, s nápovědou` | fetch-and-pull |
| `git branch -a` | všechny branche, i ty na GitHubu | 6 · `občas, s nápovědou` | squash-merge |
| `git reflog` | deník, kde byl `HEAD`. Najde „ztracené“ commity | 6 · `občas, s nápovědou` | reflog |
| `git shortlog -sne` | kdo udělal kolik commitů | 2 · `zajímavost` | git-config |
| `git ls-remote --tags origin` | co má GitHub, bez stahování | 1 · `zajímavost` | clean-history |
| `git commit` | bez `-m`: popis napíšeš v editoru | 7 · `nutnost` | git-config |
| `git switch <branch>` | přepne na jakoukoli branch | 10 · `nutnost, denně` | branches |
| `git branch -d <branch>` | smaže branch, jen když je sloučená | 8 · `nutnost` | git-config |
| `git branch -D <branch>` | smaže branch vždy, i nesloučenou | 8 · `nutnost` ⚠️ | git-config |
| `git stash` | odloží neuložené změny stranou | 7 · `nutnost` | branches |
| `git stash pop` | vrátí odložené změny zpátky | 7 · `nutnost` | branches |
| `git tag <jméno> <kde>` | dá commitu tag (štítek) | 4 · `stačí vědět, že existuje` | clean-history |
| `git fetch` | stáhne novinky z GitHubu. Tvoje branche nezmění | 8 · `nutnost` | git-config |
| `git fetch --prune` | totéž, navíc zapomene smazané branche | 8 · `nutnost` | git-config |
| `git pull` | `fetch` a pak přidá novinky do tvé branche | 10 · `nutnost, denně` | git-config |
| `git merge main` | sloučí `main` do tvé branche | 8 · `nutnost` | merge-conflict |
| `git merge --abort` | zruší rozdělaný merge | 7 · `nutnost` | merge-conflict |
| `git rebase main` | dá tvoje commity znovu na konec `main` | 7 · `nutnost` | rebase-on-main |
| `git rebase --continue` | po vyřešení conflictu pokračuje v rebase | 7 · `nutnost` | rebase-on-main |
| `git rebase --abort` | zruší rozdělaný rebase | 7 · `nutnost` | clean-history |
| `git rebase -i --root` | přepíše celou historii | 1 · `zajímavost` ⚠️ | clean-history |
| `git restore <soubor>` | zahodí neuložené změny v souboru | 8 · `nutnost` | stage-and-diff |
| `git restore --staged <soubor>` | vrátí soubor ze stage, změny zůstanou | 8 · `nutnost` | stage-and-diff |
| `git reset --soft HEAD~1` | zruší poslední commit, změny zůstanou ve stage | 6 · `občas, s nápovědou` | reset-modes |
| `git reset --soft origin/main` | zruší tvoje commity od `main`, změny zůstanou ve stage | 6 · `občas, s nápovědou` | tidy-commits |
| `git reset HEAD~1` | zruší commit, změny zůstanou mimo stage | 4 · `stačí vědět, že existuje` | reset-modes |
| `git reset --hard <kam>` | posune branch a zahodí neuložené změny | 7 · `nutnost` ⚠️ | reset-modes |
| `git revert <sha>` | nový commit, který vrátí starý | 7 · `nutnost` | revert-merge |
| `git push --force-with-lease` | pošle přepsanou branch, když na GitHubu nic nového není | 7 · `nutnost` ⚠️ | rebase-on-main |
| `git push --force` | přepíše branch na GitHubu bez kontroly | 1 · `zajímavost` ⚠️ | protect-main |

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
| fast-forward | branch se jen posune dopředu, nic se nespojuje (`--ff-only`) |
| upstream | branch na GitHubu, kam tvoje branch posílá (`-u`) |
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
| force push | push, který přepíše historii na GitHubu |
