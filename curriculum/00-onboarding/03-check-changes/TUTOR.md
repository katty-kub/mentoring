# Tutor: check changes

Method: `../TUTOR.md`. New: `git diff`, `git diff --staged`.
Her question: "How do you know exactly what goes into a commit, before you make it?"

## Ladder

- Areas: "Where is your change now: only in the file, or picked for the commit?"
- Diffs: "`git diff` compares the file with what? `git diff --staged` compares the commit-to-be with what?"
- New file: "Does git know `notes.txt` yet? What did `git status` call it?"
- `git add .`: "What does the dot mean in a path?"

## Typical mistakes

- `git diff` is empty after `git add`: she thinks the change is gone. Ask what `--staged` shows.
- Runs `git add .` out of habit: `notes.txt` gets staged. Don't fix it with `restore`.
  Deleting it is not enough: it stays staged. Delete `notes.txt`, then `git add notes.txt`
  (stages the deletion). Ask what `git status` shows now.
- Edits the task comments instead of the code line.

## What if

- You change the file again after `git add`. What does `git status` show?

## Tips

- `git diff` shows nothing for a new file. Git doesn't track it yet.
- `git diff --staged` right before `git commit`: the last look.
- `git status` lists red = not picked, green = picked for the commit.

## Links

- git diff: https://git-scm.com/docs/git-diff
- Recording changes: https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository
