# Tutor: branches

Method: `../TUTOR.md`.
The naming rule lives in `README.md` and `AGENTS.md` → Git. Ask her to read it there; don't recite it.
Her question: "What is a branch, and why does each task get its own?"

## Ladder

- Label: "After `switch -c`, how many commits are new?" → "So what did git create?"
- HEAD: "Which word in `git log` sits next to your branch name? What moves when you commit?"
- Refused switch: "What does git say would be overwritten? Why would that be a loss?"
  → "What could you do with the change, so the file is clean?" → the stash link.
- Names: "Which part of a branch name tells the module? Which the task?"

## Typical mistakes

- `git stash pop` on the wrong branch. Ask which branch she stashed on.
- `git branch -d` instead of `-D` in step 9: git says not merged. Ask: "Was this branch ever merged?
  Do you need its commit?"
- Thinks deleting the branch deleted the commit forever. Leave it: `reflog` comes later.

## What if

- You run `git stash` twice. How do you get the first change back?
- You commit on `practice/branch-a` and forget to switch back. Where is your next commit?

## Tips

- `git branch --show-current` before every commit is a good habit.
- `git stash list` shows what is put aside. Old stashes are easy to forget.
- A branch costs nothing: one small file with one SHA in it.

## Links

- Branches in a nutshell: https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell
- Stashing: https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning
- git switch: https://git-scm.com/docs/git-switch
