# Tutor: first pull request

Method: `../TUTOR.md`. New: `git status`, `git switch`, `git add`, `git commit`, `git push -u`.
Her question: "Why does all work go through a pull request, not straight to `main`?"

## Ladder

- Printing: "What have you seen in code that shows something in the terminal?"
  → "Which object did that code start with?" → `console.log` + MDN link.
- Branch: "You and a friend edit the same file at once. What could go wrong?"
  → "How could each of you get your own copy?"
- Staging: "What does `git status` list in red, what in green?" → "What changed between the two runs?"
- Push rejected: she reads the error out loud first. What does it suggest?

## Typical mistakes

- `node task.js` from the repo root: file not found. Ask: "Which folder is your terminal in?"
- Committing on `main`, no branch made. Ask her what the first line of `git status` says.
- No quotes around the text in `console.log`.
- First `git push` without `-u origin <branch>`.

## What if

- You forget `git switch -c`. Which branch gets your commit?

## Tips

- `console.log` prints several things at once: two values, separated by a comma.
- Everyone has committed to the wrong branch once. `git switch -c` is the habit that saves you.

## Links

- console.log: https://developer.mozilla.org/en-US/docs/Web/API/console/log_static
- Pull requests: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
- Git basics: https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository
