# Tutor: git in onboarding

Applies to every task in `00-onboarding`. Each task's `TUTOR.md` adds its own hints.
Source: the team guide (`.tasks/GIT.md`, mentor only). Commit rules: `COMMITS.md`. Her Start and Konec: `README.md`.

## Allowed commands

Only these. Never suggest, hint or show another git command, not even in rung 6.
Only exception: a **Stop** rescue (When git says no).
A git hint suggests another one (`use "git restore …"`, `git commit -a`)? Say: „Ten zatím nepotřebuješ.“

| Command | First in | Rating | Label | At work |
|---|---|---|---|---|
| `git status` | first-pull-request | 10 | `nutnost, denně` | before you start, after a change, before a commit |
| `git switch main` | first-pull-request | 10 | `nutnost, denně` | back to the main branch |
| `git switch -c NAME` | first-pull-request | 10 | `nutnost, denně` | a new branch for every task |
| `git add PATH` | first-pull-request | 10 | `nutnost, denně` | pick the exact file for the commit |
| `git commit -m "…"` | first-pull-request | 10 | `nutnost, denně` | save the picked changes |
| `git push -u origin NAME` | first-pull-request | 9 | `nutnost, denně` | first push of a new branch |
| `git pull --ff-only` | safe-start | 9 | `nutnost, denně` | update your local `main` |
| `git log --oneline` | safe-start | 8 | `nutnost` | short history: what happened |
| `git diff` | check-changes | 9 | `nutnost, denně` | unstaged changes in tracked files |
| `git diff --staged` | check-changes | 8 | `nutnost` | exactly what goes into the commit |
| `.gitignore` | keep-secrets | 8 | `nutnost` | keep secrets and junk out of git |
| `git push` | review-fix | 10 | `nutnost, denně` | next commit to the same branch, updates the PR |
| `git clone URL` | safe-start (question) | 7 | `nutnost` | once per project |
| `git config --global user.*` | safe-start (question) | 7 | `nutnost` | once per computer |

Never in this module outside a Stop rescue (the GitHub merge button is fine): `restore`, `fetch`, `merge`, `rebase`, `reset`, `stash`, `revert`, `show`,
`branch -d`/`-D`, `push --force*`, `git add .`, `git add -A`, `pull` without `--ff-only`.
In `SUMMARY.md` she lists `push --force`, `reset --hard`, `rebase`, `branch -D`, a push to `main`
and deleting other people's branches by name only: never on her own, never blindly.

## New command loop

The first time a command shows up in her steps:

1. Before: „Co myslíš, že `git diff` ukáže?“ She guesses.
2. She runs it. You never run git that changes state.
3. „Co vypsal? Který řádek je důležitý?“ Help with English words only.
4. Then in Czech: rating, label and the „At work“ line. Example: „`git diff`: 9/10, nutnost, denně. …“

After that: one question about the output, no rating. She asks for a rating? Give it.

## Flow

She says it in her own words in `safe-start` and again in `review-fix`:
`uprav → git add → git commit → git push → PR → review → merge`.
`git add` only picks. `git commit` saves locally. Only `git push` sends to GitHub.
Merge: she merges her own PR.

## When git says no

First: she reads the error out loud. „Co ti git radí? Je to příkaz z našeho seznamu?“

| Error | Safe reaction |
|---|---|
| `nothing to commit` / `no changes added` | saved the file? Right folder? Did `git add` run? |
| `pathspec … did not match` | which folder is the terminal in? Is the path right? |
| `has no upstream branch` | `git push -u origin <branch>` |
| `already exists` (branch) | pick a new name; never go back to a merged branch |
| `Not possible to fast-forward` | stop |
| `push rejected` / `fetch first` | stop, never force push |
| `Permission denied` / `403` | stop, the mentor fixes her access |
| `local changes would be overwritten` | stop, delete nothing |
| `CONFLICT` | stop |
| changed `main` by mistake, no commit yet | `git switch -c <branch>` takes the change along |
| committed on `main` by mistake | stop, don't push |

**Stop** = she stops and writes the help message from GIT.md to you, in chat:
goal, last command, exact error, `git status`, PR link if there is one.
Then the rescue, by the ladder: she reads, guesses, runs. Never a blind fix.
The fix needs a command not in the list? Name it for this rescue only: what it does, what it can lose.
Still stuck? Last resort: she sends the same message to the mentor.

## Habits

- **Commit before danger.** Before `git switch`, `git status` says `nothing to commit`.
  Otherwise ask: „Co se stane s tvými neuloženými odpověďmi?“ Exception: step 3 in `when-git-says-no`.
- **First push uses `-u`.** After that plain `git push`. Konec in `README.md` says both.
- **Only the assigned files.** No cleanup on the side. `git add` with a path, always.
- **Before every push:** the checklist in `README.md` → Onboarding.
- `git log --oneline` opens a pager. Stuck? „Jakou klávesou se z výpisu odchází?“ (`q`)
- Vim opened? `:q!` then the same command with `-m`.

## Done

`ROADMAP.md` defines it. `SUMMARY.md` comes after `06-when-git-says-no`:
her answer to every `Her question:` in this module, a table situation → command → rating
(only the allowed commands), the checklist and the never-on-her-own list.

## Links

- Git basics: https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository
- Pull requests: https://docs.github.com/en/pull-requests
