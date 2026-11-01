# Commands (příkazy)

Všechny git commands, které si v `00-onboarding-extended` procvičíš. Tady nic nespouštěj, jen čti.
Vrať se sem, když zapomeneš, co který dělá.

## Hodnocení

Číslo říká, jak moc command potřebuješ v práci: 0 až 10. Slova říkají, jak často ho použiješ.

| Hodnocení | Slovy | Znamená |
|---|---|---|
| 9–10 | `nutnost, denně` | bez něj v práci nic neuděláš |
| 7–8 | `nutnost` | umíš ho zpaměti, používáš ho každý týden |
| 5–6 | `občas, s nápovědou` | víš, kdy ho použít; přesný zápis si najdeš |
| 3–4 | `stačí vědět, že existuje` | vzácně; poznáš situaci, kdy ho potřebuješ |
| 0–2 | `zajímavost` | hlavně pro toto repo (repozitář) |

⚠️ = může smazat tvou práci. Než ho spustíš, řekni: která branch (větev), co se ztratí, jak se vrátíš.

Slova v příkazech:

- `<soubor>` = cesta k souboru, např. `curriculum/00-onboarding-extended/01-git-config/task.js`.
- `<sha>` = SHA (otisk commitu): krátký kód na začátku řádku v `git log --oneline`.
- `HEAD` = místo, kde právě jsi. `HEAD~1` = commit (uložení změn) před ním.
- `origin` = tvoje repo na GitHubu. `origin/main` = `main` na GitHubu, jak ho git viděl při posledním `fetch`.

## 1. Nastavení

| Command | Co dělá | V práci | Hodnocení | Poprvé v |
|---|---|---|---|---|
| `git config --global user.name "…"` | nastaví jméno, které git zapíše do každého commitu | jednou na každém počítači | 7 · `nutnost` | git-config |
| `git config --global user.email "…"` | nastaví email; podle něj GitHub pozná, že commit je tvůj | jednou na každém počítači | 7 · `nutnost` | git-config |
| `git config --global core.editor "code --wait"` | popis commitu se píše ve VS Code | nastavení počítače | 5 · `občas, s nápovědou` | git-config |
| `git config --global pull.ff only` | `git pull` se zastaví, když se tvoje branch a GitHub rozešly | nastavení počítače | 5 · `občas, s nápovědou` | git-config |
| `git config --list` | vypíše všechna nastavení gitu | kontrola nastavení | 5 · `občas, s nápovědou` | git-config |
| `git help <command>` | otevře návod ke commandu | když nevíš, jak se píše | 5 · `občas, s nápovědou` | git-config |
| `git clone <adresa> <složka>` | stáhne celé repo z GitHubu do nové složky | jednou na každý projekt | 7 · `nutnost` | clean-history |
| `.gitignore` | soubor, ne command: seznam souborů, které git nesleduje | hesla a velké soubory nepatří do gitu | 8 · `nutnost` | ignore-files |

## 2. Kde jsem a co se stalo

Tyhle commands nic nemění. Spouštěj je často.

| Command | Co dělá | V práci | Hodnocení | Poprvé v |
|---|---|---|---|---|
| `git status` | ukáže branch, změněné soubory a co je ve stage (příprava ke commitu). Radí další krok | každý task, mnohokrát denně | 10 · `nutnost, denně` | first-pull-request |
| `git log --oneline --graph --all` | historie jako strom: jeden commit na řádek, všechny branche | kde jsem, co se stalo | 9 · `nutnost, denně` | branches |
| `git diff` | změny, které ještě nejsou ve stage | kontrola před každým `git add` | 9 · `nutnost, denně` | stage-and-diff |
| `git diff --staged` | změny ve stage: to půjde do commitu | kontrola před commitem | 8 · `nutnost` | stage-and-diff |
| `git show <sha>` | jeden commit: jeho popis a změny | co se změnilo v jednom commitu | 7 · `nutnost` | commit-strategy |
| `git show --stat <sha>` | jen seznam souborů, které commit změnil | které soubory commit změnil | 5 · `občas, s nápovědou` | commit-strategy |
| `git log --oneline A..B` | commity, které má B a nemá A | co je na GitHubu nového | 5 · `občas, s nápovědou` | fetch-and-pull |
| `git branch -a` | všechny branche: tvoje i ty na GitHubu (`remotes/origin/…`) | které branche existují | 6 · `občas, s nápovědou` | squash-merge |
| `git reflog` | deník: kde všude byl `HEAD`. Najde i „ztracené“ commity | záchrana ztracených commitů | 6 · `občas, s nápovědou` | reflog |
| `git shortlog -sne` | kdo udělal kolik commitů, se jménem a emailem | kdo na projektu pracuje | 2 · `zajímavost` | git-config |
| `git ls-remote --tags origin` | co má GitHub, bez stahování | skoro nikdy | 1 · `zajímavost` | clean-history |

## 3. Uložení a odeslání

| Command | Co dělá | V práci | Hodnocení | Poprvé v |
|---|---|---|---|---|
| `git add <soubor>` | dá soubor do stage. Vždy jménem, ne „všechno“ | každý task, mnohokrát denně | 10 · `nutnost, denně` | first-pull-request |
| `git commit -m "…"` | uloží stage jako commit s popisem | každý task, mnohokrát denně | 10 · `nutnost, denně` | first-pull-request |
| `git commit` | bez `-m`: otevře editor, popis může mít víc řádků | popis s delším vysvětlením | 7 · `nutnost` | git-config |
| `git push -u origin <branch>` | první push (odeslání na GitHub) nové branche. `-u` ji spojí s GitHubem | každá nová branch | 10 · `nutnost, denně` | first-pull-request |
| `git push` | pošle nové commity na GitHub | každý task, mnohokrát denně | 10 · `nutnost, denně` | first-pull-request |

## 4. Branche

| Command | Co dělá | V práci | Hodnocení | Poprvé v |
|---|---|---|---|---|
| `git switch <branch>` | přepne na jinou branch | každý task, mnohokrát denně | 10 · `nutnost, denně` | first-pull-request |
| `git switch -c <branch>` | založí novou branch a přepne na ni | každý nový task | 10 · `nutnost, denně` | first-pull-request |
| `git branch -d <branch>` | smaže branch, jen když je sloučená | úklid po merge (sloučení) | 8 · `nutnost` | git-config |
| `git branch -D <branch>` | smaže branch vždy, i nesloučenou | úklid po squash and merge | 8 · `nutnost` ⚠️ | git-config |
| `git stash` | odloží neuložené změny stranou. Soubor vypadá jako po posledním commitu | rychle jinam, práce není hotová | 7 · `nutnost` | branches |
| `git stash pop` | vrátí odložené změny zpátky | návrat k rozdělané práci | 7 · `nutnost` | branches |
| `git tag <jméno> <kde>` | dá commitu tag (štítek) se jménem. `git push origin <jméno>` ho pošle na GitHub | označit verzi nebo zálohu | 4 · `stačí vědět, že existuje` | clean-history |

## 5. GitHub a tvůj počítač

| Command | Co dělá | V práci | Hodnocení | Poprvé v |
|---|---|---|---|---|
| `git fetch` | stáhne novinky z GitHubu. Tvoje branche nezmění | co je nového, bez rizika | 8 · `nutnost` | git-config |
| `git fetch --prune` | totéž, navíc zapomene branche, které na GitHubu už nejsou | úklid po merge | 8 · `nutnost` | git-config |
| `git pull` | `fetch` a pak přidá novinky do tvé branche | každý task, mnohokrát denně | 10 · `nutnost, denně` | first-pull-request |

## 6. Spojení branchí

| Command | Co dělá | V práci | Hodnocení | Poprvé v |
|---|---|---|---|---|
| `git merge main` | sloučí `main` do tvé branche. Vznikne merge commit. Conflict (konflikt)? V souboru uvidíš značky `<<<<<<<` | tvůj PR má conflict s `main` | 8 · `nutnost` | merge-conflict |
| `git merge --abort` | zruší rozdělaný merge. Vše je jako předtím | tlačítko paniky | 7 · `nutnost` | merge-conflict |
| `git rebase main` | rebase (přesazení): dá tvoje commity znovu na konec `main`. Historie zůstane rovná | aktualizace tvé branche | 7 · `nutnost` | rebase-on-main |
| `git rebase --continue` | po vyřešení conflictu pokračuje v rebase | dokončit rebase | 7 · `nutnost` | rebase-on-main |
| `git rebase --abort` | zruší rozdělaný rebase. Vše je jako předtím | tlačítko paniky | 7 · `nutnost` | clean-history |
| `git rebase -i --root` | otevře seznam všech commitů. Přepíšeš celou historii | skoro nikdy | 1 · `zajímavost` ⚠️ | clean-history |

## 7. Vrácení změn

| Command | Co dělá | V práci | Hodnocení | Poprvé v |
|---|---|---|---|---|
| `git restore <soubor>` | zahodí neuložené změny v souboru | zahodit pokus, který nevyšel | 8 · `nutnost` | stage-and-diff |
| `git restore --staged <soubor>` | vrátí soubor ze stage. Změny v souboru zůstanou | omylem `git add` | 8 · `nutnost` | stage-and-diff |
| `git reset --soft HEAD~1` | zruší poslední commit. Změny zůstanou ve stage | přepsat poslední commit | 6 · `občas, s nápovědou` | reset-modes |
| `git reset --soft origin/main` | zruší všechny tvoje commity od `main`. Změny zůstanou ve stage, uložíš je jedním commitem | úklid commitů před PR | 6 · `občas, s nápovědou` | tidy-commits |
| `git reset HEAD~1` | to je `--mixed`: zruší commit, změny zůstanou, ale mimo stage | vzácně | 4 · `stačí vědět, že existuje` | reset-modes |
| `git reset --hard <kam>` | posune branch a zahodí všechny neuložené změny | zahodit commity, posunout branch | 7 · `nutnost` ⚠️ | reset-modes |
| `git revert <sha>` | nový commit, který vrátí změny starého commitu. Historie se nepřepíše | vrátit commit na sdílené branchi | 7 · `nutnost` | revert-merge |
| `git push --force-with-lease` | pošle přepsanou branch. Odmítne, když je na GitHubu něco, co ještě neznáš | push tvé vlastní přepsané branche | 7 · `nutnost` ⚠️ | rebase-on-main |
| `git push --force` | přepíše branch na GitHubu bez kontroly | znát nebezpečí, nikdy nepoužít | 1 · `zajímavost` ⚠️ | protect-main |
