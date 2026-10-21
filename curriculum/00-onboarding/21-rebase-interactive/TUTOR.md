# Tutor: rebase interactive

Method: `../TUTOR.md`. Trains `rebase -i`, R2 (abort), `--force-with-lease`. Rehearsal for clean-history.
Her question: "What can `git rebase -i` do with your commits, and why only on your own branch?"

## Ladder

- Drawing: "Which of the five commits do real work? Which ones fix an earlier one? Which is junk?"
- Todo list: "Read the help at the bottom. Which word joins a commit into the one above it?"
  → "What is the difference between `squash` and `fixup`?"
- Order: "Which commit does `fix typo` fix? Which line is directly above it?"
- After the push rejection: "Your branch on GitHub has the old five commits. What would a plain push do?"

## Typical mistakes

- Follows git's `git pull` hint after the rejected push. That brings the old commits back.
  Ask: "Which commits does GitHub have? Do you want them again?"
- Edits the message text in the todo list. Git ignores it. Ask: "Which word changes a message?"
- Puts `squash` on the first line. Git refuses: nothing above it. Ask her to read the error.
- Closes the squash message tab without editing: the combined message keeps `wip` and `fix`.
  Ask her to compare `git log --oneline` with the drawing.
- Skips the commit in step 2: the drawing travels to `practice/messy` and lands in the `wip` commit.
  Ask: "Which branch has your drawing now? Which one should have it?"

## What if

- A colleague also has `practice/messy`. What happens to them after your force push? (force-push, rescue-colleague)
- You run `rebase -i` on `main`. Who is hurt? What would the team need to agree first? (clean-history)

## Tips

- `git rebase --abort` during a rebase, `git reset --hard ORIG_HEAD` right after it. Reflog always.
- Clean your own commits before opening a PR. Reviewers read them one by one.
- Teams without squash merge keep every commit forever. There, this is daily work.

## Links

- Rewriting history: https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History
- git rebase: https://git-scm.com/docs/git-rebase
