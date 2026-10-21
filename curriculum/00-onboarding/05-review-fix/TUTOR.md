# Tutor: review fix

Method: `../TUTOR.md`. New: `git push` without `-u`, PR description.
Her question: "How do you work in review comments?"

The review is only R1 and R2 in `task.js`. Don't review her PR yourself.

## Ladder

- Scope (question 1): "What did the task ask you to change? Who decides about the rest?"
- Plain push: "What did `-u` do in your first push of this branch?"
- Same PR: "Which branch does the PR show? Where did your new commit go?"
- Merge timing (question 4): "What did your PR still miss after step 4?"

## Typical mistakes

- Fixes the typo in step 2. Ask what the task asked for. Leave it, R1 still applies.
- Merges right after step 4. Ask what the Review section says.
- Opens a second PR for the fix. Ask what the first PR shows after `git push`.
- Forgets R2: the PR description stays without "how I checked it".

## What if

- You push the fix to a different branch. Does the reviewer see it in your PR?

## Tips

- A PR is a branch on display: every push to that branch updates it.
- A good description: what changed, why, how you checked it.
- After squash only one commit lands on `main`, with the PR title.

## Links

- Pull requests: https://docs.github.com/en/pull-requests
