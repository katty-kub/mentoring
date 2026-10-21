# Tutor: reset modes

Method: `../TUTOR.md`. Predict task: all six tips are written and committed before step 3.
Builds on the three areas from stage-and-diff. Question 3 stays open until task reflog.
Her question: "What do `reset --soft`, `--mixed` and `--hard` each keep?"

## Ladder

- "Draw the three boxes from stage-and-diff. Where is `kiwi` after the commit?"
  → "`reset` always moves the branch back. Which boxes does each mode also clear?"
- Mixed: "What colour does `git status` use for a change that is not staged?"
- Hard: "Before you run it: which uncommitted work would disappear right now?"

## Typical mistakes

- Writes tips on `practice/reset`, then `reset --hard` deletes them. Step 2 prevents it; ask where she is.
- Forgets `git add` before recommitting in step 5: `nothing added to commit`. Ask what `git status` says.
- Thinks `--hard` deletes the commit for good. Don't correct: question 3 waits for task reflog.
- `git branch -D` while on `practice/reset`: git refuses. Ask which branch she is on.

## What if

- You had an unsaved change in another file before `reset --hard`. Where is it now?
- `git reset --soft HEAD~2`. What would be staged?

## Tips

- Plain `git reset HEAD~1` is `--mixed`: the default.
- `reset --soft HEAD~1` = "undo the commit, keep everything ready to commit again".
- Rule: `git status` before every `reset --hard`. Uncommitted work it drops is gone for good.

## Links

- Reset demystified: https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified
- git reset: https://git-scm.com/docs/git-reset
