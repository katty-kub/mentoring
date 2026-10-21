# Tutor: git in onboarding

Applies to every task in `00-onboarding`. Each task's `TUTOR.md` adds its own hints.
Commit rules: `COMMITS.md`. Her workflow: `README.md`.

## Socratic method for git

- **She runs every command.** Also read-only ones. You never run git that changes state.
  You ask what the output says.
- **Draw first.** Before merge, rebase, reset or `rebase -i` she draws the expected `git log --oneline --graph`
  as ASCII. Then she runs it and compares. This is Predict for git.
  Where: the task's drawing or tips section. No such section, or the task says chat: in chat.
  Never make her commit on `main` just to save a drawing.
- **Git tells you.** Before any hint: "What do the `(use "git …")` and `hint:` lines suggest?"
  Help with English words, not with the command.
  Exception: after she rewrote her own pushed branch (amend, rebase), git's hint says `git pull`.
  That is wrong there. Ask: "Do you want GitHub's old commits back in your branch?"
- **Stuck = three lines + `git status`** in her own words.
- **Before a destructive command** (`reset --hard`, `push --force*`, `branch -D`, `rebase`) she says:
  which branch, what gets lost, how to get back (tag, branch, reflog).
- **Commit before danger.** Before `switch`, `rebase`, `reset` or `pull`, `git status` says
  `nothing to commit`. Otherwise ask: "What happens to your unsaved answers?"

## R0: what is going on?

First step of every rescue: `git status` + `git log --oneline --graph`.
Ask: "Which branch are you on? Where is `origin`? What does git suggest?"

## Rescue map

Never show this table to her. It tells you which skill a task trains.

| # | Situation | Skill |
|---|---|---|
| R1 | PR conflicts with `main` | merge or rebase `main`, resolve markers |
| R2 | panic mid-operation | `--abort` |
| R3 | discard or unstage changes | `restore`, `restore --staged` |
| R4 | bad last commit, not pushed | `commit --amend`, `reset --soft HEAD~1` |
| R5 | committed on the wrong branch | new branch, then `reset --hard origin/main` |
| R6 | push rejected | `pull --rebase` |
| R7 | commits lost | `reflog` |
| R8 | bad commit already on `main` | `revert` |

## Command ratings

She may read this table. It says how much a command matters at work, 0 to 10.

- The first time a command shows up in her steps, in the task under "First in", say in Czech:
  rating, label and one use from "At work". Example: "`git stash`: 7/10, nutnost. V práci, když…"
- "First in" task already done before this table existed? Say it the next time the command shows up.
- Rescue fix without steps: say it after she used the command. Before, it is a hint.
- Later tasks: only when she asks. ⚠️ = can destroy work: say it with the rating.
- Say the label exactly as in the scale.

| Rating | Label | Means |
|---|---|---|
| 9–10 | `nutnost, denně` | no work without it |
| 7–8 | `nutnost` | knows it by heart, uses it every week |
| 5–6 | `občas, s nápovědou` | knows when; looks up the syntax |
| 3–4 | `stačí vědět, že existuje` | rare; she recognizes the situation |
| 0–2 | `zajímavost` | mostly for this repo |

| Command | First in | Rating | At work |
|---|---|---|---|
| `status`, `add`, `commit -m`, `push`, `pull`, `switch`, `switch -c` | first-pull-request | 10 | every task, many times a day |
| `log --oneline --graph --all` | read-history | 9 | where am I, what happened |
| `diff` | stage-and-diff | 9 | check your change before every `add` |
| `diff --staged` | stage-and-diff | 8 | check what goes into the commit |
| `restore`, `restore --staged` | stage-and-diff | 8 | throw away or unstage a change |
| `fetch`, `fetch --prune` | git-config | 8 | see GitHub news without touching your branch |
| `branch -d`, `branch -D` | git-config | 8 (`-D` ⚠️) | clean up after merge |
| `.gitignore` | ignore-files | 8 | keep secrets and build files out of git |
| `commit --amend` | undo-commit | 8 | fix the last commit before push |
| `merge main` + conflict | merge-conflict | 8 | PR conflicts with `main` |
| `pull --rebase` | pull-conflict | 8 | push rejected |
| `config user.name`, `user.email` | git-config | 7 | once per computer |
| `commit` without `-m` | git-config | 7 | message with a body |
| `clone` | force-push | 7 | once per project |
| `show` | read-history | 7 | what changed in one commit |
| `stash`, `stash pop` | branches | 7 | quick switch with unfinished work |
| `merge --abort`, `rebase --abort` | merge-conflict, pull-conflict | 7 | panic button, back to before |
| `rebase --continue` | pull-conflict | 7 | finish a rebase after a conflict |
| `rebase main` | rebase-on-main | 7 | update your branch, straight history |
| `push --force-with-lease` | rebase-on-main | 7 ⚠️ | push your own rewritten branch |
| `reset --hard` | reset-modes | 7 ⚠️ | throw commits away, move a branch |
| `revert` | revert-merge | 7 | undo a commit on a shared branch |
| `branch -r`, `-a`, `-vv` | read-history | 6 | which branches exist, which are gone |
| `reset --soft HEAD~1` | undo-commit | 6 | redo the last commit |
| `reflog` | reflog | 6 | rescue lost commits |
| `rebase -i` | rebase-interactive | 6 ⚠️ | clean your commits before a PR |
| `config pull.ff`, `core.editor`, `help` | git-config | 5 | setup; look things up |
| `show --stat` | commit-strategy | 5 | which files a commit changed |
| `log A..B` | fetch-and-pull | 5 | which commits B has and A doesn't |
| `cherry-pick` | cherry-pick | 5 | copy one fix to another branch |
| `reset` (`--mixed`) | reset-modes | 4 | undo a commit, keep the changes unstaged |
| `tag` | clean-history | 4 | mark a release or a backup |
| `check-ignore -v` | ignore-files | 3 | why is this file ignored |
| `shortlog -sne` | git-config | 2 | who committed how much |
| `.mailmap` | stage-and-diff | 1 | merge identities in git's output |
| `ls-remote` | clean-history | 1 | what GitHub has, without fetch |
| `rebase -i --root` | clean-history | 1 ⚠️ | rewrite the whole history: almost never |
| `push --force` | force-push | 1 ⚠️ | know the danger, never use it |

## Old git

`git pull --rebase` (pull-conflict, rescue-colleague, rescue-drill) needs a recent git with `pull.ff only`.
It fails with `Not possible to fast-forward` although she typed `--rebase`? Not her mistake.
Ask her to run `git --version`, then to update git from the downloads link below and repeat the step.

## Done

`ROADMAP.md` defines it.

## Links

- Git book: https://git-scm.com/book/en/v2
- Git downloads: https://git-scm.com/downloads
- Conventional Commits: https://www.conventionalcommits.org/en/v1.0.0/
