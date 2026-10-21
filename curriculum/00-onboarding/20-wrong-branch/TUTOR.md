# Tutor: wrong branch

Method: `../TUTOR.md`. Rescue: break with steps, fix alone. Trains R5. Explains the commits that reached
`main` without a PR. The fix uses `switch -c` (branches) and `reset --hard` (reset-modes) on purpose. She knows reflog already.
Her question: "You committed on `main` by mistake. How do you move the commit to a branch?"

## Ladder

- "Where is the commit now? Where should it be?" → "What makes a new branch, starting where you are?"
- "The branch keeps the commit. What should `main` point at?" → "Which commit is `origin/main`?"
- Before `reset --hard`: "Which branch are you on? What gets lost? Where is it still safe?"
  → "What does `git log origin/main..main` list?"
- Restore commits (question 3): "Do they have a PR number or a merge commit next to them?"

## Typical mistakes

- `git reset --hard origin/main` before `git switch -c`. The commit looks gone. Don't fix it for her:
  ask "Which task brought lost commits back?" She knows reflog: let her use it.
- `git reset --hard HEAD~1` instead of `origin/main`. Works here, but ask: "What if there were two commits?"
- Pushes `main` to "fix" the ahead message. Ask what `main` on GitHub would contain then.

## What if

- You also pushed `main` already. Is this fix still allowed? (Leads to bad-merge, protect-main, revert-merge.)
- The commit belongs on a branch that already exists. Which task's command helps? (cherry-pick)

## Tips

- `pull.ff only` from git-config turns many wrong-branch accidents into a loud error.
- Habit: `git branch --show-current` before every commit.

## Links

- git reset: https://git-scm.com/docs/git-reset
- Reset demystified: https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified
