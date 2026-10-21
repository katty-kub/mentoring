# Tutor: reflog

Method: `../TUTOR.md`. Guided first loss (reflog is new), second loss fixed alone. Trains R7 ×2.
Answers the question from reset-modes: a hard-reset commit is not gone forever. Comes before tidy-commits
and clean-history: the safety net before `reset --hard` on `main`.
Her question: "Your commits disappeared after `reset --hard`. How do you get them back?"

## Ladder

- First loss (guided): "Find the line with the message `pick cherry`. What is on the left of it?"
  → "Which command from reset-modes moves a branch to a commit?"
- Deleted branch: "A branch is just a label. Did deleting the label delete the commits?"
  → "Which command from branches makes a new branch? Can it start at a SHA?"

## Typical mistakes

- Resets to the `HEAD@{n}` line of the reset itself, not the one before it. Ask: "Read the message on
  that line. Is it the commit you want?"
- Picks the `pick banana` SHA. Only one commit returns. Ask what `git log --oneline -2` shows.
- Thinks uncommitted changes come back too. Ask question 3 before she tries.

## What if

- You never committed `cherry`, only saved the file, then ran `reset --hard`. What does reflog show?

## Tips

- `git reflog` is the first command after "I lost something". Before any other fix.
- Reflog entries expire after about 90 days. Committed work is almost never lost; uncommitted can be.

## Links

- git reflog: https://git-scm.com/docs/git-reflog
- Revision selection (reflog shortnames): https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection
