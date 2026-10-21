# Tutor: fetch and pull

Method: `../TUTOR.md`. Predict task: no conflict yet, only a fast-forward.
She plays the colleague: a web edit on her own branch (step 4). No mentor needed.
Her question: "What is the difference between `git fetch` and `git pull`?"

## Ladder

- "Where does `git status` get its information about GitHub? When did it last ask?"
  → "Which command asks GitHub without changing your files?"
- Range: "`A..B` means: in B, but not in A. What is in `origin/<branch>` but not in your `HEAD`?"
- Pull: "Your branch has nothing new, GitHub's has one commit. What is the simplest thing git can do?"

## Typical mistakes

- Edits `task.js` locally after the web edit. `git pull` may refuse. Ask what `git status` says.
- Runs `git pull` before `git fetch` and `git status`. The "behind 1" moment is lost. Ask her to predict first.
- The first `git status` already says "behind": an editor fetched for her. The repo's `.vscode/settings.json`
  turns VS Code auto-fetch off. Ask which tool she used, and what it did without asking.
- Reads `up to date` as "same as GitHub". Ask: "Up to date with what, and since when?"
- Edits on GitHub on `main` instead of her branch. Ask which branch the web editor showed.

## What if

- You and GitHub both have new commits. What does `git pull` do with `pull.ff only`? (task pull-conflict)
- You run `git fetch` twice. What changes the second time?

## Tips

- `git fetch` is always safe: it changes no branch of yours, only `origin/…`.
- Habit: `git fetch` + `git status` before you start work on a shared branch.
- `git log --oneline main..HEAD` shows what your branch adds to `main`.

## Links

- Remote branches: https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches
- git fetch: https://git-scm.com/docs/git-fetch
- Review feedback: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
