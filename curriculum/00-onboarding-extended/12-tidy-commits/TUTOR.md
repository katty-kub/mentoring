# Tutor: tidy commits

Method: `../TUTOR.md`. Squashes her own branch with `reset --soft origin/main`, without `rebase -i`.
She knows the reset modes from reset-modes and the lease from rebase-on-main.
Her question: "How do you clean your own commits before a PR, and why only on your own branch?"

## Ladder

- Squash: "`origin/main` is where your branch started. What if the branch went back there, work kept?"
  → "Which mode from reset-modes keeps the work staged?"
- Push rejected: "GitHub has three commits, you have one. Is that a fast-forward?"

## Typical mistakes

- `git reset origin/main` without `--soft`: the changes are unstaged. Ask what `git status` shows in red.
- `git reset --hard`: the work is gone. Stop. Ask what `git reflog` shows.
- Follows git's `git pull` hint after the rejected push. That brings the messy commits back.
  Ask: "Which commits does GitHub have? Do you want them again?"
- Her local `main` or `origin/main` is old: the squash takes in other work. Ask her to `git fetch` first.

## What if

- The messy commits were on `main` already. Could you do this? Who would be hurt?
- Squash merge on GitHub makes one commit anyway. Why clean before the PR? (Reviewers read commits.)

## Tips

- `git show --stat HEAD` lists the files in the last commit.
- Habit: read `git log --oneline origin/main..HEAD` before every push.

## Links

- Undoing things: https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things
- git reset: https://git-scm.com/docs/git-reset
