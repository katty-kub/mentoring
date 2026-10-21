# Tutor: merge conflict

Method: `../TUTOR.md`. Trains R1 and R2.
Her question: "What is a merge conflict, and why can't git solve it alone?"

## Ladder

- "Two branches changed the same line. Which one is right?" → "Who can know that: git or you?"
- Markers: "Read the file from `<<<<<<<` to `>>>>>>>`. Which part came from where?"
  → "What do `HEAD` and `main` mean in those lines?"
- After resolving: "What does `git status` say now? What does it suggest?"

## Typical mistakes

- Leaves one marker line. `node task.js` crashes: ask her to read the error's line number.
- `git commit -m` right after resolving, without `git add`. Ask what `git status` says.
- Keeps both fruit lines: `const` declared twice, `node task.js` crashes. Ask what the error says.
- Skips the commit in step 5: `git switch main` refuses. Ask what git says would be overwritten.
- Draws the merge without a merge commit. Ask: "How many parents does the new commit have?"

## What if

- You run `git merge main` while `task.js` has unsaved changes. What does git do?
- The conflict had 3 files. How do you know when all are fixed?

## Tips

- `git status` lists conflicted files under "Unmerged paths".
- VS Code shows "Accept Current / Incoming / Both" above each conflict. She should read both sides first.
- `git merge --abort` is always safe during a merge. It brings back the state before.

## Links

- Basic merge conflicts: https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
- GitHub: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
