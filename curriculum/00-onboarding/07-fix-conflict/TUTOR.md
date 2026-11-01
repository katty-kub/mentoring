# Tutor: fix conflict

Method: `../TUTOR.md`. New: `git switch <branch>`, `git merge main`, `git merge --abort`.
Her question: "Your PR has a conflict with `main`. What do you do?"

Works on her existing PR branch `katy/10-trim-greeting`, not on `training/fix-conflict`. No new PR.
The branch was squash-merged once (#16). Then she committed more work on it (`wip(data-types)`).
Meanwhile `main` got Czech task comments (#17) and another solution of `07-number-or-parseint` (#13).
Expected conflicts: `03-plus-or-minus`, `06-isnan-or-number-isnan`, `07-number-or-parseint`,
`11-pin-check`. Trust `git status`, not this list. `08`–`10` are the same on both sides.
The task file of this task reaches her branch only through the merge in step 6.
Before step 6 her answers go in chat, not in `task.js`.

## Ladder

- Step 2: "What does GitHub say at the bottom of the PR? Which word is the most important?"
- Markers: "Read from `<<<<<<<` to `>>>>>>>`. Which part came from where?"
  → "What do `HEAD` and `main` mean in those lines?"
- Choosing: "Which side has the Czech comments? Which side has your code?"
- `07-number-or-parseint`: both sides are her work. "Which solution do you want to keep? Only one."
- After resolving: "What does `git status` say now? What does it suggest?"
- Question 1: "When did `main` change these lines? When did your branch?"
- Question 4: "Where does a new task start, after a merge?" (`README.md` → Každá dávka tasků)

## Typical mistakes

- Uses `git switch -c katy/10-trim-greeting`: `already exists`. Ask what `-c` does.
- Branch missing locally (`invalid reference`)? Did `git pull --ff-only` run on `main` first?
  After it, `git switch` creates the branch from `origin`.
- Leaves one marker line. `node` crashes: ask her to read the error's line number.
- Keeps both sides: a `const` declared twice, `node` crashes. Ask what the error says.
- Runs `git commit -m` without `git add`. Ask what `git status` says.
- Pushes before every conflicted file is resolved. Ask what `git status` listed under "Unmerged paths".

## What if

- You run `git merge main` while a file has unsaved changes. What does git do?
- The conflict had 10 files. How do you know when all are fixed?

## Tips

- `git status` lists conflicted files under "Unmerged paths".
- VS Code shows "Accept Current / Incoming / Both" above each conflict. Read both sides first.
- `git merge --abort` is always safe during a merge. It brings back the state before.
- A merged branch is done. Next work: a new branch from fresh `main`.

## Links

- Basic merge conflicts: https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
- GitHub: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
