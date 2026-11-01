# Tutor: squash merge

Method: `../TUTOR.md`. Her own PR: merging is the lesson. She is the repo owner; only she can change Settings.
Step 5 cleans the old branches. She can delete any branch on GitHub, the mentor's merged ones too.
Her question: "What does Squash and merge do, and why is the PR title so important then?"

## Ladder

- PR #14: "Where did the words `completed task` on `main` come from?" → "Who typed them, and where?"
- Squash: "Your branch has 2 commits. Squash makes one. Which message does that one get?"
  → "Which setting from step 4 decides it?"
- Safe to delete (step 5): "Where must the work of a branch be, so deleting it loses nothing?"
  → "Where on GitHub can you check that?"
- Closed PR (question 3): "Compare the files of PR #11 with a later PR. Which one has the same task?"
- Step 10, `-D`: "Squash made one new commit on `main`. Are your branch's commits there, with the same SHA?"
  → "Which step showed you that the work reached `main`?"
- Auto-delete: "Who deleted your branch on GitHub? When?"

## Step 5: old branches

She finds each branch's PR herself. Never list the branches or their PRs for her.

- `onboarding-pr` is her first branch `onboarding`, renamed by the mentor. Its PR is #2.
- A branch with a closed and a merged PR (`katy/01-print-types`): the merged one counts.
- `katy/05-check-nan`: PR #11 closed without merge, #12 solved the same task. She deletes it too.
- A mentor's branch: same rule. Merged → she deletes it. Open PR → it stays.

## Typical mistakes

- Clicks the green button without opening the arrow. Ask her to read the button text.
- Rewrites the title in the squash field instead of the PR title. Ask: "Where should the good text live?"
  (A body in the field is fine: a revert needs one, see `COMMITS.md`.)
- Deletes a branch before finding its PR. Ask: "Where is its work now? How do you know?"
- `git branch -d` refuses an old branch: squash gave `main` new SHAs. PR merged → `-D` is safe.
- Deletes her current branch `onboarding/squash-merge`: git refuses. Ask: "Which branch are you on?"
- Expects `fetch --prune` to delete her local branches. Ask what `git branch` still shows.
- Runs step 10 before the merge or before step 9. Ask: "How do you know nothing gets lost?"
- Forgets `git pull` on `main` and sees no new commit. Ask what `git status` says about `origin/main`.

## What if

- You keep working on the merged branch and open a second PR. What happens to the old commits?
- You rename an old PR on GitHub. Does the message on `main` change?
- You delete a branch on GitHub by mistake. Can you get it back?

## Tips

- After a squash, the branch is done. The next task gets a new branch.
- GitHub adds ` (#NN)` to the PR title. That number links the commit to its PR.
- The menu under "Allow squash merging" also offers "Pull request title and description". This repo keeps
  only the title.
- A merged or closed PR has a "Restore branch" button for its deleted branch.
- `git fetch --prune` once a week keeps `git branch -a` honest.

## Links

- Squash settings: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests
- Auto-delete branches: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
- Merge methods: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
- Restoring a PR branch: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request
