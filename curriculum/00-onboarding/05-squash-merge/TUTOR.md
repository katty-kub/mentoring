# Tutor: squash merge

Method: `../TUTOR.md`. Her own PR: merging is the lesson. She is the repo owner; only she can change Settings.
Her question: "What does Squash and merge do, and why is the PR title so important then?"

## Ladder

- PR #14: "Where did the words `completed task` on `main` come from?" → "Who typed them, and where?"
- Squash: "Your branch has 3 commits. Squash makes one. Which message does that one get?"
  → "Which setting from step 5 decides it?"
- `branch -d` refuses: "Git looks for your commits in `main`. Are they there, with the same SHA?"
  → "Where can you check that the work really reached `main`?"
- Auto-delete: "Who deleted your branch on GitHub? When?"

## Typical mistakes

- Clicks the green button without opening the arrow. Ask her to read the button text.
- Rewrites the title in the squash field instead of the PR title. Ask: "Where should the good text live?"
  (A body in the field is fine: a revert needs one, see `COMMITS.md`.)
- Uses `git branch -D` first, without checking the PR. Ask: "How do you know nothing gets lost?"
- Forgets `git pull` on `main` and sees no new commit. Ask what `git status` says about `origin/main`.

## What if

- You keep working on the merged branch and open a second PR. What happens to the old commits?
- You rename an old PR on GitHub. Does the message on `main` change?

## Tips

- After a squash, the branch is done. The next task gets a new branch.
- GitHub adds ` (#NN)` to the PR title. That number links the commit to its PR.
- The menu under "Allow squash merging" also offers "Pull request title and description". This repo keeps
  only the title.

## Links

- Squash settings: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests
- Auto-delete branches: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
- Merge methods: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
