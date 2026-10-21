# Tutor: rebase on main

Method: `../TUTOR.md`. Trains R1 via rebase and R6 with `--force-with-lease`. Same start as merge-conflict.
Her question: "When do you rebase on `main`, and why only on your own branch?"

## Ladder

- Concept: "In merge-conflict, how many parents did the new commit have? What if your commits just
  moved on top of `main` instead?"
- New SHAs: "A SHA is made from the content and the parent. Which one changed?"
- Rejected push: "GitHub has your old commits. Your branch has new ones. Is that a fast-forward?"
- Lease: "What if someone else pushed to your branch since you last looked?"

## Typical mistakes

- Follows git's `git pull` hint after the rejected push. That brings the old commits back.
  Ask: "Which commits does GitHub have? Do you want them again?"
- Skips `git pull` on `main` in step 5: `git rebase main` says up to date, no conflict. Ask what `main` contains.
- `git commit` instead of `git rebase --continue`. Ask what `git status` suggests.
- Plain `git push --force`. Ask what the difference is, and which one protects a colleague.
- Swapped sides in the markers: during rebase `HEAD` is `main`. Ask: "Which side has `banana`?"

## What if

- A colleague also works on branch B. What happens to them after your force push? (task bad-merge)
- Two of your commits touch the line. How many times do you resolve?

## Tips

- With squash, merge and rebase both end as one commit on `main`. Rebase keeps the branch tidy for review.
- `--force-with-lease` overwrites only if GitHub is where you last saw it.
- Golden rule: rebase only a branch nobody else works on.

## Links

- Rebasing: https://git-scm.com/book/en/v2/Git-Branching-Rebasing
- git push (`--force-with-lease`): https://git-scm.com/docs/git-push
