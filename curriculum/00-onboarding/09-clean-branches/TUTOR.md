# Tutor: clean branches

Method: `../TUTOR.md`. Fixes the stale-branch mess from her `read-history` list.
She is the repo owner, so she can delete any branch on GitHub. The mentor's merged branches too.
`onboarding-pr` is her old `onboarding` branch, renamed by the mentor (PR #2).
Her question: "When is it safe to delete a branch?"

## Ladder

- Safe to delete: "Where must the work of a branch be, so deleting it loses nothing?"
  → "Where on GitHub can you check that?"
- `-d` refuses after squash: "Squash made a new commit on `main`. Does it have the same SHA as your
  branch commits?" → "So can git see that your commits are in `main`?"
- Closed PR: "Compare the files of PR #11 with a later PR. Which one has the same task?"
- `[gone]`: "Where did that branch live before? Where is it now?"

## Typical mistakes

- Deletes the branch she is on: git refuses. Ask: "Which branch are you on?"
- Deletes a branch without finding its PR first. Ask: "Where is its work now? How do you know?"
- Uses `-D` for everything without checking the PR. Ask how she knows nothing gets lost.
- Expects `fetch --prune` to delete her local branches. Ask what `[gone]` says, and what is still there.
- Deletes only on GitHub, local branches stay. Ask what `git branch` shows.

## What if

- You delete a branch on GitHub by mistake. Can you get it back?
- A branch has commits that are in no PR. What do you do before deleting it?

## Tips

- With "Automatically delete head branches" on, GitHub deletes merged PR branches by itself.
- `git fetch --prune` once a week keeps `git branch -a` honest.
- A merged or closed PR has a "Restore branch" button for its deleted branch.

## Links

- Remote branches: https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches
- git branch: https://git-scm.com/docs/git-branch
- Branches on GitHub: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository
- Deleting branches: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
- Restoring a PR branch: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request
