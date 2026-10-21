# Tutor: pull conflict

Method: `../TUTOR.md`. Trains R6, R1 and R2. Her first rebase.
She plays the colleague: a web edit on her own branch (step 3). No mentor needed.
Her question: "Your push is rejected. What do you do, and why not force?"

## Ladder

- Rejected: "What does GitHub have that you don't? Which command shows it without changing anything?"
- `pull.ff only`: "Both sides have a new commit. Can git just move your branch forward?"
- Rebase: "Git takes your commit off, puts the GitHub one under it, then puts yours back on top.
  Which commit gets a new SHA?"
- Conflict: "Which fruit came from GitHub, which from your computer? How do you know?"

## Typical mistakes

- Pulls in step 3 before making her own commit: no conflict happens. Ask her to go back to step 4's order.
- During rebase the sides look swapped: `HEAD` / "Current" is the GitHub commit (`mango`), "Incoming" is hers.
  Let her find it: "Which side has `pear`?"
- `git commit` instead of `git rebase --continue`. Ask what `git status` suggests.
- Wants `git push --force` after the rejection. Ask: "What would happen to the `mango` commit?"
- Edits the drawing in `task.js` during the rebase. Not wrong, but ask why `git status` shows it.

## What if

- You run `git rebase --abort` after resolving, before `--continue`. What is lost?
- The web edit had changed a different line. Would there be a conflict?

## Tips

- `git rebase --abort` is always safe mid-rebase. It brings back the state before.
- Push rejected → `git pull --rebase` → push. That's the everyday rescue.
- During a rebase, `git status` says "interactive rebase in progress" or "rebase in progress".

## Links

- git pull: https://git-scm.com/docs/git-pull
- Rebasing: https://git-scm.com/book/en/v2/Git-Branching-Rebasing
- Editing on GitHub: https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files
