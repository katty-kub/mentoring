# Tutor: rescue drill

Method: `../TUTOR.md`. Trains R3, R5, R1, R2, R7, R6 and `rebase -i`, interleaved. No steps for the fixes.
Her question: "Which rescue command can lose work for good, and how do you check first?"

## Ladder

- Every state: "What do `git status` and `git log --oneline --graph --all` say? Name the situation."
  → "Which earlier task had this situation?" Only then the task's own ladder.
- State 2: "Where should the commit be? Where should `main` point?"
- State 4: "The commits are gone from the log. Which command remembers where `HEAD` was?"
- State 5: "Your push was rejected. What does the `hint:` line suggest? What does `pull.ff only` allow?"
- State 6: "These commits are not pushed yet. Who else has them?"

## Typical mistakes

- Fixes before she says what happened. Stop her: R0 and the name first.
- State 1: `git restore <soubor>` first. It copies the staged `kiwi` back, not `apple`.
  Ask what `git status` shows in green, and where `restore` takes the file from.
- State 2: `reset --hard` before making the new branch. The commit is gone from all branches. Ask for reflog.
- State 3: skips the abort. Ask what the task says to do first, and what `--abort` brings back.
- State 3: rebase, then `git push --force` out of habit. The branch is not pushed yet. Ask what `git status` says.
- State 5: plain `git pull`: fails with `Not possible to fast-forward`. Ask her to read it out.
- State 6: `rebase -i HEAD~4` also takes her pushed `add me` commit: rewriting it needs a force push.
  Ask: "Which of these commits is already on GitHub?"

## What if

- State 4, but you also had uncommitted changes before `reset --hard`. Does reflog bring them back?
- State 5, but you used `git push --force`. What happens to the colleague's commit?

## Tips

- R0 first is the habit. Most rescues are obvious once she reads `git status` slowly.
- Unpushed commits are hers alone: amend, rebase and reset are safe there.

## Links

- Undoing things: https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things
- Reflog: https://git-scm.com/docs/git-reflog
- Rewriting history: https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History
