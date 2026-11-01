# Onboarding – moje shrnutí

## Co jsem se naučila

1. **Proč posílám změny přes PR?**  
   PR umožní mentorce změny zkontrolovat a schválit před sloučením do `main`.

2. **Proč začínám z aktuálního `main` na nové větvi?**  
   Každý úkol má vlastní větev a nezačíná se starými změnami z jiného úkolu.

3. **Jak zjistím, co půjde do commitu?**  
   Podívám se na `git status`, změny zkontroluji přes `git diff`, přidám jen konkrétní soubor a zkontroluji ho přes `git diff --staged`.

4. **Co dělá `.gitignore` a co neumí?**  
   Git díky němu ignoruje vybrané soubory, například `.env`. Soubor ale nesmaže a nezneplatní tajemství, které už bylo odesláno na GitHub.

5. **Jak pracuji s připomínkami v PR?**  
   Opravu udělám ve stejné větvi, vytvořím další commit a změnu pošlu přes `git push`. Aktualizuje se tím stejný PR. Na sloučení počkám na schválení mentorky.

6. **Co udělám, když Git vypíše chybu, které nerozumím?**  
   Zastavím se, přečtu hlášku, zkontroluji `git status` a požádám tutora nebo mentorku o pomoc. Nic nemažu ani neopakuji naslepo.

## Příkazy a moje jistota

| Situace                         | Příkaz                       | Jistota (1–10) |
| ------------------------------- | ---------------------------- | -------------: |
| Zkontrolovat větev a změny      | `git status`                 |             10 |
| Přejít na `main`                | `git switch main`            |             10 |
| Vytvořit novou větev            | `git switch -c NAME`         |             10 |
| Zkontrolovat pracovní změny     | `git diff`                   |              9 |
| Přidat konkrétní soubor         | `git add PATH`               |             10 |
| Zkontrolovat připravené změny   | `git diff --staged`          |              8 |
| Vytvořit commit                 | `git commit -m "zpráva"`     |             10 |
| Poprvé odeslat větev            | `git push -u origin NAME`    |             10 |
| Odeslat další změny             | `git push`                   |             10 |
| Aktualizovat `main`             | `git pull --ff-only`         |              9 |
| Prohlédnout historii            | `git log --oneline`          |              8 |
| Zkontrolovat ignorované soubory | `.gitignore`                 |              8 |
| Zkopírovat repozitář            | `git clone URL`              |              7 |
| Nastavit Git uživatele          | `git config --global user.*` |              7 |

## Před každým push

- Jsem na své větvi, ne na `main`.
- Zkontrolovala jsem `git status`.
- Změnila jsem jen soubory, které patří k úkolu.
- Zkontrolovala jsem připravené změny přes `git diff --staged`.
- Neposílám hesla, tokeny ani `.env`.
- PR vede z mé větve do `main`.

## Co sama nezkouším

Bez pomoci tutora nebo mentorky nepoužívám `push --force`, `reset --hard`, `rebase` ani `branch -D`. Neposílám změny přímo do `main` a nemažu cizí větev jen podle jejího názvu.
