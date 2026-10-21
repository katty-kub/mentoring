# Commit messages (popisy commitů)

Tohle repo (repozitář) používá [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
Platí pro každý commit (uložení změn) a každý pull request (žádost o sloučení), i pro mentora.

## Proč

History (historie) je deník projektu. Dobrá message (popis) ti řekne bez otevření kódu:

- co se změnilo a kde,
- kdy přišel bug (chyba) a který commit ho vrátí zpátky,
- proč tu nějaký řádek je.

`completed task` neřekne nic. `feat(data-types): solve pin-check` řekne všechno.

## Tvar

```
<type>(<scope>): <description>

<body: proč, ne co. Nepovinné.>
```

- **type (druh):** co se stalo. Seznam je níže.
- **scope (oblast):** kde se to stalo. Seznam je níže.
- **description (popis):** anglicky, v rozkazovacím způsobu (`add`, ne `added`), malým písmenem, bez tečky.
- Celý první řádek má nejvýš 72 znaků.
- Body (tělo) je za prázdným řádkem. Napiš ho, jen když „proč“ není vidět z kódu.

## Types (druhy)

| Type | Kdy |
|---|---|
| `feat` | nová věc: vyřešený task, nový task, nová funkce |
| `fix` | oprava chyby |
| `docs` | jen dokumentace: `README.md`, `ROADMAP.md`, tento soubor |
| `test` | jen testy |
| `refactor` | jiný kód, stejné chování |
| `style` | jen formátování, mezery, středníky |
| `chore` | údržba: nastavení gitu, `.gitignore`, `.mailmap` |
| `revert` | vrací jiný commit. Scope a description jako v něm. Body: `Reverts <sha>.` |

Revert přes squash merge: body dopiš do políčka popisu v okně merge, než potvrdíš.

## Scopes (oblasti)

| Scope | Kdy |
|---|---|
| `onboarding`, `data-types`, … | tvůj modul: jméno složky bez čísla |
| `curriculum` | tasky a jejich soubory, víc modulů najednou |
| `tutor` | tutor skill, output style, `TUTOR.md` |
| `readme` | `README.md` |
| `git` | nastavení gitu v repu: `.mailmap`, `.gitignore` |
| `repo` | pravidla repa: `AGENTS.md`, `COMMITS.md`, `.claude/settings.json` |

## Vyřešený task

```
feat(<modul>): solve <task>
feat(<modul>): solve <task>, <task>
```

Jméno tasku je jméno složky bez čísla: `11-pin-check` → `pin-check`.
Víc tasků a první řádek je moc dlouhý? Jmenuj první task a přidej `and <počet> more`.
Všechny tasky napiš do body: `feat(data-types): solve sort-ascending and 2 more`.

## Pull request

- PR title (název) = message squash commitu. Má stejný tvar jako commit.
- V onboardingu: `feat(onboarding): solve <task>`. Title napiš hned při otevření PR.
- GitHub přidá na konec ` (#18)`, číslo PR. Proto má title nejvýš 66 znaků.

## Příklady

```
feat(data-types): solve pin-check
feat(data-types): solve smallest-number, largest-number
fix(curriculum): correct expected output in sum-numbers
docs(readme): add git words to the glossary
chore(git): add mailmap
revert(data-types): solve pin-check

Reverts 1a2b3c4.
```

Špatně: `completed task`, `Fixed the bug.`, `Katy/09 truthy falsy`, `wip`, `asdf`.
