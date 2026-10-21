# Tutor: cherry-pick

Method: `../TUTOR.md`. Explanation task; practice is optional. Task rescue-colleague uses it for a real rescue.
Her question: "What does cherry-pick do, and why does the copy get a new SHA?"

## Ladder

- New SHA: "What does a commit remember besides the change?" → "Is its parent the same on the other branch?"
- Merge vs cherry-pick: "The other branch has 10 commits. You need one. What would a merge bring?"
- Original merged later: "Both commits make the same change. What could git do with the second one?"

## Typical mistakes

- Cherry-picks while on the source branch. Ask her to run `git branch --show-current` first.
- Copies the SHA from the wrong line of `git log`. Ask which message belongs to that SHA.
- Starts the optional practice with unsaved answers in `task.js`. `git switch` may refuse.
  Ask what `git status` says.

## What if

- The picked commit changes a line that is different on your branch. What happens?
- You cherry-pick the same commit twice. What does git say?

## Tips

- `git cherry-pick --abort` works like `merge --abort`: back to the state before.
- Teams use it to bring one bug fix to an older release branch.

## Links

- git cherry-pick: https://git-scm.com/docs/git-cherry-pick
