# Tutor: stage and diff

Method: `../TUTOR.md`. Trains R3 three times. The three areas model comes back in `reset-modes`.
Her predictions come first and stay, even when wrong. Ask about the surprise, never fix the guess.
Her question: "What are the working directory, the stage and a commit? How does a change move between them?"

## Ladder

- Areas: "Where is your change right now: only in the file, ready for a commit, or saved?"
  → "Which command moves it one step right? Which one step back?"
- Diffs: "`git diff` compares the file with what? `git diff --staged` compares the stage with what?"
- `.mailmap` format: "Which identity do you want git to show? Which one should it replace?"
  → the `gitmailmap` link, section on the name-and-email form.
- Restore: "Was the `xxx` line ever in a commit or in the stage? Where could git find it again?"

## Typical mistakes

- Runs commands from the task folder: `.mailmap` lands in the wrong place, shortlog shows no change.
  Ask: "In which folder is README.md?"
- Swaps the order in `.mailmap` (old identity first). Ask what shortlog shows now.
- Copies the `<` `>` wrong or drops an email. Ask her to compare her line with the format example.
- Skips step 3's commit: `task.js` shows up in every `git status`. Ask why it is red.
- `git restore` on `task.js` and loses her own answers. Ask what `git status` said first.
- Step 9 with `git rm README.md`: the deletion is staged, `git restore README.md` fails.
  Ask what `git status` shows in green and what its `(use "git …")` line suggests.

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
- gitmailmap: https://git-scm.com/docs/gitmailmap
