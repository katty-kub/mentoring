# Tutor: ignore files

Method: `../TUTOR.md`. Builds on stage-and-diff: untracked files and an empty `git diff` come back.
Her question: "Which files don't belong in git, and how do you keep them out?"

## Ladder

- Untracked: "Under which heading does `git status` list the new files? What does git do with them?"
- Patterns: "Which files does `*.log` match? Would it match `log.txt`?"
- Pattern format: the gitignore link.

## Typical mistakes

- Runs commands from the task folder: `.env` lands in the wrong place. Ask: "In which folder is README.md?"
- Writes a new `.gitignore` in the task folder. It works only there. Ask which `.gitignore` `git status` shows.
- `git add .` or `git add -A` before step 5: `.env` is staged. Ask what `git status` shows in green.
  `git restore --staged` from stage-and-diff fixes it.
- Commits `.env`. Stop her before push: ask what `git show --stat HEAD` lists.
  Undoing a commit comes later (reset-modes). Now: back to `main`, `branch -D` this branch, steps again.
- Writes `.log` instead of `*.log`. `debug.log` still shows in `git status`. Ask what the `*` adds.

## What if

- `.env` was already committed and pushed. Does adding it to `.gitignore` remove it from GitHub?
- You add `!important.log` under `*.log`. What does `git status` show for `important.log`?
- Later you install packages into `node_modules/`. Should git track that folder? Why not?

## Tips

- `.gitignore` works only for files git doesn't track yet.
- A password that reached GitHub is public. Change the password; deleting the file is not enough.
- `git status --ignored` lists the ignored files too.
- GitHub keeps ready `.gitignore` templates for each language.

## Links

- Ignoring files: https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository
- gitignore: https://git-scm.com/docs/gitignore
- Templates: https://github.com/github/gitignore
