# Tutor: stage and diff

Method: `../TUTOR.md`. Trains R3. The three areas model comes back in `reset-modes` and `tidy-commits`.
Her question: "What are the working directory, the stage and a commit? How does a change move between them?"

## Ladder

- Areas: "Where is your change right now: only in the file, ready for a commit, or saved?"
  → "Which command moves it one step right? Which one step back?"
- Diffs: "`git diff` compares the file with what? `git diff --staged` compares the stage with what?"
- Restore: "Was the `xxx` line ever in a commit or in the stage? Where could git find it again?"

## Typical mistakes

- Runs commands from the task folder: `README.md` is not found. Ask: "In which folder is README.md?"
- `git restore` on `task.js` and loses her own answers. Ask what `git status` said first.

## What if

- You `git add` a file, then change it again. What does `git status` show?
- You `git restore` a file you never committed. What happens?

## Tips

- `git status` always says how to go back: read the `(use "git …")` lines.
- `git diff` shows nothing for a new file. Git doesn't track it yet.
- `git restore` without `--staged` throws away work in the file. Check `git diff` first.

## Links

- Recording changes: https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository
- git restore: https://git-scm.com/docs/git-restore
